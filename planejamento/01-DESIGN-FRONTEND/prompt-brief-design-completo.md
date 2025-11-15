# 🎨 PROMPT 1.1: Brief para IA de Design

**Quando usar:** Ao iniciar design no v0/Lovable/Figma Make
**Copie este prompt completo na plataforma de design:**

```markdown
# 🎨 BRIEF DE DESIGN: [Nome do Projeto]

## 📋 INFORMAÇÕES DO PROJETO

### Contexto de Negócio
**O que é:** [Resumo em 2 linhas do PRD]
**Problema:** [Problema que resolve]
**Usuários:** [Quem vai usar]

### Objetivo do Design
Criar interface completa para [tipo de aplicação] com foco em [objetivo principal].

---

## 🎯 REQUISITOS FUNCIONAIS

### Telas Principais (Ordem de Prioridade)

#### 1. [Nome da Tela]
**Objetivo:** [O que o usuário faz aqui]

**Elementos necessários:**
- [ ] [Componente 1]
- [ ] [Componente 2]
- [ ] [Ação principal]

**Fluxo:**
1. Usuário [ação]
2. Sistema [resposta]
3. Usuário vê [resultado]

#### 2. [Nome da Tela]
[Repetir estrutura]

---

## 🎨 DIRETRIZES DE DESIGN

### Identidade Visual
- **Cores primárias:** [Se houver]
- **Cores secundárias:** [Se houver]
- **Tipografia:** [Preferência ou "moderna e clean"]
- **Estilo:** [Minimalista / Corporativo / Moderno / etc]

### Referências
[Se tiver exemplos]
- Site/App 1: [URL ou descrição]
- Site/App 2: [URL ou descrição]

### Tom de Voz
- [ ] Profissional e sério
- [ ] Casual e amigável
- [ ] Técnico e direto
- [ ] [Outro]

---

## 📱 REQUISITOS TÉCNICOS

### Stack Definida
- **Framework:** Next.js 14+ (App Router)
- **Estilo:** Tailwind CSS v3+ (IMPORTANTE!)
- **Componentes:** shadcn/ui (se possível)
- **Ícones:** Lucide React

### Responsividade
- [ ] Mobile First
- [ ] Desktop e Mobile
- [ ] Desktop only

### Acessibilidade
- [ ] Suporte a leitores de tela
- [ ] Navegação por teclado
- [ ] Contraste adequado

---

## 🔧 FUNCIONALIDADES ESPECIAIS

### Autenticação
- [ ] Login com email/senha
- [ ] Login social (Google, etc)
- [ ] Recuperação de senha

### Dados Dinâmicos
- [ ] Listagens com paginação
- [ ] Formulários com validação
- [ ] Upload de arquivos
- [ ] [Outras necessidades]

### Estados
- [ ] Loading states
- [ ] Empty states
- [ ] Error states
- [ ] Success messages

---

## 📊 COMPONENTES PRIORITÁRIOS

Liste os 5-10 componentes mais importantes:

1. **[Nome do Componente]**
   - Onde usa: [Tela X, Tela Y]
   - Comportamento: [Descrição]

2. **[Nome do Componente]**
   - Onde usa: [Tela X]
   - Comportamento: [Descrição]

---

## 🚫 RESTRIÇÕES E LIMITAÇÕES

**Evitar:**
- Animações complexas (performance)
- Bibliotecas muito pesadas
- [Outras restrições]

**Priorizar:**
- Simplicidade e usabilidade
- Performance (Lighthouse > 90)
- Manutenibilidade do código

---

## 📦 ENTREGÁVEIS ESPERADOS

Ao finalizar o design, preciso exportar:

1. **Código fonte completo**
   - Estrutura de pastas organizada
   - Componentes reutilizáveis
   - Páginas funcionais

2. **Documento de transição** (IMPORTANTE!)
   - Componentes criados e suas props
   - Páginas e suas rotas
   - Estados e dados mockados
   - Integrações que precisam ser feitas no backend

3. **Guia de componentes**
   - Como usar cada componente
   - Variantes disponíveis
   - Exemplos de uso

---

## 🎯 CRITÉRIOS DE SUCESSO

O design estará pronto quando:
- [ ] Todas as telas principais criadas
- [ ] Navegação entre telas funciona
- [ ] Responsivo (mobile e desktop)
- [ ] Componentes reutilizáveis
- [ ] Código limpo e organizado
- [ ] Documento de transição completo

---

## 📝 PRÓXIMOS PASSOS (APÓS DESIGN)

1. Exportar código para GitHub
2. Gerar documento `.ai/frontend-export.md`
3. Iniciar desenvolvimento backend no VSCode

---

**INSTRUÇÕES FINAIS PARA A IA DE DESIGN:**

Por favor:
1. Crie as interfaces seguindo este brief
2. Use Next.js 14 + Tailwind CSS v3+
3. Organize componentes de forma reutilizável
4. Ao finalizar, gere o documento de transição detalhado
5. Inclua comentários no código explicando componentes complexos

**Pergunte se algo não estiver claro!**
```

---

## 📋 Como Usar Este Prompt

1. **Leia o PRD completo** (`planejamento/00-PRE-DESENVOLVIMENTO/prd.md`)
2. **Preencha todos os campos** marcados com `[...]` no prompt acima
3. **Copie o prompt completo** para a plataforma de design (v0, Lovable, etc)
4. **Revise o resultado** e itere se necessário
5. **Quando aprovado**, prossiga para PROMPT 1.2

---

## ✅ Checklist de Preenchimento

Antes de enviar para a IA de design, certifique-se de ter definido:

- [ ] Nome do projeto
- [ ] Resumo do que é (2 linhas)
- [ ] Problema que resolve
- [ ] Usuários alvo
- [ ] Pelo menos 5 telas principais
- [ ] Elementos necessários em cada tela
- [ ] Cores primárias/secundárias (ou "deixar IA escolher")
- [ ] Estilo visual desejado
- [ ] Componentes prioritários (5-10)
- [ ] Restrições técnicas específicas

---

## 🎯 Próximo Passo

Após o design estar completo na plataforma, use **PROMPT 1.2** para gerar o documento de transição.
