# ❓ FAQ - Fase 0: Pré-Desenvolvimento

Perguntas frequentes sobre a fase de planejamento e criação do PRD.

---

## 📋 Sobre o PRD

### P: O que é um PRD?
**R:** PRD significa "Product Requirements Document". É um documento que descreve claramente:
- O que será construído
- Por que (objetivos de negócio)
- Para quem (personas/usuários)
- Como (features e funcionalidades)
- Quando (timeline)

É o "contrato" entre você e o cliente sobre o escopo do projeto.

### P: Quanto tempo leva para criar um PRD?
**R:** Depende da complexidade, mas geralmente:
- **Projeto simples** (5-8 features): 3-4 horas
- **Projeto médio** (10-15 features): 6-8 horas (distribuídas em 2-3 dias)
- **Projeto complexo** (20+ features): 12-16 horas (distribuídas em 5-7 dias)

Não apresse! Um PRD mal feito custa muito mais tempo depois.

### P: Preciso realmente fazer um PRD para projetos pequenos?
**R:** SIM! Mesmo para projetos de 2 semanas. Um PRD simples (1-2 páginas) é melhor que nada. Ele:
- Evita mal-entendidos
- Define expectativas claras
- Serve de referência quando surgirem dúvidas
- Protege você de scope creep

### P: Cliente não quer perder tempo com PRD, quer ir direto para o código
**R:** Explique que:
- PRD **economiza** tempo (não desperdiça)
- Sem PRD, você terá que refazer código quando descobrir mal-entendidos
- PRD permite estimar timeline e budget realisticamente
- 3 horas de planejamento economizam 30 horas de retrabalho

**Dica**: Mostre o [`exemplo-prd.md`](./exemplo-prd.md) e diga "precisamos de algo assim, mas mais simples". Isso torna concreto.

---

## 🎤 Sobre a Entrevista

### P: Posso fazer a entrevista por email em vez de call?
**R:** Não é ideal, mas pode funcionar se:
- Cliente realmente não tem tempo para call (raro)
- Você enviar perguntas muito claras
- Estiver preparado para múltiplas rodadas de perguntas

**Problema**: Por email você perde nuances, tom, e não pode fazer follow-up imediato quando resposta é vaga.

**Recomendação**: Tente negociar ao menos 30 minutos de call.

### P: Cliente dá respostas muito vagas. O que fazer?
**R:** Use a técnica dos **5 Porquês** e peça **exemplos concretos**:

**Exemplo**:
```
Cliente: "Precisa ser fácil de usar"
Você: "Pode dar um exemplo do que seria 'fácil'?"
Cliente: "Bom, tipo o Google, você clica e já acha"
Você: "Então busca rápida é importante. Quantas vezes por dia você imagina que o usuário vai buscar?"
Cliente: "Umas 10 vezes"
```

Agora você tem algo concreto: "Busca rápida, ~10x/dia".

### P: Quanto tempo deve durar a entrevista?
**R:**
- **Ideal**: 60-90 minutos
- **Mínimo**: 45 minutos
- **Máximo**: 2 horas (depois as pessoas ficam cansadas)

Se não conseguir cobrir tudo, agende uma segunda call de 30-45 minutos.

### P: Posso gravar a entrevista?
**R:** SIM, mas:
- Sempre peça permissão explícita
- Explique por quê (para não perder detalhes)
- Garanta confidencialidade
- Não compartilhe a gravação

**Dica**: Use Zoom ou Google Meet que já tem transcrição automática.

---

## 👥 Sobre Personas

### P: Quantas personas devo criar?
**R:**
- **Mínimo**: 1 persona (projetos muito simples)
- **Ideal**: 2-3 personas
- **Máximo**: 5 personas (mais que isso é difícil de gerenciar)

Se tiver mais de 5 tipos de usuários, agrupe os similares.

### P: Personas precisam ser super detalhadas?
**R:** Depende:
- **MVP**: Detalhes básicos são suficientes (nome, idade, profissão, objetivo, painpoint)
- **Projeto grande**: Mais detalhes ajudam (background, motivações, frustrações)

**Regra**: Se você consegue responder "O que [persona] faria nesta situação?", está detalhada o suficiente.

### P: Posso usar personas genéricas tipo "Usuário Final"?
**R:** NÃO! Personas genéricas não ajudam. Compare:

❌ **Ruim**: "Usuário Final - pessoa que usa o sistema"
✅ **Bom**: "Maria, 35 anos, gerente de projetos, usa Excel diariamente, quer economizar 2h/semana"

A segunda persona te ajuda a tomar decisões de design. A primeira não.

---

## 🎯 Sobre Features

### P: Quantas features deve ter um MVP?
**R:**
- **Ideal**: 5-10 features
- **Mínimo viável**: 3-5 features (projeto muito simples)
- **Máximo**: 12-15 features (já está ficando grande)

Se tiver mais de 15 features "essenciais", não é mais MVP. Repriorize.

### P: Cliente quer 30 features no MVP. O que fazer?
**R:** Use a técnica **MoSCoW**:
- **Must Have** (Essencial): Sem isso, não lança
- **Should Have** (Importante): Bom ter, mas pode esperar
- **Could Have** (Legal): Seria legal, futuro
- **Won't Have** (Não vai): Explicitamente fora de escopo

Pergunte: "Se você pudesse lançar com apenas 5 features, quais seriam?"

**Dica**: Mostre que você VAI fazer todas, mas em **fases**. MVP primeiro, resto depois.

### P: Como saber se uma feature é MVP ou pós-MVP?
**R:** Pergunte:
- Sem essa feature, o app ainda resolve o problema principal?
  - **SIM** → Pós-MVP
  - **NÃO** → MVP

**Exemplo**: App de gestão de tarefas
- Criar tarefa → **MVP** (sem isso, app não funciona)
- Notificações → **MVP** (importante para lembrar usuários)
- Integração com Google Calendar → **Pós-MVP** (legal, mas não essencial)
- Dark mode → **Pós-MVP** (cosmético)

### P: Cliente muda de ideia sobre features frequentemente
**R:** Isso é normal! Mas:
1. **Documente TODAS as mudanças** por escrito (email, Slack, etc)
2. **Mostre impacto**: "Ok, adicionar isso vai adicionar 1 semana no timeline. Tudo bem?"
3. **Congele escopo**: "Vamos congelar features dia X para conseguir entregar dia Y"
4. **Versione o PRD**: PRD v1.0, v1.1, v1.2... (histórico de mudanças)

---

## ⏱️ Sobre Timeline

### P: Como estimar timeline sem saber as features exatamente?
**R:** Não consegue! Por isso o PRD vem ANTES da estimativa. Fluxo correto:
1. Entrevista + PRD (define escopo)
2. Análise técnica (complexidade)
3. **Então** estima timeline

Se cliente pede "quanto tempo?" antes do PRD, diga: "Depende do escopo. Geralmente projetos como esse levam X-Y semanas, mas preciso entender melhor."

### P: Cliente tem deadline impossível
**R:** Seja honesto:
- "Para fazer bem feito, preciso de X semanas"
- "Se deadline é fixo, podemos fazer MVP menor em Y semanas e adicionar resto depois"
- "Quais features são CRÍTICAS para o deadline?"

**Nunca prometa o impossível**. Melhor dizer não agora do que falhar depois.

### P: Como adicionar buffer no timeline?
**R:** Regra geral:
- Estime tempo real necessário
- Adicione **30-50% de buffer**
  - 30% se projeto simples e você tem experiência
  - 50% se projeto novo ou tecnologia desconhecida

**Exemplo**: Feature leva 2 dias → Estime 3 dias (50% buffer)

---

## 💰 Sobre Orçamento

### P: Cliente não quer falar de orçamento
**R:** Tente:
- "Não precisa ser exato, mas uma faixa ajuda: R$ 10k-50k? R$ 50k-100k?"
- "Qual é o budget que você tem aprovado?"
- "Se eu disser que custa R$ X, isso está dentro do esperado?"

Se realmente não disser, faça a estimativa e apresente: "Baseado no escopo, vai custar R$ X".

### P: Como precificar?
**R:** Três modelos comuns:
1. **Preço fixo**: "Projeto completo por R$ X"
   - Bom quando escopo está muito claro
   - Risco: scope creep

2. **Por hora**: "R$ X/hora, estimado Y horas"
   - Bom quando escopo é incerto
   - Cliente fica nervoso com valor aberto

3. **Milestones**: "Pagamento em etapas (R$ X no design, R$ Y no MVP, etc)"
   - Balanceado
   - Recomendado

**Dica**: Para calcular valor, use: `(Horas estimadas) × (Sua taxa/hora) × 1.3`
O 1.3 é buffer para imprevistos.

---

## ✅ Sobre Aprovação

### P: Cliente diz "Ótimo!" verbalmente mas não assina/confirma por escrito
**R:** Não comece sem confirmação por escrito! Envie:

```
Oi [Cliente],

Ótimo! Estou enviando o PRD em anexo para sua aprovação formal.
Pode confirmar por email que está ok? Só um "Aprovado, pode começar" já resolve.

Precisamos disso para garantir que estamos 100% alinhados antes de começar.

Obrigado!
```

### P: O que conta como "aprovação por escrito"?
**R:** Qualquer uma dessas:
- ✅ Email: "Aprovado, pode começar"
- ✅ Slack/WhatsApp: "Ok, aprovado"
- ✅ Documento assinado (formal)
- ✅ Comment no Google Docs: "LGTM" (Looks Good To Me)

Importante: Salve/screenshot para referência futura.

### P: Cliente quer mudar tudo depois de aprovar o PRD
**R:** Mostre o PRD e o email de aprovação:
- "No PRD aprovado em [data], tínhamos combinado X"
- "Adicionar Y agora vai impactar timeline/budget assim: [...]"
- "Quer fazer essa mudança e ajustar o cronograma?"

PRD protege você e o cliente de mal-entendidos.

---

## 🛠️ Ferramentas

### P: Preciso usar ferramentas especiais para criar PRD?
**R:** Não! Markdown (.md) é suficiente. Mas você pode usar:
- **Markdown** (recomendado): Simples, versionável no git
- **Google Docs**: Bom para colaboração
- **Notion**: Bom para organização visual
- **Confluence**: Se empresa já usa

**Não use**: Word (ruim para versionar), PowerPoint (não é documento).

### P: Como compartilhar o PRD com o cliente?
**R:** Opções:
1. **Email com PDF**: PRD exportado como PDF (profissional)
2. **Google Docs**: Link compartilhado (permite comentários)
3. **Notion**: Link público (se cliente conhece Notion)
4. **GitHub**: Se cliente é técnico

**Recomendação**: Google Docs durante iteração, PDF para versão final.

---

## 🚨 Problemas Comuns

### P: Fiz a entrevista mas ainda tenho dúvidas
**R:** Normal! Faça follow-up:
- Email com "3-5 perguntas rápidas"
- Call de 15 minutos
- Slack/WhatsApp se for relacionamento próximo

**Nunca assuma**. Melhor perguntar do que assumir errado.

### P: Cliente não tem tempo para entrevista longa
**R:** Alternativas:
- **Entrevista assíncrona**: Envie perguntas, cliente responde no tempo dele
- **Entrevistas menores**: 2x 30 min em vez de 1x 60 min
- **Use o Claude**: Envie o prompt [`prompt-entrevista.md`](./prompt-entrevista.md) para o cliente responder direto

### P: Comecei a codar sem PRD e agora está bagunçado
**R:** Pare e faça o PRD agora!
1. Documente o que você JÁ fez
2. Alinhe com cliente o que FALTA
3. Crie PRD mesmo atrasado
4. Continue com base no PRD

Melhor tarde do que nunca. PRD ainda vai economizar tempo.

### P: PRD ficou com 50 páginas, muito grande
**R:** Simplifique:
- PRD de 50 páginas é sinal de **projeto muito complexo** OU **texto desnecessário**
- Ideal: 8-15 páginas para projeto médio
- Corte fluff, seja direto
- Use tabelas e bullets em vez de paragráfos longos

Se realmente é projeto grande, considere dividir em fases.

---

## 📚 Recursos Adicionais

### P: Onde aprendo mais sobre PRDs?
**R:** Recursos:
- [Product School - How to Write a PRD](https://productschool.com/blog/product-management-2/how-to-write-product-requirements-document)
- [Atlassian - PRD Template](https://www.atlassian.com/software/confluence/templates/product-requirements-document)
- Livro: "Inspired" by Marty Cagan

### P: Existem exemplos de PRDs reais?
**R:** Veja:
- [`exemplo-prd.md`](./exemplo-prd.md) neste repositório
- [PRD Examples - ProductPlan](https://www.productplan.com/learn/product-requirements-document-examples/)

---

## 🎯 Quando Você Está Pronto?

Você completou a Fase 0 quando:

- [ ] PRD completo (sem `[PREENCHER]`)
- [ ] Cliente aprovou por escrito
- [ ] Você consegue explicar o projeto para alguém em 2 minutos usando o PRD
- [ ] Não há ambiguidades críticas
- [ ] Timeline e budget estão alinhados
- [ ] Todos os itens do [`checklist.md`](./checklist.md) marcados

**Então**: Prossiga para **Fase 1: Design Frontend** 🎨

---

**Dúvidas não respondidas aqui?** Abra uma issue ou adicione sua pergunta a este FAQ!

**Última atualização**: Novembro 2024
