# ❓ FAQ - Fase 2: Transição para Backend

Perguntas frequentes sobre setup, configuração e problemas comuns na transição para backend.

---

## 🔧 Setup e Instalação

### P: Qual versão do Node.js devo usar?
**R:** Recomendamos **Node.js 18.x ou superior** (LTS - Long Term Support).

```bash
# Verificar versão
node --version

# Se precisar instalar: use NVM (Node Version Manager)
nvm install 18
nvm use 18
```

Next.js 14 requer Node.js 18.17 ou superior.

### P: npm ou yarn?
**R:** Tanto faz! Mas seja consistente no projeto.

- **npm**: Vem com Node.js, mais comum
- **yarn**: Mais rápido, melhor cache

```bash
# Se escolher npm
npm install

# Se escolher yarn
yarn install
```

**Dica**: Se o projeto já tem `package-lock.json` (npm) ou `yarn.lock` (yarn), use o mesmo gerenciador.

### P: npm install está demorando muito
**R:** Normal! Primeira instalação pode levar 3-10 minutos dependendo da internet.

**Como acelerar**:
```bash
# Limpar cache
npm cache clean --force

# Ou instalar em paralelo
npm install --prefer-offline
```

### P: npm install falha com erro de permissão
**R:** Não use `sudo`! Isso causa problemas depois.

**Solução**:
```bash
# Mudar dono da pasta npm
sudo chown -R $(whoami) ~/.npm

# Tentar novamente
npm install
```

---

## ⚙️ Configuração

### P: Onde coloco as variáveis de ambiente?
**R:** Depende:
- **Desenvolvimento local**: `.env.local` (gitignored)
- **Template para o time**: `.env.example` (versionado)
- **Produção**: Secrets do Vercel/Netlify/Railway

**Nunca commite** `.env.local` com valores reais!

### P: Posso ter múltiplos arquivos .env?
**R:** SIM! Next.js suporta:
- `.env` - Default para todos os ambientes
- `.env.local` - Local (overrides tudo, gitignored)
- `.env.development` - Apenas `npm run dev`
- `.env.production` - Apenas `npm run build`

**Ordem de prioridade** (maior para menor):
1. `.env.local`
2. `.env.development` ou `.env.production`
3. `.env`

### P: Como fazer variáveis de ambiente funcionarem no browser?
**R:** Prefixe com `NEXT_PUBLIC_`:

```bash
# ❌ NÃO funciona no browser
API_KEY=secret123

# ✅ Funciona no browser
NEXT_PUBLIC_API_KEY=secret123
```

**Atenção**: `NEXT_PUBLIC_*` é **público**! Não coloque secrets aqui.

### P: Como usar alias de import (@/*)?
**R:** Já vem configurado no `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Uso**:
```tsx
// Antes
import { Button } from '../../../../components/ui/button'

// Depois
import { Button } from '@/components/ui/button'
```

---

## 🚀 Rodando o Projeto

### P: npm run dev não funciona
**R:** Checklist de debug:

1. **Porta 3000 está livre?**
   ```bash
   # Ver o que está na porta 3000
   lsof -i :3000

   # Matar processo
   kill -9 <PID>

   # Ou usar porta diferente
   npm run dev -- -p 3001
   ```

2. **node_modules instalado?**
   ```bash
   ls node_modules/
   # Se vazio, rode: npm install
   ```

3. **.env.local existe?**
   ```bash
   # Pode começar vazio
   touch .env.local
   ```

### P: Página carrega mas não aparece nada
**R:** Possíveis causas:

1. **Erro de JavaScript no console**
   - Abra DevTools (F12)
   - Veja erros no Console tab

2. **Tailwind não está funcionando**
   - Verificar se `globals.css` importa Tailwind:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
   - Verificar se `globals.css` está importado no `layout.tsx`

3. **Componentes não foram exportados**
   - Verificar exports no código do Lovable

### P: Como ver logs do servidor?
**R:** Logs aparecem no terminal onde você rodou `npm run dev`.

```bash
# Logs mais verbosos
npm run dev --debug

# Ver requests
# Já aparecem automaticamente no terminal
```

---

## 🏗️ Estrutura de Pastas

### P: Devo usar /src ou /app diretamente?
**R:** **Use `/src`** (recomendado para projetos médios/grandes).

```
✅ Recomendado:
src/
  app/
  components/
  lib/

❌ Evite (só para projetos muito simples):
app/
components/
lib/
```

Vantagem: Separa código da configuração (package.json, next.config.js, etc).

### P: (auth) e (app) são pastas especiais?
**R:** SIM! São **Route Groups** do Next.js App Router.

- **(auth)**: Agrupa rotas de autenticação (não afeta URL)
- **(app)**: Agrupa rotas do app (não afeta URL)

**Exemplo**:
```
app/
  (auth)/
    login/
      page.tsx       → URL: /login (não /auth/login)

  (app)/
    dashboard/
      page.tsx       → URL: /dashboard (não /app/dashboard)
```

**Por quê?**: Permite ter `layout.tsx` diferentes para auth e app.

### P: Onde coloco tipos TypeScript?
**R:** Depende do tipo:

```
src/types/
  database.types.ts   # Auto-gerados do Supabase
  models.ts           # Types de modelos (User, Task, etc)
  api.types.ts        # Types de API (Request, Response)
  index.ts            # Re-export tudo
```

**Uso**:
```tsx
import { User, Task } from '@/types'
```

### P: Onde coloco helpers/utilities?
**R:**
```
src/lib/
  utils/
    formatters.ts    # formatDate, formatCurrency
    validators.ts    # validateEmail, validatePassword
    constants.ts     # APP_NAME, API_URL

  hooks.ts           # Custom hooks (useAuth, etc)
```

---

## 🎨 Tailwind CSS

### P: Classes Tailwind não funcionam
**R:** Checklist:

1. **`globals.css` tem os imports?**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. **`globals.css` está importado?**
   ```tsx
   // src/app/layout.tsx
   import '@/styles/globals.css'
   ```

3. **`tailwind.config.js` tem os paths corretos?**
   ```js
   content: [
     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
   ]
   ```

4. **Restart do servidor?**
   ```bash
   # Ctrl+C para parar
   npm run dev
   ```

### P: Como adicionar cores customizadas?
**R:** Edite `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#3B82F6',
        'brand-green': '#10B981',
      }
    }
  }
}
```

**Uso**:
```tsx
<div className="bg-brand-blue text-white">
  Hello
</div>
```

### P: Classes do Lovable/v0 não funcionam?
**R:** Lovable gera código válido, mas pode faltar:
- Custom colors no `tailwind.config.js`
- Plugins do Tailwind

**Solução**: Compare `tailwind.config.js` do export com o seu.

---

## 🔒 TypeScript

### P: Devo usar strict mode?
**R:** **SIM** (se o projeto permite).

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true
  }
}
```

**Benefícios**: Catch mais bugs, código mais seguro.
**Desvantagem**: Mais erros para corrigir no início.

### P: Como ignorar erro de TypeScript temporariamente?
**R:** Use `@ts-ignore` (com moderação):

```tsx
// @ts-ignore - Corrigir depois
const data = await riskyFunction()
```

**Melhor**: Use `@ts-expect-error` (falha se não há erro):
```tsx
// @ts-expect-error
const data = await riskyFunction()
```

### P: Muitos erros "any"
**R:** Normal em setup inicial. Corrija gradualmente:

1. **Prioritize**: Funções críticas primeiro
2. **Use tipos**: Em vez de `any`, use `unknown` ou tipo específico
3. **Configure ESLint**: Warn em vez de error

```json
// .eslintrc.json
{
  "rules": {
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

---

## 🔗 Git

### P: O que não deve ser commitado?
**R:** Veja seu `.gitignore`:

```
# NÃO commitar
node_modules/
.next/
.env.local
.DS_Store
*.log
.vercel
```

### P: Commitar node_modules/?
**R:** **NUNCA!** É enorme (~300MB) e regenerável.

Se alguém commitou:
```bash
# Remover do histórico
git rm -r --cached node_modules
git commit -m "Remove node_modules"
```

### P: Qual estratégia de branches usar?
**R:** Depende do time:

**Pequeno (1-2 devs)**:
```
main → develop → feature branches
```

**Médio/Grande (3+ devs)**:
```
main → develop → feature/task-123 → PR → develop → PR → main
```

**Solo**:
```
main → feature branches (direto)
```

---

## 🏭 Build e Deploy

### P: npm run build falha
**R:** Causas comuns:

1. **Erro de TypeScript**
   ```bash
   # Ver erros
   npm run build
   # Corrigir erros de tipo
   ```

2. **Variáveis de ambiente faltando**
   ```bash
   # Adicionar ao .env.local
   NEXT_PUBLIC_SUPABASE_URL=...
   ```

3. **Import incorreto**
   ```tsx
   // ❌ Errado
   import Button from '@/components/Button'

   // ✅ Correto
   import { Button } from '@/components/ui/button'
   ```

### P: Build é muito lento
**R:** Normal! Build pode levar 1-5 minutos.

**Como acelerar**:
- Use SSD
- Mais RAM (>8GB)
- Fechar outros apps

### P: Build passa mas app não funciona em produção
**R:** Possíveis causas:

1. **Variáveis de ambiente não configuradas em produção**
   - Adicionar secrets no Vercel/Netlify

2. **Hard-coded localhost**
   ```tsx
   // ❌ Errado
   fetch('http://localhost:3000/api/data')

   // ✅ Correto
   fetch('/api/data')  // Relativo
   ```

3. **Diferença entre dev e prod**
   - Testar localmente: `npm run build && npm run start`

---

## 🗄️ Supabase (Preparação)

### P: Quando configurar Supabase?
**R:** **Não agora!** Fase 2 é só setup frontend.

Supabase vem na **Fase 7: Setup Supabase**.

### P: Posso criar projeto Supabase já?
**R:** Pode, mas não é necessário ainda.

**Timeline**:
- **Fase 2**: Setup frontend
- **Fase 3-6**: Documentação e planejamento
- **Fase 7**: Setup Supabase (cria projeto, banco, RLS)
- **Fase 8**: Autenticação

### P: Preciso de .env agora?
**R:** Pode criar `.env.local` vazio:

```bash
# .env.local (pode ficar vazio por enquanto)

# Você vai preencher na Fase 7
# NEXT_PUBLIC_SUPABASE_URL=
# NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## 🧪 Testes (Opcional)

### P: Devo configurar testes agora?
**R:** **Opcional**. Se for fazer:
- Unit tests: Jest + React Testing Library
- E2E tests: Playwright ou Cypress

**Recomendação**: Deixe para depois do MVP funcionar.

### P: Como adicionar Jest?
**R:**
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

# Criar jest.config.js
npm init jest@latest
```

Ver [Next.js Testing Docs](https://nextjs.org/docs/testing).

---

## 💡 Performance

### P: App está lento no dev
**R:** Normal! `npm run dev` não é otimizado.

**Teste produção**:
```bash
npm run build
npm run start
```

Produção é ~10x mais rápido.

### P: Como melhorar performance?
**R:** Nesta fase, não se preocupe ainda!

Performance vem depois:
- Fase 9: Otimizações
- Fase 10: Deploy e monitoramento

---

## 🆘 Emergências

### P: Deletei algo importante!
**R:** Git salva você:

```bash
# Ver histórico
git log

# Voltar para commit anterior
git checkout <commit-hash>

# Ou desfazer último commit (cuidado!)
git reset --hard HEAD~1
```

### P: node_modules corrompido
**R:**
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### P: Projeto parou de funcionar do nada
**R:** Checklist:

1. **Restart do servidor**
   ```bash
   # Ctrl+C, depois
   npm run dev
   ```

2. **Limpar cache**
   ```bash
   rm -rf .next
   npm run dev
   ```

3. **Reinstalar dependências**
   ```bash
   rm -rf node_modules
   npm install
   ```

4. **Verificar Git**
   ```bash
   git status
   # Vê o que mudou
   ```

---

## 📚 Recursos Úteis

### Documentação Oficial
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Arquivos Deste Repositório
- [`checklist.md`](./checklist.md) - Checklist completo
- [`guia-setup.md`](./guia-setup.md) - Guia de setup
- [`estrutura-pastas.md`](./estrutura-pastas.md) - Estrutura de pastas
- [`template-env.md`](./template-env.md) - Template de .env
- [`comandos-uteis.md`](./comandos-uteis.md) - Comandos do dia a dia

---

## 🎯 Quando Você Está Pronto?

Você completou Fase 2 quando:

- [ ] `npm run dev` funciona sem erros
- [ ] `npm run build` funciona
- [ ] App carrega no browser
- [ ] Design corresponde ao aprovado
- [ ] Estrutura de pastas criada
- [ ] Git configurado
- [ ] Primeiro commit feito

**Próxima**: FASE 3 - Documentação 📝

---

**Dúvidas não respondidas?** Consulte a [documentação oficial do Next.js](https://nextjs.org/docs) ou adicione sua pergunta a este FAQ!

**Última atualização**: Nov 2024
