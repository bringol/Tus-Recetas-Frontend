import React, { useState,useEffect,Suspense } from "react";
import styled from "styled-components";
import product1 from "../assets/product1.jpg";
import { Grid } from "@mui/material";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import { AiFillStar } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import{obtenerRecetaID} from "../controllers/recetaController";
import Rating from '@mui/material/Rating';
import CalificionRating from "./CalificacionRating"


export default function Receta3() {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const {id} = useParams()
  console.log("El ID: ",id)
  console.log("Localstorage",JSON.parse(localStorage.getItem('recetaID')))
  

  const [resp, setResp] = useState(JSON.parse(localStorage.getItem('recetaID')));
  

const loadData=async ()=>{
    const rdo=await obtenerRecetaID(id)
    //const data=await response.json()
    
    //setResp(rdo)
    console.log("rdo",rdo)
    console.log("Localstorage",JSON.parse(localStorage.getItem('recetaID')))
    //setResp(localStorage.getItem('recetaID'))
    console.log("DESP set lista receta",resp)
    console.log("elemento lista receta",resp[0]._id)
    //var str=resp.replace('\\','')
    //console.log("resultado", str)
  }
  useEffect(()=>{
    //var str=resp.replace('\\','')
    console.log("resultado")
    loadData()
  },[id])

return (

  <Section id="recetas">

  <div className="container">
    <div className="title">
      <h1>
        <span>{resp[0].nombre}</span>
      </h1>
    </div>

    <Grid container direction="row">

      <div className="recetas">


        <Grid item xs={12} md={6}>
          <div className="receta">
            <div className="image">
              <img src={resp[0].nombreImagen} alt="" />

            </div>          
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <h3>Dificultad</h3>
          {/* <a>{receta[0].dificultad}</a> */}
          <CalificionRating calificacion={resp[0].dificultad}/>

          <h3>Categoria</h3>
          <a>Carnes</a>
          <h3>Ingredientes</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi tempore recusandae
            ab officiis rem voluptate nam possimus, dolore iste porro neque nisi, sint suscipit esse
            quae vero eligendi reiciendis cum.</p>
          {/* <ul className="links">
              <a>Carne picada</a>
              <br/>
              <a>Cebolla</a>
              <br/>
              <a>Sal</a>
              <br/>
              <a>Pimienta</a>
              <br/>
              <a>Nuez Moscada</a>
          </ul> */}
          <h3>Descripcion</h3>
          <p>
            {resp[0].procedimiento}
          </p>
          <br/>
          <h3>Calificacion</h3>
          <Rating defaultValue={resp[0].calificacionPromedio} precision={1} readOnly  sx={{ fontSize: 30 }}  />
        </Grid>
      </div>
    </Grid>
  </div>
</Section>
//  </Suspense>
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
