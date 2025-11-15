# 🎯 Inventário de Skills Claude

> Lista completa de todas as skills disponíveis neste projeto

## 📋 Skills Disponíveis

| # | Skill | Quando Usar | Comando |
|---|-------|-------------|---------|
| 01 | **Contexto do Projeto** | Início de qualquer tarefa | `@01-contexto-projeto` |
| 02 | **Padrões de Código** | Antes de escrever código | `@02-padroes-codigo` |
| 03 | **Checklist de Feature** | Implementar nova feature | `@03-checklist-feature` |
| 04 | **Debugging Guide** | Resolver bugs | `@04-debugging-guide` |

---

## 📖 Detalhamento das Skills

### 01 - Contexto do Projeto

**Arquivo**: `.claude/skills/01-contexto-projeto/SKILL.md`

**Descrição**: Fornece contexto completo da stack tecnológica, padrões arquiteturais e convenções do projeto.

**Quando Usar**:
- ✅ No início de qualquer tarefa
- ✅ Ao implementar nova feature
- ✅ Quando tiver dúvida sobre padrões
- ✅ Ao fazer code review

**Conteúdo Principal**:
- Stack tecnológica (Next.js, Supabase, Tailwind, etc.)
- Estrutura de diretórios
- Padrões de nomenclatura
- Convenções de código
- Configurações importantes

**Como Ativar**:
```
Por favor, leia @01-contexto-projeto antes de prosseguir.
[Depois sua solicitação...]
```

---

### 02 - Padrões de Código

**Arquivo**: `.claude/skills/02-padroes-codigo/SKILL.md`

**Descrição**: Define padrões específicos de código, boas práticas e convenções.

**Quando Usar**:
- ✅ Antes de escrever código novo
- ✅ Durante refatoração
- ✅ Ao fazer code review
- ✅ Quando inseguro sobre pattern a usar

**Conteúdo Principal**:
- Padrões de componentes React
- Padrões de TypeScript
- Padrões de Supabase/DB
- Error handling
- Validação com Zod
- Testes

**Como Ativar**:
```
Siga os padrões em @02-padroes-codigo para [tarefa].
```

---

### 03 - Checklist de Feature

**Arquivo**: `.claude/skills/03-checklist-feature/SKILL.md`

**Descrição**: Checklist completo para implementar uma feature do início ao fim.

**Quando Usar**:
- ✅ Implementar nova feature
- ✅ Garantir que nada foi esquecido
- ✅ Manter qualidade consistente

**Conteúdo Principal**:
- Planning e análise
- Database/Migrations
- Backend/API
- Frontend/Componentes
- Testing
- Documentation
- Code Quality
- Git e Deploy

**Como Ativar**:
```
Use @03-checklist-feature para implementar [nome da feature].
```

---

### 04 - Debugging Guide

**Arquivo**: `.claude/skills/04-debugging-guide/SKILL.md`

**Descrição**: Guia sistemático para debugar problemas.

**Quando Usar**:
- ✅ Bug difícil de resolver
- ✅ Erro não familiar
- ✅ Comportamento inesperado

**Conteúdo Principal**:
- Processo de debugging sistemático
- Ferramentas de debugging
- Problemas comuns e soluções
- Checklist de verificação

**Como Ativar**:
```
Siga @04-debugging-guide para resolver este bug: [descrição]
```

---

## 🚀 Fluxo de Trabalho Recomendado

### 1. Início de Tarefa
```
1. Ative @01-contexto-projeto
2. Leia a spec da tarefa
3. Se for nova feature, use @03-checklist-feature
```

### 2. Durante Desenvolvimento
```
1. Consulte @02-padroes-codigo quando tiver dúvidas
2. Siga as convenções estabelecidas
3. Teste incrementalmente
```

### 3. Se Encontrar Bug
```
1. Use @04-debugging-guide
2. Siga o processo sistemático
3. Documente a solução
```

### 4. Antes de Commit
```
1. Revise @02-padroes-codigo
2. Execute linter e type-check
3. Confirme que testes passam
```

---

## 📝 Como Criar Nova Skill

Se precisar criar uma skill personalizada:

1. **Crie diretório**:
   ```bash
   mkdir .claude/skills/05-nome-da-skill
   ```

2. **Crie SKILL.md**:
   ```bash
   touch .claude/skills/05-nome-da-skill/SKILL.md
   ```

3. **Preencha com template**:
   ```markdown
   # 🎯 Skill: [Nome da Skill]

   ## Descrição
   [Descrição breve do que esta skill faz]

   ## Quando Usar
   - ✅ [Situação 1]
   - ✅ [Situação 2]

   ## Conteúdo
   [Conteúdo detalhado da skill]

   ## Exemplo de Uso
   [Exemplos práticos]
   ```

4. **Adicione ao inventário** (este arquivo)

---

## 🎓 Dicas de Uso

### ✅ Boas Práticas
- **Sempre** ative contexto-projeto no início
- **Combine** skills quando fizer sentido
- **Referencie** skills em prompts
- **Mantenha** skills atualizadas

### ❌ Evite
- Usar skills sem ler antes
- Ignorar padrões estabelecidos
- Criar skills redundantes
- Deixar skills desatualizadas

---

## 📊 Status das Skills

| Skill | Status | Última Atualização |
|-------|--------|-------------------|
| 01-contexto-projeto | ✅ Completa | 2024-11-15 |
| 02-padroes-codigo | ✅ Completa | 2024-11-15 |
| 03-checklist-feature | ✅ Completa | 2024-11-15 |
| 04-debugging-guide | ✅ Completa | 2024-11-15 |

---

## 🔗 Recursos Relacionados

- **Documentação Técnica**: `docs/`
- **Contexto IA**: `.ai/`
- **Planejamento**: `planejamento/`
- **Skills**: `.claude/skills/`

---

**Última Atualização**: 2024-11-15
**Versão**: 1.0
**Status**: ✅ Pronto para uso
