import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  Container,
  Box,
} from '@mui/material';
import { createClient } from '@supabase/supabase-js';

// 🔒 SUBSTITUA PELOS SEUS DADOS:
const supabase = createClient(
  'https://grfldemksgslvbresrhg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdyZmxkZW1rc2dzbHZicmVzcmhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MjM3MDgsImV4cCI6MjA2MzE5OTcwOH0.pXsio5eKJ7shRhOLa3lCkxopU2zf1Jfr9Dd_XVmWP0U'
);

function SponsorSection() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [tipoInteresse, setTipoInteresse] = useState('patrocinador');
  const [sugestao, setSugestao] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dados = {
      nome,
      email,
      telefone,
      tipo_interesse: tipoInteresse,
      sugestao: tipoInteresse === 'sugestao' ? sugestao : '',
    };

    const { error } = await supabase.from('sponsors').insert([dados]);

    if (error) {
      console.error('Erro Supabase:', error);
      alert('Erro ao enviar. Verifique os campos ou tente novamente.');
    } else {
      alert('Formulário enviado com sucesso!');
      setNome('');
      setEmail('');
      setTelefone('');
      setTipoInteresse('patrocinador');
      setSugestao('');
    }
  };

  return (
    <Container id="patrocinador" data-aos="fade-up" maxWidth="sm" sx={{ height: '150vh' }}>
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography gutterBottom textAlign="center">
          <h1 style={{ zIndex: 2, fontSize: '3rem', textAlign: 'center', color: '#B65B36', marginTop: '100px' }}>
            FAÇA PARTE DA NOSSA EQUIPE!
          </h1>
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            margin="normal"
          />
          <FormControl fullWidth margin="normal" required style={{ alignItems: 'center' }}>
            <Typography sx={{ mb: 1 }}>Como você gostaria de nos apoiar?</Typography>
            <RadioGroup value={tipoInteresse} onChange={(e) => setTipoInteresse(e.target.value)}>
              <FormControlLabel value="patrocinador" control={<Radio />} label="Quero ser um patrocinador" />
              <FormControlLabel value="sugestao" control={<Radio />} label="Quero dar uma sugestão" />
            </RadioGroup>
          </FormControl>
          {tipoInteresse === 'sugestao' && (
            <TextField
              fullWidth
              label="Sua sugestão"
              multiline
              rows={4}
              value={sugestao}
              onChange={(e) => setSugestao(e.target.value)}
              required
              sx={{ mb: 0, mt: 4 }}
            />
          )}
          <Box textAlign="center" mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default SponsorSection;
