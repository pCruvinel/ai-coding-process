# 🔄 Prompt: Refatoração de Código

> Use quando precisar refatorar código para melhorar qualidade

---

## Prompt

```
Preciso refatorar parte do código para melhorar [performance/legibilidade/manutenibilidade].

**Contexto:**
- Leia `.ai/contexto-projeto.md` para padrões
- Leia `.claude/skills/02-padroes-codigo/SKILL.md`

**Código a Refatorar:**
[Arquivo/Componente/Função: caminho/para/arquivo.ts]

[COLE O CÓDIGO AQUI]

**Problemas Identificados:**
- [ ] [Problema 1 - ex: Lógica duplicada]
- [ ] [Problema 2 - ex: Componente muito grande]
- [ ] [Problema 3 - ex: Types frouxos]
- [ ] [Problema 4 - ex: Performance ruim]

**Objetivos da Refatoração:**
- [ ] [Objetivo 1 - ex: Separar em componentes menores]
- [ ] [Objetivo 2 - ex: Adicionar types estritos]
- [ ] [Objetivo 3 - ex: Otimizar renders]

**Restrições:**
- [ ] Manter comportamento externo idêntico (sem breaking changes)
- [ ] Todos os testes devem continuar passando
- [ ] Seguir padrões do projeto

**Processo:**

Por favor, siga este processo:

1. **Análise** (10 min)
   - [ ] Analise o código atual completamente
   - [ ] Liste TODOS os problemas encontrados
   - [ ] Priorize problemas por impacto
   - [ ] Sugira plano de refatoração

2. **Proposta** (5 min)
   - [ ] Mostre estrutura proposta (sem código ainda)
   - [ ] Explique as mudanças principais
   - [ ] Liste benefícios de cada mudança
   - [ ] Aguarde minha aprovação antes de prosseguir

3. **Implementação** (30-60 min)
   - [ ] Refatore em pequenos passos
   - [ ] Mostre cada passo incrementalmente
   - [ ] Explique cada mudança
   - [ ] Garanta que testes continuam passando

4. **Verificação** (10 min)
   - [ ] Compare comportamento antes/depois
   - [ ] Execute todos os testes
   - [ ] Execute lint e type-check
   - [ ] Confirme que performance melhorou (se aplicável)

5. **Documentação** (5 min)
   - [ ] Atualize comentários no código
   - [ ] Documente em `docs/09-HISTORICO.md`
   - [ ] Crie ADR se decisão arquitetural (`.ai/decisoes-tecnicas.md`)

**Checklist de Qualidade:**

Após refatoração, confirme:
- [ ] TypeScript strict mode - sem erros
- [ ] ESLint - sem warnings
- [ ] Testes - todos passando
- [ ] Performance - igual ou melhor
- [ ] Legibilidade - melhorada
- [ ] Manutenibilidade - melhorada

Pronto para começar pela **Análise**?
```

---

## Exemplo de Uso

### Antes da Refatoração
```tsx
// Código problemático
function UserProfile({ userId }) {  // ❌ Tipo any implícito
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      {/* Muita lógica aqui... */}
    </div>
  );
}
```

### Objetivos
- Adicionar types estritos
- Extrair hook customizado
- Melhorar error handling
- Separar apresentação de lógica

---

## Como Usar

1. Identifique código que precisa refatorar
2. Liste problemas específicos
3. Defina objetivos claros
4. Use o prompt acima
5. Siga o processo passo a passo
