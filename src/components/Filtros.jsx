import React from "react";
import { Autocomplete, TextField, Paper, Grid, Stack,Box } from "@mui/material";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";


export default function Filtros() {

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
    { title: '1 Estrella' },
    { title: '2 Estrellas' },
    { title: '3 Estrellas' },
    { title: '4 Estrellas' },
    { title: '5 Estrellas' },
  ];


  return ( 
      

      <div className="filtros">
        <Grid container direction="row">
          <Grid item xs={12} md={12}>
          <Box sx={{ mt: 1 }}>
                <Autocomplete
                id="categorias"
                //size="small"
                //margin="normal"
                Categorías
                options={topCategorias.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} label="Categorias" color="secondary" />}
                />
            </Box>
          </Grid>
          <Grid  item xs={12} md={12}>
          <Box sx={{ mt: 2 }}>
                <Autocomplete
                id="dificultad"
                //margin="normal"
                //size="small"
                Dificultad
                options={topDificultades.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} label="Dificultad" color="secondary" />}
                />
            </Box>
          </Grid>
          
        </Grid >
      </div>

    
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
    background: linear-gradient(to right, #572e57, #834e6d, #572e57);
    padding: 0.3vw;
    
    input {
      border: none;
      padding: 1.5rem 16rem 1.5rem 16rem;
      font-size: 1.3rem;
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
