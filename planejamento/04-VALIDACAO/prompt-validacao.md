# ✅ Prompt: Validação de Consistência e Completude

Use este prompt com Claude IA para validar todo o planejamento antes de iniciar o desenvolvimento.

---

## 🎯 Contexto

Você é um tech lead experiente responsável por revisar e validar todo o planejamento de um projeto web antes do início do desenvolvimento. Sua missão é identificar gaps, inconsistências e riscos que possam comprometer o sucesso do projeto.

**Stack Tecnológica**:
- Frontend: Next.js 14+ (App Router), TypeScript, Tailwind CSS v4, shadcn/ui
- Backend: Next.js API Routes, Supabase (PostgreSQL + Auth + Storage)
- Deploy: Vercel + Supabase Cloud
- Agentes IA (se aplicável): N8N

**Duração desta fase**: 1 dia

---

## 📋 Entrada (forneça ao Claude)

### 1. PRD (Product Requirements Document)
```
[Cole o conteúdo de planejamento/00-PRE-DESENVOLVIMENTO/prd.md]
```

### 2. Documentação Técnica
```
[Cole ou informe que os seguintes arquivos foram criados:
- docs/01-VISAO-GERAL.md
- docs/02-ARQUITETURA.md
- docs/03-ESPECIFICACAO.md
- docs/04-BANCO-DE-DADOS.md
- docs/05-API.md
- docs/06-COMPONENTES.md
- .ai/contexto-projeto.md]
```

### 3. Frontend Exportado (Figma Make)
```
[Informações sobre o código exportado:
- Número de páginas/rotas
- Componentes principais
- Bibliotecas utilizadas]
```

### 4. Timeline Proposta
```
- Entrevista/PRD: [X semanas]
- Design Frontend: [X dias]
- Setup Backend: [X dia]
- Documentação: [X dia]
- Desenvolvimento: [X semanas]
- Testes: [X dias]
- Deploy: [X dias]
```

---

## 🎯 Tarefa

Realize uma validação completa do planejamento e gere um relatório detalhado com score, gaps, riscos e recomendações.

---

## 🔍 Dimensões de Validação

### 1. Consistência (PRD ↔️ Documentação)

**Verificar**:
- [ ] Todas as features do PRD têm especificação técnica correspondente
- [ ] Todas as personas/usuários do PRD são contempladas nas regras de negócio
- [ ] Objetivos de negócio do PRD estão alinhados com a arquitetura proposta
- [ ] Não há features na documentação que não existem no PRD
- [ ] Terminologia é consistente entre PRD e docs técnicas

**Perguntas**:
- Alguma feature do PRD foi esquecida na documentação?
- Alguma regra de negócio do PRD não foi mapeada?
- Os fluxos descritos no PRD batem com a especificação técnica?

---

### 2. Completude de Documentação

**Banco de Dados**:
- [ ] Todas as entidades necessárias estão mapeadas
- [ ] Relacionamentos entre tabelas estão definidos
- [ ] RLS policies estão especificadas para cada tabela
- [ ] Triggers (updated_at, etc.) estão documentados
- [ ] Índices necessários foram identificados
- [ ] Migrations estão planejadas

**API**:
- [ ] Todos os endpoints necessários estão documentados
- [ ] Parâmetros (query, body, path) estão definidos
- [ ] Respostas (success e errors) estão documentadas
- [ ] Autenticação/autorização está clara para cada endpoint
- [ ] Exemplos de request/response estão presentes

**Componentes Frontend**:
- [ ] Hierarquia de componentes está mapeada
- [ ] Componentes shadcn/ui necessários foram identificados
- [ ] Componentes customizados estão listados
- [ ] Estados globais (se necessário) estão definidos
- [ ] Hooks personalizados foram planejados

**Contexto IA**:
- [ ] Arquivo `.ai/contexto-projeto.md` foi criado
- [ ] Contém resumo executivo do projeto
- [ ] Lista stack e ferramentas
- [ ] Define padrões de código
- [ ] Inclui estrutura de pastas

---

### 3. Viabilidade Técnica

**Stack & Ferramentas**:
- [ ] Stack escolhida (Next.js + Tailwind v4 + Supabase) suporta todas as features
- [ ] Integrações planejadas (N8N, APIs externas) são viáveis
- [ ] Não há dependências conflitantes ou impossíveis

**Performance**:
- [ ] Arquitetura suporta número esperado de usuários
- [ ] Estratégia de cache está definida (se necessário)
- [ ] Upload de arquivos está planejado (se necessário)
- [ ] Real-time está configurado (se necessário)

**Segurança**:
- [ ] Autenticação está bem definida (Supabase Auth)
- [ ] Autorização está clara (RLS policies)
- [ ] Validações de input estão mapeadas
- [ ] Proteção contra ataques comuns (XSS, CSRF, SQL Injection via RLS)

---

### 4. Timeline Realista

**Análise de Prazo**:
- [ ] Tempo alocado para cada fase é realista
- [ ] Há buffer para imprevistos (10-20%)
- [ ] Complexidade das features foi considerada
- [ ] Espaço para testes e refinamento existe

**Dependências**:
- [ ] Ordem das features respeita dependências técnicas
- [ ] Setup de infraestrutura vem antes de features
- [ ] Autenticação vem antes de features protegidas
- [ ] Não há bloqueadores não resolvidos

---

### 5. Riscos Identificados

**Técnicos**:
- Integrações complexas (N8N, APIs externas)
- Features real-time (se aplicável)
- Upload/processamento de arquivos grandes (se aplicável)
- Performance com muitos dados

**Escopo**:
- Feature creep (scope mal definido)
- Requisitos ambíguos no PRD
- Falta de priorização (MVP vs Pós-MVP)

**Timeline**:
- Subestimação de complexidade
- Falta de buffer para imprevistos
- Dependências externas (APIs, third-party)

**Equipe**:
- Conhecimento insuficiente da stack
- Dependência de uma única pessoa
- Falta de code review / QA

---

## 📊 Template de Resposta

Organize sua resposta da seguinte forma:

```markdown
# Relatório de Validação: [Nome do Projeto]

Data: [Data atual]
Responsável: Claude IA (Tech Lead)

---

## 📈 Score Geral: [X]/10

**Legenda**:
- 9-10: Excelente, pronto para desenvolvimento
- 7-8: Bom, alguns ajustes necessários
- 5-6: Médio, gaps significativos a resolver
- 0-4: Crítico, replanejar antes de prosseguir

---

## ✅ Resumo Executivo

[2-3 parágrafos com overview da validação]

**Pontos Fortes**:
- [Listar 3-5 pontos fortes]

**Áreas de Atenção**:
- [Listar 3-5 áreas que precisam de atenção]

---

## 🔍 Validação Detalhada

### 1. Consistência (PRD ↔️ Documentação)

**Score**: [X]/10

**Análise**:
[Análise detalhada da consistência]

**Gaps Encontrados**:
- [ ] [Gap 1]
- [ ] [Gap 2]

**Recomendações**:
1. [Recomendação 1]
2. [Recomendação 2]

---

### 2. Completude de Documentação

**Score**: [X]/10

**Banco de Dados**:
- Score: [X]/10
- Gaps: [Listar gaps]

**API**:
- Score: [X]/10
- Gaps: [Listar gaps]

**Frontend**:
- Score: [X]/10
- Gaps: [Listar gaps]

**Recomendações**:
1. [Recomendação 1]
2. [Recomendação 2]

---

### 3. Viabilidade Técnica

**Score**: [X]/10

**Análise**:
[Análise de viabilidade técnica]

**Pontos de Atenção**:
- [Ponto 1]
- [Ponto 2]

**Recomendações**:
1. [Recomendação 1]
2. [Recomendação 2]

---

### 4. Timeline

**Score**: [X]/10

**Análise**:
[Análise da timeline proposta]

**Riscos de Prazo**:
- [Risco 1]
- [Risco 2]

**Recomendações**:
1. [Ajuste de timeline recomendado]
2. [Buffer sugerido]

---

### 5. Riscos Identificados

#### Riscos Críticos (Bloqueadores)
1. **[Nome do Risco]**
   - Impacto: Alto/Médio/Baixo
   - Probabilidade: Alta/Média/Baixa
   - Mitigação: [Como mitigar]

#### Riscos Médios
1. **[Nome do Risco]**
   - Impacto: Alto/Médio/Baixo
   - Probabilidade: Alta/Média/Baixa
   - Mitigação: [Como mitigar]

#### Riscos Baixos
1. **[Nome do Risco]**
   - Impacto: Alto/Médio/Baixo
   - Probabilidade: Alta/Média/Baixa
   - Mitigação: [Como mitigar]

---

## 📋 Checklist de Aprovação

### Critérios Mínimos para Prosseguir:
- [ ] Score geral >= 8/10
- [ ] Nenhum gap crítico (bloqueador) não resolvido
- [ ] Schema do banco completo e consistente
- [ ] Todas as features do MVP estão documentadas
- [ ] RLS policies definidas
- [ ] Timeline tem buffer de 10-20%

### Status: [✅ APROVADO / ⚠️ APROVADO COM RESSALVAS / ❌ REPROVAR]

---

## 🎯 Próximos Passos

1. [Passo 1 - resolver gap crítico X]
2. [Passo 2 - ajustar documentação Y]
3. [Passo 3 - prosseguir para Fase 5]

---

## 📝 Observações Adicionais

[Qualquer observação relevante que não se encaixe nas seções acima]

---

**Validado por**: Claude IA
**Data**: [Data]
```

---

## 💡 Dicas para Melhor Resultado

1. **Forneça toda a documentação**: Quanto mais contexto, melhor a validação
2. **Seja honesto sobre gaps**: Se algo não foi documentado, mencione
3. **Considere o contexto**: Um MVP pode ter score menor que um produto completo
4. **Itere se necessário**: Use feedback para melhorar documentação
5. **Priorize riscos críticos**: Resolva bloqueadores antes de prosseguir

---

## 🔄 Exemplo de Uso

```
Olá Claude! Preciso validar meu planejamento antes de iniciar desenvolvimento.

**PRD**:
[Cole planejamento/00-PRE-DESENVOLVIMENTO/prd.md]

**Documentação Criada**:
- ✅ docs/01-VISAO-GERAL.md (completo)
- ✅ docs/02-ARQUITETURA.md (completo)
- ✅ docs/03-ESPECIFICACAO.md (completo)
- ✅ docs/04-BANCO-DE-DADOS.md (completo, 5 tabelas)
- ✅ docs/05-API.md (12 endpoints documentados)
- ✅ docs/06-COMPONENTES.md (completo)
- ✅ .ai/contexto-projeto.md (completo)

**Frontend (Figma Make)**:
- 7 páginas criadas
- Usa shadcn components
- Responsivo

**Timeline Proposta**:
- Entrevista/PRD: 2 semanas (completo)
- Design Frontend: 3 dias (completo)
- Setup Backend: 1 dia
- Documentação: 1 dia (completo)
- Desenvolvimento: 3 semanas
- Testes: 3 dias
- Deploy: 2 dias

Gere o relatório de validação completo seguindo o template.
```

---

**Pronto para validar?** Cole este prompt no Claude junto com toda sua documentação!
