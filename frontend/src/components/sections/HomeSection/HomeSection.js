// src/components/sections/HeroSection/HeroSection.js
import React from 'react';

function HomeSection() {
  return (
    <section
      id="home"
      data-aos="fade-in"
      style={{
        backgroundImage: 'url(/images/capa.png)', // Caminho da imagem
        backgroundSize: '100%', // Faz a imagem cobrir toda a área
        backgroundPosition: 'center', // Centraliza a imagem
        minHeight: '100vh', // Garante que tenha pelo menos a altura da viewport
        paddingTop: '60px', // Adicione padding no topo para o conteúdo não ficar escondido atrás da navbar (ajuste este valor!)
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white', // Cor do texto sobre a imagem
        position: 'relative', // Necessário para posicionar outros elementos dentro
        overflow: 'hidden' // Evita barras de rolagem se a imagem for muito grande
      }}
    >
      {/* Overlay para escurecer um pouco a imagem e melhorar a leitura do texto */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)' // Ajuste a opacidade aqui
        }}
      ></div>

      {/* Conteúdo da HeroSection sobre o overlay */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <img style={{ height:'25vh', width:'100vh'}} alt="Card" src="/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/>
        <p style={{ fontSize: '1.5rem' }}>A esperança navega em águas conscientes!</p>
        {/* Você pode adicionar um botão ou outros elementos aqui */}
      </div>
    </section>
  );
}

export default HomeSection;