# 05 - Documentação de API

> **Template**: Documente todos os endpoints do seu projeto

## 🔌 Visão Geral

[PREENCHER]

**Exemplo:**
Base URL: `https://seu-projeto.vercel.app/api`
Autenticação: Bearer Token (JWT do Supabase)

---

## 🔐 Autenticação

### POST `/auth/signup`

**Descrição**: [PREENCHER]

**Request:**
```json
{
  "email": "user@example.com",
  "password": "senha123",
  "name": "Nome do Usuário"
}
```

**Response 200:**
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "Nome do Usuário"
  },
  "session": {
    "access_token": "jwt...",
    "refresh_token": "jwt..."
  }
}
```

**Errors:**
- `400` - Email já cadastrado
- `422` - Validação falhou

---

### POST `/auth/login`

[PREENCHER]

---

## 📁 Projects

### GET `/projects`

**Descrição**: [PREENCHER]

**Headers:**
```
Authorization: Bearer {token}
```

**Query Params:**
```
?status=active&limit=20&offset=0
```

**Response 200:**
```json
{
  "data": [
    {
      "id": "uuid",
      "name": "Projeto X",
      "description": "Descrição...",
      "status": "active",
      "created_at": "2024-01-01T00:00:00Z"
    }
  ],
  "total": 42,
  "limit": 20,
  "offset": 0
}
```

---

### POST `/projects`

[PREENCHER]

---

### GET `/projects/:id`

[PREENCHER]

---

### PATCH `/projects/:id`

[PREENCHER]

---

### DELETE `/projects/:id`

[PREENCHER]

---

## 📌 Tasks

[PREENCHER - Documentar endpoints de tasks]

---

## 📊 Schemas

### Project Schema
```typescript
interface Project {
  id: string;
  name: string;
  description?: string;
  owner_id: string;
  status: 'planning' | 'active' | 'paused' | 'completed' | 'archived';
  start_date?: string;  // ISO 8601
  end_date?: string;    // ISO 8601
  created_at: string;   // ISO 8601
  updated_at: string;   // ISO 8601
}
```

---

## ⚠️ Códigos de Erro

[PREENCHER]

**Exemplo:**

| Código | Descrição | Exemplo |
|--------|-----------|---------|
| 400 | Bad Request | Dados inválidos |
| 401 | Unauthorized | Token inválido ou expirado |
| 403 | Forbidden | Sem permissão para recurso |
| 404 | Not Found | Recurso não existe |
| 422 | Unprocessable Entity | Validação falhou |
| 429 | Too Many Requests | Rate limit excedido |
| 500 | Internal Server Error | Erro no servidor |

---

**Status**: 🟡 Template - Aguardando preenchimento
**Documento Anterior**: [04-BANCO-DE-DADOS.md](./04-BANCO-DE-DADOS.md)
**Próximo Documento**: [06-COMPONENTES.md](./06-COMPONENTES.md)
