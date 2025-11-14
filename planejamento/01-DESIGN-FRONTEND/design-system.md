# 🎨 Design System Completo - FigmaMake + Tailwind v4 + Shadcn

## Visão Geral

Este documento define o sistema de design para todos os projetos, padronizando:
- ✅ **Componentes** (Shadcn/ui)
- ✅ **Estilos** (Tailwind CSS v4 com variáveis CSS)
- ✅ **Padrões** (spacing, tipografia, cores)
- ✅ **Acessibilidade** (WCAG AA/AAA)
- ✅ **Responsividade** (mobile-first)
- ✅ **Dark Mode** (tema automático)

---

## 📁 Estrutura de Documentação

```
planejamento/01-DESIGN-FRONTEND/
├── README.md                    # Overview e começar
├── checklist.md                 # Checklist detalhada
├── guia-figmamaker.md           # Como usar FigmaMake.com
├── prompt-figmamaker.md         # Prompts prontos para IA
├── padroes-tailwind-v4.md       # Padrões Tailwind v4
├── componentes-shadcn.md        # Componentes Shadcn/ui
└── design-system.md             # Este arquivo
```

**Como usar esta documentação:**
1. **Começando?** Leia `README.md`
2. **Criando design?** Use `guia-figmamaker.md` + `prompt-figmamaker.md`
3. **Implementando código?** Siga `padroes-tailwind-v4.md` + `componentes-shadcn.md`
4. **Validando tudo?** Use `checklist.md`

---

## 🎯 Princípios de Design

### 1. **Consistência**
- Todos os componentes seguem mesmos padrões
- Espaçamento usa escala definida
- Cores vêm de tokens CSS
- Tipografia segue hierarquia

### 2. **Acessibilidade**
- Contraste mínimo 4.5:1 (texto)
- Touch targets ≥ 44x44px
- Focus states visíveis
- Navegação por teclado funciona
- Sem barreiras visuais

### 3. **Responsividade**
- Mobile-first (desenha mobile antes)
- Breakpoints: 375px, 768px, 1024px
- Flexible layouts (não fixed widths)
- Imagens e textos adaptam

### 4. **Performance**
- CSS gerado é minimal
- Componentes são pequenos
- Zero ambiguidades (design + código alinhados)
- Builds rápidos (Tailwind v4)

---

## 🎨 Paleta de Cores

### Cores Primárias (Brand)

```css
/* Arquivo: src/styles/globals.css */

:root {
  /* Primary - Cor principal da marca */
  --color-primary: 217, 91%, 60%;        /* #3b82f6 - Azul */
  --color-primary-dark: 217, 100%, 25%;  /* #1e40af - Azul escuro (hover/active) */
  --color-primary-light: 219, 83%, 94%;  /* #dbeafe - Azul claro (background) */
}
```

**Uso:**
```jsx
<button className="bg-primary text-white">          {/* #3b82f6 */}
<button className="hover:bg-primary-dark">         {/* #1e40af on hover */}
<div className="bg-primary-light text-primary">    {/* #dbeafe background */}
```

### Cores Secundárias & Acentos

```css
:root {
  /* Secondary - Cor secundária */
  --color-secondary: 167, 67%, 51%;      /* #10b981 - Verde */

  /* Accent - Destaque */
  --color-accent: 38, 92%, 50%;          /* #f59e0b - Âmbar */
}
```

### Cores de Estado

```css
:root {
  /* Success - Sucesso/Confirmação */
  --color-success: 142, 71%, 45%;        /* #22c55e - Verde brilhante */

  /* Warning - Aviso */
  --color-warning: 25, 95%, 53%;         /* #f97316 - Laranja */

  /* Destructive - Perigo/Delete */
  --color-destructive: 0, 84%, 60%;      /* #ef4444 - Vermelho */
}
```

### Cores Neutras

```css
:root {
  /* Background - Fundo principal */
  --color-background: 0, 0%, 100%;       /* #ffffff - Branco */

  /* Foreground - Texto principal */
  --color-foreground: 217, 33%, 17%;     /* #1f2937 - Cinza escuro */

  /* Border - Bordas */
  --color-border: 220, 13%, 91%;         /* #e5e7eb - Cinza claro */

  /* Muted - Texto secundário */
  --color-muted: 217, 32%, 45%;          /* #6b7280 - Cinza médio */
}
```

### Dark Mode

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Inverter backgrounds e texto */
    --color-background: 217, 33%, 17%;   /* #1f2937 - Escuro */
    --color-foreground: 0, 0%, 98%;      /* #f9fafb - Quase branco */
    --color-border: 217, 32%, 30%;       /* #374151 - Borda escura */
  }
}
```

---

## ✍️ Tipografia

### Escala de Tamanhos

| Classe | Tamanho | Uso | Exemplo |
|--------|---------|-----|---------|
| `text-xs` | 12px | Labels pequenos | "Status: Active" |
| `text-sm` | 14px | Texto secundário | Descrições, help text |
| `text-base` | 16px | Texto principal | Parágrafos, descrição |
| `text-lg` | 18px | Destaque | Subtítulos |
| `text-xl` | 20px | Heading 3 | Títulos de seção |
| `text-2xl` | 24px | Heading 2 | Títulos secundários |
| `text-3xl` | 30px | Heading 1 | Títulos principais |
| `text-4xl` | 36px | Heading principal | Page title |

### Font Families

```css
:root {
  /* Primary font - Texto geral */
  --font-sans: 'Inter', system-ui, sans-serif;

  /* Monospace font - Código */
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;
}
```

**Uso:**
```jsx
<p className="font-sans text-base">Regular text</p>
<code className="font-mono text-sm">const x = 1;</code>
```

### Font Weights

```jsx
<h1 className="font-bold">Bold (700)</h1>       {/* Títulos importantes */}
<h2 className="font-semibold">Semibold (600)</h2> {/* Títulos */}
<h3 className="font-medium">Medium (500)</h3>    {/* Subtítulos */}
<p className="font-normal">Normal (400)</p>      {/* Texto comum */}
```

### Line Heights

```jsx
<h1 className="leading-tight">1.2 - Headings (compacto)</h1>
<p className="leading-snug">1.375 - Subtítulos</p>
<p className="leading-normal">1.5 - Body text (comfortable)</p>
<p className="leading-relaxed">1.625 - Large text (spacious)</p>
```

---

## 📐 Espaçamento (Spacing Scale)

**Sistema baseado em 4px (1/4 rem)**

| Alias | Pixels | Rem | Uso |
|-------|--------|-----|-----|
| `xs` | 4px | 0.25rem | Micro spacing |
| `sm` | 8px | 0.5rem | Small gaps |
| `md` | 16px | 1rem | Padrão/base |
| `lg` | 24px | 1.5rem | Seções |
| `xl` | 32px | 2rem | Grandes áreas |
| `2xl` | 48px | 3rem | Extra large |
| `3xl` | 64px | 4rem | Hero sections |

### Aplicação em Componentes

```jsx
{/* Padding (interno) */}
<button className="px-lg py-md">Padding 24px x / 16px y</button>
<div className="p-xl">Padding 32px all sides</div>

{/* Margin (externo) */}
<div className="mt-xl mb-lg">Margin: 32px top, 24px bottom</div>

{/* Gap (entre children) */}
<div className="flex gap-md">Items 16px apart</div>
<div className="grid gap-xl">Grid 32px apart</div>

{/* Spacing utilities */}
<div className="space-y-md">Children 16px apart (vertical)</div>
```

---

## 🔄 Componentes Principais

### Hierarquia de Componentes

```
Base (Shadcn primitivos)
├── Button
├── Input
├── Select
├── Dialog
└── ...

Layout
├── Header / Navigation
├── Sidebar
├── Card
└── Container

Forms
├── FormInput (Input + label + error)
├── FormSelect
├── FormCheckbox
└── LoginForm (completo)

Feature-Specific
├── ProjectCard
├── TaskList
├── TeamTable
└── [outros]
```

### Button Variants

| Variant | Uso | Exemplo |
|---------|-----|---------|
| `default` | Ações primárias | "Save", "Submit" |
| `secondary` | Ações secundárias | "Cancel", "Reset" |
| `outline` | Ações menos importantes | "Learn more" |
| `ghost` | Ações mínimas | Links, "Skip" |
| `destructive` | Deletar/perigo | "Delete", "Remove" |

**Exemplos:**
```jsx
<Button>Primary action</Button>
<Button variant="secondary">Less important</Button>
<Button variant="destructive">Delete this</Button>
```

### Input States

| Estado | Classe | Uso |
|--------|--------|-----|
| Normal | `.border-border` | Input padrão |
| Focus | `.focus:ring-primary` | Em foco |
| Error | `.border-destructive` | Erro de validação |
| Disabled | `.disabled:opacity-50` | Desabilitado |

---

## 📱 Responsividade

### Breakpoints Tailwind

| Breakpoint | Tamanho | Dispositivo |
|------------|---------|-------------|
| `mobile` | 375px | iPhone SE |
| `sm` | 640px | Pequeno tablet |
| `md` | 768px | iPad |
| `lg` | 1024px | Desktop pequeno |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Desktop grande |

### Padrão Mobile-First

```jsx
{/* Mobile primeiro, depois ajusta */}
<div className="
  grid grid-cols-1           // 1 coluna mobile
  sm:grid-cols-2             // 2 colunas tablet
  lg:grid-cols-3             // 3 colunas desktop
  gap-md sm:gap-lg           // Espaçamento aumenta
  p-md sm:p-lg               // Padding aumenta
">
  {/* Grid items */}
</div>
```

### Imagens Responsivas

```jsx
<img
  src="/image.jpg"
  srcSet="/image-mobile.jpg 375w, /image-tablet.jpg 768w, /image-desktop.jpg 1024w"
  sizes="(max-width: 375px) 100vw, (max-width: 768px) 50vw, 33vw"
  alt="Description"
  className="w-full h-auto object-cover rounded-md"
/>
```

---

## ♿ Acessibilidade

### Contraste de Cores

**Mínimo WCAG AA:**
- Texto normal: 4.5:1
- Texto grande (18px+): 3:1
- Gráficos/componentes: 3:1

**Validar:**
- Usar WebAIM Contrast Checker
- Testar em grayscale

### Touch Targets

**Mínimo 44x44px** para elementos clicáveis:

```jsx
{/* Button: 40px height = OK */}
<button className="h-10 px-4">Clicável</button>

{/* Ícone: 44x44px explícito */}
<button className="w-11 h-11 flex items-center justify-center">
  <Icon />
</button>
```

### Navigação por Teclado

```jsx
{/* Tab order explícito */}
<form>
  <input type="text" tabIndex={1} />
  <input type="email" tabIndex={2} />
  <button type="submit" tabIndex={3}>Submit</button>
</form>

{/* Focus visível */}
<button className="focus:outline-2 focus:outline-primary focus:outline-offset-2">
  Clicável com teclado
</button>
```

### ARIA Labels

```jsx
{/* Para ícones sem texto */}
<button aria-label="Close dialog">✕</button>

{/* Para inputs sem labels visíveis */}
<input aria-label="Search" placeholder="..." />

{/* Para anunciar estado */}
<div aria-live="polite" aria-label="Loading status">
  {loading ? 'Carregando...' : 'Pronto'}
</div>
```

---

## 🌙 Dark Mode

### Implementação

**Em `app/layout.tsx`:**
```jsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="dark">
        {children}
      </body>
    </html>
  );
}
```

**Em `tailwind.config.ts`:**
```typescript
export default {
  darkMode: 'class', // ou 'media'
  // ...
};
```

### Variáveis CSS para Dark Mode

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Trocar cores inversas */
    --color-background: 217, 33%, 17%;  /* #1f2937 */
    --color-foreground: 0, 0%, 98%;     /* #f9fafb */
  }
}
```

### Usando Colors Dinâmicas

```jsx
{/* Cores mudam automaticamente */}
<div className="bg-background text-foreground">
  Automaticamente switch em dark mode
</div>

{/* Fallback se necessário */}
<div className="bg-white dark:bg-gray-950">
  Branco em light, quase preto em dark
</div>
```

---

## 📋 Checklist de Implementação

Ao criar um novo projeto, validar:

### Setup Inicial
- [ ] Projeto Next.js 14 criado
- [ ] Tailwind CSS v4 instalado
- [ ] Shadcn/ui inicializado
- [ ] `globals.css` com tokens CSS
- [ ] `tailwind.config.ts` customizado

### Componentes
- [ ] Componentes básicos instalados (button, input, card, etc)
- [ ] Componentes customizados criados
- [ ] Todos com TypeScript
- [ ] Todos responsivos

### Padrões
- [ ] Cores usam variáveis (nunca hardcode)
- [ ] Espaçamento usa escala
- [ ] Tipografia segue hierarquia
- [ ] Bordas, shadows, radii consistentes

### Responsividade
- [ ] Mobile first approach
- [ ] 3 breakpoints testados
- [ ] Sem horizontal scroll mobile
- [ ] Touch targets 44x44px mínimo

### Acessibilidade
- [ ] Contraste OK (4.5:1)
- [ ] Navegação por teclado funciona
- [ ] Focus states visíveis
- [ ] ARIA labels onde necessário

### Dark Mode
- [ ] Cores ajustadas para dark
- [ ] Contraste mantido
- [ ] Testado em ambos temas

### Code Quality
- [ ] Sem cores hardcoded
- [ ] Sem values arbitrary `[...]`
- [ ] Nomes de classe consistentes
- [ ] Componentes bem organizados

---

## 🔧 Tools & Resources

### Ferramentas Recomendadas

1. **FigmaMake** - Design + Código
   - https://figmamaker.com
   - Cria designs que exportam Tailwind v4

2. **Shadcn/ui** - Componentes
   - https://ui.shadcn.com
   - Biblioteca de componentes compostos

3. **Lucide React** - Ícones
   - https://lucide.dev
   - 1000+ ícones SVG

4. **Tailwind CSS** - Styling
   - https://tailwindcss.com/docs
   - Framework CSS utility-first

5. **WebAIM** - Acessibilidade
   - https://webaim.org/resources/contrastchecker
   - Validar contraste de cores

6. **Chrome DevTools** - Testing
   - Toggle device emulation
   - Auditar acessibilidade
   - Verificar performance

---

## 📞 Suporte & Referências

### Dúvidas?
1. Consulte `padroes-tailwind-v4.md` (como usar Tailwind)
2. Consulte `componentes-shadcn.md` (componentes disponíveis)
3. Consulte `guia-figmamaker.md` (design no FigmaMake)

### Links Úteis
- Tailwind v4 Docs: https://tailwindcss.com/docs
- Shadcn/ui: https://ui.shadcn.com
- Radix UI: https://www.radix-ui.com
- WCAG 2.1: https://www.w3.org/WAI/WCAG21/quickref/

---

## 📝 Exemplo Completo

**Uma página LoginPage implementada completamente:**

```jsx
// src/app/(auth)/login/page.tsx

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/components/ui/use-toast';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // API call aqui
      toast({
        title: 'Sucesso',
        description: 'Login realizado com sucesso!',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="
      flex items-center justify-center
      min-h-screen
      px-md sm:px-lg
      bg-background
    ">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Bem-vindo</CardTitle>
          <CardDescription>Faça login para acessar sua conta</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="seu@email.com"
                required
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Senha
              </label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                required
                disabled={loading}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Não tem conta?{' '}
              <a href="/signup" className="text-primary hover:text-primary-dark">
                Criar conta
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
```

**Características deste exemplo:**
- ✅ Usa componentes Shadcn/ui
- ✅ Cores de variáveis CSS (`bg-background`, `text-primary`)
- ✅ Espaçamento de escala (`p-md`, `space-y-4`)
- ✅ Responsivo (`px-md sm:px-lg`)
- ✅ Acessibilidade (`htmlFor`, `aria-*`)
- ✅ Estados (loading, error)
- ✅ Validação de inputs
- ✅ Toast notifications

---

**Status**: 🟢 Sistema de design completo e pronto
**Próximo**: Implementar projetos seguindo este design system
