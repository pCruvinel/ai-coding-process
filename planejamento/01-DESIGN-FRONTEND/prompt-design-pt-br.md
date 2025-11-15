# 💬 Prompts Estruturados para Design - Português Brasil

## Introdução

Este documento contém **prompts prontos para copiar/colar** para trabalhar com IAs de Design (v0, Lovable, Figma Make). Customize com informações do seu projeto.

**Como usar:**
1. Abra a plataforma de design (v0.dev, lovable.dev, figmamaker.com)
2. Cole o prompt correspondente no chat/IA Assistant
3. Aguarde a geração
4. Revise o resultado e ajuste conforme necessário

---

## 📋 PROMPT 1.0: Brief Completo - Design System + Telas Básicas

Copie e customize este prompt para criar toda estrutura inicial:

```markdown
# 🎨 BRIEF COMPLETO DE DESIGN

Crie um design system e UI completa para uma aplicação de [TIPO_PROJETO] chamada [NOME_PROJETO].

## 📋 Visão Geral do Projeto
- **Nome:** [NOME_PROJETO]
- **Tipo:** [ex: Gestão de Projetos, E-commerce, SaaS, Blog, etc]
- **Descrição:** [Uma frase descrevendo o que faz]
- **Usuários Alvo:** [Quem usa]
- **Features MVP:** [Liste 3-5 features principais]

## 🎨 Preferências de Design
- **Estilo:** [Moderno/Minimalista/Corporativo/Descontraído]
- **Cor Primária:** [#HEX] ou [descrição]
- **Cor Secundária:** [#HEX] ou [descrição]
- **Cores Neutras:** Cinzas e brancos
- **Fonte:** Inter ou padrão do sistema
- **Tom:** [Profissional/Amigável/Técnico]
- **Acessibilidade:** WCAG AA mínimo

## 📱 Telas a Criar

### 1. **Login/Signup** - Autenticação de usuário
   - Inputs de email e senha
   - Link "Esqueceu a senha?"
   - Alternância Sign up / Log in
   - Botões de login social (opcional)

### 2. **Dashboard** - Interface principal do usuário
   - Header com logo, navegação, menu de usuário
   - Sidebar ou navegação superior com links principais
   - Mensagem de boas-vindas
   - 2-3 cards KPI mostrando métricas chave
   - Lista/tabela da feature principal
   - Mockup de empty state

### 3. **[Nome Feature] - Página de Lista** - Visualização da feature principal
   - Barra de busca/filtro
   - Lista de itens em cards ou formato tabela
   - Paginação ou scroll infinito
   - Botão "Criar Novo"
   - Opções de ação em massa

### 4. **[Nome Feature] - Criar/Editar** - Página de formulário
   - Título/heading
   - Formulário com 4-6 campos relevantes
   - Estados de validação dos inputs
   - Botões Salvar e Cancelar
   - Textos de ajuda para campos complexos

### 5. **Configurações/Perfil** - Preferências do usuário
   - Card de perfil com avatar e nome
   - Campos editáveis (nome, email)
   - Toggle de tema (claro/escuro)
   - Botão Logout
   - Botão Deletar conta (danger zone)

### 6. **Painel Admin** (se aplicável)
   - Tabela de gestão de usuários
   - Gráficos/estatísticas
   - Configurações do sistema

## 🧩 Componentes a Criar

Crie estes como componentes reutilizáveis com múltiplos estados:

### Button Component
- **Variantes:** Primary (CTA principal), Secondary, Outline, Ghost, Destructive (vermelho)
- **Estados:** default, hover, active, disabled, loading
- **Tamanhos:** small (32px), medium (40px), large (48px)

### Input Component
- **Tipos:** text, email, password
- **Estados:** default, focused, filled, error, disabled
- **Inclua:** label, placeholder, helper text, mensagem de erro

### Card Component
- **Variantes:** card padrão, card destacado, card interativo (com hover)
- **Inclua:** área de header, área de conteúdo, área de footer

### Outros Componentes
- Link (com underline, estado hover)
- Alert (success, warning, error, info)
- Badge/Tag
- Modal/Dialog
- Dropdown Menu
- Header/Barra de navegação
- Sidebar navigation

## 🎨 Especificações do Design System

### Escala de Espaçamento: 4px, 8px, 16px, 24px, 32px, 48px
### Border Radius: 4px (pequeno), 6px (médio), 8px (grande)
### Sombras: Sutil (pequena), Média, Grande

### Tipografia
- **H1:** 32px, font-weight 600
- **H2:** 24px, font-weight 600
- **H3:** 20px, font-weight 500
- **Body:** 16px, font-weight 400
- **Small:** 14px, font-weight 400
- **Code:** 14px, monospace
- **Line Heights:** 1.2 (headings), 1.5 (body)

## 📊 Dados/Conteúdo

- Usuário exemplo: "João Silva" com "joao@example.com"
- Dados exemplo: 3-5 itens em listas
- Todos os formulários pré-preenchidos com dados exemplo
- Avatares/imagens realistas onde necessário

## ⚙️ Requisitos Técnicos

### Stack de Desenvolvimento
- **Framework:** Next.js 14+ (App Router)
- **Estilo:** Tailwind CSS v4
- **Componentes:** shadcn/ui (quando possível)
- **Ícones:** Lucide React

### Responsividade
- Mobile First
- Testar em 375px (mobile), 768px (tablet), 1024px+ (desktop)
- Grid system consistente
- Sem scroll horizontal em mobile

### Acessibilidade
- Suporte a leitores de tela
- Navegação por teclado funcional
- Contraste mínimo 4.5:1
- Textos legíveis (mín. 14px)
- Elementos clicáveis ≥ 44x44px

## 🚀 Entregáveis

**Importante:** Código deve ser export-ready como Next.js + Tailwind v4 + TypeScript.

Nomes de componentes seguem padrão: ComponentName/Variant (ex: Button/Primary)
```

**Como customizar:**
- Substitua `[TIPO_PROJETO]` por (Gestão de Projetos, E-commerce, SaaS, etc)
- Substitua `[NOME_PROJETO]` pelo nome real
- Customize cores, fontes, features de acordo com PRD
- Adicione/remova telas conforme necessário

---

## <a id="prompt-11"></a>🎨 PROMPT 1.1: Brief para IA de Design

**Quando usar:** Ao iniciar design no v0/Lovable/Figma Make
**Copie este prompt completo na plataforma de design:**

```markdown
# 🎨 BRIEF DE DESIGN: [Nome do Projeto]

## 📋 INFORMAÇÕES DO PROJETO

### Contexto de Negócio
**O que é:** [Resumo em 2 linhas do PRD]
**Problema:** [Problema que resolve]
**Usuários:** [Quem vai usar]

### Objetivo do Design
Criar interface completa para [tipo de aplicação] com foco em [objetivo principal].

---

## 🎯 REQUISITOS FUNCIONAIS

### Telas Principais (Ordem de Prioridade)

#### 1. [Nome da Tela]
**Objetivo:** [O que o usuário faz aqui]

**Elementos necessários:**
- [ ] [Componente 1]
- [ ] [Componente 2]
- [ ] [Ação principal]

**Fluxo:**
1. Usuário [ação]
2. Sistema [resposta]
3. Usuário vê [resultado]

#### 2. [Nome da Tela]
[Repetir estrutura]

---

## 🎨 DIRETRIZES DE DESIGN

### Identidade Visual
- **Cores primárias:** [Se houver]
- **Cores secundárias:** [Se houver]
- **Tipografia:** [Preferência ou "moderna e clean"]
- **Estilo:** [Minimalista / Corporativo / Moderno / etc]

### Referências
[Se tiver exemplos]
- Site/App 1: [URL ou descrição]
- Site/App 2: [URL ou descrição]

### Tom de Voz
- [ ] Profissional e sério
- [ ] Casual e amigável
- [ ] Técnico e direto
- [ ] [Outro]

---

## 📱 REQUISITOS TÉCNICOS

### Stack Definida
- **Framework:** Next.js 14+ (App Router)
- **Estilo:** Tailwind CSS v3 (IMPORTANTE!)
- **Componentes:** shadcn/ui (se possível)
- **Ícones:** Lucide React

### Responsividade
- [ ] Mobile First
- [ ] Desktop e Mobile
- [ ] Desktop only

### Acessibilidade
- [ ] Suporte a leitores de tela
- [ ] Navegação por teclado
- [ ] Contraste adequado

---

## 🔧 FUNCIONALIDADES ESPECIAIS

### Autenticação
- [ ] Login com email/senha
- [ ] Login social (Google, etc)
- [ ] Recuperação de senha

### Dados Dinâmicos
- [ ] Listagens com paginação
- [ ] Formulários com validação
- [ ] Upload de arquivos
- [ ] [Outras necessidades]

### Estados
- [ ] Loading states
- [ ] Empty states
- [ ] Error states
- [ ] Success messages

---

## 📊 COMPONENTES PRIORITÁRIOS

Liste os 5-10 componentes mais importantes:

1. **[Nome do Componente]**
   - Onde usa: [Tela X, Tela Y]
   - Comportamento: [Descrição]

2. **[Nome do Componente]**
   - Onde usa: [Tela X]
   - Comportamento: [Descrição]

---

## 🚫 RESTRIÇÕES E LIMITAÇÕES

**Evitar:**
- Animações complexas (performance)
- Bibliotecas muito pesadas
- [Outras restrições]

**Priorizar:**
- Simplicidade e usabilidade
- Performance (Lighthouse > 90)
- Manutenibilidade do código

---

## 📦 ENTREGÁVEIS ESPERADOS

Ao finalizar o design, preciso exportar:

1. **Código fonte completo**
   - Estrutura de pastas organizada
   - Componentes reutilizáveis
   - Páginas funcionais

2. **Documento de transição** (IMPORTANTE!)
   - Componentes criados e suas props
   - Páginas e suas rotas
   - Estados e dados mockados
   - Integrações que precisam ser feitas no backend

3. **Guia de componentes**
   - Como usar cada componente
   - Variantes disponíveis
   - Exemplos de uso

---

## 🎯 CRITÉRIOS DE SUCESSO

O design estará pronto quando:
- [ ] Todas as telas principais criadas
- [ ] Navegação entre telas funciona
- [ ] Responsivo (mobile e desktop)
- [ ] Componentes reutilizáveis
- [ ] Código limpo e organizado
- [ ] Documento de transição completo

---

## 📝 PRÓXIMOS PASSOS (APÓS DESIGN)

1. Exportar código para GitHub
2. Gerar documento `.ai/frontend-export.md`
3. Iniciar desenvolvimento backend no VSCode

---

**INSTRUÇÕES FINAIS PARA A IA DE DESIGN:**

Por favor:
1. Crie as interfaces seguindo este brief
2. Use Next.js 14 + Tailwind CSS v3
3. Organize componentes de forma reutilizável
4. Ao finalizar, gere o documento de transição detalhado
5. Inclua comentários no código explicando componentes complexos

**Pergunte se algo não estiver claro!**
```

---

## <a id="prompt-12"></a>📤 PROMPT 1.2: Gerar Documento de Transição

**Quando usar:** Após terminar todo o design
**Copie no chat do v0/Lovable:**

```markdown
# 📤 GERAR DOCUMENTO DE TRANSIÇÃO PARA BACKEND

Preciso que você gere um documento detalhado para passar esse projeto para o desenvolvedor backend.

## Formato do Documento

Crie um arquivo markdown chamado `.ai/frontend-export.md` com as seguintes seções:

### 1. VISÃO GERAL DO FRONTEND
- Resumo do que foi criado
- Telas implementadas
- Fluxos principais
- Tecnologias usadas

### 2. ESTRUTURA DE COMPONENTES
Para cada componente criado, documente:

```markdown
#### Componente: [Nome]
**Localização:** `src/components/[caminho]`
**Propósito:** [O que faz]

**Props:**
\`\`\`typescript
interface Props {
  prop1: type
  prop2: type
}
\`\`\`

**Uso:**
\`\`\`tsx
<Component prop1="value" />
\`\`\`

**Estados internos:**
- [Estado 1]: [Descrição]

**Integrações necessárias:**
- [ ] Conectar com API [endpoint]
- [ ] Buscar dados de [tabela]
\`\`\`

### 3. PÁGINAS E ROTAS
Para cada página:
```markdown
#### Página: [Nome]
**Rota:** `/[caminho]`
**Componentes usados:** [Lista]

**Dados necessários:**
- Fetch de: [API/Tabela]
- Formato esperado: [JSON schema]

**Ações do usuário:**
1. [Ação] → [O que deve acontecer no backend]
\`\`\`

### 4. ESTADOS E DADOS MOCKADOS
Liste todos os dados mockados que precisam virar dados reais:

```markdown
**Mock atual:**
\`\`\`typescript
const mockData = [...]
\`\`\`

**Precisa virar:**
- Tabela no Supabase: `[nome_tabela]`
- Campos: [lista de campos]
- API endpoint: `GET /api/[recurso]`
\`\`\`

### 5. INTEGRAÇÕES PENDENTES
Lista de todas as integrações que o backend precisa fazer:

- [ ] **Autenticação**
  - Implementar: [Supabase Auth]
  - Páginas afetadas: [Lista]

- [ ] **API Endpoint 1**
  - Rota: `POST /api/[recurso]`
  - Input: [Schema]
  - Output: [Schema]
  - Usado em: [Componente X]

### 6. BANCO DE DADOS NECESSÁRIO
Baseado no frontend, essas tabelas são necessárias:

\`\`\`sql
-- Tabela 1
CREATE TABLE [nome] (
  -- inferir campos baseado nos dados mockados
);
\`\`\`

### 7. VALIDAÇÕES E REGRAS
Liste validações que precisam ser implementadas no backend:
- Campo X: [Regra de validação]
- Ação Y: [Regra de negócio]

### 8. MELHORIAS SUGERIDAS
Sugestões de melhorias técnicas para o backend considerar.

---

**Gere esse documento completo e detalhado em markdown.**

**IMPORTANTE:**
- Seja MUITO detalhado
- Inclua TODOS os componentes, mesmo os pequenos
- Liste TODOS os dados mockados
- Documente TODAS as interações que precisam de backend
- Inclua schemas TypeScript sempre que possível
```

---

## 🔍 PROMPT 2.0: Refinar Design System (Cores e Tipografia)

Use este prompt se o resultado do Prompt 1 precisa de ajustes:

```markdown
# 🎨 REFINAR DESIGN SYSTEM

Refine o design system com as seguintes especificações:

## 🎨 Paleta de Cores

Crie uma paleta completa de cores com estas cores base:

### Cores Primárias
- **Primary:** [#COLOR_HEX]
- **Primary Dark:** [tom mais escuro para hover/active]
- **Primary Light:** [tom mais claro para backgrounds]

### Cores Secundárias/Destaque
- **Secondary:** [#COLOR_HEX]
- **Accent:** [#COLOR_HEX]
- **Success:** #22c55e (para estados de sucesso)
- **Warning:** #f97316 (para avisos)
- **Destructive:** #ef4444 (para delete/danger)

### Cores Neutras
- **White:** #ffffff (backgrounds)
- **Gray 50:** #f9fafb (backgrounds claros)
- **Gray 100:** #f3f4f6
- **Gray 200:** #e5e7eb
- **Gray 500:** #6b7280 (texto muted)
- **Gray 900:** #111827 (texto escuro)

Gere variáveis CSS para cada cor e aplique a todos os componentes existentes.

## 📝 Tipografia

Use [FONT_FAMILY] (padrão: Inter) com:
- **H1:** 32px, weight 600, line-height 1.2
- **H2:** 24px, weight 600, line-height 1.2
- **H3:** 20px, weight 500, line-height 1.3
- **Body:** 16px, weight 400, line-height 1.5
- **Small:** 14px, weight 400, line-height 1.5
- **Code:** 14px, monospace, weight 400

## 🌙 Sombras
- **sm:** 0 1px 2px rgba(0,0,0,0.05)
- **md:** 0 4px 6px rgba(0,0,0,0.1)
- **lg:** 0 10px 15px rgba(0,0,0,0.15)

Aplique em:
- Buttons: sombra md no hover
- Cards: sombra sm padrão, md no hover
- Modals: sombra lg
- Dropdowns: sombra md

## 📐 Border Radius
- **Small:** 4px
- **Medium:** 6px
- **Large:** 8px
- **Full:** 9999px

Aplique consistentemente:
- Buttons: medium (6px)
- Inputs: medium (6px)
- Cards: medium (6px)
- Modals: large (8px)
- Avatars: full (9999px)

## 📏 Escala de Espaçamento

Todos os espaçamentos baseados em unidade 4px:
- **xs:** 4px
- **sm:** 8px
- **md:** 16px
- **lg:** 24px
- **xl:** 32px
- **2xl:** 48px

Aplique em:
- Padding de componentes: md (16px) base
- Margin entre seções: md (16px)
- Gap entre itens de lista: md (16px)

Todas as cores, sombras e espaçamentos devem usar variáveis CSS (--color-primary, etc.)
Ative "Component Library" para gerenciar variações.
```

---

## 🔄 PROMPT 2.1: Adicionar Novos Componentes

Use quando precisar de componentes específicos não criados:

```markdown
# 🧩 ADICIONAR NOVOS COMPONENTES

Adicione estes novos componentes ao design system:

## [NOME_DO_COMPONENTE] Component

### Variantes/Estados
- [Variante 1]: [Descrição]
- [Variante 2]: [Descrição]
- [Estado 1]: [Descrição, ex: "hover - aumentar brilho 5%"]
- [Estado 2]: [Descrição]

### Props/Opções
- Size: small, medium, large
- Color: primary, secondary, danger
- Disabled: true/false
- Loading: true/false (mostra spinner)
- [Custom prop]: [valores]

### Especificações Visuais
- Height: [valor]
- Padding: [valor]
- Border: [estilo]
- Icon: [do Lucide React, se aplicável]
- Animation: [none/fade/scale/slide]

### Exemplos de Uso
Mostre o componente nestes contextos:
- [Contexto 1]
- [Contexto 2]

### Acessibilidade
- Contraste mínimo: 4.5:1
- Alvo tátil mínimo: 44x44px
- Labels ARIA: [se necessário]

Torne reutilizável em [NUMERO] lugares do design e exportável como componente React.
```

**Exemplos de componentes:**
- Data Table com ordenação/filtro
- Breadcrumb navigation
- Stepper/Progress indicator
- Tabs
- Accordion
- Toast/Notification
- Skeleton loaders
- Image gallery
- File upload
- Multi-select dropdown

---

## 📱 PROMPT 2.2: Adaptação Responsiva

Use este prompt para garantir que o design funciona em mobile:

```markdown
# 📱 ADAPTAÇÃO RESPONSIVA

Torne todos os screens responsivos para dispositivos mobile (viewport 375px):

## Adaptações Necessárias para Mobile
- **Sidebar:** Converter para menu hamburger (ícone no canto superior esquerdo)
- **Navegação:** Stack vertical, esconder labels de texto se necessário
- **Cards:** Mudar de grid para coluna única
- **Tabelas:** Converter para layout de cards (cada linha = card)
- **Formulários:** Largura total, inputs empilhados verticalmente
- **Buttons:** Largura total onde apropriado
- **Fontes:** Diminuir 2px em mobile (body: 14px, h2: 20px)
- **Espaçamento:** Reduzir padding 25% em mobile

## Áreas Clicáveis
Todos os elementos clicáveis devem ter mínimo 44x44px:
- Buttons: ✓
- Links: ✓
- Form inputs: ✓
- Menu items: ✓

## Regras de Layout para Mobile
- Imagens hero: Reduzir altura 50%
- Largura de conteúdo: Usar viewport completo - 16px padding
- Modals: Usar largura completa - 16px padding
- Áreas scroll: Indicar com scroll hint

## Tablet (768px)
Crie layout intermediário:
- 2 colunas para grids (não 3+)
- Sidebar pode colapsar/expandir
- Formulários podem ser 2-coluna

Garanta preview mostrando os 3 breakpoints: 375px, 768px, 1024px
Teste interações em cada tamanho.
```

---

## 🌙 PROMPT 2.3: Dark Mode

Use se dark mode é requisito:

```markdown
# 🌙 IMPLEMENTAR DARK MODE

Crie um tema escuro para todos os screens:

## Mapeamento de Cores Dark Mode

Transforme estas cores de light para dark:

- **#ffffff (branco) →** #1f2937 (cinza escuro)
- **#f9fafb (bg claro) →** #111827 (cinza mais escuro)
- **#111827 (texto escuro) →** #f3f4f6 (texto claro)
- **[Cor primária] →** [Ajustar brilho: 20% mais claro]
- **Borders:** Aumentar opacidade, usar mais cinza

## Componentes em Dark Mode
Garanta que todos os componentes fiquem bons:
- Contraste suficiente (4.5:1 mínimo)
- Sombras podem ser mais sutis ou removidas
- Borders mais visíveis
- Inputs de form ainda facilmente visíveis

## Toggle de Tema
Mostre light e dark mode para:
- 2 screens de cada feature principal
- Todos os estados de componentes
- Todas as variações de cor

Inclua botão toggle de tema (ícone lua/sol) que muda entre temas.
Crie variante "Dark" na component library.
```

---

## ✅ PROMPT 2.4: Validação e Polishing

Use quando design está ~90% pronto:

```markdown
# ✅ VALIDAR E POLIR DESIGN

Polir e validar o design:

## Checklist de Qualidade
- [ ] Todos os textos são legíveis (mín. 14px, contraste 4.5:1)
- [ ] Todos os elementos interativos têm mín. 44x44px
- [ ] Espaçamento consistente (usando design system)
- [ ] Sem elementos soltos ou desalinhamentos quebrados
- [ ] Nomenclatura de componentes consistente (Button/Primary, Input/Email, etc)
- [ ] Todas as cores usam variáveis, não valores hardcoded
- [ ] Ícones são do Lucide React (verificar ícones disponíveis)
- [ ] Todos os estados mostrados: normal, hover, active, disabled, loading, error

## Melhorias Finais
- Remover componentes duplicados
- Garantir hierarquia apropriada de componentes
- Adicionar estados faltantes em qualquer componente
- Verificar que fontes são fonts do sistema ou importadas corretamente
- Checar overlaps não intencionais ou problemas de visibilidade
- Confirmar todos os componentes seguem best practices do Tailwind v4

## Verificação Responsiva
- [ ] Mobile (375px) fica bom
- [ ] Tablet (768px) fica bom
- [ ] Desktop (1024px) fica bom
- [ ] Sem scroll horizontal em mobile
- [ ] Touch targets suficientemente grandes

## Verificação de Acessibilidade
- [ ] Contraste mínimo alcançado
- [ ] Tamanhos de fonte legíveis
- [ ] Cor não é único indicador (ícones/texto também usados)
- [ ] Estados focus visíveis
- [ ] Form labels presentes

Gere um design pronto para export que possa ser convertido em código React limpo.
```

---

## 🚀 PROMPT 2.5: Preparar para Export

Use quando pronto para converter em código:

```markdown
# 🚀 PREPARAR PARA EXPORT

Prepare o design para export como código Next.js + Tailwind v4:

## Configuração de Export
- **Target:** Next.js 14 + React 18 + TypeScript
- **Styling:** Tailwind CSS v4 com CSS variables
- **Componentes:** Estilo Shadcn/ui (unstyled + Tailwind)
- **Ícones:** Lucide React

## Organização de Componentes para Export

Garanta que componentes estão nomeados e estruturados para estas pastas:
- **ui/:** button.tsx, input.tsx, card.tsx, dialog.tsx, etc.
- **layout/:** header.tsx, sidebar.tsx, footer.tsx, layout.tsx
- **forms/:** login-form.tsx, profile-form.tsx, etc.
- **[feature]/:** Componentes específicos da feature

## Requisitos de Geração de Código
- Use Tailwind utility classes (não arquivos CSS)
- Defina todas as cores como CSS variables em globals.css
- Button component: deve aceitar variant prop (primary, secondary, outline, ghost, destructive)
- Form inputs: devem mostrar error states, helper text
- Todos os componentes: TypeScript com interfaces de props
- Responsividade mobile: use Tailwind responsive prefixes (sm:, md:, lg:)

## Design Tokens para Export

Exporte estes como CSS variables:
- **Colors:** primary, secondary, accent, success, warning, destructive, muted, background, foreground, border
- **Spacing:** xs, sm, md, lg, xl, 2xl
- **Border radius:** sm, md, lg, full
- **Typography:** h1, h2, h3, body, small, code
- **Shadows:** sm, md, lg
- **Transitions:** fast (150ms), normal (300ms), slow (500ms)

Gere código limpo, pronto para produção sem comentários (a menos que necessário).
Todo CSS-in-JS deve usar classes Tailwind.
```

---

## 🔧 PROMPT 2.6: Ajustes Específicos via IA

Use para mudanças granulares:

```markdown
# 🔧 FAZER AJUSTES ESPECÍFICOS

Faça as seguintes mudanças específicas:

## Mudanças Visuais
1. **[Elemento]:** Mudar [propriedade] de [atual] para [novo]
   Exemplo: "Button": Aumentar border-radius de 4px para 8px

2. **[Elemento]:** [Descrição da mudança em detalhe]
   Exemplo: "Modal": Mover título para dentro do corpo do modal (remover header separado)

3. **[Elemento]:** [Descrição da mudança]

## Mudanças de Componentes
1. **[Componente]:** Adicionar/remover/modificar [parte específica]
   Exemplo: "Input": Adicionar contador de caracteres abaixo da textarea

## Mudanças de Layout
1. **[Screen]:** [Descrição de modificação de layout]
   Exemplo: "Dashboard": Mover cards KPI para sidebar em vez de seção superior

## Mudanças de Dados
1. **[Screen]:** Atualizar dados exemplo para [novos dados]
   Exemplo: "List page": Mostrar 10 itens em vez de 5

Aplique mudanças mantendo consistência do design system e garantindo código pronto para export.
```

---

## 📊 PROMPT 2.7: Preenchimento de Dados & Conteúdo

Use quando precisar preencher dados realistas:

```markdown
# 📊 ATUALIZAR COM DADOS EXEMPLO REALISTAS

Atualize todos os screens com dados exemplo realistas:

## Perfil de Usuário
- **Nome:** [Nome Completo]
- **Email:** [Endereço Email]
- **Avatar:** [Descrição ou URL]
- **Timezone:** [Timezone]
- **Idioma:** [Idioma]

## Conteúdo Principal

### [Screen 1 - Dashboard]
- Usuários/itens para mostrar: [#]
- Items exemplo:
  - Item 1: [Nome], [Status], [Outros campos]
  - Item 2: [...]

### [Screen 2 - Página de Lista]
- Items na lista: [#] (mínimo 5 para visual bom)
- Fields por item: [Listar campos]
- Dados exemplo: [Fornecer exemplos realistas]

### [Screen 3 - Formulários]
- Pré-preencher com: [Dados exemplo]
- Mostrar validações para: [Tipos de field]

## Empty States
- Dashboard (sem items): Mostrar "Nenhum projeto ainda. Crie seu primeiro!"
- List page (sem items): Mostrar ilustração empty state + botão CTA

## Loading States
Mostre loading/skeleton state para:
- Cards de dashboard
- Itens de lista
- Submissões de form

Todos os dados devem parecer realistas e completos para apresentação ao cliente.
```

---

## 💬 PROMPT 2.8: Refinamentos Baseado em Feedback

Template para usar após receber feedback do cliente:

```markdown
# 💬 REFINAR BASEADO EM FEEDBACK DO CLIENTE

Baseado no feedback do cliente, faça estas mudanças:

## Mudanças Solicitadas
1. **[Feedback do cliente #1]**
   → Faça esta mudança: [Instrução específica]

2. **[Feedback do cliente #2]**
   → Faça esta mudança: [Instrução específica]

3. **[Feedback do cliente #3]**
   → Faça esta mudança: [Instrução específica]

## Importante
- Mantenha consistência do design system
- Não quebre responsividade
- Mantenha todos os estados e variações existentes
- Mantenha nomes de componentes como estão

Após mudanças, gere link de preview atualizado.
```

---

## ✨ Dicas para Prompts Melhores

1. **Seja Específico:** Em vez de "Faça ficar mais bonito", diga "Aumentar padding para 24px e adicionar sombra sutil"

2. **Referencie Design System:** "Use cor primária (--color-primary) em vez de azul hardcoded"

3. **Inclua Contexto:** "Este botão é usado em 5 lugares: CTA do header, footer do modal, submissão de form, etc."

4. **Especifique Componentes:** Nomeie componentes exatos Shadcn: "Use Dialog do Shadcn, não modal customizado"

5. **Forneça Exemplos:** "Similar ao design do Figma, com cantos arredondados como no site da Apple"

6. **Teste Instruções:** "Garanta que funciona em mobile 375px e desktop 1920px"

7. **Peça por Export:** Sempre termine com "Garanta que código está pronto para export como Tailwind v4 + TypeScript"

---

## 📝 Exemplo Completo Customizado

```markdown
# 🎨 BRIEF DE DESIGN: TaskMaster

Crie design system e UI para uma aplicação de Gestão de Tarefas chamada "TaskMaster".

## 📋 Visão Geral do Projeto
- **Nome:** TaskMaster
- **Tipo:** Gestão de Projetos & Tarefas
- **Descrição:** Ajuda times remotos organizar e rastrear projetos com kanban boards
- **Usuários Alvo:** Times remotos, product managers, desenvolvedores
- **MVP Features:**
  1. Projetos (CRUD)
  2. Tasks com visualização kanban board
  3. Atribuição de tasks e comentários
  4. Gestão de usuários
  5. Colaboração em time

## 🎨 Preferências de Design
- **Estilo:** Moderno & Profissional
- **Cor Primária:** #3b82f6 (Azul Figma)
- **Cor Secundária:** #10b981 (Verde)
- **Cores Neutras:** Cinzas, background #ffffff
- **Fonte:** Inter
- **Tom:** Produtivo, clean, minimalista
- **Acessibilidade:** WCAG AA

## 📱 Telas a Criar
1. Login/Signup - Autenticação por email
2. Dashboard - Boas-vindas + projetos recentes
3. Lista de Projetos - Todos os projetos em grid
4. Detalhes do Projeto - Kanban board com tasks
5. Detalhes da Task - Modal de task com comentários
6. Configurações de Time - Gerenciar membros
7. Configurações - Preferências do usuário

## 🧩 Componentes
- Button (primary, secondary, outline, danger)
- Input (text, email, search)
- Card (padrão, destacado)
- Modal/Dialog
- Dropdown Menu
- Badge/Tag
- Avatar
- Tabela/Lista
- Kanban card component

Use Next.js 14 + Tailwind CSS v4, faça responsivo (375px, 768px, 1024px), inclua dark mode ready.
```

---

## 🔗 Próximos Passos

Após usar estes prompts:
1. ✅ Revise resultado na plataforma de design
2. ✅ Envie link de preview para cliente
3. ✅ Recolha feedback
4. ✅ Use Prompt 2.8 para iterações
5. ✅ Quando aprovado, use Prompt 2.5
6. ✅ Exporte código
7. ✅ Leia [`design-guidelines-pt-br.md`](./design-guidelines-pt-br.md) para finalizações

---

## 📚 Documentos Relacionados

- [`design-system.md`](./design-system.md) - Especificações do design system
- [`guia-v0-lovable.md`](./guia-v0-lovable.md) - Instruções passo-a-passo para v0/Lovable
- [`padroes-tailwind-v4.md`](./padroes-tailwind-v4.md) - Best practices Tailwind v4

---

**Dúvidas?** Revise a documentação ou ajuste os prompts conforme necessário para seu projeto específico.
