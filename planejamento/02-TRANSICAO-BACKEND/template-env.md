# 🔐 Template de Variáveis de Ambiente

Guia completo de variáveis de ambiente para Next.js + Supabase.

---

## 📋 Arquivos de Ambiente

### `.env.example` (Versionado no Git)
Template público para o time. **Nunca** coloque valores reais aqui!

```bash
# ==============================================
# TEMPLATE DE VARIÁVEIS DE AMBIENTE
# ==============================================
# Copie este arquivo para .env.local e preencha com valores reais
# Comando: cp .env.example .env.local

# ==============================================
# SUPABASE
# ==============================================
# Obtenha em: https://app.supabase.com/project/_/settings/api
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-anon-key-aqui

# ==============================================
# APP CONFIGURATION
# ==============================================
# URL base da aplicação
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=MeuApp

# ==============================================
# ANALYTICS (Opcional)
# ==============================================
# Google Analytics ID
NEXT_PUBLIC_GA_ID=

# PostHog (opcional)
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=

# ==============================================
# FEATURE FLAGS (Opcional)
# ==============================================
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_ENABLE_BETA_FEATURES=false

# ==============================================
# DESENVOLVIMENTO (Opcional)
# ==============================================
# Mostrar logs de debug
NEXT_PUBLIC_DEBUG=false
```

---

### `.env.local` (NÃO Versionado, Git Ignored)
Arquivo com valores **reais** para desenvolvimento local.

```bash
# ==============================================
# VARIÁVEIS LOCAIS - NÃO COMMITAR!
# ==============================================

# Supabase (valores reais)
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=MeuApp

# Analytics (desabilitado em dev)
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_ENABLE_ANALYTICS=false

# Debug
NEXT_PUBLIC_DEBUG=true
```

---

## 🔑 Variáveis por Categoria

### 1. Supabase (Essencial)

```bash
# URL do projeto Supabase
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co

# Anon Key (chave pública)
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Onde obter**:
1. Acesse [https://app.supabase.com](https://app.supabase.com)
2. Selecione seu projeto
3. Settings → API
4. Copie "Project URL" e "anon public"

**Notas**:
- ✅ `NEXT_PUBLIC_` torna público (necessário para browser)
- ✅ `anon` key é segura (RLS protege)
- ❌ NUNCA use `service_role` key no frontend!

---

### 2. App Configuration

```bash
# URL base da aplicação
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Em produção
NEXT_PUBLIC_APP_URL=https://meuapp.com

# Nome do app (opcional)
NEXT_PUBLIC_APP_NAME=MeuApp

# Versão (opcional)
NEXT_PUBLIC_APP_VERSION=1.0.0
```

**Uso**:
```tsx
const APP_URL = process.env.NEXT_PUBLIC_APP_URL
const redirectUrl = `${APP_URL}/auth/callback`
```

---

### 3. Analytics (Opcional)

#### Google Analytics
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Uso**:
```tsx
// lib/analytics.ts
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID

// Instalar: npm install react-ga4
```

#### PostHog
```bash
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

---

### 4. Feature Flags (Opcional)

```bash
# Habilitar/desabilitar features
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_BETA_FEATURES=false
NEXT_PUBLIC_ENABLE_DARK_MODE=true
NEXT_PUBLIC_ENABLE_NOTIFICATIONS=false
```

**Uso**:
```tsx
const ENABLE_ANALYTICS = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true'

if (ENABLE_ANALYTICS) {
  trackEvent('page_view')
}
```

---

### 5. API Keys Externas (Se houver)

```bash
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx  # NÃO usar NEXT_PUBLIC_!

# SendGrid (Email)
SENDGRID_API_KEY=SG.xxxxx  # Server-side only

# OpenAI
OPENAI_API_KEY=sk-xxxxx  # Server-side only

# Cloudinary (Imagens)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=meu-cloud
CLOUDINARY_API_KEY=xxxxx
CLOUDINARY_API_SECRET=xxxxx  # Server-side only
```

**Regra de ouro**:
- ✅ `NEXT_PUBLIC_*` - Keys públicas OK (frontend)
- ❌ Sem `NEXT_PUBLIC_` - Keys secretas (backend apenas)

---

### 6. Desenvolvimento (Opcional)

```bash
# Debug logs
NEXT_PUBLIC_DEBUG=true

# Mock data
NEXT_PUBLIC_USE_MOCK_DATA=false

# API base (se tiver backend separado)
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## 🔒 Segurança

### ✅ DO's (Fazer)

```bash
# ✅ Keys públicas com NEXT_PUBLIC_
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# ✅ Keys secretas SEM NEXT_PUBLIC_ (server-side only)
STRIPE_SECRET_KEY=sk_test_...
DATABASE_URL=postgresql://...
SENDGRID_API_KEY=SG....
```

### ❌ DON'Ts (Evitar)

```bash
# ❌ NUNCA exponha secrets com NEXT_PUBLIC_
NEXT_PUBLIC_STRIPE_SECRET_KEY=sk_test_...  # ERRADO!
NEXT_PUBLIC_DATABASE_URL=postgresql://...   # ERRADO!
NEXT_PUBLIC_ADMIN_PASSWORD=secret123        # ERRADO!

# ❌ NUNCA commite .env.local
# Certifique-se que .gitignore tem:
.env.local
```

---

## 📝 Como Usar

### No Código (Frontend)

```tsx
// ✅ Funciona (NEXT_PUBLIC_*)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

// ❌ Retorna undefined no browser
const secret = process.env.SECRET_KEY
```

### No Código (Backend/API Routes)

```tsx
// app/api/send-email/route.ts

// ✅ Funciona (server-side)
const sendgridKey = process.env.SENDGRID_API_KEY

// ✅ Também funciona
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
```

### TypeScript (Opcional)

Crie `src/env.d.ts`:

```tsx
declare namespace NodeJS {
  interface ProcessEnv {
    // Supabase
    NEXT_PUBLIC_SUPABASE_URL: string
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string

    // App
    NEXT_PUBLIC_APP_URL: string
    NEXT_PUBLIC_APP_NAME: string

    // Server-side only
    SENDGRID_API_KEY?: string
    STRIPE_SECRET_KEY?: string
  }
}
```

**Benefício**: Autocomplete e type-safety!

---

## 🌍 Ambientes Diferentes

### Development (.env.local)
```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://dev-project.supabase.co
NEXT_PUBLIC_DEBUG=true
```

### Staging (.env.staging)
```bash
NEXT_PUBLIC_APP_URL=https://staging.meuapp.com
NEXT_PUBLIC_SUPABASE_URL=https://staging-project.supabase.co
NEXT_PUBLIC_DEBUG=false
```

### Production (.env.production)
```bash
NEXT_PUBLIC_APP_URL=https://meuapp.com
NEXT_PUBLIC_SUPABASE_URL=https://prod-project.supabase.co
NEXT_PUBLIC_DEBUG=false
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

---

## 🚀 Deploy (Vercel/Netlify)

### Configurar Secrets

**Vercel**:
1. Dashboard → Project → Settings → Environment Variables
2. Adicionar cada variável:
   - Key: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: `https://...`
   - Environments: Production, Preview, Development

**Netlify**:
1. Site settings → Build & deploy → Environment
2. Adicionar variáveis

**Railway**:
1. Project → Variables
2. Adicionar variáveis

---

## 📋 Checklist de Setup

### Fase 2 (Setup Inicial)
- [ ] `.env.example` criado (versionado)
- [ ] `.env.local` criado (gitignored)
- [ ] `.gitignore` inclui `.env.local`
- [ ] Pode deixar valores vazios por enquanto

### Fase 7 (Setup Supabase)
- [ ] Projeto Supabase criado
- [ ] `.env.local` preenchido com valores reais:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] App conecta ao Supabase

### Fase 10 (Deploy)
- [ ] Variáveis configuradas no Vercel/Netlify
- [ ] Valores de produção (não dev)
- [ ] Secrets server-side configurados (se houver)

---

## 🆘 Troubleshooting

### P: Variável retorna `undefined`
**R:** Possíveis causas:
1. Esqueceu `NEXT_PUBLIC_` prefix (para frontend)
2. Não reiniciou servidor após mudar `.env.local`
3. Typo no nome da variável

**Solução**:
```bash
# Restart do servidor
# Ctrl+C
npm run dev
```

### P: Variável funciona em dev mas não em produção
**R:** Esqueceu de configurar no Vercel/Netlify.

**Solução**: Adicionar secrets no dashboard.

### P: Como testar .env.production localmente?
**R:**
```bash
# Build com env production
npm run build

# Rodar build
npm run start

# Verificar se está usando .env.production
```

---

## 📖 Recursos

- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Supabase Environment Variables](https://supabase.com/docs/guides/getting-started/architecture#api-keys)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

## 📎 Arquivos Relacionados

- [`checklist.md`](./checklist.md) - Verificar configuração
- [`guia-setup.md`](./guia-setup.md) - Instruções de setup
- [`faq.md`](./faq.md) - Perguntas frequentes

---

**Última atualização**: Nov 2024
**Status**: 🟢 Pronto para usar
