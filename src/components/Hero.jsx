import React from "react";
import styled from "styled-components";
import portfolio from "../assets/portfolio.jpg";


export default function Hero() {

  return (
    <Section id="nosotros">
      <div className="background">
        <img src={portfolio} alt="Background Image" />
      </div>
      <div className="content">
        <div className="info">
          <h2>¿Quiénes Somos?</h2>
          <em>
            Tus Recetas es el sitio web ideal para aprender a preparar cientos de recetas de comida casera.
            Con explicaciones detalladas, fotos paso a paso y los mejores trucos, estos platos siempre saldrán espectaculares.
            Animate a cocinar todos los días para llevar una alimentación más sana y equilibrada y para sorprender a tus personas
            favoritas en los momentos más especiales.
            ¡Que la dificultad no sea una excusa! ¡A cocinar!
          </em>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 60vh;
  width: 100vw;
  position: relative;
  .background {
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(40%);
    }
  }
    .info {
      position: absolute;
      top: 30%;
      right: 5%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      h2 {
        color: white;
        font-size: 4rem;
        letter-spacing: 0.5rem;
      }
      em {
        color: #ffffff;
        font-weight: bold;
        width: 80%;
        text-align: justify;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
    }
  }
  
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      .sale {
        display: none;
      }
      .info {
        top: 5%;
        h2 {
          font-size: 2rem;
          text-align: center;
        }
        em {
          line-height: 1.3rem;
          width: 95%;
        }
      }
    }
  }
`;