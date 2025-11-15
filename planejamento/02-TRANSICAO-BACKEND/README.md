# 🔄 FASE 2: TRANSIÇÃO PARA BACKEND

## Visão Geral

Preparar o ambiente de desenvolvimento com **Claude Code** para começar o backend. Esta fase foca em usar IA para configurar o projeto, não em instalação manual.

**Duração estimada**: 1 dia (via Claude Code)
**Responsável**: Developer + Claude Code
**Pré-requisito**: Fase 1 concluída (design exportado)

## 🎯 Objetivos

1. Usar Claude Code para configurar o repositório
2. Validar código exportado da Fase 1
3. Preparar estrutura de pastas para backend
4. Configurar ferramentas de desenvolvimento
5. Primeiro commit e push para GitHub

## 📂 Arquivos Nesta Fase

### Guias Principais
- [`checklist.md`](./checklist.md) - Checklist completo
- [`estrutura-pastas.md`](./estrutura-pastas.md) - Estrutura de pastas padrão
- [`template-env.md`](./template-env.md) - Template de variáveis de ambiente

### Recursos Complementares
- [`comandos-uteis.md`](./comandos-uteis.md) - Comandos úteis
- [`faq.md`](./faq.md) - Perguntas frequentes

## 🚀 Como Começar

### Pré-requisitos
- Código da Fase 1 exportado
- Claude Code instalado e configurado
- Acesso ao repositório GitHub

### Prompt para Claude Code

Use este prompt com Claude Code para fazer o setup completo:

```
Estou começando a FASE 2 do processo de desenvolvimento. Tenho o código frontend exportado da Fase 1 (Lovable/v0) e preciso preparar o ambiente para desenvolvimento backend.

Por favor:

1. Validar o código exportado:
   - Verificar package.json
   - Verificar estrutura de pastas
   - Identificar dependências faltantes

2. Configurar ambiente:
   - Criar/atualizar .gitignore
   - Criar .env.example
   - Configurar ESLint e Prettier (se necessário)
   - Adicionar scripts úteis ao package.json

3. Preparar estrutura para backend:
   - Criar pasta docs/ para documentação técnica
   - Criar pasta .ai/ para contextos de IA
   - Criar pasta planejamento/ se não existir
   - Manter estrutura do Next.js intacta

4. Validar que tudo funciona:
   - Instalar dependências
   - Testar build
   - Verificar se app roda sem erros

5. Git:
   - Fazer commit inicial se ainda não foi feito
   - Criar branch develop
   - Documentar setup no README

Me informe sobre qualquer problema encontrado e o que foi ajustado.
```

## 📋 Checklist Rápida

### Claude Code Faz
- [ ] Validação do código exportado
- [ ] Instalação de dependências
- [ ] Configuração de .gitignore e .env.example
- [ ] Criação de estrutura de pastas
- [ ] Testes de build e execução
- [ ] Commit e push inicial

### Você Faz (Manualmente)
- [ ] Fornecer acesso ao código da Fase 1
- [ ] Revisar mudanças propostas por Claude
- [ ] Aprovar commits
- [ ] Validar que aplicação roda no browser

## ✅ Quando Pronto

Você completou esta fase quando:

### Técnico ✅
- [ ] Código exportado está no repositório
- [ ] `npm install` funciona sem erros (Claude Code testou)
- [ ] `npm run dev` funciona sem erros
- [ ] `npm run build` completa com sucesso
- [ ] App carrega no browser (http://localhost:3000)

### Configuração ✅
- [ ] `.env.example` existe
- [ ] `.gitignore` configurado
- [ ] Estrutura de pastas criada:
  - [ ] `docs/`
  - [ ] `.ai/`
  - [ ] Estrutura Next.js preservada

### Git ✅
- [ ] Repositório no GitHub
- [ ] Branch `main` ou `master` existe
- [ ] Branch `develop` criada
- [ ] Commits com mensagens claras
- [ ] Push para remoto feito

### Documentação ✅
- [ ] `README.md` atualizado com instruções de setup
- [ ] Estrutura de projeto documentada

## 💡 Dicas Importantes

### ✅ Fazer
- ✅ Deixar Claude Code fazer o setup
- ✅ Revisar mudanças antes de aprovar commits
- ✅ Testar aplicação no browser após setup
- ✅ Documentar qualquer ajuste manual necessário

### ❌ Evitar
- ❌ Tentar instalar dependências manualmente (use Claude Code)
- ❌ Commitar `node_modules/` ou `.env.local`
- ❌ Pular validação do build
- ❌ Ignorar warnings importantes

## 🆘 Problemas Comuns

### Claude Code não consegue instalar dependências
**Solução**: Verificar versão do Node.js (requer 18+). Verificar conexão com internet. Limpar cache npm se necessário.

### Código exportado tem erros TypeScript
**Solução**: Pedir para Claude Code corrigir. Geralmente são imports faltantes ou tipos não definidos.

### Port 3000 está ocupada
**Solução**: Usar porta alternativa: `npm run dev -- -p 3001`

### Build falha
**Solução**: Claude Code deve investigar e corrigir. Geralmente são dependências faltantes ou configuração incorreta.

## 📚 Estrutura de Pastas Esperada

Após FASE 2, seu projeto deve ter:

```
projeto/
├── .ai/                    # Contextos de IA (criar agora)
├── .claude/                # Skills Claude (criar agora)
├── docs/                   # Documentação (criar agora)
├── planejamento/           # Copiar deste repo (opcional)
├── src/                    # Código Next.js (já existe)
│   ├── app/
│   ├── components/
│   └── lib/
├── public/                 # Assets estáticos
├── .env.example            # Template env vars
├── .gitignore              # Git ignore
├── next.config.js          # Config Next.js
├── package.json            # Dependências
├── README.md               # Documentação
└── tsconfig.json           # Config TypeScript
```

## 🔗 Próxima Etapa

Quando setup completo, vá para: **FASE 3: DOCUMENTAÇÃO**

Na Fase 3 você vai usar Claude Code para:
1. Analisar código frontend exportado
2. Criar documentação técnica completa
3. Definir schema de banco de dados
4. Planejar APIs necessárias
5. Preparar especificação técnica

---

**Status**: 🟢 Pronto para começar
**Última atualização**: Nov 2024
