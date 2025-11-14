# 🚀 Guia Completo: FigmaMake.com para Design de Frontend

## O que é FigmaMake.com?

FigmaMake é uma plataforma **all-in-one** que integra:
- **Figma**: Design visual (interface, layouts, componentes)
- **IA Generativa**: Prompts para criar designs automaticamente
- **Tailwind CSS v4**: Código CSS automático com variáveis customizadas
- **Shadcn/ui**: Componentes React compostos e acessíveis
- **Exportação em Tempo Real**: Código funcional pronto para usar

## ✨ Benefícios

1. **Design + Código Simultâneo**: Não há gap entre design e implementação
2. **Componentes Reutilizáveis**: Cria uma biblioteca completa automaticamente
3. **Tailwind v4 + Variáveis CSS**: Design system moderno e padronizado
4. **Responsivo Automático**: Mobile, tablet, desktop com um clique
5. **Iteração Rápida**: Feedback do cliente → mudanças → novo export em minutos
6. **Zero Ambiguidades**: Designer e dev veem exatamente o mesmo

## 📋 Pré-requisitos

- Conta FigmaMake.com (criar em figmamaker.com)
- Chrome/Firefox/Safari (navegador moderno)
- Conhecimento básico de Figma (opcional, IA faz a maioria)
- Documentação PRD do projeto

## 🎯 Fluxo Passo-a-Passo

### PASSO 1: Preparar o Brief (1 dia)

Antes de abrir FigmaMake, documente:

#### 1.1 Design Brief
Criar arquivo `design-brief.md` com:

```markdown
# Design Brief - [Nome do Projeto]

## Informações Básicas
- **Projeto**: [Nome]
- **Descrição**: [O que faz]
- **MVP Features**: [Top 3-5 features]
- **Público Alvo**: [Quem usa]

## Design Preferences
- **Estilo**: [Moderno, Clássico, Minimalista, etc]
- **Paleta de Cores**: [Primária, Secundária, Neutras]
  - Primária: [cor] (brand color)
  - Secundária: [cor] (accent)
  - Neutras: [cinzas para backgrounds]
- **Tipografia**: [Font family, tamanhos]
- **Tom**: [Corporativo, Casual, Playful, etc]
- **Acessibilidade**: [WCAG AA mínimo]
- **Dark Mode**: [Sim/Não]

## Screens a Criar
1. [Screen 1] - [Descrição]
2. [Screen 2] - [Descrição]
...

## Componentes Esperados
- Button (primary, secondary, outline)
- Input (text, email, password)
- Card
- Modal/Dialog
- [Outros específicos do projeto]

## Dados Mockados
- Exemplo de usuário
- Exemplo de conteúdo principal
- Exemplo de lista com múltiplos itens

## Referências
- [Link para design que gostou]
- [Competitors]
- [Inspirações]
```

#### 1.2 Preparar Dados de Exemplo
Coletar dados realistas que serão mockados:

```json
{
  "user": {
    "id": "1",
    "name": "João Silva",
    "email": "joao@example.com",
    "avatar": "https://api.example.com/avatars/1.jpg"
  },
  "projects": [
    {
      "id": "1",
      "name": "Project Alpha",
      "description": "Build the MVP",
      "status": "active",
      "progress": 65,
      "team": ["João", "Maria", "Pedro"]
    }
  ]
}
```

### PASSO 2: Criar Projeto no FigmaMake (30 min)

1. **Acessar FigmaMake**
   - Abrir https://figmamaker.com
   - Login com conta Google/GitHub ou email

2. **Criar novo projeto**
   - Clique em "New Project"
   - Dê um nome descritivo: `[Nome-Projeto]-Design`
   - Selecione template: "Blank" ou "Next.js 14 + Tailwind v4"

3. **Configurar projeto**
   - **Design Preferences**:
     - Tailwind v4: ✅ Enabled
     - Shadcn/ui: ✅ Enabled
     - Component Library: ✅ Auto-generate
   - **Export Settings**:
     - Format: TypeScript + React
     - CSS Framework: Tailwind CSS v4
     - Component System: Shadcn/ui

### PASSO 3: Inserir Brief de Design (1 dia)

#### 3.1 Enviar Prompt para IA do FigmaMake

Clique em "AI Assistant" e cole este prompt (ou use `prompt-figmamaker.md`):

```
[Ver arquivo prompt-figmamaker.md para template completo]
```

#### 3.2 IA Gera Layout Base

A IA vai:
- Analisar seu brief
- Criar wireframes de todas as telas
- Distribuir componentes
- Configurar grid de espaçamento
- Criar paleta de cores

**Revisar resultado**:
- [ ] Todas as telas estão presentes
- [ ] Layout faz sentido para cada tela
- [ ] Componentes identificados corretamente
- [ ] Espaçamento consistente

#### 3.3 Ajustes Iniciais

Se algo não está certo:
1. Clique em "Edit with AI"
2. Descreva o ajuste: "Aumentar tamanho do logo no header"
3. IA aplica mudança automaticamente

### PASSO 4: Design Visual - Cores & Tipografia (2-3 dias)

#### 4.1 Definir Paleta de Cores

No FigmaMake:
1. Clique em "Design System" → "Colors"
2. Para cada cor, defina:
   - **Name**: `primary`, `primary-dark`, `secondary`, etc
   - **Value**: Hex code (e.g., `#3b82f6`)
   - **CSS Variable**: Auto-gera `--color-primary`

**Exemplo de paleta Tailwind v4**:
```
Primary: #3b82f6 (azul)
Primary Dark: #1e40af
Primary Light: #dbeafe
Secondary: #10b981 (verde)
Accent: #f59e0b (âmbar)
Destructive: #ef4444 (vermelho)
Success: #22c55e (verde claro)
Warning: #f97316 (laranja)
Muted: #6b7280 (cinza)
Background: #ffffff (branco)
Foreground: #1f2937 (cinza escuro)
Border: #e5e7eb (cinza claro)
```

#### 4.2 Definir Tipografia

No FigmaMake → "Design System" → "Typography":
1. **Font Family**: Inter, Poppins, ou sua escolha
2. **Tamanhos**:
   - `h1`: 2.25rem (36px)
   - `h2`: 1.875rem (30px)
   - `h3`: 1.5rem (24px)
   - `body`: 1rem (16px)
   - `small`: 0.875rem (14px)
   - `code`: 0.875rem, monospace
3. **Line Heights**:
   - Headers: 1.2
   - Body: 1.5
   - Codigo: 1.4
4. **Font Weights**:
   - Regular: 400
   - Medium: 500
   - Bold: 600

#### 4.3 Aplicar Cores & Tipografia

Selecione elementos (buttons, cards, etc) e:
- Aplique cor de variável (não valor fixo)
- Aplique font size de escala
- Valide contraste (mínimo 4.5:1 para texto)

**Validar Acessibilidade**:
- [ ] Contraste de cores OK (use site WebAIM)
- [ ] Font size mínimo 14px
- [ ] Line height mínimo 1.5
- [ ] Espaçamento clicável (44x44px mínimo)

#### 4.4 Espaciamento & Grid

No FigmaMake → "Design System" → "Spacing":
```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
```

Use essas variáveis em:
- Padding de componentes
- Margin entre elementos
- Gaps entre itens de lista
- Gaps entre colunas/grids

### PASSO 5: Criar Componentes Reutilizáveis (2 dias)

#### 5.1 Biblioteca de Componentes

No FigmaMake → "Component Library":

Criar componentes para:

**1. Button**
```
Variantes:
- primary (default, hover, active, disabled, loading)
- secondary
- outline
- ghost
- destructive

Tamanhos:
- sm (32px height)
- md (40px height)
- lg (48px height)

Estados:
- Default
- Hover (+5% brightness)
- Active (darker)
- Disabled (50% opacity)
- Loading (spinner)
```

**2. Input**
```
Variantes:
- text
- email
- password
- number
- textarea
- select

Estados:
- Default
- Focus (border color = primary)
- Filled
- Error (border color = destructive, error message visible)
- Disabled

Com:
- Label (acima)
- Placeholder
- Help text (cinza, pequeno)
- Error message (vermelho)
```

**3. Card**
```
Variantes:
- default (border + shadow)
- highlighted (background color)
- interactive (com hover effect)

Partes:
- Header (com avatar/icon opcional)
- Title
- Description
- Content area
- Footer com actions
```

**4. Dialog/Modal**
```
Partes:
- Backdrop (80% opacity)
- Dialog container (rounded, shadow)
- Header (título + close button)
- Body (conteúdo)
- Footer (buttons)

Tamanhos:
- sm (300px)
- md (500px)
- lg (700px)
```

**5. Navigation**
```
Header:
- Logo
- Nav items (horizontal)
- User menu (dropdown)
- Mobile: hamburger menu

Sidebar:
- Logo
- Nav items (vertical)
- Collapse/expand
- Current item highlighted
```

#### 5.2 Adicionar Componentes ao FigmaMake

Para cada componente:
1. Desenhe na tela
2. Selecione todos os elementos
3. Clique "Create Component"
4. Nome: `Button/Primary`, `Input/Text`, etc
5. Defina main component com variantes

#### 5.3 Documentar Componentes

Clique em componente → "Add Notes":
```
## Button

### Props
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `loading`: boolean
- `onClick`: function

### Usage
```tsx
<Button variant="primary" size="md">
  Click me
</Button>
```

### States
- Default: [descrição]
- Hover: Brightness +5%
- Active: Darker than default
- Disabled: 50% opacity
- Loading: Spinner no lugar do texto
```

### PASSO 6: Criar Telas com Componentes (2 dias)

#### 6.1 Tela: Login/Signup

**Layout**:
```
┌─────────────────────────┐
│                         │
│    [Logo]               │
│    [Titulo]             │
│    [Descricao]          │
│                         │
│    [Email Input]        │
│    [Password Input]     │
│    [Forgot Password?]   │
│    [Login Button]       │
│    [Sign Up Link]       │
│                         │
└─────────────────────────┘
```

**Componentes usados**:
- Input (email, password)
- Button (primary)
- Link/Text

**Estados**:
- [ ] Normal (vazio)
- [ ] Preenchido (com dados)
- [ ] Loading (button com spinner)
- [ ] Error (input com mensagem de erro)
- [ ] Mobile (responsivo)

#### 6.2 Tela: Dashboard

**Layout**:
```
┌──────────────────────────────────────┐
│ [Logo] [Nav Items]     [User Menu]   │
├──────────────────────────────────────┤
│           Welcome Back, João!         │
│                                       │
│  ┌─────────────┐  ┌─────────────┐    │
│  │ KPI 1       │  │ KPI 2       │    │
│  │ 123         │  │ 456         │    │
│  └─────────────┘  └─────────────┘    │
│                                       │
│  Projects List                        │
│  ┌──────────────────────────────────┐ │
│  │ Project Name │ Status │ Progress │ │
│  │ Project A    │ Active │ 65%      │ │
│  │ Project B    │ Paused │ 30%      │ │
│  └──────────────────────────────────┘ │
└──────────────────────────────────────┘
```

**Componentes usados**:
- Header com navegação
- Stats cards
- Table/List com dados

**Estados**:
- [ ] Normal (com dados)
- [ ] Loading (skeleton)
- [ ] Empty (sem projetos)
- [ ] Tablet responsivo
- [ ] Mobile responsivo

#### 6.3 Próximas Telas

Usar mesmo processo para:
- Página principal da feature
- Tela de CRUD (create, read, update, delete)
- Settings/Perfil
- Admin panel (se necessário)

### PASSO 7: Responsividade (1 dia)

#### 7.1 Configurar Breakpoints no FigmaMake

Menu → "Settings" → "Responsive Breakpoints":
```
- Mobile: 375px (iPhone SE)
- Tablet: 768px (iPad)
- Desktop: 1024px
- Large: 1920px
```

#### 7.2 Adaptar Telas para Mobile

Para cada tela, crie versão mobile:
1. Selecione frame da tela
2. Clique "Duplicate for Mobile"
3. FigmaMake auto-adapta layout

**Verificar:**
- [ ] Touch targets ≥ 44x44px
- [ ] Hamburger menu substitui nav desktop
- [ ] Cards em stack vertical (1 coluna)
- [ ] Tabelas viram card layout
- [ ] Imagens redimensionam

#### 7.3 Testar em Navegador

Clique "Preview" → "Responsive View":
- Redimensione janela
- Teste em Chrome DevTools
- Valide em devices reais (se possível)

### PASSO 8: Dark Mode (opcional, 2h)

#### 8.1 Criar Tema Escuro

Design System → "Themes":
1. Clone tema "Light"
2. Renomeie para "Dark"
3. Para cada cor, defina versão escura:
   ```
   Light
   - Background: #ffffff
   - Foreground: #1f2937

   Dark
   - Background: #1f2937
   - Foreground: #f3f4f6
   ```

#### 8.2 Aplicar Tema a Componentes

Para cada componente:
1. Selecione elemento
2. Propriedade "Fill": Escolha "Theme-aware"
3. Selecione cor (auto-aplica variante escura)

#### 8.3 Testar Toggle

Em FigmaMake → Preview:
- Clique ícone de tema
- Valide cores em modo escuro
- [ ] Contraste OK
- [ ] Legível

### PASSO 9: Revisão Interna (1 dia)

Antes de enviar para cliente:

**Checklist de Qualidade**:
- [ ] Todas as telas criadas
- [ ] Componentes nomeados corretamente
- [ ] Sem typos em textos
- [ ] Cores de variáveis (não values fixos)
- [ ] Responsivo em 3 breakpoints
- [ ] Acessibilidade OK (contraste, tamanhos)
- [ ] Nada está fora da grid
- [ ] Sem quebras de estilo

**Exportar Preview**:
Clique "Share" → "Generate shareable link":
- Copia link público
- Permite comentários

### PASSO 10: Enviar para Cliente (não este doc, vide prompt-figmamaker.md)

Siga instruções em [`prompt-figmamaker.md`](./prompt-figmamaker.md) para estruturar feedback do cliente.

### PASSO 11: Iterações e Ajustes (conforme feedback)

Para cada ajuste solicitado:
1. Clique "Edit with AI" (se for grande ajuste)
2. Ou edite manualmente se for pequeno
3. Exporte novo preview
4. Compartilhe com cliente
5. Marque como "reviewed"

**Limite**: Máximo 2-3 rodadas de feedback completas.

### PASSO 12: Exportar Código Tailwind v4 (1 dia)

#### 12.1 Exportar do FigmaMake

Clique "Export" → "Code Export":
- Formato: Next.js + React
- CSS: Tailwind v4
- Componentes: Shadcn/ui

#### 12.2 Estrutura Gerada

```
export/
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── [...]
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   └── layout.tsx
│   └── [page-specific]/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── [...]
│   ├── (app)/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   └── [...]
│   ├── layout.tsx
│   └── page.tsx
├── styles/
│   ├── globals.css
│   └── variables.css
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

#### 12.3 Setup Local

```bash
# Navegar para pasta
cd export/

# Instalar dependências
npm install

# Rodar dev server
npm run dev

# Abrir http://localhost:3000
```

#### 12.4 Validação

- [ ] Sem erros no console
- [ ] Sem warnings TypeScript
- [ ] Sem warnings Tailwind
- [ ] Responsivo em DevTools
- [ ] Navega entre telas

#### 12.5 Ajustes Pós-Export

Se código não está 100%:
1. Edite `.tsx` files manualmente
2. Atualize componentes em `/components`
3. Customize `tailwind.config.ts`
4. Documente tudo em `.ai/design-export.md`

### PASSO 13: Preparar Para GitHub

Vide checklist.md seção "EXPORT DO CÓDIGO" para:
- Criar README.md
- Configurar .gitignore
- Configurar package.json
- Setup Git
- Push para GitHub

## 🔧 Troubleshooting

### Problema: IA gera design muito diferente do brief
**Solução**: Use "Edit with AI" com prompt mais específico. Exemplo:
```
"Redesign this button with:
- Rounded corners (8px border-radius)
- Padding 12px 24px
- Font weight 600
- Keep the primary blue color"
```

### Problema: Componentes não exportam corretamente
**Solução**:
1. Validar nome do componente (ex: `Button/Primary`)
2. Verificar se é main component (não instance)
3. Re-exportar em "Export" settings

### Problema: Cores em Tailwind não batem com Figma
**Solução**: Atualizar `tailwind.config.ts`:
```ts
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',
      'primary-dark': '#1e40af',
      // Copiar exato de FigmaMake
    }
  }
}
```

### Problema: Responsivo quebra em mobile
**Solução**:
1. Adicionar `viewport` meta tag em `app/layout.tsx`
2. Usar Tailwind responsive prefixes (`sm:`, `md:`)
3. Testar em Chrome DevTools → Toggle device toolbar

### Problema: FigmaMake carregando lentamente
**Solução**:
- Reduzir número de componentes em um frame
- Desativar "Auto-save" temporariamente
- Usar Chrome (mais rápido que Firefox)
- Limpar cache do navegador

## 📚 Dicas & Best Practices

1. **Naming Conventions**: Use `Component/Variant` (ex: `Button/Primary`)
2. **Componentes Pequenos**: Crie componentes menores reutilizáveis (ex: `Icon/Plus`)
3. **Design Tokens**: Use variáveis para TUDO (cores, fonts, spacing)
4. **Versioning**: Exporte regularmente (daily snapshots)
5. **Documentação**: Adicione "Notes" em cada componente principal
6. **Feedback Loop**: Limite a 2-3 rodadas de review
7. **Mobile First**: Desenhe mobile antes de desktop
8. **Acessibilidade**: Teste contraste SEMPRE

## ✅ Checklist Final

Antes de finalizar FASE 1:

- [ ] Todas as telas criadas no FigmaMake
- [ ] Design System completo (cores, tipografia, spacing)
- [ ] Componentes documentados
- [ ] Responsivo em 3 breakpoints
- [ ] Cliente aprovou
- [ ] Código exportado
- [ ] Roda sem erros localmente
- [ ] GitHub pronto
- [ ] Documentação escrita

---

**Próximo**: Leia `prompt-figmamaker.md` para estruturar prompts de IA
