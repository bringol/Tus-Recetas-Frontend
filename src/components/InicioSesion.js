import React from 'react';
//import {Avatar,Button,CssBaseline,TextField,Link,Grid,Typography,Container} from '@mui/material';
import {Avatar,Button,CssBaseline,TextField,Link,Grid,Typography,Container} from '@material-ui/core/';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles } from '@material-ui/core/styles'; //sin esto no funciona por más que lo actualice, probar de sacar el resto para la v5
import {NavLink} from 'react-router-dom'; //<NavLink to='/lugar'></NavLink>

//validacion
import { useFormik } from 'formik';
import * as yup from "yup" //libreria de esquemas de validacion

//estilos
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: "220px",
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
}));

//esquema de valiadcion yup, define los campos requeridos, mjes de error, etc, todo dentro del objeto
const validationSchema=yup.object  //es libreria yup
({
  email: yup.string().email("Ingresar una dirección de correo electrónico válida").required("Ingresar correo electrónico"),
  contraseña: yup.string().required("Ingresar contraseña").min(15,"Mínimo de 15 caracteres para la contraseña"),
})


export default function InicioSesion() {
  const classes = useStyles();

  const formik=useFormik //ahora puedo usar los valores de formik referenciando esa variable ubicandola en las diferentes secciones del fomulario
  ({
    initialValues:
    {
      email:"homerosimpson@springfield.com",
      contraseña:"estúpido&sensualFlanders",

      //correo:"",
      //contraseña:"",
    },

    onSubmit:(values)=>
    {
      console.log(JSON.stringify(values))
    },

    validationSchema: validationSchema,

  });


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
           {/*ahora puedo usar la funcion de submit para el formulario */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}//metodo de formik similar a onSubmit
            error={formik.touched.email && Boolean(formik.errors.email)}//solo muestra el error cuando el usr cliquea el campo, el booleano chequea si realmente hubo errores
            helperText={formik.touched.email && formik.errors.email}//de cumplirse lo anterior, muestra el error correspondiente
            onBlur={formik.handleBlur}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="contraseña"
            label="Contraseña"
            type="password" //si no está escrito así se ven los caracteres
            id="contraseña"
            autoComplete="contraseña-actual"
            value={formik.values.contraseña}
            onChange={formik.handleChange}
            error={formik.touched.contraseña && Boolean(formik.errors.contraseña)}
            helperText={formik.touched.contraseña && formik.errors.contraseña}
            onBlur={formik.handleBlur}
          />
          
          <Link href="#" variant="body2">
          <NavLink to='/Recover'style={{ textDecoration: 'none'}}>Olvidé Mi Contraseña </NavLink>
              </Link>


          <NavLink to='/Home/User'style={{ textDecoration: 'none' , color: 'white' }}>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Ingresar 
           </Button>
          </NavLink> 

          <Grid container>
            
            <Grid item xs>
              <Typography  variant="body2">
                ¿No tienes cuenta?
              </Typography>
            </Grid>
            <Grid item xs>
              <Link href="#" variant="body2">
              <NavLink to='/Registro'>REGÍSTRATE AQUI</NavLink>
              </Link>
            </Grid>
           
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}