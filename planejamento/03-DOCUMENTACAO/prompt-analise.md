# 📊 Prompt: Análise e Documentação Técnica

Use este prompt com Claude IA para analisar o PRD e frontend exportado do Figma Make e gerar documentação técnica completa.

---

## 🎯 Contexto

Você é um arquiteto de software sênior responsável por analisar requisitos de produto (PRD) e um frontend exportado do Figma Make para criar documentação técnica completa de um projeto web.

**Stack Tecnológica**:
- Frontend: Next.js 14+ (App Router), TypeScript, Tailwind CSS v4, shadcn/ui
- Backend: Next.js API Routes, Supabase (PostgreSQL + Auth + Storage + Real-time)
- Deploy: Vercel (frontend) + Supabase Cloud (backend)
- Agentes IA (se necessário): N8N para automações e workflows

---

## 📋 Entrada (forneça ao Claude)

### 1. PRD do Projeto
```
[Cole aqui o conteúdo do arquivo planejamento/00-PRE-DESENVOLVIMENTO/prd.md]
```

### 2. Frontend Exportado
```
[Informações sobre o código exportado do Figma Make:
- Quantas páginas/rotas foram criadas
- Principais componentes identificados
- Bibliotecas utilizadas (shadcn components, etc.)
- Screenshots ou descrição das telas principais]
```

### 3. Requisitos Especiais
```
[Liste aqui se o projeto precisa de:
- Integração com N8N (agentes de IA)
- APIs externas específicas
- Funcionalidades real-time
- Upload de arquivos
- Notificações
- Etc.]
```

---

## 🎯 Tarefa

Analise o PRD e o frontend exportado e crie os seguintes documentos técnicos:

### 1. Visão Geral (`docs/01-VISAO-GERAL.md`)
- Descrição do projeto
- Objetivos de negócio
- Usuários-alvo (personas)
- Features principais (MVP vs Pós-MVP)
- Stack tecnológica detalhada
- Arquitetura de alto nível (diagrama textual)

### 2. Arquitetura (`docs/02-ARQUITETURA.md`)
- Estrutura de pastas do Next.js App Router
- Organização de componentes React
- Camadas da aplicação (UI, Business Logic, Data Access)
- Padrões de design utilizados
- Fluxo de dados (Client → Server → Database)
- Integrações externas (N8N, APIs, etc.)
- Estratégia de cache e performance

### 3. Especificação Funcional (`docs/03-ESPECIFICACAO.md`)
Para cada feature do PRD:
- Nome e descrição
- User stories
- Regras de negócio
- Validações
- Casos de uso principais
- Casos de erro/edge cases
- Critérios de aceitação

### 4. Banco de Dados (`docs/04-BANCO-DE-DADOS.md`)
- Schema completo (tabelas, colunas, tipos)
- Relacionamentos entre tabelas
- Índices necessários
- Triggers (updated_at, etc.)
- RLS (Row Level Security) policies
- Funções PostgreSQL customizadas
- Migrations necessárias
- Estratégia de backup

### 5. API (`docs/05-API.md`)
Para cada endpoint necessário:
- Método HTTP e rota
- Parâmetros (query, body, headers)
- Resposta (status codes, formato JSON)
- Regras de autenticação/autorização
- Exemplos de request/response
- Rate limiting (se aplicável)
- Tratamento de erros

### 6. Componentes Frontend (`docs/06-COMPONENTES.md`)
- Hierarquia de componentes
- Props de cada componente principal
- Estados globais (Context, Zustand, etc.)
- Componentes shadcn/ui utilizados
- Componentes customizados necessários
- Hooks personalizados
- Utilitários e helpers

### 7. Contexto para IA (`.ai/contexto-projeto.md`)
Um resumo executivo otimizado para Claude Code:
- Nome e descrição breve do projeto
- Stack e ferramentas
- Padrões de código a seguir
- Estrutura de pastas
- Convenções de nomenclatura
- Comandos úteis
- Links para documentação detalhada

---

## ✅ Checklist de Completude

Ao finalizar, verifique se a documentação contém:

- [ ] Todos os requisitos do PRD foram cobertos
- [ ] Cada feature tem especificação detalhada
- [ ] Schema do banco mapeia todas as entidades necessárias
- [ ] Relacionamentos entre tabelas estão claros
- [ ] Cada endpoint de API está documentado com exemplos
- [ ] Componentes frontend estão mapeados
- [ ] RLS policies estão definidas para cada tabela
- [ ] Estratégia de autenticação/autorização está clara
- [ ] Integrações externas (N8N, APIs) estão documentadas
- [ ] Contexto IA está pronto para uso

---

## 📝 Template de Resposta

Organize sua resposta da seguinte forma:

```markdown
# Análise Completa do Projeto [Nome]

## 📊 Resumo Executivo
[Breve resumo do que foi analisado]

## ✅ Documentos Gerados

### 1. Visão Geral
[Conteúdo completo do arquivo 01-VISAO-GERAL.md]

### 2. Arquitetura
[Conteúdo completo do arquivo 02-ARQUITETURA.md]

### 3. Especificação Funcional
[Conteúdo completo do arquivo 03-ESPECIFICACAO.md]

### 4. Banco de Dados
[Conteúdo completo do arquivo 04-BANCO-DE-DADOS.md]

### 5. API
[Conteúdo completo do arquivo 05-API.md]

### 6. Componentes Frontend
[Conteúdo completo do arquivo 06-COMPONENTES.md]

### 7. Contexto para IA
[Conteúdo completo do arquivo .ai/contexto-projeto.md]

## 🎯 Próximos Passos

1. Revisar documentação com o time
2. Ajustar conforme feedback
3. Prosseguir para Fase 4 (Validação)
```

---

## 💡 Dicas para Melhor Resultado

1. **Seja específico**: Forneça o máximo de contexto possível sobre o projeto
2. **Cole o PRD completo**: Não resuma, cole o documento inteiro
3. **Descreva o frontend**: Liste as páginas, componentes principais identificados
4. **Mencione integrações**: Se usa N8N, APIs externas, descreva o propósito
5. **Itere se necessário**: Peça ajustes/refinamentos após a primeira versão

---

## 🔄 Exemplo de Uso

```
Olá Claude! Preciso que você analise meu PRD e frontend para gerar documentação técnica.

**PRD**:
[Cole o conteúdo de planejamento/00-PRE-DESENVOLVIMENTO/prd.md]

**Frontend (Figma Make)**:
- 5 páginas criadas: Home, Dashboard, Profile, Settings, Admin
- Usa componentes shadcn: Card, Button, Dialog, Form, Table
- Layout responsivo com sidebar
- Dark mode support

**Integrações**:
- Supabase: Auth + Database + Storage (upload de avatares)
- N8N: Workflow para processar documentos com IA quando usuário faz upload

Gere toda a documentação técnica seguindo o template acima.
```

---

**Pronto para começar?** Cole este prompt no Claude junto com seu PRD e informações do frontend!
