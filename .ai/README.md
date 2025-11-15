# 🤖 Contexto para IAs

Este diretório contém arquivos de contexto para ferramentas de IA (Claude, GPT, etc.) usarem durante o desenvolvimento.

## 📂 Estrutura

```
.ai/
├── README.md                          ← Você está aqui
├── contexto-projeto.md                ← Contexto completo do projeto
├── contexto-projeto-template.md       ← Template para novo projeto
├── decisoes-tecnicas.md               ← ADRs e decisões importantes
├── frontend-export.md                 ← Código exportado do Figma Make/v0
├── prompt-modelo-ideal-frontend.md    ← ⭐ Modelo ideal de prompt para desenvolvimento
├── exemplo-uso-prompt.md              ← Exemplo prático de uso do modelo
└── prompts/                           ← Prompts reutilizáveis
    ├── analise-documentacao.md
    ├── criar-feature.md
    ├── debugging.md
    └── refatoracao.md
```

## 🎯 Como Usar

### Para Novo Projeto

1. **Copie o template**:
   ```bash
   cp .ai/contexto-projeto-template.md .ai/contexto-projeto.md
   ```

2. **Preencha o contexto** com informações do seu projeto específico

3. **Atualize conforme o projeto evolui**

### Durante Desenvolvimento

#### Para Implementar Nova Feature (RECOMENDADO)

1. **Abra o modelo ideal**:
   ```bash
   cat .ai/prompt-modelo-ideal-frontend.md
   ```

2. **Copie o template da seção "Template de Prompt Completo"**

3. **Customize** com informações da sua feature específica

4. **Cole no Claude Code** e acompanhe o progresso pelo checklist

5. **Veja o exemplo** em `exemplo-uso-prompt.md` se tiver dúvidas

#### Para Perguntas Gerais

Quando pedir ajuda a uma IA:

```
Por favor, leia o contexto do projeto em `.ai/contexto-projeto.md`
antes de prosseguir. Depois, [sua solicitação...]
```

## 📝 Arquivos Principais

### `prompt-modelo-ideal-frontend.md` ⭐ NOVO
- **Quando usar**: Sempre que for implementar uma nova feature frontend
- **Conteúdo**: Template completo de prompt para IA de desenvolvimento
- **Inclui**:
  - Checklist completo de implementação (12 fases)
  - Padrões de código obrigatórios
  - Anti-patterns a evitar
  - Exemplos de código
  - Critérios de sucesso
- **Como usar**: Copie, customize e cole no chat do Claude Code

### `exemplo-uso-prompt.md` ⭐ NOVO
- **Quando usar**: Para entender como aplicar o modelo ideal
- **Conteúdo**: Exemplo completo de implementação de feature "Gerenciamento de Tarefas"
- **Inclui**:
  - Prompt customizado completo
  - Código esperado
  - Timeline estimada
  - Dicas para sucesso

### `contexto-projeto.md`
- **Quando criar**: Fase 3 (Documentação)
- **Atualizar**: Semanalmente ou quando houver mudanças significativas
- **Conteúdo**: Stack, padrões, estrutura, decisões técnicas

### `decisoes-tecnicas.md`
- **Quando criar**: Fase 3 (Documentação)
- **Atualizar**: Sempre que tomar decisão arquitetural importante
- **Conteúdo**: ADRs (Architecture Decision Records)

### `frontend-export.md`
- **Quando criar**: Fase 1 (Design Frontend) - após exportar do Figma Make/v0
- **Atualizar**: Apenas se redesign completo
- **Conteúdo**: Código dos componentes, dados mockados, estrutura

## 🔗 Integração com Claude Code

Se você está usando Claude Code (CLI), ele automaticamente lê arquivos neste diretório quando você menciona o projeto.

## 📚 Recursos

- [How to write good prompts](https://docs.anthropic.com/claude/docs/prompt-engineering)
- [Context window management](https://docs.anthropic.com/claude/docs/context-windows)
