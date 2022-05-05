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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            aspernatur itaque, eius quia voluptas numquam!
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
      filter: brightness(60%);
    }
  }
    .info {
      position: absolute;
      top: 40%;
      right: 10%;
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
        width: 60%;
        text-align: end;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      .sale {
        display: none;
      }
      .info {
        top: 25%;
        h2 {
          font-size: 2rem;
        }
        em {
          width: 90%;
        }
      }
    }
  }
`;
