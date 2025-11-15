# 📄 Templates de Documentação Técnica

Use estes templates como base para criar a documentação completa do seu projeto.

---

## 📋 Template: Visão Geral (`docs/01-VISAO-GERAL.md`)

```markdown
# Visão Geral: [Nome do Projeto]

## 📌 Descrição

[Breve descrição do projeto - 2-3 parágrafos explicando o que é e qual problema resolve]

## 🎯 Objetivos de Negócio

1. **Objetivo Principal**: [Ex: Permitir que freelancers gerenciem seus projetos de forma eficiente]
2. **Objetivo Secundário**: [Ex: Reduzir tempo gasto em tarefas administrativas]
3. **Métricas de Sucesso**:
   - [Ex: 100 usuários ativos no primeiro mês]
   - [Ex: Taxa de retenção de 70%]

## 👥 Personas / Usuários-Alvo

### Persona 1: [Nome do Tipo de Usuário]
- **Descrição**: [Quem é]
- **Necessidades**: [O que precisa]
- **Frustrações**: [Problemas atuais]
- **Objetivos**: [O que quer alcançar]

### Persona 2: [Nome do Tipo de Usuário]
- **Descrição**: [Quem é]
- **Necessidades**: [O que precisa]
- **Frustrações**: [Problemas atuais]
- **Objetivos**: [O que quer alcançar]

## 🚀 Features Principais

### MVP (Versão 1.0)
1. **[Feature 1]**: [Descrição breve]
2. **[Feature 2]**: [Descrição breve]
3. **[Feature 3]**: [Descrição breve]

### Pós-MVP (Versão 2.0+)
1. **[Feature Futura 1]**: [Descrição breve]
2. **[Feature Futura 2]**: [Descrição breve]

## 🛠️ Stack Tecnológica

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS v4
- **Componentes**: shadcn/ui
- **State Management**: [React Context / Zustand / outros]

### Backend
- **API**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Storage**: Supabase Storage
- **Real-time**: Supabase Realtime (se aplicável)

### Integrações & Ferramentas
- **Agentes IA**: N8N (se aplicável)
- **Deploy**: Vercel + Supabase Cloud
- **Analytics**: [Ex: Vercel Analytics, PostHog, etc.]
- **Monitoring**: [Ex: Sentry, LogRocket, etc.]

## 🏗️ Arquitetura de Alto Nível

```
[Usuário] → [Vercel/Next.js Frontend]
              ↓
         [Next.js API Routes]
              ↓
         [Supabase]
              ├── Auth (JWT)
              ├── PostgreSQL (Data)
              ├── Storage (Files)
              └── Realtime (WebSockets)

[N8N Workflows] ← (se aplicável para agentes IA)
```

## 📊 Fluxo de Dados Principal

1. Usuário interage com UI (Next.js Client Components)
2. Ação dispara chamada à API Route ou Supabase Client
3. API valida autenticação (JWT do Supabase)
4. Operação no banco de dados (com RLS)
5. Resposta retorna para o cliente
6. UI atualiza (React state / cache revalidation)

---

**Última atualização**: [Data]
```

---

## 🏗️ Template: Arquitetura (`docs/02-ARQUITETURA.md`)

```markdown
# Arquitetura Técnica: [Nome do Projeto]

## 📁 Estrutura de Pastas

```
app/
├── (auth)/              # Rotas de autenticação (login, signup)
│   ├── login/
│   │   └── page.tsx
│   ├── signup/
│   │   └── page.tsx
│   └── layout.tsx       # Layout para páginas de auth
│
├── (dashboard)/         # Rotas protegidas (após login)
│   ├── dashboard/
│   │   └── page.tsx
│   ├── profile/
│   │   └── page.tsx
│   ├── settings/
│   │   └── page.tsx
│   └── layout.tsx       # Layout com sidebar/header
│
├── api/                 # API Routes
│   ├── [feature]/
│   │   └── route.ts
│   └── webhooks/
│       └── route.ts
│
├── layout.tsx           # Root layout
└── page.tsx             # Home page

components/
├── ui/                  # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
├── features/            # Feature-specific components
│   ├── [feature-name]/
│   │   ├── FeatureList.tsx
│   │   ├── FeatureForm.tsx
│   │   └── FeatureCard.tsx
└── layout/              # Layout components
    ├── Header.tsx
    ├── Sidebar.tsx
    └── Footer.tsx

lib/
├── supabase/
│   ├── client.ts        # Supabase client (browser)
│   ├── server.ts        # Supabase server client
│   └── middleware.ts    # Auth middleware
├── utils/
│   ├── cn.ts            # className utility
│   └── helpers.ts
└── validations/
    └── schemas.ts       # Zod schemas

types/
└── index.ts             # TypeScript types/interfaces

public/
└── ...                  # Static assets
```

## 🔄 Camadas da Aplicação

### 1. Camada de Apresentação (UI)
- **Componentes React**: Componentes client e server components
- **Páginas**: Rotas do Next.js App Router
- **Layouts**: Estruturas reutilizáveis (auth, dashboard, etc.)

### 2. Camada de Lógica de Negócio
- **API Routes**: Endpoints customizados
- **Server Actions**: Para mutações de dados
- **Hooks**: Custom hooks para lógica reutilizável
- **Validações**: Zod schemas para validação

### 3. Camada de Acesso a Dados
- **Supabase Client**: Para operações do browser
- **Supabase Server**: Para operações server-side
- **RLS Policies**: Segurança no nível do banco

## 🎨 Padrões de Design

### Component Pattern
- **Server Components**: Para rendering estático/server-side
- **Client Components**: Para interatividade ('use client')
- **Composition**: Componentes pequenos e reutilizáveis

### Data Fetching Pattern
- **Server Components**: Fetch direto com `await`
- **Client Components**: React Query ou SWR (se necessário)
- **Caching**: Next.js cache automático + revalidation

### State Management
- **Local State**: useState para estado local
- **Server State**: Server Components + cache
- **Global State**: React Context ou Zustand (se necessário)

## 🔐 Autenticação & Autorização

### Fluxo de Auth
1. Usuário faz login → Supabase Auth
2. Supabase retorna JWT token
3. Token armazenado em cookie httpOnly
4. Middleware valida token em cada request
5. RLS policies protegem dados no banco

### Proteção de Rotas
```typescript
// middleware.ts
export async function middleware(request: NextRequest) {
  const supabase = createMiddlewareClient({ req, res })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect('/login')
  }

  return NextResponse.next()
}
```

## 🔌 Integrações

### Supabase
- **Auth**: Gerenciamento de usuários
- **Database**: PostgreSQL com RLS
- **Storage**: Upload de arquivos
- **Realtime**: Subscriptions (se aplicável)

### N8N (se aplicável)
- **Workflows**: Automações com agentes de IA
- **Triggers**: Webhooks do Supabase
- **Processamento**: Análise de documentos, etc.

### APIs Externas (se aplicável)
- [Listar APIs externas utilizadas]

## ⚡ Performance & Otimização

### Estratégias
- **Static Generation**: Páginas estáticas quando possível
- **ISR**: Incremental Static Regeneration para dados dinâmicos
- **Edge Runtime**: API Routes no edge (se aplicável)
- **Image Optimization**: next/image component
- **Font Optimization**: next/font

### Caching
- **Next.js Cache**: Automático para fetch requests
- **Supabase**: Cache em query level (se configurado)
- **CDN**: Vercel Edge Network

---

**Última atualização**: [Data]
```

---

## ⚙️ Template: Especificação Funcional (`docs/03-ESPECIFICACAO.md`)

```markdown
# Especificação Funcional: [Nome do Projeto]

## Feature 1: [Nome da Feature]

### Descrição
[Descrição detalhada da feature - o que faz, por que existe, valor para o usuário]

### User Stories
- Como [tipo de usuário], eu quero [ação] para [benefício]
- Como [tipo de usuário], eu quero [ação] para [benefício]

### Regras de Negócio
1. [Regra 1]
2. [Regra 2]
3. [Regra 3]

### Validações
- [ ] [Campo X] deve ser obrigatório
- [ ] [Campo Y] deve ter no mínimo N caracteres
- [ ] [Campo Z] deve ser email válido

### Casos de Uso

#### Caso de Uso 1: [Nome]
**Ator**: [Tipo de usuário]
**Pré-condição**: [O que deve existir antes]
**Fluxo Principal**:
1. Usuário [ação]
2. Sistema [resposta]
3. Sistema [validação]
4. Sistema [confirmação]

**Fluxo Alternativo 1**: [Quando X acontece]
1. Sistema [ação]
2. Usuário [resposta]

**Pós-condição**: [Estado final após sucesso]

### Casos de Erro / Edge Cases
- **Erro 1**: [Situação] → [Comportamento esperado]
- **Erro 2**: [Situação] → [Comportamento esperado]

### Critérios de Aceitação
- [ ] Usuário consegue [ação específica]
- [ ] Sistema valida [campo/regra]
- [ ] Mensagem de erro aparece quando [condição]
- [ ] Dados são salvos corretamente

### Mockups / Telas
[Link para Figma ou descrição da UI]

---

## Feature 2: [Nome da Feature]

[Repetir template acima]

---

**Última atualização**: [Data]
```

---

## 🗄️ Template: Banco de Dados (`docs/04-BANCO-DE-DADOS.md`)

```markdown
# Banco de Dados: [Nome do Projeto]

## 📊 Schema

### Tabela: `users`
Gerenciada automaticamente pelo Supabase Auth.

| Coluna | Tipo | Null | Default | Descrição |
|--------|------|------|---------|-----------|
| id | uuid | NOT NULL | uuid_generate_v4() | Primary key |
| email | text | NOT NULL | | Email do usuário |
| created_at | timestamptz | NOT NULL | now() | Data de criação |

---

### Tabela: `profiles`
Extensão dos dados de usuário.

| Coluna | Tipo | Null | Default | Descrição |
|--------|------|------|---------|-----------|
| id | uuid | NOT NULL | | Foreign key → users.id |
| full_name | text | NULL | | Nome completo |
| avatar_url | text | NULL | | URL do avatar |
| bio | text | NULL | | Biografia |
| created_at | timestamptz | NOT NULL | now() | Data de criação |
| updated_at | timestamptz | NOT NULL | now() | Última atualização |

**Constraints**:
- PRIMARY KEY: `id`
- FOREIGN KEY: `id` REFERENCES `auth.users(id)` ON DELETE CASCADE

**Indexes**:
- `profiles_pkey` ON `id`

---

### Tabela: `[sua_entidade]`
[Descrição da tabela]

| Coluna | Tipo | Null | Default | Descrição |
|--------|------|------|---------|-----------|
| id | uuid | NOT NULL | uuid_generate_v4() | Primary key |
| user_id | uuid | NOT NULL | | Dono do registro |
| title | text | NOT NULL | | Título |
| description | text | NULL | | Descrição |
| status | text | NOT NULL | 'draft' | Status (draft, published, archived) |
| created_at | timestamptz | NOT NULL | now() | Data de criação |
| updated_at | timestamptz | NOT NULL | now() | Última atualização |

**Constraints**:
- PRIMARY KEY: `id`
- FOREIGN KEY: `user_id` REFERENCES `auth.users(id)` ON DELETE CASCADE
- CHECK: `status` IN ('draft', 'published', 'archived')

**Indexes**:
- `[entidade]_pkey` ON `id`
- `[entidade]_user_id_idx` ON `user_id`
- `[entidade]_status_idx` ON `status`

---

## 🔗 Relacionamentos

```
users (1) ──→ (1) profiles
  │
  └──→ (N) [sua_entidade]
```

## ⚙️ Triggers

### Trigger: `updated_at`
Atualiza automaticamente `updated_at` em todas as tabelas.

```sql
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_[tabela]_updated_at BEFORE UPDATE ON [tabela]
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

### Trigger: `create_profile_on_signup`
Cria profile automaticamente quando usuário se registra.

```sql
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

## 🔐 RLS (Row Level Security)

### Tabela: `profiles`

```sql
-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view all profiles
CREATE POLICY "Profiles are viewable by everyone"
ON profiles FOR SELECT
USING (true);

-- Policy: Users can update their own profile
CREATE POLICY "Users can update own profile"
ON profiles FOR UPDATE
USING (auth.uid() = id);

-- Policy: Users can insert their own profile
CREATE POLICY "Users can insert own profile"
ON profiles FOR INSERT
WITH CHECK (auth.uid() = id);
```

### Tabela: `[sua_entidade]`

```sql
-- Enable RLS
ALTER TABLE [sua_entidade] ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own records
CREATE POLICY "Users can view own [entidade]"
ON [sua_entidade] FOR SELECT
USING (auth.uid() = user_id);

-- Policy: Users can create their own records
CREATE POLICY "Users can create own [entidade]"
ON [sua_entidade] FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own records
CREATE POLICY "Users can update own [entidade]"
ON [sua_entidade] FOR UPDATE
USING (auth.uid() = user_id);

-- Policy: Users can delete their own records
CREATE POLICY "Users can delete own [entidade]"
ON [sua_entidade] FOR DELETE
USING (auth.uid() = user_id);
```

## 🗃️ Migrations

### Migration: `001_initial_schema.sql`

```sql
-- Create profiles table
CREATE TABLE profiles (
  id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
  full_name text,
  avatar_url text,
  bio text,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
[... policies aqui ...]

-- Create trigger
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

## 📦 Estratégia de Backup

- **Frequência**: [Diário / Semanal]
- **Retenção**: [30 dias / 90 dias]
- **Ferramenta**: Supabase automático + [backup manual se necessário]

---

**Última atualização**: [Data]
```

---

## 🌐 Template: API (`docs/05-API.md`)

```markdown
# Documentação de API: [Nome do Projeto]

## Base URL
- **Development**: `http://localhost:3000`
- **Production**: `https://[seu-app].vercel.app`

## Autenticação
Todas as rotas protegidas requerem token JWT do Supabase.

```http
Authorization: Bearer <token>
```

---

## Endpoints

### GET `/api/[recurso]`
Lista todos os [recursos] do usuário autenticado.

**Auth**: Requerido

**Query Parameters**:
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| page | number | Não | Página (default: 1) |
| limit | number | Não | Items por página (default: 10) |
| status | string | Não | Filtrar por status |

**Response**: `200 OK`
```json
{
  "data": [
    {
      "id": "uuid",
      "title": "string",
      "description": "string",
      "status": "draft",
      "created_at": "2024-01-15T10:00:00Z",
      "updated_at": "2024-01-15T10:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25
  }
}
```

**Errors**:
- `401 Unauthorized`: Token inválido/ausente
- `500 Internal Server Error`: Erro no servidor

---

### GET `/api/[recurso]/[id]`
Retorna um [recurso] específico.

**Auth**: Requerido

**Path Parameters**:
| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| id | uuid | ID do recurso |

**Response**: `200 OK`
```json
{
  "id": "uuid",
  "title": "string",
  "description": "string",
  "status": "draft",
  "created_at": "2024-01-15T10:00:00Z",
  "updated_at": "2024-01-15T10:00:00Z"
}
```

**Errors**:
- `401 Unauthorized`: Token inválido/ausente
- `404 Not Found`: Recurso não encontrado
- `500 Internal Server Error`: Erro no servidor

---

### POST `/api/[recurso]`
Cria um novo [recurso].

**Auth**: Requerido

**Request Body**:
```json
{
  "title": "string (required)",
  "description": "string (optional)",
  "status": "draft | published | archived (optional)"
}
```

**Response**: `201 Created`
```json
{
  "id": "uuid",
  "title": "string",
  "description": "string",
  "status": "draft",
  "created_at": "2024-01-15T10:00:00Z",
  "updated_at": "2024-01-15T10:00:00Z"
}
```

**Errors**:
- `400 Bad Request`: Dados inválidos
- `401 Unauthorized`: Token inválido/ausente
- `500 Internal Server Error`: Erro no servidor

---

### PUT `/api/[recurso]/[id]`
Atualiza um [recurso] existente.

**Auth**: Requerido

**Path Parameters**:
| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| id | uuid | ID do recurso |

**Request Body**:
```json
{
  "title": "string (optional)",
  "description": "string (optional)",
  "status": "draft | published | archived (optional)"
}
```

**Response**: `200 OK`
```json
{
  "id": "uuid",
  "title": "string",
  "description": "string",
  "status": "draft",
  "created_at": "2024-01-15T10:00:00Z",
  "updated_at": "2024-01-15T10:00:00Z"
}
```

**Errors**:
- `400 Bad Request`: Dados inválidos
- `401 Unauthorized`: Token inválido/ausente
- `404 Not Found`: Recurso não encontrado
- `500 Internal Server Error`: Erro no servidor

---

### DELETE `/api/[recurso]/[id]`
Deleta um [recurso].

**Auth**: Requerido

**Path Parameters**:
| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| id | uuid | ID do recurso |

**Response**: `204 No Content`

**Errors**:
- `401 Unauthorized`: Token inválido/ausente
- `404 Not Found`: Recurso não encontrado
- `500 Internal Server Error`: Erro no servidor

---

## Rate Limiting
[Se aplicável]
- **Limite**: 100 requests por minuto por IP
- **Header**: `X-RateLimit-Remaining`

## Webhooks
[Se aplicável - documentar webhooks do Supabase ou N8N]

---

**Última atualização**: [Data]
```

---

## 💡 Dicas de Uso

1. **Copie o template**: Use como base e customize
2. **Preencha progressivamente**: À medida que define a arquitetura
3. **Mantenha atualizado**: Documente mudanças importantes
4. **Use Claude**: Peça para Claude preencher baseado no PRD

---

Pronto para documentar seu projeto!
