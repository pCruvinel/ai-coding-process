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
├── prompt-modelo-ideal-frontend.md    ← ⭐ Modelo ideal (feature do zero)
├── exemplo-uso-prompt.md              ← Exemplo prático do modelo ideal
├── prompt-modelo-figma-make.md        ← ⭐ Modelo para design Figma/v0
├── exemplo-uso-figma-make.md          ← Exemplo prático Figma/v0
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

#### Escolha o Template Correto

**Opção 1: Feature do Zero (sem design)**
```bash
cat .ai/prompt-modelo-ideal-frontend.md
```
- Use quando NÃO tem design pronto
- Foco em planejamento completo
- Veja exemplo: `exemplo-uso-prompt.md`

**Opção 2: Design Pronto Figma/v0** ⭐ NOVO
```bash
cat .ai/prompt-modelo-figma-make.md
```
- Use quando JÁ TEM design no Figma Make ou v0
- Foco em adaptar código exportado
- Substituir dados mockados por reais
- Veja exemplo: `exemplo-uso-figma-make.md`

#### Workflow

1. **Escolha o template** apropriado (acima)
2. **Copie** a seção "Template de Prompt Completo"
3. **Customize** com informações específicas
4. **Cole no Claude Code**
5. **Acompanhe** pelo checklist

#### Para Perguntas Gerais

Quando pedir ajuda a uma IA:

```
Por favor, leia o contexto do projeto em `.ai/contexto-projeto.md`
antes de prosseguir. Depois, [sua solicitação...]
```

## 📝 Arquivos Principais

### `prompt-modelo-ideal-frontend.md` ⭐
- **Quando usar**: Feature nova do zero (sem design pronto)
- **Conteúdo**: Template completo de prompt para IA de desenvolvimento
- **Inclui**:
  - Checklist completo de implementação (12 fases)
  - Padrões de código obrigatórios
  - Anti-patterns a evitar
  - Exemplos de código
  - Critérios de sucesso
- **Como usar**: Copie, customize e cole no chat do Claude Code

### `exemplo-uso-prompt.md`
- **Quando usar**: Para entender como aplicar o modelo ideal
- **Conteúdo**: Exemplo completo de implementação de feature "Gerenciamento de Tarefas"
- **Inclui**:
  - Prompt customizado completo
  - Código esperado
  - Timeline estimada
  - Dicas para sucesso

### `prompt-modelo-figma-make.md` ⭐ NOVO
- **Quando usar**: Implementar funcionalidade que JÁ TEM design no Figma Make/v0
- **Conteúdo**: Template adaptado para integração de design existente
- **Inclui**:
  - Checklist focado em adaptação de código exportado
  - Como substituir dados mockados por reais
  - Visual match com design original
  - Integração com Supabase
  - Estados (loading, error, empty) não incluídos no design
- **Como usar**: Cole código exportado do v0 + customize template

### `exemplo-uso-figma-make.md` ⭐ NOVO
- **Quando usar**: Para ver exemplo de implementação a partir de design v0
- **Conteúdo**: Exemplo completo de Dashboard Analytics do v0.dev
- **Inclui**:
  - Código exportado original
  - Adaptação para projeto real
  - Substituição de dados mockados
  - Queries Supabase
  - Timeline real (~3h)
  - Visual match 98%

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
