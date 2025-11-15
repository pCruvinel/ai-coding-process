# 🚀 Processo Completo de Desenvolvimento com IA Code

Um guia estruturado e prático para desenvolver aplicações web completas utilizando **Claude IA** e **Lovable/v0** como ferramentas principais.

## ⭐ O Que Há de Novo

**Versão 1.0 - Completa** ✅

Este repositório agora está **100% completo** e pronto para uso, incluindo:

- ✅ **10 Fases documentadas** com guias, prompts e checklists
- ✅ **Documentação técnica completa** (`docs/`) com 9 templates
- ✅ **Migrations Supabase** prontas para uso (auth, RLS, triggers)
- ✅ **Skills Claude personalizadas** (4 skills configuradas)
- ✅ **Templates de código** (componentes, hooks, validações)
- ✅ **Checklist mestre** em `planejamento/PROGRESSO.md`
- ✅ **Prompts reutilizáveis** em `.ai/prompts/`

**🚀 Quick Start**: Copie `planejamento/PROGRESSO.md` para seu projeto e comece a marcar!

---

## 📚 Visão Geral

Este repositório contém todos os documentos, prompts, checklists e guias para seguir um processo de desenvolvimento profissional com 10 fases bem definidas:

| Fase | Nome | Status |
|------|------|--------|
| 0 | [Pré-Desenvolvimento](#-fase-0-pré-desenvolvimento) | 📋 |
| 1 | [Design Frontend](#-fase-1-design-frontend) | 🎨 |
| 2 | [Transição para Backend](#-fase-2-transição-para-backend) | 🔄 |
| 3 | [Documentação](#-fase-3-documentação) | 📝 |
| 4 | [Validação](#-fase-4-validação) | ✅ |
| 5 | [Plano Semanal](#-fase-5-plano-semanal) | 📅 |
| 6 | [Skills Claude](#-fase-6-skills-claude) | 🎯 |
| 7 | [Setup Supabase](#-fase-7-setup-supabase) | 🗄️ |
| 8 | [Autenticação](#-fase-8-autenticação) | 🔐 |
| 9 | [Desenvolvimento](#-fase-9-desenvolvimento) | 💻 |
| 10 | [Deploy](#-fase-10-deploy) | 🚀 |

---

## 📋 FASE 0: PRÉ-DESENVOLVIMENTO

**Objetivo**: Definir claramente o que será construído antes de começar qualquer código.

### 📂 Arquivos Principais
- [`planejamento/00-PRE-DESENVOLVIMENTO/`](./planejamento/00-PRE-DESENVOLVIMENTO/) - Documentos da fase
- [`planejamento/00-PRE-DESENVOLVIMENTO/prd.md`](./planejamento/00-PRE-DESENVOLVIMENTO/prd.md) - Product Requirements Document
- [`planejamento/00-PRE-DESENVOLVIMENTO/guia-entrevista.md`](./planejamento/00-PRE-DESENVOLVIMENTO/guia-entrevista.md) - Como conduzir a entrevista
- [`planejamento/00-PRE-DESENVOLVIMENTO/prompt-entrevista.md`](./planejamento/00-PRE-DESENVOLVIMENTO/prompt-entrevista.md) - Prompt para Claude conduzir entrevista
- [`planejamento/00-PRE-DESENVOLVIMENTO/checklist.md`](./planejamento/00-PRE-DESENVOLVIMENTO/checklist.md) - Checklist da fase

### ✅ Checklist da Fase
- [ ] Entrevista com cliente realizada
- [ ] `prd.md` criado com todas as informações
- [ ] Objetivos de negócio claros
- [ ] Personas definidas
- [ ] Features MVP listadas
- [ ] Cliente aprovou PRD

### 🔗 Próxima Fase
Quando completo, prossiga para [Fase 1: Design Frontend](#-fase-1-design-frontend)

---

## 🎨 FASE 1: DESIGN FRONTEND

**Objetivo**: Criar todas as telas e componentes visuais da aplicação.

### 📂 Arquivos Principais
- [`planejamento/01-DESIGN-FRONTEND/`](./planejamento/01-DESIGN-FRONTEND/) - Documentos da fase
- [`planejamento/01-DESIGN-FRONTEND/guia-design.md`](./planejamento/01-DESIGN-FRONTEND/guia-design.md) - Guia completo de design
- [`planejamento/01-DESIGN-FRONTEND/prompt-design.md`](./planejamento/01-DESIGN-FRONTEND/prompt-design.md) - Prompt para Lovable/v0
- [`planejamento/01-DESIGN-FRONTEND/checklist.md`](./planejamento/01-DESIGN-FRONTEND/checklist.md) - Checklist da fase

### ✅ Checklist da Fase
- [ ] Brief de design criado
- [ ] Todas as telas principais criadas
- [ ] Navegação funciona
- [ ] Design responsivo
- [ ] Cliente aprovou design

### 🔗 Próxima Fase
Quando completo, prossiga para [Fase 2: Transição para Backend](#-fase-2-transição-para-backend)

---

## 🔄 FASE 2: TRANSIÇÃO PARA BACKEND

**Objetivo**: Configurar o ambiente local e preparar o repositório para desenvolvimento.

### 📂 Arquivos Principais
- [`planejamento/02-TRANSICAO-BACKEND/`](./planejamento/02-TRANSICAO-BACKEND/) - Documentos da fase
- [`planejamento/02-TRANSICAO-BACKEND/guia-setup.md`](./planejamento/02-TRANSICAO-BACKEND/guia-setup.md) - Guia de setup
- [`planejamento/02-TRANSICAO-BACKEND/estrutura-pastas.md`](./planejamento/02-TRANSICAO-BACKEND/estrutura-pastas.md) - Estrutura de pastas padrão
- [`planejamento/02-TRANSICAO-BACKEND/checklist.md`](./planejamento/02-TRANSICAO-BACKEND/checklist.md) - Checklist da fase

### ✅ Checklist da Fase
- [ ] Repositório clonado
- [ ] Dependências instaladas
- [ ] Projeto roda localmente
- [ ] Estrutura de pastas criada

### 🔗 Próxima Fase
Quando completo, prossiga para [Fase 3: Documentação](#-fase-3-documentação)

---

## 📝 FASE 3: DOCUMENTAÇÃO

**Objetivo**: Documentar completamente a arquitetura, banco de dados e especificação técnica.

### 📂 Arquivos Principais
- [`docs/`](./docs/) - Documentação completa
- [`docs/01-VISAO-GERAL.md`](./docs/01-VISAO-GERAL.md) - Visão geral do projeto
- [`docs/02-ARQUITETURA.md`](./docs/02-ARQUITETURA.md) - Arquitetura técnica
- [`docs/03-ESPECIFICACAO.md`](./docs/03-ESPECIFICACAO.md) - Especificação funcional
- [`docs/04-BANCO-DE-DADOS.md`](./docs/04-BANCO-DE-DADOS.md) - Schema do banco
- [`docs/05-API.md`](./docs/05-API.md) - Documentação de API
- [`planejamento/03-DOCUMENTACAO/prompt-analise.md`](./planejamento/03-DOCUMENTACAO/prompt-analise.md) - Prompt para análise
- [`planejamento/03-DOCUMENTACAO/template-docs.md`](./planejamento/03-DOCUMENTACAO/template-docs.md) - Templates

### ✅ Checklist da Fase
- [ ] PRD analisado
- [ ] Frontend export analisado
- [ ] Documentos criados
- [ ] Contexto IA preparado

### 🔗 Próxima Fase
Quando completo, prossiga para [Fase 4: Validação](#-fase-4-validação)

---

## ✅ FASE 4: VALIDAÇÃO

**Objetivo**: Validar consistência, completude e viabilidade de todo o plano.

### 📂 Arquivos Principais
- [`planejamento/04-VALIDACAO/`](./planejamento/04-VALIDACAO/) - Documentos da fase
- [`planejamento/04-VALIDACAO/prompt-validacao.md`](./planejamento/04-VALIDACAO/prompt-validacao.md) - Prompt de validação
- [`planejamento/04-VALIDACAO/checklist.md`](./planejamento/04-VALIDACAO/checklist.md) - Checklist

### ✅ Checklist da Fase
- [ ] Consistência verificada
- [ ] Completude confirmada
- [ ] Relatório de validação gerado

### 🔗 Próxima Fase
Quando completo, prossiga para [Fase 5: Plano Semanal](#-fase-5-plano-semanal)

---

## 📅 FASE 5: PLANO SEMANAL

**Objetivo**: Criar um plano semanal detalhado com tasks do dia a dia.

### 📂 Arquivos Principais
- [`planejamento/05-PLANO-SEMANAL/`](./planejamento/05-PLANO-SEMANAL/) - Documentos da fase
- [`planejamento/05-PLANO-SEMANAL/prompt-plano-semanal.md`](./planejamento/05-PLANO-SEMANAL/prompt-plano-semanal.md) - Prompt de geração
- [`planejamento/05-PLANO-SEMANAL/plano-semanal.md`](./planejamento/05-PLANO-SEMANAL/plano-semanal.md) - Plano gerado
- [`planejamento/05-PLANO-SEMANAL/progresso.md`](./planejamento/05-PLANO-SEMANAL/progresso.md) - Rastreamento de progresso

### ✅ Checklist da Fase
- [ ] Plano semanal criado
- [ ] Tasks distribuídas por dia
- [ ] Progresso rastreável

### 🔗 Próxima Fase
Quando completo, prossiga para [Fase 6: Skills Claude](#-fase-6-skills-claude)

---

## 🎯 FASE 6: SKILLS CLAUDE

**Objetivo**: Criar skills personalizadas para facilitar o desenvolvimento com Claude IA.

### 📂 Arquivos Principais
- [`.claude/skills/`](./.claude/skills/) - Skills do projeto
- [`planejamento/06-SKILLS/`](./planejamento/06-SKILLS/) - Documentos da fase
- [`planejamento/06-SKILLS/prompt-skills.md`](./planejamento/06-SKILLS/prompt-skills.md) - Guia de criação
- [`planejamento/06-SKILLS/inventario.md`](./planejamento/06-SKILLS/inventario.md) - Inventário de skills

### ✅ Checklist da Fase
- [ ] Skill: Contexto do Projeto
- [ ] Skill: Padrões de Código
- [ ] Skill: Checklist de Feature
- [ ] Skill: Debugging Guide

### 🔗 Próxima Fase
Quando completo, prossiga para [Fase 7: Setup Supabase](#-fase-7-setup-supabase)

---

## 🗄️ FASE 7: SETUP SUPABASE

**Objetivo**: Configurar o banco de dados e RLS (Row Level Security).

### 📂 Arquivos Principais
- [`supabase/migrations/`](./supabase/migrations/) - Migrations do banco
- [`planejamento/07-SUPABASE/`](./planejamento/07-SUPABASE/) - Documentos da fase
- [`planejamento/07-SUPABASE/guia-supabase.md`](./planejamento/07-SUPABASE/guia-supabase.md) - Guia completo
- [`planejamento/07-SUPABASE/template-migrations.md`](./planejamento/07-SUPABASE/template-migrations.md) - Templates de migration

### ✅ Checklist da Fase
- [ ] Projeto Supabase criado
- [ ] Tabelas criadas
- [ ] Triggers configurados
- [ ] RLS implementado

### 🔗 Próxima Fase
Quando completo, prossiga para [Fase 8: Autenticação](#-fase-8-autenticação)

---

## 🔐 FASE 8: AUTENTICAÇÃO

**Objetivo**: Implementar sistema completo de autenticação e autorização.

### 📂 Arquivos Principais
- [`planejamento/08-AUTENTICACAO/`](./planejamento/08-AUTENTICACAO/) - Documentos da fase
- [`planejamento/08-AUTENTICACAO/guia-auth.md`](./planejamento/08-AUTENTICACAO/guia-auth.md) - Guia de implementação
- [`planejamento/08-AUTENTICACAO/prompt-auth.md`](./planejamento/08-AUTENTICACAO/prompt-auth.md) - Prompt para implementação
- [`planejamento/08-AUTENTICACAO/checklist.md`](./planejamento/08-AUTENTICACAO/checklist.md) - Checklist

### ✅ Checklist da Fase
- [ ] Clientes Supabase configurados
- [ ] Componentes de auth criados
- [ ] Middleware implementado
- [ ] Hooks criados

### 🔗 Próxima Fase
Quando completo, prossiga para [Fase 9: Desenvolvimento](#-fase-9-desenvolvimento)

---

## 💻 FASE 9: DESENVOLVIMENTO

**Objetivo**: Implementar todas as features seguindo a especificação.

### 📂 Arquivos Principais
- [`planejamento/09-DESENVOLVIMENTO/`](./planejamento/09-DESENVOLVIMENTO/) - Documentos da fase
- [`planejamento/09-DESENVOLVIMENTO/prompt-setup-dia1.md`](./planejamento/09-DESENVOLVIMENTO/prompt-setup-dia1.md) - Setup do dia 1
- [`planejamento/09-DESENVOLVIMENTO/prompt-feature.md`](./planejamento/09-DESENVOLVIMENTO/prompt-feature.md) - Template de feature
- [`planejamento/09-DESENVOLVIMENTO/checklist-feature.md`](./planejamento/09-DESENVOLVIMENTO/checklist-feature.md) - Checklist por feature

### ✅ Checklist da Fase
- [ ] Setup completo
- [ ] Features implementadas
- [ ] Testes escritos
- [ ] Código documentado

### 🔗 Próxima Fase
Quando completo, prossiga para [Fase 10: Deploy](#-fase-10-deploy)

---

## 🚀 FASE 10: DEPLOY

**Objetivo**: Colocar a aplicação em produção.

### 📂 Arquivos Principais
- [`planejamento/10-DEPLOY/`](./planejamento/10-DEPLOY/) - Documentos da fase
- [`planejamento/10-DEPLOY/guia-deploy.md`](./planejamento/10-DEPLOY/guia-deploy.md) - Guia de deploy
- [`planejamento/10-DEPLOY/checklist-staging.md`](./planejamento/10-DEPLOY/checklist-staging.md) - Checklist staging
- [`planejamento/10-DEPLOY/checklist-producao.md`](./planejamento/10-DEPLOY/checklist-producao.md) - Checklist produção

### ✅ Checklist da Fase
- [ ] Build passou
- [ ] Staging testado
- [ ] Produção em ar

### 🔗 Projeto Completo!
Parabéns! 🎉

---

## 🎓 Como Usar Este Repositório

### 1. **Comece na Fase 0**
Leia [`planejamento/00-PRE-DESENVOLVIMENTO/README.md`](./planejamento/00-PRE-DESENVOLVIMENTO/README.md)

### 2. **Siga as Fases em Sequência**
Cada fase tem:
- 📋 Checklist clara
- 📚 Documentação completa
- 🤖 Prompts para Claude
- 🎯 Objetivos bem definidos

### 3. **Customize Conforme Necessário**
- Adapte os prompts para seu projeto
- Ajuste checklists se necessário
- Reutilize templates

### 4. **Mantenha Documentação Atualizada**
Durante o desenvolvimento, atualize:
- Documentação técnica
- Progresso
- Decisões

---

## 📊 Estrutura de Pastas

```
ai-coding-process/
├── README.md                          ← Você está aqui
├── CONTRIBUTING.md                    ← Guia para contribuidores
│
├── docs/                              ← ✨ Documentação técnica (templates)
│   ├── README.md
│   ├── 01-VISAO-GERAL.md             ← Template: visão geral do projeto
│   ├── 02-ARQUITETURA.md             ← Template: arquitetura técnica
│   ├── 03-ESPECIFICACAO.md           ← Template: especificação funcional
│   ├── 04-BANCO-DE-DADOS.md          ← Template: schema do banco
│   ├── 05-API.md                     ← Template: documentação de API
│   ├── 06-COMPONENTES.md             ← Template: componentes React
│   ├── 07-DEPLOY.md                  ← Template: guia de deploy
│   ├── 08-TESTES.md                  ← Template: estratégia de testes
│   └── 09-HISTORICO.md               ← Template: histórico e ADRs
│
├── planejamento/                      ← Guias de processo (10 fases)
│   ├── PROGRESSO.md                  ← ✨ CHECKLIST MESTRE (tracking)
│   ├── 00-PRE-DESENVOLVIMENTO/       ← Fase 0: PRD e entrevista
│   ├── 01-DESIGN-FRONTEND/           ← Fase 1: Design (Figma/v0)
│   ├── 02-TRANSICAO-BACKEND/         ← Fase 2: Setup ambiente
│   ├── 03-DOCUMENTACAO/              ← Fase 3: Docs técnicos
│   ├── 04-VALIDACAO/                 ← Fase 4: Validação
│   ├── 05-PLANO-SEMANAL/             ← Fase 5: Plano semanal
│   ├── 06-SKILLS-CLAUDE/             ← Fase 6: Skills Claude
│   ├── 07-SUPABASE/                  ← Fase 7: Setup Supabase
│   ├── 08-AUTENTICACAO/              ← Fase 8: Sistema de auth
│   ├── 09-DESENVOLVIMENTO/           ← Fase 9: Desenvolvimento
│   └── 10-DEPLOY/                    ← Fase 10: Deploy
│
├── .ai/                               ← ✨ Contextos e prompts para IA
│   ├── README.md
│   ├── contexto-projeto-template.md  ← Template de contexto
│   ├── decisoes-tecnicas.md          ← Template de ADRs
│   ├── frontend-export.md            ← Template para código do design
│   └── prompts/                      ← Prompts reutilizáveis
│       ├── criar-feature.md
│       ├── debugging.md
│       └── refatoracao.md
│
├── .claude/                           ← ✨ Skills e commands Claude
│   └── skills/                       ← Skills personalizadas
│       ├── INVENTARIO.md             ← Lista de todas as skills
│       ├── 01-contexto-projeto/      ← Skill: contexto
│       ├── 02-padroes-codigo/        ← Skill: padrões
│       ├── 03-checklist-feature/     ← Skill: checklist
│       └── 04-debugging-guide/       ← Skill: debugging
│
├── supabase/                          ← ✨ Banco de dados (migrations prontas)
│   ├── README.md                     ← Guia de uso das migrations
│   ├── migrations/
│   │   ├── 20240101000000_create_roles.sql          ← Tabela de roles
│   │   ├── 20240101000001_create_users.sql          ← Tabela de users
│   │   ├── 20240101000002_create_user_trigger.sql   ← Trigger auto signup
│   │   └── 20240101000003_create_helper_functions.sql ← Functions úteis
│   └── seed.sql                      ← Dados iniciais (opcional)
│
└── templates/                         ← ✨ Templates de código
    ├── README.md
    ├── components/                   ← Componentes React exemplo
    │   ├── server-component-example.tsx
    │   └── client-component-example.tsx
    ├── hooks/                        ← Custom hooks exemplo
    │   └── use-data-example.ts
    └── lib/                          ← Utilities exemplo
        └── validation-example.ts
```

**✨ = Novo nesta versão**

---

## 🚀 Quick Start

1. **Clone este repositório**
   ```bash
   git clone <repo-url>
   cd ai-coding-process
   ```

2. **Comece na Fase 0**
   - Leia o PRD
   - Conduct a entrevista com o cliente
   - Aprove o escopo

3. **Prossiga para Fase 1**
   - Design no Lovable/v0
   - Cliente aprova design
   - Export o código

4. **Continue até Fase 10**
   - Siga o plano semanal
   - Checagem frequente
   - Deploy quando pronto

---

## 💡 Tips & Tricks

### Usando com Claude IA
1. Ative a skill **Contexto do Projeto**
2. Cole o prompt correspondente à fase
3. Claude fornecerá análise e próximos passos

### Maximizando Produtividade
- Use checklists frequentemente
- Atualize progresso diariamente
- Revise plano semanalmente
- Documente decisões importantes

### Troubleshooting
Cada fase tem um `guia-*.md` com soluções comuns

---

## 📝 Licença

Este processo é fornecido como está, para uso em seus projetos.

---

## 🤝 Contribuições

Se você melhorar este processo, considere compartilhar suas mudanças!

---

## 📞 Suporte

Para dúvidas ou sugestões sobre as fases, consulte os respectivos `README.md` em cada pasta.

---

**Última atualização**: 15 de Novembro de 2024
**Versão**: 1.0.0
**Status**: ✅ 100% Completo e Pronto para Uso
