# 📋 TaskFlow - PRD Exemplo

> **EXEMPLO REAL** - Veja como preencher o template com dados práticos

---

## 📌 Informações Básicas

| Campo | Valor |
|-------|-------|
| **Projeto** | TaskFlow - Gerenciador de Projetos |
| **Data de Criação** | 15/11/2024 |
| **Versão** | 1.2 |
| **Status** | 🟢 Aprovado |
| **Cliente** | Acme Consulting Ltda |
| **Responsável (PM)** | João Silva |

---

## 1️⃣ RESUMO EXECUTIVO

> 🎯 O essencial do projeto em uma página

### 🎯 Visão em Uma Frase

Uma aplicação web que permite que equipes de consultoria rastreiem projetos em tempo real, substituindo planilhas desorganizadas por um sistema centralizado e colaborativo.

### 📊 Objetivos de Negócio

- [x] **Eficiência**: Economizar 20 horas/semana em tarefas administrativas
- [x] **Satisfação**: Reduzir erros de comunicação em 80%
- [x] **Crescimento**: Permitir crescimento de 50% nas operações sem aumentar staff administrativo

### ✅ Resultado Esperado

Quando este projeto estiver completo:

- **Usuários conseguirão**: Gerenciar múltiplos projetos com visibilidade completa em tempo real
- **Empresa economizará**: ~R$ 15.000/mês em horas não-produtivas
- **Métrica de sucesso**: 100% de aderência pelos 12 gerentes de projeto em dia 30

---

## 2️⃣ CONTEXTO

### 🏢 Sobre a Empresa

| Aspecto | Descrição |
|--------|-----------|
| **Nome** | Acme Consulting Ltda |
| **Tamanho** | Pequena-Média (45 pessoas) |
| **Indústria** | Consultoria de Processos Empresariais |
| **Mercado** | PMEs brasileiras |

### 📍 Situação Atual

A Acme tem 8-10 projetos em andamento simultaneamente. Hoje usam:

- **Google Sheets compartilhado**: Cada projeto tem sua planilha
- **Problema**: Múltiplas versões, pessoas editando ao mesmo tempo, dados inconsistentes
- **Resultado**: 2-3 horas/semana por gerente investigando discrepâncias
- **Comunicação**: Muita comunicação via WhatsApp/email que não fica registrada

### ⏰ Por Que Agora?

> A empresa cresceu 40% ano passado e agora tem dificuldade em manter controle com planilhas. Realizaram que precisa de um sistema antes de crescer mais. Também perdem clientes porque não conseguem dar visibilidade clara do progresso.

---

## 3️⃣ PROBLEMA

### 🔴 Problema Principal

A Acme não consegue rastrear status de projetos de forma centralizada, levando a:

- Perda de informações críticas
- Falta de histórico de decisões
- Retrabalho constante
- Impossibilidade de escalar operações

### 📉 Impacto do Problema

- **⏳ Tempo desperdiçado**: 2-3 horas/semana por gerente (12 gerentes = ~36h/semana = ~R$ 7.200/semana)
- **💰 Custo financeiro**: ~R$ 30.000/mês em retrabalho
- **😞 Satisfação do cliente**: 2-3 atrasos por mês causados por miscomunicação
- **⚠️ Outro impacto**: Impossível medir produtividade por projeto

### 🔧 Como Resolvem Hoje

1. Cada projeto tem um Google Sheets
2. Planilha tem colunas: Cliente, Status, Responsável, Data de Entrega, Anotações
3. Gerentes atualizam diariamente (teoricamente)
4. Status enviado ao CEO via WhatsApp ou email toda sexta

### ❌ Por Que Não É Suficiente

- **Múltiplas versões**: "Você está olhando uma versão desatualizada"
- **Sem histórico**: Não conseguem ver quem mudou o quê e quando
- **Sem notificações**: Modificações não avisam interessados
- **Difícil consultar**: Espalhar em múltiplas abas é confuso
- **Não escala**: Adicionar campo novo é trabalhoso
- **Sem acesso offline**: Ruim se internet cair
- **Sem backup automático**: Já perderam dados acidentalmente

### 👥 Usuários Afetados

- **Gerentes de Projeto**: 12 pessoas (usariam TODOS OS DIAS)
- **Diretora (Carla)**: 1 pessoa (usaria para acompanhamento estratégico)
- **Clientes** (opcional): Poderiam ter acesso visual a progresso (fase 2)
- **Total**: 13 internos + clientes (pós-MVP)

---

## 4️⃣ SOLUÇÃO PROPOSTA

### 💡 Visão Geral

Uma aplicação web (TaskFlow) que:

1. Centraliza todos os projetos em um único lugar
2. Permite colaboração em tempo real
3. Mantém histórico de todas as mudanças
4. Oferece visibilidade em vários níveis (gerente vê seu projeto, diretor vê tudo)
5. Integra com Google Calendar (opcional na fase 1)

### 🔄 Como Funciona (Fluxo Alto Nível)

1. **Gerente cria projeto**: Nome, cliente, datas, responsáveis
2. **Gerente adiciona tarefas**: Cada tarefa é uma fase do projeto
3. **Gerente atualiza status**: Arrasta tarefa entre colunas (Planejamento → Em Progresso → Concluído)
4. **Sistema registra tudo**: Quem fez, quando fez, deixa atividade visível
5. **Diretor vê dashboard**: Visão geral de todos os projetos em 1 tela

### 🌟 Benefícios Principais

- **Eficiência**: Elimina necessidade de manter múltiplas planilhas (economia de ~3h/semana por pessoa)
- **Transparência**: Todos veem o status real em tempo real (sem perguntar "qual é o status?")
- **Histórico**: Conseguem ver quem fez cada mudança e quando (melhor para auditoria)
- **Escalabilidade**: Sistema trabalha com 10 ou 100 projetos da mesma forma

### 🏆 Diferencial

| Comparação | Diferença |
|-----------|-----------|
| **vs Google Sheets** | Versão única, histórico automático, permissões granulares |
| **vs Asana/Monday.com** | Mais simples (Asana é overkill), customizável para seus processos |
| **vs Jira** | Muito técnico para consultoria, interface confusa |

---

## 5️⃣ PERSONAS

### 👤 Persona 1: Carla (Diretora Executiva)

**📋 Perfil Demográfico**
- Idade: 48 anos
- Profissão: Diretora de Operações
- Nível técnico: Intermediário (usa Excel bem, não gosta de aprender coisas muito complexas)
- Tempo com tecnologia: 2-3 horas/dia

**🎯 Goals (Objetivos)**
- Ver status de todos os projetos em um relance
- Tomar decisões baseadas em dados de progresso
- Entender bottlenecks e gargalos
- Crescer o negócio de forma sustentável

**😣 Pain Points (Problemas)**
- Gasta 45 min toda sexta colando dados de planilhas para apresentação
- Nunca tem número definitivo ("qual é o status real?")
- Não consegue prever atrasos com antecedência
- Tem que "nag" gerentes por atualizações

**💻 Contexto de Uso**
- Frequência: 1-2 vezes/dia (rápidas), mais no fim de semana quando trabalha em estratégia
- Duração: 5-10 minutos/uso
- Local: Desktop no escritório
- Ambiente: Escritório, às vezes casa no fim de semana

**📖 Exemplo de Dia Típico**
- **9h**: Chega, abre TaskFlow para ver atualizações noturnas
- **14h**: Reunião com cliente, consulta TaskFlow para confirmar datas de entrega
- **17h**: Revisa se algum projeto está em risco
- **Sexta 16h**: Prepara apresentação para acionista em 5 min (vs 45 min hoje)

---

### 👤 Persona 2: Rafael (Gerente de Projeto Sênior)

**📋 Perfil Demográfico**
- Idade: 32 anos
- Profissão: Gerente de Projeto
- Nível técnico: Avançado (já usou Jira, Asana, múltiplas ferramentas)
- Tempo com tecnologia: 5-6 horas/dia

**🎯 Goals (Objetivos)**
- Estar organizado e não perder tarefas
- Colaborar com time e clientes
- Demonstrar progresso
- Escalar para gerente sênior (impressionar Carla)

**😣 Pain Points (Problemas)**
- Atualizar planilha é tedioso e não avisa ninguém
- Não consegue priorizar com clareza
- Time não usa planilha consistentemente
- Clientes querem saber status e ele tem que exportar tudo

**💻 Contexto de Uso**
- Frequência: 5-6 vezes/dia (ao longo do dia)
- Duração: 3-5 minutos/uso
- Local: Desktop no escritório, mobile durante deslocamento
- Ambiente: Escritório, home office 2x/semana, reuniões com clientes

**📖 Exemplo de Dia Típico**
- **9h**: Daily com time usando TaskFlow no projetor
- **11h**: Cliente pergunta "qual é o status?", Rafael abre TaskFlow e mostra em 10 segundos
- **14h**: Tarefa finalizada, Rafael marca como concluído (1 clique, notifica interessados)
- **17h**: Revisa plano de próxima semana em TaskFlow

---

### 👤 Persona 3: Ana (Assistente de Projetos Júnior)

**📋 Perfil Demográfico**
- Idade: 24 anos
- Profissão: Assistente de Projetos
- Nível técnico: Iniciante (confortável com planilhas, mas não com sistemas complexos)
- Tempo com tecnologia: 4-5 horas/dia

**🎯 Goals (Objetivos)**
- Aprender gerenciamento de projetos
- Ajudar gerentes com tarefas administrativas
- Fazer um bom trabalho

**😣 Pain Points (Problemas)**
- Gerentes pedem para "fazer uma mudança na planilha" frequentemente
- Não entende a importância de atualizar dados corretamente
- Clientes ligam perguntando status, ela não sabe responder

**💻 Contexto de Uso**
- Frequência: 3-4 vezes/dia
- Duração: 10-15 minutos/uso
- Local: Desktop no escritório
- Ambiente: Escritório durante horário comercial

**📖 Exemplo de Dia Típico**
- **10h**: Rafael pede para "atualizar a planilha com as tarefas de ontem"
  - *Hoje*: 20 min colando dados em várias células
  - *Com TaskFlow*: 3 min criando/atualizando tarefas
- **14h**: Cliente liga perguntando, ela consulta TaskFlow e responde com confiança

---

## 6️⃣ FEATURES

### 🚀 Features MVP (Essenciais para Lançamento)

> ⚠️ Estas features são críticas. Sem elas, **não lançamos**. MVP esperado em **8 semanas**.

---

#### ✨ Feature 1: Dashboard com Visão Geral de Projetos

**📝 Descrição**:
Página inicial que mostra todos os projetos em um grid/cards. Cada projeto mostra:
- Nome do cliente
- Status geral (Planejamento/Em Progresso/Finalizado)
- Responsável
- Data de conclusão
- % de progresso

**❓ Por quê**:
Carla precisa ver TUDO em 10 segundos. Rafael quer visão rápida de seus projetos.

**💬 Exemplo de Uso**:
Carla abre TaskFlow → vê 8 projetos em cards → vê que 2 estão atrasados (vermelho) → clica em um para detalhes

**🔴 Prioridade**: CRÍTICA

---

#### ✨ Feature 2: Detalhes do Projeto com Tarefas

**📝 Descrição**:
Página que mostra um projeto específico com:
- Informações básicas (nome, cliente, datas, responsável)
- Lista de tarefas/fases em colunas (Planejamento → Em Progresso → Concluído)
- Possibilidade de arrastar tarefas entre colunas (Kanban)
- Prazos das tarefas

**❓ Por quê**:
Rafael precisa organizar seu trabalho em fases e ver o que está em progresso.

**💬 Exemplo de Uso**:
Rafael abre projeto "Cliente XYZ" → vê 3 fases (Análise, Implementação, Testes) → arrasta "Análise" de "Planejamento" para "Em Progresso" → sistema avisa interessados

**🔴 Prioridade**: CRÍTICA

---

#### ✨ Feature 3: Gerenciamento de Tarefas

**📝 Descrição**:
- Criar nova tarefa: Nome, descrição, responsável, data de conclusão
- Editar tarefa: Mudar informações
- Deletar tarefa: Remover (com confirmação)
- Clicar em tarefa: Ver detalhes completos + histórico de mudanças

**❓ Por quê**:
Gerentes precisam criar/organizar tarefas rapidamente. Sistema deve registrar histórico.

**💬 Exemplo de Uso**:
- Rafael cria "Reunião com cliente" → system envia notificação para Ana
- Ana marca como completo → system registra "Ana completou em 14:30"

**🔴 Prioridade**: CRÍTICA

---

#### ✨ Feature 4: Filtros e Busca

**📝 Descrição**:
- Filtrar projetos por status (Em Progresso, Atrasado, Concluído)
- Filtrar por responsável (Meus Projetos, Todos os Projetos)
- Buscar por nome do cliente/projeto

**❓ Por quê**:
Usuários querem achar informação rápido sem carregar tudo.

**💬 Exemplo de Uso**:
- Carla clica "Mostrar apenas ATRASADOS" → vê 2 projetos em risco
- Rafael busca "Acme" → vê 3 projetos com Acme como cliente

**🔴 Prioridade**: CRÍTICA

---

#### ✨ Feature 5: Sistema de Permissões

**📝 Descrição**:
- **Admin (Carla)**: Vê tudo, pode editar tudo
- **Gerente**: Vê todos os projetos, edita só seus projetos e tarefas
- **Assistente**: Vê projetos (leitura), edita tarefas designadas (com permissão do gerente)

**❓ Por quê**:
Cada pessoa precisa de acesso diferente. Segurança.

**💬 Exemplo de Uso**:
- Carla loga → vê TODOS os projetos
- Rafael loga → vê projetos dele + pode editar
- Ana loga → vê projetos (não edita) + edita tarefas designadas a ela

**🔴 Prioridade**: CRÍTICA

---

#### ✨ Feature 6: Histórico de Atividades

**📝 Descrição**:
Cada projeto mostra um feed de atividades:
- "Rafael criou tarefa X às 10:30"
- "Ana marcou tarefa Y como concluído às 14:45"
- "Sistema atualizou status para 'Atrasado' às 09:00"

**❓ Por quê**:
Sistema de auditoria. Também ajuda a entender o que aconteceu e comunicação assíncrona.

**💬 Exemplo de Uso**:
- Cliente reclama "vocês disseram que terminaria segunda"
- Carla vê histórico e mostra: "Status foi atualizado para 'finalizado' segunda às 17:00"

**🔴 Prioridade**: CRÍTICA

---

#### ✨ Feature 7: Notificações (In-App e Email)

**📝 Descrição**:
- Notificação in-app quando alguém comenta em seu projeto
- Email resumido diário (opcional)
- Badge mostrando quantas notificações não lidas

**❓ Por quê**:
Ninguém quer perder atualizações importantes. Hoje usam WhatsApp que é ruim.

**💬 Exemplo de Uso**:
- Rafael muda status de tarefa → Ana recebe notificação in-app
- Carla vê red badge no menu → sabe que tem atualizações

**🔴 Prioridade**: CRÍTICA

---

#### ✨ Feature 8: Autenticação e Login

**📝 Descrição**:
- Login com email/senha
- Sign-up (admin convida usuários, não open signup)
- Recuperação de senha

**❓ Por quê**:
Segurança e controle de quem acessa.

**💬 Exemplo de Uso**:
- Carla convida novo gerente: carla@acme.com → sistema envia email → novo gerente clica link → cria senha

**🔴 Prioridade**: CRÍTICA

---

#### ✨ Feature 9: Admin Panel Básico

**📝 Descrição**:
- Adicionar/remover usuários
- Ver lista de todos os usuários e permissões
- Simples (não muita complexidade)

**❓ Por quê**:
Carla precisa gerenciar usuários. Hoje faz manualmente.

**🔴 Prioridade**: CRÍTICA

---

#### ✨ Feature 10: Mobile Responsivo

**📝 Descrição**:
- Design responsivo para celular
- Ver projetos e status
- Editar tarefa (status, básico)
- Não é nativo, mas PWA é aceitável

**❓ Por quê**:
Rafael usa celular quando está em reunião com cliente ou em deslocamento.

**🔴 Prioridade**: CRÍTICA

---

### 🎁 Features Pós-MVP (Para Futuro)

> 💭 Estas features são legais mas **NÃO críticas** para lançamento. Planejadas para semanas 9-12+.

---

#### 🔮 Feature A: Integração Google Calendar

**📝 Descrição**: Sincronizar datas de tarefas com Google Calendar do usuário

**💡 Impacto**: Usuário não precisa manter calendário separado

**📅 Timeline**: Semana 10

---

#### 🔮 Feature B: Relatórios & Dashboards Analíticos

**📝 Descrição**: Gráficos de progresso, tempo médio de projeto, etc

**💡 Impacto**: Carla consegue analisar produtividade

**📅 Timeline**: Semana 11

---

#### 🔮 Feature C: Acesso para Clientes

**📝 Descrição**: Clientes podem ver progresso de SEUS projetos (leitura apenas)

**💡 Impacto**: Menos emails perguntando "qual é o status?"

**📅 Timeline**: Semana 12

---

#### 🔮 Feature D: Integração Slack

**📝 Descrição**: Notificações no Slack em vez de email

**💡 Impacto**: Melhor integração com ferramenta já usada

**📅 Timeline**: Semana 13

---

#### 🔮 Feature E: Comentários em Tarefas

**📝 Descrição**: Cada tarefa pode ter comentários/discussão

**💡 Impacto**: Comunicação centralizada por tarefa

**📅 Timeline**: Semana 13

---

## 7️⃣ REQUISITOS TÉCNICOS

### 📈 Escalabilidade (Usuários)

| Período | Quantidade |
|---------|-----------|
| **Dia 1** | 13 usuários (teste) |
| **Semana 1** | 13 usuários (all staff) |
| **Mês 3** | 13-20 usuários (possível novo gerente) |
| **Mês 6** | 13-20 usuários (+ 2-3 clientes em fase 2) |

### 🔒 Dados & Conformidade

| Aspecto | Resposta |
|--------|----------|
| **Dados sensíveis?** | ✅ SIM |
| **Se sim, quais** | Nomes e emails de funcionários (LGPD) + Nomes e dados de clientes (LGPD) |
| **Conformidade necessária** | LGPD (Lei Geral de Proteção de Dados) |
| **Requisitos** | Política de privacidade, consentimento para armazenar, direito ao esquecimento |

### 📱 Plataformas

- [x] **Web Desktop** (Principal)
- [ ] Mobile iOS (Responsivo é suficiente)
- [ ] Mobile Android (Responsivo é suficiente)
- [ ] Desktop App (Não necessário)

### 🔗 Integrações

- [x] **Google OAuth** (Fase 1 - para login)
- [x] **Email** (Para notificações)
- [ ] Google Workspace (Fase 2)
- [ ] Microsoft 365 (Não no MVP)

### ⚡ Performance

| Métrica | Alvo |
|--------|------|
| **Disponibilidade** | 99% uptime (aceitável ter 1-2h/mês de downtime) |
| **Tempo de resposta** | <2 segundos para carregar uma página |
| **Conexão esperada** | WiFi ou 4G |
| **Browsers** | Chrome, Firefox, Safari, Edge (últimas 2 versões) |

### 🌍 Idioma

| Aspecto | Descrição |
|--------|-----------|
| **Idioma principal** | Português Brasileiro |
| **Multi-idioma necessário?** | NÃO (futuro possível) |

---

## 8️⃣ TIMELINE

### 📅 Datas Importantes

| Marco | Data | Motivo |
|------|------|--------|
| **Data de Lançamento** | 28 de Janeiro de 2025 | Acme quer lançar antes de grande crescimento em Fevereiro |
| **Apresentação Acionista** | 15 de Janeiro de 2025 | TaskFlow pronto para demonstração |

### 🎯 Milestones

- **Milestone 1** (10/12/2024 - Semana 2): Design aprovado + banco de dados criado
- **Milestone 2** (24/12/2024 - Semana 4): Features 1-5 funcionando + teste com gerentes
- **Milestone 3** (07/01/2025 - Semana 6): Features 6-10 funcionando + testes finais
- **Milestone 4** (20/01/2025 - Semana 8): Beta testing com todos os usuários
- **Milestone 5** (28/01/2025 - Semana 9): 🎉 **LANÇAMENTO**

### ⏱️ Duração Estimada

| Fase | Duração |
|------|---------|
| **MVP** | 8 semanas (28 dias de desenvolvimento intensivo) |
| **Total (com pós-MVP)** | 12 semanas planejadas (Carla quer features extras em Fevereiro) |

### 🚫 Constraints

- **Deadline firme?** ✅ **SIM** (Acionista quer para apresentação)
- **Pode mudar de escopo?** ✅ **SIM**, mas Features A-E são pós-MVP, não MVP
- **Pessoas disponíveis?** Carla pode estar em reunião 50% do tempo (ajustar expectations)

---

## 9️⃣ ORÇAMENTO

### 💵 Faixa Orçamentária

**R$ 25.000 - R$ 35.000**

### 💳 Modelo de Pagamento

- [x] **Milestones** (33% a cada milestone)
  - Milestone 1 (Design): R$ 10.000
  - Milestone 3 (Features Core): R$ 10.000
  - Milestone 5 (Lançamento): R$ 10.000-15.000 (depende de escopo final)

### 📊 Custos Operacionais (Mensal)

| Item | Custo |
|------|-------|
| **Hosting (Vercel)** | R$ 50 |
| **Banco de dados (Supabase)** | R$ 100 |
| **Email (SendGrid)** | R$ 50 |
| **Domínio** | R$ 30 |
| **TOTAL** | **R$ 230/mês** (~R$ 2.760/ano) |

---

## 🔟 MÉTRICAS DE SUCESSO

### 🎯 Métrica Primária

**Aderência: 100% dos 12 gerentes usando o sistema diariamente em dia 30**

- **Target**: 100%
- **Prazo**: 30 dias após lançamento
- **Importância**: 🔴 CRÍTICA

> Se menos de 80% está usando, projeto falhou. Precisaremos repensar.

### 📊 Métricas Secundárias

| Métrica | Target | Prazo | Como Medir |
|--------|--------|-------|-----------|
| **Redução de Horas Administrativas** | -50% (36h → 18h/semana) | 60 dias | Survey + time tracking |
| **Satisfação (NPS)** | > 50 | 30 dias | Survey rápida (3 perguntas) |
| **Redução de Erros** | 80% menos discrepâncias | 60 dias | Auditoria antes/depois |

### ✅ Critérios de Aceitação

O projeto é considerado bem-sucedido quando:

- [ ] Nenhum usuário relatou perda de dados
- [ ] Sistema disponível 99% do tempo (máx 43 minutos/mês de downtime)
- [ ] Tempo de resposta média < 2 segundos
- [ ] 100% dos gerentes conseguem fazer tarefas básicas sem treinamento
- [ ] Carla consegue ver todos os projetos em 10 segundos no dashboard
- [ ] Não há relatórios críticos de segurança

---

## 1️⃣1️⃣ DEPENDÊNCIAS & RISCOS

### 🔗 Dependências

- [x] **Acesso a dados de clientes**: Sim (precisa dos dados dos 8 projetos atuais para seed)
- [x] **Treinamento de usuários**: Sim (precisa de 1-2h com cada gerente)
- [x] **Acesso aos gerentes para feedback**: Sim (testing iterations)
- [ ] Aprovações regulatórias: Não

### ⚠️ Riscos

#### Risco 1: Resistência à Mudança

- **Probabilidade**: 🟡 Média
- **Impacto**: 🔴 Alto (projeto falha se não adotam)
- **Mitigação**:
  - Envolver gerentes no design (fazer eles sentirem proprietários)
  - Fazer beta testing com 2-3 gerentes antes de lançar para todos
  - Ter "campanha" positiva (não forçar, mostrar benefícios)

#### Risco 2: Limite de Tempo

- **Probabilidade**: 🟡 Baixa-Média
- **Impacto**: 🔴 Alto (não consegue fazer tudo)
- **Mitigação**:
  - MVP bem definido (apenas 10 features)
  - Features pós-MVP explicitamente fora do escopo
  - Planejamento agressivo com buffers

#### Risco 3: Dados Atuais Inconsistentes

- **Probabilidade**: 🔴 Alta (sabemos que estão)
- **Impacto**: 🟡 Médio (limpeza inicial)
- **Mitigação**:
  - Planejar fase de "data cleanup" antes de seed
  - Carla valida dados antes de importar

---

## 1️⃣2️⃣ APROVAÇÃO

### 👨‍💼 Stakeholders

- [ ] **Cliente (Carla)**: Carla Santos - Assinado em __/__/__
- [x] **Product Manager**: João Silva - Assinado em 15/11/2024
- [ ] **Tech Lead**: [Pendente]

### 📋 Histórico de Versões

| Versão | Data | Autor | Mudanças |
|--------|------|-------|----------|
| 1.0 | 01/11/2024 | João Silva | Versão inicial (11 features MVP) |
| 1.1 | 10/11/2024 | João Silva | Removido 1 feature (relatórios), adicionado mobile responsivo |
| 1.2 | 15/11/2024 | João Silva | Ajustes menores pós-feedback de Carla, timeline confirmada |

---

## 📎 ANEXOS

### 🔗 Referências

- [Asana - UI Reference](https://asana.com)
- [Trello - UI Reference](https://trello.com)
- Google Sheets atuais (compartilhados com time)

### 📄 Documentos Relacionados

- Email de aprovação de Carla (15/11/2024)
- Brainstorm notes (10/11/2024)

### 🖼️ Screenshots/Mockups

[Será adicionado após design estar pronto]

---

## 🔐 Classificação

| Campo | Valor |
|-------|-------|
| **Classificação** | CONFIDENCIAL (Acme Consulting Ltda) |
| **Última atualização** | 15/11/2024 |
| **Próxima revisão** | 01/12/2024 (pré-milestone 1) |
