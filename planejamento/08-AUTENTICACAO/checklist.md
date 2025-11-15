# ✅ Checklist: Autenticação

---

## 🔧 Setup Inicial

- [ ] Supabase clients configurados (browser, server)
- [ ] Variáveis de ambiente (.env.local)
- [ ] shadcn/ui components instalados (Button, Input, Label)
- [ ] Redirect URLs configuradas no Supabase Dashboard

---

## 📄 Páginas & Rotas

- [ ] `app/(auth)/layout.tsx` - Layout para páginas de auth
- [ ] `app/(auth)/login/page.tsx` - Página de login
- [ ] `app/(auth)/signup/page.tsx` - Página de signup
- [ ] `app/(auth)/reset-password/page.tsx` - Página de reset
- [ ] `app/(dashboard)/layout.tsx` - Layout para rotas protegidas

---

## 🎨 Componentes

- [ ] `components/auth/LoginForm.tsx` - Formulário de login
- [ ] `components/auth/SignupForm.tsx` - Formulário de signup
- [ ] `components/auth/ResetPasswordForm.tsx` - Formulário de reset
- [ ] `components/auth/LogoutButton.tsx` - Botão de logout

---

## 🔐 Funcionalidades

### Login
- [ ] Campo de email
- [ ] Campo de senha
- [ ] Validação de formulário
- [ ] Mensagens de erro
- [ ] Loading state
- [ ] Link para signup
- [ ] Link para reset password
- [ ] Redirect para /dashboard após login

### Signup
- [ ] Campo de nome completo
- [ ] Campo de email
- [ ] Campo de senha (min 6 chars)
- [ ] Validação de formulário
- [ ] Mensagens de erro
- [ ] Loading state
- [ ] Link para login
- [ ] Redirect para /dashboard após signup
- [ ] Profile criado automaticamente (trigger)

### Reset Password
- [ ] Campo de email
- [ ] Envio de email de reset
- [ ] Mensagem de confirmação
- [ ] Link para voltar ao login

### Logout
- [ ] Botão de logout
- [ ] Limpar sessão
- [ ] Redirect para /login

---

## 🛡️ Proteção de Rotas

- [ ] Middleware configurado (`middleware.ts`)
- [ ] Rotas /dashboard/* protegidas
- [ ] Redirect para /login se não autenticado
- [ ] Redirect para /dashboard se já autenticado e acessar /login
- [ ] Session refresh automático

---

## 🎣 Hooks & Utilities

- [ ] `lib/hooks/useUser.ts` - Hook para obter usuário atual
- [ ] Subscribe a mudanças de auth state
- [ ] Loading state gerenciado

---

## 🧪 Testes Manuais

### Fluxo de Signup
- [ ] Criar conta com email/senha
- [ ] Profile criado automaticamente
- [ ] Redirect para /dashboard
- [ ] Email de confirmação recebido (se habilitado)

### Fluxo de Login
- [ ] Login com credenciais corretas
- [ ] Redirect para /dashboard
- [ ] Mensagem de erro com credenciais incorretas
- [ ] Mensagem de erro com email inválido

### Fluxo de Reset
- [ ] Enviar email de reset
- [ ] Receber email
- [ ] Click no link
- [ ] Redefinir senha
- [ ] Login com nova senha

### Proteção de Rotas
- [ ] Acessar /dashboard sem auth → redirect para /login
- [ ] Acessar /login com auth → redirect para /dashboard
- [ ] Logout → redirect para /login
- [ ] Session persiste após refresh da página

### Edge Cases
- [ ] Email já cadastrado → erro claro
- [ ] Senha curta (< 6 chars) → erro claro
- [ ] Email inválido → erro claro
- [ ] Network error → mensagem adequada

---

## ♿ Acessibilidade

- [ ] Labels associados aos inputs
- [ ] autocomplete correto (email, current-password, new-password)
- [ ] Focus states visíveis
- [ ] Mensagens de erro anunciadas

---

## 📱 Responsividade

- [ ] Forms centralizados em mobile
- [ ] Inputs com tamanho adequado em mobile
- [ ] Botões com área de toque adequada

---

## ✅ Aprovação Final

- [ ] Todos os fluxos testados
- [ ] Sem erros no console
- [ ] Loading states funcionando
- [ ] Mensagens de erro claras
- [ ] RLS testado (usuário só vê próprios dados)
- [ ] Pronto para Fase 9 (Desenvolvimento)

---

**Status**: ___________
**Testado por**: ___________
**Data**: ___________
