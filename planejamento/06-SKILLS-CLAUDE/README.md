# 🎯 FASE 6: SKILLS CLAUDE

## Visão Geral

Criar skills personalizadas para Claude Code que facilitam o desenvolvimento em projetos Dizevolv, fornecendo contexto, padrões e guias específicos para a stack Next.js + Supabase.

**Duração**: 1 dia
**Responsável**: Tech Lead
**Stack**: Next.js, Tailwind CSS v4, Shadcn/ui, Supabase, n8n

---

## 🎯 Objetivos

1. ✅ Criar skill de contexto do projeto (stack, estrutura, convenções)
2. ✅ Criar skill de padrões de código (qualidade, segurança, consistência)
3. ✅ Criar skill de checklist de feature (processo completo de implementação)
4. ✅ Criar skill de debugging guide (resolver problemas comuns)
5. ✅ Documentar guia de criação de novas skills
6. ✅ Criar inventário de skills disponíveis e planejadas

---

## 📂 Arquivos Nesta Fase

### Skills Criadas
- [`.claude/skills/01-contexto-projeto/SKILL.md`](../../.claude/skills/01-contexto-projeto/SKILL.md) - Contexto completo dos projetos Dizevolv
- [`.claude/skills/02-padroes-codigo/SKILL.md`](../../.claude/skills/02-padroes-codigo/SKILL.md) - Padrões de código e boas práticas
- [`.claude/skills/03-checklist-feature/SKILL.md`](../../.claude/skills/03-checklist-feature/SKILL.md) - Checklist completo para implementar features
- [`.claude/skills/04-debugging-guide/SKILL.md`](../../.claude/skills/04-debugging-guide/SKILL.md) - Guia de debugging e troubleshooting

### Documentação
- [`prompt-skills.md`](./prompt-skills.md) - Guia completo para criar novas skills
- [`inventario.md`](./inventario.md) - Inventário de todas as skills (implementadas e planejadas)
- [`README.md`](./README.md) - Este arquivo

---

## 🔄 Fluxo da Fase

```
┌─────────────────────────────────────────────────────────────┐
│                   FASE 6: SKILLS CLAUDE                     │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │   1. Criar Estrutura    │
              │   .claude/skills/       │
              └─────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │  2. Skill: Contexto     │
              │  Stack, estrutura       │
              └─────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │  3. Skill: Padrões      │
              │  Código, segurança      │
              └─────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │  4. Skill: Checklist    │
              │  Processo de feature    │
              └─────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │  5. Skill: Debugging    │
              │  Resolver problemas     │
              └─────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │  6. Documentar          │
              │  Guias e inventário     │
              └─────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │  7. Testar Skills       │
              │  Validar com Claude     │
              └─────────────────────────┘
                            │
                            ▼
                 ✅ Skills Prontas!
                            │
                            ▼
                    FASE 7: Supabase
```

---

## 💡 O que são Skills?

Skills são arquivos markdown que o Claude Code lê para obter contexto específico do projeto. Funcionam como:

- 🧠 **Memória de longo prazo** - Claude lembra de padrões e convenções
- 📚 **Documentação viva** - Sempre disponível e atualizada
- 🎯 **Guias práticos** - Exemplos de código e checklists
- 🔒 **Garantia de qualidade** - Padrões de segurança e performance

### Como Funciona

```bash
# Estrutura
.claude/skills/
├── 01-contexto-projeto/
│   └── SKILL.md          # Claude lê automaticamente
├── 02-padroes-codigo/
│   └── SKILL.md
└── ...

# Uso no Claude Code
# Skills são carregadas automaticamente
# Você pode referenciar: "siga os padrões da skill de código"
```

---

## 📖 Detalhamento das Skills

### 1️⃣ Contexto do Projeto

**Arquivo**: `.claude/skills/01-contexto-projeto/SKILL.md`

**Conteúdo**:
- Stack tecnológica padrão Dizevolv
- Estrutura de diretórios
- Padrões de nomenclatura
- Convenções TypeScript e React
- Integração com Supabase
- Comandos úteis

**Quando usar**:
- Início de qualquer tarefa
- Onboarding de novos desenvolvedores
- Para relembrar convenções

---

### 2️⃣ Padrões de Código

**Arquivo**: `.claude/skills/02-padroes-codigo/SKILL.md`

**Conteúdo**:
- Princípios fundamentais (Clean Code, Type Safety, Segurança)
- Padrões por camada:
  - Server Components
  - Client Components
  - API Routes
  - Supabase Queries
  - Custom Hooks
  - Estilização Tailwind
- Checklist de segurança
- Checklist de performance
- Acessibilidade
- Code review checklist

**Quando usar**:
- Ao escrever código novo
- Durante code review
- Para garantir qualidade

---

### 3️⃣ Checklist de Feature

**Arquivo**: `.claude/skills/03-checklist-feature/SKILL.md`

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
- Exemplos práticos
- Checklist resumido

**Quando usar**:
- Ao iniciar qualquer feature nova
- Para garantir completude
- Durante validação pré-deploy

---

### 4️⃣ Debugging Guide

**Arquivo**: `.claude/skills/04-debugging-guide/SKILL.md`

**Conteúdo**:
- Metodologia de debugging
- Problemas comuns e soluções:
  - Next.js (hydration, hooks, modules)
  - Supabase (API key, RLS, auth, queries)
  - CSS/Tailwind
  - Autenticação
  - TypeScript
- Ferramentas de debugging
- Checklist de debugging
- Como lidar com erros de produção

**Quando usar**:
- Ao encontrar erros
- Durante troubleshooting
- Para resolver problemas sistematicamente

---

## 🚀 Como Começar

### Passo 1: Criar Estrutura de Diretórios
```bash
# Criar diretórios das skills
mkdir -p .claude/skills/{01-contexto-projeto,02-padroes-codigo,03-checklist-feature,04-debugging-guide}
```

### Passo 2: Criar Skills
Para cada skill:
1. Abrir o arquivo `SKILL.md` no diretório correspondente
2. Seguir o template em [`prompt-skills.md`](./prompt-skills.md)
3. Incluir:
   - Descrição clara
   - Exemplos práticos
   - Checklists
   - Referências

### Passo 3: Testar Skills
```bash
# No Claude Code, referenciar as skills
"Seguindo os padrões da skill de código..."
"De acordo com o checklist de feature..."
"Usando a skill de contexto do projeto..."
```

### Passo 4: Iterar
- Coletar feedback do uso
- Atualizar skills conforme necessário
- Adicionar novos exemplos

---

## ✅ Checklist Rápida

### Criação de Skills
- [x] Diretório `.claude/skills/` criado
- [x] Skill 01: Contexto do Projeto
- [x] Skill 02: Padrões de Código
- [x] Skill 03: Checklist de Feature
- [x] Skill 04: Debugging Guide

### Documentação
- [x] `prompt-skills.md` - Guia de criação
- [x] `inventario.md` - Inventário completo
- [x] README.md atualizado

### Validação
- [ ] Skills testadas com Claude Code
- [ ] Exemplos verificados
- [ ] Feedback coletado
- [ ] Ajustes realizados

---

## 🎓 Exemplos de Uso

### Exemplo 1: Iniciar Nova Feature
```markdown
# No Claude Code
"Vou implementar um sistema de comentários.
Siga o checklist de feature e os padrões de código."

# Claude vai:
1. Consultar skill 03 (Checklist de Feature)
2. Aplicar padrões da skill 02 (Padrões de Código)
3. Seguir as 12 fases
4. Garantir qualidade e completude
```

### Exemplo 2: Resolver Bug
```markdown
# No Claude Code
"Estou tendo erro de hydration no Next.js.
Use o debugging guide para me ajudar."

# Claude vai:
1. Consultar skill 04 (Debugging Guide)
2. Identificar seção de hydration errors
3. Fornecer diagnóstico
4. Sugerir soluções práticas
```

### Exemplo 3: Code Review
```markdown
# No Claude Code
"Revise este componente seguindo nossos padrões."

# Claude vai:
1. Consultar skill 02 (Padrões de Código)
2. Verificar checklist de code review
3. Identificar problemas
4. Sugerir melhorias específicas
```

---

## 📊 Métricas de Sucesso

### Skills Criadas
- ✅ **4 skills essenciais** implementadas
- ✅ **100% documentadas** com exemplos
- 📋 **14 skills planejadas** para futuro

### Qualidade
- ✅ Exemplos práticos em todas as skills
- ✅ Checklists acionáveis
- ✅ Padrões específicos para stack Dizevolv
- ✅ Casos de uso reais

### Impacto Esperado
- ⚡ **Redução de 40%** no tempo de onboarding
- 🎯 **Maior consistência** de código entre projetos
- 🔒 **Menos vulnerabilidades** de segurança
- 📈 **Melhor qualidade** geral do código

---

## 🔮 Próximas Skills

Consulte [`inventario.md`](./inventario.md) para roadmap completo.

### Prioridade Alta (Q1 2025)
1. Autenticação e Autorização
2. Deploy e CI/CD
3. n8n Workflows e Agentes IA
4. Upload e Storage

### Prioridade Média (Q2-Q3 2025)
- Pagamentos (Stripe)
- Email e Notificações
- Real-time e Subscriptions
- Integração com APIs Externas

Veja detalhes completos em [`inventario.md`](./inventario.md).

---

## 💡 Dicas

### Para Desenvolvedores
- 📖 **Leia as skills** antes de começar tarefas complexas
- 🔄 **Referencie explicitamente** as skills ao usar Claude Code
- 💬 **Dê feedback** sobre o que funciona ou não
- ✨ **Sugira melhorias** baseadas na experiência

### Para Tech Leads
- 🎯 **Priorize skills** baseado em necessidades do projeto
- 📊 **Monitore uso** e eficácia das skills
- 🔄 **Mantenha atualizado** com mudanças de stack
- 👥 **Colete feedback** da equipe regularmente

---

## 🐛 Troubleshooting

### Skills não funcionam?
1. ✅ Verificar estrutura de diretórios correta
2. ✅ Confirmar arquivos `SKILL.md` existem
3. ✅ Verificar formato markdown válido
4. ✅ Referenciar skills explicitamente no prompt

### Conteúdo desatualizado?
1. 📝 Identificar seção desatualizada
2. 🔄 Atualizar seguindo [`prompt-skills.md`](./prompt-skills.md)
3. 📅 Atualizar data de última modificação
4. 📢 Comunicar mudanças à equipe

---

## 📚 Recursos Adicionais

### Documentação
- [Guia de Criação de Skills](./prompt-skills.md) - Como criar novas skills
- [Inventário de Skills](./inventario.md) - Todas as skills disponíveis
- [Claude Code Docs](https://docs.claude.com/claude-code) - Documentação oficial

### Templates
- Template de skill básica em [`prompt-skills.md`](./prompt-skills.md)
- Exemplos completos nas 4 skills criadas

---

## ✅ Quando Pronto

Considere a Fase 6 completa quando:

### Criação
- [x] 4 skills essenciais criadas
- [x] Cada skill tem SKILL.md completo
- [x] Exemplos práticos incluídos
- [x] Checklists definidos

### Documentação
- [x] Guia de criação documentado
- [x] Inventário completo
- [x] README detalhado

### Validação
- [ ] Skills testadas com Claude Code
- [ ] Exemplos verificados funcionam
- [ ] Equipe familiarizada com uso
- [ ] Feedback inicial coletado

### Próximos Passos
- [ ] Prosseguir para **FASE 7: Setup Supabase**
- [ ] Usar skills criadas durante desenvolvimento
- [ ] Coletar feedback contínuo
- [ ] Planejar próximas skills

---

**Status**: ✅ Completo
**Próxima Fase**: [FASE 7 - Setup Supabase](../07-SUPABASE/)

---

**Última atualização**: 2025-01-14
**Versão**: 2.0
**Mantido por**: Equipe Dizevolv
