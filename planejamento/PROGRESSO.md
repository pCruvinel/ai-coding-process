# ✅ Checklist Completo - Setup Claude Code

**Versão:** 1.0
**Última atualização:** 15/11/2024
**Status do Projeto:** [PREENCHER - ex: Em Planejamento, Em Desenvolvimento, Produção]

---

## 🎯 Como Usar Este Checklist

1. **Copie este arquivo para o projeto específico** quando iniciar um novo projeto
2. **Marque itens conforme completa**: Substitua `- [ ]` por `- [x]`
3. **Atualize regularmente**: Mantenha este arquivo como fonte única de verdade do progresso
4. **Use como guia**: Siga a ordem das fases para melhores resultados

**Legenda:**
- ✅ = Completo
- 🔄 = Em progresso
- ⏳ = Pendente
- ❌ = Bloqueado
- 🟡 = Opcional/Condicional

---

## 📋 FASE 0: PRÉ-DESENVOLVIMENTO

> **Objetivo**: Definir escopo e aprovar PRD antes de começar desenvolvimento

### Entrevista e PRD
- [ ] Entrevista com cliente realizada (ver `planejamento/00-PRE-DESENVOLVIMENTO/guia-entrevista.md`)
- [ ] `prd.md` criado com todas as informações
- [ ] Objetivos de negócio claros e documentados
- [ ] Personas definidas (mínimo 2-3)
- [ ] Features MVP listadas (5-10 features essenciais)
- [ ] Features pós-MVP identificadas
- [ ] Prazo e orçamento definidos
- [ ] Cliente aprovou PRD (aprovação documentada)

**Status Fase 0**: ⏳ Pendente

---

## 🎨 FASE 1: DESIGN FRONTEND

> **Objetivo**: Criar todas as telas usando ferramenta de IA (Lovable, v0)

### Preparação
- [ ] Brief de design criado baseado no PRD
- [ ] Referências visuais coletadas (sites similares)
- [ ] Preferências de estilo definidas
- [ ] Ferramenta de IA escolhida (Lovable, v0, ou similar)

### Geração com IA
- [ ] Todas as telas MVP criadas na ferramenta
- [ ] Navegação entre telas funciona
- [ ] Design responsivo (mobile + desktop)
- [ ] Componentes Shadcn/ui integrados
- [ ] Estados principais (normal, loading, error, empty)
- [ ] Cliente aprovou design

### Export e Documentação
- [ ] Código exportado da ferramenta
- [ ] `.ai/frontend-export.md` criado
- [ ] Componentes documentados
- [ ] Telas listadas
- [ ] Design system documentado (cores, fontes)
- [ ] Código validado localmente (estrutura faz sentido)

**Status Fase 1**: ⏳ Pendente

---

## 🔄 FASE 2: TRANSIÇÃO PARA BACKEND

> **Objetivo**: Setup do ambiente usando Claude Code

### Setup via Claude Code
- [ ] Claude Code validou código exportado da Fase 1
- [ ] Dependências instaladas (via Claude Code)
- [ ] Projeto roda localmente (`npm run dev`)
- [ ] `npm run build` funciona sem erros
- [ ] `.env.example` criado/atualizado
- [ ] `.gitignore` configurado corretamente

### Estrutura de Pastas (criada via Claude Code)
- [ ] `docs/` criado
- [ ] `.ai/` criado
- [ ] `.ai/prompts/` criado (se necessário)
- [ ] `.claude/` criado (se não existir)
- [ ] `.claude/skills/` criado
- [ ] Estrutura Next.js preservada

### Git e Documentação
- [ ] Commit inicial (se necessário)
- [ ] Branch `develop` criada
- [ ] README.md atualizado com instruções
- [ ] Push para repositório remoto

**Status Fase 2**: ⏳ Pendente

---

## 📝 FASE 3: DOCUMENTAÇÃO

> **Objetivo**: Documentar arquitetura, banco de dados e especificação

### Análise (PROMPT 2.1)
- [ ] PRD lido e compreendido
- [ ] Frontend export analisado
- [ ] Código fonte explorado
- [ ] Dados mockados identificados
- [ ] APIs necessárias mapeadas

### Documentos Criados (em `docs/`)
- [ ] `docs/01-VISAO-GERAL.md`
- [ ] `docs/02-ARQUITETURA.md`
- [ ] `docs/03-ESPECIFICACAO.md`
- [ ] `docs/04-BANCO-DE-DADOS.md`
- [ ] `docs/05-API.md`
- [ ] `docs/06-COMPONENTES.md`
- [ ] `docs/07-DEPLOY.md`
- [ ] `docs/08-TESTES.md` (opcional)
- [ ] `docs/09-HISTORICO.md`

### Contexto IA (em `.ai/`)
- [ ] `.ai/contexto-projeto.md` criado
- [ ] `.ai/decisoes-tecnicas.md` criado
- [ ] ADRs principais documentados

### Planejamento
- [ ] `planejamento/PLANO-GERAL.md` criado
- [ ] `planejamento/ESTIMATIVAS.md` criado
- [ ] Features priorizadas
- [ ] Dependências identificadas

**Status Fase 3**: ⏳ Pendente

---

## ✅ FASE 4: VALIDAÇÃO (PROMPT 2.2)

> **Objetivo**: Validar consistência e completude da documentação

### Consistência
- [ ] PRD ↔️ Especificação consistentes
- [ ] Arquitetura ↔️ Banco de Dados consistentes
- [ ] API ↔️ Especificação consistentes
- [ ] Plano ↔️ Estimativas consistentes

### Completude
- [ ] Todas as features do PRD documentadas
- [ ] Todas as tabelas necessárias listadas
- [ ] Todos os endpoints necessários documentados
- [ ] Todos os componentes mapeados

### Sistema de Auth (Obrigatório)
- [ ] Tabela `public.roles` especificada
- [ ] Tabela `public.users` especificada
- [ ] Trigger `on_auth_user_created` especificado
- [ ] Function `handle_new_user()` especificada
- [ ] RLS policies definidas
- [ ] Role padrão 'user' configurado

### Viabilidade
- [ ] Stack escolhida suporta features
- [ ] Integrações são possíveis
- [ ] Prazo é realista
- [ ] Sem dependências circulares
- [ ] Tailwind v3/v4 especificado

### Relatório
- [ ] `planejamento/VALIDACAO.md` gerado
- [ ] Inconsistências corrigidas
- [ ] Gaps preenchidos
- [ ] Score >= 8/10 alcançado
- [ ] Aprovado para prosseguir

**Status Fase 4**: ⏳ Pendente

---

## 📅 FASE 5: PLANO SEMANAL (PROMPT 2.3)

> **Objetivo**: Criar plano semanal detalhado com tasks diárias

### Análise
- [ ] Grafo de dependências criado
- [ ] Features priorizadas por valor/complexidade
- [ ] Trabalho distribuído em semanas

### Plano Detalhado
- [ ] `planejamento/PLANO-SEMANAL.md` criado
- [ ] Cada dia tem objetivo claro
- [ ] Tasks têm tempo estimado (horas)
- [ ] Checkpoints de validação definidos
- [ ] Definition of Done clara por feature

### Progresso
- [ ] Este arquivo (`PROGRESSO.md`) sendo usado para tracking
- [ ] Template de tracking diário pronto
- [ ] Processo de review diário definido

**Status Fase 5**: ⏳ Pendente

---

## 🎯 FASE 6: SKILLS CLAUDE (PROMPT 2.4)

> **Objetivo**: Configurar skills personalizadas do Claude

### Skills Padrão
- [ ] `.claude/skills/00-nextjs-padrao/` criada (copiar template se necessário)
- [ ] Skill testada e funcionando

### Skills Personalizadas
- [ ] `.claude/skills/01-contexto-projeto/SKILL.md` criada
- [ ] `.claude/skills/02-padroes-codigo/SKILL.md` criada
- [ ] `.claude/skills/03-checklist-feature/SKILL.md` criada
- [ ] `.claude/skills/04-debugging-guide/SKILL.md` criada

### Inventário
- [ ] `.claude/skills/INVENTARIO.md` criado
- [ ] Guia de uso documentado
- [ ] Exemplos de ativação incluídos
- [ ] Skills testadas com Claude

**Status Fase 6**: ⏳ Pendente

---

## 🗄️ FASE 7: SETUP SUPABASE

> **Objetivo**: Configurar banco de dados e RLS

### Criação do Projeto
- [ ] Projeto criado no Supabase
- [ ] URL e ANON_KEY copiados
- [ ] Variáveis em `.env.local`
- [ ] `.env.example` atualizado

### Tabelas Base (Sistema de Auth - Obrigatório)
- [ ] Migration `001_create_roles.sql` criada e aplicada
- [ ] Tabela `public.roles` criada
- [ ] Roles padrão inseridos (user, admin, moderator)
- [ ] Migration `002_create_users.sql` criada e aplicada
- [ ] Tabela `public.users` criada
- [ ] FK para `auth.users` configurada
- [ ] FK para `public.roles` configurada

### Trigger Automático
- [ ] Migration `003_create_user_trigger.sql` criada e aplicada
- [ ] Function `handle_new_user()` criada
- [ ] Trigger `on_auth_user_created` criado
- [ ] Trigger testado (criar usuário → aparece em public.users automaticamente)

### RLS (Row Level Security)
- [ ] RLS habilitado em `users`
- [ ] RLS habilitado em `roles`
- [ ] Policy: usuários veem próprios dados
- [ ] Policy: admins veem tudo
- [ ] Policy: usuários não podem mudar próprio role
- [ ] Policies testadas manualmente

### Functions Úteis
- [ ] Function `is_admin()` criada
- [ ] Function `get_user_profile()` criada
- [ ] Function `update_last_access()` criada (opcional)
- [ ] Functions testadas

### Tabelas Específicas do Projeto
- [ ] Todas as tabelas do `04-BANCO-DE-DADOS.md` criadas
- [ ] RLS configurado em todas as tabelas
- [ ] Índices criados conforme necessário
- [ ] Seeds de dados iniciais (se necessário)

**Status Fase 7**: ⏳ Pendente

---

## 🔐 FASE 8: AUTENTICAÇÃO

> **Objetivo**: Implementar sistema completo de auth

### Configuração Supabase Clients
- [ ] `src/lib/supabase/server.ts` criado
- [ ] `src/lib/supabase/client.ts` criado
- [ ] `src/lib/supabase/middleware.ts` criado (se necessário)
- [ ] Clientes testados

### Componentes de Auth
- [ ] `src/components/auth/signup-form.tsx` criado
- [ ] `src/components/auth/login-form.tsx` criado
- [ ] `src/components/auth/logout-button.tsx` criado
- [ ] `src/components/auth/require-auth.tsx` criado (ou HOC equivalente)

### Páginas
- [ ] `src/app/(auth)/login/page.tsx` criada
- [ ] `src/app/(auth)/cadastro/page.tsx` criada
- [ ] `src/app/auth/callback/route.ts` criada
- [ ] Layout de auth criado

### Middleware
- [ ] `src/middleware.ts` criado
- [ ] Rotas protegidas configuradas
- [ ] Redirecionamentos funcionando
- [ ] Verificação de admin implementada (se necessário)

### Hooks
- [ ] `src/hooks/use-user.ts` criado
- [ ] Hook retorna perfil completo com role
- [ ] Hook atualiza em mudanças de auth

### Tipos TypeScript
- [ ] `src/types/database.types.ts` gerado do Supabase
- [ ] Cliente Supabase tipado corretamente
- [ ] Types usados nos componentes

### Testes End-to-End de Auth
- [ ] Signup cria usuário em `auth.users`
- [ ] Trigger cria registro em `public.users` automaticamente
- [ ] Usuário criado tem role 'user' por padrão
- [ ] Login funciona e carrega perfil
- [ ] Logout funciona e limpa sessão
- [ ] Rotas protegidas bloqueiam não-autenticados
- [ ] Middleware redireciona corretamente
- [ ] Admin consegue ver outros usuários (se implementado)

**Status Fase 8**: ⏳ Pendente

---

## 💻 FASE 9: DESENVOLVIMENTO

> **Objetivo**: Implementar todas as features do MVP

### Dia 1: Setup Completo (PROMPT 3.1)
- [ ] Repositório Git configurado (branches, etc.)
- [ ] Next.js configurado (Tailwind v3/v4)
- [ ] ESLint/Prettier configurados
- [ ] Supabase conectado e testado
- [ ] Componentes UI base instalados (Shadcn/ui)
- [ ] Estrutura de testes configurada
- [ ] Primeiro commit realizado

### Por Feature (PROMPT 3.2)
Para cada feature do MVP, marque:

#### Feature: [Nome da Feature 1]
- [ ] **Planning**: Spec da feature lida e compreendida
- [ ] **Database**: Migrations criadas (se necessário)
- [ ] **Backend**: API endpoints implementados
- [ ] **Frontend**: Componentes e páginas criados
- [ ] **Integration**: Frontend conectado ao backend
- [ ] **Testing**: Testes escritos (unit + integration)
- [ ] **Documentation**: Código comentado, docs atualizados
- [ ] **Code Quality**: ESLint OK, Prettier OK, TypeScript sem erros
- [ ] **Git**: Commitado com mensagem clara
- [ ] **Deploy**: Testado em staging/preview

#### Feature: [Nome da Feature 2]
- [ ] Planning
- [ ] Database
- [ ] Backend
- [ ] Frontend
- [ ] Integration
- [ ] Testing
- [ ] Documentation
- [ ] Code Quality
- [ ] Git
- [ ] Deploy

[Repita para cada feature...]

### Checklist Geral de Desenvolvimento
- [ ] Todas as features MVP implementadas
- [ ] Testes unitários escritos (>80% cobertura crítica)
- [ ] Testes de integração para fluxos principais
- [ ] Documentação de código adequada
- [ ] Performance otimizada (Lighthouse >90)
- [ ] Acessibilidade básica (WCAG 2.1 AA)
- [ ] SEO básico implementado
- [ ] Error handling robusto
- [ ] Loading states em todas as operações assíncronas

**Status Fase 9**: ⏳ Pendente

---

## 🐛 DEBUGGING (PROMPT 3.3)

> Usado quando bugs aparecem durante desenvolvimento

### Processo de Debugging
- [ ] Bug reproduzido consistentemente
- [ ] Problema isolado (frontend/backend/banco)
- [ ] Logs coletados e analisados
- [ ] Stack trace analisado
- [ ] Causa raiz identificada
- [ ] Fix implementado
- [ ] Teste criado para evitar regressão
- [ ] Documentação atualizada (se necessário)
- [ ] Bug documentado em debugging-guide

**Bugs Abertos**: [PREENCHER - manter lista atualizada]

---

## 🔄 REFATORAÇÃO (PROMPT 3.4)

> Usado periodicamente para manter qualidade do código

### Quando Refatorar
- [ ] Performance analisada
- [ ] Legibilidade avaliada
- [ ] Duplicação identificada
- [ ] Types verificados (TypeScript strict)
- [ ] Cobertura de testes OK antes de refatorar

### Processo
- [ ] Problemas listados e priorizados
- [ ] Soluções propostas e discutidas
- [ ] Refatoração em pequenos commits
- [ ] Testes continuam passando após cada commit
- [ ] Documentação atualizada

**Status Refatoração**: 🟡 Conforme necessário

---

## 🚀 FASE 10: DEPLOY

> **Objetivo**: Colocar aplicação em produção

### Preparação
- [ ] Build local passou sem erros
- [ ] Todos os testes passando (unit + integration)
- [ ] Variáveis de ambiente documentadas
- [ ] `.env.example` atualizado e completo
- [ ] Secrets não commitados

### Staging
- [ ] Projeto conectado no Vercel (ou plataforma escolhida)
- [ ] Variáveis de ambiente configuradas em staging
- [ ] Deploy realizado em staging
- [ ] Testado em ambiente de staging
- [ ] Migrations aplicadas no banco de staging
- [ ] Sem erros no console do navegador
- [ ] Smoke tests passando

### Produção
- [ ] Aprovação final do cliente
- [ ] Backup do banco (se houver dados)
- [ ] Migrations aplicadas em produção
- [ ] Deploy para produção realizado
- [ ] DNS configurado (se custom domain)
- [ ] SSL funcionando (HTTPS)
- [ ] Monitoramento configurado (Vercel Analytics, etc.)

### Pós-Deploy
- [ ] Smoke tests realizados em produção
- [ ] Métricas sendo acompanhadas
- [ ] Documentação final atualizada
- [ ] Cliente notificado e treinado
- [ ] Handoff realizado
- [ ] Plano de suporte definido

**Status Fase 10**: ⏳ Pendente

---

## 📊 MÉTRICAS DE QUALIDADE

### Código
- [ ] ESLint: 0 erros
- [ ] TypeScript: 0 erros (strict mode)
- [ ] Testes: >80% cobertura em código crítico
- [ ] Build: Sem warnings críticos

### Performance
- [ ] Lighthouse Score: >90
- [ ] First Contentful Paint: <1.5s
- [ ] Time to Interactive: <3s
- [ ] Sem memory leaks detectados

### Segurança
- [ ] Env vars não expostas no código cliente
- [ ] RLS funcionando corretamente
- [ ] Auth implementada corretamente
- [ ] Validação de inputs no backend (Zod)
- [ ] Rate limiting (se necessário)
- [ ] HTTPS obrigatório

### Documentação
- [ ] README completo
- [ ] API documentada
- [ ] Componentes documentados
- [ ] Deploy process documentado
- [ ] Troubleshooting documentado

---

## 🎓 VALIDAÇÃO FINAL

### Técnica
- [ ] Todas as features do MVP funcionando
- [ ] Testes passando (100%)
- [ ] Deploy em produção OK
- [ ] Performance aceitável (Lighthouse >90)
- [ ] Segurança OK (RLS, Auth, Validação)

### Negócio
- [ ] Critérios de aceitação atendidos
- [ ] Cliente aprovou formalmente
- [ ] Métricas de sucesso definidas
- [ ] Plano de suporte definido
- [ ] Documentação de handoff completa

### Documentação
- [ ] Docs completas e atualizadas
- [ ] Código bem comentado
- [ ] Guias de troubleshooting prontos
- [ ] Histórico de mudanças documentado

---

## 🎉 PROJETO COMPLETO!

Se todos os itens acima estão marcados, **parabéns!** 🎊

Seu projeto está:
- ✅ Bem estruturado
- ✅ Bem documentado
- ✅ Bem testado
- ✅ Em produção
- ✅ Pronto para manutenção

---

## 📝 Próximos Passos Pós-Lançamento

1. **Monitoramento**: Acompanhar métricas e erros nas primeiras semanas
2. **Feedback**: Coletar feedback dos usuários iniciais
3. **Iteração**: Planejar melhorias e features pós-MVP
4. **Manutenção**: Manter documentação atualizada
5. **Suporte**: Responder dúvidas e issues

---

**Use este checklist como guia e adapte conforme necessário!**

**Data de Início**: [PREENCHER]
**Data de Conclusão Prevista**: [PREENCHER]
**Data de Lançamento Real**: [PREENCHER]
