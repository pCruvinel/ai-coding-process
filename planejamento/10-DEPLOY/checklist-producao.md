# ✅ Checklist: Deploy Produção

---

## 🎯 Objetivo

Deploy final da aplicação em produção.

**Plataforma**: Vercel
**Database**: Supabase Cloud (produção)
**Pré-requisito**: Staging testado e aprovado

---

## 🗄️ Supabase Produção

### Criar Projeto Produção

- [ ] Criar novo projeto no Supabase Cloud
  - Nome: `[projeto]-prod` ou `[projeto]`
  - Região: mais próxima dos usuários
  - Tier: Free ou Pro (conforme necessário)
  - Password: senha FORTE (salvar em gerenciador seguro)

### Migrations

- [ ] Linkar projeto local ao produção
  ```bash
  supabase link --project-ref [prod-project-id]
  ```

- [ ] Aplicar todas as migrations
  ```bash
  supabase db push
  ```

- [ ] Verificar schema no SQL Editor
- [ ] Verificar todas as tabelas criadas
- [ ] Verificar RLS policies ativas em TODAS as tabelas
- [ ] Verificar triggers funcionando
- [ ] Verificar functions criadas

### Configurações de Autenticação

- [ ] **Site URL**: `https://[seudominio].com`
- [ ] **Redirect URLs**: `https://[seudominio].com/**`
- [ ] Email templates customizados (opcional)
- [ ] Rate limits configurados (se necessário)

### Storage (se aplicável)

- [ ] Buckets criados
- [ ] RLS policies nos buckets
- [ ] CORS configurado

### Backup

- [ ] Confirmar backups automáticos ativos (Supabase Pro)
- [ ] Documentar strategy de backup manual (Free tier)

---

## 🌐 Domínio (se aplicável)

- [ ] Domínio registrado
- [ ] DNS apontando para Vercel
- [ ] SSL/TLS configurado (automático no Vercel)

---

## 🚀 Vercel Produção

### Configurar Produção

- [ ] No mesmo projeto Vercel, configurar ambiente **Production**

### Variáveis de Ambiente

Adicionar em **Settings → Environment Variables → Production**:

- [ ] `NEXT_PUBLIC_SUPABASE_URL` = `https://[prod-id].supabase.co`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `[prod-anon-key]`
- [ ] `SUPABASE_SERVICE_ROLE_KEY` = `[prod-service-role-key]` (NUNCA expor!)
- [ ] Outras variáveis de produção

**IMPORTANTE**:
- [ ] Conferir TODAS as variáveis
- [ ] Nenhuma variável de staging vazou para produção
- [ ] Service role key está apenas em Production, não em Preview

### Deploy

- [ ] Fazer merge para branch `main` (ou branch de produção)
- [ ] Aguardar build automático
- [ ] Verificar logs de build
- [ ] Build concluído com sucesso

### Domínio Customizado (se aplicável)

- [ ] Adicionar domínio no Vercel
- [ ] Verificar DNS propagado
- [ ] SSL ativo
- [ ] HTTPS funciona
- [ ] Redirect de HTTP → HTTPS ativo

---

## 🧪 Smoke Tests em Produção

### Verificações Básicas

- [ ] Site carrega em `https://[seudominio].com`
- [ ] Sem erros 500
- [ ] CSS/Tailwind aplicado corretamente
- [ ] Images otimizadas (next/image)
- [ ] Fonts carregando

### Autenticação

- [ ] Signup funciona
- [ ] Email de confirmação chega (se habilitado)
- [ ] Profile criado automaticamente
- [ ] Login funciona
- [ ] Session persiste após refresh
- [ ] Logout funciona
- [ ] Reset password funciona

### Features Principais

- [ ] Testar TODAS as features MVP
- [ ] Criar/Ler/Atualizar/Deletar funcionando
- [ ] Validações funcionando
- [ ] Mensagens de erro adequadas

### Multi-Browser

- [ ] Chrome Desktop
- [ ] Safari Desktop (Mac)
- [ ] Firefox Desktop
- [ ] Chrome Mobile (iOS)
- [ ] Safari Mobile (iOS)
- [ ] Chrome Mobile (Android)

### Performance

- [ ] Lighthouse (modo anônimo):
  - Performance: >= 90
  - Accessibility: >= 90
  - Best Practices: >= 90
  - SEO: >= 90

- [ ] Vercel Analytics habilitado
- [ ] Monitoring configurado (Sentry/LogRocket se aplicável)

---

## 🔐 Segurança

- [ ] RLS ativo em TODAS as tabelas
- [ ] Service role key NÃO exposta no frontend
- [ ] CORS configurado corretamente
- [ ] Rate limiting (se necessário)
- [ ] Input validation em todos os forms
- [ ] XSS protection (Next.js automático)
- [ ] CSRF protection via Supabase
- [ ] SQL injection impossível (Supabase + RLS)

---

## 📊 Monitoramento

- [ ] Vercel Analytics ativo
- [ ] Error tracking configurado (Sentry, etc.)
- [ ] Uptime monitoring (opcional)
- [ ] Alertas configurados (downtime, erros)

---

## 📝 Documentação

- [ ] README atualizado
- [ ] `.env.example` criado (SEM valores reais!)
- [ ] Runbook de troubleshooting
- [ ] Processo de rollback documentado
- [ ] Contatos de emergência definidos

---

## 🎉 Handoff & Launch

### Cliente/Stakeholders

- [ ] Demo do site em produção
- [ ] Credenciais de admin entregues (se aplicável)
- [ ] Documentação de usuário final (se necessário)
- [ ] Treinamento (se necessário)

### Time

- [ ] Acesso ao Vercel compartilhado
- [ ] Acesso ao Supabase compartilhado
- [ ] Runbook compartilhado
- [ ] On-call definido (se aplicável)

### Marketing/Lançamento

- [ ] Anúncio preparado
- [ ] SEO otimizado
- [ ] Social media cards (og:image, twitter:card)
- [ ] Analytics configurado (GA4, etc.)

---

## 🚨 Plano de Rollback

**Se algo der errado**:

1. [ ] Reverter deploy no Vercel (Deployments → `...` → Rollback)
2. [ ] Reverter migrations no Supabase (se necessário)
3. [ ] Comunicar incidente ao time
4. [ ] Debugar em staging
5. [ ] Fix → Test → Redeploy

---

## ✅ Aprovação Final

**Critérios**:
- [ ] Todos os smoke tests passaram
- [ ] Performance aceitável
- [ ] Sem bugs críticos
- [ ] Segurança validada
- [ ] Monitoring ativo
- [ ] Cliente/stakeholders aprovaram
- [ ] Documentação completa

**Status**: [✅ Em produção! / ⚠️ Com issues / ❌ Rollback necessário]

---

## 🎊 Projeto Concluído!

**Data de launch**: ___________
**URL**: https://___________
**Time**: ___________

**Retrospectiva**:
- O que funcionou bem: ___________
- O que pode melhorar: ___________
- Lições aprendidas: ___________

---

**Parabéns! 🚀**
