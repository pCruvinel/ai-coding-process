# 🤖 Contexto do Projeto para Claude IA

## IMPORTANTE: CUSTOMIZE ESTE ARQUIVO PARA SEU PROJETO!

Este arquivo deve ser lido por Claude IA para entender completamente seu projeto.

---

## 📋 Informações do Projeto

**Nome**: [Nome do Projeto]
**Descrição**: [1-3 frases descrevendo o projeto]
**PRD**: `planejamento/00-PRE-DESENVOLVIMENTO/prd.md`
**GitHub**: https://aws.amazon.com/pt/what-is/repo/

---

## 🏗️ Arquitetura Técnica

### Stack
- **Frontend**: Next.js 14 + React 18 + Tailwind CSS v4 + TypeScript
- **Backend**: Next.js API Routes + Supabase (PostgreSQL)
- **Auth**: Supabase Auth (JWT)
- **Hosting**: Vercel (Frontend) + Supabase (Backend)
- **ORM**: Supabase SDK (não Prisma, queries diretas)

### Banco de Dados
- **Provider**: Supabase (PostgreSQL)
- **Migrations**: `supabase/migrations/*.sql`
- **RLS**: Habilitado em todas as tabelas

### Autenticação
- **Provider**: Supabase Auth
- **Strategy**: JWT com refresh token
- **Roles**: user, admin, moderator
- **RLS**: Usuários veem próprios dados

---

## 📂 Estrutura de Código

src/ app/ # Next.js App Router (auth)/ # Grupo de páginas de auth (app)/ # Grupo de páginas autenticadas api/ # API Routes (/api/...) components/ # Componentes React ui/ # Componentes básicos (Button, Input, etc - Shadcn) forms/ # Componentes de formulário layouts/ # Layouts reutilizáveis lib/ supabase/ # Setup do Supabase server.ts # Client serverside client.ts # Client browserside api/ # Funções de API hooks.ts # Custom hooks types/ database.types.ts # Auto-gerado: types do Supabase index.ts # App types styles/ globals.css # Estilos globais


---

## 🔐 Segurança

### RLS Policies
- Usuários veem só seus dados
- Admins veem tudo
- Roles não podem ser mudadas por usuário

### Env Vars Sensíveis
- `NEXT_PUBLIC_SUPABASE_URL` - URL pública do Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Chave pública (OK expor)
- `SUPABASE_SERVICE_ROLE_KEY` - NUNCA expor no frontend
- Outras: Stripe, email, etc

---

## 📊 Modelo de Dados

### Tabelas Principais

**public.users**
```sql
id UUID PRIMARY KEY -- FK para auth.users
email VARCHAR
full_name VARCHAR
role VARCHAR DEFAULT 'user'
created_at TIMESTAMP
updated_at TIMESTAMP
public.roles

SQL

id UUID PRIMARY KEY
name VARCHAR UNIQUE
description VARCHAR
```
[Adicione suas outras tabelas aqui]

🎯 Features MVP
Feature 1: [Descrição]

Endpoint: POST /api/feature1/create

Tabela: public.feature1

Componente: components/Feature1.tsx

Feature 2: [Descrição]

[Detalhes...]

[Continua...]

🔗 Integração com Claude IA
Quando Usar Esta Skill
Claude Code: @contexto-projeto

O que Claude Sabe
Stack completo

Arquitetura geral

Features MVP

Padrões de código do projeto

Estrutura de pastas

O que Claude NÃO Sabe (use skills específicas)
Detalhes de uma feature específica (use skill de feature)

Padrões de código (use skill de padrões)

Como debugar um erro (use skill de debugging)

📚 Documentação Relacionada
PRD: planejamento/00-PRE-DESENVOLVIMENTO/prd.md

Arquitetura: docs/02-ARQUITETURA.md

API: docs/05-API.md

Banco de Dados: docs/04-BANCO-DE-DADOS.md

Padrões de Código: .claude/skills/02-padroes-codigo/SKILL.md

💡 Dicas para Claude
Sempre consulte docs/ antes de responder

Sempre verifique RLS antes de fazer queries

Sempre use TypeScript (tipagem completa)

Sempre teste localmente antes de sugerir

Nunca exponha env vars sensíveis

✅ Checklist de Completude
Este arquivo está completo quando tem:

[ ] Stack técnico documentado

[ ] Estrutura de pastas clara

[ ] Modelo de dados básico

[ ] Features MVP listadas

[ ] Padrões de segurança descritos

[ ] Links para docs relacionados

Atualizar este arquivo sempre que:

Nova feature é adicionada

Stack mudar

Padrão arquitetural mudar

Nova tabela criada

Última atualização: [DATA] Atualizado por: [NOME]
