# 📘 Exemplo Prático: Implementação de Design Figma/v0

> **Exemplo**: Implementação de Dashboard Analytics
> **Design**: Exportado do Figma Make (v0)
> **Duração**: ~3-4 horas
> **Complexidade**: Média

---

## 🎯 Prompt Completo (Customizado)

```markdown
# Contexto do Projeto

Você é um desenvolvedor frontend especializado em Next.js + Supabase, trabalhando em **TaskMaster Pro**.

Vou implementar o **Dashboard de Analytics** que **já possui design pronto** no v0.dev.

## 📚 Documentação de Referência

1. **Contexto do Projeto**: `.ai/contexto-projeto.md`
2. **Design Exportado**: Veja seção abaixo
3. **Padrões de Código**: `.claude/skills/02-padroes-codigo/SKILL.md`
4. **Banco de Dados**: `docs/04-BANCO-DE-DADOS.md`

---

## 🎯 Feature a Implementar

**Nome**: Dashboard de Analytics

**Descrição**: Dashboard que mostra estatísticas e métricas do usuário, incluindo:
- Total de tarefas criadas
- Taxa de conclusão
- Tarefas por status (gráfico)
- Tarefas por prioridade (gráfico)
- Últimas atividades
- Produtividade semanal

**Design Disponível**:
- [x] v0.dev completo
- [x] Código exportado disponível (veja abaixo)
- [x] Design responsivo incluído

**Status do Backend**:
- [x] Backend já existe (tabela tasks)
- [ ] Backend precisa ajuste (adicionar queries agregadas)

---

## 🎨 Informações do Design

### Link do Design
https://v0.dev/r/abc123xyz (exemplo)

### Componentes Visuais Incluídos

- [x] Header do Dashboard com saudação
- [x] Cards de Estatísticas (4 cards)
  - Total de Tarefas
  - Tarefas Concluídas
  - Taxa de Conclusão
  - Tarefas Pendentes
- [x] Gráfico de Tarefas por Status (Bar Chart)
- [x] Gráfico de Tarefas por Prioridade (Pie Chart)
- [x] Lista de Atividades Recentes
- [x] Widget de Produtividade Semanal

### Interações Necessárias

- [x] Atualização automática dos dados
- [x] Hover nos cards mostra mais detalhes
- [x] Click nos gráficos filtra a lista de tarefas
- [x] Botão "Ver Todas" leva para /tasks
- [x] Selector de período (7 dias, 30 dias, 90 dias)

### Estados Visuais Necessários

- [x] Loading skeleton para cada seção
- [x] Empty state se usuário não tem tarefas
- [x] Error state se falha ao carregar dados
- [x] Success feedback ao atualizar dados

---

## 📝 Código Exportado do v0.dev

### Dashboard Component

```tsx
// Código exportado do v0.dev
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle, Clock, AlertCircle } from "lucide-react"

export default function Dashboard() {
  // Dados mockados
  const stats = {
    total: 48,
    completed: 32,
    inProgress: 12,
    todo: 4,
  }

  const completionRate = (stats.completed / stats.total) * 100

  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Acompanhe seu progresso e produtividade
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Tarefas
            </CardTitle>
            <Circle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">
              Todas as tarefas criadas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Concluídas
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completed}</div>
            <p className="text-xs text-muted-foreground">
              +12% em relação ao mês passado
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Em Progresso
            </CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.inProgress}</div>
            <p className="text-xs text-muted-foreground">
              Sendo trabalhadas agora
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taxa de Conclusão
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {completionRate.toFixed(0)}%
            </div>
            <Progress value={completionRate} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Tarefas por Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Concluídas</span>
                <span className="text-sm font-medium">{stats.completed}</span>
              </div>
              <Progress value={(stats.completed / stats.total) * 100} />

              <div className="flex items-center justify-between">
                <span className="text-sm">Em Progresso</span>
                <span className="text-sm font-medium">{stats.inProgress}</span>
              </div>
              <Progress value={(stats.inProgress / stats.total) * 100} />

              <div className="flex items-center justify-between">
                <span className="text-sm">A Fazer</span>
                <span className="text-sm font-medium">{stats.todo}</span>
              </div>
              <Progress value={(stats.todo / stats.total) * 100} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Concluiu "Implementar API"</p>
                  <p className="text-xs text-muted-foreground">Há 2 horas</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-4 w-4 text-blue-600" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Iniciou "Criar Dashboard"</p>
                  <p className="text-xs text-muted-foreground">Há 3 horas</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Concluiu "Setup Supabase"</p>
                  <p className="text-xs text-muted-foreground">Há 5 horas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
```

### Observações sobre o Código Exportado

- **Dados mockados**: `stats` object é fake, precisa vir do Supabase
- **Componentes shadcn/ui**: Card, Progress, e ícones do lucide-react
- **Atividades**: Array fake, precisa vir de queries reais
- **Gráficos**: Usando Progress bars, mas podemos melhorar com Recharts
- **TypeScript**: Precisa adicionar tipagem adequada

---

## ✅ Checklist de Implementação

### Fase 1: Análise do Design ✅

Completei a análise:

**Componentes identificados**:
- StatsCard (reutilizável para 4 stats)
- StatusChart (tarefas por status)
- RecentActivity (lista de atividades)

**shadcn/ui necessários**:
- [x] Card (já instalado)
- [x] Progress (já instalado)
- [ ] Select (para selector de período) - INSTALAR

**Backend status**:
- Existe tabela `tasks`
- Preciso criar queries agregadas para estatísticas
- Preciso query para atividades recentes

**Dados mockados a substituir**:
- `stats.total` → COUNT de tasks do usuário
- `stats.completed` → COUNT de tasks com status='done'
- `stats.inProgress` → COUNT de tasks com status='in_progress'
- `stats.todo` → COUNT de tasks com status='todo'
- Array de atividades → Query de tasks ordenadas por updated_at

### Fase 2: Preparação de Types & Data ✅

**Types criados**:

```typescript
// types/index.ts
export interface DashboardStats {
  total: number;
  completed: number;
  inProgress: number;
  todo: number;
  completionRate: number;
}

export interface TaskActivity {
  id: string;
  title: string;
  status: TaskStatus;
  updated_at: string;
}

export type PeriodFilter = '7d' | '30d' | '90d';
```

**Queries planejadas**:

```typescript
// lib/queries/dashboard.ts
import { createServerClient } from '@/lib/supabase/server';
import type { DashboardStats, TaskActivity } from '@/types';

export async function getDashboardStats(
  userId: string,
  period: PeriodFilter = '30d'
): Promise<DashboardStats> {
  const supabase = createServerClient();

  // Calcular data de início baseada no período
  const startDate = getStartDate(period);

  // Query agregada
  const { data: tasks } = await supabase
    .from('tasks')
    .select('status')
    .eq('user_id', userId)
    .gte('created_at', startDate);

  if (!tasks) {
    return {
      total: 0,
      completed: 0,
      inProgress: 0,
      todo: 0,
      completionRate: 0,
    };
  }

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === 'done').length,
    inProgress: tasks.filter(t => t.status === 'in_progress').length,
    todo: tasks.filter(t => t.status === 'todo').length,
  };

  return {
    ...stats,
    completionRate: stats.total > 0
      ? (stats.completed / stats.total) * 100
      : 0,
  };
}

export async function getRecentActivities(
  userId: string
): Promise<TaskActivity[]> {
  const supabase = createServerClient();

  const { data } = await supabase
    .from('tasks')
    .select('id, title, status, updated_at')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false })
    .limit(5);

  return data || [];
}
```

### Fase 3: Adaptação dos Componentes UI ✅

**Instalar Select component**:
```bash
npx shadcn-ui@latest add select
```

**Componente StatsCard reutilizável**:

```typescript
// components/features/dashboard/StatsCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number | string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
}

export function StatsCard({
  title,
  value,
  description,
  icon: Icon,
  iconColor = 'text-muted-foreground',
}: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`h-4 w-4 ${iconColor}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
```

**Dashboard Page (Server Component)**:

```typescript
// app/(dashboard)/dashboard/page.tsx
import { getDashboardStats, getRecentActivities } from '@/lib/queries/dashboard';
import { createServerClient } from '@/lib/supabase/server';
import { StatsCard } from '@/components/features/dashboard/StatsCard';
import { StatusChart } from '@/components/features/dashboard/StatusChart';
import { RecentActivity } from '@/components/features/dashboard/RecentActivity';
import { Circle, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const supabase = createServerClient();

  // Verificar autenticação
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  // Carregar dados
  const [stats, activities] = await Promise.all([
    getDashboardStats(user.id),
    getRecentActivities(user.id),
  ]);

  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Acompanhe seu progresso e produtividade
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total de Tarefas"
          value={stats.total}
          description="Todas as tarefas criadas"
          icon={Circle}
        />

        <StatsCard
          title="Concluídas"
          value={stats.completed}
          description={`${stats.completionRate.toFixed(0)}% de conclusão`}
          icon={CheckCircle2}
          iconColor="text-green-600"
        />

        <StatsCard
          title="Em Progresso"
          value={stats.inProgress}
          description="Sendo trabalhadas agora"
          icon={Clock}
          iconColor="text-blue-600"
        />

        <StatsCard
          title="A Fazer"
          value={stats.todo}
          description="Aguardando início"
          icon={AlertCircle}
          iconColor="text-orange-600"
        />
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <StatusChart stats={stats} />
        <RecentActivity activities={activities} />
      </div>
    </div>
  );
}
```

### Fase 4: Estados Visuais ✅

**Loading skeleton**:

```typescript
// app/(dashboard)/dashboard/loading.tsx
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardLoading() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-9 w-48" />
        <Skeleton className="h-5 w-64" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-4 w-24" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-16 mb-2" />
              <Skeleton className="h-3 w-32" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-48 w-full" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
```

**Empty state**:

```typescript
// components/features/dashboard/EmptyState.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ClipboardList } from 'lucide-react';

export function DashboardEmptyState() {
  return (
    <div className="container mx-auto py-16">
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-16 space-y-4">
          <ClipboardList className="h-16 w-16 text-muted-foreground" />
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold">Nenhuma tarefa ainda</h3>
            <p className="text-muted-foreground">
              Comece criando sua primeira tarefa para ver suas estatísticas
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/tasks/new">Criar Primeira Tarefa</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

### Testes Visuais ✅

**Comparação com design**:
- ✅ Cores corretas (verde para concluído, azul para progresso)
- ✅ Espaçamentos match (gap-4, py-8, space-y-8)
- ✅ Typography match (text-3xl, text-sm)
- ✅ Cards com mesma estrutura
- ✅ Ícones corretos

**Responsividade**:
- ✅ Mobile: Cards em coluna única
- ✅ Tablet: 2 colunas
- ✅ Desktop: 4 colunas de stats, 2 de gráficos

**Estados**:
- ✅ Loading com skeletons
- ✅ Empty state amigável
- ✅ Dados reais carregando

---

## 📊 Resultado Final

### Arquivos Criados

```
app/
└── (dashboard)/
    └── dashboard/
        ├── page.tsx              ✅ Server Component com dados reais
        ├── loading.tsx           ✅ Loading skeleton
        └── error.tsx             ✅ Error boundary

components/
└── features/
    └── dashboard/
        ├── StatsCard.tsx         ✅ Componente reutilizável
        ├── StatusChart.tsx       ✅ Gráfico de status
        ├── RecentActivity.tsx    ✅ Lista de atividades
        └── EmptyState.tsx        ✅ Estado vazio

lib/
└── queries/
    └── dashboard.ts              ✅ Queries agregadas

types/
└── index.ts                      ✅ Types adicionados
```

### Timeline Real

- **Análise do Design**: 15 min
- **Types & Queries**: 20 min
- **Adaptação de Componentes**: 60 min
- **Estados (Loading/Empty)**: 30 min
- **Testes Visuais**: 20 min
- **Polish & Ajustes**: 30 min

**Total**: ~3 horas

### Visual Match

**Correspondência com design**: ~98%

**Melhorias adicionadas**:
- Loading skeleton (não estava no design)
- Empty state (não estava no design)
- Error boundary
- TypeScript tipagem completa
- Queries otimizadas

---

## ✅ Checklist Final

- [x] Visual match com design v0
- [x] Dados reais do Supabase
- [x] Loading states
- [x] Empty state
- [x] Error handling
- [x] Responsivo
- [x] TypeScript sem erros
- [x] Performance otimizada
- [x] Código limpo
- [x] Documentado

---

**Implementação concluída com sucesso! 🎉**

O dashboard agora mostra dados reais do usuário, mantendo alta fidelidade ao design original do v0.dev.
```

---

## 💡 Lições Aprendidas

### O Que Funcionou Bem

1. **Código exportado do v0** foi um ótimo ponto de partida
2. **Componentização** (StatsCard reutilizável) economizou tempo
3. **Server Components** permitiram carregar dados sem client-side fetching
4. **shadcn/ui** facilitou manter consistência visual

### O Que Precisou Ajuste

1. **Queries agregadas** não estavam no design, tive que criar
2. **Loading skeleton** precisou ser desenhado do zero
3. **Empty state** não estava no design original
4. **Tipagem TypeScript** teve que ser adicionada manualmente

### Dicas para Próximas Implementações

1. **Sempre comece pelo código exportado** - é 60-70% do trabalho
2. **Substitua dados mockados primeiro** - fica claro o que falta
3. **Adicione estados depois** - não estão no design mas são essenciais
4. **Use componentes reutilizáveis** - DRY é importante
5. **Teste responsividade cedo** - evita retrabalho

---

**Este exemplo demonstra implementação completa de design v0.dev em projeto real Next.js + Supabase.**
