# ✅ PROMPT 2.2: Validação da Documentação

**Quando usar:** Após criar toda a documentação (PROMPT 2.1)
**Comando:**
```bash
claude-code task "Revisar documentação gerada e identificar inconsistências"
```

**Prompt:**

```markdown
# 🔍 MISSÃO: Validação Cruzada da Documentação

## OBJETIVO
Revisar TODA a documentação criada e garantir consistência, completude e qualidade.

## PROCESSO DE VALIDAÇÃO

### 1. Validação de Consistência
Verifique se as informações são consistentes entre:
- `prd.md` ↔️ `docs/03-ESPECIFICACAO.md`
- `docs/02-ARQUITETURA.md` ↔️ `docs/04-BANCO-DE-DADOS.md`
- `docs/05-API.md` ↔️ `docs/03-ESPECIFICACAO.md`
- `planejamento/PLANO-GERAL.md` ↔️ `planejamento/ESTIMATIVAS.md`

**Procure por:**
- ❌ Features mencionadas em um doc mas não em outro
- ❌ Tecnologias diferentes mencionadas
- ❌ Dados do schema que não têm endpoints correspondentes
- ❌ Endpoints que não têm componentes correspondentes

### 2. Validação de Completude
Para cada feature no PRD, verifique se existe:
- [ ] Descrição técnica em 03-ESPECIFICACAO.md
- [ ] Tabelas necessárias em 04-BANCO-DE-DADOS.md
- [ ] Endpoints em 05-API.md
- [ ] Componentes em 06-COMPONENTES.md
- [ ] Task no PLANO-GERAL.md
- [ ] Estimativa em ESTIMATIVAS.md

### 3. Validação do Sistema de Auth
Verifique se está correto:
- [ ] Tabela `public.roles` criada
- [ ] Tabela `public.users` com FK para `auth.users`
- [ ] Trigger `on_auth_user_created` implementado
- [ ] Function `handle_new_user()` completa
- [ ] RLS policies configuradas
- [ ] Role padrão 'user' será atribuído automaticamente

### 4. Validação de Viabilidade Técnica
Analise se:
- A stack escolhida suporta todas as features
- As integrações são tecnicamente possíveis
- O prazo é realista para o escopo
- Não há dependências circulares
- Tailwind CSS v3+ está especificado corretamente

### 5. Identificação de Gaps
Liste o que está faltando:
- Informações técnicas não especificadas
- Decisões que precisam ser tomadas
- Dependências externas não mapeadas
- Requisitos não-funcionais não documentados

## OUTPUT

Gere um relatório `planejamento/VALIDACAO.md`:

```markdown
# Relatório de Validação da Documentação

**Data:** [Data/Hora]
**Revisor:** Claude Code

---

## ✅ Pontos Fortes
[O que está bem documentado]

---

## ⚠️ Inconsistências Encontradas

### Inconsistência 1: [Título]
- **Documentos afetados:** [lista]
- **Problema:** [descrição detalhada]
- **Correção necessária:** [o que fazer]
- **Prioridade:** Alta/Média/Baixa

[Repetir para cada inconsistência]

---

## ❌ Gaps Identificados

### Gap 1: [Título]
- **Área:** [banco/api/frontend/etc]
- **Faltando:** [o que falta]
- **Impacto:** [consequências]
- **Criticidade:** Alta/Média/Baixa
- **Ação:** [o que fazer]

[Repetir para cada gap]

---

## 💡 Recomendações

1. **Recomendação 1**
   - Razão: [por quê]
   - Benefício: [o que ganha]
   - Esforço: Baixo/Médio/Alto

[Repetir para cada recomendação]

---

## 📋 Checklist de Correções

- [ ] Corrigir inconsistência 1
- [ ] Preencher gap 1
- [ ] Implementar recomendação 1
[etc]

---

## 🎯 Score de Qualidade

- **Consistência:** X/10
- **Completude:** X/10
- **Viabilidade:** X/10
- **Clareza:** X/10

**SCORE GERAL:** X/10

---

## 🎯 Próximo Passo

[Se score >= 8]: Prosseguir para PROMPT 2.3 (Plano Semanal)
[Se score < 8]: Corrigir problemas antes de continuar
```

**Após gerar o relatório:**
1. Corrija automaticamente os problemas que puder
2. Liste os que precisam de decisão humana
3. Atualize os documentos corrigidos
4. Registre mudanças no 09-HISTORICO.md

---

**FIM DO PROMPT 2.2**
```

---

## 📋 Como Usar Este Prompt

### Contexto
Este prompt é usado na **Fase 4: Validação**, após você ter:
- ✅ Completado a análise PRD (PROMPT 2.1)
- ✅ Gerado toda a documentação em `/docs`
- ✅ Criado o plano geral e estimativas

### Passo a Passo

1. **Abra o Claude Code** no seu projeto
2. **Execute o comando:**
   ```bash
   claude-code task "Revisar documentação gerada e identificar inconsistências"
   ```
3. **Cole este prompt completo** no chat
4. **Aguarde a validação** (pode levar 10-15 minutos)
5. **Leia o relatório** gerado em `planejamento/VALIDACAO.md`
6. **Revise inconsistências e gaps** identificados
7. **Peça ao Claude para corrigir** problemas automaticamente
8. **Commit as correções** no Git

### O Que Esperar

O Claude irá:
- ✅ Analisar consistência entre todos os documentos
- ✅ Verificar completude de cada feature
- ✅ Validar sistema de autenticação
- ✅ Avaliar viabilidade técnica
- ✅ Identificar gaps e problemas
- ✅ Gerar score de qualidade (0-10)
- ✅ Sugerir correções

---

## 📊 Critérios de Validação

### 1. Consistência (Peso: 25%)
- Informações são consistentes entre documentos
- Nomes de features/componentes padronizados
- Stack tecnológica uniforme
- Sem contradições

### 2. Completude (Peso: 35%)
- Todas as features do PRD documentadas
- Todas as tabelas mapeadas
- Todos os endpoints especificados
- Todas as estimativas feitas

### 3. Viabilidade (Peso: 25%)
- Stack escolhida suporta features
- Prazos realistas
- Integrações possíveis
- Sem dependências circulares

### 4. Clareza (Peso: 15%)
- Documentação fácil de entender
- Schemas bem definidos
- Fluxos claros
- Nomenclatura consistente

---

## 🎯 Interpretando o Score

### Score >= 9: Excelente ✅
- Documentação de alta qualidade
- Pode prosseguir direto para Plano Semanal (PROMPT 2.3)
- Revisão rápida antes de começar desenvolvimento

### Score 7-8: Bom ⚠️
- Documentação sólida com pequenos ajustes
- Corrija inconsistências menores
- Prossiga para Plano Semanal após correções

### Score 5-6: Regular ❌
- Documentação precisa de melhorias
- Corrija TODAS as inconsistências e gaps
- Re-execute validação após correções
- Só prossiga quando score >= 7

### Score < 5: Insuficiente 🚨
- Documentação tem problemas sérios
- Revise completamente os documentos
- Pode precisar refazer PROMPT 2.1
- NÃO prossiga até melhorar

---

## 🔧 Corrigindo Problemas

### Inconsistências Comuns

**Problema 1: Feature no PRD mas não em ESPECIFICACAO**
```bash
# Solução
Peça ao Claude:
"Adicione a feature X da prd.md em docs/03-ESPECIFICACAO.md com:
- Descrição funcional
- User story
- Critérios de aceitação
- Endpoints necessários
- Tabelas do banco"
```

**Problema 2: Endpoint sem tabela correspondente**
```bash
# Solução
Peça ao Claude:
"O endpoint POST /api/projects precisa de uma tabela 'projects'.
Adicione o schema em docs/04-BANCO-DE-DADOS.md com:
- Campos necessários
- Relacionamentos
- RLS policies
- Índices"
```

**Problema 3: Estimativa faltando**
```bash
# Solução
Peça ao Claude:
"Adicione estimativa para a feature X em planejamento/ESTIMATIVAS.md
Inclua breakdown de frontend, backend, database e testes"
```

---

## ⚠️ Importante

### Antes de Rodar Validação
Certifique-se de que existem:
- ✅ `docs/01-VISAO-GERAL.md`
- ✅ `docs/02-ARQUITETURA.md`
- ✅ `docs/03-ESPECIFICACAO.md`
- ✅ `docs/04-BANCO-DE-DADOS.md`
- ✅ `docs/05-API.md`
- ✅ `planejamento/PLANO-GERAL.md`
- ✅ `planejamento/ESTIMATIVAS.md`

### Após Validação
1. **Se score >= 8**: Prossiga para PROMPT 2.3 (Plano Semanal)
2. **Se score < 8**: Corrija problemas e re-execute validação
3. **Sempre**: Commit as correções antes de prosseguir

---

## 📝 Exemplo de Relatório

Veja um exemplo de como deve ficar o `planejamento/VALIDACAO.md`:

```markdown
# Relatório de Validação da Documentação

**Data:** 2024-11-15 14:30
**Revisor:** Claude Code

---

## ✅ Pontos Fortes
- Stack tecnológica bem definida e consistente
- Sistema de autenticação completo com triggers
- Todas as 5 features do MVP documentadas
- Estimativas detalhadas por área

---

## ⚠️ Inconsistências Encontradas

### Inconsistência 1: Nome da Feature "Gerenciamento de Projetos" Inconsistente
- **Documentos afetados:** prd.md, docs/03-ESPECIFICACAO.md
- **Problema:** PRD usa "Gerenciamento de Projetos" mas ESPECIFICACAO usa "CRUD de Projetos"
- **Correção necessária:** Padronizar para "Gerenciamento de Projetos" em todos os docs
- **Prioridade:** Média

### Inconsistência 2: Endpoint sem Tabela Correspondente
- **Documentos afetados:** docs/05-API.md, docs/04-BANCO-DE-DADOS.md
- **Problema:** API define POST /api/comments mas não existe tabela `comments`
- **Correção necessária:** Adicionar schema da tabela `comments` em 04-BANCO-DE-DADOS.md
- **Prioridade:** Alta

---

## ❌ Gaps Identificados

### Gap 1: Falta Especificação de Paginação
- **Área:** API
- **Faltando:** Endpoints de listagem não especificam paginação
- **Impacto:** Performance ruim com muitos registros
- **Criticidade:** Média
- **Ação:** Adicionar params `page` e `limit` em todos os endpoints GET que retornam listas

---

## 💡 Recomendações

1. **Adicionar Índices no Banco**
   - Razão: Queries de busca serão lentas sem índices
   - Benefício: Performance 10-100x melhor
   - Esforço: Baixo

---

## 📋 Checklist de Correções

- [ ] Padronizar nome "Gerenciamento de Projetos"
- [ ] Adicionar tabela `comments` no schema
- [ ] Especificar paginação em endpoints
- [ ] Adicionar índices em campos de busca

---

## 🎯 Score de Qualidade

- **Consistência:** 7/10 (2 inconsistências menores)
- **Completude:** 8/10 (1 gap de paginação)
- **Viabilidade:** 9/10 (Stack sólida, prazo OK)
- **Clareza:** 9/10 (Documentação clara)

**SCORE GERAL:** 8.25/10

---

## 🎯 Próximo Passo

✅ Score >= 8: Prosseguir para PROMPT 2.3 (Plano Semanal) após corrigir inconsistências
```

Este tipo de relatório detalhado ajuda você a ter certeza de que a documentação está sólida antes de começar o desenvolvimento!

---

## 🎯 Próximo Passo

Após completar este prompt e corrigir problemas:
✅ Prossiga para **PROMPT 2.3: Plano de Execução Semanal**
