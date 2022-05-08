import React from 'react';
import { CssBaseline, Container, Avatar, TextField, Button, Box } from '@mui/material';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { NavLink } from 'react-router-dom'; // <NavLink to='/Lugar' style={{ textDecoration: 'none' , color: 'white' }}>texto </NavLink>
import { makeStyles } from '@material-ui/core/styles';

//validacion
import { useFormik } from 'formik';
import * as yup from "yup" //libreria de esquemas de validacion


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
  .matches(/^[A-Za-z ]*$/, 'Ingresar nombre válido')
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



const EditarPerfil = () => {

  const classes = useStyles();

  const formik=useFormik //ahora puedo usar los valores de formik referenciando esa variable ubicandola en las diferentes secciones del fomulario
  ({
    initialValues:
    {
      // nombre:"Homero",
      // apellido:"Simpson",
      // telefono:"54 11 1234 5678",
      // correo:"homerosimpsons@springfield.com",
      // contraseña:"estúpido&sensualFlanders",
      // repContraseña:"estúpido&sensualFlanders",

      nombre:"",
      apellido:"",
      telefono:"",
      correo:"",
      contraseña:"",
      repContraseña:"",

    },

    onSubmit:(values)=>
    {
      console.log(JSON.stringify(values))
    },

    validationSchema: validationSchema

  });

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
          onBlur={formik.handleBlur} />
        
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

        <Box mt={3}></Box>

        <TextField 
          id="correo"
          name="correo" 
          label="Modificar correo electrónico" 
          variant="standard" 
          size="small" 
          color='secondary' 
          fullWidth
          value={formik.values.correo}
          onChange={formik.handleChange}
          error={formik.touched.correo && Boolean(formik.errors.correo)}
          helperText={formik.touched.correo && formik.errors.correo}
          onBlur={formik.handleBlur} 
          />

        <Box mt={3}></Box>
        <TextField 
          id="contraseña"
          name="contraseña" 
          label="Modificar contraseña" 
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
          label="Confirmar contraseña" 
          variant="standard"  
          type="password" 
          size="small" color='secondary' 
          fullWidth
          value={formik.values.repContraseña}
          onChange={formik.handleChange}
          error={formik.touched.repContraseña && Boolean(formik.errors.repContraseña)}
          helperText={formik.touched.repContraseña && formik.errors.repContraseña}
          onBlur={formik.handleBlur} 
          />


          <Box sx={{ mt: 5 }}>{/*margin top 5 pixeles https://mui.com/system/spacing/ */}
          <NavLink to='/Home/User' style={{ textDecoration: 'none', color: 'white' }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.botón}

            >
<<<<<<< HEAD
            Guardar cambios
            </Button></NavLink>
=======
              Guardar cambios 
            </Button>
            </NavLink>
>>>>>>> 669db31385cbae95ad47bc571523d6151d533e2d
          </Box>
        </form>
      </div>
    </Container>
  )
}

export default EditarPerfil