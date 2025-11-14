# ✅ FASE 1: Checklist - Design Frontend com FigmaMake + Tailwind v4 + Shadcn

## 📋 PRÉ-DESIGN (1 dia)

### Análise do PRD
- [ ] PRD lido completamente
- [ ] Todas as features entendidas
- [ ] Personas e user journeys revisadas
- [ ] Workflows mapeados (fluxo de usuário)

### Brief de Design - Tailwind v4 + Shadcn
- [ ] **Paleta de cores definida** (com tokens CSS)
  - [ ] Cores primárias (primary, primary-dark, primary-light)
  - [ ] Cores secundárias (secondary, accent, muted)
  - [ ] Cores de estado (success, warning, destructive)
  - [ ] Cores neutras (background, foreground, border)
- [ ] **Tipografia padronizada**
  - [ ] Font family definida (e.g., Inter, Poppins)
  - [ ] Tamanhos: h1, h2, h3, body, small, code
  - [ ] Espaçamento de linha (line-height)
  - [ ] Peso de fonte (regular, medium, bold)
- [ ] **Spacing/Grid system**
  - [ ] Base unit definido (4px, 8px)
  - [ ] Escala de espaçamento (xs: 4px, sm: 8px, md: 16px, etc)
- [ ] **Componentes Shadcn/ui** a usar identificados
  - [ ] Button, Input, Select, Textarea
  - [ ] Dialog, Dropdown Menu, Popover
  - [ ] Card, Tabs, Accordion
  - [ ] Toast, Alert, Badge
  - [ ] Table, DataGrid
  - [ ] Form components (com validação)
- [ ] **Telas mapeadas**
  - [ ] Número total de telas: ___
  - [ ] Telas críticas (MVP) listadas
  - [ ] Telas secundárias listadas
  - [ ] Fluxos de navegação mapeados
- [ ] **Preferências do cliente documentadas**
  - [ ] Cores/branding existente
  - [ ] Design references / moodboards
  - [ ] Requisitos de acessibilidade

## 🎨 CRIAÇÃO DO DESIGN NO FIGMAMAKER (2-3 dias)

### Setup FigmaMake
- [ ] Conta criada em [figmamaker.com](https://figmamaker.com)
- [ ] Novo projeto criado
- [ ] Brief de design inserido no prompt de IA
- [ ] Arquivo de configuração gerado (design tokens)

### Telas Obrigatórias
- [ ] **Login / Signup**
  - [ ] Login com email/senha
  - [ ] Signup com validações
  - [ ] Forgot password flow
  - [ ] Social login (OAuth)
- [ ] **Dashboard / Homepage**
  - [ ] Layout principal (header + sidebar + content)
  - [ ] Cards de resumo/KPIs
  - [ ] Gráficos/visualizações
  - [ ] Links para features principais
- [ ] **Página Principal da Feature**
  - [ ] Lista principal (com filtros/busca)
  - [ ] Paginação ou infinite scroll
  - [ ] Bulk actions (se aplicável)
- [ ] **CRUD da Feature**
  - [ ] Criar novo item (form completo)
  - [ ] Ler/visualizar item (detail view)
  - [ ] Atualizar item (edit form)
  - [ ] Deletar item (confirmação)
- [ ] **Perfil / Settings**
  - [ ] Editar perfil (foto, dados)
  - [ ] Preferências (theme, language, notificações)
  - [ ] Segurança (senha, 2FA)
  - [ ] Dados/export/delete account
- [ ] **Admin Panel** (se aplicável)
  - [ ] Dashboard admin (KPIs, estatísticas)
  - [ ] Gestão de usuários (lista, editar, suspender)
  - [ ] Logs/auditoria
  - [ ] Configurações da aplicação

### Estados de Cada Tela
Para **CADA tela**, criar e documentar no FigmaMake:
- [ ] **Estado Normal** (com dados preenchidos)
- [ ] **Estado Vazio** (sem dados, empty state)
- [ ] **Estado Loading** (skeleton, spinner)
- [ ] **Estado Error** (mensagem de erro, retry)
- [ ] **Estado Mobile** (adaptado para 375px)
- [ ] **Estado Tablet** (adaptado para 768px)
- [ ] **Dark Mode** (versão escura com tema inverso)

### Componentes Reutilizáveis (Shadcn + Tailwind)
- [ ] **Botões**
  - [ ] Button (primary, secondary, outline, ghost)
  - [ ] Button sizes (sm, md, lg)
  - [ ] Button states (normal, hover, active, disabled, loading)
- [ ] **Inputs/Forms**
  - [ ] Input text (com validação visual)
  - [ ] Input email, number, password
  - [ ] Textarea (com character count)
  - [ ] Select/Dropdown
  - [ ] Checkbox, Radio, Toggle
  - [ ] Form labels + help text + error messages
- [ ] **Layout Components**
  - [ ] Card (com variações: default, highlighted, interactive)
  - [ ] Container/Page wrapper
  - [ ] Section dividers
  - [ ] Breadcrumbs
- [ ] **Navigation**
  - [ ] Header/Navbar (com logo, menu, user menu)
  - [ ] Sidebar (com links, collapse)
  - [ ] Tabs
  - [ ] Pagination
  - [ ] Breadcrumbs
- [ ] **Feedback Components**
  - [ ] Alert (success, warning, error, info)
  - [ ] Toast/Notification
  - [ ] Badge/Label
  - [ ] Progress bar
  - [ ] Spinner/Loader
- [ ] **Modais/Overlays**
  - [ ] Dialog/Modal (simples, com formulário)
  - [ ] Dropdown Menu
  - [ ] Popover
  - [ ] Confirmation dialog
- [ ] **Data Display**
  - [ ] Table (com sorting, filtering)
  - [ ] List view
  - [ ] Grid view
  - [ ] Timeline
  - [ ] Stats cards
- [ ] **Icones**
  - [ ] Biblioteca definida (Lucide React)
  - [ ] Icones listados por tela/componente

### Responsividade Documentada
- [ ] Breakpoints definidos:
  - [ ] Mobile: 375px (iPhone SE)
  - [ ] Tablet: 768px (iPad)
  - [ ] Desktop: 1024px
  - [ ] Large desktop: 1920px
- [ ] [ ] Cada tela testada em 3 breakpoints mínimo
- [ ] [ ] Navegação adaptada para mobile (hamburger menu)
- [ ] [ ] Tabelas adaptadas para mobile (card layout ou scroll)
- [ ] [ ] Imagens responsivas (srcset)
- [ ] [ ] Touch targets adequados (min 44x44px no mobile)

### Design System Documentado no FigmaMake
- [ ] **Paleta de cores exportada como tokens CSS**
  ```css
  --color-primary: #3b82f6;
  --color-primary-dark: #1e40af;
  --color-secondary: #10b981;
  /* ... etc */
  ```
- [ ] **Tipografia documentada**
  - [ ] Font families importadas
  - [ ] Font sizes em escala
  - [ ] Line heights, letter spacing definidos
- [ ] **Spacing/Grid exportado como tokens**
  ```css
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  /* ... etc */
  ```
- [ ] **Sombras/Elevations definidas**
  ```css
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  /* ... etc */
  ```
- [ ] **Bordas/Radii padronizadas**
  ```css
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  ```

## 👥 FEEDBACK DO CLIENTE (2-3 revisões)

### Review 1: Wireframes (3-5 dias)
- [ ] **Wireframes criados no FigmaMake** (versão sem cores, apenas layout)
  - [ ] Todas as telas wireframed
  - [ ] Fluxo navegacional claro
  - [ ] Disposição de elementos aprovada
- [ ] **Enviado para cliente**
  - [ ] Link do projeto FigmaMake compartilhado
  - [ ] Comentários habilitados
  - [ ] Prazo de feedback definido (48h)
- [ ] **Feedback recolhido**
  - [ ] Cliente comentou nas telas
  - [ ] Dúvidas respondidas
  - [ ] Ajustes anotados
- [ ] **Ajustes incorporados**
  - [ ] Wireframes atualizados
  - [ ] Confirmação de cliente obtida

### Review 2: Design Visual + Componentes (5-7 dias)
- [ ] **Design visual completo no FigmaMake**
  - [ ] Cores aplicadas
  - [ ] Tipografia definida
  - [ ] Componentes Shadcn/ui integrados
  - [ ] Espaciamento finalizado
  - [ ] Ícones inseridos
- [ ] **Componentes reutilizáveis visíveis**
  - [ ] Biblioteca de componentes documentada
  - [ ] Variações de cada componente mostradas
  - [ ] Estados visuais documentados
- [ ] **Enviado para cliente**
  - [ ] Link atualizado do FigmaMake
  - [ ] Notas de mudanças incluídas
- [ ] **Feedback recolhido**
  - [ ] Cores aprovadas
  - [ ] Tipografia aprovada
  - [ ] Layout e hierarquia aprovados
  - [ ] Ajustes visuais anotados
- [ ] **Ajustes aplicados**
  - [ ] Iterações rápidas feitas
  - [ ] Design refinado

### Review 3: Responsividade + Detalhes (final)
- [ ] **Responsividade testada**
  - [ ] FigmaMake mostrando versões mobile/tablet
  - [ ] Breakpoints validados visualmente
  - [ ] Comportamentos em diferentes tamanhos explicados
- [ ] **Estados de interação documentados**
  - [ ] Hover states vistos
  - [ ] Active/Selected states claros
  - [ ] Disabled states vistos
  - [ ] Error/Loading states comunicativos
- [ ] **Edge cases discutidos**
  - [ ] Textos longos em inputs
  - [ ] Muitos itens em listas
  - [ ] Diferentes idiomas (se multilíngue)
  - [ ] Dark mode mostrando
- [ ] **Aprovação final obtida**
  - [ ] Email de aprovação do cliente
  - [ ] Sign-off on design antes de código
  - [ ] Permissão para prosseguir ao código

## 💻 EXPORT DO CÓDIGO TAILWIND V4 (1 dia)

### Em FigmaMake
- [ ] **Código Tailwind v4 gerado e exportado**
  - [ ] `.tsx` components exportados
  - [ ] `tailwind.config.ts` gerado com tokens CSS
  - [ ] `globals.css` com variáveis customizadas
  - [ ] `components.css` com utility classes customizadas
- [ ] **Verificação de qualidade do código**
  - [ ] Aplicação roda sem erros (`npm run dev`)
  - [ ] Sem erros no console do navegador
  - [ ] Sem warnings de TypeScript
  - [ ] Sem warnings do Tailwind CSS
- [ ] **Dados mockados inseridos**
  - [ ] Componentes têm dados de exemplo
  - [ ] Listas não estão vazias
  - [ ] Formulários têm exemplos preenchidos
- [ ] **Navegação entre telas funciona**
  - [ ] Links entre páginas funcionam
  - [ ] Navegação back/forward funciona
  - [ ] Nenhuma página 404
- [ ] **Performance aceitável**
  - [ ] Aplicação carrega em < 3s
  - [ ] Transições são smooth
  - [ ] Sem layout shifts (CLS OK)
  - [ ] Imagens otimizadas

### Estrutura de Pastas Criada
```
src/
├── components/
│   ├── ui/                    # Shadcn components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── [others...]
│   ├── layout/               # Layout components
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   ├── footer.tsx
│   │   └── layout.tsx
│   ├── forms/                # Form components
│   │   ├── login-form.tsx
│   │   ├── profile-form.tsx
│   │   └── [others...]
│   └── [page-specific]/      # Components por página
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── signup/
│   │   └── forgot-password/
│   ├── (app)/
│   │   ├── dashboard/
│   │   ├── [feature]/
│   │   ├── settings/
│   │   └── [admin]/
│   ├── api/                  # API routes (future)
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   ├── utils.ts              # Utility functions
│   └── hooks.ts              # Custom hooks
├── styles/
│   ├── globals.css           # Design tokens
│   └── variables.css         # CSS variables
├── types/
│   └── index.ts              # TypeScript types
└── tailwind.config.ts        # Tailwind config com tokens
```

### Preparação para GitHub
- [ ] **README.md criado**
  - [ ] Nome do projeto
  - [ ] Descrição breve
  - [ ] Tech stack listado
  - [ ] Instruções setup:
    ```bash
    npm install
    npm run dev
    ```
  - [ ] Estrutura de pastas explicada
  - [ ] Como contribuir
  - [ ] Licença

- [ ] **.env.example criado**
  ```
  # Para uso futuro (backend)
  NEXT_PUBLIC_API_URL=http://localhost:3000/api
  ```

- [ ] **.gitignore configurado**
  - [ ] node_modules/
  - [ ] .next/
  - [ ] .env.local
  - [ ] .env*.local

- [ ] **package.json configurado**
  - [ ] Dependencies corretas:
    - [ ] next
    - [ ] react
    - [ ] tailwindcss v4
    - [ ] @radix-ui/primitives
    - [ ] lucide-react
  - [ ] Scripts definidos:
    ```json
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
    ```

- [ ] **tailwind.config.ts completado**
  - [ ] Extensões de cores (tokens)
  - [ ] Extensões de espaçamento
  - [ ] Extensões de tipografia
  - [ ] Plugins instalados (forms, etc)

### Git & GitHub
- [ ] **Repositório Git inicializado**
  - [ ] `git init` executado
  - [ ] `.gitignore` configurado
  - [ ] Commit inicial feito

- [ ] **Vinculado ao repositório remoto**
  - [ ] Repository criado no GitHub
  - [ ] `git remote add origin` configurado

- [ ] **Branch de feature criada**
  - [ ] Branch `design/frontend` criada
  - [ ] Checkout realizado para nova branch

- [ ] **Código commitado com mensagens claras**
  - [ ] `git add .` realizado
  - [ ] Commit message: "feat: Initial design export from FigmaMake - Tailwind v4 + Shadcn components"
  - [ ] `git commit` executado

- [ ] **Push para GitHub**
  - [ ] `git push -u origin design/frontend` realizado
  - [ ] Verificado no GitHub (repositório público/privado)
  - [ ] Branch visível no GitHub

- [ ] **Link compartilhado com cliente** (opcional)
  - [ ] Link do repositório enviado
  - [ ] Instruções de acesso compartilhadas
  - [ ] Link para ver em produção (se houve deploy)

## 📚 DOCUMENTAÇÃO DE SAÍDA

### Design Export Document
- [ ] **`.ai/design-export.md` criado com:**

#### 1. Resumo Executivo
- [ ] Nome do projeto
- [ ] Versão do design
- [ ] Data de criação
- [ ] Responsável(eis)

#### 2. Design System Documentado
- [ ] **Paleta de cores** (com hex, rgb, tokens CSS)
  ```
  Primary: #3b82f6 (var(--color-primary))
  Secondary: #10b981 (var(--color-secondary))
  ...
  ```
- [ ] **Tipografia**
  - [ ] Font principal + fallback
  - [ ] Escala de tamanhos (h1: 2.25rem, h2: 1.875rem, etc)
  - [ ] Line heights, letter spacing
- [ ] **Spacing scale**
  - [ ] Unidades (xs: 4px, sm: 8px, md: 16px, etc)
  - [ ] Usado em padding, margin, gaps
- [ ] **Componentes Shadcn/ui**
  - [ ] Lista de componentes usados
  - [ ] Customizações realizadas
  - [ ] Variações por componente

#### 3. Telas & Componentes
- [ ] Listagem de todas as telas criadas
  ```markdown
  ### Telas Criadas
  1. **Login** - Autenticação
     - Componentes: Input, Button, Alert
     - Estados: Normal, Loading, Error
     - Path: `/src/app/(auth)/login/page.tsx`

  2. **Dashboard** - Visão geral
     ...
  ```
- [ ] Props de componentes documentadas
  ```markdown
  ### Button Component
  Props esperadas:
  - `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
  - `size`: 'sm' | 'md' | 'lg'
  - `disabled`: boolean
  - `loading`: boolean
  ```
- [ ] Estados visuais descritos

#### 4. Dados Mockados Mapeados
- [ ] Estrutura dos dados por tela
  ```json
  {
    "user": { "id": "1", "name": "John", "email": "john@example.com" },
    "projects": [{ "id": "1", "name": "Project A", "status": "active" }]
  }
  ```
- [ ] APIs necessárias identificadas
- [ ] Endpoints esperados documentados

#### 5. Tecnologia Stack
- [ ] Framework: Next.js 14 + React 18 + TypeScript
- [ ] Styling: Tailwind CSS v4
- [ ] Componentes: Shadcn/ui
- [ ] Ícones: Lucide React
- [ ] Outros: [dependências importantes]

#### 6. Estrutura de Pastas
```
Documentar estrutura criada em /src
```

#### 7. Como Rodar Localmente
```bash
npm install
npm run dev
# Acesse http://localhost:3000
```

#### 8. Próximos Passos
- [ ] Lista do que fazer:
  - [ ] Implementar APIs no backend
  - [ ] Integração com Supabase
  - [ ] Testes automatizados
  - [ ] Deploy em produção

### Component Inventory Spreadsheet (Opcional)
Criar tabela com:
| Componente | Localização | Props | Estados | Notas |
|-----------|------------|-------|---------|-------|
| Button | src/components/ui/button.tsx | variant, size, disabled | normal, hover, active, disabled | Shadcn base |
| Input | src/components/ui/input.tsx | type, placeholder, error | normal, focus, error | Com validação |
| ... | ... | ... | ... | ... |

### Guia de Navegação
- [ ] **Fluxo de usuário documentado**
  ```markdown
  Usuário não autenticado:
  / (login) → Dashboard (após login)

  Usuário autenticado:
  Dashboard → [Feature] → CRUD operações → Settings
  ```
- [ ] **Rotas/URLs documentadas**
- [ ] **Comportamentos especiais explicados** (redirecionamentos, etc)

## ✅ CRITÉRIOS DE CONCLUSÃO

Você completou FASE 1 quando TODOS esses critérios são atendidos:

### Completude ✅
- [ ] ✅ TODAS as features do PRD têm telas (nenhuma omitida)
- [ ] ✅ Todos os estados visuais (normal, loading, error, empty) desenhados
- [ ] ✅ Componentes reutilizáveis identificados + documentados
- [ ] ✅ Responsivo para 3 breakpoints testado (mobile, tablet, desktop)
- [ ] ✅ Dark mode pronto (se aplicável)
- [ ] ✅ Acessibilidade considerada (cores com contraste, fonts legíveis, touch targets)

### Qualidade ✅
- [ ] ✅ Design é limpo, profissional e intuitivo
- [ ] ✅ Sem ambiguidades visuais (cores, espaçamento, tipografia claros)
- [ ] ✅ Padrões UX consistentes (não há surpresas)
- [ ] ✅ Componentes seguem padrões Shadcn/ui
- [ ] ✅ Nenhuma quebra de marca visual entre telas

### Aprovação Cliente ✅
- [ ] ✅ Cliente viu e aprovou wireframes (email/doc)
- [ ] ✅ Cliente viu e aprovou design visual (email/doc)
- [ ] ✅ Cliente testou responsividade e aprovou
- [ ] ✅ Cliente aprovou componentes e layout final
- [ ] ✅ Cliente pediu por escrito para prosseguir ao código

### Código Frontend Pronto ✅
- [ ] ✅ Código está no GitHub (repositório público/privado)
- [ ] ✅ Aplicação roda localmente sem erros:
  ```bash
  npm install
  npm run dev
  # Tudo funciona, sem erros no console
  ```
- [ ] ✅ Nenhum erro crítico ou warning
- [ ] ✅ TypeScript compila sem erros (`tsc --noEmit`)
- [ ] ✅ Tailwind v4 gerando CSS sem warnings
- [ ] ✅ Responsividade funciona (testar em Chrome DevTools)

### Documentação Completa ✅
- [ ] ✅ `.ai/design-export.md` com todos os detalhes
- [ ] ✅ Design system documentado (cores, tipos, spacing)
- [ ] ✅ Component inventory criado
- [ ] ✅ README.md com instruções setup
- [ ] ✅ `.env.example` criado
- [ ] ✅ `tailwind.config.ts` com tokens CSS customizados
- [ ] ✅ Todos os comentários de código claros

### Git Status ✅
- [ ] ✅ Commits com mensagens descritivas
- [ ] ✅ Branch de feature limpa (`design/frontend` ou similar)
- [ ] ✅ Código pushado para GitHub
- [ ] ✅ README visitável no GitHub

## 🚨 Quando Você Fica Preso

### Problema: Cliente quer muitos ajustes no design
**Solução**: Definir máximo de 2-3 rodadas de feedback. Após isso, agendar reunião para priorizar. Use: "Essas mudanças vão atrasar o lançamento X dias. Vamos priorizar as 3 mais importantes para este MVP?"

### Problema: Design responsivo não está funcionando
**Solução**: FigmaMake oferece preview responsivo automático. Use a feature "Responsive Preview". Se problemas persistem, verificar viewport meta tag em `next.config.ts`.

### Problema: Componentes Shadcn/ui parecem diferentes do design
**Solução**: Customizar em `tailwind.config.ts` ou criar variants customizadas. Documentar mudanças em `.ai/design-export.md`.

### Problema: Cliente pede nova feature no meio do design
**Solução**: Documentar como "fora do escopo deste MVP" e agendar para próxima fase. Responder: "Ótima ideia! Vamos adicionar em [FASE X] post-MVP. Por enquanto, vamos focar em [features atuais]."

### Problema: Tailwind v4 features não funcionando
**Solução**: Verificar versão em `package.json`. Tailwind v4 requer Next.js 14.2+. Se problemas, rodar:
```bash
npm install -D tailwindcss@latest
npm run build
```

### Problema: FigmaMake não exporta código limpo
**Solução**: Fazer ajustes manuais pós-export. Documentar todos os ajustes realizados em `.ai/design-export.md`.

---

**Tempo estimado**: 3-5 dias
**Status**: 🟢 Pronto para começar
**Próxima**: FASE 2 (Transição Backend - Setup ambiente)
