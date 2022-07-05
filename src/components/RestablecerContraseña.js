import React,{useState} from 'react';
import { CssBaseline, Container, Avatar, TextField, Button, Box } from '@mui/material';
import SyncLockRoundedIcon from '@mui/icons-material/SyncLockRounded';
import { NavLink,useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

//validacion
import { useFormik } from 'formik';
import * as yup from "yup" //libreria de esquemas de validacion
import Exito from "./Exito"

//back
import {reinicioPassword} from "../controllers/userController"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: "50px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#834e6d",
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


const validationSchema=yup.object
({
  contraseña: yup
  .string()
  .required("")
  .min(8,"Contraseña contener mínimo de 8 caracteres"),

  repContraseña:yup
  .string()
  .oneOf([yup.ref("contraseña"),null],"Contraseñas no coinciden")
  .required(""),


})



const RestablcerContraseña = () => {

  const classes = useStyles();

  const formik=useFormik //ahora puedo usar los valores de formik referenciando esa variable ubicandola en las diferentes secciones del fomulario
  ({
    initialValues:
    {
      // contraseña:"estúpido&sensualFlanders",
      // repContraseña:"estúpido&sensualFlanders",

      contraseña:"",
      repContraseña:"",

    },

    onSubmit:(values)=>
    {
      console.log(JSON.stringify(values))
    },

    validationSchema: validationSchema

  });

  const [toggle, setToggle] = useState(false);
  const {token} = useParams()
  //console.log(token)
  

  const validarReinicio= async function()
  {
      let datos = {
        token: token,
        password: formik.values.contraseña
      }
      let reinicio = await reinicioPassword(datos);
      if (reinicio.rdo===0 )
      {
        //setUsuarioValido(true);
        setToggle(!toggle)
        console.log("contraseña cambiada")
      }
      if (reinicio.rdo===1)
      {
        alert(reinicio.mensaje)
      }
      // else{
      //   alert("error")
      // }
      
  }

if (toggle === false) {
  
  return (
    <Container component="main" maxWidth="xl" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SyncLockRoundedIcon />
        </Avatar>
        <h2> Restablecer contraseña </h2>

      <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>

      <Box mt={3}></Box>
        {/* <TextField id="standard-basic" label="Correo electrónico" variant="standard" size="small" color='secondary' fullWidth required /> */}
        <TextField
        id="contraseña"
        name="contraseña" 
        label="Nueva Contraseña"
        variant="standard"
        type="password"
        size="small"
        padding="25"
        color='secondary'
        fullWidth required
        value={formik.values.contraseña}
        onChange={formik.handleChange}
        error={formik.touched.contraseña && Boolean(formik.errors.contraseña)}
        helperText={formik.touched.contraseña && formik.errors.contraseña}
        onBlur={formik.handleBlur}
           />

<Box mt={3}></Box>

        <TextField
        id="repContraseña" 
        name="repContraseña"
        label="Confirmar Contraseña"
        variant="standard"
        type="password"
        size="small"
        padding="25"
        color='secondary'
        fullWidth required
        value={formik.values.repContraseña}
        onChange={formik.handleChange}
        error={formik.touched.repContraseña && Boolean(formik.errors.repContraseña)}
        helperText={formik.touched.repContraseña && formik.errors.repContraseña}
        onBlur={formik.handleBlur} 
          />
        {/* <Button variant="contained" size="medium" align='center'>Confirmar</Button> */}
        
        <Box sx={{ mt: 5 }}>    {/*margin top 5 pixeles https://mui.com/system/spacing/ */}
        {/* <NavLink to='/Home' style={{ textDecoration: 'none', color: 'white' }}> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.botón}
            disabled={!(formik.isValid && formik.dirty)}
            //onClick={() => setToggle(!toggle)}
            onClick={validarReinicio}
          >
            Siguiente
          </Button>
          {/* </NavLink> */}
        </Box>
      </form>
      </div>
    </Container >
  )
}
else
  return(
    <div className={classes.paper}>
    <Exito/>
      <NavLink to='/home' style={{ textDecoration: 'none', color: 'white' }}>
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

export default RestablcerContraseña
