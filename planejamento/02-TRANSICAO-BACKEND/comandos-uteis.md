# 🛠️ Comandos Úteis - Referência Rápida

Comandos essenciais para o dia a dia de desenvolvimento com Next.js.

---

## 📦 NPM / Package Management

### Instalação
```bash
# Instalar todas as dependências
npm install
# ou
npm i

# Instalar dependência específica
npm install pacote-nome
npm install @supabase/supabase-js

# Instalar dev dependency
npm install --save-dev eslint
npm install -D prettier

# Instalar versão específica
npm install react@18.2.0

# Reinstalar tudo (limpar e instalar)
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Desinstalar
```bash
# Remover pacote
npm uninstall pacote-nome
npm un pacote-nome

# Remover pacote dev
npm uninstall --save-dev eslint
```

### Atualizar
```bash
# Ver pacotes desatualizados
npm outdated

# Atualizar pacote específico
npm update next

# Atualizar tudo (cuidado!)
npm update

# Atualizar para latest (pode quebrar)
npm install next@latest
```

### Verificar
```bash
# Listar dependências instaladas
npm list

# Ver versão de pacote
npm list next

# Ver vulnerabilidades
npm audit

# Corrigir vulnerabilidades
npm audit fix
```

---

## 🚀 Next.js

### Desenvolvimento
```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Com porta customizada
npm run dev -- -p 3001

# Com hostname customizado
npm run dev -- -H 0.0.0.0

# Modo turbo (experimental, mais rápido)
npm run dev --turbo
```

### Build e Produção
```bash
# Build para produção
npm run build

# Iniciar servidor de produção (após build)
npm run start

# Build + Start (sequencial)
npm run build && npm run start

# Build com análise de bundle
npm run build -- --analyze
```

### Linting
```bash
# Rodar ESLint
npm run lint

# Lint e auto-fix
npm run lint -- --fix

# Lint arquivo específico
npx eslint src/components/Button.tsx
```

### Formatação (se Prettier configurado)
```bash
# Formatar todos os arquivos
npm run format

# Verificar formatação
npm run format:check

# Formatar arquivo específico
npx prettier --write src/components/Button.tsx
```

---

## 📁 Filesystem

### Navegação
```bash
# Listar arquivos
ls
ls -la  # Incluir ocultos

# Ver estrutura de pastas
tree
tree -L 2  # Profundidade 2

# Ver tamanho de pasta
du -sh node_modules/

# Encontrar arquivo
find . -name "Button.tsx"

# Buscar em conteúdo de arquivos
grep -r "import Button" src/
```

### Criação
```bash
# Criar pasta
mkdir src/components/ui

# Criar pasta e subpastas
mkdir -p src/lib/api/utils

# Criar arquivo
touch .env.local

# Criar múltiplos arquivos
touch src/lib/{hooks.ts,utils.ts,constants.ts}
```

### Copiar/Mover
```bash
# Copiar arquivo
cp .env.example .env.local

# Copiar pasta recursivamente
cp -r src/components/ backup/

# Mover/renomear arquivo
mv old-name.ts new-name.ts

# Mover pasta
mv src/old-folder/ src/new-folder/
```

### Deletar
```bash
# Deletar arquivo
rm file.txt

# Deletar pasta recursivamente
rm -rf node_modules/

# Deletar com confirmação
rm -i file.txt
```

---

## 🔐 Git

### Setup Inicial
```bash
# Inicializar repositório
git init

# Clonar repositório
git clone https://github.com/user/repo.git

# Configurar usuário
git config user.name "Seu Nome"
git config user.email "seu@email.com"

# Verificar configuração
git config --list
```

### Branches
```bash
# Ver branches
git branch
git branch -a  # Incluir remote

# Criar branch
git branch feature/nova-feature

# Mudar de branch
git checkout develop
git switch develop  # Novo comando

# Criar e mudar para branch
git checkout -b feature/nova-feature

# Deletar branch local
git branch -d feature/velha-feature

# Deletar branch remota
git push origin --delete feature/velha-feature
```

### Commits
```bash
# Ver status
git status

# Adicionar arquivos
git add .
git add src/components/Button.tsx

# Commit
git commit -m "feat: adicionar componente Button"

# Commit com mensagem longa
git commit -m "feat: adicionar componente Button" -m "Descrição detalhada aqui"

# Amend último commit (cuidado!)
git commit --amend -m "Nova mensagem"

# Add + commit
git commit -am "fix: corrigir bug no login"
```

### Push/Pull
```bash
# Push
git push
git push origin main

# Push e criar branch upstream
git push -u origin feature/nova-feature

# Pull
git pull
git pull origin main

# Fetch (sem merge)
git fetch origin
```

### Histórico
```bash
# Ver log
git log
git log --oneline
git log --graph --oneline --all

# Ver diferenças
git diff
git diff src/components/Button.tsx

# Ver alterações staged
git diff --staged
```

### Desfazer
```bash
# Descartar mudanças locais
git checkout -- file.txt
git restore file.txt  # Novo comando

# Unstage arquivo
git reset HEAD file.txt
git restore --staged file.txt  # Novo comando

# Voltar para commit anterior (cuidado!)
git reset --hard HEAD~1

# Reverter commit (cria novo commit)
git revert <commit-hash>
```

### Stash (Guardar mudanças temporariamente)
```bash
# Guardar mudanças
git stash

# Guardar com mensagem
git stash save "WIP: trabalhando na feature X"

# Listar stashes
git stash list

# Aplicar último stash
git stash pop

# Aplicar stash específico
git stash apply stash@{0}

# Deletar stash
git stash drop stash@{0}
```

---

## 🗄️ Supabase CLI (Fase 7)

```bash
# Instalar CLI
npm install -g supabase

# Login
supabase login

# Inicializar projeto
supabase init

# Link com projeto remoto
supabase link --project-ref <project-id>

# Gerar tipos TypeScript
supabase gen types typescript --project-id <project-id> > src/types/database.types.ts

# Ver status de migrations
supabase migration list

# Criar nova migration
supabase migration new nome-da-migration

# Aplicar migrations
supabase db push

# Reset database (cuidado!)
supabase db reset
```

---

## 🔍 Debug e Análise

### Ver Processos
```bash
# Ver o que está rodando na porta 3000
lsof -i :3000

# Matar processo
kill -9 <PID>

# Ver processos Node
ps aux | grep node
```

### Limpar Cache
```bash
# Limpar cache npm
npm cache clean --force

# Deletar cache Next.js
rm -rf .next/

# Limpar tudo e reinstalar
rm -rf node_modules .next package-lock.json
npm install
```

### Análise de Bundle
```bash
# Instalar bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Adicionar em next.config.js:
# const withBundleAnalyzer = require('@next/bundle-analyzer')({
#   enabled: process.env.ANALYZE === 'true',
# })
# module.exports = withBundleAnalyzer(nextConfig)

# Analisar
ANALYZE=true npm run build
```

---

## 📊 Informações do Sistema

### Versões
```bash
# Node.js
node --version
node -v

# NPM
npm --version
npm -v

# Git
git --version

# Next.js (do projeto)
npm list next

# Ver todas as versões
node -v && npm -v && git --version
```

### Sistema
```bash
# Ver espaço em disco
df -h

# Ver uso de CPU/RAM
top
htop  # Mais bonito (instalar: brew install htop)

# Ver informações do sistema
uname -a
```

---

## 🧪 Testes (Se configurado)

```bash
# Rodar testes
npm test
npm run test

# Modo watch
npm test -- --watch

# Com coverage
npm test -- --coverage

# Teste específico
npm test Button.test.tsx

# E2E (se Playwright)
npm run test:e2e
```

---

## 🎯 Combos Úteis

### Setup Fresh
```bash
# Clone, install, setup env, run
git clone <repo-url> meu-projeto
cd meu-projeto
npm install
cp .env.example .env.local
npm run dev
```

### Limpar e Resetar
```bash
# Limpar cache e reinstalar tudo
rm -rf node_modules .next package-lock.json
npm cache clean --force
npm install
npm run dev
```

### Deploy Check
```bash
# Build + start local para testar
npm run build
npm run start
# Abrir http://localhost:3000
```

### Git Quick Commit
```bash
# Add, commit, push (tudo de uma vez)
git add .
git commit -m "feat: nova feature"
git push
```

### Branch e Switch
```bash
# Criar branch, commitar, push
git checkout -b feature/nova-feature
git add .
git commit -m "feat: adicionar nova feature"
git push -u origin feature/nova-feature
```

---

## 🔥 Atalhos de Terminal

### Navegação
- `Ctrl+C` - Parar processo
- `Ctrl+Z` - Suspender processo
- `Ctrl+L` ou `clear` - Limpar terminal
- `Ctrl+A` - Ir para início da linha
- `Ctrl+E` - Ir para fim da linha
- `Ctrl+U` - Deletar linha inteira
- `!!` - Repetir último comando

### Histórico
```bash
# Ver histórico de comandos
history

# Buscar no histórico
Ctrl+R

# Executar comando do histórico
!123  # Executa comando #123
```

---

## 📝 Aliases Úteis (Adicionar ao .bashrc ou .zshrc)

```bash
# Aliases Git
alias gs='git status'
alias ga='git add .'
alias gc='git commit -m'
alias gp='git push'
alias gl='git log --oneline'
alias gb='git branch'
alias gco='git checkout'

# Aliases NPM
alias nrd='npm run dev'
alias nrb='npm run build'
alias nrs='npm run start'
alias nrl='npm run lint'
alias ni='npm install'
alias nu='npm uninstall'

# Aliases Filesystem
alias ll='ls -la'
alias ..='cd ..'
alias ...='cd ../..'

# Aliases Next.js
alias dev='npm run dev'
alias build='npm run build'
alias start='npm run start'
```

**Como usar**:
1. Adicione ao `~/.bashrc` (Bash) ou `~/.zshrc` (Zsh)
2. Recarregue: `source ~/.bashrc` ou `source ~/.zshrc`
3. Use: `gs` em vez de `git status`

---

## 📚 Recursos

### Documentação Oficial
- [NPM Docs](https://docs.npmjs.com/)
- [Git Docs](https://git-scm.com/docs)
- [Next.js CLI](https://nextjs.org/docs/api-reference/cli)

### Cheat Sheets
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [NPM Cheat Sheet](https://devhints.io/npm)
- [Terminal Cheat Sheet](https://www.makeuseof.com/tag/mac-terminal-commands-cheat-sheet/)

---

## 📎 Arquivos Relacionados

- [`checklist.md`](./checklist.md) - Checklist completo da fase
- [`guia-setup.md`](./guia-setup.md) - Guia de setup detalhado
- [`faq.md`](./faq.md) - Perguntas frequentes
- [`estrutura-pastas.md`](./estrutura-pastas.md) - Estrutura de pastas

---

**Última atualização**: Nov 2024
**Status**: 🟢 Pronto para usar
