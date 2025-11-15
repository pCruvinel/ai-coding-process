// ============================================================================
// EXEMPLO: Schemas de Validação com Zod
// Copie e adapte para seu projeto
// ============================================================================

import { z } from 'zod';

// ============================================================================
// Auth Schemas
// ============================================================================

export const signupSchema = z.object({
  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .email('Email inválido'),
  password: z
    .string()
    .min(8, 'Senha deve ter no mínimo 8 caracteres')
    .regex(/[A-Z]/, 'Senha deve ter pelo menos uma letra maiúscula')
    .regex(/[0-9]/, 'Senha deve ter pelo menos um número'),
  name: z
    .string()
    .min(2, 'Nome deve ter no mínimo 2 caracteres')
    .max(100, 'Nome muito longo'),
});

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'Senha é obrigatória'),
});

// Types inferidos dos schemas
export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

// ============================================================================
// Project Schemas
// ============================================================================

export const createProjectSchema = z.object({
  name: z
    .string()
    .min(3, 'Nome deve ter no mínimo 3 caracteres')
    .max(100, 'Nome muito longo'),
  description: z
    .string()
    .max(500, 'Descrição muito longa')
    .optional(),
  start_date: z
    .string()
    .or(z.date())
    .optional(),
  end_date: z
    .string()
    .or(z.date())
    .optional(),
}).refine(
  (data) => {
    // Validação customizada: end_date deve ser após start_date
    if (data.start_date && data.end_date) {
      const start = new Date(data.start_date);
      const end = new Date(data.end_date);
      return end > start;
    }
    return true;
  },
  {
    message: 'Data de término deve ser após data de início',
    path: ['end_date'],
  }
);

export const updateProjectSchema = createProjectSchema.partial();

export type CreateProjectInput = z.infer<typeof createProjectSchema>;
export type UpdateProjectInput = z.infer<typeof updateProjectSchema>;

// ============================================================================
// Exemplo de Uso em Formulário
// ============================================================================

/*
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

function ProjectForm() {
  const form = useForm<CreateProjectInput>({
    resolver: zodResolver(createProjectSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  const onSubmit = async (data: CreateProjectInput) => {
    // Data já está validada!
    console.log(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      // Seus campos aqui
    </form>
  );
}
*/
