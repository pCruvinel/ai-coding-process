# 04 - Banco de Dados

> **Template**: Preencha este documento com o schema específico do seu projeto

## 🗄️ Visão Geral

[PREENCHER - Descreva a estrutura geral do banco de dados]

**Exemplo:**
> O banco de dados utiliza PostgreSQL via Supabase, com Row Level Security (RLS) habilitado em todas as tabelas. A estrutura é normalizada seguindo a terceira forma normal (3NF), com relacionamentos bem definidos. Todas as tabelas têm campos de auditoria (created_at, updated_at) e triggers automáticos para gerenciá-los.

## 📊 Diagrama Entidade-Relacionamento (ERD)

```
[PREENCHER - Desenhe o ERD do seu banco]

Exemplo:

┌──────────────────────────┐
│      auth.users          │ (Supabase Auth - gerenciado)
│                          │
│  id (uuid) PK            │
│  email                   │
│  encrypted_password      │
│  created_at              │
└────────────┬─────────────┘
             │
             │ 1:1
             ▼
┌──────────────────────────┐        ┌──────────────────────────┐
│    public.users          │        │    public.roles          │
│                          │        │                          │
│  id (uuid) PK            │        │  id (uuid) PK            │
│  auth_id FK ─────────────┤        │  name (text) UNIQUE      │
│  role_id FK ─────────────┼───────▶│  description (text)      │
│  name (text)             │        │  permissions (jsonb)     │
│  avatar_url (text)       │        │  created_at              │
│  created_at              │        └──────────────────────────┘
│  updated_at              │
└────────────┬─────────────┘
             │
             │ 1:N
             ▼
┌──────────────────────────┐
│    projects              │
│                          │
│  id (uuid) PK            │
│  owner_id FK ────────────┤
│  name (text)             │
│  description (text)      │
│  status (enum)           │
│  created_at              │
│  updated_at              │
└────────────┬─────────────┘
             │
             │ 1:N
             ▼
┌──────────────────────────┐
│    tasks                 │
│                          │
│  id (uuid) PK            │
│  project_id FK ──────────┤
│  assigned_to FK          │
│  title (text)            │
│  description (text)      │
│  status (enum)           │
│  due_date (timestamp)    │
│  created_at              │
│  updated_at              │
└──────────────────────────┘
```

## 📋 Tabelas

### 🔐 Tabela: `public.roles`

**Descrição**: [PREENCHER]

**Exemplo**: Armazena os papéis/permissões disponíveis no sistema

```sql
CREATE TABLE public.roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  permissions JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_roles_name ON public.roles(name);

-- Seed data
INSERT INTO public.roles (name, description, permissions) VALUES
  ('user', 'Usuário padrão', '{"read": true, "write": true}'),
  ('admin', 'Administrador', '{"read": true, "write": true, "delete": true, "admin": true}'),
  ('moderator', 'Moderador', '{"read": true, "write": true, "delete": true}');
```

| Coluna | Tipo | Restrições | Descrição |
|--------|------|------------|-----------|
| id | UUID | PK, DEFAULT | Identificador único |
| name | TEXT | UNIQUE, NOT NULL | Nome do papel (ex: 'admin', 'user') |
| description | TEXT | | Descrição do papel |
| permissions | JSONB | DEFAULT '{}' | Permissões em JSON |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | Data de criação |

**RLS Policies**:
```sql
-- Todos podem ler roles
CREATE POLICY "Anyone can read roles"
  ON public.roles FOR SELECT
  USING (true);

-- Apenas admins podem modificar roles
CREATE POLICY "Only admins can modify roles"
  ON public.roles FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE users.auth_id = auth.uid()
      AND users.role_id IN (SELECT id FROM public.roles WHERE name = 'admin')
    )
  );
```

---

### 👤 Tabela: `public.users`

**Descrição**: [PREENCHER]

**Exemplo**: Estende auth.users com informações adicionais do perfil

```sql
CREATE TABLE public.users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_id UUID UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role_id UUID NOT NULL REFERENCES public.roles(id),
  name TEXT NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_users_auth_id ON public.users(auth_id);
CREATE INDEX idx_users_role_id ON public.users(role_id);

-- Trigger para atualizar updated_at
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON public.users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

| Coluna | Tipo | Restrições | Descrição |
|--------|------|------------|-----------|
| id | UUID | PK, DEFAULT | Identificador único |
| auth_id | UUID | FK, UNIQUE, NOT NULL | Referência para auth.users |
| role_id | UUID | FK, NOT NULL | Papel do usuário |
| name | TEXT | NOT NULL | Nome completo |
| avatar_url | TEXT | | URL do avatar |
| bio | TEXT | | Biografia/descrição |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | Data de criação |
| updated_at | TIMESTAMPTZ | DEFAULT NOW() | Data de atualização |

**RLS Policies**:
```sql
-- Usuários podem ler próprio perfil
CREATE POLICY "Users can read own profile"
  ON public.users FOR SELECT
  USING (auth_id = auth.uid());

-- Usuários podem atualizar próprio perfil (exceto role_id)
CREATE POLICY "Users can update own profile"
  ON public.users FOR UPDATE
  USING (auth_id = auth.uid())
  WITH CHECK (
    auth_id = auth.uid() AND
    role_id = (SELECT role_id FROM public.users WHERE auth_id = auth.uid())
  );

-- Admins podem ver todos
CREATE POLICY "Admins can see all users"
  ON public.users FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE users.auth_id = auth.uid()
      AND users.role_id IN (SELECT id FROM public.roles WHERE name = 'admin')
    )
  );
```

---

### 📁 Tabela: `projects`

**Descrição**: [PREENCHER]

**Exemplo**: Projetos criados pelos usuários

```sql
CREATE TYPE project_status AS ENUM ('planning', 'active', 'paused', 'completed', 'archived');

CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  status project_status DEFAULT 'planning',
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_projects_owner_id ON projects(owner_id);
CREATE INDEX idx_projects_status ON projects(status);
```

[PREENCHER - Continuar com todas as tabelas do projeto]

---

### 📌 Tabela: `tasks`

[PREENCHER]

---

### 💬 Tabela: `comments`

[PREENCHER]

---

## 🔄 Triggers e Functions

### Function: `update_updated_at_column()`

**Descrição**: [PREENCHER]

**Exemplo**: Atualiza automaticamente o campo updated_at

```sql
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

---

### Function: `handle_new_user()`

**Descrição**: [PREENCHER]

**Exemplo**: Cria automaticamente registro em public.users quando usuário se cadastra

```sql
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  default_role_id UUID;
BEGIN
  -- Busca o role_id padrão 'user'
  SELECT id INTO default_role_id
  FROM public.roles
  WHERE name = 'user'
  LIMIT 1;

  -- Cria o perfil público
  INSERT INTO public.users (auth_id, role_id, name, avatar_url)
  VALUES (
    NEW.id,
    default_role_id,
    COALESCE(NEW.raw_user_meta_data->>'name', NEW.email),
    NEW.raw_user_meta_data->>'avatar_url'
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();
```

---

### Function: `is_admin(user_id UUID)`

**Descrição**: [PREENCHER]

**Exemplo**: Verifica se usuário é admin

```sql
CREATE OR REPLACE FUNCTION is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM public.users u
    JOIN public.roles r ON u.role_id = r.id
    WHERE u.auth_id = user_id AND r.name = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

---

## 🔒 Row Level Security (RLS)

### Princípios

[PREENCHER]

**Exemplo:**
1. **RLS habilitado em TODAS as tabelas públicas**
2. **Política padrão**: Negar tudo
3. **Políticas específicas**: Permitir apenas o necessário
4. **Sempre usar `auth.uid()`** para identificar usuário
5. **Nunca confiar no cliente** - validar no servidor

### Template de Políticas

```sql
-- Habilitar RLS
ALTER TABLE [nome_tabela] ENABLE ROW LEVEL SECURITY;

-- SELECT: Usuários veem apenas próprios registros
CREATE POLICY "Users can view own [resource]"
  ON [nome_tabela] FOR SELECT
  USING (user_id = auth.uid());

-- INSERT: Usuários podem criar próprios registros
CREATE POLICY "Users can create own [resource]"
  ON [nome_tabela] FOR INSERT
  WITH CHECK (user_id = auth.uid());

-- UPDATE: Usuários podem atualizar próprios registros
CREATE POLICY "Users can update own [resource]"
  ON [nome_tabela] FOR UPDATE
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- DELETE: Usuários podem deletar próprios registros
CREATE POLICY "Users can delete own [resource]"
  ON [nome_tabela] FOR DELETE
  USING (user_id = auth.uid());

-- Admin pode tudo
CREATE POLICY "Admins can do everything on [resource]"
  ON [nome_tabela] FOR ALL
  USING (is_admin(auth.uid()));
```

---

## 📈 Índices

[PREENCHER - Liste todos os índices importantes]

**Exemplo:**

| Tabela | Coluna(s) | Tipo | Justificativa |
|--------|-----------|------|---------------|
| users | auth_id | B-tree | FK lookup, muito usado em JOINs |
| users | role_id | B-tree | FK lookup, usado em permissões |
| projects | owner_id | B-tree | Buscar projetos por dono |
| projects | status | B-tree | Filtrar por status é comum |
| tasks | project_id | B-tree | Buscar tasks por projeto |
| tasks | assigned_to | B-tree | Buscar tasks por responsável |
| tasks | due_date | B-tree | Ordenar/filtrar por prazo |

---

## 🌱 Seeds/Dados Iniciais

### Roles Padrão

```sql
INSERT INTO public.roles (name, description, permissions) VALUES
  ('user', 'Usuário padrão do sistema', '{"read": true, "write": true}'),
  ('admin', 'Administrador com acesso total', '{"read": true, "write": true, "delete": true, "admin": true}'),
  ('moderator', 'Moderador com permissões extras', '{"read": true, "write": true, "delete": true}')
ON CONFLICT (name) DO NOTHING;
```

### [Outros Seeds]

[PREENCHER]

---

## 🔄 Migrations

### Estrutura

```
supabase/migrations/
├── 20240101000000_create_roles.sql
├── 20240101000001_create_users.sql
├── 20240101000002_create_user_trigger.sql
├── 20240101000003_create_projects.sql
├── 20240101000004_create_tasks.sql
└── ...
```

### Boas Práticas

[PREENCHER]

**Exemplo:**
1. Uma migration por tabela/funcionalidade
2. Nomes descritivos com timestamp
3. Sempre incluir `IF NOT EXISTS`
4. Incluir migrations de rollback quando possível
5. Testar em ambiente local primeiro

---

## 📊 Estimativas de Volume

[PREENCHER]

**Exemplo:**

| Tabela | Estimativa (1 ano) | Crescimento |
|--------|-------------------|-------------|
| users | 10.000 | 833/mês |
| projects | 50.000 | 5 por usuário |
| tasks | 500.000 | 10 por projeto |
| comments | 1.000.000 | 2 por task |

---

## 🔧 Manutenção

### Backup

[PREENCHER]

**Exemplo:**
- **Frequência**: Daily automático (Supabase)
- **Retenção**: 7 dias (plano free), 30 dias (plano pago)
- **Backup manual**: Antes de migrations grandes

### Performance Monitoring

[PREENCHER]

**Exemplo:**
- Monitorar queries lentas (> 100ms)
- Revisar uso de índices mensalmente
- VACUUM automático habilitado

---

## 📝 Convenções

[PREENCHER]

**Exemplo:**
- **Nomes de tabelas**: plural, snake_case (ex: `user_projects`)
- **Nomes de colunas**: snake_case (ex: `created_at`)
- **PKs**: sempre `id UUID`
- **FKs**: sempre `[tabela]_id` (ex: `user_id`)
- **Timestamps**: sempre `TIMESTAMPTZ`
- **Soft deletes**: coluna `deleted_at TIMESTAMPTZ`

---

**Status**: 🟡 Template - Aguardando preenchimento
**Documento Anterior**: [03-ESPECIFICACAO.md](./03-ESPECIFICACAO.md)
**Próximo Documento**: [05-API.md](./05-API.md)
