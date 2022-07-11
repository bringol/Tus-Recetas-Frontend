import React, {useState,useEffect} from "react";
import styled from "styled-components";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import { NavLink } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Paginacion from "./Paginacion";

import{obtenerRecetas} from "../controllers/recetaController";

export default function Recetas(){

  const [listaRecetas, setListaRecetas] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState('');

  function sumar() {
    setValues({
      ...values,
      num: values.num + 1,
    });
  }


  function restar() {
    setValues({
      ...values,
      num: values.num > 0 ? values.num - 1 : 0,
      missingAmount: values.num - 1 <= 0 ? true : false,
    });
  }

  const [values, setValues] = useState({
    num: 15,
    missingAmount: false,
  });

  useEffect(() => {
    async function componentDidMount() {
      let rdo = await obtenerRecetas();
      console.log("numberOfPagesANTES", numberOfPages);
      setListaRecetas(rdo);
      console.log(rdo);
      setNumberOfPages(rdo.lenght); //
      console.log("numberOfPagesDESPUES", numberOfPages);
      console.log(listaRecetas);
    }
    componentDidMount();
  }, [page]);

  return (
    <Section id="recetas">
      <div className="title">
        <h1>
          <span>Recetas</span>
        </h1>
      </div>
      <div className="products">
        {listaRecetas.map((receta) => {
          return (
            <div className="product">
              <div className="image">
                <img src={receta.nombreImagen} alt="" />
              </div>
              <h2>{receta.nombre}</h2>
              <button>
              <NavLink to='/Login/Receta' style={{ textDecoration: 'none' , color: 'white' }}>Ver más</NavLink>
              </button>
            </div>
          );
        })}
      </div>

      <Paginacion setPage={setPage} pageNumber={numberOfPages}/>

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
      paginacion{

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