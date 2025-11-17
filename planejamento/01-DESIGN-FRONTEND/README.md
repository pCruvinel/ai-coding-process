# 🎨 FASE 1: DESIGN FRONTEND COM FIGMA MAKE

## Visão Geral

Criar todas as telas, componentes visuais e código frontend da aplicação usando **Figma Make** (figma.com/make) - plataforma de IA especializada em codificação frontend que gera código React + TypeScript + Tailwind + Shadcn/ui automaticamente.

**Duração estimada**: 2-3 dias
**Responsável**: PM + Cliente
**Ferramenta**: **Figma Make** (obrigatório)
**Output**: React + TypeScript + Tailwind CSS v4 + Shadcn/ui

---

## 🎯 Objetivos

1. Converter PRD em prompt claro e objetivo para Figma Make
2. Gerar todas as telas principais através do Figma Make
3. Revisar e ajustar componentes e layout
4. Obter aprovação visual do cliente
5. Exportar código funcional
6. Documentar telas e componentes criados

---

## 📂 Arquivos Desta Fase

### Guias Principais
- 📘 [`guia-figma-make.md`](./guia-figma-make.md) - **Guia completo do Figma Make**
  - Capacidades da plataforma
  - Componentes disponíveis
  - Como escrever bons prompts
  - Exemplos práticos

- 📝 [`template-prompt-figma-make.md`](./template-prompt-figma-make.md) - **Template de prompt**
  - Template completo
  - Exemplo preenchido
  - Versão simplificada para MVPs

- ✅ [`checklist.md`](./checklist.md) - **Checklist da fase**
  - Tarefas passo a passo
  - Critérios de conclusão

### Referências Técnicas
- 🎨 [`componentes-shadcn.md`](./componentes-shadcn.md) - Lista completa Shadcn/ui
- 🎨 [`design-system.md`](./design-system.md) - Sistema de design padrão
- 🎨 [`padroes-tailwind-v4.md`](./padroes-tailwind-v4.md) - Padrões Tailwind CSS v4

---

## 🔄 Fluxo da Fase

```
PRD → Prompt Figma Make → Gerar no Figma Make → Revisar →
Cliente aprova → Export código → Documentar → Próxima Fase
```

---

## ✅ Checklist Rápida

- [ ] PRD revisado e compreendido
- [ ] Prompt criado usando template
- [ ] Telas principais geradas no Figma Make
- [ ] Design System básico definido (cores, tipografia)
- [ ] Componentes Shadcn/ui integrados
- [ ] Design responsivo (mobile + desktop)
- [ ] Estados principais (normal, loading, error, empty)
- [ ] Cliente aprovou visualmente
- [ ] Código exportado e salvo em `.ai/frontend-export.md`
- [ ] Componentes documentados

---

## 🛠️ Ferramenta: Figma Make

### Por Que Figma Make?

**Figma Make** é uma plataforma de **Codificação com IA para FRONTEND** que:

✅ Gera código React + TypeScript production-ready
✅ Usa Tailwind CSS v4.0 nativamente
✅ Tem biblioteca Shadcn/ui completa integrada
✅ Suporta integração nativa com Supabase
✅ Produz componentes modernos com hooks e effects
✅ Gera código limpo e bem estruturado

**IMPORTANTE**: Esta não é apenas uma ferramenta de design visual, mas sim de **CODIFICAÇÃO**. Por isso, os prompts devem ser diretos e objetivos, sem processos complexos.

### Acesso

🌐 **Link**: [figma.com/make](https://figma.com/make)

---

## 🚀 Como Começar

### Passo 1: Preparar Prompt

1. **Revisar o PRD completo**
   - Entender todas as funcionalidades
   - Identificar todas as telas necessárias
   - Listar interações principais

2. **Usar o template**
   - Abrir [`template-prompt-figma-make.md`](./template-prompt-figma-make.md)
   - Preencher todas as seções
   - Ser específico nos componentes Shadcn/ui

3. **Definir preferências de design**
   - Cores (hex codes)
   - Estilo visual (moderno, minimalista, etc.)
   - Referências visuais (se houver)

**Dica**: Consulte [`guia-figma-make.md`](./guia-figma-make.md) para saber como mencionar componentes e bibliotecas corretamente.

---

### Passo 2: Gerar no Figma Make

1. **Acessar Figma Make**
   - Ir para [figma.com/make](https://figma.com/make)
   - Fazer login

2. **Colar o prompt**
   - Copiar prompt do template preenchido
   - Colar no Figma Make
   - Enviar

3. **Revisar geração inicial**
   - Verificar componentes criados
   - Testar interações básicas
   - Identificar ajustes necessários

4. **Iterar e refinar**
   - Fazer ajustes incrementais
   - Testar responsividade
   - Ajustar cores e estilos
   - Adicionar componentes faltantes

**Máximo**: 2-3 rodadas de iteração (não prolongar demais)

---

### Passo 3: Aprovação Cliente

1. **Compartilhar preview**
   - Gerar link de visualização
   - Enviar para cliente/stakeholders
   - Solicitar feedback

2. **Coletar feedback**
   - Máximo 2-3 rodadas de feedback
   - Priorizar mudanças críticas para MVP
   - Documentar solicitações

3. **Fazer ajustes solicitados**
   - Implementar mudanças aprovadas
   - Re-gerar preview
   - Re-enviar para validação

4. **Obter aprovação por escrito**
   - Email ou mensagem confirmando aprovação
   - Prints das telas aprovadas (opcional)
   - Documentar aprovação em histórico

---

### Passo 4: Export e Documentação

1. **Exportar código do Figma Make**
   - Baixar código gerado
   - Revisar estrutura de arquivos
   - Verificar dependências

2. **Validar código localmente (opcional)**
   - Criar projeto teste
   - Instalar dependências
   - Rodar localmente
   - Verificar se funciona

3. **Salvar em `.ai/frontend-export.md`**
   - Copiar código exportado
   - Salvar no arquivo
   - Adicionar metadata (data, versão, link Figma Make)
   - Listar componentes criados

4. **Documentar componentes**
   - Listar todas as telas criadas
   - Listar todos os componentes
   - Descrever interações principais
   - Anotar decisões de design importantes

**Arquivo**: `.ai/frontend-export.md`

```markdown
# Frontend Export - Figma Make

**Data**: 2025-11-17
**Versão**: 1.0
**Link Figma Make**: [URL]

## Telas Criadas
- Home
- Dashboard
- Login
- [...]

## Componentes Principais
- Header
- Sidebar
- Card
- Form
- [...]

## Código Exportado

[Cole o código aqui]

## Observações
- [Anotações importantes]
```

---

## 📋 Telas Principais (Exemplo Genérico)

Para qualquer projeto típico, considere estas telas:

1. **Auth** - Login/Signup/Recuperação de senha
2. **Dashboard** - Visão geral principal (métricas, resumos)
3. **Listagem** - Lista de itens principais (tabela/grid)
4. **Detalhes** - Visualizar item específico
5. **Criar/Editar** - Formulários CRUD
6. **Perfil/Settings** - Configurações do usuário

**Adapte** conforme seu PRD específico.

---

## ✅ Quando Pronto para Próxima Fase

Marque todos os itens antes de prosseguir:

- [ ] Todas as telas do PRD foram criadas no Figma Make
- [ ] Componentes Shadcn/ui estão integrados
- [ ] Design é responsivo (mobile, tablet, desktop)
- [ ] Cliente/stakeholders aprovaram visualmente
- [ ] Código foi exportado do Figma Make
- [ ] Código está salvo em `.ai/frontend-export.md`
- [ ] Lista de componentes e telas está documentada
- [ ] Decisões de design estão anotadas

**Próxima Fase**: [Fase 2: Transição para Backend](../02-TRANSICAO-BACKEND/README.md)

---

## 💡 Dicas Importantes

### ✅ Fazer

- ✅ Usar prompts claros, específicos e objetivos
- ✅ Mencionar componentes Shadcn/ui pelo nome
- ✅ Especificar cores em hex codes
- ✅ Gerar telas incrementalmente (não tudo de uma vez)
- ✅ Testar código exportado (pelo menos visualmente)
- ✅ Documentar componentes criados
- ✅ Obter aprovação cliente antes de prosseguir
- ✅ Consultar [`guia-figma-make.md`](./guia-figma-make.md) frequentemente

### ❌ Evitar

- ❌ Criar designs muito complexos no MVP
- ❌ Múltiplas rodadas infinitas de feedback (máx 2-3)
- ❌ Pular documentação do export
- ❌ Não testar código exportado antes de prosseguir
- ❌ Adicionar features não previstas no PRD
- ❌ Usar prompts vagos ou genéricos
- ❌ Esquecer de mencionar responsividade

---

## 🆘 Problemas Comuns

### Problema: Figma Make gerou código que não funciona

**Solução**:
1. Revisar o prompt - foi específico o suficiente?
2. Mencionar componentes Shadcn/ui pelo nome
3. Especificar bibliotecas necessárias
4. Se persistir, fazer ajustes manuais mínimos e documentar

### Problema: Cliente quer muitas mudanças

**Solução**:
1. Limitar a 2-3 rodadas de feedback
2. Priorizar mudanças críticas para MVP
3. Documentar mudanças não prioritárias para versão futura
4. Ser firme no escopo do MVP

### Problema: Componentes não parecem com Shadcn/ui

**Solução**:
1. Ser explícito no prompt: "Use componentes Shadcn/ui exatamente como na documentação"
2. Mencionar componentes específicos: "button, card, dialog, form"
3. Consultar [`componentes-shadcn.md`](./componentes-shadcn.md)

### Problema: Design não é responsivo

**Solução**:
1. Incluir no prompt: "Design deve ser totalmente responsivo (mobile-first)"
2. Especificar breakpoints: "mobile (< 640px), tablet (640-1024px), desktop (> 1024px)"
3. Mencionar "usar grid/flex do Tailwind"

### Problema: Faltam estados (loading, error, empty)

**Solução**:
1. Mencionar explicitamente no prompt:
   - "Skeleton loaders para estado loading"
   - "Empty state quando não há dados"
   - "Error state com mensagem amigável"
   - "Toast notifications para feedback"

---

## 📚 Padrões que Seguimos

Ao gerar no Figma Make, garanta que:

- ✅ **React + TypeScript** - Componentes `.tsx` tipados
- ✅ **Tailwind CSS v4** - Utility classes para estilos
- ✅ **Shadcn/ui** - Componentes base consistentes
- ✅ **Mobile-first** - Responsivo por padrão
- ✅ **Componentização** - Reutilizável e modular
- ✅ **Acessibilidade** - WCAG AA (labels, ARIA, keyboard nav)
- ✅ **Estados** - Loading, error, empty, success
- ✅ **Type Safety** - Props tipadas, sem `any`

---

## 📖 Documentação de Referência

Consulte estes documentos durante a fase:

| Documento | Uso |
|-----------|-----|
| [`guia-figma-make.md`](./guia-figma-make.md) | Capacidades completas do Figma Make |
| [`template-prompt-figma-make.md`](./template-prompt-figma-make.md) | Template para criar prompts |
| [`componentes-shadcn.md`](./componentes-shadcn.md) | Lista de componentes disponíveis |
| [`design-system.md`](./design-system.md) | Padrões de design e tokens |
| [`padroes-tailwind-v4.md`](./padroes-tailwind-v4.md) | Utility classes Tailwind |
| [`checklist.md`](./checklist.md) | Checklist detalhada da fase |

---

## 🎯 Critérios de Sucesso

A Fase 1 está completa quando:

- ✅ Todas as telas do PRD estão criadas
- ✅ Design é moderno, limpo e profissional
- ✅ Componentes seguem padrão Shadcn/ui
- ✅ É responsivo em todos os tamanhos de tela
- ✅ Estados visuais estão implementados
- ✅ Cliente aprovou formalmente
- ✅ Código está exportado e documentado
- ✅ Equipe entende os componentes criados

---

## 📞 Suporte

Para dúvidas sobre Figma Make ou esta fase:

1. Consultar [`guia-figma-make.md`](./guia-figma-make.md)
2. Revisar exemplos em [`template-prompt-figma-make.md`](./template-prompt-figma-make.md)
3. Verificar [`checklist.md`](./checklist.md)

---

**Status**: 🟢 Pronto para começar
**Ferramenta obrigatória**: Figma Make (figma.com/make)
**Próxima fase**: [FASE 2: Transição para Backend](../02-TRANSICAO-BACKEND/README.md)

**Última atualização**: 2025-11-17
**Versão**: 2.0 (Refatorado para Figma Make)
