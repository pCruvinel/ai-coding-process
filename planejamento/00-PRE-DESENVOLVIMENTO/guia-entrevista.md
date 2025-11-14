# 🎤 Guia: Como Conduzir a Entrevista

Um guia prático para extrair o máximo de informações do cliente em uma entrevista inicial efetiva.

## ⏱️ Planejamento

### Duração
- **Ideal**: 60-90 minutos
- **Mínimo**: 45 minutos
- **Máximo**: 2 horas (depois as pessoas desconectam)

### Preparação (30 min antes)
```
1. Revisar qualquer informação prévia sobre cliente
2. Testar áudio/vídeo (se remoto)
3. Ter template de anotações aberto
4. Ter perguntas impressas ou em outra aba
5. Avisar cliente que pode gravar áudio (se desejar)
6. Pedir que cliente tenha exemplos/referências prontas
```

---

## 🎯 Estrutura da Entrevista

### Parte 1: AQUECIMENTO (5 min)

**Objetivo**: Relaxar e criar rapport

```
"Oi! Obrigado por participar. Vamos conversar sobre seu projeto.
Você pode me contar um pouco sobre você e sua empresa?"
```

**Dicas**:
- Sorria (mesmo em call, muda o tom)
- Ouça sem interromper
- Tome notas simples

**Saída esperada**: Entender background do cliente

---

### Parte 2: CONTEXTO (10 min)

**Objetivo**: Entender o problema de negócio

**Perguntas**:
1. "Qual é a visão geral do projeto?"
2. "Por que este projeto é importante AGORA?"
3. "Como isso encaixa na estratégia da sua empresa?"
4. "Quem mais precisa saber sobre isso?"

**Dicas**:
- Escute mais do que fale
- Pergunte "Por quê?" e "Como?" (não "O quê?" ainda)
- Procure por URGÊNCIA (prazo, competição, etc)

**Saída esperada**: Entender a visão macro

---

### Parte 3: PROBLEMA (10 min)

**Objetivo**: Identificar o problema raiz

**Perguntas**:
1. "Qual é o principal problema que você está tentando resolver?"
2. "Como as pessoas resolvem isso HOJE?"
3. "Por que essa solução atual não é suficiente?"
4. "Qual é o custo de NÃO resolver esse problema?"

**Dicas**:
- Não julgue a resposta
- Procure por dados/números (ex: "Perdem 1h/dia fazendo X")
- Entenda painpoints emocionais também

**Saída esperada**: Problema bem definido

---

### Parte 4: SOLUÇÃO ESPERADA (10 min)

**Objetivo**: Entender como o cliente imagina a solução

**Perguntas**:
1. "Como você imagina que uma aplicação web resolveria isso?"
2. "Qual seria o principal valor para o usuário?"
3. "Conhece outras aplicações similares que goste?"
4. "O que diferenciaria sua app?"

**Dicas**:
- Mostre screenshots de apps similares
- Peça exemplos concretos ("Pode detalhar esse fluxo?")
- NÃO corrija o cliente nesta parte
- Desenhe/esboce enquanto conversa (papel ou Figma)

**Saída esperada**: Visão clara da solução

---

### Parte 5: USUÁRIOS (15 min)

**Objetivo**: Definir personas

**Perguntas**:
1. "Quem são os usuários principais?" (2-3 tipos)
2. Para CADA tipo:
   - Qual é a idade/profissão?
   - Tech-savvy ou não?
   - Quanto tempo/dia usariam?
   - Qual é o objetivo dele?
   - Qual é o principal painpoint dele?
   - Como ele acessa? (mobile/desktop/tablet)

**Exemplo de Persona**:
```
Nome: Maria (fictício)
Idade: 35 anos
Profissão: Gerente de Projeto
Tech-savvy: Média (usa Windows, Excel, Teams)
Objetivo: Rastrear horas de trabalho por projeto
Pain point: Perder 15 min/dia preenchendo planilha Excel
```

**Dicas**:
- Crie nomes FICTÍCIOS para personas
- Seja ESPECÍFICO (não "jovem", mas "20-25 anos")
- Pergunte sobre contexto real ("Você realmente usa?")
- Descubra a jornada ("Quantas vezes por dia acessaria?")

**Saída esperada**: 2-3 personas bem definidas

---

### Parte 6: FEATURES (15 min)

**Objetivo**: Priorizar features para MVP

**Perguntas**:
1. "Se você tivesse apenas 1 funcionalidade, qual seria?"
2. "E a segunda mais importante?"
3. "E a terceira?"
4. Continuar até ter ~8 features
5. "Há outras que não mencionamos?"

**Método: MOSCOW**
```
MUST (Essencial): 5-7 features
  └─ Sem essas, não lança

SHOULD (Importante): 5-7 features
  └─ Bom ter, mas pode esperar

COULD (Legal): 5-10 features
  └─ Seria legal, mas não crítico

WON'T (Não vai): Open list
  └─ Explicitamente fora de escopo
```

**Exemplo**:
```
MVP (MUST HAVE):
1. Login/Logout
2. Dashboard com resumo
3. Criar nova tarefa
4. Marcar como completo
5. Ver tarefas por data

Pós-MVP (SHOULD/COULD):
6. Colaboração em tempo real
7. Notificações por email
8. Integração com Google Calendar
```

**Dicas**:
- Limite MVP a 5-10 features
- Diga "Podemos adicionar depois" frequentemente
- Se tem >10 features, re-priorize

**Saída esperada**: Features MVP e pós-MVP listadas

---

### Parte 7: REQUISITOS TÉCNICOS (10 min)

**Objetivo**: Entender constraints técnicos

**Perguntas**:
1. "Quantos usuários simultâneos esperam no dia 1? E em 6 meses?"
2. "Dados sensíveis? (LGPD, conformidade)"
3. "Precisa integrar com sistemas existentes?"
4. "Preferência de plataforma?" (mobile, web, desktop)
5. "Qual é a disponibilidade esperada?" (24/7? Business hours?)
6. "Existe orçamento para infraestrutura?"

**Dicas**:
- Anote números específicos
- Entenda se há compliance (LGPD/GDPR/HIPAA)
- Pergunta sobre integrações (pode complexificar MVP)

**Saída esperada**: Requisitos não-funcionais claros

---

### Parte 8: TIMELINE & BUDGET (5 min)

**Objetivo**: Alinhar expectativas de tempo/custo

**Perguntas**:
1. "Quando precisa estar pronto?" (data específica)
2. "Por que essa data é importante?"
3. "Há datas intermediárias?" (milestones)
4. "Qual é o orçamento aproximado?"
5. "Como será o pagamento?" (fixo, por hora, milestones?)

**Dicas**:
- Seja honesto sobre timeline
- Mencione que MVP leva X semanas
- Não prometa o impossível agora

**Saída esperada**: Expectativas alinhadas

---

### Parte 9: MÉTRICAS DE SUCESSO (5 min)

**Objetivo**: Definir como medir sucesso

**Perguntas**:
1. "Como você saberá que esse projeto foi bem-sucedido?"
2. "Qual é a métrica principal?" (ex: 1000 usuários, 10k transações/mês)
3. "Existem outros KPIs?"
4. "Qual é o alvo nos primeiros 3 meses? 6 meses?"

**Exemplo**:
```
Métrica Primária: 100 usuários ativos no 1º mês
Métrica Secundária: NPS > 8
Métrica de Negócio: Economizar 10h/semana de trabalho manual
```

**Saída esperada**: Critérios de sucesso bem definidos

---

### Parte 10: ENCERRAMENTO (5 min)

**Perguntas**:
1. "O que não perguntei que deveria saber?"
2. "Há restrições ou coisas que não mencionei?"
3. "Como você quer ser mantido informado? (weekly calls, email updates)"

**Próximos Passos**:
1. Descreva brevemente o PRD que vai entregar
2. Estimativa de quando estará pronto
3. Próxima reunião (revisão do PRD)

```
"Vou organizar essas informações em um PRD que descreve
o projeto completamente. Vou enviar em 48h para você revisar.
Aí a gente marca uma call rápida para confirmar. Tudo bem?"
```

---

## 💡 Técnicas de Entrevista Efetiva

### OUÇA MAIS QUE FALE
```
Tempo ideal de fala:
- Você: 30%
- Cliente: 70%
```

### Técnica: Silence
Depois que o cliente fala, fica em silêncio por 2 segundos. Muitas vezes, a melhor informação vem DEPOIS da primeira resposta.

### Técnica: Repita
Confirme que entendeu:
```
"Se entendi bem, o maior problema é [X], certo?"
```

### Técnica: Peça Exemplos
Nunca aceite resposta genérica:
```
❌ Cliente: "Precisa de relatórios"
✅ Você: "Pode dar um exemplo? Qual tipo de relatório especificamente?"
```

### Técnica: Conte Histórias
Se o cliente ficar vago:
```
"Pode descrever um dia típico do usuário?
Como começa? O que ele faz? Como termina?"
```

---

## 📝 Anotações Estruturadas

Use o template abaixo durante a entrevista:

```markdown
# Entrevista - [Nome do Cliente]
Data: ___/___/_____
Duração: _____ min

## CONTEXTO
[Anotações]

## PROBLEMA
[Anotações]

## SOLUÇÃO
[Anotações]

## PERSONAS
### Persona 1: [Nome]
- Perfil: [descrição]
- Goal: [objetivo]
- Pain point: [problema]

### Persona 2: [Nome]
[...]

## FEATURES MVP (MUST HAVE)
1. [Feature]
2. [Feature]
[...]

## FEATURES PÓS-MVP (SHOULD/COULD)
1. [Feature]
[...]

## REQUISITOS TÉCNICOS
- Usuários esperados: [X]
- Dados sensíveis? [SIM/NÃO]
- Integrações: [X]
- Disponibilidade: [X]

## TIMELINE
Data de lançamento: ___/___/_____
Milestones: [X]

## ORÇAMENTO
Faixa: [X] R$
Pagamento: [tipo]

## MÉTRICAS DE SUCESSO
- Primária: [métrica]
- Secundária: [métrica]

## DÚVIDAS PARA FOLLOW-UP
- [ ] [Pergunta]
- [ ] [Pergunta]
```

---

## ⚠️ Erros Comuns a Evitar

### ❌ Erro 1: Falar Demais
Você apresenta soluções antes de entender o problema

✅ **Solução**: Escute 70% do tempo

### ❌ Erro 2: Aceitar Vagas Respostas
Cliente: "Precisa ser moderno"
Você: "Tá bom!"

✅ **Solução**: Sempre peça exemplos e especificidade

### ❌ Erro 3: Prometer o Mundo
Aceitar 20 features no MVP

✅ **Solução**: Priorizar juntos, dizer "não" educadamente

### ❌ Erro 4: Desconectar o Usuário
Descrever features técnicas demais

✅ **Solução**: Sempre conectar a user value: "Então o usuário vai economizar tempo porque..."

### ❌ Erro 5: Não Documentar
Confiar na memória

✅ **Solução**: Documentar TUDO em tempo real

---

## 🎓 Exemplo Real de Diálogo

```
VOCÊ: "Obrigado por participar! Vamos começar.
      Qual é a visão geral do projeto?"

CLIENTE: "Bom, nossa empresa tem um problema com gestão de
         projetos. Usamos Excel e é muito manual."

VOCÊ: "Entendi. Isso causa algum problema específico?"
      [silêncio de 2 segundos...]

CLIENTE: "Sim! Perdem informações, não sabemos em que ponto
         cada projeto está, e leva muito tempo."

VOCÊ: "Quanto tempo você diria que é desperdiçado nisso?"

CLIENTE: "Eu diria umas 2-3 horas por semana só
         atualizando planilhas."

VOCÊ: "Isso é bastante! Quantas pessoas estão envolvidas
      com isso?"

CLIENTE: "Umas 8-10 pessoas coordenando projetos."

VOCÊ: "Ótimo. Então aproximadamente 20-30 horas/semana
      perdidas. Se vocês resolvessem isso, como seria?"

[... e continua explorando...]
```

---

## 🚀 Após a Entrevista

### Imediatamente (1h depois)
- [ ] Revisar e limpar anotações
- [ ] Completar informações que deixou incompletas
- [ ] Listar dúvidas/follow-ups

### Dia 1 (mesmo dia)
- [ ] Começar esboço do PRD
- [ ] Agrupar informações por categoria

### Dia 2-3
- [ ] Rascunho do PRD completo
- [ ] Enviar para cliente revisar

### Dia 5-7
- [ ] PRD refinado com feedback
- [ ] Aprovação final

---

**Dica Final**: Quanto melhor a entrevista, melhor o PRD. Quanto melhor o PRD, mais fácil o projeto inteiro!

---

**Status**: 🟢 Pronto para usar
**Última atualização**: Nov 2024
