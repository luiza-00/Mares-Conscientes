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
  CircularProgress,
} from '@mui/material';

function SponsorSection() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [tipoInteresse, setTipoInteresse] = useState('patrocinador');
  const [sugestao, setSugestao] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = {
      nome,
      email,
      telefone,
      tipoInteresse,
      sugestao: tipoInteresse === 'sugestao' ? sugestao : '',
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sponsor`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === 'success') {
        alert('Formulário enviado com sucesso!');
        setNome('');
        setEmail('');
        setTelefone('');
        setTipoInteresse('patrocinador');
        setSugestao('');
      } else {
        alert('Erro ao enviar o formulário.');
        console.error('Erro do servidor:', result);
      }
    } catch (error) {
      alert('Erro de rede ao enviar os dados.');
      console.error('Erro de rede:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTipoInteresseChange = (event) => {
    setTipoInteresse(event.target.value);
    setSugestao('');
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
          <FormControl style={{ alignItems: 'center' }} fullWidth margin="normal" required>
            <Typography sx={{ mb: 1 }}>Como você gostaria de nos apoiar?</Typography>
            <RadioGroup value={tipoInteresse} onChange={handleTipoInteresseChange}>
              <FormControlLabel
                value="patrocinador"
                control={<Radio />}
                label="Quero ser um patrocinador"
              />
              <FormControlLabel
                value="sugestao"
                control={<Radio />}
                label="Quero dar uma sugestão"
              />
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
            <Button type="submit" variant="contained" color="primary" disabled={loading}>
              {loading ? <CircularProgress size={24} /> : 'Enviar'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default SponsorSection;
