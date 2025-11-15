# 📅 Prompt: Geração de Plano Semanal Detalhado

Use este prompt com Claude IA para gerar um plano semanal detalhado com tarefas do dia a dia.

---

## 🎯 Contexto

Você é um tech lead experiente responsável por criar um plano de desenvolvimento semanal detalhado para um projeto web. Sua missão é quebrar features em tarefas concretas distribuídas ao longo das semanas, respeitando dependências técnicas e capacidade do time.

**Stack Tecnológica**:
- Frontend: Next.js 14+ (App Router), TypeScript, Tailwind CSS v4, shadcn/ui
- Backend: Next.js API Routes, Supabase (PostgreSQL + Auth + Storage)
- Deploy: Vercel + Supabase Cloud
- Agentes IA (se aplicável): N8N

**Duração desta fase**: 1 dia

---

## 📋 Entrada (forneça ao Claude)

### 1. PRD com Features Priorizadas
```
[Cole o conteúdo de planejamento/00-PRE-DESENVOLVIMENTO/prd.md com ênfase em:
- Features MVP (prioritárias)
- Features Pós-MVP (backlog)
- Priorização clara]
```

### 2. Documentação Técnica
```
[Informar que os seguintes arquivos estão completos:
- docs/01-VISAO-GERAL.md
- docs/02-ARQUITETURA.md
- docs/03-ESPECIFICACAO.md
- docs/04-BANCO-DE-DADOS.md
- docs/05-API.md
- docs/06-COMPONENTES.md]
```

### 3. Relatório de Validação
```
[Informações do relatório da Fase 4:
- Score final
- Gaps identificados (se houver)
- Riscos críticos a considerar]
```

### 4. Capacidade do Time
```
- Número de desenvolvedores: [X]
- Horas por dia disponíveis: [X]
- Dias por semana: [X]
- Habilidades do time: [ex: 1 fullstack, 1 backend, 1 frontend]
```

### 5. Timeline Total
```
- Desenvolvimento: [2-3 semanas]
- Testes: [3 dias]
- Buffer: [10-20%]
```

---

## 🎯 Tarefa

Analise todas as informações e crie um plano semanal detalhado com:

1. **Grafo de Dependências**: Mapear dependências entre features/tasks
2. **Distribuição Semanal**: Organizar features por semana
3. **Tasks Diárias**: Quebrar features em tarefas de 2-4h cada
4. **Milestones**: Definir checkpoints importantes
5. **Template de Progresso**: Criar formato para rastreamento diário

---

## 📊 Template de Resposta

```markdown
# Plano Semanal de Desenvolvimento: [Nome do Projeto]

## 📅 Período Total: [Data Início] - [Data Fim]

**Duração**: [X] semanas
**Desenvolvedores**: [X]
**Horas/semana**: [X]

---

## 🎯 Milestones Principais

1. **Semana 1**: Setup completo + Autenticação funcionando
2. **Semana 2**: [Feature principal 1] completa
3. **Semana 3**: [Feature principal 2] completa
4. **Semana 4**: Testes + Deploy + Buffer

---

## 📊 Grafo de Dependências

```
Setup & Infraestrutura
  ├─→ Autenticação
  │     ├─→ Feature 1
  │     ├─→ Feature 2
  │     └─→ Feature 3
  │
  └─→ Database Schema
        ├─→ Feature 1
        ├─→ Feature 2
        └─→ Feature 3

Feature 1 + Feature 2
  └─→ Feature 3 (depende de ambas)
```

**Ordem de Implementação**:
1. Setup & Infraestrutura (Week 1, Day 1-2)
2. Database Schema (Week 1, Day 2-3)
3. Autenticação (Week 1, Day 3-5)
4. Feature 1 (Week 2, Day 1-3)
5. Feature 2 (Week 2, Day 4-5, Week 3, Day 1)
6. Feature 3 (Week 3, Day 2-5)
7. Testes & Deploy (Week 4)

---

## 📅 SEMANA 1: Setup & Fundação

**Objetivo**: Infraestrutura completa + Autenticação funcionando

### Segunda-feira (Dia 1)

#### Setup Inicial (4h)
- [ ] Clonar repositório do Figma Make export
- [ ] Configurar ambiente de desenvolvimento
- [ ] Instalar dependências (npm install)
- [ ] Configurar variáveis de ambiente (.env.local)
- [ ] Testar build local

#### Supabase Setup (4h)
- [ ] Criar projeto no Supabase Cloud
- [ ] Configurar Supabase CLI local
- [ ] Conectar projeto local ao Supabase
- [ ] Testar conexão

**Checkpoint**: Projeto roda localmente + Supabase conectado

---

### Terça-feira (Dia 2)

#### Database Schema - Parte 1 (4h)
- [ ] Criar migration inicial (tabelas base)
- [ ] Implementar tabela `profiles`
- [ ] Implementar tabela `[entidade_1]`
- [ ] Implementar tabela `[entidade_2]`
- [ ] Aplicar migration (supabase db push)

#### Database Schema - Parte 2 (4h)
- [ ] Implementar triggers (updated_at)
- [ ] Implementar trigger (create_profile_on_signup)
- [ ] Testar criação de usuário + profile automático
- [ ] Seed inicial (dados de teste)

**Checkpoint**: Schema completo + triggers funcionando

---

### Quarta-feira (Dia 3)

#### RLS Policies (4h)
- [ ] Habilitar RLS em todas as tabelas
- [ ] Implementar policies para `profiles`
- [ ] Implementar policies para `[entidade_1]`
- [ ] Implementar policies para `[entidade_2]`
- [ ] Testar policies (SQL editor)

#### Supabase Clients (4h)
- [ ] Configurar Supabase client (browser)
- [ ] Configurar Supabase server client
- [ ] Criar middleware de autenticação
- [ ] Testar auth flow básico

**Checkpoint**: RLS ativo + clients configurados

---

### Quinta-feira (Dia 4)

#### Auth UI - Parte 1 (4h)
- [ ] Criar página de login (/login)
- [ ] Criar página de signup (/signup)
- [ ] Criar componentes de formulário (shadcn Form)
- [ ] Implementar validação (Zod schemas)

#### Auth UI - Parte 2 (4h)
- [ ] Implementar lógica de login
- [ ] Implementar lógica de signup
- [ ] Implementar redirect após login
- [ ] Testar fluxo completo

**Checkpoint**: Login/Signup funcionando

---

### Sexta-feira (Dia 5)

#### Auth - Features Adicionais (4h)
- [ ] Criar página de reset password
- [ ] Implementar logout
- [ ] Criar componente de proteção de rotas
- [ ] Implementar middleware para rotas protegidas

#### Testes & Refinamento (4h)
- [ ] Testar todos os fluxos de auth
- [ ] Ajustar UX/UI conforme necessário
- [ ] Documentar decisões técnicas
- [ ] Code review interno

**Milestone Semana 1**: ✅ Setup + Auth completos

---

## 📅 SEMANA 2: Features Principais (Parte 1)

**Objetivo**: Implementar [Feature 1] e [Feature 2]

### Segunda-feira (Dia 6)

#### [Feature 1] - Backend (4h)
- [ ] Criar API Routes para [Feature 1]
- [ ] Implementar GET /api/[recurso]
- [ ] Implementar GET /api/[recurso]/[id]
- [ ] Implementar validações (Zod)
- [ ] Testar com Postman/curl

#### [Feature 1] - Backend (continuação) (4h)
- [ ] Implementar POST /api/[recurso]
- [ ] Implementar PUT /api/[recurso]/[id]
- [ ] Implementar DELETE /api/[recurso]/[id]
- [ ] Testar CRUD completo

**Checkpoint**: API de [Feature 1] funcionando

---

### Terça-feira (Dia 7)

#### [Feature 1] - Frontend (4h)
- [ ] Criar página de listagem (/dashboard/[recurso])
- [ ] Implementar fetching de dados (Server Component)
- [ ] Criar componente de lista
- [ ] Implementar paginação (se necessário)

#### [Feature 1] - Frontend (continuação) (4h)
- [ ] Criar página de detalhe (/dashboard/[recurso]/[id])
- [ ] Criar formulário de criação
- [ ] Criar formulário de edição
- [ ] Implementar ações (create, update, delete)

**Checkpoint**: [Feature 1] completa (frontend + backend)

---

### Quarta-feira (Dia 8)

#### [Feature 2] - Backend (4h)
- [ ] Criar API Routes para [Feature 2]
- [ ] Implementar endpoints CRUD
- [ ] Implementar validações
- [ ] Implementar lógica de negócio específica

#### [Feature 2] - Backend (continuação) (4h)
- [ ] Testar integração com banco
- [ ] Testar regras de negócio
- [ ] Tratamento de erros
- [ ] Documentar endpoints

**Checkpoint**: API de [Feature 2] funcionando

---

### Quinta-feira (Dia 9)

#### [Feature 2] - Frontend (4h)
- [ ] Criar páginas necessárias
- [ ] Implementar componentes de UI
- [ ] Conectar com API
- [ ] Implementar estados de loading/error

#### [Feature 2] - Frontend (continuação) (4h)
- [ ] Implementar validações client-side
- [ ] Ajustar UX/UI
- [ ] Adicionar feedback ao usuário (toasts, etc.)
- [ ] Testar fluxo completo

**Checkpoint**: [Feature 2] completa

---

### Sexta-feira (Dia 10)

#### Integração & Refinamento (4h)
- [ ] Testar [Feature 1] + [Feature 2] juntas
- [ ] Verificar edge cases
- [ ] Ajustar UX conforme necessário
- [ ] Code review

#### Buffer & Ajustes (4h)
- [ ] Resolver bugs identificados
- [ ] Melhorar performance (se necessário)
- [ ] Atualizar documentação
- [ ] Preparar demo para milestone

**Milestone Semana 2**: ✅ [Feature 1] e [Feature 2] completas

---

## 📅 SEMANA 3: Features Principais (Parte 2)

[Repetir estrutura similar para features restantes]

---

## 📅 SEMANA 4: Testes, Refinamento & Deploy

**Objetivo**: Garantir qualidade + Deploy em produção

### Segunda-feira (Dia 16)

#### Testes End-to-End (4h)
- [ ] Testar todos os fluxos principais
- [ ] Testar autenticação completa
- [ ] Testar [Feature 1]
- [ ] Testar [Feature 2]
- [ ] Testar [Feature 3]

#### Correção de Bugs (4h)
- [ ] Listar bugs encontrados
- [ ] Priorizar bugs (crítico, médio, baixo)
- [ ] Corrigir bugs críticos
- [ ] Testar correções

---

### Terça-feira (Dia 17)

#### Otimização & Performance (4h)
- [ ] Analisar performance (Lighthouse)
- [ ] Otimizar imagens (next/image)
- [ ] Otimizar queries (se necessário)
- [ ] Implementar caching (se necessário)

#### Acessibilidade & UX (4h)
- [ ] Testar acessibilidade básica
- [ ] Ajustar contraste/cores
- [ ] Adicionar labels/aria
- [ ] Testar navegação por teclado

---

### Quarta-feira (Dia 18)

#### Preparação para Deploy (4h)
- [ ] Revisar variáveis de ambiente
- [ ] Configurar Vercel project
- [ ] Configurar domínio (se aplicável)
- [ ] Testar build de produção local

#### Deploy para Staging (4h)
- [ ] Deploy para Vercel (staging)
- [ ] Configurar Supabase staging
- [ ] Testar em staging
- [ ] Ajustar se necessário

**Checkpoint**: Staging funcionando

---

### Quinta-feira (Dia 19)

#### Testes em Staging (4h)
- [ ] Testar todos os fluxos em staging
- [ ] Testar em diferentes dispositivos
- [ ] Testar em diferentes browsers
- [ ] Coletar feedback (interno)

#### Ajustes Finais (4h)
- [ ] Corrigir issues encontrados em staging
- [ ] Fazer últimos ajustes de UX
- [ ] Atualizar README
- [ ] Preparar documentação de deploy

---

### Sexta-feira (Dia 20)

#### Deploy para Produção (4h)
- [ ] Configurar Supabase production
- [ ] Aplicar migrations em produção
- [ ] Deploy Vercel → production
- [ ] Configurar domínio final
- [ ] Smoke tests em produção

#### Monitoramento & Documentação (4h)
- [ ] Configurar monitoring (Sentry/analytics)
- [ ] Documentar processo de deploy
- [ ] Criar runbook de troubleshooting
- [ ] Handoff para cliente/time

**Milestone Final**: ✅ MVP em Produção!

---

## 📊 Template de Tracking Diário

Use o arquivo `progresso.md` para rastrear progresso:

```markdown
### [Data] - Dia X

**Tasks Planejadas**:
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

**Tasks Completas**:
- [x] Task 1

**Blockers**:
- [Descrever blocker]

**Próximos Passos**:
- [O que fazer amanhã]

**Notas**:
- [Decisões, aprendizados, etc.]
```

---

## 📈 Métricas de Progresso

### Por Semana
- **Semana 1**: Setup + Auth (20% do projeto)
- **Semana 2**: Features 1-2 (40% acumulado)
- **Semana 3**: Features 3-4 (70% acumulado)
- **Semana 4**: Testes + Deploy (100%)

### Checkpoints Críticos
- [ ] Day 5: Auth funcionando
- [ ] Day 10: 50% das features MVP completas
- [ ] Day 15: 100% das features MVP completas
- [ ] Day 18: Staging funcionando
- [ ] Day 20: Produção no ar

---

## 🚨 Riscos & Contingências

### Risco 1: Atraso em Feature complexa
**Contingência**: Mover feature para Pós-MVP, usar buffer da Semana 4

### Risco 2: Bug crítico em produção
**Contingência**: Rollback + hotfix + redeploy

### Risco 3: Integração N8N mais complexa que esperado
**Contingência**: Simplificar integração ou fazer manual no MVP

---

## ✅ Critérios de Sucesso

- [ ] Todas as features MVP estão funcionando
- [ ] Autenticação está segura e testada
- [ ] RLS está ativo e testado
- [ ] Deploy em produção está estável
- [ ] Documentação está atualizada
- [ ] Cliente/time está satisfeito

---

**Criado em**: [Data]
**Atualizado em**: [Data]
```

---

## 💡 Dicas para Melhor Resultado

1. **Seja realista**: Considere imprevistos e deixe buffer
2. **Priorize impiedosamente**: MVP deve ser mínimo mesmo
3. **Respeite dependências**: Não tente pular etapas
4. **Quebre tarefas**: Tasks de 2-4h são mais gerenciáveis
5. **Revise diariamente**: Use `progresso.md` para tracking
6. **Ajuste conforme necessário**: Planos são vivos, não rígidos

---

## 🔄 Exemplo de Uso

```
Olá Claude! Preciso de um plano semanal detalhado para desenvolvimento.

**PRD**:
[Cole PRD com features priorizadas]

**Documentação**:
- ✅ Todas as 6 docs criadas
- ✅ Validação completa (score 9/10)

**Capacidade**:
- 2 desenvolvedores fullstack
- 6h/dia cada
- 5 dias/semana

**Timeline**:
- 3 semanas de desenvolvimento
- 3 dias de testes
- 2 dias de deploy

**Features MVP**:
1. Autenticação
2. Dashboard de projetos
3. Sistema de tarefas
4. Colaboração (comentários)

Gere o plano semanal completo seguindo o template.
```

---

**Pronto para planejar?** Cole este prompt no Claude junto com todas as informações!
