// src/components/sections/ChallengesSection/ChallengesSection.js
import React from 'react';
import { Card } from 'primereact/card';
import { ScrollPanel } from 'primereact/scrollpanel';

function ChallengesSection() {
  const title = "Desafios em Madre de Deus";
  const subTitle = "Conscientize-se sobre as ameaças aos nossos mares.";

  const challenges = [
    {
      title: "Poluição por Plástico",
      description: "O descarte inadequado de plástico causa danos irreparáveis à vida marinha e aos ecossistemas."
    },
    {
      title: "Esgoto Não Tratado",
      description: "A poluição por esgoto contamina as águas, afetando a saúde humana e a biodiversidade marinha."
    },
    {
      title: "Pesca Predatória",
      description: "Práticas de pesca insustentáveis ameaçam a população de peixes e a saúde dos recifes."
    },
    {
      title: "Desmatamento da Mata Ciliar",
      description: "A remoção da vegetação costeira aumenta a erosão e o assoreamento dos rios e do mar."
    }
    // Adicione mais desafios aqui
  ];

  return (
    <section id="desafios" style={{ padding: '4rem 0', textAlign: 'center', background: 'var(--bg-light)' }}>
      <div className="p-grid p-jc-center">
        <div className="p-col-12 p-md-10">
          <Card title={title} subTitle={subTitle}>
            <ScrollPanel style={{ width: '100%', height: '300px' }}>
              <div className="p-grid p-nogutter">
                {challenges.map((challenge, index) => (
                  <div key={index} className="p-col-12 p-md-6 p-lg-3" style={{ padding: '1em' }}>
                    <Card title={challenge.title} style={{ marginBottom: '1em' }}>
                      <p>{challenge.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </ScrollPanel>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ChallengesSection;