// ============================================================================
// EXEMPLO: Server Component com Fetch de Dados
// Copie e adapte para seu projeto
// ============================================================================

import { createServerClient } from '@/lib/supabase/server';
import { ProjectCard } from './project-card';

// Types (adapte conforme seu schema)
interface Project {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
}

// ============================================================================
// Server Component (executa no servidor)
// ============================================================================
export default async function ProjectsList() {
  // Fetch dados no servidor
  const supabase = createServerClient();
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  // Error handling
  if (error) {
    console.error('Error fetching projects:', error);
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
        <p className="text-sm text-red-600">
          Erro ao carregar projetos. Tente novamente.
        </p>
      </div>
    );
  }

  // Empty state
  if (!projects || projects.length === 0) {
    return (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
        <p className="text-gray-600">Nenhum projeto ainda.</p>
        <p className="mt-2 text-sm text-gray-500">
          Crie seu primeiro projeto para começar.
        </p>
      </div>
    );
  }

  // Success - render lista
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
