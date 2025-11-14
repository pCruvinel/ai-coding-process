# 📝 Guia de Criação de Claude Code Skills

## Visão Geral

Este documento fornece um guia completo para criar skills personalizadas para Claude Code, específicas para os projetos Dizevolv.

## O que são Skills?

Skills são arquivos markdown que fornecem contexto, padrões e instruções específicas para o Claude Code. Elas funcionam como "memória de longo prazo" e "guias de referência" que o Claude pode consultar durante o desenvolvimento.

## Estrutura de uma Skill

### Localização
```
.claude/skills/
├── 01-contexto-projeto/
│   └── SKILL.md
├── 02-padroes-codigo/
│   └── SKILL.md
├── 03-checklist-feature/
│   └── SKILL.md
└── 04-debugging-guide/
    └── SKILL.md
```

### Formato do Arquivo SKILL.md

```markdown
# [Emoji] Skill: [Nome da Skill]

## Descrição
[Descrição clara e concisa do que a skill faz e quando usar]

## [Seções de Conteúdo]
[Organizar conteúdo em seções lógicas]

### Exemplos de Código
[Sempre incluir exemplos práticos]

### Checklists
[Usar checklists quando aplicável]

---

**Quando usar esta skill**: [Explicação clara de quando invocar]
```

## Componentes de uma Skill Eficaz

### 1. Título e Descrição
- **Emoji**: Use emoji relevante para identificação visual
- **Nome**: Claro e descritivo
- **Descrição**: Explique o propósito e valor da skill

### 2. Contexto e Escopo
- Defina claramente quando a skill deve ser usada
- Explique o que está incluído/excluído
- Referencie outras skills relacionadas

### 3. Exemplos Práticos
```typescript
// ✅ CORRETO: Sempre mostre o caminho correto
export async function exemplo() {
  // Código bem estruturado
}

// ❌ INCORRETO: Mostre anti-patterns para educar
function exemploRuim() {
  // Código problemático
}
```

### 4. Checklists
- Use para garantir completude
- Organize por prioridade ou ordem lógica
- Seja específico e acionável

```markdown
- [ ] Item específico e mensurável
- [ ] Outro item com critério claro
```

### 5. Formatação Consistente
- **Negrito** para termos importantes
- `Code` para código inline
- Blocos de código para exemplos
- Tabelas para comparações
- Listas para sequências

### 6. Organização Visual
- Use headings (##, ###) para hierarquia
- Separe seções com linhas horizontais `---`
- Use emojis para categorização:
  - 🎯 Objetivos/Metas
  - ✅ Checklists/Completude
  - 🚨 Alertas/Avisos
  - 💡 Dicas/Sugestões
  - 🔒 Segurança
  - 🚀 Performance
  - 🐛 Debugging
  - 📋 Documentação

## Tipos de Skills

### 1. Skills de Contexto
**Propósito**: Fornecer contexto do projeto/tecnologia

**Elementos**:
- Stack tecnológica
- Estrutura de diretórios
- Convenções de nomenclatura
- Padrões arquiteturais

**Exemplo**: `01-contexto-projeto`

### 2. Skills de Padrões
**Propósito**: Definir padrões de código e boas práticas

**Elementos**:
- Padrões por camada (Frontend, Backend, etc.)
- Exemplos de código correto/incorreto
- Checklist de qualidade
- Padrões de segurança

**Exemplo**: `02-padroes-codigo`

### 3. Skills de Processos
**Propósito**: Guiar através de processos passo a passo

**Elementos**:
- Fases do processo
- Checklists por fase
- Exemplos práticos
- Critérios de completude

**Exemplo**: `03-checklist-feature`

### 4. Skills de Troubleshooting
**Propósito**: Ajudar a diagnosticar e resolver problemas

**Elementos**:
- Sintomas e causas comuns
- Passos de diagnóstico
- Soluções práticas
- Ferramentas de debugging

**Exemplo**: `04-debugging-guide`

### 5. Skills de Domínio
**Propósito**: Conhecimento específico de um domínio/feature

**Elementos**:
- Conceitos do domínio
- Regras de negócio
- Casos de uso
- Validações específicas

**Exemplo**: Sistema de pagamentos, autenticação, etc.

## Como Criar uma Nova Skill

### Passo 1: Identificar a Necessidade
Pergunte-se:
- Esta informação é reutilizável em múltiplos contextos?
- Ela economizará tempo ou evitará erros?
- É específica do projeto/domínio Dizevolv?
- Complementa as skills existentes?

### Passo 2: Planejar o Conteúdo
- Defina o escopo: O que incluir/excluir?
- Liste os tópicos principais
- Identifique exemplos necessários
- Determine checklists úteis

### Passo 3: Escolher Número e Nome
```bash
# Convenção: XX-nome-descritivo
05-autenticacao-supabase/
06-pagamentos-stripe/
07-email-templates/
```

### Passo 4: Criar Estrutura
```bash
# Criar diretório
mkdir -p .claude/skills/05-nome-skill

# Criar arquivo
touch .claude/skills/05-nome-skill/SKILL.md
```

### Passo 5: Escrever Conteúdo
Use o template:

```markdown
# 🎯 Skill: [Nome da Skill]

## Descrição
[2-3 frases explicando o propósito]

## Quando Usar
[Contextos específicos onde esta skill é útil]

## [Seção Principal 1]

### Subsection
[Conteúdo organizado]

## [Seção Principal 2]

### Exemplos
\`\`\`typescript
// Exemplo prático
\`\`\`

## Checklist

- [ ] Item 1
- [ ] Item 2

## Referências

- [Link para docs](https://...)
- [Link relacionado](https://...)

---

**Quando usar esta skill**: [Explicação clara]
```

### Passo 6: Testar
1. Leia a skill como se fosse o Claude
2. Verifique se exemplos são claros
3. Teste checklists em cenário real
4. Peça feedback de outro dev

### Passo 7: Atualizar Inventário
Adicione a nova skill em `planejamento/06-SKILLS-CLAUDE/inventario.md`

## Melhores Práticas

### ✅ Faça

1. **Seja específico**: Evite generalizações
   ```markdown
   ✅ "Use createServerClient() em Server Components"
   ❌ "Use o cliente correto"
   ```

2. **Mostre código**: Exemplos > Explicações
   ```markdown
   ✅ Incluir exemplo completo de código
   ❌ "Você deveria fazer X de forma Y"
   ```

3. **Use checklists**: Para garantir completude
   ```markdown
   ✅ - [ ] Criar tabela no Supabase
   ❌ "Não esqueça de criar a tabela"
   ```

4. **Contextualize**: Explique o "porquê"
   ```markdown
   ✅ "Use RLS para segurança, garantindo que usuários só acessem seus dados"
   ❌ "Use RLS"
   ```

5. **Mantenha atualizado**: Revise periodicamente
   - Novas versões de bibliotecas
   - Novos padrões descobertos
   - Feedback da equipe

### ❌ Evite

1. **Informações óbvias**: Foque no não-óbvio
2. **Exemplos genéricos**: Use casos reais do projeto
3. **Excesso de texto**: Seja conciso
4. **Falta de estrutura**: Organize logicamente
5. **Inconsistência**: Siga o padrão das outras skills

## Template de Skill Básica

```markdown
# 🎯 Skill: [Nome]

## Descrição
Esta skill [descreve o que faz].

## Quando Usar
Use esta skill quando:
- [Contexto 1]
- [Contexto 2]
- [Contexto 3]

## Conceitos Principais

### [Conceito 1]
[Explicação]

### [Conceito 2]
[Explicação]

## Exemplos Práticos

### Exemplo 1: [Título]
\`\`\`typescript
// Código exemplo
\`\`\`

### Exemplo 2: [Título]
\`\`\`typescript
// Código exemplo
\`\`\`

## Checklist

### Preparação
- [ ] Item 1
- [ ] Item 2

### Implementação
- [ ] Item 3
- [ ] Item 4

### Validação
- [ ] Item 5
- [ ] Item 6

## Problemas Comuns

### ❌ Problema 1
**Sintoma**: [Descrição]
**Causa**: [Explicação]
**Solução**: [Como resolver]

### ❌ Problema 2
**Sintoma**: [Descrição]
**Causa**: [Explicação]
**Solução**: [Como resolver]

## Referências

- [Docs oficiais](https://...)
- [Artigo relacionado](https://...)

---

**Quando usar esta skill**: [Descrição clara de quando invocar esta skill]
```

## Organização por Complexidade

### Skills Básicas (Essenciais)
- Contexto do Projeto
- Padrões de Código
- Checklist de Feature
- Debugging Guide

### Skills Intermediárias
- Autenticação e Autorização
- Integração com APIs
- Upload de Arquivos
- Real-time com Supabase

### Skills Avançadas
- Performance Optimization
- Arquitetura de Features Complexas
- n8n Workflows e Agentes IA
- Deploy e CI/CD

## Manutenção de Skills

### Quando Atualizar
- Mudança na stack tecnológica
- Descoberta de novos padrões
- Feedback da equipe
- Erros recorrentes identificados

### Como Atualizar
1. Identificar seção a atualizar
2. Fazer alteração mantendo estrutura
3. Adicionar nota de atualização se relevante
4. Testar com caso real
5. Atualizar data de revisão (opcional)

### Versionamento (Opcional)
```markdown
<!-- No final do arquivo -->
---

**Última atualização**: 2025-01-14
**Versão**: 2.0
**Mudanças**:
- Adicionado suporte para Supabase v2
- Novos exemplos de RLS
```

## Exemplos de Skills Especializadas

### Skill de Autenticação
```markdown
# 🔐 Skill: Autenticação Supabase

## Fluxos Suportados
- Email/Password
- Magic Link
- OAuth (Google, GitHub)
- Phone (SMS)

## Server vs Client
[Explicar diferenças]

## Implementação Passo a Passo
[Guia completo]
```

### Skill de Pagamentos
```markdown
# 💳 Skill: Integração Stripe

## Setup
[Configuração inicial]

## Fluxos
- Checkout único
- Assinaturas
- Webhooks

## Segurança
[Considerações]
```

### Skill de n8n
```markdown
# 🤖 Skill: n8n Workflows

## Integração com Next.js
[Como integrar]

## Agentes de IA
[Padrões para agentes]

## Webhooks
[Setup e segurança]
```

## Conclusão

Skills bem escritas são um investimento que:
- ✅ Reduzem tempo de desenvolvimento
- ✅ Garantem consistência de código
- ✅ Facilitam onboarding de novos devs
- ✅ Previnem erros comuns
- ✅ Documentam decisões arquiteturais

Invista tempo criando e mantendo skills de qualidade!

---

**Próximo passo**: Consulte `inventario.md` para ver todas as skills disponíveis e identificar gaps.
