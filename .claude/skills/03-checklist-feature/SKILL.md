# ✅ Skill: Checklist de Feature Dizevolv

## Descrição
Esta skill fornece um checklist completo e estruturado para implementar features em projetos Dizevolv, garantindo qualidade, segurança e completude em cada entrega.

## 🎯 Fase 1: Planejamento

### Análise de Requisitos
- [ ] **Entender o problema**: Qual problema esta feature resolve?
- [ ] **Definir escopo**: O que está incluído/excluído?
- [ ] **Identificar usuários**: Quem vai usar esta feature?
- [ ] **Listar dependências**: Outras features ou serviços necessários?
- [ ] **Estimar complexidade**: Simples, Média ou Alta?

### Design Técnico
- [ ] **Estrutura de dados**: Quais tabelas/tipos são necessários?
- [ ] **Fluxo de dados**: Como os dados fluem pela aplicação?
- [ ] **UI/UX**: Quais componentes visuais são necessários?
- [ ] **APIs**: Quais endpoints precisam ser criados?
- [ ] **Segurança**: Quais permissões e validações necessárias?

### Exemplo de Planejamento
```markdown
## Feature: Sistema de Comentários

**Problema**: Usuários precisam comentar em posts
**Escopo**: CRUD de comentários, notificações, moderação
**Usuários**: Todos autenticados
**Dependências**: Sistema de posts, autenticação
**Complexidade**: Média

**Estrutura de dados**:
- Tabela: comments (id, post_id, user_id, content, created_at)
- RLS: Usuários veem todos, só editam próprios

**Fluxo**:
1. User digita comentário
2. Validação client-side
3. API valida e salva no Supabase
4. Real-time atualiza UI
5. Notificação para autor do post

**UI**:
- CommentForm (input + botão)
- CommentList (lista de comentários)
- CommentItem (comentário individual)

**APIs**:
- POST /api/comments - Criar
- GET /api/comments/[postId] - Listar
- PATCH /api/comments/[id] - Editar
- DELETE /api/comments/[id] - Deletar
```

## 🗄️ Fase 2: Database (Supabase)

### Schema
- [ ] **Criar tabela(s)**: Definir colunas e tipos
- [ ] **Relações**: Configurar foreign keys
- [ ] **Índices**: Criar índices para performance
- [ ] **Timestamps**: Adicionar `created_at`, `updated_at`
- [ ] **Soft delete**: Considerar `deleted_at` se aplicável

### Exemplo de Migration
```sql
-- Criar tabela comments
create table public.comments (
  id uuid default gen_random_uuid() primary key,
  post_id uuid references public.posts(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  content text not null check (char_length(content) >= 1 and char_length(content) <= 1000),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Criar índices
create index comments_post_id_idx on public.comments(post_id);
create index comments_user_id_idx on public.comments(user_id);
create index comments_created_at_idx on public.comments(created_at desc);

-- Habilitar Row Level Security
alter table public.comments enable row level security;
```

### Row Level Security (RLS)
- [ ] **Policy de SELECT**: Quem pode ler?
- [ ] **Policy de INSERT**: Quem pode criar?
- [ ] **Policy de UPDATE**: Quem pode editar?
- [ ] **Policy de DELETE**: Quem pode deletar?
- [ ] **Testar policies**: Verificar em diferentes contextos

### Exemplo de RLS Policies
```sql
-- Qualquer pessoa autenticada pode ler comentários
create policy "Comentários são públicos"
  on public.comments for select
  to authenticated
  using (true);

-- Usuários podem criar comentários
create policy "Usuários podem criar comentários"
  on public.comments for insert
  to authenticated
  with check (auth.uid() = user_id);

-- Usuários podem editar próprios comentários
create policy "Usuários podem editar próprios comentários"
  on public.comments for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Usuários podem deletar próprios comentários
create policy "Usuários podem deletar próprios comentários"
  on public.comments for delete
  to authenticated
  using (auth.uid() = user_id);
```

### Types
- [ ] **Gerar tipos**: `npx supabase gen types typescript`
- [ ] **Atualizar types**: Copiar para `types/supabase.ts`
- [ ] **Tipos helper**: Criar types auxiliares se necessário

```typescript
// types/comments.ts
import type { Database } from './supabase';

export type Comment = Database['public']['Tables']['comments']['Row'];
export type CommentInsert = Database['public']['Tables']['comments']['Insert'];
export type CommentUpdate = Database['public']['Tables']['comments']['Update'];

// Type helper com dados relacionados
export type CommentWithUser = Comment & {
  user: {
    id: string;
    name: string;
    avatar_url: string | null;
  };
};
```

## 🎨 Fase 3: Frontend

### Componentes UI
- [ ] **Componentes base**: Usar Shadcn quando possível
- [ ] **Componentes custom**: Criar componentes específicos
- [ ] **Layouts**: Organizar estrutura visual
- [ ] **Estados**: Loading, error, empty, success
- [ ] **Responsividade**: Mobile-first design

### Estrutura de Componentes
```
components/
├── comments/
│   ├── CommentForm.tsx          # Client Component
│   ├── CommentList.tsx          # Server Component
│   ├── CommentItem.tsx          # Client Component
│   ├── CommentSkeleton.tsx      # Loading state
│   └── EmptyComments.tsx        # Empty state
```

### Exemplo: Server Component (Lista)
```typescript
// components/comments/CommentList.tsx
import { createServerClient } from '@/lib/supabase/server';
import { CommentItem } from './CommentItem';
import { EmptyComments } from './EmptyComments';
import type { CommentWithUser } from '@/types/comments';

interface CommentListProps {
  postId: string;
}

export async function CommentList({ postId }: CommentListProps) {
  const supabase = createServerClient();

  const { data: comments, error } = await supabase
    .from('comments')
    .select(`
      *,
      user:users(id, name, avatar_url)
    `)
    .eq('post_id', postId)
    .order('created_at', { ascending: false });

  if (error) {
    return <div>Erro ao carregar comentários</div>;
  }

  if (comments.length === 0) {
    return <EmptyComments />;
  }

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
```

### Exemplo: Client Component (Form)
```typescript
// components/comments/CommentForm.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

interface CommentFormProps {
  postId: string;
}

export function CommentForm({ postId }: CommentFormProps) {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!content.trim()) {
      toast({
        title: 'Comentário vazio',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId, content }),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar comentário');
      }

      toast({ title: 'Comentário criado!' });
      setContent('');
      router.refresh(); // Revalidate server component
    } catch (error) {
      toast({
        title: 'Erro ao criar comentário',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Escreva seu comentário..."
        maxLength={1000}
        disabled={isSubmitting}
      />
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          {content.length}/1000
        </span>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Comentar'}
        </Button>
      </div>
    </form>
  );
}
```

### Estados Visuais
- [ ] **Loading**: Skeletons ou spinners
- [ ] **Error**: Mensagens claras e ações
- [ ] **Empty**: UI amigável quando vazio
- [ ] **Success**: Feedback visual de sucesso

## 🔌 Fase 4: API Routes

### Validação
- [ ] **Schema Zod**: Definir esquema de validação
- [ ] **Validar inputs**: Todos os dados de entrada
- [ ] **Sanitização**: Limpar dados quando necessário
- [ ] **Rate limiting**: Prevenir abuso

### Exemplo: POST /api/comments
```typescript
// app/api/comments/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerClient } from '@/lib/supabase/server';

const createCommentSchema = z.object({
  postId: z.string().uuid(),
  content: z.string().min(1).max(1000),
});

export async function POST(request: NextRequest) {
  try {
    // 1. Autenticação
    const supabase = createServerClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Não autenticado' },
        { status: 401 }
      );
    }

    // 2. Validação
    const body = await request.json();
    const { postId, content } = createCommentSchema.parse(body);

    // 3. Verificar se post existe
    const { data: post } = await supabase
      .from('posts')
      .select('id')
      .eq('id', postId)
      .single();

    if (!post) {
      return NextResponse.json(
        { error: 'Post não encontrado' },
        { status: 404 }
      );
    }

    // 4. Criar comentário
    const { data: comment, error } = await supabase
      .from('comments')
      .insert({
        post_id: postId,
        user_id: user.id,
        content: content.trim(),
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    // 5. Retornar sucesso
    return NextResponse.json(comment, { status: 201 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Erro ao criar comentário:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
```

### Endpoints Necessários
- [ ] **CREATE**: POST endpoint com validação
- [ ] **READ**: GET endpoint (se não usar Server Component)
- [ ] **UPDATE**: PATCH/PUT endpoint
- [ ] **DELETE**: DELETE endpoint
- [ ] **Documentar**: Adicionar comentários JSDoc

## 🧪 Fase 5: Testes

### Testes Unitários
- [ ] **Utils**: Testar funções utilitárias
- [ ] **Validations**: Testar schemas Zod
- [ ] **Helpers**: Testar funções auxiliares

### Testes de Integração
- [ ] **API Routes**: Testar endpoints
- [ ] **Database**: Testar queries Supabase
- [ ] **Auth**: Testar fluxos de autenticação

### Testes E2E (Opcional)
- [ ] **Fluxo completo**: Testar jornada do usuário
- [ ] **Edge cases**: Testar casos extremos

## 🔒 Fase 6: Segurança

### Checklist de Segurança
- [ ] **RLS ativo**: Todas as tabelas protegidas
- [ ] **Validação**: Todos os inputs validados
- [ ] **Sanitização**: XSS prevention
- [ ] **Rate limiting**: Proteção contra abuso
- [ ] **CSRF**: Proteção habilitada
- [ ] **Secrets**: Nenhum secret exposto
- [ ] **SQL Injection**: Prevenir através do Supabase client
- [ ] **Logs**: Sem dados sensíveis em logs

## 🚀 Fase 7: Performance

### Otimizações
- [ ] **Database**: Índices criados
- [ ] **Queries**: Select apenas campos necessários
- [ ] **Caching**: Strategy definida
- [ ] **Images**: Otimizadas com next/image
- [ ] **Code splitting**: Dynamic imports quando apropriado
- [ ] **Bundle size**: Verificar tamanho do bundle

## ♿ Fase 8: Acessibilidade

### Checklist A11y
- [ ] **Semântica**: HTML semântico correto
- [ ] **ARIA**: Labels e roles quando necessário
- [ ] **Keyboard**: Navegação por teclado funcional
- [ ] **Screen readers**: Testado com leitor de tela
- [ ] **Contraste**: Cores com contraste adequado
- [ ] **Focus**: Estados de foco visíveis

## 📱 Fase 9: Responsividade

### Breakpoints Tailwind
- [ ] **Mobile**: sm (640px) - Layout mobile
- [ ] **Tablet**: md (768px) - Layout tablet
- [ ] **Desktop**: lg (1024px) - Layout desktop
- [ ] **Large**: xl (1280px), 2xl (1536px)

### Testar em Dispositivos
- [ ] Mobile (< 640px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (> 1024px)

## 📝 Fase 10: Documentação

### Documentar
- [ ] **README**: Atualizar se necessário
- [ ] **JSDoc**: Funções complexas documentadas
- [ ] **Comentários**: Lógica não óbvia explicada
- [ ] **Types**: Interfaces e types documentados
- [ ] **APIs**: Endpoints documentados

### Exemplo de JSDoc
```typescript
/**
 * Cria um novo comentário em um post
 *
 * @param postId - ID do post onde comentar
 * @param content - Conteúdo do comentário (1-1000 caracteres)
 * @returns Promise com o comentário criado
 * @throws {Error} Se usuário não autenticado ou post não existe
 *
 * @example
 * const comment = await createComment('post-123', 'Ótimo post!');
 */
export async function createComment(
  postId: string,
  content: string
): Promise<Comment> {
  // ...
}
```

## ✅ Fase 11: Review & QA

### Code Review
- [ ] **Padrões**: Seguindo padrões Dizevolv
- [ ] **Types**: Sem any, todos tipados
- [ ] **Security**: Checklist de segurança OK
- [ ] **Performance**: Otimizações implementadas
- [ ] **A11y**: Checklist de acessibilidade OK

### Quality Assurance
- [ ] **Funcional**: Feature funciona como esperado
- [ ] **Edge cases**: Casos extremos testados
- [ ] **Errors**: Tratamento de erros adequado
- [ ] **UX**: Experiência do usuário fluida
- [ ] **Mobile**: Responsivo em todos dispositivos

### Testes Manuais
- [ ] Criar comentário
- [ ] Editar comentário
- [ ] Deletar comentário
- [ ] Validações funcionando
- [ ] Loading states corretos
- [ ] Error states corretos

## 🎉 Fase 12: Deploy

### Pre-Deploy
- [ ] **Build**: `npm run build` sem erros
- [ ] **Lint**: `npm run lint` sem erros
- [ ] **Types**: `npm run type-check` sem erros
- [ ] **Tests**: Todos os testes passando

### Deploy
- [ ] **Migrations**: Supabase migrations aplicadas
- [ ] **Env vars**: Variáveis configuradas
- [ ] **Deploy**: Deploy realizado
- [ ] **Smoke test**: Teste básico em produção

### Post-Deploy
- [ ] **Monitor**: Verificar logs por erros
- [ ] **Analytics**: Verificar uso da feature
- [ ] **Feedback**: Coletar feedback dos usuários

---

## 📋 Checklist Resumido

Use este checklist rápido para cada feature:

```markdown
## Feature: [Nome]

### Database
- [ ] Schema criado
- [ ] Índices adicionados
- [ ] RLS configurado
- [ ] Types gerados

### Frontend
- [ ] Componentes criados
- [ ] Estados visuais (loading, error, empty)
- [ ] Responsivo
- [ ] Acessível

### Backend
- [ ] API routes criadas
- [ ] Validação implementada
- [ ] Autenticação verificada
- [ ] Erros tratados

### Quality
- [ ] Segurança checklist OK
- [ ] Performance otimizada
- [ ] Testes escritos
- [ ] Documentado

### Deploy
- [ ] Build sem erros
- [ ] Migrations aplicadas
- [ ] Deploy realizado
- [ ] Testado em produção
```

---

**Quando usar esta skill**: Ao iniciar a implementação de qualquer feature nova, use este checklist para garantir que nada seja esquecido e a entrega seja completa e profissional.
