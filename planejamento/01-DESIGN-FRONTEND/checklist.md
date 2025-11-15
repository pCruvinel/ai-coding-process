# ✅ FASE 1: Checklist - Design Frontend com IA

## 📋 PRÉ-DESIGN
### Análise do PRD
- [ ] PRD lido completamente
- [ ] Todas as features MVP entendidas
- [ ] Personas e fluxos de usuário revisados
- [ ] Telas necessárias mapeadas

### Brief de Design
- [ ] **Preferências visuais definidas**
  - [ ] Estilo geral (moderno, minimalista, corporativo, etc)
  - [ ] Paleta de cores (primária, secundária, neutras)
  - [ ] Referências visuais coletadas (sites similares)
- [ ] **Componentes necessários identificados**
  - [ ] Shadcn/ui components listados
  - [ ] Componentes customizados identificados
- [ ] **Telas principais listadas**
  - [ ] Login/Signup
  - [ ] Dashboard
  - [ ] Tela principal da feature
  - [ ] CRUD (criar, editar, visualizar)
  - [ ] Settings/Perfil

## 🎨 GERAÇÃO COM IA (Lovable/v0)

### Setup
- [ ] Ferramenta escolhida (Lovable, v0, ou similar)
- [ ] Conta criada e configurada
- [ ] Projeto/workspace criado

### Criação das Telas
- [ ] **Autenticação**
  - [ ] Login
  - [ ] Signup
  - [ ] Forgot password
- [ ] **Dashboard/Home**
  - [ ] Layout principal
  - [ ] Cards/KPIs principais
  - [ ] Navegação funcional
- [ ] **Feature Principal**
  - [ ] Listagem de itens
  - [ ] Visualizar detalhes
  - [ ] Criar novo
  - [ ] Editar existente
- [ ] **Settings/Perfil**
  - [ ] Visualizar perfil
  - [ ] Editar dados
  - [ ] Preferências

### Design System Básico
- [ ] Cores definidas e consistentes
- [ ] Tipografia clara (tamanhos, pesos)
- [ ] Espaçamento padronizado
- [ ] Componentes Shadcn integrados

### Estados e Responsividade
- [ ] **Estados por tela**:
  - [ ] Normal (com dados)
  - [ ] Loading (carregando)
  - [ ] Empty (sem dados)
  - [ ] Error (erro)
- [ ] **Responsivo**:
  - [ ] Mobile (funciona em telas pequenas)
  - [ ] Desktop (layout adequado)
  - [ ] Navegação adaptada para mobile

## 👥 APROVAÇÃO CLIENTE

### Primeira Revisão
- [ ] Link de preview compartilhado com cliente
- [ ] Feedback coletado
- [ ] Principais ajustes identificados

### Ajustes
- [ ] Mudanças implementadas (máx 2-3 rodadas)
- [ ] Nova versão compartilhada

### Aprovação Final
- [ ] Cliente aprovou design por escrito (email/mensagem)
- [ ] Autorização para prosseguir ao código

## 💻 EXPORT DO CÓDIGO

### Exportação
- [ ] Código exportado da ferramenta de IA
- [ ] Estrutura de pastas verificada
- [ ] Componentes separados corretamente

### Validação Local
- [ ] Código baixado/clonado localmente
- [ ] Dependências listadas (package.json)
- [ ] **Testes básicos** (a fazer via Claude Code na Fase 2):
  - [ ] Aplicação deve poder ser instalada
  - [ ] Aplicação deve poder rodar
  - [ ] Navegação entre telas deve funcionar

### Estrutura de Código
Verificar que existe:
```
src/
├── app/              # Páginas Next.js
├── components/       # Componentes React
│   ├── ui/          # Componentes Shadcn
│   └── ...
├── lib/             # Utilitários
└── styles/          # CSS global
```

## 📚 DOCUMENTAÇÃO

### Documento de Export
- [ ] **`.ai/frontend-export.md` criado com**:
  - [ ] Resumo do projeto
  - [ ] Telas criadas (lista)
  - [ ] Componentes principais
  - [ ] Design System (cores, fontes)
  - [ ] Dados mockados usados
  - [ ] APIs que serão necessárias no backend

### Inventário de Componentes
- [ ] Lista de componentes criados
- [ ] Props principais de cada componente
- [ ] Onde cada componente é usado

### Preparação para Próxima Fase
- [ ] README.md básico criado
- [ ] .env.example criado (pode estar vazio)
- [ ] .gitignore configurado

## ✅ CRITÉRIOS DE CONCLUSÃO

Você completou FASE 1 quando:

### Completude ✅
- [ ] Todas as telas do PRD MVP foram criadas
- [ ] Componentes Shadcn/ui estão integrados
- [ ] Design é responsivo (mobile + desktop)
- [ ] Estados principais existem (normal, loading, error)

### Qualidade ✅
- [ ] Design é limpo e profissional
- [ ] Navegação entre telas faz sentido
- [ ] Componentes são reutilizáveis
- [ ] Nenhuma quebra visual óbvia

### Aprovação ✅
- [ ] Cliente aprovou o design
- [ ] Aprovação documentada (email/mensagem)
- [ ] Autorização para prosseguir

### Código ✅
- [ ] Código exportado da ferramenta
- [ ] Estrutura de pastas faz sentido
- [ ] README.md existe

### Documentação ✅
- [ ] `.ai/frontend-export.md` completo
- [ ] Componentes documentados
- [ ] Telas listadas
- [ ] Design system documentado

## 🆘 Troubleshooting

### IA gerou código que não funciona
- Pedir para regenerar com prompt mais claro
- Fazer ajustes manuais mínimos (documentar)
- Considerar outra ferramenta

### Cliente quer muitas mudanças
- Limitar a 2-3 rodadas de feedback
- Priorizar mudanças críticas
- Marcar outras mudanças para "pós-MVP"

### Design não é responsivo
- Ser explícito no prompt: "totalmente responsivo, mobile-first"
- Testar preview em diferentes tamanhos
- Ajustar manualmente se necessário

### Componentes não parecem Shadcn
- Especificar no prompt: "usar componentes Shadcn/ui exatamente"
- Verificar documentação Shadcn
- Instalar componentes corretos após export

---

**Tempo estimado**: 2-3 dias
**Próxima fase**: FASE 2 (Transição Backend - Setup com Claude Code)
