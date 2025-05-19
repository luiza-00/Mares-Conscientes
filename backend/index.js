const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3001;

// Conexão com o PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:senha1234@localhost:5432/mares_conscientes',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

app.use(cors());
app.use(bodyParser.json());

app.post('/api/sponsor', async (req, res) => {
  const { nome, email, telefone, tipoInteresse, sugestao } = req.body;

  try {
    await pool.query(
      'INSERT INTO sponsors (nome, email, telefone, tipo_interesse, sugestao) VALUES ($1, $2, $3, $4, $5)',
      [nome, email, telefone, tipoInteresse, sugestao || '']
    );
    res.json({ status: 'success' });
  } catch (error) {
    console.error('Erro ao salvar no banco:', error);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('Backend funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
