const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// ── Simple file-based storage (works without SQLite on Railway) ──
const fs = require('fs');
const DB_FILE = process.env.DB_PATH || path.join(__dirname, 'data.json');

function readDB() {
  try {
    if (fs.existsSync(DB_FILE)) return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } catch(e) {}
  return {};
}
function writeDB(data) {
  try { fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2)); } catch(e) {}
}

// ── API Routes ──
app.get('/api/data/:key', (req, res) => {
  const db = readDB();
  res.json({ value: db[req.params.key] || null });
});

app.post('/api/data/:key', (req, res) => {
  const db = readDB();
  db[req.params.key] = req.body.value;
  writeDB(db);
  res.json({ ok: true });
});

app.delete('/api/data/:key', (req, res) => {
  const db = readDB();
  delete db[req.params.key];
  writeDB(db);
  res.json({ ok: true });
});

// ── Health check ──
app.get('/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

// ── SPA fallback ──
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
