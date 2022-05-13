import React, { useState } from 'react';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import {Avatar,Button,CssBaseline,TextField,Typography,Container, Box} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles'; 
import Exito from "./Exito"
//
//validacion
import { useFormik } from 'formik';
import * as yup from "yup" //libreria de esquemas de validacion

import { NavLink } from 'react-router-dom'; // <NavLink to='/Lugar' style={{ textDecoration: 'none' , color: 'white' }}>texto </NavLink>

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: "100px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#834e6d",
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  botón: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: "100px",
    backgroundColor: "#834e6d",
  },
  centrado: {
    margin: '20px auto',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'justify',
    color: 'red'
  }
}));


//esquema de valiadcion yup, define los campos requeridos, mjes de error, etc, todo dentro del objeto
const validationSchema=yup.object
({
  nombre: yup
  .string()
  .matches(/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]*$/, 'Ingresar nombre válido')
  .min(2,"Debe contener al menos 2 letras")
  .required("Campo Obligatorio"),

  apellido:yup
  .string()
  .matches(/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]*$/, 'Ingresar apellido válido')
  .min(2,"Debe contener al menos 2 letras")
  .required("Campo Obligatorio"),

  telefono:yup
  .string()
  .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Ingresar número válido')
  .required("Campo Obligatorio"),

  correo: yup
  .string()
  .email("Ingresar una dirección de correo electrónico válida")
  .required("Campo Obligatorio"),

  contraseña: yup
  .string()
  .required("Ingresar contraseña")
  .min(8,"Contraseña contener mínimo de 8 caracteres"),

  repContraseña:yup
  .string()
  .oneOf([yup.ref("contraseña"),null],"Contraseñas no coinciden")
  .required("Ingresar contraseña"),


})

const Registrarse = () => {
  const classes = useStyles();

  const formik=useFormik //ahora puedo usar los valores de formik referenciando esa variable ubicandola en las diferentes secciones del fomulario
  ({
    initialValues:
    {
      nombre:"Homero",
      apellido:"Simpson",
      telefono:"54 11 1234 5678",
      correo:"homerosimpsons@springfield.com",
      //contraseña:"estúpido&sensualFlanders",
      //repContraseña:"estúpido&sensualFlanders",

      // nombre:"",
      // apellido:"",
      // telefono:"",
      // correo:"",
       contraseña:"",
       repContraseña:"",

    },

    onSubmit:(values,onSubmitProps)=>
    {
      //console.log(JSON.stringify(values))
      console.log(values)
      onSubmitProps.setSubmitting(false)
    },

    
    

    validationSchema: validationSchema

  });


  //const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  if (toggle === false) {
    return (
      <Container component="main" maxWidth="xs">{/*ajustar para pantallas mas grandes*/}
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AppRegistrationRoundedIcon />
          </Avatar>
          <h2> Registrarse </h2>
          <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>

          <Box mt={3}></Box>
            <TextField
              name="nombre"
              label="Nombre"
              variant="standard"
              color="secondary"
              size="small"
              fullWidth
              required
              value={formik.values.nombre}
              onChange={formik.handleChange}
              error={formik.touched.nombre && Boolean(formik.errors.nombre)}
              helperText={formik.touched.nombre && formik.errors.nombre}
              onBlur={formik.handleBlur} />

            <Box mt={3}></Box>

            <TextField
            id="apellido"
            label="Apellido"
            variant="standard"
            color="secondary"
            size="small"
            fullWidth
            required
            value={formik.values.apellido}
            onChange={formik.handleChange}
            error={formik.touched.apellido && Boolean(formik.errors.apellido)}
            helperText={formik.touched.apellido && formik.errors.apellido}
            onBlur={formik.handleBlur} />

            <Box mt={3}></Box>

            <TextField
            id="telefono"
            label="Telefono"
            variant="standard"
            color="secondary"
            size="small"
            fullWidth 
            required
            value={formik.values.telefono}
            onChange={formik.handleChange}
            error={formik.touched.telefono && Boolean(formik.errors.telefono)}
            helperText={formik.touched.telefono && formik.errors.telefono}
            onBlur={formik.handleBlur} />

            <Box mt={3}></Box>

            <TextField
            id="correo"
            label="Correo electrónico"
            variant="standard"
            color="secondary"
            size="small"
            fullWidth
            required
            value={formik.values.correo}
            onChange={formik.handleChange}
            error={formik.touched.correo && Boolean(formik.errors.correo)}
            helperText={formik.touched.correo && formik.errors.correo}
            onBlur={formik.handleBlur}
              />

            <Box mt={3}></Box>

            <TextField 
            id="contraseña"
            label="Contraseña"
            variant="standard"
            type="password"
            color="secondary"
            size="small"
            fullWidth
            required
            value={formik.values.contraseña}
            onChange={formik.handleChange}
            error={formik.touched.contraseña && Boolean(formik.errors.contraseña)}
            helperText={formik.touched.contraseña && formik.errors.contraseña}
            onBlur={formik.handleBlur}
            />

            <Box mt={3}></Box>

            <TextField
            id="repContraseña"
            label="Confirme contraseña"
            variant="standard"
            type="password"
            color="secondary"
            size="small"
            fullWidth
            required
            value={formik.values.repContraseña}
            onChange={formik.handleChange}
            error={formik.touched.repContraseña && Boolean(formik.errors.repContraseña)}
            helperText={formik.touched.repContraseña && formik.errors.repContraseña}
            onBlur={formik.handleBlur}
            />

            <Box mt={3}></Box>

            <Typography className={classes.centrado}            
            >
              *Al seleccionar "Confirmar" usted estará aceptando nuestros términos y condiciones.
            </Typography>
            
            
            <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="secondary"
                      className={classes.botón}
                      disabled={  ///Si no hubo errores, el boton de desbloquea
                        //el submit estará bloq a menos que todos los campos sean validos y los valores iniciales fueron cambiados
                        !(formik.isValid && formik.dirty)
                        // ( formik.errors.nombre)
                        // ||
                        // ( formik.errors.apellido)
                        // ||
                        // ( formik.errors.telefono)
                        // ||
                        // ( formik.errors.correo)
                        // ||
                        // (formik.errors.contraseña) 
                        // ||
                        // (formik.errors.repContraseña)                   
                      
                      }
                      
                      //onClick={() => setCount(count + 1)} //cuando le click (ya esta desbloqueado, suma 1) 
                      onClick={() => setToggle(!toggle)}
                  >
              Confirmar 
            </Button>
              {//reemplazado por el toggle
              /* {count === 0 ? ("") :
              (
                
              <NavLink to='/Home/User' style={{ textDecoration: 'none', color: 'white' }}>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.botón}>
                  Siguiente
                </Button>
                </NavLink>
                )
              //el contador dejo de ser 0, entonces muestro el boton que me va a redirigir 
              //fuente https://bobbyhadz.com/blog/react-disable-link
              }          */}
            
          </form>
        </div>
      </Container>

    )
  }

  else
  return(
    <div className={classes.paper}>
    <Exito/>
      <NavLink to='/Home/User' style={{ textDecoration: 'none', color: 'white' }}>
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

export default Registrarse