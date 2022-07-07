import React, { useState } from 'react';
import { CssBaseline, Container, Avatar, TextField, Button, Box, Alert, AlertTitle, } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import MailLockRoundedIcon from '@mui/icons-material/MailLockRounded';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import RestablcerContraseña from "../components/RestablecerContraseña";

//validacion
import { useFormik } from 'formik';
import * as yup from "yup" //libreria de esquemas de validacion

//back
import {olvidoPassword} from "../controllers/userController"

//esquema de valiadcion yup, define los campos requeridos, mjes de error, etc, todo dentro del objeto
const validationSchema=yup.object  //es libreria yup
({
  correo: yup
  .string()
  .email("Ingresar una dirección de correo electrónico válida")
  .required("Campo Obligatorio"),
})



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: "50px",
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#834e6d",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  botón: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: "100px",
    backgroundColor: "#834e6d",
  },
}));


const OlvidoConstraseña = () => {

  const classes = useStyles();

  const formik=useFormik //ahora puedo usar los valores de formik referenciando esa variable ubicandola en las diferentes secciones del fomulario
  ({
    initialValues:
    {
      correo:"",

      
    },

    // onSubmit:(values)=>
    // {
    //   console.log(JSON.stringify(values))
    // },

    validationSchema: validationSchema,

  });

  //toggle de componentes para Mostrar/Esconder el paso siguiente desp de la validacion
  const [toggle, setToggle] = useState(false)

  const validarDatos= async function()
{
    let datos = {
      email: formik.values.correo,
    }
    let envio = await olvidoPassword(datos);
    if (envio.rdo===0 )
    {
      // console.log("Correo Enviado")
      // alert("Correo Enviado")
      setToggle(!toggle)
      
    }
    if (envio.rdo===1)
    {//No se dará indicios del resultado
     //por mas que el email sea inválido
     //se mostrará el mismo mensaje

      //alert(envio.mensaje)
      //alert("error")
      setToggle(!toggle)
    }
    
}

  if (toggle === false) {

    return (
      <Container component="main" maxWidth="xl" >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <MailLockRoundedIcon />
          </Avatar>
          <h2> ¿Ha olvidado su contraseña?  </h2>
          <h4> Ingrese el correo electrónico </h4>
          {/* <h5> *****@gmail.com  </h5> */}
          <form noValidate onSubmit={formik.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="correo"
              label="correo electrónico"
              name="correo"
              color='secondary'
              autoFocus
              value={formik.values.correo}
              onChange={formik.handleChange}
              error={formik.touched.correo && Boolean(formik.errors.correo)}
              helperText={formik.touched.correo && formik.errors.correo}
              onBlur={formik.handleBlur}
            />
          
            <Box sx={{ mt: 5 }}>
              <Button
                //onClick={() => setToggle(!toggle)}
                onClick={validarDatos}
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.botón}
                disabled={!(formik.isValid && formik.dirty)}
              >
                Siguiente
              </Button>
            </Box>
            </form>
         
          {/* {toggle && ( <RestablcerContraseña/>)} */}
        </div>

      </Container >
    )
  }
  else{ //le dio a Siguiente(paso a ser verdadero), por lo tanto muestro el otro componente
  
    return (
      <Container component="main" maxWidth="xl" >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <CheckBoxIcon />
          </Avatar>
          <h2> Datos cargados correctamente  </h2>
          <h4> Recibirá un email para el cambio de contraseña </h4>
          <Box sx={{ mt: 3, mb: 20 }}>
          <NavLink to='/home'style={{ textDecoration: 'none' , color: 'white' }}>
              <Button 
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.botón}
              >
                Finalizar
              </Button></NavLink>
            </Box>
        </div>

      </Container >
    )
    }

}

export default OlvidoConstraseña
