# ✅ Guia de Qualidade do PRD

Como saber se seu PRD está bom o suficiente para avançar para a próxima fase.

---

## 🎯 O Que É Um PRD de Qualidade?

Um PRD de qualidade é:
- **Claro**: Qualquer pessoa técnica consegue entender
- **Completo**: Responde todas as perguntas críticas
- **Específico**: Sem ambiguidades ou termos vagos
- **Acionável**: Developer consegue começar a trabalhar com base nele
- **Aprovado**: Cliente confirmou por escrito

---

## 📊 Sistema de Pontuação

Avalie seu PRD com este sistema:

### 🟢 Excelente (90-100 pontos)
Pronto para prosseguir com confiança. Minimal risco de retrabalho.

### 🟡 Bom (70-89 pontos)
Pode prosseguir, mas faça follow-up nas áreas fracas.

### 🟠 Regular (50-69 pontos)
Prossiga com cautela. Programe revisões frequentes com cliente.

### 🔴 Insuficiente (<50 pontos)
NÃO PROSSIGA. Refaça a entrevista e o PRD.

---

## ✅ Checklist de Qualidade (100 pontos)

### 1. VISÃO GERAL (10 pontos)

- [ ] **Resumo executivo existe** (2 pts)
  - Visão em uma frase está clara e completa

- [ ] **Objetivos de negócio definidos** (3 pts)
  - Pelo menos 2-3 objetivos claros
  - Não são vagos ("fazer app bonita" ❌)
  - São mensuráveis quando possível

- [ ] **Contexto da empresa presente** (2 pts)
  - Tamanho, indústria, mercado
  - Situação atual descrita

- [ ] **Por que agora?** (3 pts)
  - Urgência/importância explicada
  - Razão de negócio clara

**Subtotal**: ___/10 pontos

---

### 2. PROBLEMA (15 pontos)

- [ ] **Problema principal bem definido** (5 pts)
  - Específico e claro
  - Não é "problema genérico"
  - Exemplo: "Perdem 20h/semana" ✅ vs "Trabalho manual" ❌

- [ ] **Impacto quantificado** (5 pts)
  - Tempo desperdiçado: XX horas
  - Custo financeiro: R$ XX
  - Ou outro impacto mensurável

- [ ] **Solução atual documentada** (3 pts)
  - Como resolvem hoje (workaround)
  - Por que não é suficiente

- [ ] **Usuários afetados identificados** (2 pts)
  - Quantas pessoas
  - Quais tipos de usuários

**Subtotal**: ___/15 pontos

---

### 3. SOLUÇÃO PROPOSTA (10 pontos)

- [ ] **Solução descrita claramente** (4 pts)
  - Como a app resolve o problema
  - Fluxo alto nível faz sentido

- [ ] **Benefícios principais listados** (3 pts)
  - Pelo menos 2-3 benefícios concretos
  - Conectados aos objetivos de negócio

- [ ] **Diferencial identificado** (3 pts)
  - vs Solução atual
  - vs Competidores (se aplicável)

**Subtotal**: ___/10 pontos

---

### 4. PERSONAS (15 pontos)

- [ ] **Quantidade adequada** (2 pts)
  - Pelo menos 1 persona
  - Não mais que 5 personas

- [ ] **Detalhamento suficiente** (6 pts)
  - Nome (fictício), idade, profissão
  - Tech-savvy level
  - Goals (objetivos)
  - Pain points (problemas)

- [ ] **Personas são específicas** (4 pts)
  - Não são genéricas ("Usuário final" ❌)
  - São realistas e baseadas em dados reais

- [ ] **Contexto de uso descrito** (3 pts)
  - Frequência de uso
  - Duração de uso
  - Dispositivo (desktop/mobile)

**Subtotal**: ___/15 pontos

**🚨 Crítico**: Se <10 pontos aqui, REFAÇA as personas.

---

### 5. FEATURES (25 pontos)

- [ ] **Features MVP bem definidas** (10 pts)
  - 5-10 features (não muito poucas, não muitas)
  - Cada feature tem descrição clara
  - Cada feature tem "Por quê" explicado
  - Exemplo de uso presente

- [ ] **Priorização clara** (5 pts)
  - Óbvio quais são CRÍTICAS
  - MVP vs Pós-MVP está claro

- [ ] **Features são específicas** (5 pts)
  - Não são vagas ("Dashboard bonito" ❌)
  - São acionáveis ("Dashboard com cards mostrando X, Y, Z" ✅)

- [ ] **Features pós-MVP identificadas** (3 pts)
  - Pelo menos 3-5 features futuras
  - Timeline estimada (Semana X, Mês Y)

- [ ] **Dependências mapeadas** (2 pts)
  - Se Feature A depende de Feature B, está documentado

**Subtotal**: ___/25 pontos

**🚨 Crítico**: Se <15 pontos aqui, REFAÇA as features.

---

### 6. REQUISITOS TÉCNICOS (10 pontos)

- [ ] **Usuários esperados definidos** (2 pts)
  - Dia 1, Mês 1, Mês 6
  - Números realistas

- [ ] **Dados sensíveis identificados** (3 pts)
  - SIM ou NÃO está claro
  - Se SIM, conformidade necessária (LGPD, etc)

- [ ] **Plataformas definidas** (2 pts)
  - Web Desktop, Mobile, etc
  - Claro o que é prioritário

- [ ] **Integrações listadas** (2 pts)
  - Quais sistemas externos (se houver)

- [ ] **Performance especificada** (1 pt)
  - Uptime esperado, tempo de resposta

**Subtotal**: ___/10 pontos

---

### 7. TIMELINE (5 pontos)

- [ ] **Data de lançamento definida** (2 pts)
  - Data específica (não "em breve")
  - Razão da data explicada

- [ ] **Milestones identificados** (2 pts)
  - Pelo menos 2-3 milestones
  - Datas para cada milestone

- [ ] **Duração estimada presente** (1 pt)
  - MVP: X semanas
  - Total: Y meses

**Subtotal**: ___/5 pontos

---

### 8. ORÇAMENTO (5 pontos - Opcional)

- [ ] **Faixa orçamentária definida** (2 pts)
  - Pelo menos uma faixa (R$ X - R$ Y)

- [ ] **Modelo de pagamento claro** (2 pts)
  - Fixo, mensal, milestones, hora

- [ ] **Custos operacionais estimados** (1 pt)
  - Hosting, banco, etc

**Subtotal**: ___/5 pontos

**Nota**: Se orçamento não foi discutido, não perca pontos aqui. Mas é recomendado ter.

---

### 9. MÉTRICAS DE SUCESSO (5 pontos)

- [ ] **Métrica primária definida** (3 pts)
  - Uma métrica clara
  - Target específico (não vago)
  - Prazo para atingir

- [ ] **Métricas secundárias presentes** (1 pt)
  - Pelo menos 1-2 métricas adicionais

- [ ] **Critérios de aceitação listados** (1 pt)
  - Como saber que projeto foi bem-sucedido

**Subtotal**: ___/5 pontos

---

### 10. APROVAÇÃO (5 pontos)

- [ ] **Cliente revisou o PRD** (2 pts)
  - PRD foi enviado para cliente
  - Cliente deu feedback

- [ ] **Aprovação por escrito** (3 pts)
  - Email, Slack, documento assinado
  - "Aprovado, pode começar" ou similar

**Subtotal**: ___/5 pontos

**🚨 Crítico**: Se 0 pontos aqui, NÃO PROSSIGA até ter aprovação.

---

## 🎯 PONTUAÇÃO FINAL

**TOTAL**: ___/100 pontos

### Interpretação

| Pontos | Status | Ação |
|--------|--------|------|
| 90-100 | 🟢 Excelente | Prossiga com confiança para Fase 1 |
| 70-89 | 🟡 Bom | Pode prosseguir, mas reforce áreas fracas |
| 50-69 | 🟠 Regular | Prossiga com cautela, revisões frequentes |
| <50 | 🔴 Insuficiente | NÃO prossiga, refaça entrevista/PRD |

---

## 🔍 Checklist de "Cheiro Ruim" (Red Flags)

Se você responder "SIM" a qualquer uma dessas perguntas, há problema:

### 🚩 Red Flags Críticos (PARE IMEDIATAMENTE)

- [ ] Há seções com `[PREENCHER]` ou placeholder?
- [ ] Cliente NÃO aprovou por escrito?
- [ ] Você tem dúvidas críticas sem resposta?
- [ ] Menos de 3 features MVP definidas?
- [ ] Personas são genéricas ("usuário final")?
- [ ] Não sabe quando precisa entregar?
- [ ] Não sabe quantas pessoas vão usar?

Se marcou ✅ em **qualquer um**, PARE e resolva antes de prosseguir.

### ⚠️ Red Flags Importantes (Resolva Logo)

- [ ] Mais de 15 features MVP?
- [ ] Features muito vagas ("fazer app bonita")?
- [ ] Nenhum número/dado quantitativo?
- [ ] Cliente demorou >7 dias para responder?
- [ ] Você não consegue explicar o projeto em 2 min?
- [ ] Mais de 5 personas?
- [ ] Timeline parece impossível?

Se marcou ✅ em **2 ou mais**, revise essas áreas com urgência.

---

## 📋 Teste do "Pitch de Elevador"

**Teste final de qualidade**: Você consegue responder essas perguntas em 30 segundos cada usando o PRD?

1. **O que é o projeto?**
   - Resposta: _______________

2. **Por que é importante?**
   - Resposta: _______________

3. **Quem vai usar?**
   - Resposta: _______________

4. **Quais as 3 features principais?**
   - Resposta: _______________

5. **Quando precisa estar pronto?**
   - Resposta: _______________

Se você **hesitou** ou **não conseguiu** responder qualquer uma, seu PRD tem problemas.

---

## 🎓 Exemplos de PRDs

### 🟢 Exemplo BOM

```markdown
## Feature: Dashboard com Visão Geral

**Descrição**: Página inicial que mostra todos os projetos em cards.
Cada card mostra: nome do cliente, status, responsável, data, % progresso.

**Por quê**: Diretora precisa ver status de todos os projetos em 10 segundos.

**Exemplo de Uso**: Carla abre app → vê 8 projetos em cards →
vê que 2 estão atrasados (vermelho) → clica para detalhes.

**Prioridade**: CRÍTICA
```

**Por que é bom**:
- ✅ Específico (não vago)
- ✅ Tem "Por quê" claro
- ✅ Exemplo de uso concreto
- ✅ Prioridade definida

### 🔴 Exemplo RUIM

```markdown
## Feature: Dashboard

**Descrição**: Um dashboard bonito e fácil de usar.

**Por quê**: Usuários vão gostar.
```

**Por que é ruim**:
- ❌ Vago ("bonito"? "fácil"? O que isso significa?)
- ❌ Não tem exemplo de uso
- ❌ "Por quê" não explica valor de negócio
- ❌ Sem prioridade

---

## 🛠️ Como Melhorar Um PRD Fraco

### Se Pontuação < 70

**Passo 1**: Identifique seções com pontuação baixa
- Veja qual seção tem menos pontos

**Passo 2**: Faça follow-up com cliente
- Email com perguntas específicas ([template aqui](./template-email-follow-up.md))
- Call de 15-30 min

**Passo 3**: Reescreva essas seções
- Use o [`template-prd.md`](./template-prd.md) como guia
- Seja mais específico (números, exemplos)

**Passo 4**: Re-avalie
- Use este checklist novamente
- Objetivo: >70 pontos

### Técnicas para Adicionar Especificidade

**❌ Vago → ✅ Específico**

| Vago | Específico |
|------|------------|
| "App rápida" | "Carrega em <2 segundos" |
| "Muitos usuários" | "100 usuários no mês 1, 500 no mês 6" |
| "Relatórios" | "Relatório PDF com vendas por categoria, exportável" |
| "Design moderno" | "Design estilo Material Design, cores azul/branco" |
| "Fácil de usar" | "Usuário cria tarefa em <30 segundos sem treinamento" |

---

## 📚 Recursos para Melhorar Seu PRD

- **Template**: [`template-prd.md`](./template-prd.md)
- **Exemplo**: [`exemplo-prd.md`](./exemplo-prd.md)
- **Guia de Entrevista**: [`guia-entrevista.md`](./guia-entrevista.md)
- **FAQ**: [`faq.md`](./faq.md)
- **Templates de Email**: [`template-email-follow-up.md`](./template-email-follow-up.md)

---

## ✅ Checklist Final (Antes de Prosseguir)

Responda SIM/NÃO:

- [ ] Pontuação total ≥ 70 pontos? **SIM / NÃO**
- [ ] Cliente aprovou por escrito? **SIM / NÃO**
- [ ] Nenhum red flag crítico? **SIM / NÃO**
- [ ] Consigo fazer pitch de elevador? **SIM / NÃO**
- [ ] Estou confiante para prosseguir? **SIM / NÃO**

**Se todas respostas são SIM**: Prossiga para **Fase 1: Design Frontend** 🎉

**Se alguma resposta é NÃO**: Resolva antes de prosseguir.

---

## 🎯 Lembre-se

> **"Um PRD ruim custa 10x mais tempo depois do que investir para fazer bem agora."**

Não tenha pressa. Invista tempo no PRD. Vale a pena.

---

**Última atualização**: Novembro 2024
**Status**: 🟢 Pronto para usar
