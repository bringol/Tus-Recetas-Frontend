import React, { useState } from 'react';
import { CssBaseline, Container, Avatar, TextField, Button, Box } from '@mui/material';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { NavLink } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';


//validacion
import { useFormik } from 'formik';
import * as yup from "yup"
import Exito from "./Exito"
//comunicacion con el back
import {editarPassword} from "../controllers/userController"


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  .required("Ingresar contraseña")
  .min(8,"Contraseña contener mínimo de 8 caracteres"),

  repContraseña:yup
  .string()
  .oneOf([yup.ref("contraseña"),null],"Contraseñas no coinciden")
  .required("Ingresar contraseña"),


})



const EditarPassword = () => {

  const classes = useStyles();

  const formik=useFormik
  ({
    initialValues:
    {
      
      contraseña:"",
      repContraseña:"",
      
    },


    validationSchema: validationSchema

  });

  const [toggle, setToggle] = useState(false);

  //La validacion sintactica de campos esta hecho por formik
  const validarPassword= async function()
  {
      let datos = {
        password: formik.values.contraseña
      }
      let nuevaPass = await editarPassword(datos);
      if (nuevaPass.rdo===0 )
      {
        setToggle(!toggle)
        console.log("Contraseña actualizada")
      }
      if (nuevaPass.rdo===1)
      {
        alert(nuevaPass.mensaje)
      }
      
  }

  if (toggle === false) {

    return (
      <Container component="main" maxWidth="xl" >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <CreateRoundedIcon />
          </Avatar>
          <h2> Cambiar Contraseña </h2>
          <form className={classes.form} noValidate  onSubmit={formik.handleSubmit}>
            

          <Box mt={3}></Box>
          <TextField 
            id="contraseña"
            name="contraseña" 
            label="Nueva Contraseña" 
            variant="standard"  
            type="password" 
            size="small" color='secondary' 
            fullWidth 
            value={formik.values.contraseña}
            onChange={formik.handleChange}
            error={formik.touched.contraseña && Boolean(formik.errors.contraseña)}
            helperText={formik.touched.contraseña && formik.errors.contraseña}
            onBlur={formik.handleBlur}
            />
            
            
          <TextField 
            id="repContraseña" 
            name="repContraseña"
            label="Confirmar Contraseña" 
            variant="standard"  
            type="password" 
            size="small" color='secondary' 
            fullWidth
            value={formik.values.repContraseña}
            onChange={formik.handleChange}
            error={(formik.touched.repContraseña && Boolean(formik.errors.repContraseña))}
            helperText={formik.touched.repContraseña && formik.errors.repContraseña}
            onBlur={formik.handleBlur} 
            
            />


            <Box sx={{ mt: 5 }}>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.botón}
                disabled={ 
                  !(formik.isValid && formik.dirty)                                  
                }
               
                onClick={validarPassword}

              >
              Guardar cambios
              </Button>
            </Box>
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

export default EditarPassword