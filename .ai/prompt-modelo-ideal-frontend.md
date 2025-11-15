# 🎯 Prompt Modelo Ideal para IA de Desenvolvimento Frontend

> **Versão**: 1.0
> **Última atualização**: 2025-11-15
> **Uso**: Copie este prompt e customize conforme sua necessidade específica

---

## 📋 Template de Prompt Completo

```markdown
# Contexto do Projeto

Você é um desenvolvedor frontend especializado em Next.js + Supabase, trabalhando em [NOME DO PROJETO].

## 📚 Documentação de Referência

Antes de começar, LEIA estes arquivos para entender o projeto:

1. **Contexto Geral**: `.ai/contexto-projeto.md`
   - Stack tecnológica completa
   - Padrões de código estabelecidos
   - Estrutura de pastas
   - Decisões técnicas importantes

2. **Especificação da Feature**: `docs/03-ESPECIFICACAO.md`
   - User stories
   - Regras de negócio
   - Casos de uso
   - Critérios de aceitação

3. **Arquitetura**: `docs/02-ARQUITETURA.md`
   - Fluxos de dados
   - Padrões de componentes
   - Estratégias de cache

4. **Banco de Dados**: `docs/04-BANCO-DE-DADOS.md`
   - Schema completo
   - RLS policies
   - Relacionamentos

5. **Padrões de Código**: `.claude/skills/02-padroes-codigo/SKILL.md`
   - Clean code guidelines
   - Type safety
   - Segurança
   - Performance

---

## 🎯 Feature a Implementar

**Nome**: [NOME DA FEATURE]

**Descrição**: [BREVE DESCRIÇÃO DO QUE PRECISA SER FEITO]

**Tipo**:
- [ ] Nova feature completa
- [ ] Componente isolado
- [ ] Correção de bug
- [ ] Refatoração
- [ ] Melhorias de UI/UX

**Prioridade**: [Alta / Média / Baixa]

---

## 📝 Especificação Detalhada

### User Stories

```
Como [tipo de usuário]
Quero [ação/funcionalidade]
Para [benefício/objetivo]

Critérios de Aceitação:
- [ ] [Critério 1]
- [ ] [Critério 2]
- [ ] [Critério 3]
```

### Regras de Negócio

1. [Regra 1]
2. [Regra 2]
3. [Regra 3]

### Validações Necessárias

- **Campo X**: [Regras de validação]
- **Campo Y**: [Regras de validação]
- **Campo Z**: [Regras de validação]

### Casos Especiais / Edge Cases

1. [Caso especial 1]
2. [Caso especial 2]
3. [Caso especial 3]

---

## 🏗️ Arquitetura da Implementação

### Stack Tecnológica

- **Framework**: Next.js 14+ (App Router)
- **Linguagem**: TypeScript (strict mode)
- **Estilização**: Tailwind CSS v4
- **Componentes UI**: shadcn/ui
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Validação**: Zod
- **Forms**: React Hook Form (se necessário)

### Estrutura de Arquivos a Criar/Modificar

```
app/
└── (dashboard)/
    └── [feature-name]/
        ├── page.tsx                    # Página principal (Server Component)
        ├── loading.tsx                 # Loading skeleton
        └── [id]/
            └── page.tsx                # Página de detalhes

components/
└── features/
    └── [feature-name]/
        ├── FeatureList.tsx             # Lista de itens
        ├── FeatureCard.tsx             # Card de item individual
        ├── FeatureCreateForm.tsx       # Formulário de criação
        ├── FeatureEditForm.tsx         # Formulário de edição
        └── FeatureDeleteDialog.tsx     # Dialog de confirmação

lib/
├── validations/
│   └── [feature-name].ts               # Schemas Zod
└── actions/
    └── [feature-name].ts               # Server Actions (opcional)

types/
└── index.ts                            # Adicionar types da feature
```

---

## ✅ Checklist de Implementação

Siga rigorosamente este checklist, marcando cada item conforme completa:

### Fase 1: Planejamento (5-10 min)

- [ ] Li e compreendi toda a especificação
- [ ] Identifiquei todas as dependências (tabelas, outras features, APIs)
- [ ] Listei todos os arquivos que precisarão ser criados/modificados
- [ ] Confirmei com você antes de prosseguir

### Fase 2: Types & Validations (10-15 min)

- [ ] Criei/atualizei types em `types/index.ts`
- [ ] Criei schemas Zod em `lib/validations/[feature-name].ts`
- [ ] Validações incluem:
  - [ ] Campos obrigatórios
  - [ ] Tipos corretos (email, url, date, etc.)
  - [ ] Lengths min/max
  - [ ] Custom validations se necessário
  - [ ] Mensagens de erro em português

### Fase 3: Componentes Base (20-30 min)

#### Server Components (Páginas)

- [ ] **Página de Listagem** (`app/(dashboard)/[feature]/page.tsx`)
  - [ ] Fetch de dados usando Supabase Server Client
  - [ ] Renderização de lista usando Server Component
  - [ ] Loading state com `loading.tsx`
  - [ ] Empty state quando não há dados
  - [ ] Botão "Criar Novo" visível
  - [ ] Tratamento de erros adequado

- [ ] **Página de Detalhes** (`app/(dashboard)/[feature]/[id]/page.tsx`)
  - [ ] Fetch de dados do item específico
  - [ ] Renderização de todos os campos
  - [ ] Botões de ação (Editar, Deletar)
  - [ ] Loading state
  - [ ] Not found (404) se ID não existir
  - [ ] Breadcrumbs de navegação

#### Client Components (Interatividade)

- [ ] **Lista Component** (`components/features/[feature]/FeatureList.tsx`)
  - [ ] Props bem tipadas
  - [ ] Renderiza array de itens
  - [ ] Link para página de detalhes
  - [ ] Responsivo (grid/flex adequado)
  - [ ] Skeleton/Loading state

- [ ] **Card Component** (`components/features/[feature]/FeatureCard.tsx`)
  - [ ] Mostra informações principais
  - [ ] Visual atrativo e consistente
  - [ ] Ações rápidas (editar, deletar)
  - [ ] Hover states
  - [ ] Accessibility (ARIA labels)

- [ ] **Create Form** (`components/features/[feature]/FeatureCreateForm.tsx`)
  - [ ] 'use client' no topo
  - [ ] React Hook Form integrado
  - [ ] Validação Zod (client-side)
  - [ ] Todos os campos necessários
  - [ ] Labels descritivos
  - [ ] Placeholders úteis
  - [ ] Submit handler com loading state
  - [ ] Mensagens de erro por campo
  - [ ] Toast de sucesso
  - [ ] Redirect após criação
  - [ ] Botão desabilitado durante submit

- [ ] **Edit Form** (`components/features/[feature]/FeatureEditForm.tsx`)
  - [ ] Similar ao Create Form
  - [ ] Pré-preenche dados existentes
  - [ ] Validação Zod
  - [ ] Loading states
  - [ ] Success feedback
  - [ ] Botão cancelar

- [ ] **Delete Dialog** (`components/features/[feature]/FeatureDeleteDialog.tsx`)
  - [ ] Modal/Dialog de confirmação
  - [ ] Mensagem clara do que será deletado
  - [ ] Botões Cancelar e Confirmar
  - [ ] Loading state no botão
  - [ ] Toast de sucesso/erro
  - [ ] Redirect após deletar

### Fase 4: Integração com Backend (15-20 min)

- [ ] **Queries Supabase**
  - [ ] Uso correto de `createServerClient()` em Server Components
  - [ ] Uso correto de `createBrowserClient()` em Client Components
  - [ ] Select apenas campos necessários (não `*`)
  - [ ] Filters e ordenação adequados
  - [ ] Joins otimizados se necessário
  - [ ] Error handling em todas as queries

- [ ] **Mutations**
  - [ ] Insert com validação
  - [ ] Update com validação
  - [ ] Delete com confirmação
  - [ ] Tratamento de erros específicos
  - [ ] Rollback se necessário

- [ ] **RLS Verification**
  - [ ] Testei que usuários veem apenas seus dados
  - [ ] Testei que não podem editar dados de outros
  - [ ] Testei que não podem deletar dados de outros
  - [ ] Policies do Supabase estão corretas

### Fase 5: Estados e Feedback (10-15 min)

- [ ] **Loading States**
  - [ ] Skeleton loaders (não spinners genéricos)
  - [ ] Loading em botões (texto muda para "Salvando...")
  - [ ] Disabled states durante ações
  - [ ] Streaming com Suspense boundaries

- [ ] **Error States**
  - [ ] Mensagens de erro claras e em português
  - [ ] Diferencia erros de validação vs servidor
  - [ ] Permite retry quando apropriado
  - [ ] Não expõe detalhes técnicos ao usuário

- [ ] **Empty States**
  - [ ] Mensagem amigável quando lista vazia
  - [ ] Call-to-action para criar primeiro item
  - [ ] Ilustração ou ícone quando apropriado

- [ ] **Success States**
  - [ ] Toast notifications para ações bem-sucedidas
  - [ ] Feedback visual imediato
  - [ ] Optimistic updates quando possível

### Fase 6: UI/UX & Responsividade (15-20 min)

- [ ] **Design System**
  - [ ] Uso consistente de componentes shadcn/ui
  - [ ] Cores do design system (background, foreground, primary, etc.)
  - [ ] Spacing consistente (gap-4, p-6, etc.)
  - [ ] Typography adequada (text-sm, text-lg, font-semibold)
  - [ ] Borders e shadows sutis

- [ ] **Responsividade**
  - [ ] Mobile (< 640px): Layout em coluna única
  - [ ] Tablet (640px - 1024px): Layout adaptado
  - [ ] Desktop (> 1024px): Layout otimizado
  - [ ] Touch targets adequados (min 44x44px)
  - [ ] Testei em diferentes tamanhos de tela

- [ ] **Acessibilidade**
  - [ ] ARIA labels em botões de ícone
  - [ ] Keyboard navigation funciona
  - [ ] Focus states visíveis
  - [ ] Contrast ratio adequado
  - [ ] Screen reader friendly
  - [ ] Form labels associados corretamente

### Fase 7: Performance (5-10 min)

- [ ] **Otimizações Next.js**
  - [ ] Server Components usados por padrão
  - [ ] Client Components apenas onde necessário
  - [ ] Imagens otimizadas com `next/image`
  - [ ] Dynamic imports para componentes pesados
  - [ ] Metadata adequado para SEO

- [ ] **Otimizações Supabase**
  - [ ] Queries otimizadas (índices necessários)
  - [ ] Paginação implementada se lista grande
  - [ ] Cache strategy definida
  - [ ] Real-time subscriptions apenas se necessário

### Fase 8: Qualidade de Código (10-15 min)

- [ ] **TypeScript**
  - [ ] Sem erros de tipo
  - [ ] Sem uso de `any`
  - [ ] Interfaces/types bem definidos
  - [ ] Retornos de função tipados
  - [ ] Props de componentes tipadas

- [ ] **Clean Code**
  - [ ] Nomes descritivos (variáveis, funções, componentes)
  - [ ] Funções pequenas (< 30 linhas)
  - [ ] Sem duplicação de código (DRY)
  - [ ] Comentários apenas onde necessário
  - [ ] Código auto-explicativo

- [ ] **Imports**
  - [ ] Organizados e sem não utilizados
  - [ ] Path aliases usados (@/ para src/)
  - [ ] Agrupados logicamente (React, libs, local)

- [ ] **Linting & Formatting**
  - [ ] Executei `npm run lint` (sem erros)
  - [ ] Executei `npm run type-check` (sem erros)
  - [ ] Código formatado com Prettier
  - [ ] Sem warnings no console

### Fase 9: Segurança (5-10 min)

- [ ] **Autenticação**
  - [ ] Rotas protegidas verificam auth
  - [ ] Redirect para login se não autenticado
  - [ ] User ID correto em todas as queries

- [ ] **Validação**
  - [ ] Validação client-side (UX)
  - [ ] Validação server-side (Segurança)
  - [ ] Sanitização de inputs
  - [ ] XSS prevention

- [ ] **RLS**
  - [ ] Row Level Security habilitado
  - [ ] Policies testadas
  - [ ] Nunca usar service_role no cliente

- [ ] **Secrets**
  - [ ] Nenhum secret exposto no código
  - [ ] Env vars corretamente configuradas
  - [ ] NEXT_PUBLIC_ apenas para vars públicas

### Fase 10: Testes (15-20 min)

#### Testes Manuais - Happy Path

- [ ] Posso criar um novo item com sucesso
- [ ] O item aparece na listagem
- [ ] Posso clicar e ver os detalhes
- [ ] Posso editar o item com sucesso
- [ ] As mudanças são refletidas imediatamente
- [ ] Posso deletar o item com sucesso
- [ ] A UI atualiza após deletar

#### Testes Manuais - Validações

- [ ] Formulário bloqueia submit com campos vazios
- [ ] Mensagens de erro aparecem nos campos incorretos
- [ ] Validação de email/url/etc funciona
- [ ] Não consigo submeter dados inválidos

#### Testes Manuais - Edge Cases

- [ ] Lista vazia mostra empty state adequado
- [ ] Acessar ID inexistente mostra 404
- [ ] Network error mostra mensagem adequada
- [ ] Múltiplos clicks não criam duplicatas

#### Testes Manuais - Multi-User (RLS)

- [ ] Login como Usuário A
- [ ] Criar alguns dados
- [ ] Logout e login como Usuário B
- [ ] Verificar que não vejo dados do Usuário A
- [ ] Tentar acessar URL direta de item do Usuário A → erro
- [ ] Criar dados como Usuário B
- [ ] Verificar que vejo apenas meus dados

#### Testes de Responsividade

- [ ] Testei em mobile (DevTools)
- [ ] Testei em tablet (DevTools)
- [ ] Testei em desktop
- [ ] Todos os elementos são clicáveis/tocáveis
- [ ] Texto é legível em todos os tamanhos

### Fase 11: Documentação (5-10 min)

- [ ] **Código**
  - [ ] Comentários JSDoc em funções complexas
  - [ ] README atualizado se necessário
  - [ ] Tipos exportados e documentados

- [ ] **Histórico**
  - [ ] Atualizei `docs/09-HISTORICO.md` com:
    - Data da implementação
    - Feature implementada
    - Arquivos criados/modificados
    - Decisões técnicas tomadas

- [ ] **Especificação**
  - [ ] Marquei feature como concluída em `docs/03-ESPECIFICACAO.md`
  - [ ] Atualizei se houve mudanças durante implementação

### Fase 12: Git (5 min)

- [ ] **Commit**
  - [ ] Mensagem clara e descritiva
  - [ ] Segue padrão: "feat: adiciona [feature]" ou "fix: corrige [bug]"
  - [ ] Commits atômicos (não misturar features diferentes)

- [ ] **Push**
  - [ ] Push para branch correta
  - [ ] Verifiquei que não commitei secrets
  - [ ] Verifiquei que não commitei arquivos desnecessários

---

## 🎨 Padrões de Código Obrigatórios

### Server Component Pattern

```typescript
// ✅ CORRETO: Server Component otimizado
import { createServerClient } from '@/lib/supabase/server';
import { FeatureList } from '@/components/features/feature/FeatureList';

export default async function FeaturesPage() {
  const supabase = createServerClient();

  const { data: items, error } = await supabase
    .from('features')
    .select('id, name, description, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    return <ErrorState message="Erro ao carregar dados" />;
  }

  if (!items || items.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Features</h1>
        <Button asChild>
          <Link href="/features/new">Criar Nova</Link>
        </Button>
      </div>
      <FeatureList items={items} />
    </div>
  );
}
```

### Client Component with Form Pattern

```typescript
// ✅ CORRETO: Client Component com form e validação
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@/lib/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { featureSchema, type FeatureInput } from '@/lib/validations/feature';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export function FeatureCreateForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const supabase = createBrowserClient();

  const form = useForm<FeatureInput>({
    resolver: zodResolver(featureSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  async function onSubmit(values: FeatureInput) {
    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        toast({
          title: 'Erro de autenticação',
          description: 'Você precisa estar logado',
          variant: 'destructive',
        });
        return;
      }

      const { data, error } = await supabase
        .from('features')
        .insert({
          ...values,
          user_id: user.id,
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: 'Sucesso!',
        description: 'Feature criada com sucesso',
      });

      router.push(`/features/${data.id}`);
      router.refresh();
    } catch (error) {
      console.error('Erro ao criar feature:', error);
      toast({
        title: 'Erro ao criar',
        description: 'Ocorreu um erro ao criar a feature. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o nome da feature"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite a descrição"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            disabled={isSubmitting}
          >
            Cancelar
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Criando...' : 'Criar Feature'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
```

### Validation Schema Pattern

```typescript
// ✅ CORRETO: Schema Zod bem estruturado
import { z } from 'zod';

export const featureSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter no mínimo 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  description: z
    .string()
    .min(10, 'Descrição deve ter no mínimo 10 caracteres')
    .max(500, 'Descrição deve ter no máximo 500 caracteres'),
  status: z
    .enum(['active', 'inactive', 'archived'])
    .default('active'),
  tags: z
    .array(z.string())
    .optional(),
});

export type FeatureInput = z.infer<typeof featureSchema>;
```

### Supabase Query Pattern

```typescript
// ✅ CORRETO: Query tipada e otimizada
import { createServerClient } from '@/lib/supabase/server';
import type { Database } from '@/types/database.types';

type Feature = Database['public']['Tables']['features']['Row'];

export async function getFeatureWithUser(
  featureId: string
): Promise<Feature | null> {
  const supabase = createServerClient();

  const { data, error } = await supabase
    .from('features')
    .select(`
      id,
      name,
      description,
      status,
      created_at,
      user:users (
        id,
        name,
        avatar_url
      )
    `)
    .eq('id', featureId)
    .single();

  if (error) {
    console.error('Erro ao buscar feature:', error);
    return null;
  }

  return data;
}
```

---

## ❌ Anti-Patterns a Evitar

### ❌ NUNCA: Client Component desnecessário

```typescript
// ❌ INCORRETO
'use client';
import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data').then(r => r.json()).then(setData);
  }, []);

  return <div>{/* ... */}</div>;
}

// ✅ CORRETO: Use Server Component
export default async function Page() {
  const supabase = createServerClient();
  const { data } = await supabase.from('table').select();

  return <div>{/* ... */}</div>;
}
```

### ❌ NUNCA: Queries sem tipagem

```typescript
// ❌ INCORRETO
const { data } = await supabase
  .from('users')
  .select('*'); // Não use *

// ✅ CORRETO
const { data } = await supabase
  .from('users')
  .select('id, name, email, avatar_url'); // Específico
```

### ❌ NUNCA: Sem validação server-side

```typescript
// ❌ INCORRETO
export async function POST(request: Request) {
  const body = await request.json();
  // Inserir diretamente sem validar
  await supabase.from('table').insert(body);
}

// ✅ CORRETO
export async function POST(request: Request) {
  const body = await request.json();
  const validated = schema.parse(body); // Validar!
  await supabase.from('table').insert(validated);
}
```

---

## 🎯 Critérios de Sucesso Final

A feature está pronta quando:

- [ ] Implementação completa conforme especificação
- [ ] Todos os itens do checklist marcados
- [ ] Todos os testes manuais passando
- [ ] Zero erros TypeScript
- [ ] Zero warnings no console
- [ ] Zero erros de lint
- [ ] RLS funcionando corretamente
- [ ] Responsivo em todos os tamanhos
- [ ] Acessível (keyboard navigation, ARIA)
- [ ] Performance otimizada
- [ ] Código limpo e bem estruturado
- [ ] Documentação atualizada
- [ ] Commit feito com mensagem clara

---

## 💬 Comunicação Durante Implementação

### Ao começar cada fase, me informe:

```
📍 Iniciando Fase X: [Nome da Fase]
- Arquivos que vou criar/modificar: [lista]
- Duração estimada: [tempo]
- Dependências identificadas: [se houver]
```

### Ao completar cada fase, me informe:

```
✅ Fase X concluída: [Nome da Fase]
- Arquivos criados: [lista]
- Arquivos modificados: [lista]
- Observações: [se houver]
- Próxima fase: [nome]
```

### Se encontrar bloqueios:

```
⚠️ Bloqueio na Fase X
- Problema: [descrição]
- O que já tentei: [lista]
- Preciso de: [o que precisa para desbloquear]
```

---

## 🔄 Após Implementação

Quando concluir toda a implementação:

1. **Resumo Executivo**
   - Liste todos os arquivos criados
   - Liste todos os arquivos modificados
   - Resuma as principais decisões técnicas

2. **Próximos Passos Sugeridos**
   - Melhorias futuras
   - Otimizações possíveis
   - Features relacionadas

3. **Perguntas para Validação**
   - "Gostaria de testar a feature?"
   - "Alguma parte precisa de ajustes?"
   - "Devo prosseguir para a próxima feature?"

---

## 📚 Referências Rápidas

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Supabase Docs](https://supabase.com/docs)
- [Zod Docs](https://zod.dev)
- [React Hook Form](https://react-hook-form.com)

---

**Está pronto para começar a implementação?**

Por favor, confirme que leu toda a documentação de referência antes de iniciar.
```

---

## 🎯 Como Usar Este Template

### 1. Copie o Template

Copie todo o conteúdo da seção "Template de Prompt Completo" acima.

### 2. Customize para Sua Feature

Preencha os campos marcados com `[PLACEHOLDER]`:

- `[NOME DO PROJETO]`: Nome do seu projeto
- `[NOME DA FEATURE]`: Nome específico da feature
- `[BREVE DESCRIÇÃO]`: O que precisa ser feito
- `[TIPO]`: Marque o tipo adequado
- `[PRIORIDADE]`: Alta, Média ou Baixa

### 3. Adicione Especificação Detalhada

Complete as seções:
- User Stories com critérios de aceitação
- Regras de negócio específicas
- Validações necessárias
- Casos especiais

### 4. Cole no Chat com Claude

Cole o prompt completo e customizado no chat do Claude Code.

### 5. Acompanhe o Progresso

Use o checklist para acompanhar o progresso da implementação.

---

## 📋 Variações do Template

### Para Feature Simples (Componente Isolado)

Se for apenas um componente visual sem backend:
- Remova Fase 4 (Integração Backend)
- Simplifique Fase 2 (Types)
- Foque em UI/UX (Fase 6)

### Para Correção de Bug

Se for correção de bug:
- Adicione seção "Comportamento Atual vs Esperado"
- Adicione seção "Steps to Reproduce"
- Foque em testes de regressão

### Para Refatoração

Se for refatoração:
- Adicione seção "Código Atual (Problemas)"
- Adicione seção "Código Desejado (Melhorias)"
- Foque em manter funcionalidade existente
- Adicione testes antes e depois

---

## 🎯 Exemplo Prático

Veja `exemplo-uso-prompt.md` para um exemplo completo de uso deste template em uma feature real.

---

## 🔄 Manutenção do Template

Este template deve ser atualizado quando:
- Novos padrões de código são estabelecidos
- Stack tecnológica mudar
- Processo de desenvolvimento evoluir
- Feedback de uso identificar melhorias

**Última atualização**: 2025-11-15
**Próxima revisão**: Trimestral ou quando necessário
