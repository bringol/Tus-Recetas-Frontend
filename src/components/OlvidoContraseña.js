import React, { useState } from 'react';
import { CssBaseline, Container, Avatar, TextField, Button, Box } from '@mui/material';
import MailLockRoundedIcon from '@mui/icons-material/MailLockRounded';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import RestablcerContraseña from "../components/RestablecerContraseña";
//validacion
import { useFormik } from 'formik';
import * as yup from "yup" //libreria de esquemas de validacion

//esquema de valiadcion yup, define los campos requeridos, mjes de error, etc, todo dentro del objeto
const validationSchema=yup.object  //es libreria yup
({
  codigo: yup.string().required("Ingresar Código de Validacion").min(8,""),//lo dejo como un min de 8 caracteres por ahora
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
      codigo:"",

      //codigo:"DB4542J8",
      
    },

    onSubmit:(values)=>
    {
      console.log(JSON.stringify(values))
    },

    validationSchema: validationSchema,

  });

  //toggle de componentes para Mostrar/Esconder el paso siguiente desp de la validacion
  const [toggle, setToggle] = useState(false)

  if (toggle === false) {

    return (
      <Container component="main" maxWidth="xl" >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <MailLockRoundedIcon />
          </Avatar>
          <h2> ¿Ha olvidado su contraseña?  </h2>
          <h4> Hemos enviado un mail a: </h4>
          <h5> *****@gmail.com  </h5>
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="codigo"
              label="Código de Validación"
              name="codigo"
              color='secondary'
              autoFocus
              value={formik.values.codigo}
              onChange={formik.handleChange}
              error={formik.touched.codigo && Boolean(formik.errors.codigo)}
              helperText={formik.touched.codigo && formik.errors.codigo}
              onBlur={formik.handleBlur}
            />
          
            <Box sx={{ mt: 5 }}>
              <Button onClick={() => setToggle(!toggle)}
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.botón}
                disabled={!(formik.isValid && formik.dirty)}
              >
                Siguiente
                {/* <NavLink to='/Home/User'style={{ textDecoration: 'none' , color: 'white' }}>Siguiente</NavLink> */}
              </Button>
            </Box>
            </form>
         
          {/* {toggle && ( <RestablcerContraseña/>)} */}
        </div>

      </Container >
    )
  }
  else//le dio a Siguiente(paso a ser verdadero), por lo tanto muestro el otro componente
    return (<><RestablcerContraseña /></>)

}

export default OlvidoConstraseña
