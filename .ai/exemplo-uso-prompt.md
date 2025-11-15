# 📘 Exemplo Prático: Usando o Prompt Modelo Ideal

> **Exemplo**: Implementação da feature "Gerenciamento de Tarefas"
> **Duração**: ~4-6 horas
> **Complexidade**: Média

---

## 🎯 Prompt Completo (Customizado)

```markdown
# Contexto do Projeto

Você é um desenvolvedor frontend especializado em Next.js + Supabase, trabalhando em **TaskMaster Pro** - um sistema de gerenciamento de tarefas para equipes.

## 📚 Documentação de Referência

Antes de começar, LEIA estes arquivos para entender o projeto:

1. **Contexto Geral**: `.ai/contexto-projeto.md`
2. **Especificação da Feature**: `docs/03-ESPECIFICACAO.md`
3. **Arquitetura**: `docs/02-ARQUITETURA.md`
4. **Banco de Dados**: `docs/04-BANCO-DE-DADOS.md`
5. **Padrões de Código**: `.claude/skills/02-padroes-codigo/SKILL.md`

---

## 🎯 Feature a Implementar

**Nome**: Gerenciamento de Tarefas

**Descrição**: Implementar CRUD completo de tarefas, permitindo usuários criarem, visualizarem, editarem e deletarem suas tarefas. Cada tarefa tem título, descrição, status (todo/in_progress/done), prioridade (low/medium/high), e data de vencimento.

**Tipo**:
- [x] Nova feature completa
- [ ] Componente isolado
- [ ] Correção de bug
- [ ] Refatoração
- [ ] Melhorias de UI/UX

**Prioridade**: Alta

---

## 📝 Especificação Detalhada

### User Stories

#### US-01: Criar Tarefa
```
Como usuário logado
Quero criar uma nova tarefa
Para organizar meu trabalho

Critérios de Aceitação:
- [ ] Posso preencher título (obrigatório, 3-100 chars)
- [ ] Posso preencher descrição (opcional, max 500 chars)
- [ ] Posso escolher status (default: todo)
- [ ] Posso escolher prioridade (default: medium)
- [ ] Posso escolher data de vencimento (opcional)
- [ ] Recebo feedback visual ao criar
- [ ] Sou redirecionado para a lista após criar
```

#### US-02: Listar Tarefas
```
Como usuário logado
Quero ver todas as minhas tarefas
Para acompanhar meu progresso

Critérios de Aceitação:
- [ ] Vejo apenas minhas tarefas (RLS)
- [ ] Tarefas são ordenadas por data de vencimento
- [ ] Posso filtrar por status
- [ ] Vejo indicador visual de prioridade
- [ ] Vejo empty state se não tenho tarefas
```

#### US-03: Editar Tarefa
```
Como usuário logado
Quero editar uma tarefa existente
Para atualizar informações

Critérios de Aceitação:
- [ ] Posso abrir modal/página de edição
- [ ] Formulário vem pré-preenchido
- [ ] Posso alterar qualquer campo
- [ ] Mudanças são salvas imediatamente
- [ ] Recebo feedback de sucesso
```

#### US-04: Deletar Tarefa
```
Como usuário logado
Quero deletar uma tarefa
Para remover itens concluídos ou irrelevantes

Critérios de Aceitação:
- [ ] Recebo confirmação antes de deletar
- [ ] Tarefa é removida do banco
- [ ] Recebo feedback de sucesso
- [ ] Lista atualiza automaticamente
```

### Regras de Negócio

1. **Propriedade**: Usuário só pode ver/editar/deletar suas próprias tarefas
2. **Validação de Data**: Data de vencimento não pode ser no passado
3. **Status Workflow**:
   - Novo: todo
   - Em andamento: in_progress
   - Concluído: done
4. **Prioridade Visual**:
   - High: Badge vermelho
   - Medium: Badge amarelo
   - Low: Badge verde

### Validações Necessárias

- **Título**:
  - Obrigatório
  - Min 3 caracteres
  - Max 100 caracteres
  - Não pode ser só espaços

- **Descrição**:
  - Opcional
  - Max 500 caracteres

- **Status**:
  - Enum: ['todo', 'in_progress', 'done']
  - Default: 'todo'

- **Prioridade**:
  - Enum: ['low', 'medium', 'high']
  - Default: 'medium'

- **Data de Vencimento**:
  - Opcional
  - Formato: ISO 8601
  - Não pode ser no passado (exceto ao editar tarefa já vencida)

### Casos Especiais / Edge Cases

1. **Primeira tarefa**: Mostrar tutorial ou onboarding leve
2. **Tarefa vencida**: Destacar visualmente em vermelho
3. **Tarefa sem vencimento**: Mostrar "Sem prazo"
4. **Lista vazia após filtro**: "Nenhuma tarefa com este status"
5. **Erro de conexão**: Permitir retry manual

---

## 🏗️ Arquitetura da Implementação

### Schema do Banco (já existe)

```sql
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  status VARCHAR(20) NOT NULL DEFAULT 'todo',
  priority VARCHAR(20) NOT NULL DEFAULT 'medium',
  due_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  CONSTRAINT valid_status CHECK (status IN ('todo', 'in_progress', 'done')),
  CONSTRAINT valid_priority CHECK (priority IN ('low', 'medium', 'high'))
);

-- RLS Policies
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own tasks"
  ON tasks FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own tasks"
  ON tasks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tasks"
  ON tasks FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own tasks"
  ON tasks FOR DELETE
  USING (auth.uid() = user_id);

-- Indexes
CREATE INDEX idx_tasks_user_id ON tasks(user_id);
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_due_date ON tasks(due_date);
```

### Estrutura de Arquivos a Criar

```
app/
└── (dashboard)/
    └── tasks/
        ├── page.tsx                    # Lista de tarefas
        ├── loading.tsx                 # Loading skeleton
        ├── new/
        │   └── page.tsx                # Criar tarefa
        └── [id]/
            ├── page.tsx                # Detalhes da tarefa
            └── edit/
                └── page.tsx            # Editar tarefa

components/
└── features/
    └── tasks/
        ├── TaskList.tsx                # Lista de tarefas
        ├── TaskCard.tsx                # Card de tarefa individual
        ├── TaskCreateForm.tsx          # Formulário de criação
        ├── TaskEditForm.tsx            # Formulário de edição
        ├── TaskDeleteDialog.tsx        # Dialog de confirmação
        ├── TaskStatusBadge.tsx         # Badge de status
        ├── TaskPriorityBadge.tsx       # Badge de prioridade
        └── TaskFilters.tsx             # Filtros de status

lib/
└── validations/
    └── task.ts                         # Schemas Zod

types/
└── index.ts                            # Adicionar Task type
```

---

## ✅ Checklist de Implementação

[Aqui você seguiria todo o checklist do template original, fase por fase]

---

## 🎨 Exemplos de Código Esperado

### Type Definition

```typescript
// types/index.ts

export type TaskStatus = 'todo' | 'in_progress' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  priority: TaskPriority;
  due_date: string | null;
  created_at: string;
  updated_at: string;
}
```

### Validation Schema

```typescript
// lib/validations/task.ts

import { z } from 'zod';

export const taskSchema = z.object({
  title: z
    .string()
    .min(3, 'Título deve ter no mínimo 3 caracteres')
    .max(100, 'Título deve ter no máximo 100 caracteres')
    .trim()
    .refine((val) => val.length > 0, 'Título não pode ser vazio'),

  description: z
    .string()
    .max(500, 'Descrição deve ter no máximo 500 caracteres')
    .optional()
    .or(z.literal('')),

  status: z
    .enum(['todo', 'in_progress', 'done'])
    .default('todo'),

  priority: z
    .enum(['low', 'medium', 'high'])
    .default('medium'),

  due_date: z
    .string()
    .datetime()
    .optional()
    .or(z.literal(''))
    .refine((date) => {
      if (!date) return true;
      return new Date(date) >= new Date();
    }, 'Data de vencimento não pode ser no passado'),
});

export type TaskInput = z.infer<typeof taskSchema>;
```

### TaskCard Component

```typescript
// components/features/tasks/TaskCard.tsx

'use client';

import { Task } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TaskStatusBadge } from './TaskStatusBadge';
import { TaskPriorityBadge } from './TaskPriorityBadge';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const isOverdue = task.due_date && new Date(task.due_date) < new Date();

  return (
    <Link href={`/tasks/${task.id}`}>
      <Card className={`
        hover:shadow-md transition-shadow cursor-pointer
        ${isOverdue ? 'border-destructive' : ''}
      `}>
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold">
            {task.title}
          </CardTitle>
          <div className="flex gap-2">
            <TaskPriorityBadge priority={task.priority} />
            <TaskStatusBadge status={task.status} />
          </div>
        </CardHeader>

        <CardContent>
          {task.description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {task.description}
            </p>
          )}

          {task.due_date && (
            <div className={`
              flex items-center gap-2 text-sm
              ${isOverdue ? 'text-destructive font-semibold' : 'text-muted-foreground'}
            `}>
              <Calendar className="h-4 w-4" />
              <span>
                {isOverdue ? 'Venceu ' : 'Vence '}
                {formatDistanceToNow(new Date(task.due_date), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
```

### Tasks List Page

```typescript
// app/(dashboard)/tasks/page.tsx

import { createServerClient } from '@/lib/supabase/server';
import { TaskList } from '@/components/features/tasks/TaskList';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default async function TasksPage() {
  const supabase = createServerClient();

  const { data: tasks, error } = await supabase
    .from('tasks')
    .select('*')
    .order('due_date', { ascending: true, nullsLast: true })
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erro ao carregar tarefas:', error);
    return (
      <div className="container py-8">
        <div className="text-center">
          <p className="text-destructive">Erro ao carregar tarefas</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Minhas Tarefas</h1>
          <p className="text-muted-foreground mt-2">
            Gerencie suas tarefas e acompanhe seu progresso
          </p>
        </div>

        <Button asChild size="lg">
          <Link href="/tasks/new">
            <Plus className="mr-2 h-4 w-4" />
            Nova Tarefa
          </Link>
        </Button>
      </div>

      <TaskList tasks={tasks || []} />
    </div>
  );
}
```

---

## 🎯 Critérios de Sucesso Final

A feature está pronta quando:

- [x] Posso criar uma nova tarefa
- [x] A tarefa aparece na lista
- [x] Posso ver detalhes da tarefa
- [x] Posso editar a tarefa
- [x] Posso deletar a tarefa
- [x] RLS funciona (não vejo tarefas de outros)
- [x] Validações funcionam
- [x] UI é responsiva
- [x] Loading states funcionam
- [x] Error handling adequado
- [x] Empty states presentes
- [x] Badges de prioridade corretas
- [x] Datas formatadas corretamente
- [x] Tarefas vencidas destacadas

---

**Está pronto para começar a implementação?**

Por favor, confirme que leu toda a documentação de referência antes de iniciar.
```

---

## 📊 Resultado Esperado

Após usar este prompt, Claude Code deve:

1. **Ler toda a documentação** referenciada
2. **Seguir o checklist** fase por fase
3. **Criar todos os arquivos** listados
4. **Implementar validações** conforme especificado
5. **Adicionar estados** de loading, error, empty
6. **Garantir RLS** funcionando
7. **Testar manualmente** todos os casos
8. **Documentar** no histórico
9. **Fazer commit** com mensagem clara

---

## ⏱️ Timeline Esperada

- **Fase 1-2** (Types & Validations): 15-20 min
- **Fase 3** (Componentes): 60-90 min
- **Fase 4** (Backend): 20-30 min
- **Fase 5** (Estados): 15-20 min
- **Fase 6** (UI/UX): 30-45 min
- **Fase 7-8** (Performance & Quality): 20-30 min
- **Fase 9-10** (Segurança & Testes): 30-45 min
- **Fase 11-12** (Docs & Git): 15-20 min

**Total**: ~4-6 horas

---

## 💡 Dicas para Sucesso

1. **Seja específico**: Quanto mais detalhes no prompt, melhor o resultado
2. **Referencie docs**: Claude lê a documentação se você referenciar
3. **Use checklist**: Acompanhe fase por fase
4. **Teste continuamente**: Não espere tudo pronto para testar
5. **Ajuste conforme necessário**: Se algo não ficou bom, peça ajustes

---

## 🔄 Iteração e Melhorias

Após primeira implementação, você pode pedir:

- "Adicione animações de transição nas cards"
- "Implemente drag-and-drop para mudar status"
- "Adicione filtro por prioridade também"
- "Melhore o empty state com ilustração"
- "Adicione keyboard shortcuts"

---

**Este exemplo demonstra o uso completo do template para uma feature real de complexidade média.**
