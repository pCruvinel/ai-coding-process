# 🤖 PROMPT: Entrevista de Projeto com Claude

## Como Usar Este Prompt

1. **Copie o texto abaixo**
2. **Cole no Claude** (claude.ai ou Claude Code)
3. **Responda as perguntas do Claude**
4. **Claude gerará seu PRD inicial**

---

## 🎯 PROMPT PARA COPIAR E COLAR

```
# ENTREVISTA DE PROJETO - GERAR PRD

Você é um Product Manager experiente conduzindo uma entrevista de projeto.
Seu objetivo é coletar informações suficientes para criar um PRD (Product Requirements Document) completo.

## INSTRUÇÕES
1. Faça uma entrevista estruturada com o usuário
2. Faça perguntas claras e uma por vez
3. Se a resposta for vaga, peça esclarecimentos com exemplos
4. Ajuste perguntas baseado nas respostas anteriores
5. Ao final, gere um PRD completo em Markdown

## FASES DA ENTREVISTA

### Fase 1: AQUECIMENTO (Perguntas 1-2)
- Contexto geral do projeto
- Importância do projeto

### Fase 2: PROBLEMA (Perguntas 3-5)
- Problema principal
- Como resolvem hoje
- Por que não é suficiente

### Fase 3: SOLUÇÃO (Perguntas 6-8)
- Como imaginam a solução
- Exemplo de uso
- Diferencial

### Fase 4: USUÁRIOS (Perguntas 9-16)
- Quem são os usuários
- Perfil detalhado
- Objetivos e painpoints

### Fase 5: FEATURES (Perguntas 17-24)
- Features MVP (Essenciais)
- Features pós-MVP (Futuros)
- Priorização

### Fase 6: REQUISITOS (Perguntas 25-30)
- Usuários esperados
- Dados sensíveis
- Integrações
- Disponibilidade

### Fase 7: TIMELINE & BUDGET (Perguntas 31-35)
- Data de lançamento
- Milestones
- Orçamento

### Fase 8: SUCESSO (Perguntas 36-40)
- Métricas de sucesso
- KPIs
- Critérios de aceitação

## ESTRUTURA DE RESPOSTA

Após CADA pergunta, responda assim:
```
**Entendo. [reconhecimento da resposta]**

[Próxima pergunta de forma natural]
```

## SAÍDA FINAL

Ao fim da entrevista (após ~40 perguntas), gere um PRD estruturado:

# PRD: [Nome do Projeto]

## 1. VISÃO GERAL
[Resumo em 2-3 frases]

## 2. PROBLEMA
[Descrição do problema e impacto]

## 3. SOLUÇÃO PROPOSTA
[Como a app resolve]

## 4. PERSONAS
### Persona 1: [Nome]
- Perfil: [Descrição]
- Goals: [Objetivos]
- Pain points: [Problemas]

### Persona 2: [Nome]
[...]

## 5. FEATURES MVP
Lista de 5-10 features essenciais

## 6. FEATURES PÓS-MVP
Lista de features futuras

## 7. REQUISITOS TÉCNICOS
- Usuários esperados: [X]
- Dados sensíveis: [SIM/NÃO]
- Integrações: [Sim/Não e quais]
- Disponibilidade: [X%]

## 8. TIMELINE
- Data de lançamento: [data]
- Duração estimada: [X semanas]

## 9. MÉTRICAS DE SUCESSO
- Primária: [métrica]
- Secundárias: [métricas]

## 10. ORÇAMENTO
[Se fornecido]

---

## COMECE!

Olá! Bem-vindo ao processo de planejamento de projeto.

Vou fazer algumas perguntas para entender completamente sua visão.
Não se preocupe se precisar pensar - tome o tempo que precisar.

**Pergunta 1:** Qual é a visão geral do projeto que você quer criar?
```

---

## 💡 DICAS PARA RESPONDER

### Seja Específico
- ❌ "Uma app para vendas"
- ✅ "Uma app para que vendedores rastreiem leads e conversões em tempo real"

### Dê Exemplos
- ❌ "Precisa de relatórios"
- ✅ "Relatórios tipo XYZ que mostram vendas por categoria"

### Use Números
- ❌ "Bastante tempo"
- ✅ "30 horas por semana"

### Descreva Usuários Reais
- ❌ "Um gestor"
- ✅ "Maria, 35 anos, gerente de projeto, usa Excel, precisa rastrear 8 projetos"

---

## 📊 EXEMPLO DE RESPOSTAS

```
P1: Qual é a visão geral do projeto?
R: Somos uma consultoria de RH e temos muita dificuldade em
   rastrear candidatos no processo seletivo. Usamos planilhas
   e é muito desorganizado.

P2: Por que esse projeto é importante agora?
R: Porque perdemos candidatos bons por perder informações
   e não conseguir acompanhar o pipeline. Temos 3 processos
   em andamento agora e é caótico.

P3: Qual é o principal problema?
R: Perder dados de candidatos, não saber em que estágio está
   cada candidato, e falhas de comunicação entre team.

P4: Como vocês resolvem isso hoje?
R: Temos um Google Sheets compartilhado, mas fica muito bagunçado.
   Pessoas criam cópias, modificam coisas diferentes...

P5: Por que esse Sheets não é suficiente?
R: Porque não é em tempo real, pessoas pisam uma na outra,
   não há histórico de mudanças, e é muito lento de carregar.

P6: Se vocês tivessem uma app web para isso, como seria?
R: Seria bem linear. Cadastra candidato, adiciona email/phone,
   coloca em qual estágio tá (inscrição, entrevista 1, entrevista 2,
   oferta), e consegue ver histórico de quem fez cada mudança.

P7: Vocês usariam no desktop, mobile, ou os dois?
R: Principalmente desktop, durante o dia no escritório.
   Mobile só pra consultar rápido.

...

[Continua até as 40 perguntas]

RESULTADO: PRD Completo
```

---

## ✅ QUANDO USAR ESTE PROMPT

- ✅ Novo projeto sem PRD
- ✅ Cliente não consegue escrever PRD sozinho
- ✅ Quer uma primeira versão rápida
- ✅ Precisa estruturar ideias vagas

## ❌ QUANDO NÃO USAR

- ❌ PRD já existe
- ❌ Projeto muito grande (>40 features)
- ❌ Requisitos muito técnicos/complexos

---

## 🎓 EXEMPLO REAL

Para ver um exemplo completo de PRD gerado, veja:
[`exemplo-prd.md`](./exemplo-prd.md)

---

## 📝 PRÓXIMOS PASSOS

1. Use este prompt com Claude
2. Responda as perguntas
3. Claude gera PRD
4. Envie PRD para cliente revisar
5. Incorpore feedback
6. Aprove com cliente
7. Prossiga para Fase 1 (Design)

---

**Tempo estimado**: 30-45 minutos
**Saída esperada**: PRD completo
**Facilidade**: ⭐⭐⭐⭐⭐ (Muito fácil)

---

**Última atualização**: Nov 2024
