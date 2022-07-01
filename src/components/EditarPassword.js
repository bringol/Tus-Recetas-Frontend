import React, { useState } from 'react';
import { CssBaseline, Container, Avatar, TextField, Button, Box } from '@mui/material';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { NavLink } from 'react-router-dom'; // <NavLink to='/Lugar' style={{ textDecoration: 'none' , color: 'white' }}>texto </NavLink>
import { makeStyles } from '@material-ui/core/styles';


//validacion
import { useFormik } from 'formik';
import * as yup from "yup" //libreria de esquemas de validacion
import Exito from "./Exito"


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

  const formik=useFormik //ahora puedo usar los valores de formik referenciando esa variable ubicandola en las diferentes secciones del fomulario
  ({
    initialValues:
    {
      
      contraseña:"",
      repContraseña:"",
      
    },

    // onSubmit:(values)=>
    // {
    //   console.log(JSON.stringify(values))
    // },

    validationSchema: validationSchema

  });

  const [toggle, setToggle] = useState(false);

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
                onClick={() => setToggle(!toggle)}

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