import React, { useState } from 'react';
import { CssBaseline, Container, Avatar, TextField, Button, Box } from '@mui/material';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { NavLink } from 'react-router-dom'; // <NavLink to='/Lugar' style={{ textDecoration: 'none' , color: 'white' }}>texto </NavLink>
import { makeStyles } from '@material-ui/core/styles';


//validacion
import { useFormik } from 'formik';
import * as yup from "yup" //libreria de esquemas de validacion
import Exito from "./Exito"

//back
import {editarUser} from "../controllers/userController"


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
  nombre: yup
  .string()
  .matches(/^[A-ZÑÁÉÍÓÚÜa-zñáéíóúü ]*$/, 'Ingresar título válido')
  .min(2,"Debe contener al menos 2 letras")
  .required("Campo Obligatorio"),

  apellido:yup
  .string()
  .matches(/^[A-Za-z ]*$/, 'Ingresar nombre válido')
  .min(2,"Debe contener al menos 2 letras")
  .required("Campo Obligatorio"),

  telefono:yup
  .string()
  .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Ingresar número válido')
  .required("Campo Obligatorio"),


})



const EditarPerfil = () => {

  const classes = useStyles();

  const formik=useFormik //ahora puedo usar los valores de formik referenciando esa variable ubicandola en las diferentes secciones del fomulario
  ({
    initialValues:
    {
      // nombre:"Homero",
      // apellido:"Simpson",
      // telefono:"54 11 1234 5678",
      
      nombre:`${localStorage.getItem("nombre")}`,
      apellido:`${localStorage.getItem("apellido")}`,
      telefono:`${localStorage.getItem("telefono")}`,

      // nombre:"",
      // apellido:"",
      // telefono:"",      

    },

    onSubmit:(values)=>
    {
      console.log(JSON.stringify(values))
    },

    validationSchema: validationSchema

  });

  const [toggle, setToggle] = useState(false);
  
//La validacion sintactica de campos esta hecho por formik
const validarDatos= async function()
{
    let datos = {
      nombre: formik.values.nombre,
      apellido: formik.values.apellido,
      telefono: formik.values.telefono,
    }
    let nuevoDato = await editarUser(datos);
    if (nuevoDato.rdo===0 )
    {
      //setUsuarioValido(true);
      setToggle(!toggle)
      console.log("Perfil actualizado")
    }
    if (nuevoDato.rdo===1)
    {
      alert(nuevoDato.mensaje)
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
          <h2> Editar Perfil </h2>
          <form className={classes.form} noValidate  onSubmit={formik.handleSubmit}>
            
          <TextField 
            id="nombre"
            name="nombre" 
            label="Modificar nombre" 
            variant="standard" 
            size="small" 
            color='secondary' 
            fullWidth
            value={formik.values.nombre}
            onChange={formik.handleChange}
            error={formik.touched.nombre && Boolean(formik.errors.nombre)}
            helperText={formik.touched.nombre && formik.errors.nombre}
            onBlur={formik.handleBlur} 
            />

          <Box mt={3}></Box>
          <TextField 
            id="apellido"
            name="apellido"  
            label="Modificar apellido" 
            variant="standard" 
            size="small" 
            color='secondary' 
            fullWidth 
            value={formik.values.apellido}
            onChange={formik.handleChange}
            error={formik.touched.apellido && Boolean(formik.errors.apellido)}
            helperText={formik.touched.apellido && formik.errors.apellido}
            onBlur={formik.handleBlur}
            />
          
            <Box mt={3}></Box>

            <TextField
            id="telefono"
            name="telefono"
            label="Modificar telefono"
            variant="standard"
            color="secondary"
            size="small"
            fullWidth 
            value={formik.values.telefono}
            onChange={formik.handleChange}
            error={formik.touched.telefono && Boolean(formik.errors.telefono)}
            helperText={formik.touched.telefono && formik.errors.telefono}
            onBlur={formik.handleBlur} />



            <Box sx={{ mt: 5 }}>{/*margin top 5 pixeles https://mui.com/system/spacing/ */}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.botón}
                disabled={ 
                  //el submit estará bloq a menos que todos los campos sean validos y los valores iniciales fueron cambiados
                  //https://stackoverflow.com/questions/59443005/react-formik-form-validation-how-to-initially-have-submit-button-disabled
                  !(formik.isValid && formik.dirty)
                          
                
                }
                //onClick={() => setToggle(!toggle)}
                onClick={validarDatos}

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
      <NavLink to='/home/user' style={{ textDecoration: 'none', color: 'white' }}>
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

export default EditarPerfil