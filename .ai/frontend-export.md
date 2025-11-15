# 🎨 Frontend Export

> Código exportado do design (Figma Make, v0, ou Lovable)

## 📋 Instruções

1. **Após completar o design** (Fase 1), exporte o código
2. **Cole todo o código exportado** neste arquivo
3. **Organize por seções** (componentes, páginas, etc.)
4. **Liste dados mockados** que precisarão ser substituídos por dados reais
5. **Identifique APIs** que precisarão ser criadas

---

## 🎯 Componentes Exportados

### [Nome do Componente 1]

```tsx
// Cole o código aqui
```

**Props:**
- `prop1`: tipo - descrição
- `prop2`: tipo - descrição

**Dados Mockados:**
- [Listar dados hardcoded que precisam vir do backend]

---

### [Nome do Componente 2]

[Repetir para cada componente...]

---

## 📄 Páginas Exportadas

### Página: [Nome da Página 1]

**Rota**: `/caminho/da/rota`

```tsx
// Cole o código aqui
```

**Componentes Usados:**
- [Componente 1]
- [Componente 2]

**Dados Necessários:**
- [Dados que esta página precisa buscar]

**APIs Necessárias:**
- `GET /api/...` - [Descrição]
- `POST /api/...` - [Descrição]

---

## 📊 Dados Mockados

Lista de todos os dados hardcoded que precisam ser substituídos:

### [Tipo de Dado 1] (ex: Projetos)

```json
{
  "id": "mock-1",
  "name": "Projeto Exemplo",
  "description": "Descrição de exemplo...",
  ...
}
```

**Tabela necessária**: `projects`
**Endpoint**: `GET /api/projects`

---

### [Tipo de Dado 2]

[Repetir para cada tipo...]

---

## 🔌 APIs Identificadas

Lista de endpoints que precisarão ser criados:

| Método | Endpoint | Descrição | Request | Response |
|--------|----------|-----------|---------|----------|
| GET | /api/projects | Listar projetos | - | `Project[]` |
| POST | /api/projects | Criar projeto | `ProjectInput` | `Project` |
| ... | ... | ... | ... | ... |

---

## 🎨 Componentes Shadcn/ui Usados

Lista de componentes do Shadcn que foram utilizados:

- [ ] Button
- [ ] Card
- [ ] Input
- [ ] Form
- [ ] Dialog
- [ ] ...

**Comando de instalação:**
```bash
npx shadcn-ui@latest add button card input form dialog
```

---

## 📝 Notas de Implementação

### Mudanças Necessárias

[Liste mudanças que precisam ser feitas ao migrar o código exportado]

1. **Substituir dados mockados** por fetch real do Supabase
2. **Adicionar validação** com Zod nos formulários
3. **Implementar estados** de loading/error
4. **Conectar autenticação**
5. ...

### Observações

[Qualquer observação importante sobre o código exportado]

---

**Status**: 🟡 Aguardando export do design
**Última Atualização**: [DATA]
