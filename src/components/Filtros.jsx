import React from "react";
import { Autocomplete, TextField, Grid,Box } from '@mui/material';


export default function Filtros() {

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


  return ( 
      

      <div className="filtros">
        <Grid container direction="row">
          <Grid item xs={12} md={12}>
          <Box sx={{ mt: 1 }}>
                <Autocomplete
                id="categorias"
                //size="small"
                //margin="normal"
                //Categorías
                options={topCategorias.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} label="Categoria" color="secondary"/>}
                />
            </Box>
          </Grid>
          <Grid  item xs={12} md={12}>
          <Box sx={{ mt: 2 }}>
                <Autocomplete
                id="dificultad"
                //margin="normal"
                //size="small"
                //Dificultad
                options={topDificultades.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} label="Dificultad"  color="secondary"/>}
                />
            </Box>
          </Grid>
          
        </Grid >
      </div>

    
  );
}

