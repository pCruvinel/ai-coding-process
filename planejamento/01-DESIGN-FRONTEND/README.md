# 🎨 FASE 1: DESIGN FRONTEND COM IA

## Visão Geral
Criar todas as telas, componentes visuais e sistema de design da aplicação usando ferramentas de **IA de design** (Lovable.dev, v0.dev, ou similar) que geram código Next.js + Tailwind + Shadcn UI automaticamente.

**Duração estimada**: 2-3 dias
**Responsável**: PM + Cliente
**Ferramentas**: Lovable, v0, ou ferramenta similar de IA
**Output**: Next.js 14 + Tailwind CSS + Shadcn/ui

## 🎯 Objetivos
1. Converter PRD em prompts claros para ferramenta de IA
2. Gerar todas as telas principais através de IA
3. Revisar e ajustar componentes e layout
4. Obter aprovação visual do cliente
5. Exportar código funcional
6. Documentar telas e componentes criados

## 📂 Arquivos Nesta Fase
- [`checklist.md`](./checklist.md) - Checklist simplificada da fase
- [`prompt-brief-design-completo.md`](./prompt-brief-design-completo.md) - Template de prompt para IA
- [`prompt-design-pt-br.md`](./prompt-design-pt-br.md) - Prompt em português
- [`prompt-documento-transicao.md`](./prompt-documento-transicao.md) - Documentar o export
- [`padroes-tailwind-v4.md`](./padroes-tailwind-v4.md) - Padrões Tailwind
- [`componentes-shadcn.md`](./componentes-shadcn.md) - Componentes Shadcn/ui
- [`design-system.md`](./design-system.md) - Sistema de design padrão

## 🔄 Fluxo da Fase
```
PRD → Brief para IA → Gerar com Lovable/v0 → Revisar →
Cliente aprova → Export código → Documentar
```

## ✅ Checklist Rápida
- [ ] Brief de design criado baseado no PRD
- [ ] Telas principais geradas na ferramenta de IA
- [ ] Design System básico definido (cores, tipografia)
- [ ] Componentes Shadcn integrados
- [ ] Design responsivo (mobile + desktop)
- [ ] Estados principais (normal, loading, error)
- [ ] Cliente aprovou visualmente
- [ ] Código exportado e documentado

## 🛠️ Ferramentas Recomendadas

### Opção 1: Lovable.dev (Recomendado)
- IA que gera aplicações completas
- Suporte a Next.js + Tailwind + Shadcn
- Export direto para código
- Interface intuitiva

### Opção 2: v0.dev (Vercel)
- Focado em componentes React
- Excelente para UI/UX
- Integração com Shadcn
- Gratuito para uso básico

### Opção 3: Outras ferramentas
- Builder.io
- Framer
- Qualquer ferramenta que exporte Next.js + Tailwind

## 🚀 Como Começar

### Passo 1: Preparar Brief
1. Revisar o PRD completo
2. Identificar todas as telas necessárias
3. Definir preferências de design (cores, estilo)
4. Usar template em [`prompt-brief-design-completo.md`](./prompt-brief-design-completo.md)

### Passo 2: Gerar com IA
1. Escolher ferramenta (Lovable ou v0)
2. Inserir prompt do brief
3. Gerar telas uma por uma ou conjunto completo
4. Revisar e fazer ajustes iterativos

### Passo 3: Aprovação Cliente
1. Compartilhar link de preview
2. Coletar feedback (máx 2-3 rodadas)
3. Fazer ajustes solicitados
4. Obter aprovação por escrito

### Passo 4: Export e Documentação
1. Exportar código da ferramenta
2. Validar que código funciona localmente
3. Documentar em `.ai/frontend-export.md`
4. Listar componentes e telas criadas

## 📋 Telas Principais (Exemplo)
Para qualquer projeto típico:
1. **Login/Signup** - Autenticação
2. **Dashboard** - Visão geral principal
3. **Listagem** - Lista de itens principais
4. **Detalhes** - Visualizar item específico
5. **Criar/Editar** - Formulários CRUD
6. **Perfil/Settings** - Configurações do usuário

## ✅ Quando Pronto
- [ ] Todas as telas do PRD criadas
- [ ] Componentes Shadcn/ui integrados
- [ ] Design responsivo funciona
- [ ] Cliente aprovou visualmente
- [ ] Código exportado e funcionando
- [ ] Arquivo `.ai/frontend-export.md` completo
- [ ] Lista de componentes documentada

## 💡 Dicas Importantes

### ✅ Fazer
- ✅ Usar prompts claros e específicos
- ✅ Gerar telas incrementalmente (não tudo de uma vez)
- ✅ Testar código exportado localmente
- ✅ Documentar componentes criados
- ✅ Obter aprovação cliente antes de prosseguir

### ❌ Evitar
- ❌ Criar designs muito complexos no MVP
- ❌ Múltiplas rodadas infinitas de feedback
- ❌ Pular documentação do export
- ❌ Não testar código exportado
- ❌ Adicionar features não previstas no PRD

## 🆘 Problemas Comuns

### Problema: IA gerou código que não funciona
**Solução**: Pedir para regenerar com instruções mais claras. Se persistir, fazer ajustes manuais mínimos e documentar.

### Problema: Cliente quer muitas mudanças
**Solução**: Limitar a 2-3 rodadas de feedback. Priorizar mudanças críticas para MVP.

### Problema: Componentes não parecem com Shadcn
**Solução**: Ser explícito no prompt: "Use componentes Shadcn/ui exatamente como na documentação"

### Problema: Design não é responsivo
**Solução**: Incluir no prompt: "Design deve ser totalmente responsivo (mobile-first)"

## 📚 Padrões que Seguimos
- ✅ Tailwind CSS para estilos
- ✅ Shadcn/ui para componentes base
- ✅ Mobile-first responsive
- ✅ Componentização reutilizável
- ✅ Acessibilidade básica (WCAG AA)
- ✅ TypeScript para type safety

---

**Status**: 🟢 Pronto para começar
**Próxima fase**: FASE 2: Transição para Backend (Setup com Claude Code)
