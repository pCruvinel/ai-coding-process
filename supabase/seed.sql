-- ============================================================================
-- Seed Data (Opcional)
-- Description: Dados iniciais para desenvolvimento/testes
-- IMPORTANTE: NÃO executar em produção com dados reais
-- ============================================================================

-- ⚠️ AVISO: Este arquivo é apenas para desenvolvimento/testes
-- Execute apenas em ambientes de desenvolvimento/staging

-- ============================================================================
-- Usuários de Teste (Opcional - apenas para desenvolvimento)
-- ============================================================================

-- NOTA: Em produção, usuários são criados via signup normal
-- Este seed é útil apenas para popular ambiente de desenvolvimento

-- Para criar usuários de teste, use o Supabase Auth UI ou API
-- Exemplo via SQL (NÃO recomendado - use Auth API):
--
-- INSERT INTO auth.users (
--   instance_id,
--   id,
--   aud,
--   role,
--   email,
--   encrypted_password,
--   email_confirmed_at,
--   raw_user_meta_data,
--   created_at,
--   updated_at,
--   confirmation_token
-- ) VALUES (
--   '00000000-0000-0000-0000-000000000000',
--   gen_random_uuid(),
--   'authenticated',
--   'authenticated',
--   'admin@example.com',
--   crypt('admin123', gen_salt('bf')),
--   NOW(),
--   '{"name": "Admin User"}',
--   NOW(),
--   NOW(),
--   ''
-- );

-- ============================================================================
-- Promover primeiro usuário a admin (Opcional)
-- ============================================================================

-- ATENÇÃO: Descomentar apenas se precisar promover um usuário específico
-- Substitua [email-do-usuario] pelo email real

-- UPDATE public.users
-- SET role_id = (SELECT id FROM public.roles WHERE name = 'admin')
-- WHERE auth_id = (
--   SELECT id FROM auth.users WHERE email = '[email-do-usuario]'
-- );

-- ============================================================================
-- Dados de Exemplo (Adicione conforme necessário)
-- ============================================================================

-- Exemplo: Categorias padrão (se seu projeto tiver)
-- INSERT INTO categories (name, description) VALUES
--   ('Categoria 1', 'Descrição da categoria 1'),
--   ('Categoria 2', 'Descrição da categoria 2')
-- ON CONFLICT DO NOTHING;

-- Exemplo: Configurações padrão do sistema
-- INSERT INTO settings (key, value) VALUES
--   ('app_name', '"Meu App"'),
--   ('maintenance_mode', 'false'),
--   ('max_upload_size', '5242880')
-- ON CONFLICT (key) DO NOTHING;

-- ============================================================================
-- Fim do Seed
-- ============================================================================
