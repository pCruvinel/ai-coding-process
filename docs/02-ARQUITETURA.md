# 02 - Arquitetura Técnica

> **Template**: Preencha este documento com a arquitetura específica do seu projeto

## 🏗️ Visão Geral da Arquitetura

[PREENCHER - Descreva a arquitetura geral do sistema em 2-3 parágrafos]

**Exemplo:**
> O sistema utiliza uma arquitetura moderna baseada em Next.js (App Router) para o frontend, com Supabase como Backend-as-a-Service. A aplicação segue o padrão de Server Components quando possível, utilizando Client Components apenas para interatividade. A comunicação com o banco de dados acontece através do cliente Supabase, com Row Level Security garantindo a segurança dos dados.

## 📊 Diagrama de Arquitetura

```
[PREENCHER - Desenhe o diagrama C4 ou similar]

Exemplo:

┌─────────────┐
│   Browser   │
│  (Cliente)  │
└──────┬──────┘
       │ HTTPS
       ▼
┌─────────────────────────────────┐
│    Vercel Edge Network          │
│  ┌───────────────────────────┐  │
│  │   Next.js Application     │  │
│  │  ┌──────────────────────┐ │  │
│  │  │  Server Components   │ │  │
│  │  │  (SSR/SSG)          │ │  │
│  │  └──────────┬───────────┘ │  │
│  │             │              │  │
│  │  ┌──────────▼───────────┐ │  │
│  │  │  Client Components   │ │  │
│  │  │  (Interactivity)    │ │  │
│  │  └──────────────────────┘ │  │
│  └───────────┬─────────────────┘│
└──────────────┼──────────────────┘
               │ Supabase Client
               │ (Auth + PostgreSQL)
               ▼
┌─────────────────────────────────┐
│     Supabase Platform           │
│  ┌───────────────────────────┐  │
│  │   PostgreSQL Database     │  │
│  │   (Row Level Security)    │  │
│  └───────────┬───────────────┘  │
│              │                   │
│  ┌───────────▼───────────────┐  │
│  │   Authentication          │  │
│  │   (JWT + Sessions)        │  │
│  └───────────────────────────┘  │
│                                  │
│  ┌───────────────────────────┐  │
│  │   Real-time Engine        │  │
│  │   (Subscriptions)         │  │
│  └───────────────────────────┘  │
│                                  │
│  ┌───────────────────────────┐  │
│  │   Storage                 │  │
│  │   (Files & Assets)        │  │
│  └───────────────────────────┘  │
└──────────────────────────────────┘
```

## 🎯 Princípios Arquiteturais

### 1. Server-First
[PREENCHER]

**Exemplo:**
- Usar Server Components por padrão
- Client Components apenas quando necessário (interatividade, hooks, etc.)
- Fetch de dados no servidor sempre que possível
- Streaming de UI para melhor performance

### 2. Type Safety
[PREENCHER]

**Exemplo:**
- TypeScript strict mode habilitado
- Tipos gerados do Supabase automaticamente
- Validação com Zod em todos os inputs
- Nenhum `any` permitido

### 3. Security First
[PREENCHER]

**Exemplo:**
- Row Level Security (RLS) em todas as tabelas
- Validação de permissões no servidor
- Sanitização de inputs
- HTTPS obrigatório
- Secrets em variáveis de ambiente

### 4. Performance
[PREENCHER]

**Exemplo:**
- Code splitting automático (Next.js)
- Image optimization (next/image)
- Edge caching quando apropriado
- Lazy loading de componentes pesados
- Database indexes otimizados

## 📁 Estrutura de Pastas

```
[PREENCHER - Adapte para seu projeto]

Exemplo:

projeto/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Rotas autenticadas (grupo de layout)
│   │   ├── dashboard/
│   │   │   ├── page.tsx          # /dashboard
│   │   │   └── loading.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx          # /projects
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx      # /projects/[id]
│   │   │   └── new/
│   │   │       └── page.tsx      # /projects/new
│   │   └── layout.tsx            # Layout com auth required
│   │
│   ├── (public)/                 # Rotas públicas
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── signup/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── api/                      # API Routes
│   │   ├── auth/
│   │   │   └── callback/
│   │   │       └── route.ts
│   │   └── webhooks/
│   │       └── route.ts
│   │
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles
│   └── error.tsx                 # Error boundary
│
├── components/                   # React Components
│   ├── ui/                       # Shadcn components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── auth/                     # Auth-related components
│   │   ├── login-form.tsx
│   │   ├── signup-form.tsx
│   │   └── logout-button.tsx
│   ├── projects/                 # Project-related components
│   │   ├── project-card.tsx
│   │   ├── project-form.tsx
│   │   └── project-list.tsx
│   └── shared/                   # Shared components
│       ├── header.tsx
│       ├── footer.tsx
│       └── sidebar.tsx
│
├── lib/                          # Utilities & configurations
│   ├── supabase/
│   │   ├── client.ts             # Browser client
│   │   ├── server.ts             # Server client
│   │   └── middleware.ts         # Middleware client
│   ├── utils/
│   │   ├── cn.ts                 # Class name utility
│   │   ├── format-date.ts
│   │   └── format-currency.ts
│   ├── validations/              # Zod schemas
│   │   ├── auth.ts
│   │   ├── project.ts
│   │   └── task.ts
│   └── constants.ts              # App constants
│
├── types/                        # TypeScript types
│   ├── database.types.ts         # Gerado do Supabase
│   ├── api.types.ts
│   └── index.ts
│
├── hooks/                        # Custom React hooks
│   ├── use-user.ts               # Current user hook
│   ├── use-projects.ts           # Projects data hook
│   └── use-toast.ts              # Toast notifications
│
├── middleware.ts                 # Next.js middleware (auth)
├── tailwind.config.ts            # Tailwind configuration
├── next.config.js                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json
```

## 🔐 Camada de Autenticação

### Fluxo de Autenticação

```
[PREENCHER - Descreva o fluxo de autenticação]

Exemplo:

1. Usuário acessa /login
2. Preenche email/senha
3. Cliente envia credenciais para Supabase Auth
4. Supabase valida e retorna JWT + Refresh Token
5. Tokens armazenados em cookies httpOnly
6. Middleware valida tokens em cada request
7. RLS no banco usa auth.uid() para filtrar dados
```

### Estrutura de Usuário

```typescript
[PREENCHER]

// Exemplo:
interface User {
  id: string;                    // UUID do auth.users
  email: string;
  name: string;
  avatar_url?: string;
  role: 'user' | 'admin';
  created_at: string;
  updated_at: string;
}
```

### Proteção de Rotas

[PREENCHER - Como proteger rotas]

**Exemplo:**
```typescript
// middleware.ts
export async function middleware(request: NextRequest) {
  const supabase = createMiddlewareClient({ req: request });
  const { data: { session } } = await supabase.auth.getSession();

  // Rotas protegidas
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Admin only
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const { data: profile } = await supabase
      .from('users')
      .select('role')
      .eq('id', session.user.id)
      .single();

    if (profile?.role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }
}
```

## 🗄️ Camada de Dados

### Estratégias de Fetching

[PREENCHER]

**Exemplo:**

1. **Server Components (SSR/SSG)**
   ```typescript
   // app/projects/page.tsx
   export default async function ProjectsPage() {
     const supabase = createServerClient();
     const { data: projects } = await supabase
       .from('projects')
       .select('*')
       .order('created_at', { ascending: false });

     return <ProjectList projects={projects} />;
   }
   ```

2. **Client Components (CSR)**
   ```typescript
   'use client';

   export function useProjects() {
     const [projects, setProjects] = useState([]);
     const supabase = createBrowserClient();

     useEffect(() => {
       supabase
         .from('projects')
         .select('*')
         .then(({ data }) => setProjects(data));
     }, []);

     return projects;
   }
   ```

3. **Real-time Subscriptions**
   ```typescript
   'use client';

   useEffect(() => {
     const channel = supabase
       .channel('projects-changes')
       .on('postgres_changes',
         { event: '*', schema: 'public', table: 'projects' },
         (payload) => {
           // Handle changes
         }
       )
       .subscribe();

     return () => { channel.unsubscribe(); };
   }, []);
   ```

### Cache Strategy

[PREENCHER]

**Exemplo:**
- **Static Pages**: ISR com revalidate de 60s para páginas públicas
- **Dynamic Pages**: fetch com cache: 'no-store' para dados do usuário
- **API Routes**: Sem cache para mutations
- **Assets**: Cache de 1 ano com hash no nome

## 🎨 Camada de Apresentação

### Component Patterns

[PREENCHER]

**Exemplo:**

1. **Server Components** (padrão)
   - Fetching de dados
   - Operações assíncronas
   - Sem interatividade

2. **Client Components** ('use client')
   - Hooks (useState, useEffect, etc.)
   - Event handlers
   - Browser APIs

3. **Compound Components**
   ```typescript
   <Card>
     <CardHeader>
       <CardTitle>Título</CardTitle>
     </CardHeader>
     <CardContent>
       Conteúdo
     </CardContent>
   </Card>
   ```

### Estilização

[PREENCHER]

**Exemplo:**
- **Tailwind CSS v4** para utility-first
- **cn()** helper para merge de classes
- **CSS Modules** apenas quando absolutamente necessário
- **Variáveis CSS** para temas

```typescript
// Padrão de estilização
<div className="flex items-center gap-4 p-4 bg-background border rounded-lg hover:shadow-md transition-shadow">
```

## 🔄 Fluxos de Dados Principais

### Exemplo: Criar um Projeto

```
[PREENCHER - Descreva fluxo completo]

Exemplo:

1. [Client] Usuário clica "Novo Projeto"
2. [Client] Modal com form aparece (Client Component)
3. [Client] Usuário preenche e submete
4. [Client] Validação Zod no cliente
5. [Client] POST para Server Action ou API Route
6. [Server] Validação Zod no servidor (novamente)
7. [Server] Verifica auth (middleware)
8. [Server] Insere no Supabase com user_id
9. [Database] RLS valida que user pode inserir
10. [Database] Trigger atualiza updated_at
11. [Server] Retorna sucesso + dados
12. [Client] Atualiza UI (optimistic update)
13. [Client] Mostra toast de sucesso
14. [Client] Navega para /projects/[novo-id]
```

## 📦 Dependências Principais

[PREENCHER]

**Exemplo:**

### Produção
```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "@supabase/supabase-js": "^2.38.0",
  "@supabase/ssr": "^0.0.10",
  "tailwindcss": "^4.0.0",
  "zod": "^3.22.0",
  "react-hook-form": "^7.48.0"
}
```

### Desenvolvimento
```json
{
  "typescript": "^5.3.0",
  "@types/node": "^20.0.0",
  "@types/react": "^18.2.0",
  "eslint": "^8.54.0",
  "prettier": "^3.1.0"
}
```

## 🔧 Configurações Importantes

### TypeScript
[PREENCHER]

**Exemplo:**
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitAny": true
  }
}
```

### Next.js
[PREENCHER]

**Exemplo:**
```javascript
module.exports = {
  experimental: {
    serverActions: true
  },
  images: {
    domains: ['your-supabase-url.supabase.co']
  }
}
```

## 📊 ADRs (Architecture Decision Records)

### ADR-001: Next.js App Router vs Pages Router
[PREENCHER - Documente decisões arquiteturais importantes]

**Exemplo:**
- **Data**: 2024-11-15
- **Status**: Aceito
- **Decisão**: Usar App Router
- **Contexto**: Precisamos escolher entre App Router (novo) e Pages Router (estável)
- **Razões**:
  - Server Components reduzem bundle size
  - Melhor performance de carregamento
  - Streaming nativo
  - Futuro do Next.js
- **Consequências**:
  - Menor quantidade de recursos/tutoriais
  - Algumas bibliotecas podem não ser compatíveis
  - Curva de aprendizado

### ADR-002: [Próxima decisão]
[PREENCHER]

---

**Status**: 🟡 Template - Aguardando preenchimento
**Documento Anterior**: [01-VISAO-GERAL.md](./01-VISAO-GERAL.md)
**Próximo Documento**: [03-ESPECIFICACAO.md](./03-ESPECIFICACAO.md)
