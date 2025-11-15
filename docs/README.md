# 📚 Documentação Técnica

Esta pasta contém a documentação técnica completa do projeto. Estes documentos são **templates/exemplos** que devem ser preenchidos para cada projeto específico que seguir este processo.

## 📋 Índice de Documentos

| # | Documento | Descrição | Status |
|---|-----------|-----------|--------|
| 01 | [VISAO-GERAL.md](./01-VISAO-GERAL.md) | Visão geral do projeto, objetivos e contexto | 📋 Template |
| 02 | [ARQUITETURA.md](./02-ARQUITETURA.md) | Arquitetura técnica e decisões de design | 🏗️ Template |
| 03 | [ESPECIFICACAO.md](./03-ESPECIFICACAO.md) | Especificação funcional detalhada | 📝 Template |
| 04 | [BANCO-DE-DADOS.md](./04-BANCO-DE-DADOS.md) | Schema do banco de dados e relacionamentos | 🗄️ Template |
| 05 | [API.md](./05-API.md) | Documentação de endpoints e contratos | 🔌 Template |
| 06 | [COMPONENTES.md](./06-COMPONENTES.md) | Documentação de componentes React | 🧩 Template |
| 07 | [DEPLOY.md](./07-DEPLOY.md) | Guia de deploy e configuração | 🚀 Template |
| 08 | [TESTES.md](./08-TESTES.md) | Estratégia e documentação de testes | ✅ Template |
| 09 | [HISTORICO.md](./09-HISTORICO.md) | Histórico de mudanças e decisões | 📜 Template |

## 🎯 Como Usar Estes Templates

### 1. **No Início do Projeto (Fase 3: Documentação)**
   - Copie todos os arquivos deste diretório para o projeto específico
   - Use o **PROMPT 2.1** (Análise) para gerar o conteúdo
   - Preencha cada seção com informações do seu projeto
   - Delete seções `[EXEMPLO]` e `[PREENCHER]`

### 2. **Durante o Desenvolvimento**
   - Mantenha os documentos atualizados
   - Documente mudanças importantes em `09-HISTORICO.md`
   - Atualize specs quando features mudarem

### 3. **Antes do Deploy**
   - Revise todos os documentos
   - Garanta que `07-DEPLOY.md` está completo
   - Verifique que APIs estão documentadas

## 📝 Checklist de Documentação

Antes de considerar a Fase 3 completa, verifique:

- [ ] Todos os 9 documentos foram criados
- [ ] Nenhum documento tem placeholders `[PREENCHER]`
- [ ] Especificação cobre todas as features do MVP
- [ ] Schema do banco está completo e consistente
- [ ] Todas as APIs necessárias estão documentadas
- [ ] Componentes principais estão mapeados
- [ ] Guia de deploy está detalhado
- [ ] ADRs (Architecture Decision Records) foram criados
- [ ] Documentos foram revisados por outro dev/IA

## 🤖 Gerando com Claude

Use o seguinte prompt para gerar toda a documentação:

```
Analise o PRD em `planejamento/00-PRE-DESENVOLVIMENTO/prd.md` e o código
do frontend em `.ai/frontend-export.md`.

Gere a documentação técnica completa seguindo os templates em `docs/`.

Para cada documento:
1. Leia o template
2. Preencha com base no PRD e código
3. Seja específico e detalhado
4. Não deixe placeholders
```

## 🔄 Atualização Contínua

Estes documentos devem ser **documentos vivos**:

- **Semanalmente**: Revise e atualize conforme mudanças
- **Por Feature**: Atualize specs e componentes
- **Por Deploy**: Atualize histórico e versão

## 📊 Níveis de Detalhe

### Mínimo Viável (MVP)
- ✅ 01-VISAO-GERAL.md
- ✅ 03-ESPECIFICACAO.md
- ✅ 04-BANCO-DE-DADOS.md
- ✅ 07-DEPLOY.md

### Recomendado
- ✅ Todos acima
- ✅ 02-ARQUITETURA.md
- ✅ 05-API.md
- ✅ 06-COMPONENTES.md

### Completo (Produção)
- ✅ Todos os 9 documentos
- ✅ Revisados e atualizados
- ✅ Sem placeholders

## 🎓 Referências

- [Architecture Decision Records (ADR)](https://adr.github.io/)
- [C4 Model](https://c4model.com/) - Para diagramas de arquitetura
- [OpenAPI Specification](https://swagger.io/specification/) - Para documentação de API
- [Storybook](https://storybook.js.org/) - Para documentação de componentes

---

**Última atualização**: Novembro 2024
**Versão**: 1.0
**Status**: ✅ Templates prontos para uso
