# ✅ FASE 2: Checklist Completa

## 📋 PRÉ-SETUP

### Preparação Inicial
- [ ] PRD da Fase 0 está aprovado
- [ ] Design da Fase 1 está finalizado
- [ ] Código frontend exportado do Figma Make
- [ ] Acesso ao repositório GitHub
- [ ] Node.js instalado (versão 18+ recomendada)
- [ ] NPM ou Yarn instalado
- [ ] Git configurado localmente
- [ ] Editor de código instalado (Antigravity)

### Verificação de Sistema
- [ ] `node --version` retorna v18+
- [ ] `npm --version` funciona
- [ ] `git --version` funciona
- [ ] Espaço em disco suficiente (>5GB livre)

---

## 📦 SETUP DO REPOSITÓRIO

### Criar/Clonar Repositório
- [ ] Repositório criado no GitHub
- [ ] Repositório clonado localmente
- [ ] Branch principal (main/master) existe
- [ ] Branch `develop` criado

```bash
# Verificação
git branch -a
# Deve mostrar: main e develop
```

### Estrutura Base
- [ ] Código do Lovable/v0 está no repositório
- [ ] `package.json` existe
- [ ] `next.config.js` existe
- [ ] `tailwind.config.js` existe
- [ ] `tsconfig.json` existe

---

## 🔧 INSTALAÇÃO DE DEPENDÊNCIAS

### Instalar Pacotes
- [ ] `npm install` executado sem erros
- [ ] `node_modules/` criado
- [ ] `package-lock.json` gerado
- [ ] Nenhum aviso de vulnerabilidade crítica

```bash
# Verificação
ls node_modules/
# Deve ter centenas de pastas
```

### Dependências Principais
- [ ] Next.js instalado (versão 13+ ou 14+)
- [ ] React instalado
- [ ] Tailwind CSS instalado
- [ ] TypeScript instalado
- [ ] Supabase cliente instalado

```bash
# Verificação
npm list next react tailwindcss typescript @supabase/supabase-js
```

---

## ⚙️ CONFIGURAÇÃO DO AMBIENTE

### Variáveis de Ambiente
- [ ] `.env.example` criado
- [ ] `.env.local` criado (e gitignored)
- [ ] `.env.local` tem estrutura básica:
  ```
  NEXT_PUBLIC_SUPABASE_URL=
  NEXT_PUBLIC_SUPABASE_ANON_KEY=
  ```
- [ ] `.gitignore` inclui `.env.local`

### Configuração do Git
- [ ] `.gitignore` configurado corretamente
- [ ] Inclui `node_modules/`
- [ ] Inclui `.env.local`
- [ ] Inclui `.next/`
- [ ] Inclui `dist/`

### ESLint e Prettier
- [ ] `.eslintrc.json` existe
- [ ] `npm run lint` funciona (pode ter warnings, mas não erros críticos)
- [ ] `.prettierrc` existe (opcional)
- [ ] Prettier extensão instalada no VS Code (opcional)

---

## 📁 ESTRUTURA DE PASTAS

### Pastas Principais (Next.js)
- [ ] `src/` ou `app/` existe
- [ ] `src/app/` existe (App Router)
- [ ] `src/components/` existe
- [ ] `src/lib/` existe
- [ ] `public/` existe

### Pastas Adicionais Criadas
- [ ] `src/types/` criada
- [ ] `src/lib/supabase/` criada
- [ ] `src/lib/api/` criada
- [ ] `src/components/ui/` existe
- [ ] `src/components/forms/` criada (se houver forms)
- [ ] `src/components/layouts/` criada

### Pastas de Projeto
- [ ] `docs/` criada (documentação)
- [ ] `supabase/` criada
- [ ] `supabase/migrations/` criada
- [ ] `planejamento/` existe (já vem do repositório)

### Estrutura Opcional
- [ ] `__tests__/` criada (se vai usar testes)
- [ ] `__tests__/unit/` criada
- [ ] `__tests__/integration/` criada
- [ ] `.github/workflows/` criada (se vai usar CI/CD)

---

## 🚀 TESTES LOCAIS

### Servidor de Desenvolvimento
- [ ] `npm run dev` executa sem erros
- [ ] Servidor inicia na porta 3000 (ou outra)
- [ ] Browser abre automaticamente
- [ ] App carrega visualmente

```bash
# Verificação
npm run dev
# Abrir http://localhost:3000
```

### Verificação Visual
- [ ] Homepage carrega
- [ ] Não há erros no console do browser (F12)
- [ ] Design corresponde ao aprovado na Fase 1
- [ ] Navegação entre páginas funciona
- [ ] Imagens carregam (se houver)
- [ ] Estilos Tailwind aplicados corretamente

### Build de Produção
- [ ] `npm run build` executa sem erros
- [ ] Build gera pasta `.next/`
- [ ] Nenhum erro de TypeScript no build
- [ ] Tempo de build é razoável (<5 min)

```bash
# Verificação
npm run build
# Deve completar com "✓ Compiled successfully"
```

### Teste de Preview
- [ ] `npm run start` funciona (após build)
- [ ] App abre em modo produção
- [ ] Performance é boa

---

## 📝 DOCUMENTAÇÃO INICIAL

### Arquivo README.md do Projeto
- [ ] `README.md` atualizado com:
  - Nome do projeto
  - Como instalar (`npm install`)
  - Como rodar (`npm run dev`)
  - Variáveis de ambiente necessárias
  - Stack tecnológica (Next.js, Tailwind, Supabase)

### Documentação Complementar
- [ ] `docs/` tem arquivo inicial
- [ ] Estrutura de pastas documentada (pode usar [`estrutura-pastas.md`](./estrutura-pastas.md))
- [ ] Decisões arquiteturais anotadas (opcional nesta fase)

---

## 🔐 SEGURANÇA E BOAS PRÁTICAS

### Segurança
- [ ] Nenhuma chave secreta commitada (verificar histórico)
- [ ] `.env.local` está no `.gitignore`
- [ ] `.env.example` não tem valores reais (apenas placeholders)
- [ ] Secrets do GitHub configurados (se necessário)

### Boas Práticas
- [ ] Commits são descritivos
- [ ] Branches seguem convenção (develop, feature/*, etc)
- [ ] Code review process definido (se team)
- [ ] Pull request template criado (opcional)

---

## 📊 GIT E VERSIONAMENTO

### Primeiro Commit
- [ ] Initial commit realizado
- [ ] Commit message é claro: "Initial setup: Frontend from Lovable/v0"
- [ ] Push para `develop` ou `main`
- [ ] Repositório remoto sincronizado

```bash
# Verificação
git log --oneline
# Deve mostrar commits
```

### Branches
- [ ] Branch `main` ou `master` protegida (settings no GitHub)
- [ ] Branch `develop` existe
- [ ] Workflow de branches definido (Git Flow, GitHub Flow, etc)

### Tags (Opcional)
- [ ] Tag `v0.1.0` criada para initial setup
```bash
git tag v0.1.0
git push origin v0.1.0
```

---

## 🧪 QUALIDADE DO CÓDIGO

### Linting
- [ ] `npm run lint` não retorna erros críticos
- [ ] Warnings revisados (não precisam ser zero, mas devem ser conhecidos)
- [ ] ESLint configurado para TypeScript

### Formatação
- [ ] Código formatado consistentemente
- [ ] Se usa Prettier, configuração está salva
- [ ] VS Code auto-format on save configurado (opcional)

### TypeScript
- [ ] `tsconfig.json` configurado
- [ ] Strict mode habilitado (recomendado)
- [ ] Nenhum erro de tipo no build

```bash
# Verificação
npm run build
# Não deve ter erros de TS
```

---

## 📦 DEPENDENCIES CHECK

### Verificar Versões
- [ ] Next.js: versão stable recente (13.x ou 14.x)
- [ ] React: versão compatível com Next.js
- [ ] Tailwind CSS: v3.x
- [ ] TypeScript: v5.x
- [ ] Supabase JS: v2.x

```bash
# Comando útil
npm outdated
# Ver se há packages muito desatualizados
```

### Vulnerabilidades
- [ ] `npm audit` executado
- [ ] Vulnerabilidades críticas resolvidas
- [ ] Vulnerabilidades moderadas/baixas documentadas

```bash
npm audit fix
```

---

## 🔄 INTEGRAÇÃO COM FASE 1

### Verificação do Design
- [ ] Todas as páginas da Fase 1 existem no código
- [ ] Componentes principais identificados
- [ ] Rotas definidas corretamente
- [ ] Assets (imagens, ícones) presentes

### Mapeamento
- [ ] Lista de páginas criada (pode estar em `docs/`)
- [ ] Lista de componentes criada
- [ ] Fluxo de navegação documentado

---

## ✅ CRITÉRIOS DE CONCLUSÃO

Você completou FASE 2 quando:

### Técnico ✅
- [ ] App roda com `npm run dev` sem erros
- [ ] Build de produção (`npm run build`) funciona
- [ ] Nenhum erro crítico no console
- [ ] Estrutura de pastas criada e organizada
- [ ] `.env.example` criado

### Git ✅
- [ ] Código commitado
- [ ] Push para repositório remoto
- [ ] Branches configuradas
- [ ] `.gitignore` correto

### Documentação ✅
- [ ] `README.md` atualizado
- [ ] Setup documentado
- [ ] Próximos passos claros

### Preparação ✅
- [ ] Pronto para Fase 3 (Documentação)
- [ ] Pronto para Fase 7 (Setup Supabase)
- [ ] Team consegue rodar o projeto

---

## 🚦 Semáforo de Status

### 🟢 Verde (Pronto)
- Todos os itens críticos marcados
- App roda localmente sem erros
- Pode prosseguir para Fase 3

### 🟡 Amarelo (Quase Lá)
- ~80% dos itens completos
- Alguns warnings não-críticos
- Ação: Resolver pendências menores

### 🔴 Vermelho (Não Pronto)
- <70% completo
- Erros críticos presentes
- Ação: Revisar setup, reinstalar, verificar documentação

---

## 📞 Quando Você Fica Preso

### Problema: npm install falha
**Checklist de debug**:
- [ ] Node.js versão correta? (`node --version`)
- [ ] Limpar cache: `npm cache clean --force`
- [ ] Deletar `node_modules/` e `package-lock.json`
- [ ] Tentar novamente: `npm install`
- [ ] Verificar conexão com internet
- [ ] Verificar se não há proxy bloqueando

### Problema: npm run dev falha
**Checklist de debug**:
- [ ] Porta 3000 livre? (Fechar outros apps)
- [ ] `.env.local` existe? (pode estar vazio inicialmente)
- [ ] `node_modules/` instalado?
- [ ] Verificar logs de erro específicos
- [ ] Tentar porta diferente: `npm run dev -- -p 3001`

### Problema: Build falha
**Checklist de debug**:
- [ ] Erros de TypeScript? (corrigir tipos)
- [ ] Imports incorretos? (verificar caminhos)
- [ ] Variáveis de ambiente faltando? (adicionar ao `.env`)
- [ ] Memória insuficiente? (aumentar heap size)

### Problema: Design não aparece
**Checklist de debug**:
- [ ] Tailwind configurado? (`tailwind.config.js`)
- [ ] Global CSS importado? (verificar `_app.tsx` ou `layout.tsx`)
- [ ] Classes Tailwind escritas corretamente?
- [ ] Build do Tailwind executou?

---

## 📈 Próximas Etapas

✅ **Fase 2 Completa** → **Fase 3: Documentação**

Na Fase 3 você vai:
1. Analisar código frontend
2. Documentar arquitetura
3. Criar especificação técnica completa
4. Preparar contexto para Claude IA

**Arquivos que você vai criar**:
- `docs/01-VISAO-GERAL.md`
- `docs/02-ARQUITETURA.md`
- `docs/03-ESPECIFICACAO.md`
- `docs/04-BANCO-DE-DADOS.md`
- `docs/05-API.md`

---

**Tempo estimado para checklist**: 2-4 horas
**Status**: 🟢 Pronto para começar
**Última atualização**: Nov 2024
