import React, { useState } from "react";
import styled from "styled-components";
import product1 from "../assets/product1.jpg";
import { Grid } from "@mui/material";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import { AiFillStar } from "react-icons/ai";


export default function RecetaLogin() {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (

    <Section id="recetas">

      <div className="container">
        <div className="title">
          <h1>
            <span>Hamburguesas</span>
          </h1>
        </div>

        <Grid container direction="row">

          <div className="recetas">


            <Grid item xs={12} md={6}>
              <div className="receta">
                <div className="image">
                  <img src={product1} alt="" />
                </div>
                <div className="raiting">
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    return (
                      <label>
                        <input
                          type="radio"
                          name="rating"
                          value={ratingValue}
                          onClick={() => setRating(ratingValue)}

                        />
                        <AiFillStar className="star"
                          color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                          size={30}
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(null)}
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <h3>Dificultad</h3>
              <a>3</a>
              <h3>Categoria</h3>
              <a>Carnes</a>
              <h3>Ingredientes</h3>
              <ul className="links">
                  <a>Carne picada</a>
                  <br/>
                  <a>Cebolla</a>
                  <br/>
                  <a>Sal</a>
                  <br/>
                  <a>Pimienta</a>
                  <br/>
                  <a>Nuez Moscada</a>
              </ul>
              <h3>Descripcion</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempore recusandae
                ab officiis rem voluptate nam possimus, dolore iste porro neque nisi, sint suscipit esse
                quae vero eligendi reiciendis cum.
              </p>
            </Grid>
          </div>
        </Grid>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5vw;
  background: linear-gradient(to right, #572e57, #834e6d, #572e57);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;
    ${TitleStyles};
    .title {
      position: center;
      top: -1rem;
      left: 25%;
      padding: 0 2rem;
      background-color: white;
    }
    .recetas {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6vw;
      margin-top: 3vw;
      .receta {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        p {
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
          span {
            color: #fc4958;
          }
        }
        ${imageZoomEffect};
        .image {
          max-height: 20rem;
          overflow: hidden;
          border-radius: 1rem;
          img {
            height: 20rem;
            width: 15rem;
            object-fit: cover;
            align: left;
          }
        }
      }
      .links {
        li {
          a {
            text-decoration: none;
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .recetas {
        flex-direction: column;
      }
    }
  }
`;
