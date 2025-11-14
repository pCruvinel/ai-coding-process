# 🧩 Componentes Shadcn/ui + Tailwind v4

## O que é Shadcn/ui?

Shadcn/ui é **uma coleção de componentes React reutilizáveis** baseados em **Radix UI** (primitivos acessíveis) + **Tailwind CSS** para styling.

**Características:**
- ✅ **Compostos, não pré-construídos** (você controla o código)
- ✅ **Acessíveis por padrão** (WCAG AA/AAA)
- ✅ **Totalmente customizáveis** (Tailwind classes)
- ✅ **Sem dependências extras** (exceto React e Radix)
- ✅ **Type-safe** (TypeScript built-in)
- ✅ **Funciona com Dark Mode**

---

## 📦 Setup Inicial

### Instalação

```bash
npx shadcn-ui@latest init
```

**Respostas recomendadas:**
- Would you like to use TypeScript? **Yes**
- Which style would you like to use? **Default**
- Which color would you like as the base color? **Slate**
- Where is your global CSS file? **src/app/globals.css**

### Instalando Componentes Individuais

```bash
# Instalar um componente
npx shadcn-ui@latest add button

# Instalar vários
npx shadcn-ui@latest add button input card dialog
```

**Estrutura criada:**
```
src/components/ui/
├── button.tsx
├── input.tsx
├── card.tsx
├── dialog.tsx
└── [outros...]
```

---

## 🎨 Componentes Essenciais + Exemplos

### 1. Button

**Instalação:**
```bash
npx shadcn-ui@latest add button
```

**Uso Básico:**
```jsx
import { Button } from '@/components/ui/button';

export default function MyComponent() {
  return (
    <>
      {/* Primary */}
      <Button>Click me</Button>

      {/* Secondary */}
      <Button variant="secondary">Secondary</Button>

      {/* Outline */}
      <Button variant="outline">Outline</Button>

      {/* Ghost (text-only) */}
      <Button variant="ghost">Ghost</Button>

      {/* Destructive (danger) */}
      <Button variant="destructive">Delete</Button>

      {/* Tamanhos */}
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>

      {/* States */}
      <Button disabled>Disabled</Button>
      <Button className="opacity-75">Loading...</Button>

      {/* Com ícone */}
      <Button>
        <SaveIcon className="w-4 h-4 mr-2" />
        Save
      </Button>
    </>
  );
}
```

**Props:**
```typescript
interface ButtonProps {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}
```

**Customização em `button.tsx`:**
```tsx
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary-dark',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-dark',
        outline: 'border border-input bg-background hover:bg-accent',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive-dark',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-md px-8 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
```

### 2. Input

**Instalação:**
```bash
npx shadcn-ui@latest add input
```

**Uso Básico:**
```jsx
import { Input } from '@/components/ui/input';

export default function MyForm() {
  const [value, setValue] = useState('');

  return (
    <>
      {/* Text input */}
      <Input
        type="text"
        placeholder="Enter your name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* Email input */}
      <Input type="email" placeholder="Enter email" />

      {/* Password input */}
      <Input type="password" placeholder="Enter password" />

      {/* With error state */}
      <Input
        className="border-destructive focus:ring-destructive"
        placeholder="This has an error"
      />

      {/* Disabled */}
      <Input disabled placeholder="Disabled input" />

      {/* With label (use in forms) */}
      <label className="block mb-2">
        <span className="text-sm font-medium text-foreground">Email</span>
        <Input
          type="email"
          placeholder="Enter email"
          className="mt-1"
        />
      </label>
    </>
  );
}
```

**Com Form Handler (React Hook Form):**
```jsx
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <Input
          type="email"
          placeholder="Enter email"
          {...register('email', { required: 'Email is required' })}
          className={errors.email ? 'border-destructive' : ''}
        />
        {errors.email && (
          <span className="text-destructive text-sm mt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      <button type="submit" className="w-full bg-primary text-white py-2 rounded-md">
        Submit
      </button>
    </form>
  );
}
```

### 3. Card

**Instalação:**
```bash
npx shadcn-ui@latest add card
```

**Uso Básico:**
```jsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function MyCard() {
  return (
    <>
      {/* Basic card */}
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Content here */}
        </CardContent>
      </Card>

      {/* Card with footer */}
      <Card>
        <CardHeader>
          <CardTitle>Project</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Project details...</p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </Card>

      {/* Interactive card (hover effect) */}
      <Card className="cursor-pointer hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>Click me</CardTitle>
        </CardHeader>
      </Card>
    </>
  );
}
```

**Estrutura interna:**
```typescript
export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)}
    {...props}
  />
));

export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
);

export const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
);

export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pt-0', className)} {...props} />
);

export const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
);
```

### 4. Dialog / Modal

**Instalação:**
```bash
npx shadcn-ui@latest add dialog
```

**Uso Básico:**
```jsx
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function MyDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Trigger button */}
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>

      {/* Dialog content */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-3 justify-end mt-6">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={() => {
            // Handle delete
            setOpen(false);
          }}>
            Delete Account
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

### 5. Dropdown Menu

**Instalação:**
```bash
npx shadcn-ui@latest add dropdown-menu
```

**Uso:**
```jsx
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreVerticalIcon } from 'lucide-react';

export default function MyDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreVerticalIcon className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => alert('Edit')}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => alert('Duplicate')}>
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={() => alert('Delete')}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### 6. Tabs

**Instalação:**
```bash
npx shadcn-ui@latest add tabs
```

**Uso:**
```jsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function MyTabs() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Overview content */}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="analytics">
        {/* Analytics content */}
      </TabsContent>

      <TabsContent value="settings">
        {/* Settings content */}
      </TabsContent>
    </Tabs>
  );
}
```

### 7. Alert

**Instalação:**
```bash
npx shadcn-ui@latest add alert
```

**Uso:**
```jsx
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircleIcon, CheckCircleIcon, InfoIcon, TriangleAlertIcon } from 'lucide-react';

export default function MyAlerts() {
  return (
    <>
      {/* Success */}
      <Alert className="border-success bg-success/5">
        <CheckCircleIcon className="h-4 w-4 text-success" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>

      {/* Warning */}
      <Alert className="border-warning bg-warning/5">
        <TriangleAlertIcon className="h-4 w-4 text-warning" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          This action is reversible but may take some time.
        </AlertDescription>
      </Alert>

      {/* Error */}
      <Alert className="border-destructive bg-destructive/5">
        <AlertCircleIcon className="h-4 w-4 text-destructive" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong. Please try again.
        </AlertDescription>
      </Alert>

      {/* Info */}
      <Alert className="border-primary bg-primary/5">
        <InfoIcon className="h-4 w-4 text-primary" />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>
          This is an informational message.
        </AlertDescription>
      </Alert>
    </>
  );
}
```

### 8. Toast

**Instalação:**
```bash
npx shadcn-ui@latest add toast
```

**Setup em `app/layout.tsx`:**
```jsx
import { Toaster } from '@/components/ui/toaster';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
```

**Uso:**
```jsx
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

export default function MyComponent() {
  const { toast } = useToast();

  return (
    <Button onClick={() => {
      toast({
        title: 'Success',
        description: 'Your changes have been saved.',
        duration: 3000,
      });
    }}>
      Show Toast
    </Button>
  );
}
```

### 9. Badge

**Instalação:**
```bash
npx shadcn-ui@latest add badge
```

**Uso:**
```jsx
import { Badge } from '@/components/ui/badge';

export default function MyBadges() {
  return (
    <>
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>

      {/* Com ícone */}
      <Badge className="gap-1">
        <DotIcon className="w-2 h-2 fill-current" />
        Active
      </Badge>
    </>
  );
}
```

### 10. Select

**Instalação:**
```bash
npx shadcn-ui@latest add select
```

**Uso:**
```jsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function MySelect() {
  const [value, setValue] = useState('');

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="option-1">Option 1</SelectItem>
        <SelectItem value="option-2">Option 2</SelectItem>
        <SelectItem value="option-3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  );
}
```

---

## 🎨 Customização

### Exemplo: Customizar Button Variant

**Em `components/ui/button.tsx`:**

```tsx
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary-dark',
        secondary: 'bg-secondary text-white hover:bg-secondary-dark',
        outline: 'border border-primary text-primary hover:bg-primary/10',
        ghost: 'hover:bg-gray-100 dark:hover:bg-gray-900',
        destructive: 'bg-destructive text-white hover:bg-destructive-dark',
        // NOVO VARIANT
        success: 'bg-success text-white hover:bg-success-dark',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
```

**Usar:**
```jsx
<Button variant="success">Success Action</Button>
```

### Exemplo: Customizar Input com Validação Automática

**Componente customizado em `components/ui/form-input.tsx`:**

```tsx
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-foreground mb-1">
            {label}
          </label>
        )}

        <Input
          ref={ref}
          className={cn(
            'w-full',
            error && 'border-destructive focus:ring-destructive',
            className,
          )}
          {...props}
        />

        {error && (
          <p className="text-destructive text-sm mt-1">{error}</p>
        )}

        {helperText && !error && (
          <p className="text-muted-foreground text-sm mt-1">{helperText}</p>
        )}
      </div>
    );
  },
);

FormInput.displayName = 'FormInput';
```

**Usar:**
```jsx
<FormInput
  label="Email"
  type="email"
  placeholder="Enter email"
  error={errors.email?.message}
  helperText="We'll never share your email"
/>
```

---

## 📋 Checklist de Componentes

**Componentes mínimos recomendados para MVP:**

- [ ] Button
- [ ] Input
- [ ] Card
- [ ] Dialog
- [ ] Dropdown Menu
- [ ] Tabs
- [ ] Alert
- [ ] Badge
- [ ] Select
- [ ] Toast
- [ ] Form (opcional, pode usar React Hook Form)
- [ ] Table (se tiver dados tabulares)
- [ ] Pagination (se tiver muitos itens)
- [ ] Breadcrumb (se navegação profunda)

**Instalar todos de uma vez:**
```bash
npx shadcn-ui@latest add button input card dialog dropdown-menu tabs alert badge select toast
```

---

## 🎯 Padrões Comuns

### Formulário Completo

```jsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/components/ui/use-toast';

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // API call
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) throw new Error('Signup failed');

      toast({
        title: 'Success',
        description: 'Account created successfully!',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <Input
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Creating account...' : 'Sign Up'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
```

---

## 🔗 Referências

- **Shadcn/ui**: https://ui.shadcn.com
- **Radix UI**: https://www.radix-ui.com
- **Lucide Icons**: https://lucide.dev

---

**Próximo**: Leia [`design-system.md`](./design-system.md) para documentação completa do sistema de design.
