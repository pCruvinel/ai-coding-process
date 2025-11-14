# 🎨 FASE 1: DESIGN FRONTEND COM FIGMAMAKER + TAILWIND V4 + SHADCN

## Visão Geral
Criar todas as telas, componentes visuais e sistema de design da aplicação usando **FigmaMake.com** - plataforma de frontend com IA que integra Figma + código Tailwind v4 + Shadcn UI em tempo real.

**Duração estimada**: 3-5 dias
**Responsável**: Designer/PM + Cliente
**Stack**: FigmaMake.com → Tailwind CSS v4 + Shadcn/ui + Next.js 14

## 🎯 Objetivos
1. Converter PRD em wireframes/designs visuais no FigmaMake
2. Criar todas as telas principais com componentes reutilizáveis
3. Definir Design System completo (cores, tipografia, espaçamento)
4. Gerar código Tailwind v4 + Shadcn limpo e padronizado
5. Obter aprovação visual do cliente
6. Exportar código funcional para GitHub
7. Documentar arquitetura de componentes

## 📂 Arquivos Nesta Fase
- [`checklist.md`](./checklist.md) - Checklist detalhada (atualizada)
- [`guia-figmamaker.md`](./guia-figmamaker.md) - Guia completo de FigmaMake
- [`prompt-figmamaker.md`](./prompt-figmamaker.md) - Prompts de IA para FigmaMake
- [`padroes-tailwind-v4.md`](./padroes-tailwind-v4.md) - Padrões Tailwind v4
- [`componentes-shadcn.md`](./componentes-shadcn.md) - Biblioteca Shadcn/ui
- [`design-system.md`](./design-system.md) - Sistema de design completo

## 🔄 Fluxo da Fase
```
PRD → Brief Design → FigmaMake Wireframes → Design Visual + Code
→ Aprovação Cliente → Design System → Export código → GitHub
```

## ✅ Checklist Rápida
- [ ] Brief de design criado (variáveis Tailwind v4)
- [ ] Telas mapeadas e criadas no FigmaMake
- [ ] Design System definido (cores, tipos, spacing)
- [ ] Componentes Shadcn integrados
- [ ] Design responsivo (mobile + tablet + desktop)
- [ ] Todos os estados visuais (normal, loading, error, empty)
- [ ] Cliente aprovou design
- [ ] Código Tailwind v4 exportado para GitHub

## 📋 Telas Principais (Exemplo)
Para TaskFlow (exemplo do PRD):
1. **Login/Signup** - Autenticação (form + validação)
2. **Dashboard** - Visão geral de projetos (grid responsivo)
3. **Detalhes do Projeto** - Kanban com tarefas (drag-drop)
4. **Criar/Editar Projeto** - Modal ou página (forms complexos)
5. **Admin Panel** - Gerenciar usuários (data table)
6. **Perfil de Usuário** - Settings (profile + preferences)

## 🛠️ Tech Stack
- **Design + Frontend**: FigmaMake.com (Figma + IA + Tailwind v4 + Shadcn em tempo real)
- **Styling**: Tailwind CSS v4 (com variáveis CSS personalizadas)
- **Componentes**: Shadcn/ui (componentes compostos, acessíveis)
- **Framework**: Next.js 14 + React 18 + TypeScript
- **Ícones**: Lucide React
- **Animações**: Tailwind CSS + Shadcn animations

## 🚀 Como Começar

### Passo 1: Prepare o Brief
1. Leia [`guia-figmamaker.md`](./guia-figmamaker.md)
2. Estude [`padroes-tailwind-v4.md`](./padroes-tailwind-v4.md)
3. Revise [`componentes-shadcn.md`](./componentes-shadcn.md)

### Passo 2: Crie no FigmaMake
1. Acesse [figmamaker.com](https://figmamaker.com)
2. Use o prompt: [`prompt-figmamaker.md`](./prompt-figmamaker.md)
3. Crie wireframes (aprovação cliente)
4. Desenvolva design visual com variáveis Tailwind v4
5. Integre componentes Shadcn/ui

### Passo 3: Obtenha Aprovação
1. Exporte designs do FigmaMake para cliente
2. Compartilhe link do projeto
3. Recolha feedback (máx 2-3 rodadas)
4. Incorpore ajustes

### Passo 4: Export e GitHub
1. Exporte código Tailwind v4 do FigmaMake
2. Configure Design System (`tailwind.config.ts` + `globals.css`)
3. Crie componentes reutilizáveis em `src/components`
4. Documente tudo em `.ai/design-export.md`
5. Commit e push para GitHub

## ✅ Quando Pronto
- [ ] Todas as telas do PRD desenhadas e funcionais
- [ ] Design System completo documentado
- [ ] Componentes Shadcn/ui integrados e reutilizáveis
- [ ] Variáveis Tailwind v4 padronizadas
- [ ] Design responsivo funciona em 3+ breakpoints
- [ ] Cliente aprovou visualmente
- [ ] Código no GitHub é clean e documentado
- [ ] Arquivo `.ai/design-export.md` completo

## 📚 Padrões que Seguimos
- ✅ Tailwind CSS v4 com variáveis CSS customizadas
- ✅ Shadcn/ui para componentes (botões, inputs, modals, etc)
- ✅ Mobile-first responsive design
- ✅ Componentização reutilizável
- ✅ Acessibilidade (WCAG AA)
- ✅ Dark mode ready
- ✅ TypeScript para type safety

---

**Status**: 🟢 Pronto para começar
**Próxima fase**: FASE 2: Transição para Backend (Setup ambiente)
