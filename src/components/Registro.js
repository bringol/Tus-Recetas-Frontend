import React from 'react';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Avatar,Button,CssBaseline,TextField,Link,Grid,Typography,Container, Box,TextareaAutosize, Fab} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles'; 
//

import { NavLink } from 'react-router-dom'; // <NavLink to='/Lugar' style={{ textDecoration: 'none' , color: 'white' }}>texto </NavLink>

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: "100px",
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
    marginBottom: "100px",
    backgroundColor: "#834e6d",
  },
  centrado: {
    margin: '20px auto',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'justify',
    color: 'red'
  }
}));


const Registrarse = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">{/*ajustar para pantallas mas grandes*/}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AppRegistrationRoundedIcon />
        </Avatar>
        <h2> Registrarse </h2>
        <form className={classes.form} noValidate>
          <TextField id="standard-basic" label="Nombre" variant="standard" color="secondary" size="small" fullWidth required />
          <TextField id="standard-basic" label="Apellido" variant="standard" color="secondary" size="small" fullWidth required />
          <TextField id="standard-basic" label="Telefono" variant="standard" color="secondary" size="small" fullWidth required />
          <TextField id="standard-basic" label="Correo electrónico" variant="standard" color="secondary" size="small" fullWidth required />
          <TextField id="standard-basic" label="Contraseña" variant="standard" type="password" color="secondary" size="small" fullWidth required />
          <TextField id="standard-basic" label="Confirme contraseña" variant="standard" type="password" color="secondary" size="small" fullWidth required />

          {/* <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Acepto términos y condiciones" />
        </FormGroup> */}

          <Typography className={classes.centrado}>
            *Al seleccionar "Confirmar" usted estará aceptando nuestros términos y condiciones.
          </Typography>

          <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.botón}
                >
            <NavLink to='/Home/User' style={{ textDecoration: 'none', color: 'white' }}>Confirmar </NavLink>
          </Button>
        </form>
      </div>
    </Container>

  )
}

export default Registrarse