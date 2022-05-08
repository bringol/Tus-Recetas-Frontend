import React from 'react';
import { CssBaseline, Container, Avatar, TextField, Button, Box } from '@mui/material';
import SyncLockRoundedIcon from '@mui/icons-material/SyncLockRounded';
import { NavLink } from 'react-router-dom';
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
  .required("Ingresar contraseña")
  .min(8,"Contraseña contener mínimo de 8 caracteres"),

  repContraseña:yup
  .string()
  .oneOf([yup.ref("contraseña"),null],"Contraseñas no coinciden")
  .required("Ingresar contraseña"),


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
        <NavLink to='/Home' style={{ textDecoration: 'none', color: 'white' }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.botón}

          >
            Confirmar
          </Button>
          </NavLink>
        </Box>
      </form>
      </div>
    </Container >
  )
}

export default RestablcerContraseña
