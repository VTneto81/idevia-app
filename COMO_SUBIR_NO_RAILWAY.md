# 🚀 Como colocar no ar em 15 minutos

## Pré-requisitos
- Conta GitHub (gratuita): https://github.com
- Conta Railway (gratuita): https://railway.app

---

## Passo 1 — Criar repositório no GitHub

1. Acesse github.com e faça login
2. Clique em **"New repository"** (botão verde)
3. Nome: `meu-projeto-gestao`
4. Deixe **público** (necessário para Railway gratuito)
5. Clique em **"Create repository"**

---

## Passo 2 — Subir os arquivos

Na página do repositório criado, clique em **"uploading an existing file"**

Arraste estes arquivos:
- `server.js`
- `package.json`
- `railway.toml`
- A pasta `public/` com o `index.html` dentro

Clique em **"Commit changes"**

---

## Passo 3 — Deploy no Railway

1. Acesse railway.app e clique em **"Login with GitHub"**
2. Clique em **"New Project"**
3. Selecione **"Deploy from GitHub repo"**
4. Escolha o repositório `meu-projeto-gestao`
5. Railway detecta automaticamente o Node.js e faz o deploy

---

## Passo 4 — Gerar URL pública

1. No Railway, clique no seu projeto
2. Vá em **"Settings"** → **"Networking"**
3. Clique em **"Generate Domain"**
4. Você receberá uma URL tipo: `meu-projeto.up.railway.app`

✅ Pronto! Acesse pelo celular, tablet ou qualquer dispositivo.

---

## Variáveis de ambiente (opcional)

Se quiser salvar os dados na nuvem (Railway):
1. No Railway → seu projeto → **"Variables"**
2. Adicione: `DB_PATH` = `/app/data.json`

---

## Atualizar o sistema

Quando quiser atualizar:
1. Baixe o novo `index.html` do Claude
2. No GitHub → repositório → pasta `public` → `index.html`
3. Clique em ✏️ editar → cole o novo conteúdo → "Commit changes"
4. Railway faz o redeploy automaticamente em ~2 minutos
