# 🎨 Padrões Tailwind CSS v4 + Variáveis CSS Customizadas

## O Que é Novo em Tailwind v4?

Tailwind CSS v4 (lançado em 2024) introduz:
- ✅ **Variáveis CSS nativas** (no lugar de variáveis SCSS)
- ✅ **3x mais rápido** em build time
- ✅ **Suporte a `@source`** (CSS ao lado do código)
- ✅ **Sintaxe CSS moderna** (`:is()`, `:where()`)
- ✅ **API simplificada** (menos configuração)

---

## 📐 Estrutura Base do Tailwind v4

### tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss';
import defaultConfig from 'tailwindcss/defaultConfig';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: 'hsl(var(--color-primary))',
        'primary-dark': 'hsl(var(--color-primary-dark))',
        'primary-light': 'hsl(var(--color-primary-light))',

        secondary: 'hsl(var(--color-secondary))',
        accent: 'hsl(var(--color-accent))',

        // State colors
        success: 'hsl(var(--color-success))',
        warning: 'hsl(var(--color-warning))',
        destructive: 'hsl(var(--color-destructive))',

        // Neutral/Base colors
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        border: 'hsl(var(--color-border))',
        'muted-foreground': 'hsl(var(--color-muted-foreground))',
      },

      spacing: {
        xs: '0.25rem',  // 4px
        sm: '0.5rem',   // 8px
        md: '1rem',     // 16px
        lg: '1.5rem',   // 24px
        xl: '2rem',     // 32px
        '2xl': '3rem',  // 48px
        '3xl': '4rem',  // 64px
        '4xl': '6rem',  // 96px
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px
        sm: ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        base: ['1rem', { lineHeight: '1.5rem' }],     // 16px
        lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        xl: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
      },

      borderRadius: {
        xs: '0.25rem',  // 4px
        sm: '0.375rem', // 6px
        md: '0.5rem',   // 8px
        lg: '0.75rem',  // 12px
        xl: '1rem',     // 16px
        full: '9999px',
      },

      boxShadow: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
      },

      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-up': 'slideUp 0.3s ease-out',
        'spin-fast': 'spin 0.8s linear infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
} satisfies Config;
```

### globals.css (Design Tokens)

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* ============================
   COLOR TOKENS (HSL Format)
   ============================ */

:root {
  /* Primary Brand Colors */
  --color-primary: 217, 91%, 60%;      /* #3b82f6 - Blue */
  --color-primary-dark: 217, 100%, 25%; /* #1e40af - Dark Blue */
  --color-primary-light: 219, 83%, 94%; /* #dbeafe - Light Blue */

  /* Secondary & Accent */
  --color-secondary: 167, 67%, 51%;    /* #10b981 - Green */
  --color-accent: 38, 92%, 50%;        /* #f59e0b - Amber */

  /* State Colors */
  --color-success: 142, 71%, 45%;      /* #22c55e - Green */
  --color-warning: 25, 95%, 53%;       /* #f97316 - Orange */
  --color-destructive: 0, 84%, 60%;    /* #ef4444 - Red */

  /* Neutral/Base Colors */
  --color-background: 0, 0%, 100%;     /* #ffffff - White */
  --color-foreground: 217, 33%, 17%;   /* #1f2937 - Dark Gray */
  --color-border: 220, 13%, 91%;       /* #e5e7eb - Light Gray */
  --color-muted: 217, 32%, 45%;        /* #6b7280 - Gray */
  --color-muted-foreground: 215, 16%, 47%; /* #6b7280 - Muted */
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    /* Invert backgrounds and text */
    --color-background: 217, 33%, 17%; /* #1f2937 - Dark */
    --color-foreground: 0, 0%, 98%;    /* #f9fafb - Almost white */
    --color-border: 217, 32%, 30%;     /* #374151 - Dark border */
    --color-muted-foreground: 220, 9%, 46%; /* #9ca3af - Lighter gray */

    /* Adjust brand colors for contrast */
    --color-primary: 219, 91%, 60%;    /* Slightly lighter blue */
    --color-primary-light: 217, 100%, 25%; /* Darker for visibility */
  }
}

/* ============================
   BASE STYLES
   ============================ */

@layer base {
  body {
    @apply bg-background text-foreground;
  }

  h1 {
    @apply text-4xl font-semibold leading-tight;
  }

  h2 {
    @apply text-3xl font-semibold leading-snug;
  }

  h3 {
    @apply text-2xl font-medium leading-snug;
  }

  h4, h5, h6 {
    @apply text-lg font-medium;
  }

  p {
    @apply text-base leading-relaxed;
  }

  code {
    @apply text-sm bg-muted px-1.5 py-0.5 rounded font-mono;
  }

  a {
    @apply text-primary hover:text-primary-dark underline cursor-pointer;
  }
}

/* ============================
   COMPONENT STYLES
   ============================ */

@layer components {
  /* Containers */
  .container-sm {
    @apply max-w-sm mx-auto px-md;
  }

  .container-md {
    @apply max-w-md mx-auto px-md;
  }

  .container-lg {
    @apply max-w-lg mx-auto px-md;
  }

  .container-xl {
    @apply max-w-4xl mx-auto px-lg;
  }

  /* Flex Utilities */
  .flex-center {
    @apply flex items-center justify-center;
  }

  .flex-between {
    @apply flex items-center justify-between;
  }

  .flex-col-center {
    @apply flex flex-col items-center justify-center;
  }

  /* Text Utilities */
  .text-truncate {
    @apply truncate;
  }

  .text-clamp-2 {
    @apply line-clamp-2;
  }

  .text-clamp-3 {
    @apply line-clamp-3;
  }

  /* Visual Effects */
  .glass-effect {
    @apply bg-white/30 backdrop-blur-md;
  }

  .gradient-primary {
    @apply bg-gradient-to-r from-primary to-primary-dark;
  }

  .shadow-elevated {
    @apply shadow-lg rounded-lg;
  }
}

/* ============================
   ACCESSIBILITY
   ============================ */

@layer base {
  /* Focus visible states */
  *:focus-visible {
    @apply outline-2 outline-offset-2 outline-primary;
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    * {
      @apply !animate-none !transition-none;
    }
  }

  /* High contrast mode */
  @media (prefers-contrast: more) {
    :root {
      --color-border: 217, 33%, 17%;
      --color-muted-foreground: 217, 33%, 17%;
    }
  }
}
```

---

## 🧩 Padrões de Uso

### 1. Cores

**Usar variáveis CSS, nunca hardcode:**

```jsx
// ❌ ERRADO
<button className="bg-blue-500">

// ✅ CORRETO (usa variável CSS)
<button className="bg-primary">
```

**Paleta de cores disponíveis:**

```jsx
// Primárias
<div className="bg-primary text-white">Primary</div>
<div className="bg-primary-dark text-white">Primary Dark</div>
<div className="bg-primary-light text-primary">Primary Light</div>

// Secundárias
<div className="bg-secondary text-white">Secondary</div>
<div className="bg-accent text-white">Accent</div>

// Estados
<div className="bg-success text-white">Success</div>
<div className="bg-warning text-white">Warning</div>
<div className="bg-destructive text-white">Destructive</div>

// Neutras
<div className="bg-background text-foreground">Background</div>
<div className="bg-border text-muted">Border</div>
```

### 2. Espaçamento (Padding, Margin, Gap)

**Sempre usar escala definida:**

```jsx
// Padding
<div className="p-md">Content with 16px padding all sides</div>
<div className="px-lg py-md">24px left/right, 16px top/bottom</div>
<div className="pl-xl">32px left padding</div>

// Margin
<div className="m-lg">16px margin all sides</div>
<div className="mt-2xl">48px margin top</div>

// Gap (entre children)
<div className="flex gap-md">Items with 16px gap</div>
<div className="grid grid-cols-2 gap-lg">Columns with 24px gap</div>
```

**Escala disponível:**
- `xs`: 4px
- `sm`: 8px
- `md`: 16px (padrão)
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px

### 3. Tipografia

**Usar classes de tamanho:**

```jsx
// Headings
<h1 className="text-4xl font-semibold">Main Title</h1>
<h2 className="text-3xl font-semibold">Section Title</h2>
<h3 className="text-2xl font-medium">Subsection</h3>

// Body text
<p className="text-base leading-relaxed">Normal paragraph</p>
<p className="text-sm text-muted-foreground">Secondary text</p>

// Special
<code className="text-sm bg-muted px-1.5 rounded">Code block</code>
```

**Escalas disponíveis:**
- `text-xs`: 12px (small labels)
- `text-sm`: 14px (secondary text)
- `text-base`: 16px (body text)
- `text-lg`: 18px (large body)
- `text-xl`: 20px (section text)
- `text-2xl`: 24px (h3)
- `text-3xl`: 30px (h2)
- `text-4xl`: 36px (h1)

### 4. Border Radius

**Aplicar consistentemente:**

```jsx
// Small elements
<button className="rounded-sm">Small radius</button>
<input className="rounded-md" />

// Medium/Large elements
<card className="rounded-lg shadow-md">Card</card>
<modal className="rounded-xl">Modal</modal>

// Fully rounded (avatars, badges)
<img className="rounded-full w-10 h-10" />
<span className="rounded-full px-md py-sm bg-primary">Badge</span>
```

**Escalas:**
- `rounded-xs`: 4px
- `rounded-sm`: 6px
- `rounded-md`: 8px
- `rounded-lg`: 12px
- `rounded-xl`: 16px
- `rounded-full`: 9999px

### 5. Shadows (Elevação)

**Usar para hierarquia visual:**

```jsx
// Subtle (default cards)
<card className="shadow-sm">Subtle elevation</card>

// Medium (hovered cards, modals)
<card className="shadow-md hover:shadow-lg">Medium elevation</card>

// Large (floating elements, modals)
<modal className="shadow-lg">Large elevation</modal>

// Extra large (highest priority)
<dropdown className="shadow-xl">Highest elevation</dropdown>
```

### 6. Componentes Compostos

**Padrão para button:**

```jsx
// Primary variant
<button className="
  bg-primary text-white
  px-lg py-md
  rounded-md
  font-medium text-base
  hover:bg-primary-dark
  active:brightness-90
  disabled:opacity-50 disabled:cursor-not-allowed
  transition-colors duration-200
  focus-visible:outline-2 outline-offset-2 outline-primary
">
  Click me
</button>

// Secondary variant
<button className="
  bg-border text-foreground
  px-lg py-md
  rounded-md
  font-medium text-base
  hover:bg-muted/20
  disabled:opacity-50 disabled:cursor-not-allowed
">
  Secondary
</button>

// Ghost variant
<button className="
  text-primary
  px-lg py-md
  font-medium text-base
  hover:bg-primary/5
">
  Ghost
</button>
```

**Padrão para card:**

```jsx
<div className="
  bg-background
  border border-border
  rounded-lg
  p-lg
  shadow-sm
  hover:shadow-md
  transition-shadow duration-200
">
  <h3 className="text-lg font-semibold mb-md">Title</h3>
  <p className="text-sm text-muted-foreground">Description</p>
</div>
```

**Padrão para input:**

```jsx
<input
  className="
    w-full
    px-md py-sm
    text-base
    border border-border
    rounded-md
    bg-background text-foreground
    placeholder:text-muted-foreground
    focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
    disabled:opacity-50 disabled:cursor-not-allowed
    transition-colors duration-200
  "
  placeholder="Enter text..."
/>
```

### 7. Responsividade

**Mobile-first approach:**

```jsx
<div className="
  grid
  grid-cols-1          // Mobile: 1 column
  sm:grid-cols-2       // Tablet: 2 columns
  lg:grid-cols-3       // Desktop: 3 columns
  gap-md
  px-md sm:px-lg       // Ajusta padding
">
  {/* Grid items */}
</div>
```

**Breakpoints padrão:**
- `sm`: 640px (pequenos tablets)
- `md`: 768px (tablets)
- `lg`: 1024px (desktops pequenos)
- `xl`: 1280px (desktops)
- `2xl`: 1536px (desktops grandes)

**Exemplo completo:**

```jsx
<header className="
  flex flex-col sm:flex-row
  items-start sm:items-center
  justify-between
  gap-md
  p-md sm:p-lg
  border-b border-border
">
  <h1 className="text-2xl sm:text-3xl font-semibold">
    Header
  </h1>
  <nav className="
    w-full sm:w-auto
    flex gap-md
  ">
    <a href="#" className="text-primary hover:text-primary-dark">
      Link 1
    </a>
    <a href="#" className="text-primary hover:text-primary-dark">
      Link 2
    </a>
  </nav>
</header>
```

---

## 🎯 Estados Visuais

### Hover

```jsx
<button className="
  bg-primary
  hover:bg-primary-dark      // Change color on hover
  hover:shadow-lg             // Elevate on hover
  transition-all duration-200 // Smooth transition
">
  Hover me
</button>
```

### Active/Pressed

```jsx
<button className="
  active:brightness-90       // Darken on click
  active:scale-95            // Shrink slightly
">
  Click me
</button>
```

### Focus

```jsx
<input className="
  focus:outline-none
  focus:ring-2 ring-primary/50  // Ring effect
  focus:border-primary
">
```

### Disabled

```jsx
<button className="
  disabled:opacity-50
  disabled:cursor-not-allowed
  disabled:bg-gray-400
">
  Disabled
</button>
```

### Loading

```jsx
<button className="
  flex items-center gap-sm
  disabled:opacity-75
">
  {isLoading ? (
    <span className="animate-spin">⏳</span>
  ) : null}
  {isLoading ? 'Loading...' : 'Submit'}
</button>
```

### Error

```jsx
<input className="
  border-2 border-destructive
  focus:ring-destructive/50
">
<span className="text-sm text-destructive mt-xs">
  {error}
</span>
```

---

## 📋 Checklist de Uso Correto

Quando escrever código, validar:

- [ ] ✅ Usou cores de variáveis (`bg-primary`, não `bg-blue-500`)
- [ ] ✅ Usou espaçamento de escala (`p-md`, não `p-6`)
- [ ] ✅ Usou tamanhos de fonte definidos (`text-lg`, não `text-18`)
- [ ] ✅ Usou border radius consistente (`rounded-md`, não `rounded-8`)
- [ ] ✅ Adicionou transições em hover/active (`transition-colors duration-200`)
- [ ] ✅ Validou acessibilidade (focus states, contraste)
- [ ] ✅ Testou responsividade (mobile, tablet, desktop)
- [ ] ✅ Testou dark mode (se aplicável)
- [ ] ✅ Sem cores hardcoded
- [ ] ✅ Sem valores arbitrary `[123px]`

---

## 🚀 Performance Tips

1. **Use `@apply` para componentes repetidos:**

```css
/* Em globals.css */
@layer components {
  .btn-primary {
    @apply bg-primary text-white px-lg py-md rounded-md
           font-medium hover:bg-primary-dark transition-colors;
  }
}
```

```jsx
// Em componentes
<button className="btn-primary">Click me</button>
```

2. **Evite aplicar muitas classes:**

```jsx
// ❌ Muitas classes
<div className="flex items-center justify-center gap-md p-lg bg-primary text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">

// ✅ Use `@layer components`
<div className="card-primary">
```

3. **Reutilize variáveis CSS:**

```jsx
// ✅ Uma única declaração em globals.css
<div className="bg-primary border border-primary">
  Ambos usam a mesma cor
</div>
```

---

## 🔗 Referências

- **Tailwind CSS v4 Docs**: https://tailwindcss.com/docs
- **Shadcn/ui Components**: https://ui.shadcn.com
- **Lucide Icons**: https://lucide.dev

---

**Próximo**: Leia [`componentes-shadcn.md`](./componentes-shadcn.md) para integração completa de componentes.
