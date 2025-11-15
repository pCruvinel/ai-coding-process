# 🤖 N8N: Agentes de IA e Automações

Guia para integrar N8N em projetos que precisam de workflows de IA e automações.

---

## 🎯 Quando Usar N8N

Use N8N quando seu projeto precisa de:

- **Agentes de IA**: Processamento de documentos, análise de texto, geração de conteúdo
- **Workflows complexos**: Múltiplos passos condicionais
- **Integrações**: Conectar múltiplas APIs/serviços
- **Processamento assíncrono**: Tarefas que levam tempo (não bloqueiam UI)
- **Automações**: Triggers baseados em eventos (webhooks, cron jobs)

---

## 📚 O que é N8N

**N8N** é uma ferramenta de automação workflow (low-code) que permite:
- Criar workflows visuais (drag & drop)
- Integrar centenas de serviços (APIs, databases, IA)
- Executar JavaScript customizado
- Trigger workflows via webhooks
- Processar dados em background

**Casos de uso comuns**:
- Upload de PDF → Extrair texto → Analisar com GPT → Salvar resultado
- Novo usuário → Enviar email welcome → Criar dados iniciais
- Webhook do Stripe → Atualizar subscription → Notificar usuário
- Cron job diário → Gerar relatórios → Enviar por email

---

## 🏗️ Arquitetura: Next.js + Supabase + N8N

```
[Next.js Frontend]
       ↓
  [Supabase]
       ├── Database (PostgreSQL)
       ├── Auth
       ├── Storage
       └── Webhooks → [N8N]
                        ├── OpenAI API
                        ├── External APIs
                        ├── Email service
                        └── → Update Supabase
```

**Fluxo típico**:
1. Usuário faz upload de arquivo via Next.js
2. Arquivo salvo no Supabase Storage
3. Supabase trigger webhook para N8N
4. N8N processa arquivo (extrai texto, analisa com IA)
5. N8N salva resultado de volta no Supabase
6. Frontend recebe atualização via Realtime

---

## 🚀 Setup: N8N Cloud vs Self-Hosted

### Opção 1: N8N Cloud (Recomendado para MVP)

**Prós**:
- Setup rápido (minutos)
- Managed (sem manutenção)
- Alta disponibilidade

**Contras**:
- Custo mensal (~$20/mês para starter)
- Menos controle

**Setup**:
1. Criar conta em [n8n.cloud](https://n8n.cloud)
2. Criar workflow
3. Obter webhook URL
4. Configurar Supabase → Webhook

---

### Opção 2: N8N Self-Hosted (Para produção de longo prazo)

**Prós**:
- Custo menor (só infraestrutura)
- Controle total
- Dados permanecem no seu server

**Contras**:
- Setup mais complexo
- Requer manutenção

**Opções de deploy**:
- Railway (fácil)
- Vercel + PostgreSQL (não recomendado - limites de timeout)
- VPS (DigitalOcean, Linode, AWS EC2)
- Docker self-hosted

**Setup básico (Railway)**:
1. Fork [n8n-nodes-railway](https://github.com/n8n-io/n8n/tree/master/docker/compose)
2. Deploy no Railway
3. Configurar env vars
4. Acessar via URL do Railway

---

## 🔗 Integração: Supabase → N8N

### 1. Criar Webhook no N8N

1. No N8N, criar novo workflow
2. Adicionar node "Webhook"
3. Escolher método: POST
4. Copiar webhook URL: `https://[n8n-url]/webhook/[id]`

### 2. Configurar Database Webhook no Supabase

**SQL para criar webhook function**:

```sql
-- Function para chamar N8N webhook
CREATE OR REPLACE FUNCTION notify_n8n_on_file_upload()
RETURNS trigger AS $$
DECLARE
  webhook_url TEXT := 'https://[n8n-url]/webhook/[id]';
  payload JSON;
BEGIN
  payload := json_build_object(
    'table', TG_TABLE_NAME,
    'operation', TG_OP,
    'data', row_to_json(NEW)
  );

  PERFORM
    net.http_post(
      url := webhook_url,
      body := payload::TEXT
    );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger na tabela (ex: documents)
CREATE TRIGGER on_document_upload
  AFTER INSERT ON documents
  FOR EACH ROW
  EXECUTE FUNCTION notify_n8n_on_file_upload();
```

**Nota**: Requer extensão `pg_net` (disponível no Supabase)

### 3. Processar no N8N

**Exemplo de workflow N8N**:
1. **Webhook** (recebe dados do Supabase)
2. **HTTP Request** (baixa arquivo do Supabase Storage)
3. **Code** (extrai texto do PDF usando pdf-parse)
4. **OpenAI** (analisa texto com GPT-4)
5. **HTTP Request** (atualiza registro no Supabase via API)

---

## 📝 Exemplo Prático: Análise de Documentos com IA

### Caso de Uso

Usuário faz upload de PDF → N8N extrai texto → GPT analisa → Salva summary no banco

### 1. Frontend (Next.js)

```typescript
// app/dashboard/documents/page.tsx
'use client'

import { createClient } from '@/lib/supabase/client'

export default function UploadPage() {
  async function handleUpload(file: File) {
    const supabase = createClient()

    // 1. Upload para Storage
    const { data: storageData, error: storageError } = await supabase
      .storage
      .from('documents')
      .upload(`${user.id}/${file.name}`, file)

    if (storageError) throw storageError

    // 2. Criar registro no banco (trigger chama N8N)
    const { data, error } = await supabase
      .from('documents')
      .insert({
        user_id: user.id,
        filename: file.name,
        storage_path: storageData.path,
        status: 'processing' // N8N vai atualizar para 'complete'
      })
      .select()
      .single()

    // 3. N8N processa em background
    // 4. Frontend pode fazer polling ou usar Realtime
  }

  return <UploadForm onUpload={handleUpload} />
}
```

### 2. Supabase Schema

```sql
-- Tabela de documentos
CREATE TABLE documents (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  filename TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  status TEXT DEFAULT 'processing' CHECK (status IN ('processing', 'complete', 'error')),
  summary TEXT, -- Preenchido pelo N8N após análise
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- RLS
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "documents_select_own" ON documents
  FOR SELECT USING (auth.uid() = user_id);

-- Trigger para N8N
CREATE TRIGGER on_document_upload
  AFTER INSERT ON documents
  FOR EACH ROW
  EXECUTE FUNCTION notify_n8n_on_file_upload();
```

### 3. N8N Workflow

**Nodes**:

1. **Webhook Trigger**
   - Recebe: `{ table, operation, data: { id, user_id, storage_path, ... } }`

2. **Supabase Get File**
   - HTTP Request para Supabase Storage
   - URL: `https://[project].supabase.co/storage/v1/object/public/documents/[storage_path]`

3. **Extract Text (Code Node)**
   ```javascript
   const pdfParse = require('pdf-parse');
   const buffer = Buffer.from($input.item.json.data, 'base64');
   const pdf = await pdfParse(buffer);
   return { text: pdf.text };
   ```

4. **OpenAI (GPT-4)**
   - Prompt: "Summarize this document in 3 bullet points: {{$json.text}}"

5. **Update Supabase**
   - HTTP Request (POST) para Supabase API
   - Endpoint: `/rest/v1/documents?id=eq.{{$json.id}}`
   - Body: `{ summary: "...", status: "complete" }`
   - Headers: `apikey`, `Authorization: Bearer [service_role_key]`

### 4. Frontend - Realtime Update

```typescript
// Componente que escuta atualizações
'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export function DocumentStatus({ documentId }: { documentId: string }) {
  const [status, setStatus] = useState('processing')
  const [summary, setSummary] = useState('')

  useEffect(() => {
    const supabase = createClient()

    // Subscribe a mudanças
    const channel = supabase
      .channel('document-updates')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'documents',
          filter: `id=eq.${documentId}`
        },
        (payload) => {
          setStatus(payload.new.status)
          setSummary(payload.new.summary)
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [documentId])

  if (status === 'processing') return <div>Processando...</div>
  if (status === 'error') return <div>Erro ao processar</div>
  return <div>Summary: {summary}</div>
}
```

---

## 💡 Boas Práticas

### Segurança

- [ ] Use Service Role Key do Supabase apenas em N8N (servidor)
- [ ] Nunca exponha N8N webhook URL publicamente (sempre via Supabase trigger)
- [ ] Valide dados recebidos no webhook (evitar abuse)
- [ ] Use HTTPS sempre

### Performance

- [ ] Processar em background (não bloquear frontend)
- [ ] Usar queue se muitos requests simultâneos
- [ ] Timeout adequado (N8N suporta workflows longos)
- [ ] Error handling robusto

### Monitoramento

- [ ] Logs de N8N workflows
- [ ] Alertas em caso de falhas
- [ ] Metrics (tempo de processamento, taxa de erro)

---

## 📚 Recursos

- [N8N Docs](https://docs.n8n.io)
- [N8N + Supabase](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.supabase/)
- [Supabase Webhooks](https://supabase.com/docs/guides/database/webhooks)
- [Supabase pg_net](https://supabase.com/docs/guides/database/extensions/pg_net)

---

## ✅ Checklist de Implementação

- [ ] N8N setup (Cloud ou Self-hosted)
- [ ] Webhook criado no N8N
- [ ] Supabase trigger function criada
- [ ] Workflow N8N testado
- [ ] Frontend integrado
- [ ] Realtime funcionando (se aplicável)
- [ ] Error handling implementado
- [ ] Monitoramento configurado

---

**Quando em dúvida**: Comece com N8N Cloud para MVP, migre para self-hosted se/quando crescer.
