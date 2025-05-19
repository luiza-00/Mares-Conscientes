// src/components/sections/AboutUsSection/AboutUsSection.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUsSection() {
  const subTitle = "Nossa Missão e História";
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="sobre-nos" style={{ padding: '4rem 0', textAlign: 'center' }}>
      <div data-aos="fade-up">
        <h1 style={{fontSize: '4rem', padding: '2rem 0', textAlign: 'center', color:'#B65B36'}}>BEM VINDO A BORDO!</h1>
      </div>

      <div style={{ position: 'relative', width: 'fit-content', marginTop:'200px', marginLeft:'auto', marginRight:'auto'}}>
        {/* Imagem do Retângulo (fundo) */}          
        <img
          style={{ width: '60 vh', height: '500 vh'}}
          data-aos="fade-up"
          alt="Retângulo"
          src="/images/retangulo.png"
          onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
        />
        {/* Imagem da Cidade (sobrepondo) */}
        <img
          style={{
            position: 'absolute',
            bottom: '25%', // Ajuste este valor para controlar o quanto a imagem da cidade sobe sobre o retângulo
            left: '70%',    // Centraliza horizontalmente
            transform: 'translateX(-50%)', // Ajuste fino para centralização
            width: '80vh',   // Ajuste a largura da imagem da cidade em relação ao contêiner
            height: 'auto',
            zIndex: 1      // Garante que a imagem da cidade fique na frente

          }}
          data-aos="fade-up"
          alt="Cidade"
          src="/images/primeiro-p.png"
          onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
        />
        {/* Imagem da Cidade (sobrepondo) */}
        <img
          style={{
            position: 'absolute',
            bottom: '-70%', // Ajuste este valor para controlar o quanto a imagem da cidade sobe sobre o retângulo
            left: '30%',    // Centraliza horizontalmente
            transform: 'translateX(-50%)', // Ajuste fino para centralização
            width: 'auto',   // Ajuste a largura da imagem da cidade em relação ao contêiner
            height: 'auto',
            zIndex: 2       // Garante que a imagem da cidade fique na frente

          }}
          alt="Cidade"
          data-aos="fade-up"
          src="/images/cidade0.png"
          onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
        />
        <img
          style={{
            position: 'absolute',
            bottom: '-65%', // Ajuste este valor para controlar o quanto a imagem da cidade sobe sobre o retângulo
            left: '72%',    // Centraliza horizontalmente
            transform: 'translateX(-50%)', // Ajuste fino para centralização
            width: '100vh',   // Ajuste a largura da imagem da cidade em relação ao contêiner
            height: 'auto',
            zIndex: 3      // Garante que a imagem da cidade fique na frente

          }}
          alt="Titulo"
          data-aos='fade-up'
          src="/images/tit.png"
          onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
        />
      </div>

      {/* Card "Sobre Nós" abaixo das imagens */}
      <div className="p-grid p-jc-center" style={{ marginTop: '20zrem' }}>
        <div className="p-col-12 p-md-8">
          <img
            style={{
              marginTop: '300px',
              position: 'relative',
              marginBottom:'200px',
              width: '80%',   // Ajuste a largura da imagem da cidade em relação ao contêiner
              height: 'auto',
            }}
            alt="Titulo"
            data-aos="fade-up"
            src="/images/paragrafo2.png"
            onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
          />
          </div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <img
            style={{
              // Removi position: 'relative' pois não é estritamente necessário para este alinhamento
              position: 'relative',
              bottom: '-320%', // Ajuste este valor para controlar o quanto a imagem da cidade sobe sobre o retângulo
              height: 'auto',
              zIndex:1,
              width:'100%',
              left:'-5%'
            }}
            alt="Retangulo 2"
            data-aos="fade-up"
            src="/images/retangulo2.png"
            onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
          />
          <img
            style={{
              position: 'absolute',
              bottom: '-342%', // Ajuste este valor para controlar o quanto a imagem da cidade sobe sobre o retângulo
              left: '25%',    // Centraliza horizontalmente
              transform: 'translateX(-50%)', // Ajuste fino para centralização
              height: '50vh',
              zIndex: 2      // Garante que a imagem da cidade fique na frente
            }}
            alt="Cidade 1"
            data-aos="fade-up"
            src="/images/cidade1.png"
            onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
          />
          <img
            style={{
              position: 'absolute',
              height: '60vh',
              bottom: '-345%', // Ajuste este valor para controlar o quanto a imagem da cidade sobe sobre o retângulo
              left: '37%',// Empurra a imagem para a esquerda
              zIndex:3
            }}
            alt="Cidade 2"
            data-aos="fade-up"
            src="/images/cidade2.png"
            onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
          />
        </div>

      <div className="p-grid p-jc-center" style={{ marginTop: '100px', minHeight: '100vh' }}>
      <div>
        <div
          className="p-col-12 p-md-6 p-d-flex"
          style={{
            display: 'flex',          // Habilita o Flexbox
            justifyContent: 'space-evenly', // Distribui o espaço entre os itens
            alignItems: 'center',
          }}
        >
        <img
          style={{
            maxHeight: '100vh',
            maxWidth: '48%', // Ajustado para ocupar aproximadamente metade da largura
          }}
          alt="Cidade 1"
          data-aos="fade-up"
          src="/images/paragrafo3.png"
          onError={(e) =>
            (e.target.src =
              'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
          }
        />
        <img
          style={{
            maxHeight: '140vh',
            maxWidth: '48%',  // Ajustado para ocupar aproximadamente metade da largura
            zIndex:2,
          }}
          alt="Celular"
          data-aos="fade-up"
          src="/images/celular.png"
          onError={(e) =>
            (e.target.src =
              'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
          }
        />
      </div>
      <div>
        <img
            style={{
              width: '100%',
              zIndex:1
            }}
            alt="Celular"
            data-aos="fade-up"
            src="/images/retangulo4.png"
            onError={(e) =>
              (e.target.src =
                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
            }
          />
      </div>
      </div>
    </div>

    <div className="p-grid" 
      style={{ 
        marginTop: '100px', 
        minHeight: '315vh', 
        position: 'relative', 
      }}>
      
      <h1 data-aos="fade-up" style={{zIndex:2, fontSize: '4rem', textAlign: 'center', color:'#B65B36', marginTop: '100px'}}>SOBRE NÓS</h1>

      <img
        style={{
          position: 'relative',
          width: '100%',
          zIndex: 1,
          marginBottom: '20px',
          marginTop: '50px', 
        }}
        alt="Group 19"
        data-aos="fade-in"
        src="/images/Group 21.png"
        onError={(e) =>
          (e.target.src =
            'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
        }
      />
      <img
        style={{
          position: 'absolute',
          left: '30px',
          top: '200px',
          width: 'auto',
          height: 'auto',
          maxHeight: '80vh',
          zIndex: 2,
          marginBottom: '20px'
        }}
        alt="Group 19"
        data-aos="fade-in"
        src="/images/Group 19.png"
        onError={(e) =>
          (e.target.src =
            'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
        }
      />
      <img
        style={{
          position: 'absolute',
          right: '30px',
          top: '500px',
          width: 'auto',
          height: 'auto',
          maxHeight: '100vh',
          zIndex: 2,
        }}
        alt="Group 18"
        data-aos="fade-in"
        src="/images/Group 18.png"
        onError={(e) =>
          (e.target.src =
            'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
        }
      />
      <img
        style={{
          position: 'absolute',
          left: '30px',
          top: '900px',
          width: 'auto',
          height: 'auto',
          maxHeight: '80vh',
          zIndex: 2,
        }}
        alt="Group 17"
        data-aos="fade-in"
        src="/images/Group 17.png"
        onError={(e) =>
          (e.target.src =
            'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
        }
      />

      <img
        style={{
          position: 'absolute',
          right: '30px',
          top: '1200px',
          width: 'auto',
          height: 'auto',
          maxHeight: '100vh',
          zIndex: 2,
          marginBottom: '20px'
        }}
        alt="Group 16"
        data-aos="fade-in"
        src="/images/Group 20.png"
        onError={(e) =>
          (e.target.src =
            'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
        }
      />
      <img
        style={{
          position: 'absolute',
          left: '30px',
          top: '1500px',
          width: 'auto',
          height: 'auto',
          maxHeight: '100vh',
          zIndex: 2,
        }}
        alt="Group 16"
        data-aos="fade-in"
        src="/images/Group 16.png"
        onError={(e) =>
          (e.target.src =
            'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
        }
      />
    </div>
    </section>
    
  );
}

export default AboutUsSection;