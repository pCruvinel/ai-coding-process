# 📋 FASE 0: PRÉ-DESENVOLVIMENTO

## Visão Geral

Antes de escrever uma única linha de código, você precisa entender completamente o que será construído. Esta fase é crucial para o sucesso do projeto.

**Duração estimada**: 3-5 dias
**Responsável**: Product Manager + Cliente

## 🎯 Objetivos

1. Conduzir entrevista detalhada com o cliente
2. Criar um PRD (Product Requirements Document) completo
3. Definir personas e user stories
4. Listar features MVP e pós-MVP
5. Estabelecer critérios de sucesso
6. Obter aprovação do cliente

## 📂 Arquivos Nesta Fase

### Arquivos Principais
- [`prd.md`](./prd.md) - **SEU PRD** (preencha este arquivo)
- [`template-prd.md`](./template-prd.md) - Template completo do PRD
- [`exemplo-prd.md`](./exemplo-prd.md) - Exemplo de PRD preenchido

### Guias e Instruções
- [`guia-entrevista.md`](./guia-entrevista.md) - Como conduzir a entrevista
- [`prompt-entrevista.md`](./prompt-entrevista.md) - Prompt para Claude conduzir entrevista
- [`guia-qualidade-prd.md`](./guia-qualidade-prd.md) - Como avaliar qualidade do PRD

### Recursos Complementares
- [`checklist.md`](./checklist.md) - Checklist completo da fase
- [`faq.md`](./faq.md) - Perguntas frequentes
- [`template-email-follow-up.md`](./template-email-follow-up.md) - Templates de comunicação

## 🔄 Fluxo da Fase

```
┌─────────────────────────────┐
│  Brainstorm inicial         │
│  (Idea + Contexto)          │
└─────────────┬───────────────┘
              │
┌─────────────▼───────────────┐
│  Entrevista com cliente     │
│  (Coletar informações)      │
└─────────────┬───────────────┘
              │
┌─────────────▼───────────────┐
│  Rascunho do PRD            │
│  (Organizar informações)    │
└─────────────┬───────────────┘
              │
┌─────────────▼───────────────┐
│  Refinamento com cliente    │
│  (Feedback + Ajustes)       │
└─────────────┬───────────────┘
              │
┌─────────────▼───────────────┐
│  PRD Final Aprovado         │
│  ✅ Pronto para Fase 1      │
└─────────────────────────────┘
```

## 📋 Checklist Rápida

- [ ] Entrevista com cliente realizada
- [ ] PRD criado com todas informações
- [ ] Objetivos de negócio claros
- [ ] Personas definidas (2-3)
- [ ] Features MVP listadas (5-10 features)
- [ ] Features pós-MVP identificadas
- [ ] Prazo definido
- [ ] Orçamento definido (se aplicável)
- [ ] Cliente aprovou PRD
- [ ] Documentação assinada ou confirmada

## 🚀 Como Começar

### Opção 1: Com Claude IA (Recomendado)
1. Cole este prompt no Claude: [`prompt-entrevista.md`](./prompt-entrevista.md)
2. Siga as instruções do Claude
3. Claude gerará um PRD inicial
4. Cole o resultado em [`prd.md`](./prd.md)
5. Revise com o cliente
6. Use o [`guia-qualidade-prd.md`](./guia-qualidade-prd.md) para validar

### Opção 2: Manual
1. Use [`guia-entrevista.md`](./guia-entrevista.md)
2. Conduza a entrevista pessoalmente
3. Copie o [`template-prd.md`](./template-prd.md) para [`prd.md`](./prd.md)
4. Preencha cada seção
5. Use o [`guia-qualidade-prd.md`](./guia-qualidade-prd.md) para validar
6. Envie para cliente usando templates de [`template-email-follow-up.md`](./template-email-follow-up.md)

## 📚 O Que Você Precisa Saber

### PRD (Product Requirements Document)
Um PRD é um documento que descreve CLARAMENTE:
- **O QUÊ**: O que será construído
- **POR QUÊ**: Objetivos de negócio
- **PARA QUEM**: Personas/usuários alvo
- **COMO**: Features e funcionalidades

### Personas
Representações fictícias dos usuários:
- Nome, age, profissão
- Goals (objetivos)
- Painpoints (problemas)
- Como usar a app

### Features MVP vs Pós-MVP
- **MVP**: Features essenciais para lançamento (5-10)
- **Pós-MVP**: Features para futuro (15+)

## 💡 Dicas Importantes

### ✅ Fazer
- ✅ Fazer perguntas de esclarecimento
- ✅ Confirmar seu entendimento
- ✅ Documentar TUDO
- ✅ Ser específico (não genérico)
- ✅ Focar no problema, não na solução
- ✅ Usar o [`guia-qualidade-prd.md`](./guia-qualidade-prd.md) antes de finalizar
- ✅ Conseguir aprovação por escrito

### ❌ Evitar
- ❌ Assumir sem perguntar
- ❌ Deixar ambiguidades
- ❌ Prometer muito (MVP focado)
- ❌ Ignorar requisitos não-funcionais
- ❌ Escopo aberto
- ❌ Prosseguir sem aprovação do cliente

### 📧 Comunicação
Use os templates em [`template-email-follow-up.md`](./template-email-follow-up.md) para:
- Enviar PRD para revisão
- Follow-up se cliente não responder
- Pedir aprovação formal
- Gerenciar mudanças de escopo

## 🎓 Exemplo Prático

Veja [`exemplo-prd.md`](./exemplo-prd.md) para um exemplo completo de PRD.

## ✅ Quando Você Sabe que Está Pronto

### Checklist Rápido de Conclusão

- [ ] [`prd.md`](./prd.md) está completo (sem placeholders)
- [ ] PRD passa no [`guia-qualidade-prd.md`](./guia-qualidade-prd.md) com ≥70 pontos
- [ ] O cliente viu e aprovou o PRD por escrito
- [ ] Tem pelo menos 2-3 personas bem definidas
- [ ] Consegue listar 5-10 features MVP claramente
- [ ] Timeline e budget estão realistas e acordados
- [ ] Consegue fazer "pitch de elevador" do projeto em 2 min
- [ ] Todos os itens do [`checklist.md`](./checklist.md) estão completos

### Teste Final

Use o teste do "Pitch de Elevador" no [`guia-qualidade-prd.md`](./guia-qualidade-prd.md):
- Consegue responder as 5 perguntas em 30 segundos cada?
- Se SIM → Pronto! 🎉
- Se NÃO → Revise o PRD

### Perguntas Frequentes?

Consulte o [`faq.md`](./faq.md) para dúvidas comuns

## 🔗 Próxima Etapa

Quando o PRD estiver aprovado, vá para: **FASE 1: DESIGN FRONTEND**

---

**Status**: 🟢 Pronto para começar
**Última atualização**: Nov 2024
