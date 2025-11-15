# 🎯 Prompt: Criar Nova Feature

> Use este prompt para pedir ao Claude que implemente uma feature completa

---

## Prompt

```
Vou pedir que você implemente uma nova feature seguindo o processo completo.

**Contexto do Projeto:**
- Leia `.ai/contexto-projeto.md` para entender a stack e padrões
- Leia `docs/03-ESPECIFICACAO.md` para ver a spec da feature
- Leia `docs/04-BANCO-DE-DADOS.md` para ver o schema

**Feature a Implementar:**
[NOME DA FEATURE]

**Especificação:**
[COLE A ESPECIFICAÇÃO DA FEATURE AQUI OU REFERENCIE A SEÇÃO DO DOC]

**Checklist de Implementação:**

Por favor, siga este checklist rigorosamente:

1. **Planning** (5 min)
   - [ ] Leia e compreenda a spec completamente
   - [ ] Identifique dependências (outras features, tabelas, etc.)
   - [ ] Liste todos os arquivos que precisarão ser criados/modificados
   - [ ] Confirme comigo antes de prosseguir

2. **Database** (10-15 min)
   - [ ] Crie migration SQL se necessário (em `supabase/migrations/`)
   - [ ] Configure RLS policies adequadas
   - [ ] Adicione índices necessários
   - [ ] Mostre a migration antes de aplicar

3. **Backend** (20-30 min)
   - [ ] Implemente Server Actions ou API Routes
   - [ ] Adicione validação Zod
   - [ ] Implemente lógica de negócio
   - [ ] Trate erros adequadamente

4. **Frontend** (30-40 min)
   - [ ] Crie componentes necessários
   - [ ] Implemente páginas
   - [ ] Conecte ao backend
   - [ ] Adicione estados de loading/error/empty
   - [ ] Garanta responsividade

5. **Integration** (10 min)
   - [ ] Teste fluxo end-to-end
   - [ ] Verifique que RLS está funcionando
   - [ ] Confirme que validações estão funcionando

6. **Testing** (15-20 min)
   - [ ] Escreva testes unitários para lógica crítica
   - [ ] Teste manualmente todos os casos de uso
   - [ ] Teste edge cases

7. **Documentation** (5-10 min)
   - [ ] Adicione comentários no código
   - [ ] Atualize `docs/09-HISTORICO.md`
   - [ ] Atualize `docs/03-ESPECIFICACAO.md` se necessário

8. **Code Quality** (5 min)
   - [ ] Execute `npm run lint`
   - [ ] Execute `npm run type-check`
   - [ ] Formate com Prettier

9. **Git** (5 min)
   - [ ] Faça commit com mensagem descritiva
   - [ ] Se branch separado, prepare para PR

10. **Deploy** (Opcional)
    - [ ] Teste em preview deploy (Vercel)

**Importante:**
- Siga os padrões em `.claude/skills/02-padroes-codigo/`
- Use TypeScript strict
- Sempre valide no servidor (mesmo se validar no cliente)
- RLS deve estar configurado (nunca confiar só no cliente)

Está pronto para começar?
```

---

## Como Usar

1. Copie o prompt acima
2. Substitua `[NOME DA FEATURE]` pela feature específica
3. Cole a especificação ou referencie onde ela está
4. Cole no chat com Claude
5. Acompanhe o checklist conforme Claude progride
