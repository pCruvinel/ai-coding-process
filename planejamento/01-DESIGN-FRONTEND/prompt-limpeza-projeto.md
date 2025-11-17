# 🧹 Prompt de Limpeza e Reorganização de Projeto

> **Versão**: 1.0
> **Última atualização**: 2025-11-17
> **Uso**: Para quando o projeto Figma Make está confuso com componentes duplicados

---

## 🎯 Quando Usar Este Prompt?

Use este template quando seu projeto no Figma Make estiver:

- ❌ Cheio de componentes duplicados
- ❌ Com arquivos obsoletos ou de teste
- ❌ Com imports quebrados
- ❌ Código redundante e confuso
- ❌ Componentes com nomes como "Copy", "Old", "Test"
- ❌ Não sabe mais qual componente usar

---

## 📋 Template de Prompt Completo

```markdown
🔍 AUDITORIA E LIMPEZA DO PROJETO

📊 ANÁLISE SOLICITADA

Por favor, faça uma auditoria completa do projeto:

1. LISTAR TODOS OS ARQUIVOS
   - Mostre a estrutura atual de pastas e arquivos
   - Identifique quais componentes existem

2. IDENTIFICAR PROBLEMAS
   - Componentes duplicados
   - Componentes não utilizados
   - Arquivos obsoletos ou de teste
   - Imports quebrados ou circulares
   - Código redundante

3. SUGERIR EXCLUSÕES
   - Liste EXATAMENTE quais arquivos podem ser deletados
   - Explique PORQUÊ cada um pode ser removido
   - ⚠️ AGUARDE MINHA CONFIRMAÇÃO antes de deletar

4. PLANO DE REORGANIZAÇÃO
   - Mostre como deveria ser a estrutura ideal
   - Quais componentes precisam ser refatorados
   - Quais podem ser consolidados

---

🎯 OBJETIVO ATUAL DO PROJETO
[Descreva brevemente o que o app DEVERIA fazer - qual o estado final desejado]

---

⚠️ PROBLEMAS CONHECIDOS
[Liste problemas que você já identificou, se souber]

Exemplo:
- Tem 3 versões do Header
- Botões duplicados em /components e /components/common
- App.tsx está importando componentes que não existem

---

✅ O QUE DEVE SER MANTIDO
[Se tiver certeza de algo que PRECISA ficar]

Exemplo:
- O componente Dashboard da pasta /components/Dashboard.tsx
- A lógica de autenticação em /hooks/useAuth.tsx

---

🚫 REGRAS DE LIMPEZA

- NÃO delete arquivos sem me mostrar antes
- NÃO toque em /components/ui (shadcn)
- NÃO altere /styles/globals.css sem necessidade
- PRESERVE toda lógica de negócio funcional

---

📋 APÓS A ANÁLISE

Depois de limpar e reorganizar:
- Certifique-se que App.tsx está funcional
- Todos os imports estão corretos
- Não há código morto
- Componentes reutilizáveis estão bem organizados
```

---

## 🌟 Exemplo Prático Preenchido

```markdown
🔍 AUDITORIA E LIMPEZA DO PROJETO

📊 ANÁLISE SOLICITADA

Por favor, faça uma auditoria completa do projeto:

1. LISTAR TODOS OS ARQUIVOS
2. IDENTIFICAR PROBLEMAS
3. SUGERIR EXCLUSÕES (aguarde confirmação)
4. PLANO DE REORGANIZAÇÃO

---

🎯 OBJETIVO ATUAL DO PROJETO

Dashboard de e-commerce com:
- Lista de produtos em cards
- Carrinho de compras funcional
- Formulário de checkout
- Página de administração de produtos

---

⚠️ PROBLEMAS CONHECIDOS

- Existem ProductCard.tsx, Card.tsx e ProductItem.tsx fazendo a mesma coisa
- Header.tsx foi criado 2 vezes (uma em /components e outra em /components/layout)
- Tem um Button.tsx customizado mas também uso shadcn button
- App.tsx tem imports de componentes que deletei
- Alguns componentes têm "Copy" ou "Old" no nome

---

✅ O QUE DEVE SER MANTIDO

- /components/Cart/ShoppingCart.tsx (lógica do carrinho funciona)
- /hooks/useCart.tsx (estado global do carrinho)
- /components/Checkout/CheckoutForm.tsx (validação está correta)
- Tudo em /components/ui (shadcn)

---

🚫 REGRAS DE LIMPEZA

- NÃO delete arquivos sem me mostrar antes
- NÃO toque em /components/ui (shadcn)
- NÃO altere /styles/globals.css sem necessidade
- PRESERVE toda lógica de carrinho e checkout

---

📋 APÓS A ANÁLISE

Depois de limpar e reorganizar:
- Certifique-se que App.tsx está funcional
- Todos os imports estão corretos
- Não há código morto
- Componentes reutilizáveis estão bem organizados
- Carrinho e checkout continuam funcionando
```

---

## 🔧 Variações de Prompt

### Versão Rápida

```markdown
Analise todos os arquivos do projeto e:

1. Liste a estrutura atual
2. Identifique componentes duplicados/não utilizados
3. Sugira quais arquivos deletar (NÃO delete ainda)
4. Mostre a estrutura ideal reorganizada

Objetivo do projeto: [descreva brevemente]

Aguardo sua análise antes de prosseguir.
```

### Versão Urgente (projeto muito quebrado)

```markdown
🚨 PROJETO ESTÁ QUEBRADO

Preciso de ajuda para reorganizar tudo:

1. Mostre TODOS os arquivos que existem
2. Identifique o que está duplicado ou obsoleto
3. Me dê uma lista de arquivos para DELETAR
4. Reescreva App.tsx do zero se necessário

O app deveria: [objetivo principal]

O que PRECISA funcionar: [funcionalidades essenciais]

Por favor, seja agressivo na limpeza!
```

### Versão Focada (problema específico)

```markdown
Tenho [problema específico] no projeto:

Exemplo: "Tenho 4 componentes Header diferentes e não sei qual usar"

Por favor:
1. Analise todos os arquivos Header*
2. Compare as diferenças
3. Sugira qual manter
4. Mostre como consolidar em um único componente
5. Liste os outros para deletar

Contexto: [o que o Header deveria fazer]
```

---

## 💡 Prompts Complementares

### Para confirmar exclusões

```markdown
✅ Pode deletar os seguintes arquivos:
[copie a lista que a IA sugeriu]

E depois reorganize conforme seu plano.
```

### Para questionar

```markdown
❓ Sobre o arquivo [nome]:
- Por que você sugeriu manter/deletar ele?
- Qual a diferença entre [ComponenteA] e [ComponenteB]?
```

### Para refatoração específica

```markdown
Agora que limpamos, refatore [componente específico] para:
- [melhoria 1]
- [melhoria 2]
- Remover código duplicado
```

---

## 📊 O Que Esperar da Análise

A IA do Figma Make vai retornar algo assim:

```markdown
📊 RELATÓRIO DE AUDITORIA

📁 ESTRUTURA ATUAL:
/App.tsx
/components/
  ├─ Header.tsx ⚠️ DUPLICADO
  ├─ HeaderOld.tsx ⚠️ OBSOLETO
  ├─ layout/
  │  └─ Header.tsx ⚠️ DUPLICADO
  ├─ ProductCard.tsx ✅ EM USO
  ├─ Card.tsx ⚠️ DUPLICADO
  └─ Button.tsx ⚠️ CONFLITA COM SHADCN

🚨 PROBLEMAS ENCONTRADOS:
- 3x Header (App.tsx usa qual?)
- ProductCard vs Card (mesmo código)
- Button customizado vs shadcn/ui button

🗑️ SUGESTÃO DE EXCLUSÃO:
❌ /components/HeaderOld.tsx
   → Motivo: Versão antiga, não está em uso

❌ /components/layout/Header.tsx
   → Motivo: Duplicata, vamos manter /components/Header.tsx

❌ /components/Card.tsx
   → Motivo: ProductCard.tsx faz a mesma coisa melhor

⚠️ AGUARDANDO CONFIRMAÇÃO...

✨ ESTRUTURA IDEAL:
/App.tsx
/components/
  ├─ Header.tsx (consolidado)
  ├─ ProductCard.tsx
  └─ [outros componentes únicos]
```

---

## 🎯 Checklist Pós-Limpeza

Depois que a IA limpar o projeto, verifique:

- [ ] App.tsx está funcional
- [ ] Todos os imports estão corretos
- [ ] Não há componentes duplicados
- [ ] Não há arquivos obsoletos
- [ ] Estrutura de pastas está organizada
- [ ] Componentes shadcn/ui intactos
- [ ] Lógica de negócio preservada
- [ ] Aplicação roda sem erros

---

## ⚠️ RESET COMPLETO (última opção)

Se o projeto está IMPOSSÍVEL de recuperar:

```markdown
🆘 RESET COMPLETO

O projeto está impossível de recuperar.

Por favor:
1. Analise o que existe
2. Extraia APENAS a lógica/componentes que funcionam
3. DELETE tudo que não precisa
4. Reconstrua App.tsx do zero

Objetivo final: [descreva o app ideal]

Componentes/lógica para salvar (se possível):
- [liste o que deve tentar preservar]

Seja agressivo! Prefiro reconstruir correto do que manter bagunça.
```

---

## 💡 Dicas Importantes

### ✅ Fazer

- ✅ Ser específico sobre o que manter
- ✅ Listar problemas conhecidos
- ✅ Aguardar confirmação antes de deletar
- ✅ Testar depois da limpeza
- ✅ Fazer backup antes (exportar código)

### ❌ Evitar

- ❌ Deletar sem análise prévia
- ❌ Tocar em componentes shadcn/ui
- ❌ Perder lógica de negócio funcional
- ❌ Não testar após limpeza
- ❌ Não documentar o que foi removido

---

## 🔄 Workflow Recomendado

```
1. Identificar problema
   ↓
2. Fazer backup (exportar código)
   ↓
3. Usar prompt de auditoria
   ↓
4. Revisar sugestões da IA
   ↓
5. Confirmar exclusões
   ↓
6. IA limpa o projeto
   ↓
7. Testar funcionalidade
   ↓
8. Documentar mudanças
```

---

## 📚 Exemplos de Uso

### Caso 1: Componentes Duplicados

**Problema**: 3 versões do Header

**Prompt**:
```markdown
Tenho 3 componentes Header diferentes:
- /components/Header.tsx
- /components/HeaderOld.tsx
- /components/layout/Header.tsx

Analise qual está sendo usado no App.tsx e sugira qual manter.
```

### Caso 2: Imports Quebrados

**Problema**: App.tsx importa componentes deletados

**Prompt**:
```markdown
App.tsx tem imports quebrados de componentes que deletei.

Por favor:
1. Identifique todos os imports quebrados
2. Remova os imports não utilizados
3. Corrija os caminhos dos imports válidos
```

### Caso 3: Código Não Utilizado

**Problema**: Vários componentes não usados

**Prompt**:
```markdown
Analise quais componentes em /components/* NÃO estão sendo usados
em nenhum lugar do projeto.

Liste para eu confirmar a exclusão.
```

---

**Última atualização**: 2025-11-17
**Versão**: 1.0
**Status**: ✅ Pronto para uso
