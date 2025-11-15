// ============================================================================
// EXEMPLO: Client Component com Estado
// Copie e adapte para seu projeto
// ============================================================================

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { createBrowserClient } from '@/lib/supabase/client';

interface Props {
  projectId: string;
}

export function ToggleFavoriteButton({ projectId }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = async () => {
    try {
      setIsLoading(true);

      const supabase = createBrowserClient();
      const { error } = await supabase
        .from('favorites')
        .insert({ project_id: projectId });

      if (error) throw error;

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error toggling favorite:', error);
      alert('Erro ao favoritar projeto');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleToggle}
      disabled={isLoading}
      variant={isFavorite ? 'default' : 'outline'}
    >
      {isLoading ? 'Carregando...' : isFavorite ? 'Favoritado' : 'Favoritar'}
    </Button>
  );
}
