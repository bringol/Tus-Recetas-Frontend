import React, {useState,useEffect} from "react";
import styled from "styled-components";
// import product1 from "../assets/product1.jpg";
// import product2 from "../assets/product2.jpg";
// import product3 from "../assets/product3.jpg";
// import product4 from "../assets/product4.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import { NavLink } from 'react-router-dom';
import data2 from "../data/recetas.json";

import{obtenerRecetas} from "../controllers/recetaController"


export default function Products() {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const [listado, setListado] = useState([]);

  const loadData=async ()=>{
    const data=await obtenerRecetas()
    //const data=await response.json()
    setListado(data)
    console.log(listado)
  }

  useEffect(()=>{
    loadData()
  },[])

  
  // useEffect(()=>{
  //      await getRecetas()
  //      .then(response=>response.json)
  //      .then(data=>)
  //    },[])

  
  // useEffect(()=>{
  //   async function componentDidMount() 
  //   {
  //     console.log("carga componente");
  //     //traer recetas
  //     let rdo = await obtenerRecetas();
  //     setListado(rdo); 
  //     // console.log(listado)
  //     // const getListado = async function (){
  // //   console.log("Voy a buscar recetas")
  // //   console.log("Listado de recetas antes",listado)
  // //   let rdo = await obtenerRecetas();
  // //   setListado(rdo);
    
  // //   console.log("Listado de recetas despues",listado)
  // //   console.log("rdo Recetas",rdo)
  // // }
  // // getListado()
  //   }
  //   componentDidMount();
  // },[]);


  // const getListado = async function (){
  //   console.log("Voy a buscar recetas")
  //   console.log("Listado de recetas antes",listado)
  //   let rdo = await obtenerRecetas();
  //   setListado(rdo);
    
  //   console.log("Listado de recetas despues",listado)
  //   console.log("rdo Recetas",rdo)
  // }
  // getListado()


  return (
    <Section id="recetas">
      <div className="title">
        <h1>
          <span>Recetas</span>
        </h1>
      </div>
      <div className="products">
        {data2.map((receta) => {
          return (
            <div className="product">
              <div className="image">
                <img src={receta.img} alt="" />
              </div>
              <h2>{receta.titulo}</h2>
              <button>
              <NavLink to='/Login/Receta' style={{ textDecoration: 'none' , color: 'white' }}>Ver más</NavLink>
              </button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #44214e;
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
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: linear-gradient(to right, #572e57, #834e6d, #572e57);
        text-transform: uppercase;
        &:hover {
          background: linear-gradient(to right, #572e57, #834e6d, #572e57);
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;