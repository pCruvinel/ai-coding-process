# ✅ Checklist por Feature

Use este checklist para cada feature implementada.

---

## Feature: ____________________

**Responsável**: ___________
**Data início**: ___________
**Data fim**: ___________

---

## 🗄️ Backend (API Routes)

### Endpoints CRUD

- [ ] GET `/api/[recurso]` - Listar
  - [ ] Paginação (se necessário)
  - [ ] Filtros (se necessário)
  - [ ] Ordenação (se necessário)

- [ ] GET `/api/[recurso]/[id]` - Detalhe
  - [ ] Retorna 404 se não existe
  - [ ] RLS aplicado

- [ ] POST `/api/[recurso]` - Criar
  - [ ] Validação Zod
  - [ ] user_id preenchido automaticamente
  - [ ] Retorna 201 + objeto criado

- [ ] PUT `/api/[recurso]/[id]` - Atualizar
  - [ ] Validação Zod
  - [ ] updated_at atualizado (trigger)
  - [ ] RLS impede atualizar de outros

- [ ] DELETE `/api/[recurso]/[id]` - Deletar
  - [ ] RLS impede deletar de outros
  - [ ] Retorna 204

### Validações

- [ ] Schema Zod criado (`lib/validations/[recurso].ts`)
- [ ] Campos obrigatórios validados
- [ ] Tipos corretos (email, url, etc.)
- [ ] Lengths mínimas/máximas
- [ ] Custom validations (se necessário)

### Tratamento de Erros

- [ ] 400 Bad Request - dados inválidos
- [ ] 401 Unauthorized - sem auth
- [ ] 404 Not Found - recurso não existe
- [ ] 500 Internal Server Error - erros inesperados
- [ ] Mensagens de erro claras

---

## 🎨 Frontend (Pages & Components)

### Páginas

- [ ] `app/(dashboard)/[recurso]/page.tsx` - Listagem
  - [ ] Server Component (fetch direto)
  - [ ] Loading skeleton
  - [ ] Empty state
  - [ ] Botão "Criar novo"
  - [ ] Lista de items

- [ ] `app/(dashboard)/[recurso]/[id]/page.tsx` - Detalhe
  - [ ] Mostra todos os dados
  - [ ] Botões de ação (editar, deletar)
  - [ ] Loading state
  - [ ] 404 se não existe

### Componentes

- [ ] `components/features/[recurso]/List.tsx`
  - [ ] Renderiza lista de items
  - [ ] Link para detalhe

- [ ] `components/features/[recurso]/CreateForm.tsx`
  - [ ] Todos os campos
  - [ ] Validação client-side (Zod)
  - [ ] Loading state
  - [ ] Mensagens de erro
  - [ ] Success feedback

- [ ] `components/features/[recurso]/EditForm.tsx`
  - [ ] Preenche dados existentes
  - [ ] Validação client-side
  - [ ] Loading state
  - [ ] Success feedback

- [ ] `components/features/[recurso]/DeleteDialog.tsx`
  - [ ] Confirmação antes de deletar
  - [ ] Loading state
  - [ ] Redirect após deletar

### States & Feedback

- [ ] Loading states em todas as ações
- [ ] Error states com mensagens claras
- [ ] Success toasts/messages
- [ ] Disabled buttons durante loading
- [ ] Optimistic updates (opcional)

---

## 🔐 Segurança & RLS

- [ ] RLS testado: usuário só vê próprios dados
- [ ] RLS testado: usuário não pode editar dados de outros
- [ ] RLS testado: usuário não pode deletar dados de outros
- [ ] Auth validada em todas as rotas protegidas

---

## 📱 UX & Responsividade

- [ ] Mobile responsive
- [ ] Desktop responsive
- [ ] Tablet responsive
- [ ] Touch targets adequados (min 44px)
- [ ] Forms acessíveis (labels, autocomplete)
- [ ] Keyboard navigation
- [ ] Focus states visíveis

---

## 🧪 Testes Manuais

### Happy Path
- [ ] Criar novo registro com sucesso
- [ ] Ver registro na listagem
- [ ] Abrir detalhe do registro
- [ ] Editar registro com sucesso
- [ ] Deletar registro com sucesso

### Validações
- [ ] Tentar criar sem campos obrigatórios → erro
- [ ] Tentar criar com dados inválidos → erro
- [ ] Ver mensagens de erro claras

### Edge Cases
- [ ] Listar quando não há registros → empty state
- [ ] Acessar detalhe de ID inexistente → 404
- [ ] Network error → mensagem adequada

### RLS (Multi-User)
- [ ] Usuário A não vê dados do Usuário B
- [ ] Usuário A não pode editar dados do Usuário B
- [ ] Usuário A não pode deletar dados do Usuário B

---

## 📊 Performance

- [ ] Queries otimizadas (select apenas campos necessários)
- [ ] Paginação implementada (se lista grande)
- [ ] Images otimizadas (next/image)
- [ ] Loading skeletons (não spinner genérico)

---

## 📝 Documentação

- [ ] Types TypeScript criados
- [ ] Comentários em código complexo
- [ ] README atualizado (se necessário)

---

## ✅ Aprovação Final

- [ ] Code review (pair/self)
- [ ] Sem erros no console
- [ ] Sem warnings TypeScript
- [ ] Feature completa e funcional
- [ ] Pronto para merge/deploy

---

**Status Final**: [✅ Completo / ⚠️ Com pendências / ❌ Bloqueado]

**Notas**:
_______________________________________________
_______________________________________________
