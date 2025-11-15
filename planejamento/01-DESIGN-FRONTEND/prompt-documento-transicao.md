# 📤 PROMPT 1.2: Gerar Documento de Transição

**Quando usar:** Após terminar todo o design
**Copie no chat do v0/Lovable/outro:**

```markdown
# 📤 GERAR DOCUMENTO DE TRANSIÇÃO PARA BACKEND

Preciso que você gere um documento detalhado para passar esse projeto para o desenvolvedor backend.

## Formato do Documento

Crie um arquivo markdown chamado `.ai/frontend-export.md` com as seguintes seções:

### 1. VISÃO GERAL DO FRONTEND
- Resumo do que foi criado
- Telas implementadas
- Fluxos principais
- Tecnologias usadas

### 2. ESTRUTURA DE COMPONENTES
Para cada componente criado, documente:

```markdown
#### Componente: [Nome]
**Localização:** `src/components/[caminho]`
**Propósito:** [O que faz]

**Props:**
```typescript
interface Props {
  prop1: type
  prop2: type
}
```

**Uso:**
```tsx
<Component prop1="value" />
```

**Estados internos:**
- [Estado 1]: [Descrição]

**Integrações necessárias:**
- [ ] Conectar com API [endpoint]
- [ ] Buscar dados de [tabela]
```

### 3. PÁGINAS E ROTAS
Para cada página:
```markdown
#### Página: [Nome]
**Rota:** `/[caminho]`
**Componentes usados:** [Lista]

**Dados necessários:**
- Fetch de: [API/Tabela]
- Formato esperado: [JSON schema]

**Ações do usuário:**
1. [Ação] → [O que deve acontecer no backend]
```

### 4. ESTADOS E DADOS MOCKADOS
Liste todos os dados mockados que precisam virar dados reais:

```markdown
**Mock atual:**
```typescript
const mockData = [...]
```

**Precisa virar:**
- Tabela no Supabase: `[nome_tabela]`
- Campos: [lista de campos]
- API endpoint: `GET /api/[recurso]`
```

### 5. INTEGRAÇÕES PENDENTES
Lista de todas as integrações que o backend precisa fazer:

- [ ] **Autenticação**
  - Implementar: [Supabase Auth]
  - Páginas afetadas: [Lista]

- [ ] **API Endpoint 1**
  - Rota: `POST /api/[recurso]`
  - Input: [Schema]
  - Output: [Schema]
  - Usado em: [Componente X]

### 6. BANCO DE DADOS NECESSÁRIO
Baseado no frontend, essas tabelas são necessárias:

```sql
-- Tabela 1
CREATE TABLE [nome] (
  -- inferir campos baseado nos dados mockados
);
```

### 7. VALIDAÇÕES E REGRAS
Liste validações que precisam ser implementadas no backend:
- Campo X: [Regra de validação]
- Ação Y: [Regra de negócio]

### 8. MELHORIAS SUGERIDAS
Sugestões de melhorias técnicas para o backend considerar.

---

**Gere esse documento completo e detalhado em markdown.**

**IMPORTANTE:**
- Seja MUITO detalhado
- Inclua TODOS os componentes, mesmo os pequenos
- Liste TODOS os dados mockados
- Documente TODAS as interações que precisam de backend
- Inclua schemas TypeScript sempre que possível
```

---

## 📋 Como Usar Este Prompt

### Passo 1: Copiar o Prompt
Copie o prompt markdown acima completo.

### Passo 2: Colar na IA de Design
Cole no chat da plataforma de design (v0, Lovable, etc).

### Passo 3: Revisar o Documento Gerado
A IA deve gerar um documento completo em markdown. Revise se inclui:
- [ ] Todos os componentes criados
- [ ] Todas as páginas/rotas
- [ ] Todos os dados mockados
- [ ] Schemas SQL inferidos
- [ ] Endpoints de API necessários
- [ ] Validações e regras de negócio

### Passo 4: Salvar no Projeto
1. Copie o documento gerado
2. Crie o arquivo `.ai/frontend-export.md` no seu projeto
3. Cole o conteúdo
4. Commit no Git

### Passo 5: Exportar Código
1. Exporte o código completo da plataforma
2. Organize na estrutura Next.js
3. Push para GitHub

---

## ✅ Checklist de Validação

Antes de considerar a Fase 1 completa, verifique:

- [ ] Documento `.ai/frontend-export.md` criado
- [ ] Todos os componentes documentados com props
- [ ] Todas as páginas documentadas com rotas
- [ ] Dados mockados listados e mapeados para banco
- [ ] Endpoints de API identificados
- [ ] Código do frontend exportado e no GitHub
- [ ] Design aprovado pelo cliente

---

## 🎯 Próxima Fase

Quando tudo acima estiver completo:
✅ Prossiga para **FASE 2: Transição para Backend**

Você usará o arquivo `.ai/frontend-export.md` na Fase 3 (Documentação) como base para criar toda a especificação técnica do backend.

---

## 📚 Exemplo de Documento Gerado

Veja um exemplo de como deve ficar o `.ai/frontend-export.md`:

```markdown
# Frontend Export - [Nome do Projeto]

## 1. VISÃO GERAL DO FRONTEND

Criamos um sistema de gerenciamento de tarefas com as seguintes telas:
- Login/Signup
- Dashboard
- Lista de Projetos
- Detalhes do Projeto (Kanban)
- Configurações

**Stack:**
- Next.js 14 (App Router)
- Tailwind CSS v3
- Shadcn/ui
- Lucide Icons

## 2. ESTRUTURA DE COMPONENTES

#### Componente: Button
**Localização:** `src/components/ui/button.tsx`
**Propósito:** Botão reutilizável com variantes

**Props:**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: () => void
}
```

[... continua para todos os componentes ...]

## 3. PÁGINAS E ROTAS

#### Página: Dashboard
**Rota:** `/dashboard`
**Componentes usados:** Header, ProjectCard, EmptyState

**Dados necessários:**
- Fetch de: API `/api/projects`
- Formato esperado:
```typescript
interface Project {
  id: string
  name: string
  description: string
  created_at: string
  task_count: number
}
```

[... continua ...]
```

Este é o tipo de documento que a IA deve gerar para você!
