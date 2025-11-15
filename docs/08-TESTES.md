# 08 - Estratégia de Testes

> **Template**: Defina a estratégia de testes do seu projeto

## 🎯 Visão Geral

[PREENCHER]

**Exemplo:**
Pirâmide de testes: Muitos testes unitários, alguns de integração, poucos E2E

```
      /\
     /  \    E2E (Poucos, críticos)
    /____\
   /      \
  / Integr \  Integração (Moderado)
 /__________\
/            \
/  Unitários  \  Unitários (Muitos, rápidos)
/______________\
```

---

## 🧪 Tipos de Testes

### Testes Unitários

**O que testar:**
[PREENCHER]

**Exemplo:**
- Funções utilitárias (ex: `formatDate`, `calculateTotal`)
- Validações Zod
- Custom hooks (ex: `useProjects`)
- Componentes isolados

**Ferramenta**: Vitest + React Testing Library

**Exemplo de teste:**
```typescript
// lib/utils/format-date.test.ts
import { describe, it, expect } from 'vitest';
import { formatDate } from './format-date';

describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = new Date('2024-01-15');
    expect(formatDate(date)).toBe('15/01/2024');
  });

  it('should handle invalid dates', () => {
    expect(formatDate(null)).toBe('Data inválida');
  });
});
```

---

### Testes de Integração

**O que testar:**
[PREENCHER]

**Exemplo:**
- Fluxos completos de componentes
- Interação com API/Supabase (mocked)
- Server Actions
- Formulários completos

**Exemplo de teste:**
```typescript
// components/projects/project-form.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ProjectForm } from './project-form';

describe('ProjectForm', () => {
  it('should create project successfully', async () => {
    const onSuccess = vi.fn();
    render(<ProjectForm onSuccess={onSuccess} />);

    fireEvent.change(screen.getByLabelText('Nome'), {
      target: { value: 'Novo Projeto' }
    });

    fireEvent.click(screen.getByText('Salvar'));

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalledWith(
        expect.objectContaining({ name: 'Novo Projeto' })
      );
    });
  });
});
```

---

### Testes E2E (End-to-End)

**O que testar:**
[PREENCHER]

**Exemplo:**
- Fluxos críticos de usuário
- Signup → Login → Criar projeto → Criar tarefa
- Pagamento (se houver)

**Ferramenta**: Playwright

**Exemplo de teste:**
```typescript
// e2e/auth-flow.spec.ts
import { test, expect } from '@playwright/test';

test('user can signup and create project', async ({ page }) => {
  await page.goto('/signup');

  await page.fill('[name="email"]', 'test@example.com');
  await page.fill('[name="password"]', 'senha123');
  await page.fill('[name="name"]', 'Test User');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('/dashboard');

  await page.click('text=Novo Projeto');
  await page.fill('[name="name"]', 'Meu Primeiro Projeto');
  await page.click('button:has-text("Criar")');

  await expect(page.locator('text=Meu Primeiro Projeto')).toBeVisible();
});
```

---

## 📊 Cobertura de Testes

### Metas
[PREENCHER]

**Exemplo:**
- **Geral**: > 80%
- **Utilidades**: > 95%
- **Componentes críticos**: > 90%
- **Components UI**: > 50% (menos crítico)

### Comando
```bash
npm run test:coverage
```

---

## 🛠️ Setup de Testes

### Instalação

[PREENCHER]

**Exemplo:**
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
npm install -D @playwright/test
```

### Configuração Vitest

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.ts',
  },
});
```

### Setup File

```typescript
// tests/setup.ts
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Supabase
vi.mock('@/lib/supabase/client', () => ({
  createBrowserClient: () => ({
    from: () => ({
      select: () => ({ data: [], error: null }),
      insert: () => ({ data: {}, error: null }),
    }),
  }),
}));
```

---

## 🎯 O Que Testar

### ✅ Deve Testar
[PREENCHER]

**Exemplo:**
- Lógica de negócio crítica
- Funções utilitárias
- Validações
- Fluxos de autenticação
- Formulários importantes
- Cálculos complexos

### ❌ Não Precisa Testar
[PREENCHER]

**Exemplo:**
- Bibliotecas externas (já testadas)
- Componentes triviais (ex: `<div>`)
- Código gerado (ex: tipos do Supabase)
- Configurações

---

## 🏃 Comandos

[PREENCHER]

**Exemplo:**
```bash
# Rodar todos os testes
npm run test

# Watch mode
npm run test:watch

# Cobertura
npm run test:coverage

# E2E
npm run test:e2e

# E2E com UI
npm run test:e2e:ui
```

---

## 📝 Boas Práticas

[PREENCHER]

**Exemplo:**
1. **Arrange, Act, Assert** (AAA pattern)
2. **Testar comportamento, não implementação**
3. **Usar data-testid apenas quando necessário**
4. **Mock apenas o essencial**
5. **Testes devem ser independentes**
6. **Nomes descritivos** (it should...)

---

## 🚀 Integração com CI/CD

[PREENCHER]

**Exemplo:**
```yaml
# .github/workflows/test.yml
name: Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test:coverage
```

---

**Status**: 🟡 Template - Aguardando preenchimento
**Documento Anterior**: [07-DEPLOY.md](./07-DEPLOY.md)
**Próximo Documento**: [09-HISTORICO.md](./09-HISTORICO.md)
