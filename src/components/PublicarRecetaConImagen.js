import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Container, Box, Autocomplete, Grid } from '@mui/material';
//import {Avatar,Button,CssBaseline,TextField,Link,Grid,Typography,Container} from '@material-ui/core/';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { makeStyles } from '@material-ui/core/styles'; //sin esto no funciona por más que lo actualice, probar de sacar el resto para la v5
import { NavLink } from 'react-router-dom'; //<NavLink to='/lugar'></NavLink>
//import Filtros from "../components/Filtros";
import SubirFoto from './SubirFoto';

//validacion
import { useFormik } from 'formik';
import * as yup from "yup" //libreria de esquemas de validacion
import Exito from "./Exito"

import { crearReceta } from "../controller/recetaController"; //importo el metodo
import { RecentActorsOutlined } from '@material-ui/icons';


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

const validationSchema = yup.object
  ({
    titulo: yup
      .string()
      //.matches(/^[A-Za-z ]*$/, 'Ingresar título válido')
      .matches(/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]*$/, 'Ingresar título válido')
      .min(2, "Debe contener al menos 2 letras")
      .required(""),

    // categoria:yup
    // .string()
    // .required("obligatorio"),

    // dificultad:yup
    // .string()
    // .required("obligatorio"),

    ingredientes: yup
      .string()
      .min(2, "Debe contener al menos 2 letras")
      .required("Obligatorio"),

    procedimiento: yup
      .string()
      .min(2, "Debe contener al menos 2 letras")
      .required("Obligatorio"),


  })

export default function PublicarReceta(props) {
  const classes = useStyles();

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

  const formik = useFormik //ahora puedo usar los valores de formik referenciando esa variable ubicandola en las diferentes secciones del fomulario
    ({
      initialValues:
      {
        titulo: "",
        categoria: "",
        dificultad: "",
        ingredientes: "",
        procedimiento: "",
      },

      onSubmit: (values) => {
        console.log(JSON.stringify(values))
      },

      validationSchema: validationSchema

    });

  const [toggle, setToggle] = useState(false);


  const useStyles = makeStyles(styles);


  //SUBIR RECETA Y FOTO A CLOUDINARY
  
  const [name, setName] = React.useState('');
  const [categoria, setCategoria] = React.useState('');
  const [dificultad, setDificultad] = React.useState('');
  const [ingredientes, setIngredientes] = React.useState('');
  const [procedimiento, setProcedimiento] = React.useState('');
  const [imagen, setImagen] = React.useState('');

  const guardarReceta = () => {
    subirReceta();
  }

  const subirReceta = async function () {

    let nombre = []; //nombre de la imagen
    let archivoImagen = '';

    if (imagen !== '') {
      console.log("imagen", imagen);

      //buscar extension archivo
      let archivoOrig = imagen.name;
      let posExt = archivoOrig.indexOf('.');
      let extension = archivoOrig.substring(posExt, archivoOrig.length);
      let aleatorio = Math.random().toString().substring(2, 15);
      nombre.push("img" + localStorage.getItem('nombre') + "_" + aleatorio + extension);

      //subo imagen al servidor y cargo receta en mongo
      let receta = {
        name: localStorage.getItem('name'),
        categoria: localStorage.getItem('categoria'),
        dificultad: localStorage.getItem('dificultad'),
        ingredientes: localStorage.getItem('ingredientes'),
        procedimiento: localStorage.getItem('procedimiento'),
        imagen: nombre[0],
      }
      let rdo = await crearReceta(receta);
      if (rdo) {
        alert("Tu receta se ha almacenado correctamente.")
      }
    }
    else {
      alert("Ocurrio un error al subir tu receta al servidor. Intenta mas tarde.")
    }
  }


if (toggle === false) { //boton publicar receta

  const mostrarImagen = () => { //¿mostrar imagen en pantalla?
    console.log("Imagen", imagen);
    if (imagen.length == 0) {
      return (
        <GridItem xs={12} sm={12} md={12}>
          <div className={classes.profile}>

            <div className={classes.name}>
              <h3 className={classes.title}> Aun no has subido tus imagenes</h3>
            </div>
          </div>
        </GridItem>
      )
    }
  } 
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

            {/*componente subir fotos*/}
            <SubirFoto
              getImagen={(i) => setImagen(i)}
              inputProps={{
                placeholder: "Selecciona la imagen a subir. Recorda que el tamaño maximo de la imagen es 3MB."
              }} />

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
            onChange={formik.handleChange} //onChange={(e) => setName(e.target.value)} value={name} 
            error={formik.touched.titulo && Boolean(formik.errors.titulo)}
            helperText={formik.touched.titulo && formik.errors.titulo}
            onBlur={formik.handleBlur}

            
          />



          {/* <Filtros /> s*/}
          <Grid container direction="row">
            <Grid item xs={12} md={12}>
              <Box sx={{ mt: 1 }}>
                <Autocomplete
                  //id="categoria"
                  //name="categoria"
                  //
                  //size="small"
                  //margin="normal"
                  //Categoria
                  options={topCategorias.map((option) => option.title)}
                  renderInput={(params) => <TextField {...params}

                    id="categoria"
                    name="categoria"
                    label="Categoría"
                    color='secondary'
                  // value={formik.values.categoria}
                  // onChange={formik.handleChange}
                  // error={formik.touched.categoria && Boolean(formik.errors.categoria)}
                  // helperText={formik.touched.categoria && formik.errors.categoria}
                  // onBlur={formik.handleBlur}             


                  />}

                //name="categoria"


                />
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box sx={{ mt: 2 }}>
                <Autocomplete
                  id="dificultad"
                  name="dificultad"
                  //margin="normal"
                  //size="small"
                  //Dificultad
                  options={topDificultades.map((option) => option.title)}
                  renderInput={(params) => <TextField {...params}

                    label="Dificultad"
                    color="secondary"
                    value={formik.values.dificultad}
                    onChange={formik.handleChange}
                    error={formik.touched.dificultad && Boolean(formik.errors.dificultad)}
                    helperText={formik.touched.dificultad && formik.errors.dificultad}
                    onBlur={formik.handleBlur}


                  />}
                />
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

          <Box sx={{ mt: 2 }}>
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
            {/* <NavLink to='/Home/User' style={{ textDecoration: 'none', color: 'white' }}>s*/}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.botón}
              onClick={() => setToggle(!toggle)}
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
            {/* </NavLink> */}
          </Box>



        </form>
      </div>

    </Container>
  );
}
else 
  return (
    <div className={classes.paper}>
      <Exito />
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
