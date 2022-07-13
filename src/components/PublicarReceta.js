import React, {useState} from 'react';
import { Avatar, Button, CssBaseline, TextField, Container, Box,Autocomplete, Grid } from '@mui/material';
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { makeStyles } from '@material-ui/core/styles'; //sin esto no funciona por más que lo actualice, probar de sacar el resto para la v5
import { NavLink } from 'react-router-dom';
import SubirFoto from './SubirFoto';

//validacion
import { useFormik } from 'formik';
import * as yup from "yup"; //libreria de esquemas de validacion
import Exito from "./Exito"
//import { fieldToTextField } from 'formik-material-ui';
import { Formik, Field, FieldProps } from "formik";
import "semantic-ui-css/semantic.min.css";
import { Dropdown } from "semantic-ui-react";

import {crearReceta} from "../controllers/recetaController"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: "10px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#834e6d",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  botón: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: "120px",
    backgroundColor: "#834e6d",
  },
}));

const validationSchema=yup.object
({
  titulo: yup
  .string()
  //.matches(/^[A-Za-z ]*$/, 'Ingresar título válido')
  .matches(/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]*$/, 'Ingresar título válido')
  .min(2,"Debe contener al menos 2 letras")
  .required(""),

  // categoria:yup
  // .string()
  // .required("obligatorio"),

  // dificultad:yup
  // .string()
  // .required("obligatorio"),

  ingredientes:yup
  .string()
  .min(2,"Debe contener al menos 2 letras")
  .required("Obligatorio"),

  procedimiento:yup
  .string()
  .min(2,"Debe contener al menos 2 letras")
  .required("Obligatorio"),


})

export default function PublicarReceta() {
  const classes = useStyles();

  

  const formik=useFormik //ahora puedo usar los valores de formik referenciando esa variable ubicandola en las diferentes secciones del fomulario
  ({
    initialValues:
    {
      titulo:"",
      categoria:"Postres",
      dificultad:"1",
      ingredientes:"",
      procedimiento:"",
    },

    onSubmit:(values)=>
    {
      console.log(JSON.stringify(values))
    },

    validationSchema: validationSchema

  });

  const [toggle, setToggle] = useState(false);
  const validarReceta= async function()
  {
      let datos = {
        nombre: formik.values.titulo,
        categoria: formik.values.categoria,
        dificultad: formik.values.dificultad,
        ingredientes: formik.values.ingredientes,
        procedimiento: formik.values.procedimiento,
        email: `${localStorage.getItem("email")}`,
        autor: `${localStorage.getItem("nombre")} ${localStorage.getItem("apellido")}`
      }
      let getCrear = await crearReceta(datos);
      if (getCrear.rdo===0 )
      {
        //setUsuarioValido(true);
        setToggle(!toggle)
        console.log("los datos enviados",datos)
      }
      if (getCrear.rdo===1)
      {
        alert(getCrear.mensaje)
      }
     
      
  }

if (toggle === false) {

  return (
    <Container component="main" maxWidth="xs">{/*ajustar para pantallas mas grandes*/}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <UploadFileIcon />
        </Avatar>
        <h2> Nueva Receta</h2>
        <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
          <Box
              sx={{
                mt: 5, display: 'flex',
                flexDirection: 'column',
                color: 'secondary',
                alignItems: 'center'              
              }}>
              <SubirFoto />
            </Box>
            <TextField
              variant="outlined"
              margin="normal"
              color='secondary'
              required
              fullWidth
              id="titulo"
              label="Nombre"
              name="titulo"
              //autoComplete="email"
              autoFocus
              value={formik.values.titulo}
              onChange={formik.handleChange}
              error={formik.touched.titulo && Boolean(formik.errors.titulo)}
              helperText={formik.touched.titulo && formik.errors.titulo}
              onBlur={formik.handleBlur}
            />
            {/* <Filtros /> */}
            <Grid container direction="row">
              <Grid item xs={12} md={12}>
                <Box sx={{ mt: 1 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Dificultad</InputLabel>
                    <Select
                      labelId="dificultad"
                      id="dificultad"
                      value={formik.values.dificultad}
                      label='dificultad'
                      name="dificultad"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </FormControl>      
                  </Box>
              </Grid>            
          </Grid >

          <Grid container direction="row">
              <Grid item xs={12} md={12}>
                <Box sx={{ mt: 1 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                    <Select
                      labelId="Categoria"
                      id="categoria"
                      value={formik.values.categoria}
                      label='categoria'
                      name="categoria"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <MenuItem value={"Postres"}>Postres</MenuItem>
                      <MenuItem value={"Carnes"}>Carnes</MenuItem>
                      <MenuItem value={"Frituras"}>Frituras</MenuItem>
                      <MenuItem value={"Pasteleria"}>Pasteleria</MenuItem>
                      <MenuItem value={'Guisos y sopas'}>Guisos y sopas</MenuItem>
                      <MenuItem value={"Arroces y pastas"}>Arroces y pastas</MenuItem>
                      <MenuItem value={"Pizzas"}>Pizzas</MenuItem>
                      <MenuItem value={"Panes"}>Panes</MenuItem>
                      <MenuItem value={"Vegetarianas"}>Vegetarianas</MenuItem>
                    </Select>
                  </FormControl>      
                  </Box>
              </Grid>            
          </Grid >

            <Box sx={{ mt: 2 }}>
              <TextField 
                id="ingredientes"
                name="ingredientes"
                label="Ingredientes"
                color='secondary'
                value={formik.values.ingredientes}
                onChange={formik.handleChange}
                error={formik.touched.ingredientes && Boolean(formik.errors.ingredientes)}
                helperText={formik.touched.ingredientes && formik.errors.ingredientes}
                onBlur={formik.handleBlur}  
                fullWidth
                multiline
                maxRows={12}
              />
            </Box>

            <Box sx={{ mt: 2}}>
            <TextField
                id="procedimiento"
                name="procedimiento"
                label="Procedimiento"
                color='secondary'
                multiline
                fullWidth
                maxRows={12}
                value={formik.values.procedimiento}
                onChange={formik.handleChange}
                error={formik.touched.procedimiento && Boolean(formik.errors.procedimiento)}
                helperText={formik.touched.procedimiento && formik.errors.procedimiento}
                onBlur={formik.handleBlur}  
              />
            </Box>

            
            <Box
              sx={{
                mt: 5, display: 'flex',
                flexDirection: 'column',
                color: 'secondary',
                alignItems: 'center'              
              }}>

              
            </Box>

            <Box sx={{ mt: 5 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.botón}
                //onClick={() => setToggle(!toggle)}
                onClick={validarReceta}
                disabled={
                  !(formik.isValid && formik.dirty)
                  // (formik.errors.titulo)            
                  // ||
                  // ( formik.errors.ingredientes)
                  // ||
                  // (formik.errors.procedimiento) 
                  }               
              >
                Publicar Receta 
              </Button>             
            </Box>
        </form>
      </div>

    </Container>
  );
}
else
  return(
    <div className={classes.paper}>
    <Exito/>
      <NavLink to='/User/Recetas' style={{ textDecoration: 'none', color: 'white' }}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.botón}>
            Continuar
          </Button>
      </NavLink>
    </div>
  )

}