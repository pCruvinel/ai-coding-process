# 07 - Guia de Deploy

> **Template**: Preencha com as instruções específicas do seu projeto

## 🚀 Visão Geral

[PREENCHER]

**Exemplo:**
Deploy em Vercel (frontend) + Supabase (backend/database)

---

## ⚙️ Pré-requisitos

[PREENCHER]

**Exemplo:**
- [ ] Conta Vercel (gratuita)
- [ ] Conta Supabase (gratuita)
- [ ] Projeto no GitHub
- [ ] Variáveis de ambiente configuradas
- [ ] Build local funcionando

---

## 🗄️ Setup Supabase

### 1. Criar Projeto

[PREENCHER]

**Exemplo:**
1. Acesse [supabase.com](https://supabase.com)
2. Clique "New Project"
3. Preencha:
   - Nome: [nome-projeto]
   - Database Password: [senha-forte]
   - Region: South America (São Paulo)
4. Aguarde ~2 minutos

### 2. Copiar Credenciais

[PREENCHER]

**Exemplo:**
1. Vá em Settings > API
2. Copie:
   - `Project URL`
   - `anon public key`
   - `service_role key` (NUNCA expor no cliente!)

### 3. Executar Migrations

[PREENCHER]

**Exemplo:**
```bash
# Opção 1: Via SQL Editor (Supabase Dashboard)
1. Vá em SQL Editor
2. Cole conteúdo de cada migration em ordem
3. Execute

# Opção 2: Via Supabase CLI
npx supabase link --project-ref [project-id]
npx supabase db push
```

### 4. Verificar RLS

[PREENCHER]

**Exemplo:**
1. Vá em Authentication > Policies
2. Verifique que todas as tabelas têm RLS habilitado
3. Teste policies com SQL Editor

---

## 🌐 Setup Vercel

### 1. Conectar Repositório

[PREENCHER]

**Exemplo:**
1. Acesse [vercel.com](https://vercel.com)
2. Clique "Add New" > "Project"
3. Importe repositório do GitHub
4. Framework Preset: Next.js (detectado automaticamente)

### 2. Configurar Variáveis de Ambiente

[PREENCHER]

**Exemplo:**
```bash
NEXT_PUBLIC_SUPABASE_URL=https://[project-id].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...  # Apenas se usar Server Actions
```

⚠️ **IMPORTANTE**: Variáveis com `NEXT_PUBLIC_` são expostas no cliente!

### 3. Deploy

[PREENCHER]

**Exemplo:**
1. Clique "Deploy"
2. Aguarde build (~2-3 minutos)
3. Acesse URL de produção
4. Teste funcionalidades críticas

---

## 🧪 Deploy Staging

[PREENCHER]

**Exemplo:**

### Criar Branch de Staging
```bash
git checkout -b staging
git push -u origin staging
```

### Configurar em Vercel
1. Vá em Settings > Git
2. Em "Production Branch" deixe `main`
3. Vercel criará preview automático para branch `staging`
4. Configure variáveis específicas para staging se necessário

---

## 🔄 CI/CD

[PREENCHER]

**Exemplo:**

### Fluxo Automático
```
1. Push para branch 'staging' → Deploy automático em staging.vercel.app
2. PR para 'main' → Preview deploy criado
3. Merge em 'main' → Deploy automático em produção
```

### GitHub Actions (opcional)
```yaml
# .github/workflows/test.yml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test
```

---

## ✅ Checklist de Deploy

### Pré-Deploy
- [ ] Todos os testes passando localmente
- [ ] Build produção funciona (`npm run build`)
- [ ] Variáveis de ambiente documentadas em `.env.example`
- [ ] Migrations testadas em banco de desenvolvimento
- [ ] RLS configurado e testado
- [ ] Sem secrets commitados no código

### Deploy Staging
- [ ] Variáveis de ambiente configuradas
- [ ] Migrations aplicadas no banco de staging
- [ ] Deploy realizado com sucesso
- [ ] Smoke tests passando
- [ ] Autenticação funcionando
- [ ] Features críticas testadas manualmente

### Deploy Produção
- [ ] Aprovação de stakeholders
- [ ] Backup do banco (se houver dados)
- [ ] Migrations aplicadas em produção
- [ ] Deploy realizado
- [ ] Smoke tests em produção
- [ ] Monitoring configurado
- [ ] DNS configurado (se custom domain)
- [ ] SSL funcionando

---

## 🔍 Smoke Tests

[PREENCHER]

**Exemplo:**
1. [ ] Homepage carrega
2. [ ] Signup funciona
3. [ ] Login funciona
4. [ ] Dashboard carrega após login
5. [ ] Criar projeto funciona
6. [ ] Criar tarefa funciona
7. [ ] Logout funciona

---

## 🐛 Troubleshooting

### Build Failing

[PREENCHER]

**Exemplo:**
- Verificar erros de TypeScript: `npm run type-check`
- Verificar erros de lint: `npm run lint`
- Verificar logs de build no Vercel

### Environment Variables não Funcionam

[PREENCHER]

**Exemplo:**
- Variáveis com `NEXT_PUBLIC_` devem ser configuradas no Vercel
- Após adicionar variável, fazer redeploy
- Verificar se variável está presente no código com `console.log`

### Database Errors

[PREENCHER]

**Exemplo:**
- Verificar se migrations foram aplicadas
- Verificar RLS policies
- Checar logs do Supabase
- Testar queries manualmente no SQL Editor

---

## 📊 Monitoring

[PREENCHER]

**Exemplo:**

### Vercel Analytics
- Habilitado automaticamente
- Dashboard em Vercel > Analytics

### Supabase Logs
- Database logs em Dashboard > Logs
- API logs disponíveis

### Error Tracking (opcional)
- Sentry
- LogRocket
- Bugsnag

---

## 🔄 Rollback

[PREENCHER]

**Exemplo:**

### Vercel
1. Vá em Deployments
2. Encontre deploy anterior funcional
3. Clique nos 3 pontos > "Promote to Production"

### Supabase (Migrations)
1. Criar migration de rollback
2. Aplicar via SQL Editor ou CLI

---

## 📝 Pós-Deploy

[PREENCHER]

**Exemplo:**
- [ ] Notificar stakeholders
- [ ] Monitorar erros nas primeiras 24h
- [ ] Coletar feedback inicial
- [ ] Atualizar documentação se necessário
- [ ] Planejar próximos passos

---

**Status**: 🟡 Template - Aguardando preenchimento
**Documento Anterior**: [06-COMPONENTES.md](./06-COMPONENTES.md)
**Próximo Documento**: [08-TESTES.md](./08-TESTES.md)
