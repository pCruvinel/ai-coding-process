# 📁 Estrutura de Pastas Padrão

Estrutura de pastas recomendada para projetos Next.js 13/14 com App Router, TypeScript, Tailwind CSS e Supabase.

---

## 🗂️ Visão Geral

```
meu-projeto/
├── .github/                # GitHub configs
├── .next/                  # Build output (gitignored)
├── docs/                   # Documentação do projeto
├── node_modules/           # Dependencies (gitignored)
├── planejamento/           # Planos e processos
├── public/                 # Assets estáticos
├── src/                    # Código-fonte principal
├── supabase/               # Database migrations
├── __tests__/              # Testes (opcional)
├── .env.example            # Template de env vars
├── .env.local              # Env vars locais (gitignored)
├── .eslintrc.json          # ESLint config
├── .gitignore              # Git ignore
├── .prettierrc             # Prettier config (opcional)
├── next.config.js          # Next.js config
├── package.json            # Dependencies & scripts
├── README.md               # Documentação principal
├── tailwind.config.js      # Tailwind config
└── tsconfig.json           # TypeScript config
```

---

## 📂 Detalhamento das Pastas

### `/src/` - Código Fonte

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Route group - Páginas de autenticação
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   ├── forgot-password/
│   │   │   └── page.tsx
│   │   └── layout.tsx     # Layout específico para auth
│   │
│   ├── (app)/             # Route group - Páginas da aplicação
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── settings/
│   │   │   └── page.tsx
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   └── layout.tsx     # Layout principal do app
│   │
│   ├── api/               # API Routes
│   │   └── auth/
│   │       └── callback/
│   │           └── route.ts
│   │
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── loading.tsx        # Loading UI
│   ├── error.tsx          # Error UI
│   └── not-found.tsx      # 404 page
│
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI base
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── modal.tsx
│   │   ├── dropdown.tsx
│   │   └── ...
│   │
│   ├── forms/            # Componentes de formulário
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   ├── ProfileForm.tsx
│   │   └── ...
│   │
│   ├── layouts/          # Componentes de layout
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   │
│   └── [feature]/        # Componentes específicos de feature
│       ├── TaskCard.tsx
│       ├── TaskList.tsx
│       └── ...
│
├── lib/                  # Utilities & configurations
│   ├── supabase/
│   │   ├── client.ts     # Supabase client (browser)
│   │   ├── server.ts     # Supabase server client
│   │   └── middleware.ts # Supabase middleware helper
│   │
│   ├── api/              # API utilities
│   │   ├── fetcher.ts    # API fetch wrapper
│   │   └── endpoints.ts  # API endpoints
│   │
│   ├── utils/            # Helper functions
│   │   ├── formatters.ts # Format helpers
│   │   ├── validators.ts # Validation helpers
│   │   └── constants.ts  # Constants
│   │
│   ├── hooks.ts          # Custom React hooks
│   └── store.ts          # Global state (Zustand/Context)
│
├── types/                # TypeScript types
│   ├── database.types.ts # Auto-generated from Supabase
│   ├── api.types.ts      # API types
│   ├── models.ts         # Business logic types
│   └── index.ts          # Export all types
│
├── styles/               # Global styles
│   └── globals.css       # Global CSS + Tailwind imports
│
└── middleware.ts         # Next.js middleware (auth, etc)
```

---

## 📦 `/public/` - Assets Estáticos

```
public/
├── images/               # Imagens
│   ├── logo.svg
│   ├── logo-dark.svg
│   ├── hero-bg.jpg
│   └── avatars/
│       └── default.png
│
├── icons/                # Ícones customizados
│   └── favicon.ico
│
├── fonts/                # Fonts customizadas (opcional)
│   └── custom-font.woff2
│
└── manifest.json         # PWA manifest (opcional)
```

**Uso**: Acessível via `/images/logo.svg` (não precisa de `/public/`)

---

## 📚 `/docs/` - Documentação

```
docs/
├── 01-VISAO-GERAL.md     # Visão geral do projeto
├── 02-ARQUITETURA.md     # Arquitetura técnica
├── 03-ESPECIFICACAO.md   # Especificação funcional
├── 04-BANCO-DE-DADOS.md  # Schema do banco
├── 05-API.md             # Documentação de API
├── 06-DEPLOYMENT.md      # Guia de deploy
└── images/               # Imagens para docs (diagramas, etc)
    └── architecture.png
```

**Criados na Fase 3**.

---

## 🗄️ `/supabase/` - Database Migrations

```
supabase/
├── migrations/           # SQL migrations
│   ├── 20240101000000_initial_schema.sql
│   ├── 20240102000000_add_users_table.sql
│   └── 20240103000000_add_rls_policies.sql
│
├── seed.sql             # Seed data para desenvolvimento
└── config.toml          # Supabase CLI config
```

**Criados na Fase 7**.

---

## 🧪 `/__tests__/` - Testes (Opcional)

```
__tests__/
├── unit/                 # Unit tests
│   ├── components/
│   │   └── Button.test.tsx
│   ├── lib/
│   │   └── utils.test.ts
│   └── ...
│
├── integration/          # Integration tests
│   ├── auth.test.ts
│   └── api.test.ts
│
├── e2e/                  # End-to-end tests (Playwright/Cypress)
│   ├── login.spec.ts
│   └── dashboard.spec.ts
│
└── setup.ts              # Test setup
```

---

## ⚙️ `/planejamento/` - Planos

```
planejamento/
├── 00-PRE-DESENVOLVIMENTO/
├── 01-DESIGN-FRONTEND/
├── 02-TRANSICAO-BACKEND/    ← Você está aqui
├── 03-DOCUMENTACAO/
└── ...
```

**Já existe no repositório**.

---

## 🔧 Arquivos de Configuração (Root)

### `package.json`
Dependências e scripts do projeto.

```json
{
  "name": "meu-projeto",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "test": "jest",
    "test:watch": "jest --watch"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@supabase/supabase-js": "^2.38.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}
```

---

### `next.config.js`
Configurações do Next.js.

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-supabase-project.supabase.co'], // Para Supabase Storage
  },
  // Outras configs
}

module.exports = nextConfig
```

---

### `tailwind.config.js`
Configurações do Tailwind CSS.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Suas cores customizadas
      },
    },
  },
  plugins: [],
}
```

---

### `tsconfig.json`
Configurações do TypeScript.

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**Nota**: `"@/*"` permite imports como `import { Button } from '@/components/ui/button'`

---

### `.eslintrc.json`
Configurações do ESLint.

```json
{
  "extends": ["next/core-web-vitals", "prettier"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

---

### `.prettierrc` (Opcional)
Configurações do Prettier.

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

---

### `.gitignore`
Arquivos ignorados pelo Git.

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Next.js
.next/
out/
dist/

# Production
build/

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env.local
.env.development.local
.env.test.local
.env.production.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
```

---

### `.env.example`
Template de variáveis de ambiente (versionado).

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# App Config
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=

# Feature Flags (opcional)
NEXT_PUBLIC_ENABLE_FEATURE_X=false
```

Ver [`template-env.md`](./template-env.md) para detalhes.

---

### `.env.local`
Variáveis de ambiente locais (NÃO versionado, gitignored).

```
# Copie de .env.example e preencha com valores reais
NEXT_PUBLIC_SUPABASE_URL=https://abcdefg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...real-key...
```

---

## 📋 Convenções de Nomenclatura

### Arquivos e Pastas

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Componentes | PascalCase | `Button.tsx`, `UserProfile.tsx` |
| Pages (App Router) | lowercase | `page.tsx`, `layout.tsx` |
| Utilities | camelCase | `formatDate.ts`, `apiClient.ts` |
| Types | PascalCase | `User.types.ts`, `ApiResponse.ts` |
| Constants | UPPER_CASE | `API_ENDPOINTS.ts` |
| Hooks | camelCase + "use" prefix | `useAuth.ts`, `useLocalStorage.ts` |

### Pastas

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Features | lowercase | `dashboard/`, `auth/`, `settings/` |
| Components | lowercase | `ui/`, `forms/`, `layouts/` |
| Route Groups | (lowercase) | `(auth)/`, `(app)/` |

---

## 🎯 Estrutura por Tipo de Projeto

### App Simples (5-10 páginas)
```
src/
├── app/
│   ├── page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   └── ui/
├── lib/
└── styles/
```

### App Média (10-30 páginas)
```
src/
├── app/
│   ├── (auth)/
│   ├── (app)/
│   └── api/
├── components/
│   ├── ui/
│   ├── forms/
│   └── layouts/
├── lib/
│   ├── supabase/
│   └── utils/
├── types/
└── styles/
```

### App Grande (30+ páginas)
```
src/
├── app/
│   ├── (auth)/
│   ├── (app)/
│   │   ├── dashboard/
│   │   ├── [feature1]/
│   │   ├── [feature2]/
│   │   └── [feature3]/
│   └── api/
├── components/
│   ├── ui/
│   ├── forms/
│   ├── layouts/
│   ├── [feature1]/
│   ├── [feature2]/
│   └── [feature3]/
├── lib/
│   ├── supabase/
│   ├── api/
│   ├── utils/
│   └── hooks/
├── types/
├── services/      # Business logic
└── styles/
```

---

## 🚀 Como Criar a Estrutura

### Script Manual

```bash
# Criar pastas principais
mkdir -p src/app/{api,\(auth\),\(app\)}
mkdir -p src/components/{ui,forms,layouts}
mkdir -p src/lib/{supabase,api,utils}
mkdir -p src/types
mkdir -p src/styles
mkdir -p public/{images,icons}
mkdir -p docs
mkdir -p supabase/migrations
mkdir -p __tests__/{unit,integration}

# Criar arquivos base
touch src/middleware.ts
touch src/lib/hooks.ts
touch src/types/index.ts
touch src/styles/globals.css
touch .env.example
touch .env.local
```

### Script Automatizado

Crie um arquivo `scripts/setup-structure.sh`:

```bash
#!/bin/bash

echo "Criando estrutura de pastas..."

# Criar todas as pastas
mkdir -p src/app/{api,\(auth\)/login,\(auth\)/register,\(app\)/dashboard}
mkdir -p src/components/{ui,forms,layouts}
mkdir -p src/lib/{supabase,api,utils}
mkdir -p src/types
mkdir -p src/styles
mkdir -p public/{images,icons}
mkdir -p docs
mkdir -p supabase/migrations
mkdir -p __tests__/{unit,integration}

# Criar arquivos base
touch src/middleware.ts
touch src/lib/hooks.ts
touch src/types/index.ts
touch src/styles/globals.css
touch .env.example
touch README.md

echo "✅ Estrutura criada com sucesso!"
```

Executar:
```bash
chmod +x scripts/setup-structure.sh
./scripts/setup-structure.sh
```

---

## 📖 Recursos Relacionados

- **Checklist**: [`checklist.md`](./checklist.md) - Verificar se estrutura está completa
- **Guia Setup**: [`guia-setup.md`](./guia-setup.md) - Instruções de instalação
- **Template ENV**: [`template-env.md`](./template-env.md) - Variáveis de ambiente
- **Comandos Úteis**: [`comandos-uteis.md`](./comandos-uteis.md) - Comandos do dia a dia

---

## 🔗 Referências Externas

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Next.js Project Structure](https://nextjs.org/docs/getting-started/project-structure)
- [Supabase + Next.js Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration)

---

**Última atualização**: Nov 2024
**Status**: 🟢 Pronto para usar
