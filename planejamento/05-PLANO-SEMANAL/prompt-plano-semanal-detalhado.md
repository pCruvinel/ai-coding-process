# 📅 PROMPT 2.3: Plano de Execução Semanal

**Quando usar:** Depois da validação (PROMPT 2.2), antes de começar a codar
**Comando:**
```bash
claude-code task "Criar plano de execução semanal detalhado"
```

**Prompt:**

```markdown
# 📅 MISSÃO: Plano de Execução Semanal Detalhado

## OBJETIVO
Transformar o PLANO-GERAL.md em um plano executável, semana a semana, com tasks específicas e claras.

## PROCESSO

### 1. Análise de Dependências
Crie um grafo de dependências entre features:
```
Feature A → Feature B → Feature C
    ↓
Feature D
```

### 2. Priorização Inteligente
Ordene as features considerando:
- Dependências técnicas
- Valor de negócio (do PRD)
- Complexidade (do ESTIMATIVAS.md)
- Riscos identificados

### 3. Distribuição Semanal
Divida o trabalho em sprints semanais de forma realista.

## OUTPUT

Crie `planejamento/PLANO-SEMANAL.md`:

```markdown
# 🗓️ Plano de Execução Semanal

**Início:** [Data]
**Duração Total:** X semanas
**Objetivo:** Entregar MVP funcional

---

## 📅 Semana 1: Setup e Fundação
**Foco:** Preparar o ambiente e criar a base do projeto

### Segunda-feira
**Objetivo do dia:** Ambiente de desenvolvimento completo

#### 🌅 Manhã (4h)
- [ ] **Task 1.1**: Criar repositório Git
  - Comando: `git init && gh repo create`
  - Arquivos: `.gitignore`, `README.md`
  - Tempo: 30min

- [ ] **Task 1.2**: Setup Next.js
  - Comando: `npx create-next-app@latest`
  - Configs: TypeScript, Tailwind v3, App Router
  - Tempo: 1h

- [ ] **Task 1.3**: Configurar ESLint/Prettier
  - Arquivos: `.eslintrc.json`, `.prettierrc`
  - Tempo: 30min

- [ ] **Task 1.4**: Setup Supabase
  - Criar projeto no Supabase
  - Configurar variáveis de ambiente
  - Instalar @supabase/supabase-js
  - Tempo: 1h

**Checkpoint**: ✅ `npm run dev` funciona + Supabase conectado

#### 🌆 Tarde (4h)
- [ ] **Task 1.5**: Criar tabelas do banco
  - Tabelas: roles, users
  - Trigger: handle_new_user()
  - RLS policies básicas
  - Tempo: 2h

- [ ] **Task 1.6**: Criar componentes UI base
  - Componentes: Button, Input, Card
  - Localização: `src/components/ui/`
  - Tempo: 1.5h

**Checkpoint**: ✅ Banco criado + Componentes renderizando

---

### Terça-feira
**Objetivo do dia:** Autenticação completa funcionando

#### 🌅 Manhã (4h)
- [ ] **Task 2.1**: Implementar SignupForm
  - Arquivo: `src/components/auth/signup-form.tsx`
  - Integração: Supabase Auth
  - Validação: Zod schema
  - Tempo: 2h

- [ ] **Task 2.2**: Implementar LoginForm
  - Arquivo: `src/components/auth/login-form.tsx`
  - Remember me + Esqueci senha
  - Tempo: 1.5h

**Checkpoint**: ✅ Usuário consegue criar conta e fazer login

#### 🌆 Tarde (4h)
- [ ] **Task 2.3**: Configurar Middleware
  - Arquivo: `src/middleware.ts`
  - Proteção de rotas
  - Redirecionamentos
  - Tempo: 1.5h

- [ ] **Task 2.4**: Criar hook useUser
  - Arquivo: `src/hooks/use-user.ts`
  - Buscar perfil completo com role
  - Tempo: 1h

- [ ] **Task 2.5**: Testar autenticação end-to-end
  - Signup → Trigger cria em public.users
  - Login → Carrega perfil
  - Rotas protegidas funcionam
  - Tempo: 1h

**Checkpoint**: ✅ Auth completa e testada

---

### Quarta-feira
**Objetivo do dia:** [Feature principal do MVP]

[Detalhar tasks da feature...]

---

[Continuar para cada dia de cada semana]

---

## 📅 Semana 2: [Nome da fase]
[Detalhar...]

---

## 📊 Métricas de Progresso

### Como Acompanhar
Ao final de cada dia, atualizar em `planejamento/PROGRESSO.md`:

```markdown
## Progress - Semana X, Dia Y
- ✅ Tasks completadas: X/Y
- ⏳ Tasks em progresso: Z
- 🔴 Bloqueios: [Se houver]
- 📝 Notas: [Observações]
- ⏰ Horas trabalhadas: X
```

### Indicadores de Alerta
🚨 Acionar se:
- Mais de 30% das tasks atrasadas
- Bloqueio não resolvido em 24h
- Bug crítico descoberto
- Requisito do PRD mudou

---

## 🎯 Definition of Done

### Por Task
- [ ] Código escrito seguindo padrões
- [ ] Teste criado (se aplicável)
- [ ] Testado manualmente
- [ ] Commitado com mensagem clara
- [ ] Documentação atualizada

### Por Dia
- [ ] Checkpoint atingido
- [ ] Código comitado
- [ ] Progress atualizado
- [ ] Sem bloqueios pendentes

### Por Semana
- [ ] Features planejadas funcionando
- [ ] Deploy em staging
- [ ] Testes passando
- [ ] Docs atualizadas
```

---

**Após criar o plano, pergunte:**
"Plano semanal criado! Você quer que eu:
1. Ajuste alguma coisa?
2. Detalhe mais alguma semana específica?
3. Prossiga para PROMPT 2.4 (Criar Skills)?"

---

**FIM DO PROMPT 2.3**
```

---

## 📋 Como Usar Este Prompt

### Contexto
Este prompt é usado na **Fase 5: Plano Semanal**, após você ter:
- ✅ Completado a documentação (PROMPT 2.1)
- ✅ Validado consistência (PROMPT 2.2)
- ✅ Corrigido inconsistências identificadas

### Passo a Passo

1. **Abra o Claude Code** no seu projeto
2. **Execute o comando:**
   ```bash
   claude-code task "Criar plano de execução semanal detalhado"
   ```
3. **Cole este prompt completo** no chat
4. **Aguarde a geração** (pode levar 15-20 minutos)
5. **Revise o plano** gerado em `planejamento/PLANO-SEMANAL.md`
6. **Ajuste se necessário** (datas, prioridades, etc)
7. **Crie arquivo de progresso** `planejamento/PROGRESSO.md`
8. **Commit as mudanças** no Git

### O Que Esperar

O Claude irá:
- ✅ Analisar dependências entre features
- ✅ Priorizar features por valor e complexidade
- ✅ Distribuir trabalho em semanas
- ✅ Detalhar tasks dia a dia
- ✅ Definir checkpoints e DoD
- ✅ Criar template de progresso

---

## 📊 Estrutura do Plano Semanal

### Anatomia de Uma Semana
Cada semana deve ter:
- **Título**: Semana X: [Nome da Fase]
- **Foco**: Objetivo principal da semana
- **Dias**: Segunda a Sexta (5 dias úteis)
- **Entregável**: O que estará pronto no final

### Anatomia de Um Dia
Cada dia deve ter:
- **Objetivo do dia**: Meta clara e específica
- **Manhã (4h)**: 2-4 tasks específicas
- **Tarde (4h)**: 2-4 tasks específicas
- **Checkpoint**: Como validar que o dia foi bem-sucedido

### Anatomia de Uma Task
Cada task deve ter:
- **Nome**: Descrição clara da task
- **Arquivo/Comando**: Onde trabalhar ou o que executar
- **Detalhes**: Informações técnicas necessárias
- **Tempo estimado**: Quanto tempo deve levar

---

## 🎯 Boas Práticas

### Distribuição de Tempo
- **Setup (Semana 1)**: ~20% do tempo total
- **Features do MVP**: ~60% do tempo total
- **Testes e Refinamento**: ~10% do tempo total
- **Buffer**: ~10% para imprevistos

### Priorização
1. **Semana 1**: Setup + Autenticação (fundação)
2. **Semanas 2-3**: Feature mais crítica do MVP
3. **Semanas 4-5**: Demais features do MVP
4. **Semana 6**: Testes, refinamento, deploy

### Tasks por Dia
- **Ideal**: 4-6 tasks por dia
- **Muito pouco**: < 3 tasks (sub-estimado)
- **Muito**: > 8 tasks (over-estimado)

### Checkpoints
- **Por dia**: Validação concreta (teste passa, página funciona)
- **Por semana**: Feature completa end-to-end
- **Por fase**: Grupo de features integradas

---

## 📝 Template de Progresso

Crie o arquivo `planejamento/PROGRESSO.md`:

```markdown
# 📊 Progresso do Desenvolvimento

**Atualizado em:** [Data/Hora]

---

## 🗓️ Semana Atual: Semana X - [Nome]

### Dia Atual: [Dia da Semana] - [Data]

#### ✅ Completadas Hoje
- [Task 1]
- [Task 2]

#### ⏳ Em Progresso
- [Task 3] (60% completo)

#### 🔴 Bloqueios
Nenhum bloqueio no momento.

#### 📝 Notas
[Observações do dia]

#### ⏰ Horas
- Trabalhadas: 8h
- Estimadas: 8h
- Delta: 0h

---

## 📈 Resumo da Semana

### Tasks
- ✅ Completadas: X/Y (Z%)
- ⏳ Em progresso: W
- ⏸️ Bloqueadas: 0

### Features
- ✅ Completas: [Lista]
- ⏳ Em progresso: [Lista]
- ⏸️ Pendentes: [Lista]

---

## 📊 Métricas Gerais

### Progresso do MVP
- **Geral**: X% completo
- **Frontend**: X% completo
- **Backend**: X% completo
- **Testes**: X% completo

### Velocidade
- **Tasks/dia**: X.X (média)
- **Features/semana**: X.X (média)

### Qualidade
- **Bugs encontrados**: X
- **Bugs corrigidos**: Y
- **Testes passando**: X/Y (Z%)

---

## 🎯 Próxima Semana

**Foco:** [Próxima fase]
**Features:** [Lista]
**Riscos:** [Se houver]
```

---

## ⚠️ Importante

### Antes de Criar Plano Semanal
Certifique-se de que:
- ✅ Documentação validada (score >= 8)
- ✅ Inconsistências corrigidas
- ✅ `planejamento/PLANO-GERAL.md` existe
- ✅ `planejamento/ESTIMATIVAS.md` existe

### Ajustando o Plano
O plano NÃO é imutável. Ajuste conforme necessário:
- **Bloqueios**: Repriorize tasks
- **Mudanças de escopo**: Revise estimativas
- **Adiantado**: Puxe tasks da próxima semana
- **Atrasado**: Renegocie escopo ou prazo

### Acompanhamento Diário
Ao final de CADA dia:
1. Atualize `PROGRESSO.md`
2. Marque tasks completadas
3. Identifique bloqueios
4. Ajuste plano se necessário

---

## 🎯 Exemplo de Plano Semanal

Veja um exemplo de como deve ficar o `planejamento/PLANO-SEMANAL.md`:

```markdown
# 🗓️ Plano de Execução Semanal - TaskMaster

**Início:** 18 de Novembro de 2024
**Duração Total:** 6 semanas
**Objetivo:** Entregar MVP do sistema de gerenciamento de projetos

---

## 📅 Semana 1: Setup e Fundação (18-22 Nov)
**Foco:** Preparar ambiente e implementar autenticação

### Segunda-feira (18/11)
**Objetivo:** Ambiente completo + Supabase configurado

#### 🌅 Manhã (4h)
- [ ] **1.1**: Setup Next.js 14 + TypeScript + Tailwind v3 (1.5h)
- [ ] **1.2**: Configurar ESLint + Prettier + Git (30min)
- [ ] **1.3**: Criar projeto Supabase + variáveis env (1h)
- [ ] **1.4**: Instalar dependências (@supabase/supabase-js, zod, etc) (1h)

**Checkpoint**: ✅ `npm run dev` roda sem erros

#### 🌆 Tarde (4h)
- [ ] **1.5**: Criar schema inicial (roles, users) no Supabase (1.5h)
- [ ] **1.6**: Implementar trigger handle_new_user() (1h)
- [ ] **1.7**: Configurar RLS policies básicas (1h)
- [ ] **1.8**: Testar criação de usuário no dashboard Supabase (30min)

**Checkpoint**: ✅ Usuário criado no Supabase cria registro em public.users

---

### Terça-feira (19/11)
**Objetivo:** Componentes UI base + Autenticação frontend

[...]

---

## 📅 Semana 2: CRUD de Projetos (25-29 Nov)
**Foco:** Implementar feature principal do MVP

[...]
```

---

## 🎯 Próximo Passo

Após completar este prompt:
✅ Prossiga para **Fase 6: Skills Claude** para criar skills personalizadas que facilitarão o desenvolvimento
