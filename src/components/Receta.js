import React, { useState,useEffect,Suspense } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import { useParams } from 'react-router-dom';
import{obtenerRecetaID} from "../controllers/recetaController";
import Rating from '@mui/material/Rating';
import CalificionRating from "./CalificacionRating"


export default function Receta() {

    const {id} = useParams();
    const [cat, setCat] = useState('');
    const [dificultad, setDificultad] = useState('');
    //const [ingredientes, setIngredientes] = useState('');
    const [procedimiento, setProcedimiento] = useState('');
    const [calificacionProm, setcalificacionProm] = useState('');
    const [calificacionTotal, setcalificacionTotal] = useState('');
    const [usrTotales, setusrTotales] = useState('');
    //const [imagen, setImagen] = useState('');
    const [autor,setAutor] = useState('') ;
    const [nombre, setNombre] = useState('');
    
    
    
    

//RECORDAR QUE NO TODAS LAS RECETAS TIENEN TODOS LOS DATOS
//HACER LA CORRECCION EN EL BACKEND PARA EL TEST COMPLETO
    useEffect(() => {
        async function componentDidMount() {
            let rdo = await obtenerRecetaID(id);
            console.log("dentro de rdo",rdo)
            if (rdo.length > 0) {
                setCat(rdo[0].categoria);
                //setImagen(rdo[0].nombreImagen);
                setDificultad(rdo[0].dificultad);
                //setIngredientes(rdo[0].ingredientes);
                setProcedimiento(rdo[0].procedimiento);
                setcalificacionProm(rdo[0].calificacionPromedio);
                setcalificacionTotal(rdo[0].calificacionTotal);
                setusrTotales(rdo[0].usuariosTotales);
                setAutor(rdo[0].autor);
                setNombre(rdo[0].nombre);
            }
        }
        componentDidMount();
    }, [id]);
 
   


return (

      <Section id="recetas">

        <div className="container">
          <div className="title">
            <h1>
              <span>{nombre}</span>
            </h1>
          </div>

          <Grid container direction="row">

            <div className="recetas">


              <Grid item xs={12} md={6}>
                <div className="receta">
                  <div className="image">
                    PLACEHOLDER
                    {/* <img src={imagen} alt="" /> */}

                  </div>          
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <h3>Dificultad</h3>
                {/* <a>{dificultad}</a> */}
                <CalificionRating calificacion={parseInt(dificultad)}/>

                <h3>Calificación</h3>
                <Rating value={parseInt(calificacionProm)} precision={1} readOnly  sx={{ fontSize: 30 }}  />

                <h3>Categoría</h3>
                <a>{cat}</a>

                <h3>Ingredientes</h3>
                <p>PLACEHOLDER</p>
                {/* <p>{ingredientes}</p> */}
    
                <h3>Descripción</h3>
                <p>
                  {procedimiento}
                </p>
                <br/>
                
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
