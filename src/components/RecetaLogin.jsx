<<<<<<< Updated upstream
<<<<<<< Updated upstream
import React, { useState } from "react";
=======
import React, { useState, useEffect, useRef } from "react";
>>>>>>> Stashed changes
=======
import React, { useState } from "react";
>>>>>>> Stashed changes
import styled from "styled-components";
import product1 from "../assets/product1.jpg";
import { Grid } from "@mui/material";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { AiFillStar } from "react-icons/ai";
=======
import { useParams } from 'react-router-dom';
import { obtenerRecetaIDUSR } from "../controllers/recetaController";
import Rating from '@mui/material/Rating';
import CalificionRating from "./CalificacionRating"
import { Navigate } from "react-router-dom"
>>>>>>> Stashed changes


export default function RecetaLogin() {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

<<<<<<< Updated upstream
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
=======
  const { id } = useParams();
  const [cat, setCat] = useState('');
  const [dificultad, setDificultad] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [procedimiento, setProcedimiento] = useState('');
  const [calificacionProm, setcalificacionProm] = useState('');
  const [calificacionTotal, setcalificacionTotal] = useState('');
  const [usrTotales, setusrTotales] = useState('');
  const [imagen, setImagen] = useState('');
  const [autor, setAutor] = useState('');
  const [nombre, setNombre] = useState('');
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  const [value, setValue] = React.useState(calificacionProm);


  useEffect(() => {
    async function componentDidMount() {
      let rdo = await obtenerRecetaIDUSR(id);
      // console.log("receta",rdo)
      if (rdo.length > 0) {
        setCat(rdo[0].categoria);
        setImagen(rdo[0].nombreImagen);
        setDificultad(rdo[0].dificultad);
        setIngredientes(rdo[0].ingredientes);
        setProcedimiento(rdo[0].procedimiento);
        setcalificacionProm(rdo[0].calificacionPromedio);
        setcalificacionTotal(rdo[0].calificacionTotal);
        setusrTotales(rdo[0].usuariosTotales);
        setAutor(rdo[0].autor);
        setNombre(rdo[0].nombre);
        executeScroll()
      }
    }
    componentDidMount();
  }, [id]);


console.log(value)


  return (

    <Section id="recetas">

      <div className="container" >
        <div className="title" ref={myRef}>
          <h1>
            <span>{nombre}</span>
          </h1>
        </div>

        <Grid container direction="row" justifyContent="center">
>>>>>>> Stashed changes

          <div className="recetas">

<<<<<<< Updated upstream
=======
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

          <div className="recetas">

>>>>>>> Stashed changes
            <Grid item xs={12} md={6}>
              <div className="receta">
                <div className="image">
                  <img src={product1} alt="" />
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

            <Grid item xs={12} md={6}>
              <div className="receta">
                <div className="image">
                  {/* Imagen */}
                  <img src={imagen} alt="" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <h3>Autor: {autor}</h3>
              <h3>Dificultad</h3>
              {/* <a>{dificultad}</a> */}
              <CalificionRating calificacion={parseInt(dificultad)} />

              <h3>Calificación </h3>
              <Rating
                //value={parseInt(calificacionProm)}
                value={value}
                precision={1} sx={{ fontSize: 30 }}
                onChange={(event, newValue) => { setValue(newValue) }} />
                
                               
              <>
              <br></br>
              {usrTotales} votos </>
              



              <h3>Categoría</h3>
              <p>{cat}</p>

              <h3>Ingredientes</h3>
              {/* <p>PLACEHOLDER</p> */}
              <p>{ingredientes}</p>

              <h3>Descripción</h3>
              <p>
                {procedimiento}
              </p>
              <br />

>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
