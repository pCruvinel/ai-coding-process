# 🎨 Guia Completo: Figma Make - IA de Codificação Frontend

> **Versão**: 1.0
> **Última atualização**: 2025-11-17
> **Ferramenta**: Figma Make (figma.com/make)

---

## 📋 O Que é Figma Make?

**Figma Make** é uma plataforma de **Codificação com IA especializada em FRONTEND**.

Diferente de outras ferramentas de design, o Figma Make:
- ✅ Gera código **React + TypeScript** totalmente funcional
- ✅ Usa **Tailwind CSS v4.0** nativamente
- ✅ Tem biblioteca **Shadcn/ui completa** integrada
- ✅ Produz componentes modernos com hooks, estado e effects
- ✅ Integração nativa com **Supabase**

**IMPORTANTE**: Esta é uma ferramenta de **CODIFICAÇÃO**, não apenas design visual. Portanto, os prompts devem ser diretos e objetivos, sem processos complexos.

---

## 🛠️ Stack Técnica do Figma Make

### Linguagem & Framework

**React com TypeScript**
- Componentes `.tsx` totalmente funcionais
- Hooks modernos (useState, useEffect, custom hooks)
- Props tipadas
- Código limpo e production-ready

### Estilização

**Tailwind CSS v4.0**
- Utility classes modernas e responsivas
- Sistema de design tokens configurável
- Arquivo `/styles/globals.css` com variáveis CSS

**Biblioteca Shadcn/ui**
- Componentes prontos e acessíveis
- Botões, formulários, diálogos, tabelas, etc.
- Totalmente customizáveis

### Bibliotecas Integradas

O Figma Make domina estas bibliotecas:

- **lucide-react** - Ícones
- **recharts** - Gráficos e visualizações
- **motion/react** (Framer Motion) - Animações
- **react-hook-form + Zod** - Formulários robustos
- **react-dnd** - Drag & drop
- **sonner** - Notificações toast
- E muitas outras...

### Integração Nativa

**Supabase**
- Ferramentas específicas para conectar e configurar
- Queries otimizadas
- Auth integrado

---

## 📦 Componentes Shadcn/ui Disponíveis

### Navegação & Layout

| Componente | Uso |
|------------|-----|
| `navigation-menu` | Menu de navegação principal |
| `breadcrumb` | Navegação hierárquica (caminho de páginas) |
| `sidebar` | Barra lateral customizável |
| `menubar` | Menu estilo desktop (File, Edit, View...) |
| `tabs` | Abas para organizar conteúdo |
| `separator` | Divisores visuais |

### Formulários & Inputs

| Componente | Uso |
|------------|-----|
| `form` | Sistema completo com validação (React Hook Form + Zod) |
| `input` | Campos de texto |
| `textarea` | Área de texto multilinha |
| `select` | Dropdown de seleção |
| `checkbox` | Caixas de seleção |
| `radio-group` | Botões de rádio |
| `switch` | Toggle on/off |
| `slider` | Controle deslizante |
| `input-otp` | Código de verificação (OTP) |
| `calendar` | Seletor de data |
| `label` | Rótulos acessíveis |

### Exibição de Dados

| Componente | Uso |
|------------|-----|
| `table` | Tabelas responsivas |
| `card` | Cards com header/content/footer |
| `badge` | Etiquetas e tags |
| `avatar` | Foto de perfil com fallback |
| `progress` | Barra de progresso |
| `skeleton` | Placeholders de carregamento |
| `chart` | Gráficos (usando Recharts) |

### Feedback & Notificações

| Componente | Uso |
|------------|-----|
| `alert` | Mensagens de notificação |
| `alert-dialog` | Modal de confirmação |
| `sonner` | Notificações toast |
| `tooltip` | Dicas ao passar o mouse |
| `hover-card` | Card de preview ao hover |

### Overlays & Modais

| Componente | Uso |
|------------|-----|
| `dialog` | Modal/popup padrão |
| `sheet` | Painel deslizante lateral |
| `drawer` | Slide-in panels |
| `popover` | Popup posicionado |
| `context-menu` | Menu de contexto (clique direito) |
| `dropdown-menu` | Menu dropdown |

### Interação

| Componente | Uso |
|------------|-----|
| `button` | Botões (vários estilos) |
| `toggle` | Botão de duas estados |
| `toggle-group` | Grupo de toggles |
| `accordion` | Seções expansíveis |
| `collapsible` | Conteúdo retrátil |
| `carousel` | Carrossel de imagens/conteúdo |
| `command` | Paleta de comandos (Cmd+K style) |

### Utilitários

| Componente | Uso |
|------------|-----|
| `scroll-area` | Área com scroll customizado |
| `aspect-ratio` | Manter proporção de elementos |
| `resizable` | Painéis redimensionáveis |
| `pagination` | Controles de paginação |

---

## 🎨 Sistema de Design Tokens

### Cores (Design Tokens)

O Figma Make usa variáveis CSS em `/styles/globals.css`:

```css
--background, --foreground
--card, --card-foreground
--primary, --primary-foreground
--secondary, --secondary-foreground
--accent, --accent-foreground
--muted, --muted-foreground
--destructive, --destructive-foreground
--border, --input, --ring
```

**Como mencionar nos prompts:**
- ✅ "Use cores primary para CTAs e muted para backgrounds secundários"
- ✅ "Quero um tema escuro/claro personalizado com [suas cores]"
- ✅ "Aplique destructive nos botões de delete"

### Tipografia Automática

**IMPORTANTE**: O Figma Make já tem tipografia padrão configurada para cada elemento HTML.

**O que NÃO mencionar** (ele já cuida):
- ❌ "Fonte tamanho 24px"
- ❌ "Font weight bold"
- ❌ "Line height 1.5"

**O que SIM mencionar** (se precisar customizar):
- ✅ "Aumenta o tamanho dos títulos"
- ✅ "Deixa os parágrafos mais leves"
- ✅ "Aplica um estilo de fonte moderno/clássico/minimalista"

---

## 🎭 Ícones - Lucide React

O Figma Make tem acesso a milhares de ícones do **lucide-react**.

**Como mencionar:**
- ✅ "Adiciona ícones de Trash2 para deletar"
- ✅ "Use Menu para hamburguer, X para fechar"
- ✅ "Ícones ChevronDown, Search, User, Settings"
- ✅ Ou apenas: "adiciona ícones apropriados"

**Ver todos os ícones**: [lucide.dev/icons](https://lucide.dev/icons)

---

## 🖼️ Imagens - Unsplash

O Figma Make tem ferramenta integrada para buscar imagens reais do **Unsplash**.

**Como mencionar:**
- ✅ "Imagens de workspace moderno"
- ✅ "Fotos de pessoas trabalhando"
- ✅ "Background de natureza montanhas"

⚠️ **Dica**: Seja específico mas não detalhado demais (2-3 palavras-chave)

---

## 📚 Bibliotecas Especializadas

### Gráficos
**recharts** - Mencione: "gráfico de linha", "bar chart", "pie chart", "area chart"

### Animações
**motion/react** (Framer Motion) - Mencione: "animação suave", "fade in", "slide", "spring animation"

### Formulários
**react-hook-form + Zod** - Mencione: "formulário com validação", "validação de email/CPF"

### Interações
- **react-dnd** - Mencione: "drag and drop", "arrastar itens"
- **react-slick** - Mencione: "carrossel" (alternativa ao shadcn carousel)

### Layouts
**react-responsive-masonry** - Mencione: "masonry grid", "pinterest layout"

---

## 🗂️ Estrutura de Arquivos

O Figma Make segue esta estrutura automaticamente:

```
/App.tsx                    → Componente principal
/components/                → Seus componentes customizados
/components/ui/             → Shadcn (não mexe aqui)
/styles/globals.css         → Tokens de design
/imports/                   → SVGs do Figma
```

**Como mencionar:**
- ✅ "Cria componentes separados para [Card, Header, Sidebar]"
- ✅ "Organiza em componentes reutilizáveis"

---

## 💎 Como Escrever Bons Prompts

### Prompt BOM

```
"Crie um dashboard de vendas com:
- Card para métricas principais
- Table para lista de produtos
- Chart (bar chart) para vendas mensais
- Button primary para adicionar produto
- Dialog para formulário de novo produto
- Toast (sonner) para confirmações
- Ícones lucide apropriados
- Imagens unsplash de 'business analytics'"
```

### Prompt ÓTIMO (mais contexto)

```
"Dashboard admin com design moderno:
- Sidebar com navigation-menu
- Cards com badge mostrando status
- Recharts area chart para tendências
- Table com pagination
- Botões destructive para delete com alert-dialog
- Form com input, select e validação
- Tema: cores primary azul, accent verde
- Animações suaves com motion
- Responsivo mobile-first"
```

### Para Edições

```
"Adiciona skeleton loading nos cards"
"Muda botão para variant outline"
"Adiciona tooltip nos ícones"
"Aplica cores muted no background"
```

---

## 📋 Checklist de Menção nos Prompts

Sempre que possível, mencione:

- [ ] **Componentes Shadcn** específicos (button, card, dialog, etc.)
- [ ] **Ícones Lucide** (ou "ícones apropriados")
- [ ] **Tipo de gráfico** (recharts: line, bar, pie, area)
- [ ] **Animações** (motion/react: fade, slide, spring)
- [ ] **Cores do design system** (primary, secondary, accent, etc.)
- [ ] **Layout** (responsivo, mobile-first, desktop)
- [ ] **Imagens Unsplash** (2-3 palavras-chave)
- [ ] **Tipo de validação** em formulários (Zod)

**Dica de ouro**: Quanto mais você mencionar "usando [componente/biblioteca específica]", mais rápido e preciso o Figma Make trabalha!

---

## 🎯 Template de Prompt Inicial Completo

Use este template para iniciar projetos com contexto máximo:

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

🧩 COMPONENTES & FUNCIONALIDADES

Páginas/Seções principais:
- [Nome da seção] - [breve descrição]
- [Nome da seção] - [breve descrição]

Componentes Shadcn necessários:
[button, card, table, dialog, form, select, etc]

Ícones:
[Mencione estilos específicos ou diga "ícones lucide apropriados"]

Imagens:
[Descreva tipo de imagens: fotos de pessoas, produtos, paisagens, etc]
[Keywords para Unsplash: "keyword1", "keyword2"]

💾 DADOS & BACKEND

Necessita backend?
[Sim/Não/Talvez]

Se SIM:
- Tipo de dados: [usuários, produtos, posts, etc]
- Funcionalidades: [CRUD, autenticação, upload, busca, etc]
- Supabase: [Sim, quero integrar / Não, só frontend / Sugira você]

Dados mock:
[Quantos itens de exemplo? Que tipo de dados?]

🎭 INTERATIVIDADE

Animações:
[Suaves, Mínimas, Elaboradas, Nenhuma]

Interações especiais:
[Drag & drop, Filtros, Busca em tempo real, Modais, Tooltips, etc]

Formulários:
[Quais campos? Que validações? (email, CPF, obrigatórios, etc)]

📊 VISUALIZAÇÕES DE DADOS

Gráficos necessários:
[Line chart, Bar chart, Pie chart, Area chart, Nenhum]

Dados dos gráficos:
[O que mostram? Vendas, métricas, analytics, etc]

✨ EXTRAS

Bibliotecas específicas:
[Recharts, Motion, React Hook Form, outras...]

Recursos especiais:
[Tema claro/escuro, Multi-idioma, Acessibilidade especial, etc]

Prioridades:
[Performance, SEO, Acessibilidade, Estética, Velocidade de dev]

📝 OBSERVAÇÕES ADICIONAIS
[Qualquer informação extra, preferências, restrições, etc]
```

---

## 🌟 Exemplo Prático Preenchido

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

💾 DADOS & BACKEND

Necessita backend?
Sim, quero integrar com Supabase

Se SIM:
Tipo de dados:
- Usuários (nome, email, avatar, role)
- Projetos (título, descrição, cor, dono)
- Tarefas (título, descrição, status, prioridade, assignee, datas)
- Comentários (texto, autor, tarefa_id)

Funcionalidades:
- CRUD completo de projetos e tarefas
- Autenticação (email/senha)
- Atribuição de tarefas a membros
- Filtros e busca
- Real-time para atualizações de tarefas

Supabase: Sim, configure completo

Dados mock (para início):
- 3 projetos exemplo
- 15-20 tarefas distribuídas
- 4-5 usuários mock
- Status variados (pending, in_progress, completed)
- Prioridades (low, medium, high, urgent)

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

📊 VISUALIZAÇÕES DE DADOS

Gráficos necessários (Recharts):
- Line chart - Tarefas completadas por semana (últimos 30 dias)
- Bar chart - Tarefas por projeto
- Pie chart - Distribuição por prioridade
- Area chart - Velocity da equipe

Dados dos gráficos:
Métricas de produtividade, distribuição de carga,
progresso temporal

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

📝 OBSERVAÇÕES ADICIONAIS
- Use skeleton loading em todos os carregamentos
- Implemente estados vazios amigáveis
- Todas as ações destrutivas precisam confirmação
- Feedback visual para todas as ações (toast)
- Acessibilidade: foco visível, labels corretos
- Começe com dados mock, depois conecte Supabase
```

---

## 🎯 Por Que Este Template Funciona?

✅ **Contexto completo** - O Figma Make entende visão, usuários e objetivos
✅ **Decisões técnicas claras** - Sabe exatamente quais libs usar
✅ **Design definido** - Cores, estilo, componentes específicos
✅ **Escopo preciso** - Funcionalidades, páginas, interações
✅ **Dados estruturados** - Schema claro para backend
✅ **Prioridades** - Sabe o que é mais importante

---

## 💡 Dicas para Usar o Template

### Preenchimento
- **Não precisa preencher TUDO** - Quanto mais, melhor, mas funciona com o que tiver
- **Pode ser mais curto** - O importante: objetivo, componentes principais, estilo
- **"Você decide" funciona** - Ex: "Ícones apropriados", "Cores modernas"
- **Iterativo** - Pode começar simples e ir refinando depois

### Comunicação
- Seja específico mas conciso
- Mencione componentes Shadcn pelo nome
- Use termos técnicos que o Figma Make conhece
- Não adicione processos complexos

### Iteração
- Comece com MVP simples
- Itere em cima do que foi gerado
- Faça ajustes incrementais
- Teste frequentemente

---

## 🚀 Workflow Recomendado

```
1. Preencher template de prompt
   ↓
2. Colar no Figma Make (figma.com/make)
   ↓
3. Revisar e iterar o design/código
   ↓
4. Exportar código gerado
   ↓
5. Salvar em .ai/frontend-export.md
   ↓
6. Integrar no projeto real
   ↓
7. Conectar dados reais (Supabase)
   ↓
8. Testar e ajustar
```

---

## 📚 Recursos Úteis

- **Figma Make**: [figma.com/make](https://figma.com/make)
- **Shadcn/ui Docs**: [ui.shadcn.com](https://ui.shadcn.com)
- **Lucide Icons**: [lucide.dev](https://lucide.dev)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Recharts**: [recharts.org](https://recharts.org)

---

---

## 🧹 Limpeza e Reorganização do Projeto

Durante o desenvolvimento no Figma Make, é comum criar componentes duplicados, arquivos de teste, ou código que ficou obsoleto. **Quando o projeto está confuso**, use nosso guia especializado:

📘 **[Guia de Limpeza e Reorganização](./prompt-limpeza-projeto.md)**

### Problemas Comuns que Requerem Limpeza

- ❌ Múltiplas versões do mesmo componente (Header, HeaderOld, HeaderCopy)
- ❌ Imports quebrados
- ❌ Componentes não utilizados
- ❌ Código duplicado
- ❌ Arquivos de teste esquecidos

### Prompt Rápido de Limpeza

```markdown
🔍 AUDITORIA E LIMPEZA DO PROJETO

Por favor, faça uma auditoria completa:
1. Liste a estrutura atual de arquivos
2. Identifique componentes duplicados/não utilizados
3. Sugira quais arquivos deletar (AGUARDE confirmação)
4. Mostre a estrutura ideal reorganizada

Objetivo do projeto: [descreva]
```

**Ver template completo**: [`prompt-limpeza-projeto.md`](./prompt-limpeza-projeto.md)

---

## 🚀 Quando Migrar para IDE (VSCode/Next.js)?

O Figma Make é perfeito para **protótipos e MVPs**, mas há momentos em que migrar para uma IDE profissional faz sentido.

📘 **[Guia Completo de Migração para IDE](./guia-migracao-ide.md)**

### ✅ FIQUE no Figma Make se:

- ✅ Está validando ideia/MVP
- ✅ Funcionalidades básicas (CRUD + Supabase)
- ✅ Time pequeno/solo
- ✅ Precisa iterar rápido
- ✅ Não precisa SEO avançado
- ✅ Não precisa backend complexo

### ⚠️ MIGRE para IDE quando:

- ⚠️ Validou o produto com usuários
- ⚠️ Precisa escalar (50k+ usuários/mês)
- ⚠️ SEO é crítico
- ⚠️ Precisa features que Figma Make não faz:
  - Geração de PDFs complexos
  - Integração com APIs externas complexas
  - IA/ML avançado
  - Testes automatizados
  - CI/CD
  - Múltiplos ambientes (dev/staging/prod)

### Stack Recomendada Pós-Migração

```
Next.js 14 + TypeScript
  ↓
Tailwind CSS v4 (mesma do Figma Make!)
  ↓
Shadcn/ui (mesmos componentes!)
  ↓
Supabase (mantém o backend!)
  ↓
Vercel (deploy)
```

**80% do código é reutilizável!**

**Ver guia completo**: [`guia-migracao-ide.md`](./guia-migracao-ide.md)

---

## 📚 Documentos Relacionados

Durante o processo de desenvolvimento com Figma Make, consulte:

| Documento | Quando Usar |
|-----------|-------------|
| [`template-prompt-figma-make.md`](./template-prompt-figma-make.md) | Criar projeto inicial |
| [`prompt-limpeza-projeto.md`](./prompt-limpeza-projeto.md) | Projeto está confuso/duplicado |
| [`guia-migracao-ide.md`](./guia-migracao-ide.md) | Decidir se/quando migrar para IDE |
| [`componentes-shadcn.md`](./componentes-shadcn.md) | Escolher componentes |
| [`design-system.md`](./design-system.md) | Definir cores e tokens |
| [`padroes-tailwind-v4.md`](./padroes-tailwind-v4.md) | Classes Tailwind |

---

**Última atualização**: 2025-11-17
**Versão**: 1.1 (Adicionado limpeza e migração)
**Status**: ✅ Pronto para uso
