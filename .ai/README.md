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
└── prompts/                           ← Prompts reutilizáveis
    ├── analise-documentacao.md
    ├── criar-feature.md
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

Quando pedir ajuda a uma IA:

```
Por favor, leia o contexto do projeto em `.ai/contexto-projeto.md`
antes de prosseguir. Depois, [sua solicitação...]
```

## 📝 Arquivos Principais

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
