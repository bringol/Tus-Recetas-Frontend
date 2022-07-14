import React, { useState, useEffect } from 'react';
import { Avatar, Button, CssBaseline, TextField, Container, Box, Autocomplete, Grid } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import classNames from "classnames";
import { NavLink } from 'react-router-dom';
import CustomFileInput from "./CustomFileInput.js";
import SubirFoto from './SubirFoto';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import { makeStyles } from '@material-ui/core/styles';

import { useFormik } from 'formik';
import * as yup from "yup";
import Exito from "./Exito";

import { crearReceta, uploadImg } from "../controllers/recetaController"

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
    nombre: yup
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

const PublicarRecetaConImagen = (props) => {

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

  const formik = useFormik({
    initialValues:
    {
      nombre: "",
      categoria: "",
      dificultad: "",
      ingredientes: "",
      procedimiento: "",
      nombreImagen: "",
    },

    onSubmit: (values) => {
      console.log(JSON.stringify(values))
    },

    validationSchema: validationSchema

  });

  const [toggle, setToggle] = useState(false);
  const [imgAux, setImgAux] = React.useState('');
  const [nombreI, setNombreI] = React.useState('');

  const validarReceta = async function () {
    let datos = {
      nombre: formik.values.nombre,
      categoria: formik.values.categoria,
      dificultad: formik.values.dificultad,
      ingredientes: formik.values.ingredientes,
      procedimiento: formik.values.procedimiento,
      nombreImagen: nombreI,
    }
    let getReceta = await crearReceta(datos);
    if (getReceta.rdo === 0) {
      //setUsuarioValido(true);
      setToggle(!toggle)
      console.log("rdo es cero")
    }
    if (getReceta.rdo === 1) {
      alert(getReceta.mensaje)
    }
  }


  //const [listaImagenes,setListaImagenes]=React.useState([]);



  const { ...rest } = props; //VER Q ES
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  //console.log("cargacomponente");
  //PARA TRAER COMPONENTES DEL BACKEND
  /* useEffect(()=>{ 
     async function componentDidMount() 
     {
       //traer imagenes de User
       //let rdo = await getImagenesByUser();
       //setListaImagenes(rdo); 
     }
     componentDidMount();
   },[]);*/

  /*const getImagenes = async function (){
    console.log("Voy a buscar imagenes")
    console.log("listaImagenesGetImg",listaImagenes)
    let rdo = await getImagenesByUser();
    setListaImagenes(rdo);
    
    console.log("listaImagenesGetImg",listaImagenes)
    console.log("rdoGetImagenesGetImg",rdo)
    
  }*/

  const guardarImagen = () => {
    subirImagen();
  }

  const subirImagen = async function (receta) {
    let files = [];
    let nombres = [];
    let archivoImagen = '';

    if (imgAux !== '') {
      console.log("imgAux", imgAux);
      files.push(imgAux);
      //buscar extension archivo
      let archivoOrig = imgAux.name;
      let posExt = archivoOrig.indexOf('.');
      let extension = archivoOrig.substring(posExt, archivoOrig.length);
      let aleatorio = Math.random().toString().substring(2, 15);
      nombres.push("img" + localStorage.getItem('nombre') + "_" + aleatorio + extension);
      //subir archivo a servidor
      console.log(files);
      console.log(nombres);

      setNombreI(nombres); //seteo la URL

      archivoImagen = await uploadImg(files, nombres);
      //Si la imagen se subio bien la guardo en la BD
      //if (archivoImagen.ok) {
      //validarReceta();
      /*
              let rdo = await crearReceta(receta, nombres)
              console.log("receta", rdo)
      
              if (rdo) {
                alert("Tu imagen se ha almacenado correctamente.")
                //getImagenes();
              }
      
              else {
                alert("Ocurrio un error al subir tu imagen al servidor. Intenta mas tarde.")
              }*/
    }
  }


  const mostrarImagen = () => {
    //console.log("ListaImagenesMostrarImg:",listaImagenes);
    if (imgAux === "") {
      return (
        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.profile}>

            <div className={classes.name}>
              <h3 className={classes.title}> Aun no has subido tus imagenes</h3>
            </div>
          </div>
        </Grid>
      )
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

              <CustomFileInput
                className={classes.footerButtons}
                formControlProps={{
                  fullWidth: true
                }}
                getImagen={(i) => setImgAux(i)}
                inputProps={{
                  placeholder: "Selecciona la imagen a subir. Recorda que el tamaño maximo de la imagen es 3MB."

                }}
                endButton={{
                  buttonProps: {
                    round: true,
                    color: "primary",
                    justIcon: true,
                    fileButton: true
                  },
                  icon: <AddAPhotoIcon />
                }}
              />
            </Box>

            <Grid item xs={12} sm={12} md={12}>
              <Button
                color="primary"
                onClick={() => { guardarImagen() }}
              >
                Subir imagen
              </Button>
            </Grid>


            <TextField
              variant="outlined"
              margin="normal"
              color='secondary'
              required
              fullWidth
              id="nombre"
              label="Nombre"
              name="nombre"
              //autoComplete="email"
              autoFocus
              value={formik.values.nombre}
              onChange={formik.handleChange}
              error={formik.touched.nombre && Boolean(formik.errors.nombre)}
              helperText={formik.touched.nombre && formik.errors.nombre}
              onBlur={formik.handleBlur}
            />



            {/* <Filtros /> */}
            <Grid container direction="row">
              <Grid xs={12} md={12}>
                <Box sx={{ mt: 2 }}>
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

            </Grid>
            <Grid xs={12} md={12}>
              <Box sx={{ mt: 2 }}>
                <Autocomplete
                  id="dificultad"
                  name="dificultad"
                  //margin="normal"
                  //size="small"
                  Dificultad
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
              {/* <NavLink to='/Home/User' style={{ textDecoration: 'none', color: 'white' }}> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.botón}
                // onClick={() => setToggle(!toggle)}
                disabled={
                  !(formik.isValid && formik.dirty)
                  // (formik.errors.nombre)            
                  // ||
                  // ( formik.errors.ingredientes)
                  // ||
                  // (formik.errors.procedimiento) onClick= {()=>{guardarImagen()}}
                }
                onClick={validarReceta}


              >
                Publicar Receta
              </Button>
              {/* </NavLink> */}
            </Box>



          </form>
        </div >

      </Container >
    )
  }
  else return (
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


export default PublicarRecetaConImagen