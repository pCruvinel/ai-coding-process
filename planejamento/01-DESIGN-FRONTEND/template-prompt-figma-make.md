# 📋 Template de Prompt para Figma Make

> **Versão**: 1.0
> **Última atualização**: 2025-11-17
> **Para usar em**: [figma.com/make](https://figma.com/make)

---

## 🎯 Como Usar Este Template

1. **Copie o template abaixo**
2. **Preencha as seções** com informações do seu projeto
3. **Cole no Figma Make** (figma.com/make)
4. **Revise o código gerado**
5. **Exporte e salve** em `.ai/frontend-export.md`

---

## 📝 TEMPLATE COMPLETO

```markdown
[NOME DO PROJETO]

🎯 OBJETIVO
[Descreva em 2-3 frases o que o app faz e para quem é]

👥 PÚBLICO-ALVO
[Quem vai usar? Ex: Administradores, clientes finais, vendedores, etc]

🖥️ TIPO DE APLICAÇÃO
[Web app, Landing page, Dashboard, E-commerce, Blog, SaaS, etc]

📱 DISPOSITIVOS
[Desktop, Mobile, Ambos (responsivo), Tablet]

---

🎨 DESIGN & ESTILO

Paleta de cores:
- Primary: [cor/hex] - [uso: CTAs, botões principais]
- Secondary: [cor/hex] - [uso: elementos secundários]
- Accent: [cor/hex] - [uso: destaques]
- Background: [claro/escuro/específico]

Estilo visual:
[Moderno, Minimalista, Corporativo, Criativo, Neumorphic, Glassmorphism, etc]

Referências:
[Se tiver: "inspirado em [site/app]" ou "estilo similar a [exemplo]"]

---

🧩 COMPONENTES & FUNCIONALIDADES

Páginas/Seções principais:
- [Nome da seção] - [breve descrição]
- [Nome da seção] - [breve descrição]
- [Nome da seção] - [breve descrição]

Componentes Shadcn necessários:
[button, card, table, dialog, form, select, etc]

Ícones:
[Mencione estilos específicos ou diga "ícones lucide apropriados"]

Imagens:
[Descreva tipo de imagens: fotos de pessoas, produtos, paisagens, etc]
[Keywords para Unsplash: "keyword1", "keyword2", "keyword3"]

---

💾 DADOS & BACKEND

Necessita backend?
[Sim/Não/Talvez]

Se SIM:
- Tipo de dados: [usuários, produtos, posts, etc]
- Funcionalidades: [CRUD, autenticação, upload, busca, etc]
- Supabase: [Sim, quero integrar / Não, só frontend / Sugira você]

Dados mock para início:
[Quantos itens de exemplo? Que tipo de dados?]

---

🎭 INTERATIVIDADE

Animações:
[Suaves, Mínimas, Elaboradas, Nenhuma]

Interações especiais:
[Drag & drop, Filtros, Busca em tempo real, Modais, Tooltips, etc]

Formulários:
[Quais campos? Que validações? (email, CPF, obrigatórios, etc)]

---

📊 VISUALIZAÇÕES DE DADOS

Gráficos necessários:
[Line chart, Bar chart, Pie chart, Area chart, Nenhum]

Dados dos gráficos:
[O que mostram? Vendas, métricas, analytics, etc]

---

✨ EXTRAS

Bibliotecas específicas:
[Recharts, Motion, React Hook Form, outras...]

Recursos especiais:
[Tema claro/escuro, Multi-idioma, Acessibilidade especial, etc]

Prioridades:
[Performance, SEO, Acessibilidade, Estética, Velocidade de dev]

---

📝 OBSERVAÇÕES ADICIONAIS
[Qualquer informação extra, preferências, restrições, etc]
```

---

## 📋 EXEMPLO PREENCHIDO: TaskFlow

```markdown
TaskFlow - Gerenciador de Projetos

🎯 OBJETIVO
App de gestão de tarefas e projetos para equipes pequenas e médias.
Permite criar projetos, atribuir tarefas, acompanhar progresso e
colaborar em tempo real.

👥 PÚBLICO-ALVO
- Gestores de projeto (visualização geral)
- Membros da equipe (tarefas individuais)
- Stakeholders (relatórios e métricas)

🖥️ TIPO DE APLICAÇÃO
Dashboard / SaaS Web App

📱 DISPOSITIVOS
Responsivo - Desktop first, mas funcional em mobile

---

🎨 DESIGN & ESTILO

Paleta de cores:
- Primary: Azul (#3B82F6) - Botões principais, links, CTAs
- Secondary: Roxo (#8B5CF6) - Elementos secundários, badges
- Accent: Verde (#10B981) - Confirmações, status positivo
- Destructive: Vermelho (#EF4444) - Exclusões, avisos
- Background: Cinza claro (#F9FAFB) com cards brancos

Estilo visual:
Moderno e clean, inspirado em Linear/Notion. Bordas suaves,
sombras sutis, bastante espaço em branco.

Referências:
Design similar ao Linear (linear.app) mas mais acessível

---

🧩 COMPONENTES & FUNCIONALIDADES

Páginas/Seções principais:
- Sidebar - Navegação principal e seletor de projetos
- Dashboard - Overview com métricas e gráficos
- Lista de Tarefas - Table com filtros e busca
- Kanban Board - Colunas drag & drop (To Do, Doing, Done)
- Detalhes da Tarefa - Sheet lateral com form completo
- Configurações - Gerenciamento de equipe e preferências

Componentes Shadcn necessários:
sidebar, navigation-menu, breadcrumb, card, badge, avatar,
table, pagination, button, input, textarea, select, checkbox,
dialog, sheet, alert-dialog, form, sonner, calendar,
dropdown-menu, tooltip, tabs, progress

Ícones:
Lucide: LayoutDashboard, CheckSquare, Users, Settings,
Plus, Trash2, Edit, Calendar, Filter, Search, MoreVertical,
ChevronRight, AlertCircle

Imagens:
- Empty states ilustrativos
- Avatares placeholder para usuários
- Unsplash: "team collaboration", "workspace minimal"

---

💾 DADOS & BACKEND

Necessita backend?
Sim, quero integrar com Supabase

Se SIM:
- Tipo de dados:
  - Usuários (nome, email, avatar, role)
  - Projetos (título, descrição, cor, dono)
  - Tarefas (título, descrição, status, prioridade, assignee, datas)
  - Comentários (texto, autor, tarefa_id)

- Funcionalidades:
  - CRUD completo de projetos e tarefas
  - Autenticação (email/senha)
  - Atribuição de tarefas a membros
  - Filtros e busca
  - Real-time para atualizações de tarefas

- Supabase: Sim, configure completo

Dados mock para início:
- 3 projetos exemplo
- 15-20 tarefas distribuídas
- 4-5 usuários mock
- Status variados (pending, in_progress, completed)
- Prioridades (low, medium, high, urgent)

---

🎭 INTERATIVIDADE

Animações:
Suaves e profissionais com Motion - fade in, slide, spring suave

Interações especiais:
- Drag & drop no Kanban (react-dnd)
- Filtros em tempo real (por status, prioridade, assignee)
- Busca instantânea de tarefas
- Sheet lateral para detalhes (não modal full)
- Tooltips em todos os ícones de ação
- Confirmação para exclusões (alert-dialog)
- Toast para feedback de ações

Formulários:
Campos de Tarefa:
- Título (obrigatório, min 3 caracteres)
- Descrição (textarea, opcional)
- Status (select: To Do, In Progress, Done)
- Prioridade (select: Low, Medium, High, Urgent)
- Assignee (select múltiplo de usuários)
- Data de entrega (calendar)
- Tags (input com badges)

Validação com Zod + React Hook Form

---

📊 VISUALIZAÇÕES DE DADOS

Gráficos necessários (Recharts):
- Line chart - Tarefas completadas por semana (últimos 30 dias)
- Bar chart - Tarefas por projeto
- Pie chart - Distribuição por prioridade
- Area chart - Velocity da equipe

Dados dos gráficos:
Métricas de produtividade, distribuição de carga,
progresso temporal

---

✨ EXTRAS

Bibliotecas específicas:
- Recharts (gráficos)
- Motion/React (animações)
- React Hook Form + Zod (forms)
- React-DnD (drag & drop Kanban)
- Date-fns (formatação de datas)

Recursos especiais:
- Toggle tema claro/escuro (usando design tokens)
- Atalhos de teclado (Command+K para busca)
- Badges coloridos para status e prioridades
- Empty states com ilustrações e CTAs

Prioridades:
1. Funcionalidade completa
2. UX intuitiva
3. Estética profissional
4. Performance (loading states, skeleton)

---

📝 OBSERVAÇÕES ADICIONAIS
- Use skeleton loading em todos os carregamentos
- Implemente estados vazios amigáveis
- Todas as ações destrutivas precisam confirmação
- Feedback visual para todas as ações (toast)
- Acessibilidade: foco visível, labels corretos
- Começe com dados mock, depois conecte Supabase
```

---

## 📋 VERSÃO SIMPLIFICADA (MVP Rápido)

Para projetos mais simples, use esta versão reduzida:

```markdown
[NOME DO PROJETO]

🎯 O QUE FAZ
[1-2 frases descrevendo a funcionalidade principal]

🎨 DESIGN
- Cores: [primary], [secondary], [accent]
- Estilo: [moderno/minimalista/corporativo/etc]
- Responsivo: [sim/não]

🧩 COMPONENTES
Páginas:
- [Página 1]
- [Página 2]
- [Página 3]

Shadcn/ui:
[button, card, form, table, etc]

💾 DADOS
- Backend: [Supabase/Mock/Nenhum]
- Tipo: [lista de entidades principais]

✨ EXTRAS
[Qualquer coisa importante não mencionada acima]
```

---

## 💡 Dicas de Preenchimento

### Seção: Objetivo
- Seja claro e direto
- Foque no valor para o usuário
- Máximo 3 frases

### Seção: Design & Estilo
- Use hex codes para cores (#3B82F6)
- Mencione referências visuais (Linear, Notion, etc.)
- Seja específico no estilo

### Seção: Componentes
- **Liste componentes Shadcn pelo nome**
- Mencione ícones Lucide específicos
- Descreva interações claramente

### Seção: Dados
- Especifique se quer Supabase ou mock
- Liste as entidades principais
- Descreva relacionamentos se complexos

### Seção: Interatividade
- Mencione bibliotecas específicas (Framer Motion, react-dnd)
- Descreva animações desejadas
- Liste validações de formulário

---

## ✅ Checklist Antes de Enviar

Antes de colar no Figma Make, verifique:

- [ ] Nome do projeto está claro
- [ ] Objetivo está bem descrito (2-3 frases)
- [ ] Cores estão definidas (hex codes)
- [ ] Componentes Shadcn listados
- [ ] Páginas principais descritas
- [ ] Backend definido (Supabase/Mock/Nenhum)
- [ ] Interações especiais mencionadas
- [ ] Prioridades claras

---

## 🔄 Workflow Pós-Prompt

Depois de enviar o prompt ao Figma Make:

1. **Revisar código gerado**
   - Verificar componentes criados
   - Testar funcionalidades básicas
   - Ajustar cores/estilos se necessário

2. **Iterar conforme necessário**
   - Fazer pequenos ajustes
   - Adicionar detalhes faltantes
   - Refinar interações

3. **Exportar código**
   - Baixar código do Figma Make
   - Salvar em `.ai/frontend-export.md`
   - Documentar componentes criados

4. **Preparar para integração**
   - Revisar estrutura de arquivos
   - Identificar dados mockados
   - Planejar conexão com backend real

---

## 📚 Recursos de Referência

Ao preencher o template, consulte:

- **[Guia Figma Make](./guia-figma-make.md)** - Sabedoria completa
- **[Componentes Shadcn](./componentes-shadcn.md)** - Lista completa
- **[Design System](./design-system.md)** - Padrões de design
- **[Padrões Tailwind](./padroes-tailwind-v4.md)** - Tailwind CSS v4

---

## 🎯 Exemplos Adicionais

### Landing Page Simples

```markdown
LandingCo - Landing Page Corporativa

🎯 O QUE FAZ
Landing page moderna para captação de leads com
formulário de contato e seções institucionais.

🎨 DESIGN
- Cores: Primary #2563EB (azul), Accent #10B981 (verde)
- Estilo: Moderno, corporativo, clean
- Responsivo: Sim, mobile-first

🧩 COMPONENTES
Páginas:
- Home (Hero, Features, Testimonials, CTA, Footer)

Shadcn/ui:
button, card, input, form, badge

Ícones: lucide apropriados

Imagens: Unsplash "business", "team", "technology"

💾 DADOS
- Backend: Formulário envia para email (não precisa DB)
- Validação: email obrigatório, nome min 3 caracteres

✨ EXTRAS
- Animações suaves ao scroll (Framer Motion)
- Form validation com Zod
- Toast de sucesso ao enviar
```

### Dashboard Analítico

```markdown
Analytics Pro - Dashboard de Métricas

🎯 O QUE FAZ
Dashboard analítico para visualização de KPIs e
métricas de negócio em tempo real.

🎨 DESIGN
- Cores: Primary #6366F1 (indigo), Background dark (#0F172A)
- Estilo: Moderno, dark mode, glassmorphism
- Responsivo: Sim, desktop-first

🧩 COMPONENTES
Páginas:
- Dashboard Principal (KPI cards, charts, tables)
- Detalhes (drill-down de métricas)

Shadcn/ui:
card, badge, table, tabs, select, calendar,
tooltip, skeleton

Ícones: TrendingUp, ArrowUp, ArrowDown, DollarSign

Gráficos: Recharts (line, bar, area charts)

💾 DADOS
- Backend: Supabase
- Entidades: metrics, users, events
- Real-time: Sim, para atualização de métricas

✨ EXTRAS
- Dark mode nativo
- Skeleton loading em todos os cards
- Filtros por período (hoje, semana, mês, ano)
- Export para CSV/PDF
```

---

## 🚀 Próximos Passos

Após gerar o design no Figma Make:

1. **Exportar código** e salvar em `.ai/frontend-export.md`
2. **Prosseguir para Fase 2**: [Transição para Backend](../02-TRANSICAO-BACKEND/README.md)
3. **Documentar componentes** criados
4. **Obter aprovação** do cliente/stakeholders

---

**Última atualização**: 2025-11-17
**Versão**: 1.0
**Status**: ✅ Pronto para uso
