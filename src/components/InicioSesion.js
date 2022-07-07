import React, { useState }  from 'react';
//import {Avatar,Button,CssBaseline,TextField,Link,Grid,Typography,Container} from '@mui/material';
import {Avatar,Button,CssBaseline,TextField,Link,Grid,Typography,Container} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles } from '@material-ui/core/styles'; //sin esto no funciona por más que lo actualice, probar de sacar el resto para la v5
import {NavLink} from 'react-router-dom'; //<NavLink to='/lugar'></NavLink>

//validacion
import { useFormik } from 'formik';
import * as yup from "yup" //libreria de esquemas de validacion
import { propsToClassKey } from '@mui/styles';
import Exito from "./Exito"

//comunicacion con el back
import {login} from "../controllers/loginController"





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
  botón: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: "10px",
    backgroundColor: "#834e6d",
  },
}));

//esquema de valiadcion yup, define los campos requeridos, mjes de error, etc, todo dentro del objeto
const validationSchema=yup.object  //es libreria yup
({
  email: yup.string().email("Ingresar una dirección de correo electrónico válida").required("Ingresar correo electrónico"),
  contraseña: yup.string().required("Ingresar contraseña").min(8,""),//es redundante que aclare en un texto de error el largo en este caso, por eso el 8,""
})


export default function InicioSesion() {
  
  const classes = useStyles();

  const formik=useFormik //ahora puedo usar los valores de formik referenciando esa variable ubicandola en las diferentes secciones del fomulario
  ({
    initialValues:
    {
      email:"",
      contraseña:"",
    },

    onSubmit:(values)=>
    {
      //console.log(JSON.stringify(values))
    },

    validationSchema: validationSchema,

  });
  const [toggle, setToggle] = useState(false);

  //La validacion sintactica de campos esta hecho por formik
  const validarLogin= async function()
  {
      let datos = {
        email: formik.values.email,
        password: formik.values.contraseña
      }
      let getLogin = await login(datos);
      if (getLogin.rdo===0 )
      {
        //setUsuarioValido(true);
        setToggle(!toggle)
        console.log("rdo es cero")
      }
      if (getLogin.rdo===1)
      {
        alert(getLogin.mensaje)
      }
      // else{
      //   alert("error")
      // }
      
  }


if (toggle === false) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <h2> Iniciar Sesión</h2>
        <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
           {/*ahora puedo usar la funcion de submit para el formulario */}
          <TextField
            variant="outlined"
            margin="normal"
            color='secondary'
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
            color='secondary'
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
              <NavLink to='/olvido' style={{ textDecoration: 'none'}}>Olvidé mi contraseña </NavLink>
          </Link>

                  
          {/* <NavLink to='/Home/User' style={{ textDecoration: 'none' , color: 'white' }}> */}
            <Button
              className={classes.botón}
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              disabled={!(formik.isValid && formik.dirty)}
              //onClick={() => setToggle(!toggle)}
              onClick={validarLogin}
            >
            Ingresar 
            </Button>
          {/* </NavLink> */}

          <Grid container>
            <Grid item xs>
              <Typography  variant="body2" >
                ¿No tienes una cuenta?
              </Typography>
            </Grid>
            <Grid item xs style={{ textAlign: "end" }}>
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