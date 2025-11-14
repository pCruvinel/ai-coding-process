# 🎯 Skill: Contexto do Projeto Dizevolv

## Descrição
Esta skill fornece ao Claude Code o contexto completo dos projetos Dizevolv, incluindo stack tecnológica, padrões arquiteturais, convenções e melhores práticas.

## Stack Tecnológica Padrão

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Estilização**: Tailwind CSS v4
- **Componentes**: Shadcn/ui
- **TypeScript**: Strict mode habilitado

### Backend & Database
- **BaaS**: Supabase
  - PostgreSQL Database
  - Authentication
  - Storage
  - Real-time subscriptions
  - Edge Functions

### Automação & IA
- **n8n**: Workflows e Agentes de IA (quando aplicável)
- **Integrações**: APIs de IA (OpenAI, Anthropic, etc.)

## Estrutura de Diretórios Padrão

```
projeto/
├── .ai/                    # Contexto para IAs
├── .claude/                # Claude Code skills e configs
├── app/                    # Next.js App Router
│   ├── (auth)/            # Rotas autenticadas
│   ├── (public)/          # Rotas públicas
│   ├── api/               # API Routes
│   └── layout.tsx         # Layout raiz
├── components/            # Componentes React
│   ├── ui/               # Shadcn components
│   └── [feature]/        # Feature-specific components
├── lib/                   # Utilities e configs
│   ├── supabase/         # Supabase client e helpers
│   ├── utils.ts          # Funções utilitárias
│   └── validations/      # Schemas Zod
├── types/                 # TypeScript types
├── hooks/                 # Custom React hooks
├── planejamento/          # Documentação do processo
└── public/               # Assets estáticos
```

## Padrões de Nomenclatura

### Arquivos
- **Componentes**: PascalCase (`UserProfile.tsx`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Types**: PascalCase (`User.types.ts`)
- **Hooks**: camelCase com prefixo `use` (`useAuth.ts`)

### Pastas
- **Features**: kebab-case (`user-profile/`)
- **Rotas**: kebab-case (`/dashboard/settings`)

## Convenções de Código

### TypeScript
```typescript
// ✅ Sempre use interfaces para props de componentes
interface UserProfileProps {
  userId: string;
  onUpdate?: (user: User) => void;
}

// ✅ Use type para unions e composições
type Status = 'idle' | 'loading' | 'success' | 'error';

// ✅ Sempre tipifique retornos de funções
async function fetchUser(id: string): Promise<User> {
  // ...
}
```

### React Components
```typescript
// ✅ Use Server Components por padrão
export default function Page() {
  return <div>...</div>;
}

// ✅ Use 'use client' apenas quando necessário
'use client';

export function InteractiveComponent() {
  const [state, setState] = useState();
  return <div>...</div>;
}
```

### Supabase
```typescript
// ✅ Use createServerClient para Server Components
import { createServerClient } from '@/lib/supabase/server';

export async function getData() {
  const supabase = createServerClient();
  const { data } = await supabase.from('users').select();
  return data;
}

// ✅ Use createBrowserClient para Client Components
'use client';
import { createBrowserClient } from '@/lib/supabase/client';

export function useUsers() {
  const supabase = createBrowserClient();
  // ...
}
```

## Checklist de Contexto

Ao trabalhar em um projeto Dizevolv, sempre verifique:

- [ ] **Stack confirmada**: Next.js, Tailwind v4, Shadcn, Supabase?
- [ ] **Autenticação**: Supabase Auth configurado?
- [ ] **Database**: Schema do Supabase documentado?
- [ ] **Variáveis de ambiente**: `.env.local` configurado?
- [ ] **Tipos**: TypeScript strict mode ativo?
- [ ] **Componentes**: Shadcn/ui instalado e configurado?
- [ ] **n8n**: Workflows de IA necessários?

## Integração com Supabase

### Environment Variables
```bash
# .env.local (obrigatório)
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key (apenas server)
```

### Database Types
```bash
# Gerar tipos do Supabase
npx supabase gen types typescript --project-id [project-id] > types/supabase.ts
```

## Segurança

### Row Level Security (RLS)
- **Sempre** habilitar RLS nas tabelas Supabase
- **Nunca** usar `service_role` no cliente
- **Validar** permissões em todas as queries

### Validação
```typescript
// ✅ Use Zod para validação
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});
```

## Performance

### Next.js
- Use Server Components para melhor performance
- Implemente streaming com Suspense
- Otimize imagens com `next/image`
- Use route handlers para APIs

### Supabase
- Implemente índices adequados
- Use `.select()` com campos específicos
- Considere Edge Functions para lógica complexa

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Tipos Supabase
npm run types:supabase

# Lint
npm run lint
```

## Referências Rápidas

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Shadcn/ui](https://ui.shadcn.com)
- [Supabase Docs](https://supabase.com/docs)
- [n8n Docs](https://docs.n8n.io)

---

**Quando usar esta skill**: No início de qualquer tarefa em um projeto Dizevolv para garantir que você está seguindo todos os padrões e práticas estabelecidas.
