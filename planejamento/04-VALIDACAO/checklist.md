# ✅ Checklist de Validação

Use este checklist antes de prosseguir para o desenvolvimento.

---

## 🎯 Objetivo

Garantir que todo o planejamento está **consistente**, **completo** e **viável** antes de iniciar o desenvolvimento.

**Duração**: 1 dia
**Score mínimo para aprovação**: 8/10

---

## 📋 Checklist Completo

### 1. Consistência (PRD ↔️ Documentação)

#### Functional Requirements
- [ ] Todas as features do PRD têm especificação técnica
- [ ] Todas as user stories do PRD estão mapeadas
- [ ] Todas as regras de negócio do PRD estão documentadas
- [ ] Não há features na documentação que não existem no PRD
- [ ] Terminologia é consistente entre PRD e documentação

#### Business Goals
- [ ] Objetivos de negócio do PRD estão alinhados com arquitetura
- [ ] Métricas de sucesso do PRD são mensuráveis com a arquitetura proposta
- [ ] Personas do PRD são contempladas nas regras de acesso (RLS)

#### MVP vs Pós-MVP
- [ ] Separação clara entre features MVP e Pós-MVP
- [ ] Timeline reflete apenas o escopo MVP
- [ ] Features Pós-MVP estão documentadas mas não planejadas para v1.0

---

### 2. Completude - Banco de Dados

#### Schema
- [ ] Todas as entidades necessárias estão mapeadas em tabelas
- [ ] Todas as colunas têm tipo, null, e default definidos
- [ ] Primary keys estão definidas
- [ ] Foreign keys estão definidas com ON DELETE/UPDATE

#### Relacionamentos
- [ ] Relacionamentos entre tabelas estão documentados
- [ ] Relacionamentos N:N têm tabela de junção
- [ ] Não há dependências circulares

#### Constraints & Validation
- [ ] Check constraints estão definidos (ex: status enum)
- [ ] Unique constraints onde necessário
- [ ] NOT NULL em colunas obrigatórias

#### Índices
- [ ] Índices em foreign keys
- [ ] Índices em colunas de busca frequente
- [ ] Índices compostos (se necessário)

#### Triggers
- [ ] Trigger de `updated_at` para todas as tabelas
- [ ] Trigger de `create_profile_on_signup` (se aplicável)
- [ ] Outros triggers necessários documentados

#### RLS (Row Level Security)
- [ ] RLS habilitado em todas as tabelas de usuário
- [ ] Policy de SELECT definida
- [ ] Policy de INSERT definida
- [ ] Policy de UPDATE definida
- [ ] Policy de DELETE definida
- [ ] Casos especiais (admin, public) documentados

#### Migrations
- [ ] Migrations planejadas em ordem correta
- [ ] Migration inicial cria todas as tabelas
- [ ] Migrations de RLS separadas (opcional mas recomendado)
- [ ] Rollback strategy definida

---

### 3. Completude - API

#### Endpoints CRUD
Para cada entidade principal:
- [ ] GET `/api/[recurso]` - Listar (com paginação se necessário)
- [ ] GET `/api/[recurso]/[id]` - Detalhe
- [ ] POST `/api/[recurso]` - Criar
- [ ] PUT/PATCH `/api/[recurso]/[id]` - Atualizar
- [ ] DELETE `/api/[recurso]/[id]` - Deletar

#### Documentação por Endpoint
Para cada endpoint:
- [ ] Método HTTP definido
- [ ] Rota/path definida
- [ ] Autenticação requerida? (sim/não)
- [ ] Parâmetros (query, path, body) documentados
- [ ] Validações documentadas (Zod schemas)
- [ ] Resposta de sucesso documentada (status + JSON)
- [ ] Respostas de erro documentadas (400, 401, 404, 500)
- [ ] Exemplo de request/response

#### Casos Especiais
- [ ] Webhooks documentados (se aplicável)
- [ ] Upload de arquivos documentado (se aplicável)
- [ ] Real-time subscriptions documentadas (se aplicável)
- [ ] Rate limiting definido (se aplicável)

---

### 4. Completude - Frontend

#### Páginas/Rotas
- [ ] Todas as páginas do PRD estão mapeadas
- [ ] Estrutura de rotas (App Router) está definida
- [ ] Route groups estão planejados (auth, dashboard, etc.)
- [ ] Layouts estão identificados

#### Componentes
- [ ] Componentes shadcn/ui necessários estão listados
- [ ] Componentes customizados estão planejados
- [ ] Hierarquia de componentes está clara
- [ ] Props principais estão documentadas

#### State Management
- [ ] Estratégia de state management definida (Context, Zustand, etc.)
- [ ] Estados globais necessários estão identificados
- [ ] Client vs Server Components está claro

#### Hooks & Utilities
- [ ] Custom hooks planejados
- [ ] Utilitários (helpers, formatters) identificados
- [ ] Validações client-side (Zod) planejadas

#### Integrações
- [ ] Supabase client configurado
- [ ] Auth flow mapeado (login, signup, logout, reset password)
- [ ] Proteção de rotas planejada (middleware)

---

### 5. Completude - Contexto IA

#### Arquivo `.ai/contexto-projeto.md`
- [ ] Arquivo criado
- [ ] Nome e descrição do projeto
- [ ] Stack e ferramentas listadas
- [ ] Padrões de código definidos
- [ ] Estrutura de pastas documentada
- [ ] Convenções de nomenclatura claras
- [ ] Comandos úteis listados
- [ ] Links para documentação detalhada

---

### 6. Viabilidade Técnica

#### Stack & Ferramentas
- [ ] Next.js 14+ suporta todas as features
- [ ] Tailwind CSS v4 está disponível/compatível
- [ ] shadcn/ui suporta componentes necessários
- [ ] Supabase suporta features necessárias (Auth, Storage, Realtime)
- [ ] N8N pode ser integrado (se necessário)

#### Performance
- [ ] Arquitetura suporta número esperado de usuários
- [ ] Estratégia de caching definida (se necessário)
- [ ] Static vs Dynamic rendering planejado
- [ ] Image optimization planejado (next/image)

#### Integrações
- [ ] APIs externas são acessíveis e viáveis
- [ ] N8N workflows são possíveis (se aplicável)
- [ ] Supabase Realtime é viável (se aplicável)
- [ ] Upload de arquivos é suportado (se aplicável)

#### Segurança
- [ ] Supabase Auth está configurado
- [ ] RLS protege dados sensíveis
- [ ] Validações de input protegem contra XSS/injection
- [ ] CORS está configurado corretamente (se necessário)
- [ ] Secrets/env vars estão planejados (.env.local)

---

### 7. Timeline Realista

#### Fases
- [ ] Tempo para cada fase é realista
- [ ] Entrevista/PRD: 1-2 semanas ✅
- [ ] Design Frontend: 2-4 dias ✅
- [ ] Setup Backend: 1 dia
- [ ] Documentação: 1 dia ✅
- [ ] Desenvolvimento: 2-3 semanas
- [ ] Testes: 3 dias
- [ ] Deploy: 2 dias

#### Buffer
- [ ] 10-20% de buffer para imprevistos
- [ ] Espaço para code review
- [ ] Espaço para testes e refinamento

#### Dependências
- [ ] Ordem das features respeita dependências técnicas
- [ ] Setup de infraestrutura vem primeiro
- [ ] Autenticação vem antes de features protegidas
- [ ] Não há bloqueadores não identificados

---

### 8. Riscos

#### Riscos Críticos (Bloqueadores)
- [ ] Riscos críticos identificados
- [ ] Plano de mitigação para cada risco crítico
- [ ] **Nenhum risco crítico sem mitigação**

#### Riscos Médios
- [ ] Riscos médios identificados
- [ ] Plano de mitigação (ou aceitação) documentado

#### Riscos Baixos
- [ ] Riscos baixos identificados
- [ ] Monitoramento planejado

---

## 📊 Score Final

### Cálculo do Score

| Dimensão | Peso | Score (0-10) | Ponderado |
|----------|------|--------------|-----------|
| Consistência | 20% | ___ | ___ |
| Completude - DB | 20% | ___ | ___ |
| Completude - API | 15% | ___ | ___ |
| Completude - Frontend | 15% | ___ | ___ |
| Viabilidade Técnica | 15% | ___ | ___ |
| Timeline | 10% | ___ | ___ |
| Riscos | 5% | ___ | ___ |
| **TOTAL** | **100%** | | **___/10** |

### Critérios de Aprovação

- **9-10**: ✅ Excelente - Pronto para desenvolvimento
- **7-8**: ✅ Bom - Alguns ajustes menores necessários
- **5-6**: ⚠️ Médio - Gaps significativos, resolver antes de prosseguir
- **0-4**: ❌ Crítico - Replanejar antes de continuar

**Score Mínimo para Aprovação**: 8/10

---

## ✅ Aprovação Final

### Aprovação para Prosseguir (Fase 5 - Plano Semanal):

- [ ] Score >= 8/10
- [ ] Todos os gaps críticos foram resolvidos
- [ ] Schema do banco completo e validado
- [ ] RLS policies definidas
- [ ] API endpoints documentados
- [ ] Timeline tem buffer
- [ ] Riscos críticos têm mitigação

### Status: ___________

- ✅ **APROVADO**: Prosseguir para Fase 5
- ⚠️ **APROVADO COM RESSALVAS**: Resolver itens específicos durante desenvolvimento
- ❌ **REPROVADO**: Voltar para documentação e resolver gaps

---

## 🎯 Ações Necessárias (se houver)

1. [ ] _______________________________________
2. [ ] _______________________________________
3. [ ] _______________________________________

---

**Validado por**: ___________
**Data**: ___________
**Score Final**: ___/10
**Status**: ___________

---

## 📝 Observações

[Espaço para observações adicionais]

---

**Próxima Fase**: [Fase 5 - Plano Semanal](../05-PLANO-SEMANAL/README.md)
