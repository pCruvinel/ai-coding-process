# 🔐 Guia Completo: Autenticação com Supabase

Guia passo a passo para implementar autenticação completa usando Supabase Auth no Next.js.

---

## 🎯 Objetivos

1. Implementar login/signup com email + senha
2. Implementar reset de senha
3. Criar componentes de formulário
4. Proteger rotas com middleware
5. Criar hooks de autenticação
6. Implementar logout

**Duração estimada**: Day 3-5 da Semana 1

---

## 📋 Pré-requisitos

- [ ] Supabase configurado (Fase 7)
- [ ] Supabase clients criados (browser, server)
- [ ] Middleware básico configurado
- [ ] Tailwind CSS + shadcn/ui instalados

---

## 1️⃣ Estrutura de Pastas

```
app/
├── (auth)/                    # Route group para páginas de auth
│   ├── layout.tsx            # Layout específico (sem sidebar, etc.)
│   ├── login/
│   │   └── page.tsx
│   ├── signup/
│   │   └── page.tsx
│   └── reset-password/
│       └── page.tsx
│
├── (dashboard)/              # Route group para rotas protegidas
│   ├── layout.tsx           # Layout com sidebar, header
│   ├── dashboard/
│   │   └── page.tsx
│   └── ...
│
└── api/
    └── auth/
        └── callback/
            └── route.ts     # Callback para magic links

components/
└── auth/
    ├── LoginForm.tsx
    ├── SignupForm.tsx
    ├── ResetPasswordForm.tsx
    └── LogoutButton.tsx

lib/
├── supabase/
│   ├── client.ts
│   ├── server.ts
│   └── middleware.ts
└── hooks/
    └── useUser.ts

middleware.ts                 # Proteção de rotas
```

---

## 2️⃣ Configurar Supabase Auth

### Configurações no Dashboard

1. Vá em **Authentication → Settings** no Supabase Dashboard

2. **Site URL**: `http://localhost:3000` (dev) ou `https://seusite.com` (prod)

3. **Redirect URLs**: Adicionar:
   - `http://localhost:3000/**`
   - `https://seusite.com/**`

4. **Auth Providers**: Habilitar **Email**

5. **Email Templates** (opcional): Customizar templates de confirmação/reset

---

## 3️⃣ Criar Componente de Login

### `app/(auth)/login/page.tsx`

```typescript
import { LoginForm } from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 px-4">
        <div>
          <h2 className="text-center text-3xl font-bold">
            Entre na sua conta
          </h2>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
```

### `components/auth/LoginForm.tsx`

```typescript
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const supabase = createClient()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push('/dashboard')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-800">
          {error}
        </div>
      )}

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
      </div>

      <div>
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
      </div>

      <div className="flex items-center justify-between">
        <Link
          href="/reset-password"
          className="text-sm text-blue-600 hover:underline"
        >
          Esqueceu a senha?
        </Link>
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Entrando...' : 'Entrar'}
      </Button>

      <div className="text-center text-sm">
        Não tem conta?{' '}
        <Link href="/signup" className="text-blue-600 hover:underline">
          Cadastre-se
        </Link>
      </div>
    </form>
  )
}
```

---

## 4️⃣ Criar Componente de Signup

### `app/(auth)/signup/page.tsx`

```typescript
import { SignupForm } from '@/components/auth/SignupForm'

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 px-4">
        <div>
          <h2 className="text-center text-3xl font-bold">
            Crie sua conta
          </h2>
        </div>
        <SignupForm />
      </div>
    </div>
  )
}
```

### `components/auth/SignupForm.tsx`

```typescript
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export function SignupForm() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const supabase = createClient()

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push('/dashboard')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-800">
          {error}
        </div>
      )}

      <div>
        <Label htmlFor="fullName">Nome completo</Label>
        <Input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
      </div>

      <div>
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
          minLength={6}
        />
        <p className="mt-1 text-xs text-gray-500">
          Mínimo 6 caracteres
        </p>
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Criando conta...' : 'Criar conta'}
      </Button>

      <div className="text-center text-sm">
        Já tem conta?{' '}
        <Link href="/login" className="text-blue-600 hover:underline">
          Faça login
        </Link>
      </div>
    </form>
  )
}
```

---

## 5️⃣ Criar Reset de Senha

### `app/(auth)/reset-password/page.tsx`

```typescript
import { ResetPasswordForm } from '@/components/auth/ResetPasswordForm'

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 px-4">
        <div>
          <h2 className="text-center text-3xl font-bold">
            Recuperar senha
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enviaremos um link para seu email
          </p>
        </div>
        <ResetPasswordForm />
      </div>
    </div>
  )
}
```

### `components/auth/ResetPasswordForm.tsx`

```typescript
'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export function ResetPasswordForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const supabase = createClient()

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/auth/callback?next=/update-password`,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setSent(true)
    setLoading(false)
  }

  if (sent) {
    return (
      <div className="rounded-md bg-green-50 p-4">
        <p className="text-sm text-green-800">
          Email enviado! Verifique sua caixa de entrada.
        </p>
        <Link href="/login" className="mt-4 block text-sm text-blue-600 hover:underline">
          Voltar para login
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-800">
          {error}
        </div>
      )}

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar link de recuperação'}
      </Button>

      <div className="text-center text-sm">
        <Link href="/login" className="text-blue-600 hover:underline">
          Voltar para login
        </Link>
      </div>
    </form>
  )
}
```

---

## 6️⃣ Criar Logout Button

### `components/auth/LogoutButton.tsx`

```typescript
'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'

export function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <Button onClick={handleLogout} variant="outline">
      Sair
    </Button>
  )
}
```

---

## 7️⃣ Proteger Rotas com Middleware

### `middleware.ts`

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

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Proteger rotas /dashboard/*
  if (request.nextUrl.pathname.startsWith('/dashboard') && !session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirecionar de /login para /dashboard se já autenticado
  if (request.nextUrl.pathname === '/login' && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
```

---

## 8️⃣ Criar Hook useUser

### `lib/hooks/useUser.ts`

```typescript
'use client'

import { useEffect, useState } from 'react'
import { User } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase/client'

export function useUser() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()

    // Obter usuário inicial
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      setLoading(false)
    })

    // Subscribe a mudanças de auth
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  return { user, loading }
}
```

**Uso**:
```typescript
'use client'

import { useUser } from '@/lib/hooks/useUser'

export function ProfileButton() {
  const { user, loading } = useUser()

  if (loading) return <div>Carregando...</div>

  return <div>Olá, {user?.email}</div>
}
```

---

## ✅ Checklist Final

- [ ] Páginas de auth criadas (login, signup, reset-password)
- [ ] Componentes de formulário criados e funcionando
- [ ] Logout funcionando
- [ ] Middleware protegendo rotas
- [ ] Hook useUser criado
- [ ] Redirecionamentos corretos (login → dashboard, etc.)
- [ ] Mensagens de erro sendo exibidas
- [ ] Validação de formulários
- [ ] Fluxo completo testado

---

## 📚 Próximos Passos

- [Fase 9: Começar Desenvolvimento](../09-DESENVOLVIMENTO/README.md)

---

**Referências**:
- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [Next.js + Supabase SSR](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
