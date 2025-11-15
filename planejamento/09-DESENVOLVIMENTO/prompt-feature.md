# ⚙️ Prompt: Implementação de Feature

Template de prompt para implementar cada feature do projeto com Claude Code.

---

## 🎯 Contexto

Você é um desenvolvedor fullstack implementando a feature "[NOME DA FEATURE]" em Next.js + Supabase.

**Stack**: Next.js 14+ App Router, TypeScript, Tailwind v4, shadcn/ui, Supabase

---

## 📋 Entrada (forneça ao Claude)

### 1. Especificação da Feature

```
[Cole a especificação da feature de docs/03-ESPECIFICACAO.md]

Inclua:
- User stories
- Regras de negócio
- Validações
- Casos de uso
- Critérios de aceitação
```

### 2. Schema do Banco

```
[Cole as tabelas relacionadas de docs/04-BANCO-DE-DADOS.md]

Inclua:
- Tabelas envolvidas
- Colunas e tipos
- RLS policies
```

### 3. API Endpoints

```
[Cole os endpoints relacionados de docs/05-API.md]

Para cada endpoint:
- Método e rota
- Parâmetros
- Validações
- Respostas
```

---

## 🎯 Tarefa

Implemente a feature completa (frontend + backend) seguindo a especificação.

### Backend (API Routes)

**Criar**: `app/api/[recurso]/route.ts`

Implementar:
- [ ] GET /api/[recurso] - Listar (com paginação se necessário)
- [ ] POST /api/[recurso] - Criar
- [ ] Validação com Zod
- [ ] Tratamento de erros
- [ ] Testes básicos (manual via Postman/curl)

**Criar**: `app/api/[recurso]/[id]/route.ts`

Implementar:
- [ ] GET /api/[recurso]/[id] - Detalhe
- [ ] PUT /api/[recurso]/[id] - Atualizar
- [ ] DELETE /api/[recurso]/[id] - Deletar

### Frontend (Pages + Components)

**Criar**: `app/(dashboard)/[recurso]/page.tsx`
- [ ] Página de listagem
- [ ] Fetch de dados (Server Component)
- [ ] Loading states
- [ ] Empty states

**Criar**: `app/(dashboard)/[recurso]/[id]/page.tsx`
- [ ] Página de detalhe
- [ ] Fetch de dados
- [ ] Ações (editar, deletar)

**Criar**: `components/features/[recurso]/`
- [ ] ListItem component
- [ ] CreateForm component
- [ ] EditForm component
- [ ] DeleteDialog component

### Validations

**Criar**: `lib/validations/[recurso].ts`

```typescript
import { z } from 'zod'

export const createSchema = z.object({
  // campos
})

export type CreateInput = z.infer<typeof createSchema>
```

### Types

**Adicionar em**: `types/index.ts`

```typescript
export type [Recurso] = {
  // campos do banco
}
```

---

## ✅ Checklist de Implementação

### Backend
- [ ] API Routes criadas
- [ ] CRUD completo
- [ ] Validação com Zod
- [ ] Tratamento de erros
- [ ] Auth verificada (middleware ou RLS)
- [ ] Testado manualmente

### Frontend
- [ ] Páginas criadas
- [ ] Components criados
- [ ] Forms com validação
- [ ] Loading/error states
- [ ] Empty states
- [ ] Responsive

### Integração
- [ ] Frontend → Backend funcionando
- [ ] RLS testado
- [ ] Edge cases tratados
- [ ] UX polida

---

## 🧪 Testes Manuais

- [ ] Criar registro
- [ ] Listar registros (ver apenas próprios - RLS)
- [ ] Ver detalhe
- [ ] Editar registro
- [ ] Deletar registro
- [ ] Validações de formulário
- [ ] Mensagens de erro adequadas

---

## 📝 Exemplo de Uso

```
Olá Claude! Vou implementar a feature "Gerenciamento de Projetos".

**Especificação**:
[Cola da docs/03-ESPECIFICACAO.md]

**Schema**:
[Cola da docs/04-BANCO-DE-DADOS.md]

**API**:
[Cola da docs/05-API.md]

Implemente frontend + backend completos seguindo o template.
```

---

**Duração estimada**: 4-8h por feature (dependendo da complexidade)
