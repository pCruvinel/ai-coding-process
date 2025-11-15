# 🚀 Prompt: Setup do Dia 1 de Desenvolvimento

Use este prompt com Claude Code para configurar a estrutura base do projeto no primeiro dia de desenvolvimento.

---

## 🎯 Contexto

Você é um desenvolvedor fullstack iniciando o desenvolvimento de um projeto Next.js + Supabase. O setup básico (Supabase, Auth) já está completo. Agora precisamos criar a estrutura de pastas e arquivos base para começar a implementar features.

**Stack**: Next.js 14+ App Router, TypeScript, Tailwind v4, shadcn/ui, Supabase

---

## 📋 Tarefa

Configure a estrutura de pastas e crie arquivos base seguindo boas práticas.

### 1. Estrutura de Pastas

Crie a seguinte estrutura (se ainda não existir):

```
app/
├── (auth)/              # Auth pages (já existe)
├── (dashboard)/         # Protected routes
│   ├── layout.tsx      # Dashboard layout com sidebar/header
│   ├── dashboard/
│   │   └── page.tsx    # Home do dashboard
│   └── [outras-rotas]/
│
components/
├── ui/                  # shadcn components
├── auth/                # Auth components (já existe)
├── layout/
│   ├── Sidebar.tsx
│   ├── Header.tsx
│   └── Footer.tsx
└── features/
    └── [feature-name]/  # Components específicos por feature

lib/
├── supabase/            # Supabase clients (já existe)
├── hooks/
│   └── useUser.ts       # (já existe)
├── utils/
│   ├── cn.ts           # className utility
│   └── format.ts       # Formatters (date, currency, etc.)
└── validations/
    └── schemas.ts       # Zod schemas

types/
└── index.ts             # TypeScript types
```

### 2. Criar Dashboard Layout

**Arquivo**: `app/(dashboard)/layout.tsx`

- Header com logo + menu + user dropdown
- Sidebar com navegação principal
- Logout button
- Responsive (mobile menu)

### 3. Criar Página Dashboard

**Arquivo**: `app/(dashboard)/dashboard/page.tsx`

- Boas-vindas ao usuário
- Overview/estatísticas (se aplicável)
- Links para features principais

### 4. Criar Componentes de Layout

**Sidebar**: `components/layout/Sidebar.tsx`
- Links de navegação
- Active state
- Icons (lucide-react)

**Header**: `components/layout/Header.tsx`
- Logo/título
- User info + avatar
- Dropdown menu (profile, settings, logout)

### 5. Configurar Utilities

**cn helper**: `lib/utils/cn.ts` (já deve existir do shadcn)
**Formatters**: `lib/utils/format.ts`
- formatDate
- formatCurrency
- etc.

### 6. Criar Types Base

**Arquivo**: `types/index.ts`

```typescript
// Database types
export type Profile = {
  id: string
  full_name: string | null
  avatar_url: string | null
  bio: string | null
  created_at: string
  updated_at: string
}

// Adicionar outros types conforme schema do banco
```

---

## ✅ Critérios de Sucesso

- [ ] Estrutura de pastas completa
- [ ] Dashboard layout funcionando
- [ ] Sidebar com navegação
- [ ] Header com user info
- [ ] Mobile responsive
- [ ] Types base criados
- [ ] Utils/helpers configurados
- [ ] Projeto roda sem erros

---

## 📝 Código de Referência

Consulte:
- `docs/02-ARQUITETURA.md` - Estrutura de pastas
- `docs/06-COMPONENTES.md` - Hierarquia de componentes
- `.ai/contexto-projeto.md` - Padrões de código

---

**Duração**: 4-6h (Dia 1 da Semana 1)
