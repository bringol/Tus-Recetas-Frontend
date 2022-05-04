import React from 'react';
//import {Avatar,Button,CssBaseline,TextField,Link,Grid,Typography,Container} from '@mui/material';
import {Avatar,Button,CssBaseline,TextField,Link,Grid,Typography,Container} from '@material-ui/core/';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles } from '@material-ui/core/styles'; //sin esto no funciona por más que lo actualice, probar de sacar el resto para la v5
import {NavLink} from 'react-router-dom'; //<NavLink to='/lugar'></NavLink>


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
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function InicioSesion() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="contraseña"
            label="Contraseña"
            type="password" //si no está escrito así se ven los caracteres
            id="contraseña"
            autoComplete="contraseña-actual"
          />
          
          <Link href="#" variant="body2">
                Olvidé Mi Contraseña
              </Link>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <NavLink to='/Home/User'style={{ textDecoration: 'none' , color: 'white' }}>Ingresar </NavLink>
          </Button>
          <Grid container>
            
            <Grid item xs>
              <Typography  variant="body2">
                ¿No tienes cuenta?
              </Typography>
            </Grid>
            <Grid item xs>
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