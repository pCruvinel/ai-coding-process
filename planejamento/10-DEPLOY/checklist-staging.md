# ✅ Checklist: Deploy Staging

---

## 🎯 Objetivo

Deploy da aplicação em ambiente de staging para testes finais antes de produção.

**Plataforma**: Vercel (prioritário)
**Database**: Supabase Cloud (projeto separado)

---

## 🗄️ Supabase Staging

### Criar Projeto Staging

- [ ] Criar novo projeto no Supabase Cloud
  - Nome: `[projeto]-staging`
  - Região: mesma da produção
  - Password: senha forte (salvar em gerenciador)

### Migrations

- [ ] Aplicar todas as migrations
  ```bash
  supabase link --project-ref [staging-project-id]
  supabase db push
  ```

- [ ] Verificar schema no SQL Editor
- [ ] Verificar RLS policies ativas
- [ ] Verificar triggers funcionando

### Seed Data

- [ ] Criar usuários de teste
- [ ] Inserir dados de teste (opcional)

### Configurações

- [ ] Auth: Site URL → `https://[app]-staging.vercel.app`
- [ ] Auth: Redirect URLs → `https://[app]-staging.vercel.app/**`
- [ ] Storage: Buckets criados (se aplicável)

---

## 🚀 Vercel Staging

### Criar Projeto

- [ ] Conectar repositório no Vercel
- [ ] Escolher framework: Next.js
- [ ] Branch de deploy: `main` ou `staging`

### Variáveis de Ambiente

Adicionar em **Settings → Environment Variables → Preview**:

- [ ] `NEXT_PUBLIC_SUPABASE_URL` = `https://[staging-id].supabase.co`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `[staging-anon-key]`
- [ ] `SUPABASE_SERVICE_ROLE_KEY` = `[staging-service-role-key]`
- [ ] Outras variáveis específicas do projeto

### Build Settings

- [ ] Build Command: `npm run build` (ou padrão Next.js)
- [ ] Output Directory: `.next` (ou padrão)
- [ ] Install Command: `npm install` (ou padrão)
- [ ] Node Version: 18.x ou 20.x

### Deploy

- [ ] Fazer push para branch conectada
- [ ] Aguardar build
- [ ] Verificar logs de build (sem erros)
- [ ] Deploy concluído com sucesso

---

## 🧪 Testes em Staging

### Smoke Tests

- [ ] Site carrega (https://[app]-staging.vercel.app)
- [ ] Sem erros 500
- [ ] CSS/Tailwind funcionando
- [ ] Images carregando

### Autenticação

- [ ] Signup funciona
- [ ] Profile criado automaticamente
- [ ] Login funciona
- [ ] Logout funciona
- [ ] Reset password funciona

### Features MVP

Para cada feature:
- [ ] Listar registros
- [ ] Criar registro
- [ ] Ver detalhe
- [ ] Editar registro
- [ ] Deletar registro

### RLS

- [ ] Criar usuário 1
- [ ] Criar dados como usuário 1
- [ ] Logout
- [ ] Criar usuário 2
- [ ] Verificar que usuário 2 não vê dados do usuário 1

### Responsividade

- [ ] Desktop (Chrome)
- [ ] Mobile (Chrome DevTools)
- [ ] Tablet
- [ ] Safari (se possível)
- [ ] Firefox (se possível)

### Performance

- [ ] Lighthouse Score:
  - Performance: > 80
  - Accessibility: > 90
  - Best Practices: > 90
  - SEO: > 80

---

## 🐛 Bugs & Issues

**Listar bugs encontrados**:

1. [ ] ___________________________________
2. [ ] ___________________________________
3. [ ] ___________________________________

---

## ✅ Aprovação para Produção

**Critérios**:
- [ ] Todos os smoke tests passaram
- [ ] Todas as features funcionam
- [ ] RLS testado e funcionando
- [ ] Sem bugs críticos
- [ ] Performance aceitável
- [ ] Responsividade OK
- [ ] Feedback do time/cliente positivo

**Status**: [✅ Aprovado / ⚠️ Com ressalvas / ❌ Reprovado]

**Próximo passo**: [Deploy em Produção](./checklist-producao.md)

---

**Testado por**: ___________
**Data**: ___________
**Observações**: ___________
