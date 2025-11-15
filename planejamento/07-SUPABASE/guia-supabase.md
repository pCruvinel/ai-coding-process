# 🗄️ Guia Completo: Setup Supabase

Guia passo a passo para configurar Supabase (PostgreSQL + Auth + Storage + Real-time) no seu projeto.

---

## 🎯 Objetivos

1. Criar projeto no Supabase Cloud
2. Configurar Supabase CLI localmente
3. Criar schema do banco (migrations)
4. Implementar RLS (Row Level Security)
5. Configurar triggers e functions
6. Integrar Supabase com Next.js

**Duração estimada**: 1 dia (Day 1-2 da Semana 1)

---

## 📋 Pré-requisitos

- [ ] Projeto Next.js já existe (export do Figma Make)
- [ ] Documentação técnica completa (Fase 3)
- [ ] Schema do banco mapeado (`docs/04-BANCO-DE-DADOS.md`)
- [ ] Node.js 18+ instalado
- [ ] Git configurado

---

## 1️⃣ Criar Projeto no Supabase Cloud

### Passo 1: Criar conta Supabase

1. Acesse [https://supabase.com](https://supabase.com)
2. Faça signup com GitHub (recomendado) ou email
3. Confirme seu email

### Passo 2: Criar novo projeto

1. Click em "New Project"
2. Preencha as informações:
   - **Name**: `[nome-do-projeto]-prod` ou `[nome-do-projeto]-dev`
   - **Database Password**: Gere uma senha forte (salve no 1Password/BitWarden!)
   - **Region**: Escolha a região mais próxima dos seus usuários
   - **Pricing Plan**: Free (para começar)

3. Click em "Create new project"
4. Aguarde ~2 minutos para provisioning

### Passo 3: Salvar credenciais

No dashboard do projeto, vá em **Settings → API**:

Salve as seguintes informações (você vai precisar):
- **Project URL**: `https://[project-id].supabase.co`
- **anon public**: `eyJhbGc...` (key pública)
- **service_role**: `eyJhbGc...` (key privada - **NUNCA exponha no frontend!**)

---

## 2️⃣ Configurar Supabase CLI Localmente

### Passo 1: Instalar Supabase CLI

**MacOS** (via Homebrew):
```bash
brew install supabase/tap/supabase
```

**Linux/WSL**:
```bash
brew install supabase/tap/supabase
# ou via npm
npm install -g supabase
```

**Windows**:
```bash
npm install -g supabase
```

Verifique a instalação:
```bash
supabase --version
```

### Passo 2: Login no Supabase CLI

```bash
supabase login
```

Isso abrirá o browser para autenticar. Após autenticar, você verá uma confirmação no terminal.

### Passo 3: Inicializar Supabase no projeto

No diretório raiz do projeto Next.js:

```bash
supabase init
```

Isso cria:
- `supabase/` folder
- `supabase/config.toml` (configuração)
- `supabase/seed.sql` (dados iniciais)

### Passo 4: Linkar projeto local ao projeto remoto

```bash
supabase link --project-ref [project-id]
```

Você encontra o `project-id` na URL do seu projeto: `https://app.supabase.com/project/[project-id]`

Digite a **database password** quando solicitado.

Confirmação: `Linked to project [project-id]`

---

## 3️⃣ Configurar Variáveis de Ambiente

### Criar arquivo `.env.local`

Na raiz do projeto Next.js:

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://[project-id].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...  # Apenas para API Routes server-side
```

**Importante**:
- `NEXT_PUBLIC_*` = Exposto no browser (use apenas chaves públicas!)
- `SUPABASE_SERVICE_ROLE_KEY` = Apenas server-side (NUNCA no browser!)

### Adicionar ao `.gitignore`

```bash
# .gitignore
.env.local
.env*.local
```

---

## 4️⃣ Instalar Dependências Supabase no Next.js

```bash
npm install @supabase/supabase-js @supabase/ssr
```

**Versões recomendadas**:
- `@supabase/supabase-js`: ^2.x
- `@supabase/ssr`: ^0.x (para Next.js App Router)

---

## 5️⃣ Configurar Supabase Clients no Next.js

### Client para Browser (`lib/supabase/client.ts`)

```typescript
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
```

**Uso**:
```typescript
// Em Client Components
'use client'

import { createClient } from '@/lib/supabase/client'

export function MyComponent() {
  const supabase = createClient()

  async function fetchData() {
    const { data } = await supabase.from('posts').select('*')
  }

  return <div>...</div>
}
```

### Client para Server Components (`lib/supabase/server.ts`)

```typescript
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // This can fail during server-side rendering
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // This can fail during server-side rendering
          }
        },
      },
    }
  )
}
```

**Uso**:
```typescript
// Em Server Components
import { createClient } from '@/lib/supabase/server'

export default async function Page() {
  const supabase = createClient()
  const { data } = await supabase.from('posts').select('*')

  return <div>{/* render data */}</div>
}
```

### Middleware para Auth (`middleware.ts`)

Crie `middleware.ts` na raiz do projeto:

```typescript
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  // Refresh session se expirado
  await supabase.auth.getSession()

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
```

---

## 6️⃣ Criar Schema do Banco (Migrations)

### Consultar documentação

Antes de começar, revise:
- `docs/04-BANCO-DE-DADOS.md` (schema completo)
- Templates em `planejamento/07-SUPABASE/template-migrations.md`

### Criar migration inicial

```bash
supabase migration new initial_schema
```

Isso cria: `supabase/migrations/[timestamp]_initial_schema.sql`

### Editar migration

Abra o arquivo e adicione o SQL:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table (extensão do auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL PRIMARY KEY,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Create [sua_entidade] table
CREATE TABLE [sua_entidade] (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'draft' NOT NULL CHECK (status IN ('draft', 'published', 'archived')),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Create indexes
CREATE INDEX [sua_entidade]_user_id_idx ON [sua_entidade](user_id);
CREATE INDEX [sua_entidade]_status_idx ON [sua_entidade](status);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE [sua_entidade] ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Profiles são públicos" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Usuários podem criar próprio profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Usuários podem atualizar próprio profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- [sua_entidade] policies
CREATE POLICY "Usuários veem próprios registros" ON [sua_entidade]
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Usuários criam próprios registros" ON [sua_entidade]
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários atualizam próprios registros" ON [sua_entidade]
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Usuários deletam próprios registros" ON [sua_entidade]
  FOR DELETE USING (auth.uid() = user_id);

-- Function: updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers: updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_[sua_entidade]_updated_at BEFORE UPDATE ON [sua_entidade]
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function: criar profile ao signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger: criar profile ao signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

### Aplicar migration localmente (opcional)

```bash
supabase db reset
```

Isso inicia um Supabase local (Docker) e aplica todas as migrations.

### Aplicar migration no Supabase Cloud

```bash
supabase db push
```

Confirmação: `Applying migration [timestamp]_initial_schema.sql`

---

## 7️⃣ Seed Inicial (Dados de Teste)

### Editar `supabase/seed.sql`

```sql
-- Inserir usuário de teste (senha: password123)
-- Após criar usuário via signup, insira dados de teste:

-- Exemplo: inserir posts de teste
INSERT INTO posts (user_id, title, description, status)
VALUES
  ('[user-uuid]', 'Post 1', 'Descrição 1', 'published'),
  ('[user-uuid]', 'Post 2', 'Descrição 2', 'draft');
```

**Nota**: Para seeds reais, crie usuários via Supabase Dashboard ou signup flow primeiro.

---

## 8️⃣ Testar Conexão

### Via Supabase Studio (local)

```bash
supabase start
```

Abra: `http://localhost:54323` (Supabase Studio local)

### Via SQL Editor (cloud)

1. Vá em **SQL Editor** no dashboard
2. Execute:
```sql
SELECT * FROM profiles;
```

### Via código Next.js

Crie uma página de teste:

```typescript
// app/test-supabase/page.tsx
import { createClient } from '@/lib/supabase/server'

export default async function TestPage() {
  const supabase = createClient()

  const { data, error } = await supabase.from('profiles').select('*')

  return (
    <div>
      <h1>Test Supabase</h1>
      <pre>{JSON.stringify({ data, error }, null, 2)}</pre>
    </div>
  )
}
```

Acesse: `http://localhost:3000/test-supabase`

---

## ✅ Checklist Final

- [ ] Projeto Supabase Cloud criado
- [ ] Supabase CLI instalado e autenticado
- [ ] Projeto local linkado ao remoto
- [ ] Variáveis de ambiente configuradas (.env.local)
- [ ] Dependências instaladas (@supabase/supabase-js, @supabase/ssr)
- [ ] Supabase clients configurados (browser, server)
- [ ] Middleware de auth configurado
- [ ] Migration inicial criada e aplicada
- [ ] Tabelas criadas no banco
- [ ] RLS habilitado e policies criadas
- [ ] Triggers configurados (updated_at, create_profile)
- [ ] Conexão testada (SQL + Next.js)

---

## 🔧 Comandos Úteis

```bash
# Ver status do Supabase local
supabase status

# Iniciar Supabase local
supabase start

# Parar Supabase local
supabase stop

# Aplicar migrations localmente
supabase db reset

# Aplicar migrations no remoto
supabase db push

# Puxar schema do remoto para local
supabase db pull

# Criar nova migration
supabase migration new [nome]

# Ver logs
supabase logs
```

---

## 📚 Próximos Passos

- [Fase 8: Implementar Autenticação](../08-AUTENTICACAO/README.md)
- [Fase 9: Começar Desenvolvimento](../09-DESENVOLVIMENTO/README.md)

---

**Referências**:
- [Supabase Docs](https://supabase.com/docs)
- [Supabase + Next.js](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [RLS Policies](https://supabase.com/docs/guides/auth/row-level-security)
