# 🗄️ Supabase - Banco de Dados

> **Template**: Esta é uma estrutura exemplo de migrations do Supabase

## 📋 Visão Geral

Este diretório contém as migrations do banco de dados PostgreSQL via Supabase. As migrations aqui são **exemplos/templates** que devem ser adaptados para cada projeto específico.

## 📂 Estrutura

```
supabase/
├── README.md                               ← Você está aqui
├── migrations/                             ← SQL migrations
│   ├── 20240101000000_create_roles.sql
│   ├── 20240101000001_create_users.sql
│   ├── 20240101000002_create_user_trigger.sql
│   ├── 20240101000003_create_helper_functions.sql
│   └── ...
└── seed.sql                                ← Dados iniciais (opcional)
```

## 🚀 Como Usar

### Opção 1: Via Supabase Dashboard (Recomendado para iniciantes)

1. Acesse seu projeto no [Supabase Dashboard](https://app.supabase.com)
2. Vá em **SQL Editor**
3. Copie e cole o conteúdo de cada migration **em ordem**
4. Execute cada uma

### Opção 2: Via Supabase CLI (Recomendado para projetos reais)

```bash
# 1. Instalar CLI
npm install -g supabase

# 2. Login
npx supabase login

# 3. Link ao projeto
npx supabase link --project-ref [seu-project-id]

# 4. Aplicar migrations
npx supabase db push

# 5. Gerar tipos TypeScript
npx supabase gen types typescript --linked > types/database.types.ts
```

### Opção 3: Manual (Copiar e colar)

1. Abra cada arquivo `.sql` em ordem
2. Copie todo o conteúdo
3. Execute no SQL Editor do Supabase
4. Verifique se não houve erros

## 📝 Ordem de Execução

**IMPORTANTE**: Execute as migrations nesta ordem:

1. ✅ `20240101000000_create_roles.sql` - Tabela de roles
2. ✅ `20240101000001_create_users.sql` - Tabela de users
3. ✅ `20240101000002_create_user_trigger.sql` - Trigger automático para novos usuários
4. ✅ `20240101000003_create_helper_functions.sql` - Funções úteis
5. ✅ `[suas migrations específicas]` - Tabelas do seu projeto

## 🔐 Sistema de Auth (Obrigatório)

As migrations de **roles**, **users** e **trigger** são **obrigatórias** em todos os projetos que seguem este processo. Elas configuram:

- ✅ Tabela `public.roles` com roles padrão (user, admin, moderator)
- ✅ Tabela `public.users` estendendo `auth.users`
- ✅ Trigger automático que cria perfil público ao signup
- ✅ Row Level Security (RLS) configurado
- ✅ Funções helper (`is_admin`, `get_user_profile`, etc.)

## 🎯 Migrations do Seu Projeto

Depois das migrations obrigatórias, adicione as tabelas específicas do seu projeto:

```sql
-- Exemplo: 20240101000004_create_projects.sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID NOT NULL REFERENCES public.users(id),
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own projects"
  ON projects FOR SELECT
  USING (owner_id = auth.uid());
```

## ✅ Checklist Pós-Migrations

Depois de executar todas as migrations, verifique:

- [ ] Todas as migrations executaram sem erros
- [ ] Tabela `public.roles` tem 3 roles (user, admin, moderator)
- [ ] Tabela `public.users` existe e está vazia
- [ ] Trigger `on_auth_user_created` está ativo
- [ ] RLS está habilitado em **todas** as tabelas públicas
- [ ] Teste: criar um usuário via signup → deve aparecer em `public.users` automaticamente
- [ ] Função `is_admin()` funciona
- [ ] Políticas RLS foram testadas

## 🧪 Testar Sistema de Auth

```sql
-- 1. Crie um usuário via Supabase Auth (signup)

-- 2. Verifique se apareceu em public.users
SELECT * FROM public.users;
-- Deve mostrar o usuário com role 'user'

-- 3. Teste a função is_admin
SELECT is_admin(auth.uid());
-- Deve retornar false (usuário padrão não é admin)

-- 4. Promova usuário a admin (manualmente para teste)
UPDATE public.users
SET role_id = (SELECT id FROM public.roles WHERE name = 'admin')
WHERE auth_id = auth.uid();

-- 5. Teste novamente
SELECT is_admin(auth.uid());
-- Agora deve retornar true
```

## 🔄 Rollback

Para desfazer uma migration:

```sql
-- Exemplo: Desfazer criação da tabela projects
DROP TABLE IF EXISTS projects CASCADE;
```

⚠️ **CUIDADO**: Rollback pode causar perda de dados!

## 📚 Recursos

- [Supabase Migrations Docs](https://supabase.com/docs/guides/cli/local-development#database-migrations)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

## 🐛 Troubleshooting

### Erro: "relation already exists"
- **Causa**: Migration já foi executada antes
- **Solução**: Pule essa migration ou use `CREATE TABLE IF NOT EXISTS`

### Erro: "permission denied"
- **Causa**: RLS bloqueando operação
- **Solução**: Verifique policies ou use service_role (com cuidado!)

### Trigger não está funcionando
- **Causa**: Trigger não foi criado ou há erro na function
- **Solução**: Verifique logs, recrie trigger

---

**Status**: ✅ Templates prontos para uso
**Última Atualização**: Novembro 2024
