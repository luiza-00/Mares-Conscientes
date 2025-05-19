// pages/api/sponsor.js

import { createClient } from '@supabase/supabase-js';

// Usar variáveis de ambiente sem prefixo para backend
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, email, telefone, tipoInteresse, sugestao } = req.body;

    const { data, error } = await supabase.from('sponsors').insert([
      {
        nome,
        email,
        telefone,
        tipo_interesse: tipoInteresse,
        sugestao: tipoInteresse === 'sugestao' ? sugestao : null,
      },
    ]);

    if (error) {
      console.error('Erro ao inserir no Supabase:', error);
      return res.status(500).json({ status: 'error', message: 'Erro ao salvar os dados.' });
    }

    return res.status(200).json({ status: 'success', data });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
