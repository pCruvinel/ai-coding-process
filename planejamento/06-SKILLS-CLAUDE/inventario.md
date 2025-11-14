# 📚 Inventário de Claude Code Skills

## Visão Geral

Este documento mantém um inventário completo de todas as skills disponíveis para Claude Code em projetos Dizevolv, organizadas por categoria e complexidade.

---

## 🎯 Skills Essenciais (Básicas)

Estas são as skills fundamentais que devem estar disponíveis em todos os projetos Dizevolv.

### 01. Contexto do Projeto
**Path**: `.claude/skills/01-contexto-projeto/SKILL.md`
**Status**: ✅ Implementada
**Última atualização**: 2025-01-14

**Descrição**: Fornece contexto completo dos projetos Dizevolv, incluindo stack tecnológica, estrutura de diretórios, convenções e melhores práticas.

**Quando usar**:
- No início de qualquer tarefa em um projeto Dizevolv
- Ao onboarding de novo desenvolvedor
- Para relembrar padrões e convenções

**Conteúdo**:
- Stack tecnológica padrão (Next.js, Tailwind v4, Shadcn, Supabase, n8n)
- Estrutura de diretórios
- Padrões de nomenclatura
- Convenções de código TypeScript e React
- Integração com Supabase
- Segurança e performance
- Comandos úteis

---

### 02. Padrões de Código
**Path**: `.claude/skills/02-padroes-codigo/SKILL.md`
**Status**: ✅ Implementada
**Última atualização**: 2025-01-14

**Descrição**: Garante que todo código escrito siga os padrões de qualidade, segurança e consistência estabelecidos pela Dizevolv.

**Quando usar**:
- Ao escrever qualquer código novo
- Durante code review
- Para garantir conformidade com padrões

**Conteúdo**:
- Princípios fundamentais (Clean Code, Type Safety, Segurança)
- Padrões por camada (Componentes, API Routes, Queries Supabase, Hooks)
- Padrões de estilização Tailwind CSS
- Checklist de segurança
- Checklist de performance
- Acessibilidade
- Code review checklist

---

### 03. Checklist de Feature
**Path**: `.claude/skills/03-checklist-feature/SKILL.md`
**Status**: ✅ Implementada
**Última atualização**: 2025-01-14

**Descrição**: Checklist completo e estruturado para implementar features, garantindo qualidade, segurança e completude.

**Quando usar**:
- Ao iniciar implementação de qualquer feature nova
- Para garantir que nada seja esquecido
- Durante validação de feature completa

**Conteúdo**:
- 12 fases de implementação:
  1. Planejamento
  2. Database (Supabase)
  3. Frontend
  4. API Routes
  5. Testes
  6. Segurança
  7. Performance
  8. Acessibilidade
  9. Responsividade
  10. Documentação
  11. Review & QA
  12. Deploy
- Exemplos práticos para cada fase
- Checklist resumido para uso rápido

---

### 04. Debugging Guide
**Path**: `.claude/skills/04-debugging-guide/SKILL.md`
**Status**: ✅ Implementada
**Última atualização**: 2025-01-14

**Descrição**: Guia completo para diagnosticar e resolver problemas comuns em projetos Next.js + Supabase.

**Quando usar**:
- Ao encontrar qualquer erro ou comportamento inesperado
- Durante troubleshooting
- Para resolver problemas de forma sistemática

**Conteúdo**:
- Metodologia de debugging (4 passos)
- Problemas comuns e soluções:
  - Next.js (hydration, hooks, modules)
  - Supabase (API key, RLS, auth, queries)
  - CSS/Tailwind (classes dinâmicas)
  - Autenticação (redirect loops)
  - TypeScript (type errors)
- Ferramentas de debugging
- Checklist de debugging
- Como lidar com erros críticos de produção
- Dicas de prevenção

---

## 🔧 Skills Intermediárias (Em Desenvolvimento)

Estas skills cobrem funcionalidades mais específicas e complexas.

### 05. Autenticação e Autorização
**Path**: `.claude/skills/05-autenticacao/SKILL.md`
**Status**: 📋 Planejada
**Prioridade**: Alta

**Escopo**:
- Setup inicial Supabase Auth
- Fluxos de autenticação (Email/Password, Magic Link, OAuth)
- Server vs Client authentication
- Middleware e route protection
- RLS policies avançadas
- Gestão de sessões
- Refresh tokens
- Multi-tenancy

**Quando implementar**: Antes da Fase 8 (Autenticação) do processo

---

### 06. Upload e Storage
**Path**: `.claude/skills/06-upload-storage/SKILL.md`
**Status**: 📋 Planejada
**Prioridade**: Alta

**Escopo**:
- Supabase Storage setup
- Upload de imagens (client e server)
- Upload de arquivos
- Otimização de imagens
- Validação de tipos e tamanhos
- CDN e URLs públicas/privadas
- Segurança e RLS para storage
- Integração com next/image

**Quando implementar**: Quando primeiro projeto precisar de uploads

---

### 07. Real-time e Subscriptions
**Path**: `.claude/skills/07-realtime/SKILL.md`
**Status**: 📋 Planejada
**Prioridade**: Média

**Escopo**:
- Supabase Realtime setup
- Database subscriptions
- Broadcast e Presence
- Client-side listening
- Performance e cleanup
- Use cases comuns (chat, notificações, colaboração)

**Quando implementar**: Quando primeiro projeto precisar de real-time

---

### 08. Email e Notificações
**Path**: `.claude/skills/08-email-notificacoes/SKILL.md`
**Status**: 📋 Planejada
**Prioridade**: Média

**Escopo**:
- Configuração de email provider (Resend, SendGrid)
- Templates de email
- Email transacional
- Notificações in-app
- Notificações push (opcional)
- Supabase Edge Functions para emails

**Quando implementar**: Quando primeiro projeto precisar de emails

---

### 09. Integração com APIs Externas
**Path**: `.claude/skills/09-integracao-apis/SKILL.md`
**Status**: 📋 Planejada
**Prioridade**: Média

**Escopo**:
- Padrões de integração de APIs
- Autenticação (API keys, OAuth)
- Rate limiting
- Retry e error handling
- Webhooks
- Caching de respostas
- Testing de integrações

**Quando implementar**: Quando primeiro projeto precisar integrar API externa

---

## 🚀 Skills Avançadas (Futuras)

Estas skills cobrem tópicos avançados e especializados.

### 10. n8n Workflows e Agentes IA
**Path**: `.claude/skills/10-n8n-workflows/SKILL.md`
**Status**: 📋 Planejada
**Prioridade**: Alta (especificidade Dizevolv)

**Escopo**:
- Setup n8n
- Integração Next.js ↔ n8n
- Webhooks seguros
- Agentes de IA com n8n
- Workflows comuns
- Debugging de workflows
- Segurança e autenticação

**Quando implementar**: Quando primeiro projeto precisar de automação/agentes

---

### 11. Pagamentos (Stripe)
**Path**: `.claude/skills/11-pagamentos-stripe/SKILL.md`
**Status**: 📋 Planejada
**Prioridade**: Alta (monetização)

**Escopo**:
- Setup Stripe
- Checkout único
- Assinaturas (subscriptions)
- Webhooks Stripe
- Gerenciamento de assinaturas
- Billing portal
- Testes com Stripe CLI

**Quando implementar**: Quando primeiro projeto precisar de pagamentos

---

### 12. Performance Optimization
**Path**: `.claude/skills/12-performance/SKILL.md`
**Status**: 📋 Planejada
**Prioridade**: Média

**Escopo**:
- Core Web Vitals
- Next.js optimizations (ISR, SSG, SSR, Streaming)
- Bundle size analysis
- Image optimization avançada
- Database query optimization
- Caching strategies (React Cache, ISR, CDN)
- Monitoring e profiling

**Quando implementar**: Após alguns projetos em produção

---

### 13. SEO e Meta Tags
**Path**: `.claude/skills/13-seo/SKILL.md`
**Status**: 📋 Planejada
**Prioridade**: Média

**Escopo**:
- Metadata API do Next.js
- Open Graph e Twitter Cards
- Sitemap e robots.txt
- Structured data (JSON-LD)
- SEO best practices para SaaS
- Analytics e tracking

**Quando implementar**: Quando foco em SEO for crítico

---

### 14. Internacionalização (i18n)
**Path**: `.claude/skills/14-i18n/SKILL.md`
**Status**: 📋 Planejada
**Prioridade**: Baixa

**Escopo**:
- Next.js i18n setup
- next-intl ou react-i18next
- Estrutura de traduções
- Formatação de datas/números
- RTL support
- SEO multilingual

**Quando implementar**: Quando primeiro projeto internacional

---

### 15. Testing Strategies
**Path**: `.claude/skills/15-testing/SKILL.md`
**Status**: 📋 Planejada
**Prioridade**: Média

**Escopo**:
- Unit tests (Vitest)
- Integration tests
- E2E tests (Playwright)
- Testing Supabase
- Testing Next.js components
- CI/CD integration
- Test coverage

**Quando implementar**: Quando processo de testes for definido

---

### 16. Deploy e CI/CD
**Path**: `.claude/skills/16-deploy-cicd/SKILL.md`
**Status**: 📋 Planejada
**Prioridade**: Alta

**Escopo**:
- Vercel deploy setup
- Ambientes (dev, staging, prod)
- Environment variables management
- GitHub Actions
- Supabase migrations em CI/CD
- Preview deployments
- Rollback strategies

**Quando implementar**: Antes da Fase 10 (Deploy) do processo

---

### 17. Monitoring e Analytics
**Path**: `.claude/skills/17-monitoring/SKILL.md`
**Status**: 📋 Planejada
**Prioridade**: Média

**Escopo**:
- Error tracking (Sentry)
- Performance monitoring
- User analytics
- Log aggregation
- Alerting
- Dashboard de métricas

**Quando implementar**: Após alguns projetos em produção

---

### 18. Security Best Practices
**Path**: `.claude/skills/18-security/SKILL.md`
**Status**: 📋 Planejada
**Prioridade**: Alta

**Escopo**:
- OWASP Top 10 prevention
- Security headers
- CSRF protection
- XSS prevention
- SQL injection (via Supabase)
- Rate limiting avançado
- Security audits checklist
- Secrets management

**Quando implementar**: Antes de primeiro projeto em produção

---

## 📊 Estatísticas

### Por Status
- ✅ **Implementadas**: 4
- 📋 **Planejadas**: 14
- **Total**: 18 skills

### Por Prioridade
- **Alta**: 5 skills
- **Média**: 8 skills
- **Baixa**: 1 skill
- **Implementadas**: 4 skills

### Por Complexidade
- **Básicas (Essenciais)**: 4 skills ✅
- **Intermediárias**: 5 skills 📋
- **Avançadas**: 9 skills 📋

---

## 🎯 Roadmap de Implementação

### Q1 2025 (Imediato)
1. ✅ Contexto do Projeto
2. ✅ Padrões de Código
3. ✅ Checklist de Feature
4. ✅ Debugging Guide
5. 📋 Autenticação e Autorização (próxima)
6. 📋 Deploy e CI/CD (próxima)

### Q2 2025
7. 📋 n8n Workflows e Agentes IA
8. 📋 Upload e Storage
9. 📋 Pagamentos (Stripe)
10. 📋 Email e Notificações

### Q3 2025
11. 📋 Real-time e Subscriptions
12. 📋 Integração com APIs Externas
13. 📋 Security Best Practices
14. 📋 Performance Optimization

### Q4 2025
15. 📋 Testing Strategies
16. 📋 SEO e Meta Tags
17. 📋 Monitoring e Analytics
18. 📋 Internacionalização (i18n)

---

## 💡 Skills Específicas de Domínio

Além das skills gerais acima, projetos específicos podem precisar de skills de domínio:

### Exemplos de Skills de Domínio

#### E-commerce
- Sistema de carrinho
- Checkout flow
- Gestão de inventário
- Sistema de cupons

#### SaaS
- Onboarding de usuários
- Feature flags
- Usage tracking e billing
- Multi-workspace

#### CMS
- Content management
- Media library
- Versioning
- Publishing workflow

#### Marketplace
- Sistema de reviews
- Matching algorithms
- Sistema de comissões
- Dispute resolution

**Nota**: Skills de domínio devem ser criadas conforme necessidade de cada projeto específico.

---

## 🔄 Processo de Manutenção

### Revisão Trimestral
- Revisar skills existentes
- Atualizar para novas versões de libs
- Incorporar feedback da equipe
- Adicionar novos casos de uso

### Quando Criar Nova Skill
1. Identificar padrão repetitivo
2. Validar com equipe
3. Planejar conteúdo
4. Implementar seguindo `prompt-skills.md`
5. Adicionar ao inventário
6. Comunicar à equipe

### Quando Atualizar Skill Existente
1. Identificar mudança necessária
2. Atualizar conteúdo mantendo estrutura
3. Atualizar data de última atualização
4. Comunicar mudanças significativas

---

## 📖 Como Usar Este Inventário

### Para Desenvolvedores
1. **Consultar**: Ver skills disponíveis e quando usar
2. **Referência**: Links diretos para cada skill
3. **Feedback**: Sugerir melhorias ou novas skills

### Para Líderes Técnicos
1. **Priorização**: Decidir próximas skills a implementar
2. **Gaps**: Identificar conhecimento faltante
3. **Onboarding**: Lista de skills essenciais para novos devs

### Para Product Managers
1. **Capacidades**: Entender capacidades técnicas da equipe
2. **Planejamento**: Saber quais features têm suporte de skills
3. **Roadmap**: Alinhar roadmap de produto com skills disponíveis

---

## 🤝 Contribuindo

### Sugerir Nova Skill
1. Abrir issue descrevendo:
   - Nome da skill
   - Propósito
   - Escopo (o que incluir)
   - Use cases
   - Prioridade sugerida

### Melhorar Skill Existente
1. Identificar skill e seção a melhorar
2. Sugerir mudanças específicas
3. Fornecer exemplos ou casos de uso

### Reportar Problema
1. Identificar skill problemática
2. Descrever o problema (informação incorreta, desatualizada, confusa)
3. Sugerir correção se possível

---

## 📚 Recursos Relacionados

- [Guia de Criação de Skills](./prompt-skills.md) - Como criar novas skills
- [README da Fase 6](./README.md) - Visão geral da fase de skills
- [Processo Completo](../README.md) - Processo completo de desenvolvimento

---

**Última atualização**: 2025-01-14
**Versão**: 1.0
**Mantido por**: Equipe Dizevolv
