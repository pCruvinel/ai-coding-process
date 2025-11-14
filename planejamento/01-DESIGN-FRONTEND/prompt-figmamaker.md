# 💬 Prompts Estruturados para FigmaMake.com IA

## Introdução

Este documento contém **prompts prontos para copiar/colar** no AI Assistant do FigmaMake. Customize com informações do seu projeto.

**Como usar:**
1. Abra FigmaMake.com
2. Clique em "AI Assistant"
3. Cole o prompt correspondente
4. Clique "Generate"
5. Revise resultado, ajuste se necessário

---

## 📋 PROMPT 1: Brief Inicial - Design System + Telas Básicas

Copie e customize este prompt para criar toda estrutura inicial:

```
Create a complete design system and UI for a [PROJECT_TYPE] application called [PROJECT_NAME].

## Project Overview
- Name: [PROJECT_NAME]
- Type: [e.g., Project Management, E-commerce, SaaS, Blog, etc]
- Description: [One sentence describing what it does]
- Target Users: [Who uses it]
- MVP Features: [List 3-5 main features]

## Design Preferences
- Style: [Modern/Minimalist/Corporate/Playful]
- Primary Color: [#HEX] or "Blue like Figma"
- Secondary Color: [#HEX] or "Green for success actions"
- Neutral Colors: Grays and whites
- Font: Inter or system defaults
- Mood: [Professional/Friendly/Technical]
- Accessibility: WCAG AA minimum

## Screens to Create
1. **Login/Signup** - User authentication
   - Email and password inputs
   - "Forgot password?" link
   - Sign up / Log in toggle
   - Social login buttons (optional)

2. **Dashboard** - Main user interface
   - Header with logo, navigation, user menu
   - Sidebar or top navigation with main links
   - Welcome message
   - 2-3 KPI cards showing key metrics
   - Main feature list/table
   - Empty state mockup

3. **[Feature Name] - List Page** - Primary feature view
   - Search/filter bar
   - List of items in card or table format
   - Pagination or infinite scroll
   - "Create New" button
   - Bulk action options

4. **[Feature Name] - Create/Edit** - Form page
   - Title/heading
   - Form with 4-6 relevant fields
   - Input validation states
   - Save and Cancel buttons
   - Help text for complex fields

5. **Settings/Profile** - User preferences
   - Profile card with avatar and name
   - Editable fields (name, email)
   - Theme toggle (light/dark)
   - Logout button
   - Delete account button (danger zone)

6. **Admin Panel** (if applicable)
   - User management table
   - Statistics/charts
   - System settings

## Components to Create
Create these as reusable components with multiple states:

### Button Component
- Primary variant (main CTA)
- Secondary variant
- Outline variant
- Ghost variant
- Destructive variant (red)
- States: default, hover, active, disabled, loading
- Sizes: small (32px), medium (40px), large (48px)

### Input Component
- Text input
- Email input
- Password input
- States: default, focused, filled, error, disabled
- Include: label, placeholder, helper text, error message

### Card Component
- Default card with border and shadow
- Highlighted card variant
- Interactive card with hover effect
- Includes: header area, content area, footer area

### Other Components
- Link (underline, hover state)
- Alert (success, warning, error, info)
- Badge/Tag
- Modal/Dialog
- Dropdown Menu
- Header/Navigation bar
- Sidebar navigation

## Design System Specifications
- **Spacing Scale**: 4px, 8px, 16px, 24px, 32px, 48px
- **Border Radius**: 4px (small), 6px (medium), 8px (large)
- **Shadows**: Subtle (small), Medium, Large
- **Typography**:
  - H1: 32px, font-weight 600
  - H2: 24px, font-weight 600
  - H3: 20px, font-weight 500
  - Body: 16px, font-weight 400
  - Small: 14px, font-weight 400
  - Code: 14px, monospace
- **Line Heights**: 1.2 (headings), 1.5 (body)

## Data/Content to Include
- Sample user: "John Doe" with "john@example.com"
- Sample data: 3-5 items in lists
- All forms pre-filled with example data
- Realistic avatars/images where needed

## Important
- Use Tailwind CSS v4 for all styling
- Make all designs responsive: mobile (375px), tablet (768px), desktop (1024px)
- Use a consistent grid system
- All text must be easily readable
- Component names should follow pattern: ComponentName/Variant
- Export as TypeScript + React components
```

**Como customizar:**
- Substitua `[PROJECT_TYPE]` por (Project Management, E-commerce, SaaS, etc)
- Substitua `[PROJECT_NAME]` por nome real
- Customize cores, fontes, features de acordo com PRD
- Adicione/remova telas conforme necessário

---

## 🎨 PROMPT 2: Refinar Design System (Cores & Tipografia)

Use este prompt se o result do Prompt 1 precisa de ajustes:

```
Refine the design system with the following specifications:

## Color Palette
Create a complete color palette with these base colors:

Primary Colors:
- Primary: [#COLOR_HEX]
- Primary Dark: [darker shade for hover/active]
- Primary Light: [lighter shade for backgrounds]

Secondary/Accent:
- Secondary: [#COLOR_HEX]
- Accent: [#COLOR_HEX]
- Success: #22c55e (for success states)
- Warning: #f97316 (for warnings)
- Destructive: #ef4444 (for delete/danger)

Neutral:
- White: #ffffff (backgrounds)
- Gray 50: #f9fafb (light backgrounds)
- Gray 100: #f3f4f6
- Gray 200: #e5e7eb
- Gray 500: #6b7280 (muted text)
- Gray 900: #111827 (dark text)

Generate CSS variables for each color and apply to all existing components.

## Typography
Use [FONT_FAMILY] (default: Inter) with:
- H1: 32px, weight 600, line-height 1.2
- H2: 24px, weight 600, line-height 1.2
- H3: 20px, weight 500, line-height 1.3
- Body: 16px, weight 400, line-height 1.5
- Small: 14px, weight 400, line-height 1.5
- Code: 14px, monospace, weight 400

## Shadows
- sm: 0 1px 2px rgba(0,0,0,0.05)
- md: 0 4px 6px rgba(0,0,0,0.1)
- lg: 0 10px 15px rgba(0,0,0,0.15)

Apply to:
- Buttons: md shadow on hover
- Cards: sm shadow baseline, md on hover
- Modals: lg shadow
- Dropdowns: md shadow

## Border Radius
- Small: 4px
- Medium: 6px
- Large: 8px
- Full: 9999px

Apply consistently:
- Buttons: medium (6px)
- Inputs: medium (6px)
- Cards: medium (6px)
- Modals: large (8px)
- Avatars: full (9999px)

## Spacing Grid
All spacing based on 4px base unit:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

Apply to:
- Component padding: md (16px) base
- Component margin: md (16px) between sections
- Gap between list items: md (16px)

All colors, shadows, and spacing must use CSS variables (--color-primary, etc.)
Enable "Component Library" to manage variations.
```

---

## 🔄 PROMPT 3: Adicionar Novos Componentes

Use quando precisar de componentes específicos não criados no Prompt 1:

```
Add these new components to the design system:

## [COMPONENT_NAME] Component

### Variants/States
- [Variant 1]: [Description]
- [Variant 2]: [Description]
- [State 1]: [Description, e.g., "hover - increase brightness 5%"]
- [State 2]: [Description]

### Props/Options
- Size: small, medium, large
- Color: primary, secondary, danger
- Disabled: true/false
- Loading: true/false (shows spinner)
- [Custom prop]: [values]

### Visual Specs
- Height: [value]
- Padding: [value]
- Border: [style]
- Icon: [from Lucide React, if applicable]
- Animation: [none/fade/scale/slide]

### Usage Examples
Show the component in these contexts:
- [Context 1]
- [Context 2]

### Accessibility
- Min contrast ratio: 4.5:1
- Min touch target: 44x44px
- ARIA labels: [if needed]

Make it reusable in [NUMBER] places across the design and exportable as React component.
```

**Exemplos de componentes:**
- Data Table with sorting/filtering
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

## 📱 PROMPT 4: Adaptação Responsiva

Use este prompt para garantir que design funciona em mobile:

```
Make all screens responsive for mobile devices (375px viewport):

## Mobile Adaptations Required
- Sidebar: Convert to hamburger menu (icon top-left)
- Navigation: Stack vertically, hide text labels if needed
- Cards: Change from grid to single column stack
- Tables: Convert to card layout (each row = card)
- Forms: Full width, inputs stacked vertically
- Buttons: Full width where appropriate
- Fonts: May decrease 2px on mobile (body: 14px, h2: 20px)
- Spacing: Reduce padding 25% on mobile

## Touchable Areas
All clickable elements must be minimum 44x44px:
- Buttons: Check
- Links: Check
- Form inputs: Check
- Menu items: Check

## Layout Rules for Mobile
- Hero images: Reduce height 50%
- Content width: Use full viewport - 16px padding
- Modals: Use full width - 16px padding
- Scrollable areas: Indicate with scroll hint

## Tablet (768px)
Create intermediate layout:
- 2 columns for grids (not 3+)
- Sidebar can collapse/expand
- Forms can be 2-column

Ensure preview shows all three breakpoints: 375px, 768px, 1024px
Test interactions on each size.
```

---

## 🌙 PROMPT 5: Dark Mode

Use se dark mode é requisito:

```
Create a dark theme for all screens:

## Dark Mode Color Mapping
Transform these light colors to dark equivalents:

Light Mode → Dark Mode
- #ffffff (white) → #1f2937 (dark gray)
- #f9fafb (light bg) → #111827 (darker gray)
- #111827 (dark text) → #f3f4f6 (light text)
- [Primary color] → [Adjust brightness: 20% lighter]
- Borders: Increase opacity, use more gray

## Components in Dark Mode
Ensure all components look good:
- Sufficient contrast (4.5:1 minimum)
- Shadows may be more subtle or removed
- Borders more visible
- Form inputs still easily visible

## Theme Toggle
Show both light and dark modes for:
- 2 screens from each major feature
- All component states
- All color variations

Include a theme toggle button (moon/sun icon) that switches between modes.
Create variant "Dark" in component library.
```

---

## ✅ PROMPT 6: Validação e Polishing

Use quando design está ~90% pronto:

```
Polish and validate the design:

## Quality Checklist
- [ ] All text is legible (min 14px, contrast 4.5:1)
- [ ] All interactive elements are min 44x44px
- [ ] Consistent spacing (using design system)
- [ ] No stray elements or broken alignments
- [ ] Component naming is consistent (Button/Primary, Input/Email, etc)
- [ ] All colors use variables, not hardcoded values
- [ ] Icons are from Lucide React (check available icons)
- [ ] All states shown: normal, hover, active, disabled, loading, error

## Final Improvements
- Remove any duplicate components
- Ensure proper component hierarchy
- Add missing states to any components
- Verify all fonts are system fonts or imported correctly
- Check for unintended overlaps or visibility issues
- Confirm all components follow Tailwind v4 best practices

## Responsive Verification
- [ ] Mobile (375px) looks good
- [ ] Tablet (768px) looks good
- [ ] Desktop (1024px) looks good
- [ ] No horizontal scrolling on mobile
- [ ] Touch targets are large enough

## Accessibility Check
- [ ] Minimum contrast ratio achieved
- [ ] Font sizes readable
- [ ] Color not only indicator (icons/text used too)
- [ ] Focus states visible
- [ ] Form labels present

Generate an export-ready design that can be converted to clean React code.
```

---

## 🚀 PROMPT 7: Preparar para Export

Use quando pronto para converter em código:

```
Prepare design for code export as Next.js + Tailwind v4:

## Export Configuration
- Target: Next.js 14 + React 18 + TypeScript
- Styling: Tailwind CSS v4 with CSS variables
- Components: Shadcn/ui style (unstyled + Tailwind)
- Icons: Lucide React

## Component Organization for Export
Ensure components are named and structured for these folders:
- ui/: button.tsx, input.tsx, card.tsx, dialog.tsx, etc.
- layout/: header.tsx, sidebar.tsx, footer.tsx, layout.tsx
- forms/: login-form.tsx, profile-form.tsx, etc.
- [feature]/: Feature-specific components

## Code Generation Requirements
- Use Tailwind utility classes (not CSS files)
- Define all colors as CSS variables in globals.css
- Button component: should accept variant prop (primary, secondary, outline, ghost, destructive)
- Form inputs: should show error states, helper text
- All components: TypeScript with prop interfaces
- Mobile responsivity: use Tailwind responsive prefixes (sm:, md:, lg:)

## Design Tokens to Export
Export these as CSS variables:
- Colors: primary, secondary, accent, success, warning, destructive, muted, background, foreground, border
- Spacing: xs, sm, md, lg, xl, 2xl
- Border radius: sm, md, lg, full
- Typography: h1, h2, h3, body, small, code
- Shadows: sm, md, lg
- Transitions: fast (150ms), normal (300ms), slow (500ms)

Generate clean, production-ready code without comments (unless necessary).
All CSS-in-JS should use Tailwind classes.
```

---

## 🔧 PROMPT 8: Ajustes Específicos via IA

Use para mudanças granulares:

```
Make the following specific changes:

## Visual Changes
1. [Element]: Change [property] from [current] to [new]
   Example: "Button": Increase border-radius from 4px to 8px

2. [Element]: [Detailed change description]
   Example: "Modal": Move title to inside the modal body (remove separate header)

3. [Element]: [Change description]

## Component Changes
1. [Component]: Add/remove/modify [specific part]
   Example: "Input": Add character count below textarea

## Layout Changes
1. [Screen]: [Layout modification]
   Example: "Dashboard": Move KPI cards to sidebar instead of top section

## Data Changes
1. [Screen]: Update sample data to [new data]
   Example: "List page": Show 10 items instead of 5

Apply changes while maintaining design system consistency and ensuring export-ready code.
```

---

## 📊 PROMPT 9: Data & Content Population

Use quando precisa preencher dados realistas:

```
Update all screens with realistic sample data:

## User Profile
- Name: [Full Name]
- Email: [Email Address]
- Avatar: [Description or URL]
- Timezone: [Timezone]
- Language: [Language]

## Main Content
[Screen 1 - Dashboard]
- Users/items to show: [#]
- Sample items:
  - Item 1: [Name], [Status], [Other fields]
  - Item 2: [...]

[Screen 2 - List Page]
- Items in list: [#] (minimum 5 for good visual)
- Fields per item: [List fields]
- Sample data: [Provide realistic examples]

[Screen 3 - Forms]
- Pre-fill with: [Sample data]
- Show validations for: [Field types]

## Empty States
- Dashboard (no items): Show "No projects yet. Create your first!"
- List page (no items): Show empty state illustration + CTA button

## Loading States
Show skeleton/loading state for:
- Dashboard cards
- List items
- Form submissions

All data should look realistic and complete for presentation to client.
```

---

## 💬 PROMPT 10: Refinements Baseado em Feedback

Template para usar após receber feedback do cliente:

```
Based on client feedback, make these changes:

## Requested Changes
1. [Client feedback #1]
   → Make this change: [Specific instruction]

2. [Client feedback #2]
   → Make this change: [Specific instruction]

3. [Client feedback #3]
   → Make this change: [Specific instruction]

## Important
- Maintain design system consistency
- Don't break responsive design
- Keep all existing states and variations
- Keep component names as they are

After changes, generate updated preview link.
```

---

## ✨ Tips for Better Prompts

1. **Be Specific**: Instead of "Make it look better", say "Increase padding to 24px and add a subtle shadow"

2. **Reference Design System**: "Use primary color (--color-primary) instead of hardcoded blue"

3. **Include Context**: "This button is used in 5 places: header CTA, modal footer, form submission, etc."

4. **Specify Components**: Name exact Shadcn components: "Use Dialog from Shadcn, not custom modal"

5. **Provide Examples**: "Similar to Figma's design, with rounded corners like Apple's website"

6. **Test Instructions**: "Ensure this works on mobile 375px and desktop 1920px"

7. **Ask for Export**: Always end with "Ensure code is export-ready as Tailwind v4 + TypeScript"

---

## 📝 Exemplo Completo Customizado

```
Create a design system and UI for a Task Management application called "TaskMaster".

## Project Overview
- Name: TaskMaster
- Type: Project & Task Management
- Description: Helps teams organize and track projects with kanban boards
- Target Users: Remote teams, project managers, developers
- MVP Features:
  1. Projects (CRUD)
  2. Tasks with kanban board view
  3. Task assignments and comments
  4. User management
  5. Team collaboration

## Design Preferences
- Style: Modern & Professional
- Primary Color: #3b82f6 (Figma blue)
- Secondary Color: #10b981 (Green)
- Neutral Colors: Grays, #ffffff background
- Font: Inter
- Mood: Productive, clean, minimal
- Accessibility: WCAG AA

## Screens to Create
1. Login/Signup - Email auth
2. Dashboard - Welcome + recent projects
3. Projects List - All projects in grid
4. Project Details - Kanban board with tasks
5. Task Details - Task modal with comments
6. Team Settings - Manage members
7. Settings - User preferences

## Components
- Button (primary, secondary, outline, danger)
- Input (text, email, search)
- Card (default, highlighted)
- Modal/Dialog
- Dropdown Menu
- Badge/Tag
- Avatar
- Table/List
- Kanban card component

Use Tailwind CSS v4, make responsive (375px, 768px, 1024px), include dark mode ready.
```

---

## 🔗 Próximos Passos

Após usar estes prompts:
1. ✅ Revise resultado no FigmaMake
2. ✅ Envie preview link para cliente
3. ✅ Recolha feedback
4. ✅ Use Prompt 10 para iterações
5. ✅ Quando aprovado, use Prompt 7
6. ✅ Exporte código
7. ✅ Leia [`padroes-tailwind-v4.md`](./padroes-tailwind-v4.md) para finalizações

---

**Dúvidas?** Consulte [`guia-figmamaker.md`](./guia-figmamaker.md) para instruções passo-a-passo.
