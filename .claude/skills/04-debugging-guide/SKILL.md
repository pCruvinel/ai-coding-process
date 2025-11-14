# 🐛 Skill: Debugging Guide Dizevolv

## Descrição
Esta skill fornece um guia completo para diagnosticar e resolver problemas comuns em projetos Next.js + Supabase da Dizevolv, com foco em debugging eficiente e resolução rápida.

## 🎯 Metodologia de Debugging

### 1. Identificar o Problema
```
❓ O que está acontecendo?
❓ O que deveria acontecer?
❓ Quando começou?
❓ É consistente ou intermitente?
```

### 2. Reproduzir o Erro
- [ ] Passos para reproduzir documentados
- [ ] Ambiente identificado (dev/staging/prod)
- [ ] Dados de teste preparados
- [ ] Logs/screenshots coletados

### 3. Isolar a Causa
- [ ] Testar componentes individualmente
- [ ] Verificar logs do console
- [ ] Verificar logs do servidor
- [ ] Verificar logs do Supabase

### 4. Resolver
- [ ] Implementar fix
- [ ] Testar fix
- [ ] Verificar não criou novos problemas
- [ ] Documentar solução

## 🔍 Problemas Comuns e Soluções

### 🚨 Next.js

#### ❌ Erro: "TypeError: Cannot read properties of undefined"

**Sintoma**: Componente quebra ao tentar acessar propriedade

**Causa Comum**: Dados ainda não carregados ou undefined

**Solução**:
```typescript
// ❌ INCORRETO
function UserProfile({ user }) {
  return <div>{user.name}</div>; // Quebra se user for undefined
}

// ✅ CORRETO: Optional chaining
function UserProfile({ user }) {
  return <div>{user?.name ?? 'Carregando...'}</div>;
}

// ✅ CORRETO: Early return
function UserProfile({ user }) {
  if (!user) return <div>Carregando...</div>;
  return <div>{user.name}</div>;
}

// ✅ CORRETO: Nullish coalescing
function UserProfile({ user }) {
  const name = user?.name ?? 'Usuário';
  return <div>{name}</div>;
}
```

#### ❌ Erro: "Error: Objects are not valid as a React child"

**Sintoma**: Tentativa de renderizar objeto diretamente

**Causa Comum**: Passar objeto ao invés de string/number/JSX

**Solução**:
```typescript
// ❌ INCORRETO
<div>{user}</div> // user é um objeto

// ✅ CORRETO
<div>{user.name}</div>
<div>{JSON.stringify(user)}</div> // Para debug
```

#### ❌ Erro: "Hydration failed"

**Sintoma**: Conteúdo do servidor difere do cliente

**Causa Comum**: Renderização condicional baseada em window/localStorage/random

**Solução**:
```typescript
// ❌ INCORRETO: Causa hydration mismatch
function Component() {
  const isMobile = window.innerWidth < 768;
  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
}

// ✅ CORRETO: Use useEffect
'use client';
import { useState, useEffect } from 'react';

function Component() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
}

// ✅ MELHOR: Use CSS
function Component() {
  return (
    <>
      <div className="block md:hidden">Mobile</div>
      <div className="hidden md:block">Desktop</div>
    </>
  );
}
```

#### ❌ Erro: "useEffect/useState is not defined"

**Sintoma**: Hooks não funcionam em Server Component

**Causa Comum**: Esqueceu de adicionar 'use client'

**Solução**:
```typescript
// ❌ INCORRETO: Server Component tentando usar hook
export default function Component() {
  const [state, setState] = useState(); // Erro!
  return <div>...</div>;
}

// ✅ CORRETO: Adicionar 'use client'
'use client';

export default function Component() {
  const [state, setState] = useState();
  return <div>...</div>;
}
```

#### ❌ Erro: "Module not found"

**Sintoma**: Import não encontrado

**Diagnóstico**:
```bash
# 1. Verificar se pacote está instalado
npm ls nome-do-pacote

# 2. Reinstalar dependências
rm -rf node_modules package-lock.json
npm install

# 3. Verificar path do import
# - Paths absolutos devem começar com @/
# - Paths relativos: ../ ou ./
```

**Solução**:
```typescript
// ❌ INCORRETO
import { Button } from 'components/ui/button';

// ✅ CORRETO: Path absoluto
import { Button } from '@/components/ui/button';

// ✅ CORRETO: Path relativo
import { Button } from '../ui/button';
```

### 🗄️ Supabase

#### ❌ Erro: "Invalid API key"

**Sintoma**: Erro 401 ao fazer requests ao Supabase

**Diagnóstico**:
```typescript
// Verificar env vars
console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('Key exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
```

**Solução**:
1. Verificar `.env.local` existe e tem as variáveis
2. Reiniciar dev server após alterar .env
3. Verificar variáveis começam com `NEXT_PUBLIC_` para uso no cliente
4. Verificar no Supabase Dashboard se keys estão corretas

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-anon-key-aqui
SUPABASE_SERVICE_ROLE_KEY=sua-service-role-key-aqui # Apenas server
```

#### ❌ Erro: "Row Level Security policy violation"

**Sintoma**: Query retorna erro 403 ou dados vazios quando deveria retornar

**Diagnóstico**:
```sql
-- No Supabase Dashboard > SQL Editor
-- Verificar policies da tabela
SELECT * FROM pg_policies WHERE tablename = 'sua_tabela';

-- Testar query como usuário específico
SELECT * FROM sua_tabela; -- Executar logado como usuário de teste
```

**Solução**:
```sql
-- Criar policy correta
-- Exemplo: Permitir usuários ver próprios dados
CREATE POLICY "Users can view own data"
  ON public.users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Exemplo: Permitir todos ver dados públicos
CREATE POLICY "Public profiles are viewable"
  ON public.profiles
  FOR SELECT
  TO authenticated
  USING (is_public = true OR auth.uid() = user_id);
```

#### ❌ Erro: "Auth session missing"

**Sintoma**: `getUser()` retorna null quando deveria estar autenticado

**Diagnóstico**:
```typescript
// Verificar sessão
const { data: { session } } = await supabase.auth.getSession();
console.log('Session:', session);

// Verificar cookies
// No browser DevTools > Application > Cookies
// Procurar por sb-*-auth-token
```

**Solução**:
```typescript
// ✅ Server: Use createServerClient
import { createServerClient } from '@/lib/supabase/server';

export async function getData() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  // ...
}

// ✅ Client: Use createBrowserClient
'use client';
import { createBrowserClient } from '@/lib/supabase/client';

export function Component() {
  const supabase = createBrowserClient();
  // ...
}

// ❌ NUNCA faça isso no cliente:
const supabase = createClient(url, serviceRoleKey); // PERIGO!
```

#### ❌ Erro: "Foreign key constraint violation"

**Sintoma**: Erro ao inserir/deletar dados com relações

**Diagnóstico**:
```sql
-- Verificar constraints
SELECT
  tc.constraint_name,
  tc.table_name,
  kcu.column_name,
  ccu.table_name AS foreign_table_name,
  ccu.column_name AS foreign_column_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
  ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage AS ccu
  ON ccu.constraint_name = tc.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY' AND tc.table_name='sua_tabela';
```

**Solução**:
```typescript
// Ao deletar: deletar dependências primeiro
// Ou usar ON DELETE CASCADE na foreign key

// ❌ INCORRETO: Tentar deletar user com posts
await supabase.from('users').delete().eq('id', userId);
// Erro: posts ainda referenciam este user

// ✅ CORRETO: Deletar posts primeiro
await supabase.from('posts').delete().eq('user_id', userId);
await supabase.from('users').delete().eq('id', userId);

// ✅ MELHOR: Usar ON DELETE CASCADE
-- Na migration:
ALTER TABLE posts
ADD CONSTRAINT posts_user_id_fkey
FOREIGN KEY (user_id)
REFERENCES users(id)
ON DELETE CASCADE;
```

#### ❌ Erro: Query lenta / Timeout

**Sintoma**: Queries demorando muito

**Diagnóstico**:
```sql
-- No Supabase Dashboard > Database > Query Performance
-- Verificar queries lentas

-- Explicar query plan
EXPLAIN ANALYZE
SELECT * FROM sua_tabela WHERE coluna = 'valor';
```

**Solução**:
```sql
-- 1. Criar índices
CREATE INDEX idx_tabela_coluna ON sua_tabela(coluna);

-- 2. Índices compostos para queries complexas
CREATE INDEX idx_posts_user_created
ON posts(user_id, created_at DESC);

-- 3. Índices parciais para queries específicas
CREATE INDEX idx_posts_published
ON posts(published_at)
WHERE status = 'published';
```

```typescript
// 4. Select apenas campos necessários
// ❌ INCORRETO: Buscar tudo
const { data } = await supabase.from('posts').select('*');

// ✅ CORRETO: Buscar apenas necessário
const { data } = await supabase
  .from('posts')
  .select('id, title, created_at');

// 5. Usar paginação
const { data } = await supabase
  .from('posts')
  .select('id, title')
  .range(0, 9) // Primeiros 10 itens
  .order('created_at', { ascending: false });
```

### 🎨 CSS / Tailwind

#### ❌ Erro: Classes Tailwind não aplicam

**Sintoma**: Classes Tailwind não têm efeito visual

**Diagnóstico**:
```typescript
// 1. Verificar se Tailwind está importado em layout
// app/layout.tsx deve ter:
import './globals.css';

// 2. Verificar globals.css tem diretivas
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// 3. Verificar tailwind.config.js aponta para arquivos corretos
// content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}']
```

**Solução**:
```bash
# Reinstalar Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Verificar configuração
cat tailwind.config.js
```

#### ❌ Erro: Classes dinâmicas não funcionam

**Sintoma**: Classes construídas dinamicamente não aplicam

**Causa**: Tailwind precisa ver classes completas em tempo de build

**Solução**:
```typescript
// ❌ INCORRETO: Classes concatenadas
const color = 'red';
<div className={`text-${color}-500`}>Text</div> // Não funciona!

// ✅ CORRETO: Classes completas
<div className={color === 'red' ? 'text-red-500' : 'text-blue-500'}>
  Text
</div>

// ✅ CORRETO: Use cn() para combinar
import { cn } from '@/lib/utils';

<div className={cn(
  'text-base',
  isActive && 'text-red-500',
  isDisabled && 'opacity-50'
)}>
  Text
</div>

// ✅ CORRETO: Safelist em tailwind.config (último recurso)
// tailwind.config.js
module.exports = {
  safelist: [
    'text-red-500',
    'text-blue-500',
    'text-green-500',
  ],
};
```

### 🔐 Autenticação

#### ❌ Erro: Redirect loop infinito

**Sintoma**: Página fica redirecionando infinitamente

**Causa**: Middleware ou route protection mal configurado

**Solução**:
```typescript
// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data: { session } } = await supabase.auth.getSession();

  // Evitar loops: definir paths específicos
  const isAuthPage = req.nextUrl.pathname.startsWith('/login');
  const isProtectedPage = req.nextUrl.pathname.startsWith('/dashboard');

  // ✅ CORRETO: Lógica clara de redirecionamento
  if (!session && isProtectedPage) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (session && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
```

### 🧩 TypeScript

#### ❌ Erro: "Type 'X' is not assignable to type 'Y'"

**Diagnóstico**:
```typescript
// Usar satisfies para verificar
const user = {
  name: 'John',
  age: 30,
} satisfies User; // Mostra erro específico

// Usar type guards
function isUser(obj: unknown): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'name' in obj &&
    'age' in obj
  );
}
```

**Solução**:
```typescript
// ✅ Type assertion quando você sabe o tipo
const user = data as User;

// ✅ MELHOR: Validação runtime com Zod
import { z } from 'zod';

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

const user = userSchema.parse(data); // Valida e tipifica
```

## 🛠️ Ferramentas de Debugging

### Console Debugging
```typescript
// ✅ Use console.log estrategicamente
console.log('📍 Checkpoint:', { user, posts });

// ✅ Use console.table para arrays
console.table(users);

// ✅ Use console.group para organizar
console.group('User Flow');
console.log('1. Fetching user...');
console.log('2. Got user:', user);
console.groupEnd();

// ✅ Use console.time para performance
console.time('fetch-users');
await fetchUsers();
console.timeEnd('fetch-users'); // fetch-users: 234ms
```

### React DevTools
```typescript
// Inspecionar componentes
// Chrome/Edge: React Developer Tools extension

// Adicionar display name para componentes
export function UserProfile() {
  // ...
}
UserProfile.displayName = 'UserProfile';
```

### Network Debugging
```typescript
// Interceptar requests (para debug)
// Adicionar em client Supabase
const supabase = createBrowserClient();

// Log todas requests (apenas dev!)
if (process.env.NODE_ENV === 'development') {
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    console.log('🌐 Fetch:', args[0]);
    const response = await originalFetch(...args);
    console.log('✅ Response:', response.status);
    return response;
  };
}
```

### Supabase Debugging
```typescript
// Habilitar debug no Supabase client
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(url, key, {
  auth: {
    debug: true, // Logs de autenticação
  },
});
```

## 📋 Checklist de Debugging

Quando encontrar um bug, siga esta ordem:

### 1. Coleta de Informações
- [ ] Mensagem de erro completa copiada
- [ ] Stack trace analisado
- [ ] Console do browser verificado
- [ ] Network tab verificado
- [ ] Logs do servidor verificados

### 2. Reprodução
- [ ] Passos para reproduzir documentados
- [ ] Reproduzido localmente
- [ ] Ambiente identificado (dev/prod)

### 3. Hipótese
- [ ] Causa provável identificada
- [ ] Componente/função problemática localizada
- [ ] Escopo do problema definido

### 4. Teste
- [ ] Hipótese testada
- [ ] Logs adicionados nos pontos críticos
- [ ] Dados intermediários inspecionados

### 5. Fix
- [ ] Solução implementada
- [ ] Testada localmente
- [ ] Edge cases considerados
- [ ] Não criou novos bugs

### 6. Documentação
- [ ] Problema documentado
- [ ] Solução documentada
- [ ] Prevenção futura considerada

## 🚨 Erros Críticos de Produção

### Como Agir
1. **Avaliar gravidade**: Impede uso? Afeta dados?
2. **Rollback se necessário**: Voltar versão anterior
3. **Investigar logs**: Supabase Dashboard > Logs
4. **Comunicar**: Avisar stakeholders
5. **Fix urgente**: Implementar correção
6. **Deploy**: Testar e fazer deploy
7. **Monitorar**: Verificar se resolveu
8. **Post-mortem**: Documentar o que aconteceu e como prevenir

### Ferramentas de Monitoramento
- **Vercel Analytics**: Erros e performance
- **Supabase Logs**: Database e API errors
- **Browser Console**: Erros do cliente (em dev)
- **Sentry** (opcional): Error tracking

## 💡 Dicas Gerais

### Debugging Eficiente
1. **Leia a mensagem de erro**: 80% das vezes ela diz exatamente o problema
2. **Divida e conquiste**: Comente código até achar a linha problemática
3. **Simplifique**: Remova complexidade desnecessária
4. **Use tipos**: TypeScript pega muitos erros antes do runtime
5. **Teste localmente**: Sempre teste antes de deploy

### Prevenção
1. **TypeScript strict**: Ative e use corretamente
2. **Linting**: Configure ESLint e siga as regras
3. **Validação**: Valide todos os inputs com Zod
4. **Testes**: Escreva testes para lógica crítica
5. **Code review**: Peça revisão antes de mergear

---

**Quando usar esta skill**: Ao encontrar qualquer erro ou comportamento inesperado, use este guia para diagnosticar e resolver o problema de forma sistemática e eficiente.
