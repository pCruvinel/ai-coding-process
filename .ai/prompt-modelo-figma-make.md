# 🎨 Prompt Modelo: Implementação a partir de Design Figma/v0

> **Versão**: 1.0
> **Última atualização**: 2025-11-15
> **Uso**: Para implementar funcionalidades que já possuem design no Figma Make ou v0

---

## 📋 Template de Prompt Completo

```markdown
# Contexto do Projeto

Você é um desenvolvedor frontend especializado em Next.js + Supabase, trabalhando em [NOME DO PROJETO].

Vou implementar uma funcionalidade que **já possui design pronto** no Figma Make (v0).

## 📚 Documentação de Referência

Antes de começar, LEIA estes arquivos:

1. **Contexto do Projeto**: `.ai/contexto-projeto.md`
   - Stack tecnológica
   - Padrões estabelecidos
   - Estrutura de pastas

2. **Design Exportado**: `.ai/frontend-export.md`
   - Código exportado do Figma Make/v0
   - Componentes visuais prontos
   - Estrutura de UI

3. **Padrões de Código**: `.claude/skills/02-padroes-codigo/SKILL.md`
   - Clean code guidelines
   - Type safety
   - Segurança

4. **Banco de Dados**: `docs/04-BANCO-DE-DADOS.md` (se aplicável)
   - Schema necessário
   - RLS policies

5. **API/Backend**: `docs/05-API.md` (se aplicável)
   - Endpoints existentes ou necessários

---

## 🎯 Feature a Implementar

**Nome**: [NOME DA FEATURE]

**Descrição**: [DESCRIÇÃO DA FUNCIONALIDADE]

**Design Disponível**:
- [ ] Figma Make/v0 completo
- [ ] Código exportado disponível em `.ai/frontend-export.md`
- [ ] Screenshots/mockups (anexe URLs se necessário)

**Status do Backend**:
- [ ] Backend já existe e funciona
- [ ] Backend precisa ser criado
- [ ] Backend precisa ser ajustado

---

## 🎨 Informações do Design

### Link do Design
[Cole aqui o link do Figma Make ou v0]

### Componentes Visuais Incluídos

Liste os principais componentes/telas do design:
- [ ] [Nome da tela/componente 1]
- [ ] [Nome da tela/componente 2]
- [ ] [Nome da tela/componente 3]

### Interações Necessárias

Liste as interações que o usuário deve poder fazer:
- [ ] [Interação 1 - ex: "Clicar no botão para abrir modal"]
- [ ] [Interação 2 - ex: "Preencher formulário"]
- [ ] [Interação 3 - ex: "Visualizar lista com scroll infinito"]

### Estados Visuais Necessários

- [ ] Loading state
- [ ] Empty state (quando não há dados)
- [ ] Error state
- [ ] Success feedback
- [ ] Disabled states

---

## 📝 Código Exportado do Figma/v0

### Componentes Exportados

Cole aqui o código exportado do Figma Make/v0:

```tsx
[COLE O CÓDIGO EXPORTADO AQUI]

Pode ser múltiplos componentes.
```

### Observações sobre o Código Exportado

- **Dados mockados**: O código exportado usa dados fake. Precisamos conectar aos dados reais.
- **Componentes shadcn/ui**: Verifique se usa componentes que já temos instalados.
- **Tailwind**: O código deve usar Tailwind CSS v4 (nosso padrão).
- **TypeScript**: Adicionar tipagem adequada onde necessário.

---

## ✅ Checklist de Implementação

Siga este checklist adaptado para integração de design existente:

### Fase 1: Análise do Design (10-15 min)

- [ ] **Revisei o design** completo no Figma/v0
- [ ] **Li o código exportado** em `.ai/frontend-export.md`
- [ ] **Identifiquei componentes reutilizáveis** vs novos
- [ ] **Verifiquei componentes shadcn/ui** necessários
- [ ] **Mapeei estados visuais** (loading, error, empty, success)
- [ ] **Identifiquei dados mockados** que precisam ser substituídos
- [ ] **Listei interações** do usuário
- [ ] **Confirmei estrutura de pastas** onde colocar os arquivos

**Resultado esperado**: Lista clara de:
- Componentes a criar
- Componentes a reutilizar
- Dados a conectar
- Estados a implementar

### Fase 2: Preparação de Types & Data (10-15 min)

- [ ] **Types/Interfaces criados**
  - [ ] Baseados no design (ex: se card mostra nome/email/avatar, criar interface User)
  - [ ] Compatíveis com schema do banco (se já existe)
  - [ ] Arquivo: `types/index.ts`

- [ ] **Schemas de Validação** (se houver formulários)
  - [ ] Schema Zod criado em `lib/validations/[feature].ts`
  - [ ] Validações client-side
  - [ ] Validações server-side (mesmas regras)

- [ ] **Queries/Mutations planejadas**
  - [ ] Listei quais queries Supabase preciso fazer
  - [ ] Listei quais mutations (create, update, delete)
  - [ ] Verifiquei RLS policies necessárias

### Fase 3: Adaptação dos Componentes UI (30-45 min)

#### 3.1 Componentes shadcn/ui Necessários

- [ ] **Verifiquei quais componentes shadcn/ui são usados no design**
  - Lista: [ex: Button, Card, Dialog, Form, Input, etc.]

- [ ] **Instalei componentes faltantes**
  ```bash
  npx shadcn-ui@latest add [component-name]
  ```

- [ ] **Verifiquei que todos estão em `components/ui/`**

#### 3.2 Adaptação do Código Exportado

- [ ] **Copiei código exportado** do Figma/v0
- [ ] **Removi dados mockados**
  - Substituí arrays fake por props ou dados reais
- [ ] **Adicionei tipagem TypeScript**
  - Props bem tipadas
  - Sem `any`
- [ ] **Ajustei imports**
  - Path aliases (`@/components/...`)
  - Imports corretos do shadcn/ui
- [ ] **Organizei em arquivos apropriados**
  - `components/features/[feature]/` para componentes específicos
  - `components/ui/` apenas para shadcn/ui base
- [ ] **Mantive o design visual** idêntico ou muito próximo
- [ ] **Adicionei className utilitário `cn()`** para merge de classes

#### 3.3 Componentes de Feature

Para cada componente principal do design:

**Componente: [Nome do Componente 1]**
- [ ] Arquivo criado: `components/features/[feature]/[ComponentName].tsx`
- [ ] Props interface definida e tipada
- [ ] Visual match com o design
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] Acessibilidade (ARIA labels, keyboard navigation)

**Componente: [Nome do Componente 2]**
- [ ] [Mesmos itens acima]

[Repita para cada componente]

### Fase 4: Integração de Dados Reais (20-30 min)

#### 4.1 Server Components (Páginas)

- [ ] **Página criada**: `app/(dashboard)/[feature]/page.tsx`
  - [ ] Usa Server Component (async)
  - [ ] Fetch de dados reais usando Supabase Server Client
  - [ ] Props passados para componentes de UI
  - [ ] Loading.tsx criado com skeleton
  - [ ] Error.tsx para tratamento de erros

- [ ] **Queries otimizadas**
  - [ ] Select apenas campos necessários
  - [ ] Joins eficientes
  - [ ] Ordenação adequada
  - [ ] Paginação se lista for grande

#### 4.2 Client Components (Interatividade)

Se houver interações (formulários, botões, etc.):

- [ ] **Formulários** (`[Feature]Form.tsx`)
  - [ ] 'use client' no topo
  - [ ] React Hook Form + Zod
  - [ ] Validação em tempo real
  - [ ] Submit handler com loading state
  - [ ] Feedback de sucesso/erro
  - [ ] Mantém design do Figma/v0

- [ ] **Botões de Ação** (editar, deletar, etc.)
  - [ ] Loading states
  - [ ] Confirmações quando necessário
  - [ ] Feedback visual

- [ ] **Modais/Dialogs**
  - [ ] shadcn/ui Dialog component
  - [ ] Match visual do design
  - [ ] Animações suaves
  - [ ] Fecha ao clicar fora / ESC

### Fase 5: Estados Visuais (15-20 min)

- [ ] **Loading State**
  - [ ] Skeleton loaders (não spinners genéricos)
  - [ ] Match com estrutura final dos componentes
  - [ ] Arquivo: `loading.tsx` ou inline

- [ ] **Empty State**
  - [ ] Quando lista/grid está vazio
  - [ ] Mensagem amigável
  - [ ] Call-to-action (ex: "Criar primeiro item")
  - [ ] Ícone ou ilustração se design incluir
  - [ ] Match com design do Figma/v0

- [ ] **Error State**
  - [ ] Mensagens claras em português
  - [ ] Opção de retry se aplicável
  - [ ] Não expõe detalhes técnicos
  - [ ] Design consistente

- [ ] **Success Feedback**
  - [ ] Toast notifications (shadcn/ui Sonner)
  - [ ] Mensagens positivas
  - [ ] Auto-dismiss após 3-5s

### Fase 6: Responsividade & Polish (20-30 min)

- [ ] **Mobile (< 640px)**
  - [ ] Layout adaptado (geralmente stack vertical)
  - [ ] Touch targets adequados (min 44x44px)
  - [ ] Texto legível
  - [ ] Imagens/cards com tamanho adequado
  - [ ] Testei no DevTools mobile

- [ ] **Tablet (640px - 1024px)**
  - [ ] Layout intermediário
  - [ ] Aproveita espaço disponível
  - [ ] Grid/flex adequado
  - [ ] Testei no DevTools tablet

- [ ] **Desktop (> 1024px)**
  - [ ] Layout otimizado
  - [ ] Usa toda largura disponível (com max-width se necessário)
  - [ ] Match perfeito com design do Figma/v0
  - [ ] Hover states funcionam

- [ ] **Transições e Animações**
  - [ ] Suaves (duration-200, duration-300)
  - [ ] Consistentes com resto do app
  - [ ] Não exageradas
  - [ ] Acessíveis (respeitam prefers-reduced-motion)

### Fase 7: Funcionalidades Específicas do Design (Variável)

Liste funcionalidades específicas do seu design que precisam ser implementadas:

**Funcionalidade: [Ex: "Filtro de status"]**
- [ ] Componente criado
- [ ] Estado gerenciado corretamente
- [ ] UI atualiza ao filtrar
- [ ] Visual match com design

**Funcionalidade: [Ex: "Busca em tempo real"]**
- [ ] Input de busca criado
- [ ] Debounce implementado (300ms)
- [ ] Resultados filtrados
- [ ] Loading state durante busca

[Adicione mais conforme necessário]

### Fase 8: Integração com Backend (15-25 min)

#### Se Backend JÁ existe:

- [ ] **Testei endpoints** existentes
- [ ] **Conectei componentes** aos endpoints
- [ ] **Verifiquei tipos** de resposta (match com TypeScript)
- [ ] **Tratei erros** de API adequadamente

#### Se Backend precisa SER CRIADO:

- [ ] **API Routes criadas** (`app/api/[resource]/route.ts`)
  - [ ] GET - Listar
  - [ ] POST - Criar
  - [ ] PUT - Atualizar (se necessário)
  - [ ] DELETE - Deletar (se necessário)

- [ ] **Validação Zod** no servidor
- [ ] **RLS configurado** no Supabase
- [ ] **Queries otimizadas**
- [ ] **Error handling** adequado

### Fase 9: Testes Visuais & Funcionais (20-30 min)

#### Testes de Consistência Visual

- [ ] **Comparei** implementação com design do Figma/v0
  - [ ] Cores corretas
  - [ ] Espaçamentos corretos (padding, margin, gap)
  - [ ] Tipografia correta (font-size, font-weight)
  - [ ] Bordas e sombras corretas
  - [ ] Ícones corretos

- [ ] **Responsividade** match com intenção do design
- [ ] **Hover/Focus states** funcionam como esperado
- [ ] **Animações** suaves e consistentes

#### Testes Funcionais

- [ ] **Happy Path**: Fluxo principal funciona perfeitamente
- [ ] **Validações**: Formulários validam corretamente
- [ ] **Interações**: Todos os botões/links funcionam
- [ ] **Dados Reais**: Dados são carregados e exibidos corretamente
- [ ] **Estados**: Loading, error, empty funcionam
- [ ] **RLS**: Dados filtrados por usuário (se aplicável)

#### Testes em Diferentes Navegadores

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (se possível)

### Fase 10: Performance & Otimização (10-15 min)

- [ ] **Imagens otimizadas**
  - [ ] Usando `next/image`
  - [ ] Sizes adequados
  - [ ] Loading lazy quando apropriado
  - [ ] WebP/AVIF quando possível

- [ ] **Code Splitting**
  - [ ] Dynamic imports para componentes pesados
  - [ ] Lazy loading onde faz sentido

- [ ] **Server Components**
  - [ ] Máximo possível em Server Components
  - [ ] Client Components apenas onde necessário

- [ ] **Queries otimizadas**
  - [ ] Apenas campos necessários
  - [ ] Índices criados no banco
  - [ ] Paginação se lista grande

### Fase 11: Qualidade de Código (10-15 min)

- [ ] **TypeScript**
  - [ ] Zero erros
  - [ ] Zero `any`
  - [ ] Props tipadas
  - [ ] Retornos de função tipados

- [ ] **Linting**
  - [ ] `npm run lint` sem erros
  - [ ] `npm run type-check` sem erros

- [ ] **Formatação**
  - [ ] Prettier aplicado
  - [ ] Imports organizados
  - [ ] Código limpo

- [ ] **Reutilização**
  - [ ] Componentes duplicados extraídos
  - [ ] Lógica duplicada em hooks/utils
  - [ ] DRY aplicado

### Fase 12: Documentação & Git (10 min)

- [ ] **Comentários no código**
  - [ ] JSDoc em funções complexas
  - [ ] Comentários explicativos onde necessário
  - [ ] Props documentadas

- [ ] **Atualizar frontend-export.md** (se necessário)
  - [ ] Adicionar novos componentes exportados
  - [ ] Atualizar versão do design

- [ ] **Atualizar docs/09-HISTORICO.md**
  - [ ] Data de implementação
  - [ ] Feature implementada
  - [ ] Link do design Figma/v0
  - [ ] Arquivos criados

- [ ] **Commit**
  - [ ] Mensagem clara: "feat: implementa [feature] baseado em design Figma/v0"
  - [ ] Não commitei secrets
  - [ ] Não commitei arquivos desnecessários

---

## 🎨 Padrões Específicos para Integração Figma/v0

### 1. Adaptar Código Exportado

```typescript
// ❌ Código EXPORTADO do v0 (com dados mockados)
export function TaskList() {
  const tasks = [
    { id: 1, title: "Task 1", status: "todo" },
    { id: 2, title: "Task 2", status: "done" },
  ];

  return (
    <div className="grid gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

// ✅ ADAPTADO para nosso projeto (Server Component)
import { createServerClient } from '@/lib/supabase/server';
import { TaskCard } from '@/components/features/tasks/TaskCard';
import type { Task } from '@/types';

export default async function TaskList() {
  const supabase = createServerClient();

  const { data: tasks, error } = await supabase
    .from('tasks')
    .select('id, title, status, priority, due_date')
    .order('created_at', { ascending: false });

  if (error) {
    return <ErrorState message="Erro ao carregar tarefas" />;
  }

  if (!tasks || tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
```

### 2. Manter Design Visual

```typescript
// ✅ MANTER classes do design exportado
// Se o v0 gerou isso, mantenha EXATAMENTE assim:
<Card className="overflow-hidden border-2 border-border bg-card hover:shadow-lg transition-shadow">
  <CardHeader className="bg-muted/50 pb-3">
    <CardTitle className="text-lg font-semibold flex items-center justify-between">
      <span>{task.title}</span>
      <Badge variant={getPriorityVariant(task.priority)}>
        {task.priority}
      </Badge>
    </CardTitle>
  </CardHeader>
  <CardContent className="pt-4">
    <p className="text-sm text-muted-foreground">{task.description}</p>
  </CardContent>
</Card>
```

### 3. Adicionar Tipagem

```typescript
// ❌ Código exportado SEM tipos
export function TaskCard({ task }) {
  return <div>{task.title}</div>;
}

// ✅ ADICIONAR tipos
import type { Task } from '@/types';

interface TaskCardProps {
  task: Task;
  onEdit?: (task: Task) => void;
  onDelete?: (id: string) => void;
}

export function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  return <div>{task.title}</div>;
}
```

### 4. Conectar Interações

```typescript
// ❌ Código exportado SEM ação real
<Button onClick={() => console.log('clicked')}>
  Deletar
</Button>

// ✅ CONECTAR ação real
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@/lib/supabase/client';
import { useToast } from '@/hooks/use-toast';

export function DeleteButton({ taskId }: { taskId: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const supabase = createBrowserClient();

  async function handleDelete() {
    setIsDeleting(true);

    try {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', taskId);

      if (error) throw error;

      toast({
        title: 'Tarefa deletada',
        description: 'A tarefa foi removida com sucesso',
      });

      router.refresh();
    } catch (error) {
      toast({
        title: 'Erro ao deletar',
        description: 'Não foi possível deletar a tarefa',
        variant: 'destructive',
      });
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <Button
      onClick={handleDelete}
      disabled={isDeleting}
      variant="destructive"
    >
      {isDeleting ? 'Deletando...' : 'Deletar'}
    </Button>
  );
}
```

---

## 🎯 Critérios de Sucesso Final

A implementação está completa quando:

- [ ] **Visual match**: 95%+ de correspondência com design Figma/v0
- [ ] **Funcional completo**: Todas as interações funcionam
- [ ] **Dados reais**: Conectado ao Supabase (não mockado)
- [ ] **Responsivo**: Funciona em mobile, tablet, desktop
- [ ] **Estados**: Loading, error, empty implementados
- [ ] **Performance**: Rápido e otimizado
- [ ] **TypeScript**: Zero erros, zero `any`
- [ ] **Testes**: Funcionamento verificado manualmente
- [ ] **Qualidade**: Código limpo e bem estruturado
- [ ] **Documentado**: Histórico atualizado

---

## 💬 Comunicação Durante Implementação

### Ao Começar

```
📍 Iniciando implementação baseada em design Figma/v0

**Design**: [Link do Figma/v0]
**Feature**: [Nome]

**Análise Inicial**:
- Componentes identificados: [lista]
- shadcn/ui necessários: [lista]
- Backend status: [existe/criar/ajustar]
- Dados mockados a substituir: [lista]

Vou começar pela Fase 1: Análise do Design.
```

### Durante Implementação

```
✅ Fase X concluída

**Componentes criados**:
- [Lista de arquivos]

**Próximo passo**:
- Fase Y: [nome]

**Observações**:
- [Qualquer desvio do design original com justificativa]
```

### Ao Finalizar

```
✅ Implementação concluída!

**Visual Match**: ~[X]% com design original
**Arquivos criados**: [lista]
**Desvios do design**: [se houver, justificar]

**Demo**: [Se possível, screenshots ou link preview]

Pronto para testes finais e deploy.
```

---

## 🔄 Checklist Rápido

Use este checklist compacto para verificação rápida:

- [ ] Design analisado e entendido
- [ ] Código exportado adaptado
- [ ] Types TypeScript adicionados
- [ ] Componentes shadcn/ui instalados
- [ ] Dados mockados substituídos por reais
- [ ] Visual match com design
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] Estados (loading, error, empty) implementados
- [ ] Interações funcionam
- [ ] Performance otimizada
- [ ] Código limpo e sem erros
- [ ] Documentação atualizada
- [ ] Commit feito

---

**Está pronto para começar a implementação baseada no design?**

Por favor, confirme que:
1. ✅ Tem o link do design Figma/v0
2. ✅ Código exportado está em `.ai/frontend-export.md` (ou cole aqui)
3. ✅ Entende quais dados mockados precisam ser substituídos
```

---

## 📝 Notas de Uso

### Quando Usar Este Template

Use este template quando:
- ✅ Já tem design pronto no Figma Make ou v0
- ✅ Precisa implementar o design no projeto real
- ✅ Quer manter fidelidade visual ao design
- ✅ Precisa conectar dados reais ao invés de mockados

### Quando NÃO Usar Este Template

Não use este template quando:
- ❌ Não tem design pronto (use `prompt-modelo-ideal-frontend.md`)
- ❌ É uma feature backend-only
- ❌ É uma correção de bug simples

---

## 🎨 Workflow Recomendado

```
1. Design no Figma/v0
   ↓
2. Exportar código
   ↓
3. Salvar em .ai/frontend-export.md
   ↓
4. Usar este template de prompt
   ↓
5. Adaptar código exportado
   ↓
6. Conectar dados reais
   ↓
7. Testar visual match
   ↓
8. Deploy
```

---

## 💡 Dicas Importantes

### 1. Visual Match vs. Funcionalidade

- **Priorize visual match** inicialmente
- Depois adicione funcionalidades que não estavam no design
- Mantenha consistência visual mesmo ao adicionar features

### 2. Dados Mockados

- Identifique TODOS os dados mockados no código exportado
- Substitua por queries Supabase reais
- Mantenha estrutura de dados similar

### 3. Componentes shadcn/ui

- Se design usa componente não instalado, instale primeiro
- Se design usa componente customizado, extraia para `components/ui/`
- Mantenha nomenclatura do shadcn/ui

### 4. Responsividade

- v0 geralmente gera bom código responsivo
- Verifique breakpoints (sm:, md:, lg:)
- Ajuste se necessário para projeto específico

### 5. Performance

- Código exportado pode não ser otimizado
- Use Server Components onde possível
- Lazy load componentes pesados

---

**Última atualização**: 2025-11-15
**Próxima revisão**: Trimestral ou quando necessário
