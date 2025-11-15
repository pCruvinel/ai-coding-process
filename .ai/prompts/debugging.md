# 🐛 Prompt: Debugging Sistemático

> Use quando encontrar um bug difícil de resolver

---

## Prompt

```
Preciso de ajuda para debugar um problema. Vamos seguir um processo sistemático.

**Contexto do Projeto:**
- Leia `.ai/contexto-projeto.md` para entender a stack
- Leia `.claude/skills/04-debugging-guide/SKILL.md` para guia de debugging

**Problema:**
[DESCREVA O BUG - O que você esperava? O que aconteceu?]

**Passos para Reproduzir:**
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

**Comportamento Esperado:**
[O que deveria acontecer]

**Comportamento Atual:**
[O que está acontecendo]

**Informações Adicionais:**
- Browser/Environment: [Chrome/Firefox/Node/etc]
- Mensagem de Erro: [Cole aqui se houver]
- Stack Trace: [Cole aqui se houver]
- Console Logs: [Cole aqui]

**Processo de Debugging:**

Por favor, siga este processo:

1. **Reprodução** (5 min)
   - [ ] Confirme que você consegue reproduzir o bug
   - [ ] Identifique se é intermitente ou consistente
   - [ ] Liste o ambiente exato onde ocorre

2. **Isolamento** (10 min)
   - [ ] Determine a camada: Frontend, Backend, ou Banco de Dados?
   - [ ] Se Frontend: É um problema de estado, rendering, ou API call?
   - [ ] Se Backend: É validação, lógica de negócio, ou query?
   - [ ] Se Banco: É RLS, query, ou schema?

3. **Análise de Logs** (10 min)
   - [ ] Verifique console do browser (erros JS)
   - [ ] Verifique Network tab (erros de API)
   - [ ] Verifique logs do Supabase (se backend/DB)
   - [ ] Identifique a linha exata do erro

4. **Causa Raiz** (15 min)
   - [ ] Analise o stack trace
   - [ ] Identifique a função/query que falhou
   - [ ] Determine por que falhou (validação? permissão? lógica?)
   - [ ] Explique a causa raiz claramente

5. **Solução** (20 min)
   - [ ] Proponha uma solução
   - [ ] Explique por que essa solução resolve o problema
   - [ ] Implemente a solução
   - [ ] Teste que o bug foi corrigido

6. **Prevenção** (10 min)
   - [ ] Crie um teste que teria detectado esse bug
   - [ ] Documente em `docs/09-HISTORICO.md`
   - [ ] Adicione ao debugging guide se for um padrão comum

**Informações que Preciso:**

Para cada etapa acima, me forneça:
- O que você descobriu
- Qual o próximo passo
- Se precisa de mais informações minhas

Vamos começar pela **Reprodução**.
```

---

## Como Usar

1. Copie o prompt acima
2. Preencha todas as seções [ENTRE COLCHETES]
3. Cole no chat com Claude
4. Acompanhe o processo passo a passo
5. Forneça informações adicionais quando solicitado
