import React, { useState, useEffect } from "react";
import { Autocomplete, TextField, Paper, Grid, Stack, flex } from "@mui/material";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";
import { buscarReceta } from "../controllers/recetaController";


export default function Search() {

  const paperStyle = { padding: 20, height: '32vh', width: 280, margin: '20px auto' }

  const topCategorias = [
    { title: 'Postres' },
    { title: 'Carnes' },
    { title: 'Frituras' },
    { title: 'Pasteleria' },
    { title: 'Guisos y sopas' },
    { title: 'Arroces y pastas' },
    { title: 'Pizzas' },
    { title: 'Panes' },
    { title: 'Vegetarianas' },
  ];

  const topDificultades = [
    { title: '1' },
    { title: '2' },
    { title: '3' },
    { title: '4' },
    { title: '5' },
  ];

  /*const topIngredientes = [
    { title: 'Verduras' },
    { title: 'Carne' },
    { title: 'Pescado' },
    { title: 'Pollo' },
    { title: 'Frutas' },
  ];*/

  const topCalificaciones = [
    { title: '1 estrella' },
    { title: '2 estrellas' },
    { title: '3 estrellas' },
    { title: '4 estrellas' },
    { title: '5 estrellas' },
  ];

  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [dificultad, setDificultad] = useState('');
  const [ingrediente, setIngrediente] = useState('');
  const [calificacion, setCalificacion] = useState('');
  const [listado, setListado] = useState([])

  /*useEffect(() => {
    async function componentDidMount() {
      let rdo = await buscarReceta(nombre, categoria, dificultad, ingrediente, calificacion);
      setListado(rdo.data.docs);
    }
    componentDidMount();
  });*/

  const setearNombre = e => {
    const nombre = e.target.value;
    console.log("nombre seteado", nombre);
    setNombre(nombre);
  };

  const setearIngrediente = e => {
    const ingrediente = e.target.value;
    console.log("categoria seteada", ingrediente);
    setCategoria(ingrediente);
  };

  /*const buscarReceta = async function () {
    let respuesta = await buscarReceta(nombre, categoria, dificultad, ingrediente, calificacion);

    if (respuesta.rdo === 0) {
      console.log("recetas:", respuesta)
      setListado(respuesta.data.docs)
    }
    if (respuesta.rdo === 1) {
      alert(respuesta.mensaje)
    }
  }*/

  return (
    <Section id="busqueda">
      <div className="title">
        <h1>
          <span>BUSCAR RECETAS</span>
        </h1>
      </div>

      <div className="filtros">
        <Grid container direction="row">
          <Grid item xs={12} md={2}>
            <TextField label="Nombre" color="secondary" size="small" fullWidth onChange={setearNombre} />
          </Grid>
          <Grid item xs={12} md={2}>
            <Autocomplete
              onChange={(event, categoria) => console.log(categoria)}
              id="categoria"
              size="small"
              Categoría
              options={topCategorias.map((option) => option.title)}
              renderInput={(params) => <TextField {...params} label="Categoria" color="secondary" />}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Autocomplete
              onChange={(event, dificultad) => console.log(dificultad)}
              id="dificultad"
              size="small"
              Dificultad
              options={topDificultades.map((option) => option.title)}
              renderInput={(params) => <TextField {...params} label="Dificultad" color="secondary" />}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField label="Ingrediente" color="secondary" size="small" fullWidth onChange={setearIngrediente} />
          </Grid>
          <Grid item xs={12} md={2}>
            <Autocomplete
              onChange={(event, calificacion) => console.log(calificacion)}
              id="calificacion"
              size="small"
              border-color="#572e57"
              Calificación
              options={topCalificaciones.map((option) => option.title)}
              renderInput={(params) => <TextField {...params} label="Calificación" color="secondary" />}
            />
          </Grid>
        </Grid >

      </div>
      <div className="container">
        <button
          type="button"
          onClick={buscarReceta}>
          Aplicar Filtros
        </button>
      </div>
    </Section >
  );
}

const Section = styled.section`
  border: 0.01rem solid black;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${TitleStyles};
  .container {
    align-item: center;
    text-align: center;
    border-radius: 0.8rem;
    background: linear-gradient(to right, #572e57, #834e6d, #572e57);
    padding: 0.3vw;
    input {
      border: none;
      padding: 1.5rem 16rem 1.5rem 16rem;
      font-size: 1.3 rem;
      font-size: large;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 1rem 5rem;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        letter-spacing: 0.6rem;
        padding: 1rem .7rem;
      }
    }
  }

  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      padding: 0.8rem;
      border-radius: 0.5rem;
      input {
        width: 50vw;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      button {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem;
        &:hover {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;