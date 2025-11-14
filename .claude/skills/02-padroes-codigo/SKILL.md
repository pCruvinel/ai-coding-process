# 🎨 Skill: Padrões de Código Dizevolv

## Descrição
Esta skill garante que todo código escrito siga os padrões de qualidade, segurança e consistência estabelecidos pela Dizevolv para projetos Next.js + Supabase.

## Princípios Fundamentais

### 1. Clean Code
- **Nomes descritivos**: Variáveis e funções devem explicar sua intenção
- **Funções pequenas**: Máximo 20-30 linhas, uma responsabilidade
- **DRY**: Don't Repeat Yourself - extraia lógica duplicada
- **KISS**: Keep It Simple, Stupid - prefira soluções simples

### 2. Type Safety
- **TypeScript strict**: Sempre habilitado
- **Evite `any`**: Use `unknown` quando tipo for incerto
- **Genéricos**: Use quando apropriado para reusabilidade
- **Tipos do Supabase**: Sempre use tipos gerados

### 3. Segurança First
- **Nunca** exponha secrets no cliente
- **Sempre** valide inputs do usuário
- **Sempre** use RLS no Supabase
- **Sanitize** dados antes de renderizar

## Padrões por Camada

### 🎨 Componentes React

#### Server Components (Padrão)
```typescript
// ✅ CORRETO: Server Component otimizado
import { createServerClient } from '@/lib/supabase/server';
import { UserCard } from '@/components/user/UserCard';

export default async function UsersPage() {
  const supabase = createServerClient();
  const { data: users, error } = await supabase
    .from('users')
    .select('id, name, email, avatar_url')
    .order('created_at', { ascending: false });

  if (error) {
    return <ErrorState message="Erro ao carregar usuários" />;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
```

```typescript
// ❌ INCORRETO: Uso desnecessário de Client Component
'use client';
import { useEffect, useState } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch no useEffect é anti-pattern no Next.js 14+
    fetchUsers();
  }, []);

  // ...
}
```

#### Client Components
```typescript
// ✅ CORRETO: Client Component com 'use client' explícito
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface DeleteButtonProps {
  itemId: string;
  onDeleted?: () => void;
}

export function DeleteButton({ itemId, onDeleted }: DeleteButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();

  async function handleDelete() {
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/items/${itemId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Erro ao deletar');

      toast({ title: 'Item deletado com sucesso' });
      onDeleted?.();
    } catch (error) {
      toast({
        title: 'Erro ao deletar',
        variant: 'destructive',
      });
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <Button
      onClick={handleDelete}
      disabled={isDeleting}
      variant="destructive"
    >
      {isDeleting ? 'Deletando...' : 'Deletar'}
    </Button>
  );
}
```

### 🔌 API Routes

```typescript
// ✅ CORRETO: Route Handler com validação e segurança
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerClient } from '@/lib/supabase/server';

const createUserSchema = z.object({
  email: z.string().email('Email inválido'),
  name: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres'),
  role: z.enum(['user', 'admin']).default('user'),
});

export async function POST(request: NextRequest) {
  try {
    // 1. Verificar autenticação
    const supabase = createServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Não autenticado' },
        { status: 401 }
      );
    }

    // 2. Validar input
    const body = await request.json();
    const validatedData = createUserSchema.parse(body);

    // 3. Executar operação
    const { data, error } = await supabase
      .from('users')
      .insert(validatedData)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: 'Erro ao criar usuário' },
        { status: 500 }
      );
    }

    // 4. Retornar sucesso
    return NextResponse.json(data, { status: 201 });

  } catch (error) {
    // 5. Tratar erros de validação
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: error.errors },
        { status: 400 }
      );
    }

    // 6. Tratar erros gerais
    console.error('Erro na API:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
```

### 🗄️ Supabase Queries

```typescript
// ✅ CORRETO: Query otimizada com tipos
import { createServerClient } from '@/lib/supabase/server';
import type { Database } from '@/types/supabase';

type User = Database['public']['Tables']['users']['Row'];

export async function getUserWithPosts(userId: string): Promise<User | null> {
  const supabase = createServerClient();

  const { data, error } = await supabase
    .from('users')
    .select(`
      id,
      name,
      email,
      avatar_url,
      posts (
        id,
        title,
        created_at
      )
    `)
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Erro ao buscar usuário:', error);
    return null;
  }

  return data;
}
```

```typescript
// ❌ INCORRETO: Query sem tipos e sem otimização
export async function getUserWithPosts(userId) {
  const supabase = createServerClient();

  // Busca todos os campos desnecessariamente
  const { data } = await supabase
    .from('users')
    .select('*, posts(*)')
    .eq('id', userId);

  return data;
}
```

### 🎯 Custom Hooks

```typescript
// ✅ CORRETO: Hook bem tipado e com cleanup
'use client';

import { useState, useEffect } from 'react';
import { createBrowserClient } from '@/lib/supabase/client';
import type { Database } from '@/types/supabase';

type Profile = Database['public']['Tables']['profiles']['Row'];

export function useProfile(userId: string | undefined) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    async function fetchProfile() {
      try {
        const supabase = createBrowserClient();
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
          .single();

        if (!isMounted) return;

        if (error) throw error;
        setProfile(data);
      } catch (err) {
        if (!isMounted) return;
        setError(err instanceof Error ? err : new Error('Erro desconhecido'));
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchProfile();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  return { profile, isLoading, error };
}
```

## Padrões de Estilização

### Tailwind CSS v4

```typescript
// ✅ CORRETO: Classes organizadas e responsivas
<div className="
  flex flex-col gap-4
  p-4 md:p-6 lg:p-8
  bg-background
  border border-border rounded-lg
  hover:shadow-md
  transition-shadow duration-200
">
  <h2 className="text-xl md:text-2xl font-semibold">
    Título
  </h2>
  <p className="text-sm text-muted-foreground">
    Descrição
  </p>
</div>
```

```typescript
// ✅ CORRETO: Use cn() para classes condicionais
import { cn } from '@/lib/utils';

<Button
  className={cn(
    'w-full',
    isActive && 'bg-primary',
    isDisabled && 'opacity-50 cursor-not-allowed'
  )}
/>
```

## Segurança - Checklist

### ✅ Autenticação & Autorização
- [ ] RLS habilitado em todas as tabelas Supabase
- [ ] Verificação de autenticação em APIs sensíveis
- [ ] Tokens nunca expostos no cliente
- [ ] Middleware de autenticação em rotas protegidas

### ✅ Validação de Dados
- [ ] Todos os inputs validados com Zod
- [ ] Sanitização de dados antes de renderizar
- [ ] Rate limiting em APIs públicas
- [ ] CORS configurado adequadamente

### ✅ Variáveis de Ambiente
```typescript
// ✅ CORRETO: Validação de env vars
import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
});

export const env = envSchema.parse(process.env);
```

## Performance - Checklist

### ✅ Next.js
- [ ] Server Components usados por padrão
- [ ] Imagens otimizadas com `next/image`
- [ ] Fonts otimizados com `next/font`
- [ ] Dynamic imports para code splitting
- [ ] Streaming com Suspense boundaries

### ✅ Supabase
- [ ] Índices criados para queries frequentes
- [ ] Select apenas campos necessários
- [ ] Paginação implementada (limit/offset)
- [ ] Cache strategy definida

## Acessibilidade

```typescript
// ✅ CORRETO: Componente acessível
<button
  type="button"
  aria-label="Fechar modal"
  aria-pressed={isOpen}
  onClick={handleClose}
  className="..."
>
  <X className="h-4 w-4" />
  <span className="sr-only">Fechar</span>
</button>
```

## Testes Mínimos

```typescript
// ✅ Escreva testes para lógica crítica
import { describe, it, expect } from 'vitest';
import { formatCurrency } from '@/lib/utils';

describe('formatCurrency', () => {
  it('formata valores corretamente', () => {
    expect(formatCurrency(1000)).toBe('R$ 1.000,00');
    expect(formatCurrency(0)).toBe('R$ 0,00');
    expect(formatCurrency(99.99)).toBe('R$ 99,99');
  });
});
```

## Code Review Checklist

Antes de commitar, verifique:

- [ ] **Types**: Sem `any`, todos os tipos explícitos
- [ ] **Imports**: Organizados e sem não utilizados
- [ ] **Naming**: Nomes descritivos e consistentes
- [ ] **Funções**: Pequenas e com uma responsabilidade
- [ ] **Errors**: Tratamento adequado de erros
- [ ] **Security**: Sem secrets, validação de inputs
- [ ] **Performance**: Otimizações implementadas
- [ ] **Acessibilidade**: ARIA labels quando necessário
- [ ] **Testes**: Lógica crítica coberta
- [ ] **Docs**: Comentários JSDoc em funções complexas

---

**Quando usar esta skill**: Ao escrever qualquer código novo ou revisar código existente para garantir conformidade com os padrões Dizevolv.
