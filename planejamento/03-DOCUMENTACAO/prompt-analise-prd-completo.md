# 🔍 PROMPT 2.1: Análise PRD e Criação de Documentação

**Quando usar:** Logo após clonar o repositório do frontend
**Comando:**
```bash
claude-code task "Analisar projeto e criar documentação backend"
```

**Prompt:**

```markdown
# 🎯 MISSÃO: Análise Completa e Contextualização do Projeto

## 📋 SITUAÇÃO ATUAL

Acabei de receber um projeto Next.js com frontend pronto. Preciso:
1. Entender completamente o que foi feito
2. Criar toda a documentação backend
3. Planejar implementação do Supabase
4. Preparar para desenvolvimento

---

## 📂 ARQUIVOS DISPONÍVEIS

Você tem acesso a:
- ✅ `prd.md` - Requisitos do cliente
- ✅ `.ai/frontend-export.md` - Documentação do frontend
- ✅ Código fonte do frontend em `/src`

---

## 🎯 SUAS TAREFAS

### FASE 1: ANÁLISE PROFUNDA (30min)

#### 1.1 Ler e Entender o PRD
```bash
# Leia o arquivo
cat prd.md
```

**Extraia:**
- Objetivo do negócio
- Usuários alvo
- Features críticas (MVP)
- Features futuras
- Integrações necessárias
- Prazos e restrições

#### 1.2 Analisar Frontend Export
```bash
# Leia o documento do frontend
cat .ai/frontend-export.md
```

**Mapeie:**
- Páginas criadas
- Componentes principais
- Dados mockados (que precisam virar reais)
- APIs que o frontend espera
- Fluxos de usuário implementados

#### 1.3 Analisar Código Fonte
```bash
# Explore a estrutura
tree src/ -L 3

# Veja componentes principais
find src/components -name "*.tsx" -type f
```

**Identifique:**
- Onde estão os dados mockados
- Quais `fetch()` precisam ser implementados
- Componentes que usam autenticação
- Formulários que submitam dados

---

### FASE 2: CRIAR ESTRUTURA DE DOCUMENTAÇÃO

Crie TODOS estes arquivos:

#### 2.1 docs/01-VISAO-GERAL.md
```markdown
# Visão Geral do Projeto

## Sobre o Projeto
[Resumo executivo de 3 parágrafos baseado no PRD]

## Objetivo de Negócio
[Problema que resolve e valor entregue]

## Usuários
### Persona 1: [Nome]
- **Papel:** [Descrição]
- **Necessidades:** [O que precisa fazer]
- **Jornada:** [Como usa o sistema]

## Stack Tecnológica
- **Frontend:** Next.js 14 (App Router) + Tailwind CSS v3+
- **Backend:** Next.js API Routes
- **Banco:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth com trigger automático
- **Deploy:** Vercel
- **Extras:** [n8n se necessário, outras integrações]

## Status Atual
- ✅ Frontend completo
- 🔄 Backend em desenvolvimento
- ⏳ Banco de dados pendente
- ⏳ Autenticação pendente

## Métricas de Sucesso
[Do PRD - como medir se deu certo]
```

#### 2.2 docs/02-ARQUITETURA.md
```markdown
# Arquitetura do Sistema

## Diagrama de Alto Nível

```
┌─────────────┐      ┌──────────────┐      ┌─────────────┐
│   Cliente   │ ───> │   Next.js    │ ───> │  Supabase   │
│  (Browser)  │ <─── │ (Vercel)     │ <─── │ (Database)  │
└─────────────┘      └──────────────┘      └─────────────┘
                            │
                            ├─> API Routes
                            ├─> Server Components
                            └─> Client Components
```

[Continuar com toda a arquitetura detalhada...]
```

#### 2.3 docs/03-ESPECIFICACAO.md
```markdown
# Especificação Técnica Detalhada

## Features do MVP

[Para CADA feature do PRD, criar seção completa com:]
- Descrição funcional
- User story
- Critérios de aceitação
- Especificação técnica (frontend + backend)
- Endpoints necessários
- Tabelas do banco
- Fluxograma
- Casos edge
- Testes necessários
- Estimativa
```

#### 2.4 docs/04-BANCO-DE-DADOS.md
```markdown
# Documentação do Banco de Dados

[Incluir TODAS as tabelas necessárias, com:]
- Schema SQL completo
- RLS policies
- Triggers (especialmente o de criação de usuário)
- Índices
- Relacionamentos
- Migrations
```

**IMPORTANTE - Sistema de Autenticação:**
O sistema de autenticação DEVE seguir esta arquitetura:

```
auth.users (Supabase gerenciado)
     │
     │ 1:1 (via trigger automático)
     ↓
public.users (Nossa tabela estendida)
     │
     │ N:1
     ↓
public.roles (Papéis do sistema)
```

**Trigger obrigatório:**
```sql
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  default_role_id UUID;
BEGIN
  SELECT id INTO default_role_id
  FROM public.roles
  WHERE nome = 'user'
  LIMIT 1;

  INSERT INTO public.users (
    id,
    email,
    nome,
    role_id
  ) VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'nome', split_part(NEW.email, '@', 1)),
    default_role_id
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
```

#### 2.5 docs/05-API.md
```markdown
# Documentação de APIs

[Documentar TODOS os endpoints que o frontend espera]
[Formato completo com request/response/validações/erros]
```

#### 2.6 docs/06-COMPONENTES.md
```markdown
# Guia de Componentes

[Listar todos os componentes do frontend]
[Explicar como usar, props, variantes]
```

#### 2.7 docs/07-DEPLOY.md
```markdown
# Guia de Deployment

[Processo completo de deploy]
[Variáveis de ambiente]
[CI/CD]
```

#### 2.8 docs/09-HISTORICO.md
```markdown
# Changelog

## [Unreleased]

### Setup Inicial - [Data Atual]
- ✨ Estrutura de documentação criada
- 📝 PRD analisado e documentado
- 🏗️ Arquitetura definida
```

---

### FASE 3: CRIAR ESTRUTURA .ai/

#### 3.1 .ai/contexto-projeto.md
```markdown
# Contexto do Projeto para IA

## Resumo Executivo
[3 parágrafos do projeto baseado no PRD]

## Stack e Ferramentas
[Lista completa]

## Estrutura do Projeto
[Árvore de pastas com descrições]

## Convenções de Código
[Padrões que devem ser seguidos]

## Decisões Importantes
[ADRs principais]

## Informações Importantes para IA
[Contexto crítico que a IA deve sempre saber]
```

#### 3.2 .ai/decisoes-tecnicas.md
```markdown
# Registro de Decisões Técnicas (ADR)

## ADR 001: Next.js 14 App Router
**Data:** [Data]
**Status:** Aceito

### Contexto
[Por que essa decisão foi necessária]

### Decisão
[O que foi decidido]

### Consequências
[Impactos positivos e negativos]

---

[Criar ADR para cada decisão importante]
```

---

### FASE 4: CRIAR PLANO DE AÇÃO EXECUTÁVEL

Crie o arquivo `planejamento/PLANO-GERAL.md`:

```markdown
# 🎯 Plano de Ação do Projeto

**Gerado em:** [Data/Hora]
**Baseado em:** prd.md

---

## 📊 Overview do Projeto

### Informações Básicas
- **Nome:** [Do PRD]
- **Cliente:** [Do PRD]
- **Prazo:** [Do PRD]
- **Status Atual:** 🔴 Planejamento

### Escopo do MVP
[Listar features essenciais]

---

## 🗓️ Timeline e Fases

### Fase 0: Setup (2-3 dias)
**Objetivo:** Projeto configurado e pronto para desenvolvimento

- [ ] Criar repositório Git
- [ ] Setup Next.js + Tailwind v3
- [ ] Configurar Supabase
- [ ] Setup variáveis de ambiente
- [ ] Instalar dependências base
- [ ] Configurar ESLint/Prettier
- [ ] Criar componentes UI base
- [ ] Setup de testes

**Entregável:** Projeto rodando localmente

---

### Fase 1: [Nome baseado no PRD] (X dias)
**Objetivo:** [Feature principal do MVP]

#### Tasks Técnicas
- [ ] **Database**: Criar tabelas [lista]
- [ ] **Backend**: Criar APIs [lista]
- [ ] **Frontend**: Conectar páginas [lista]
- [ ] **Testes**: Cobrir casos [lista]

#### User Stories
- [ ] Como [persona], eu consigo [ação]

**Entregável:** [Feature funcionando end-to-end]

---

[Repetir para cada feature do MVP]

---

## 📋 Backlog Priorizado

### 🔴 Crítico (Fazer Primeiro)
1. [Feature/Task mais crítica]
2. [Segunda mais crítica]

### 🟡 Importante (MVP)
1. [Feature importante]

### 🟢 Desejável (Pós-MVP)
1. [Feature nice-to-have]

---

## 🎯 Definição de Pronto (DoD)

Uma feature está "pronta" quando:
- [ ] Código desenvolvido e revisado
- [ ] Testes unitários escritos e passando
- [ ] Testado manualmente
- [ ] Documentação atualizada
- [ ] Deploy em staging realizado
- [ ] Aprovação do cliente (se aplicável)
```

---

### FASE 5: ANÁLISE DE COMPLEXIDADE

Crie o arquivo `planejamento/ESTIMATIVAS.md`:

```markdown
# Análise de Complexidade e Estimativas

## Metodologia
- Pontos: 1 (simples), 3 (médio), 5 (complexo), 8 (muito complexo)
- 1 ponto ≈ 2-4 horas

## Features Analisadas

[Para cada feature:]

### Feature: [Nome]
**Complexidade Total**: X pontos

#### Breakdown:
- **Frontend**: X pontos
- **Backend**: X pontos
- **Database**: X pontos
- **Testes**: X pontos

**Estimativa Total**: X-Y horas
**Prazo Sugerido**: X dias

---

## Resumo Geral

| Feature | Pontos | Horas | Dias |
|---------|--------|-------|------|
| Feature 1 | 8 | 16-32 | 2-4 |
| **TOTAL MVP** | **XX** | **XX-XX** | **XX-XX** |
```

---

## ✅ FASE 6: OUTPUT FINAL

Após criar todos os documentos, gere um relatório resumido:

```markdown
# ✅ Análise do PRD Completa

## 📊 Resumo Executivo
[3 parágrafos sobre o projeto]

## 📁 Documentação Criada
- ✅ docs/01-VISAO-GERAL.md
- ✅ docs/02-ARQUITETURA.md
- ✅ docs/03-ESPECIFICACAO.md
- ✅ docs/04-BANCO-DE-DADOS.md
- ✅ docs/05-API.md
- ✅ docs/06-COMPONENTES.md
- ✅ docs/07-DEPLOY.md
- ✅ docs/09-HISTORICO.md
- ✅ .ai/contexto-projeto.md
- ✅ .ai/decisoes-tecnicas.md
- ✅ planejamento/PLANO-GERAL.md
- ✅ planejamento/ESTIMATIVAS.md

## ❓ Perguntas para o Cliente
[Lista de 5-10 perguntas sobre pontos não claros no PRD]

## ⚠️ Riscos Identificados
[Lista de riscos técnicos ou de negócio]

## 💡 Sugestões de Melhoria
[3-5 sugestões para melhorar o produto]

## 🎯 Próximos Passos Recomendados
1. Revisar documentação gerada
2. Esclarecer perguntas com cliente
3. Aprovar stack técnica
4. Executar PROMPT 2.2 (Validação)
```

---

## 🎬 AÇÃO FINAL

Pergunte ao usuário:

"Documentação completa gerada! Gostaria que eu:
1. Explicasse alguma seção específica?
2. Ajustasse algo na documentação?
3. Prosseguisse para validação (PROMPT 2.2)?"

---

**FIM DO PROMPT 2.1**
```

---

## 📋 Como Usar Este Prompt

### Contexto
Este prompt é usado na **Fase 3: Documentação**, após você ter:
- ✅ Completado o design (Fase 1)
- ✅ Feito a transição para backend (Fase 2)
- ✅ Clonado o repositório do frontend

### Passo a Passo

1. **Abra o Claude Code** no seu projeto
2. **Execute o comando:**
   ```bash
   claude-code task "Analisar projeto e criar documentação backend"
   ```
3. **Cole este prompt completo** no chat
4. **Aguarde a análise** (pode levar 10-20 minutos)
5. **Revise os documentos** gerados em `/docs` e `/.ai`
6. **Faça ajustes** se necessário
7. **Commit as mudanças** no Git

### O Que Esperar

O Claude irá:
- ✅ Ler o PRD, frontend-export.md e código fonte
- ✅ Criar 12 arquivos de documentação
- ✅ Gerar plano de ação executável
- ✅ Estimar complexidade e prazo
- ✅ Identificar riscos e perguntas

---

## ⚠️ Importante

### Arquivos Necessários
Antes de rodar este prompt, certifique-se de que existem:
- `prd.md` ou `planejamento/00-PRE-DESENVOLVIMENTO/prd.md`
- `.ai/frontend-export.md`
- Código fonte do frontend em `/src`

### Sistema de Autenticação
O prompt já inclui a arquitetura padrão de autenticação com Supabase:
- Tabela `public.roles`
- Tabela `public.users` (estende `auth.users`)
- Trigger automático `handle_new_user()`

Se seu projeto tiver requisitos diferentes, ajuste essa seção.

---

## 🎯 Próximo Passo

Após completar este prompt:
✅ Prossiga para **PROMPT 2.2: Validação da Documentação**
