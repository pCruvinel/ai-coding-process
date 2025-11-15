# 📋 Templates de Migrations Supabase

Templates SQL prontos para usar nas suas migrations do Supabase.

---

## 🎯 Como Usar

1. Criar nova migration: `supabase migration new [nome]`
2. Copiar template relevante para o arquivo criado
3. Customizar conforme seu schema
4. Aplicar: `supabase db push`

---

## 📦 Template: Migration Inicial Completa

**Arquivo**: `supabase/migrations/[timestamp]_initial_schema.sql`

```sql
-- ============================================================================
-- INITIAL SCHEMA
-- ============================================================================

-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- TABLES
-- ============================================================================

-- Profiles table (extensão de auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL PRIMARY KEY,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- [Sua Entidade] table
CREATE TABLE [entidade] (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'draft' NOT NULL CHECK (status IN ('draft', 'published', 'archived')),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- ============================================================================
-- INDEXES
-- ============================================================================

CREATE INDEX [entidade]_user_id_idx ON [entidade](user_id);
CREATE INDEX [entidade]_status_idx ON [entidade](status);
CREATE INDEX [entidade]_created_at_idx ON [entidade](created_at DESC);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================================

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE [entidade] ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "profiles_select_all" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "profiles_insert_own" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "profiles_update_own" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- [Entidade] policies
CREATE POLICY "[entidade]_select_own" ON [entidade]
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "[entidade]_insert_own" ON [entidade]
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "[entidade]_update_own" ON [entidade]
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "[entidade]_delete_own" ON [entidade]
  FOR DELETE USING (auth.uid() = user_id);

-- ============================================================================
-- FUNCTIONS
-- ============================================================================

-- Function: Auto-update updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Function: Create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================================
-- TRIGGERS
-- ============================================================================

-- Trigger: Auto-update updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_[entidade]_updated_at
  BEFORE UPDATE ON [entidade]
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Trigger: Create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

---

## 🔗 Template: Tabela com Relacionamento 1:N

**Uso**: Uma entidade pertence a um usuário (1:N)

```sql
-- Criar tabela
CREATE TABLE posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  content TEXT,
  published BOOLEAN DEFAULT false NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Indexes
CREATE INDEX posts_user_id_idx ON posts(user_id);
CREATE INDEX posts_published_idx ON posts(published);

-- RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "posts_select_published_or_own" ON posts
  FOR SELECT USING (
    published = true OR auth.uid() = user_id
  );

CREATE POLICY "posts_insert_own" ON posts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "posts_update_own" ON posts
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "posts_delete_own" ON posts
  FOR DELETE USING (auth.uid() = user_id);

-- Trigger
CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

---

## 🔗 Template: Tabela de Junção N:N

**Uso**: Relacionamento muitos-para-muitos (ex: posts ↔ tags)

```sql
-- Tabela 1: posts (já existe)
-- Tabela 2: tags

CREATE TABLE tags (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Tabela de junção: post_tags
CREATE TABLE post_tags (
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE NOT NULL,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  PRIMARY KEY (post_id, tag_id)
);

-- Indexes
CREATE INDEX post_tags_post_id_idx ON post_tags(post_id);
CREATE INDEX post_tags_tag_id_idx ON post_tags(tag_id);

-- RLS
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_tags ENABLE ROW LEVEL SECURITY;

-- Tags são públicas (todos podem ler)
CREATE POLICY "tags_select_all" ON tags
  FOR SELECT USING (true);

-- Apenas admins criam tags (exemplo)
CREATE POLICY "tags_insert_admin" ON tags
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Post_tags seguem permissões do post
CREATE POLICY "post_tags_select_all" ON post_tags
  FOR SELECT USING (true);

CREATE POLICY "post_tags_insert_own_post" ON post_tags
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM posts
      WHERE id = post_tags.post_id AND user_id = auth.uid()
    )
  );

CREATE POLICY "post_tags_delete_own_post" ON post_tags
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM posts
      WHERE id = post_tags.post_id AND user_id = auth.uid()
    )
  );
```

---

## 👥 Template: Tabela com Roles/Permissões

**Uso**: Diferenciar usuários (admin, user, etc.)

```sql
-- Adicionar coluna role em profiles
ALTER TABLE profiles ADD COLUMN role TEXT DEFAULT 'user' NOT NULL
  CHECK (role IN ('user', 'admin', 'moderator'));

-- Criar policy que permite apenas admins verem todos os usuários
CREATE POLICY "profiles_select_all_if_admin" ON profiles
  FOR SELECT USING (
    auth.uid() = id OR
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Policy para entidade que apenas admin pode deletar qualquer registro
CREATE POLICY "posts_delete_admin_or_own" ON posts
  FOR DELETE USING (
    auth.uid() = user_id OR
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
```

---

## 📁 Template: Storage Bucket + RLS

**Uso**: Upload de arquivos (avatares, imagens, etc.)

```sql
-- Criar bucket (via SQL ou Dashboard)
INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', 'avatars', true);

-- Policies para bucket
CREATE POLICY "avatars_select_all" ON storage.objects FOR SELECT
  USING (bucket_id = 'avatars');

CREATE POLICY "avatars_insert_own" ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "avatars_update_own" ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "avatars_delete_own" ON storage.objects FOR DELETE
  USING (
    bucket_id = 'avatars' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );
```

**Estrutura esperada**: `avatars/[user-uuid]/[filename]`

---

## 🔍 Template: Full-Text Search

**Uso**: Busca textual em posts/artigos

```sql
-- Adicionar coluna de busca
ALTER TABLE posts ADD COLUMN search_vector tsvector
  GENERATED ALWAYS AS (
    to_tsvector('portuguese', coalesce(title, '') || ' ' || coalesce(content, ''))
  ) STORED;

-- Criar índice GIN para performance
CREATE INDEX posts_search_vector_idx ON posts USING GIN (search_vector);

-- Function de busca
CREATE OR REPLACE FUNCTION search_posts(search_query TEXT)
RETURNS SETOF posts AS $$
BEGIN
  RETURN QUERY
  SELECT *
  FROM posts
  WHERE search_vector @@ plainto_tsquery('portuguese', search_query)
  ORDER BY ts_rank(search_vector, plainto_tsquery('portuguese', search_query)) DESC;
END;
$$ LANGUAGE plpgsql;
```

**Uso no código**:
```typescript
const { data } = await supabase.rpc('search_posts', {
  search_query: 'termo de busca'
})
```

---

## 📊 Template: View (Visão)

**Uso**: Agregação de dados (ex: estatísticas de usuário)

```sql
-- View: Estatísticas de posts por usuário
CREATE VIEW user_post_stats AS
SELECT
  p.id as user_id,
  p.full_name,
  COUNT(po.id) as total_posts,
  COUNT(po.id) FILTER (WHERE po.published = true) as published_posts,
  COUNT(po.id) FILTER (WHERE po.published = false) as draft_posts
FROM profiles p
LEFT JOIN posts po ON p.id = po.user_id
GROUP BY p.id, p.full_name;

-- RLS na view
ALTER VIEW user_post_stats SET (security_invoker = true);
```

**Uso no código**:
```typescript
const { data } = await supabase.from('user_post_stats').select('*')
```

---

## ⚙️ Template: Function Customizada

**Uso**: Lógica de negócio complexa no banco

```sql
-- Function: Incrementar view count em post
CREATE OR REPLACE FUNCTION increment_post_views(post_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE posts
  SET view_count = view_count + 1
  WHERE id = post_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function: Duplicar post
CREATE OR REPLACE FUNCTION duplicate_post(original_post_id UUID)
RETURNS UUID AS $$
DECLARE
  new_post_id UUID;
BEGIN
  INSERT INTO posts (user_id, title, content, published)
  SELECT user_id, title || ' (copy)', content, false
  FROM posts
  WHERE id = original_post_id AND user_id = auth.uid()
  RETURNING id INTO new_post_id;

  RETURN new_post_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

**Uso no código**:
```typescript
// Incrementar views
await supabase.rpc('increment_post_views', { post_id: 'uuid' })

// Duplicar post
const { data: newPostId } = await supabase.rpc('duplicate_post', {
  original_post_id: 'uuid'
})
```

---

## 🔔 Template: Realtime (Subscriptions)

**Uso**: Notificações em tempo real

```sql
-- Habilitar replicação para tabela
ALTER TABLE posts REPLICA IDENTITY FULL;

-- Publicação (já existe por padrão no Supabase)
-- Apenas certifique-se que RLS permite SELECT
```

**Uso no código**:
```typescript
const supabase = createClient()

// Subscribe a novos posts
const channel = supabase
  .channel('posts-channel')
  .on(
    'postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
      table: 'posts'
    },
    (payload) => {
      console.log('New post:', payload.new)
    }
  )
  .subscribe()
```

---

## 🗑️ Template: Soft Delete

**Uso**: Deletar "logicamente" sem remover do banco

```sql
-- Adicionar coluna deleted_at
ALTER TABLE posts ADD COLUMN deleted_at TIMESTAMPTZ;

-- Atualizar policies para ignorar deletados
DROP POLICY "posts_select_published_or_own" ON posts;
CREATE POLICY "posts_select_published_or_own" ON posts
  FOR SELECT USING (
    deleted_at IS NULL AND
    (published = true OR auth.uid() = user_id)
  );

-- Function: Soft delete
CREATE OR REPLACE FUNCTION soft_delete_post(post_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE posts
  SET deleted_at = now()
  WHERE id = post_id AND user_id = auth.uid();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function: Restaurar
CREATE OR REPLACE FUNCTION restore_post(post_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE posts
  SET deleted_at = NULL
  WHERE id = post_id AND user_id = auth.uid();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

---

## 🔄 Template: Audit Log

**Uso**: Rastrear mudanças em registros importantes

```sql
-- Tabela de audit log
CREATE TABLE audit_logs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  table_name TEXT NOT NULL,
  record_id UUID NOT NULL,
  action TEXT NOT NULL CHECK (action IN ('INSERT', 'UPDATE', 'DELETE')),
  old_data JSONB,
  new_data JSONB,
  user_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Index
CREATE INDEX audit_logs_table_record_idx ON audit_logs(table_name, record_id);
CREATE INDEX audit_logs_user_id_idx ON audit_logs(user_id);

-- Function: Log changes
CREATE OR REPLACE FUNCTION log_changes()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    INSERT INTO audit_logs (table_name, record_id, action, new_data, user_id)
    VALUES (TG_TABLE_NAME, NEW.id, 'INSERT', to_jsonb(NEW), auth.uid());
    RETURN NEW;
  ELSIF TG_OP = 'UPDATE' THEN
    INSERT INTO audit_logs (table_name, record_id, action, old_data, new_data, user_id)
    VALUES (TG_TABLE_NAME, NEW.id, 'UPDATE', to_jsonb(OLD), to_jsonb(NEW), auth.uid());
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    INSERT INTO audit_logs (table_name, record_id, action, old_data, user_id)
    VALUES (TG_TABLE_NAME, OLD.id, 'DELETE', to_jsonb(OLD), auth.uid());
    RETURN OLD;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger em tabelas importantes
CREATE TRIGGER posts_audit_trigger
  AFTER INSERT OR UPDATE OR DELETE ON posts
  FOR EACH ROW EXECUTE FUNCTION log_changes();
```

---

## 💡 Dicas de Boas Práticas

### 1. Sempre use timestamps
```sql
created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
```

### 2. Sempre use UUIDs
```sql
id UUID DEFAULT uuid_generate_v4() PRIMARY KEY
```

### 3. Sempre habilite RLS
```sql
ALTER TABLE [tabela] ENABLE ROW LEVEL SECURITY;
```

### 4. Use CHECK constraints para enums
```sql
status TEXT CHECK (status IN ('draft', 'published', 'archived'))
```

### 5. Use ON DELETE CASCADE para foreign keys
```sql
user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE
```

### 6. Crie índices para foreign keys e colunas de busca
```sql
CREATE INDEX [tabela]_user_id_idx ON [tabela](user_id);
CREATE INDEX [tabela]_status_idx ON [tabela](status);
```

---

## 📚 Referências

- [Supabase SQL Docs](https://supabase.com/docs/guides/database)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [RLS Policies](https://supabase.com/docs/guides/auth/row-level-security)

---

**Pronto para criar suas migrations!**
