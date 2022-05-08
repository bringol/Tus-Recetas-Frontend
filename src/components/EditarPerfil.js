import React from 'react';
import { CssBaseline, Container, Avatar, TextField, Button, Box } from '@mui/material';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { NavLink } from 'react-router-dom'; // <NavLink to='/Lugar' style={{ textDecoration: 'none' , color: 'white' }}>texto </NavLink>
import { makeStyles } from '@material-ui/core/styles';

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

const EditarPerfil = () => {

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateRoundedIcon />
        </Avatar>
        <h2> Editar Perfil </h2>
        <form className={classes.form} noValidate>
        <TextField id="standard-basic" label="Modificar nombre" variant="standard" size="small" color='secondary' fullWidth />
          <TextField id="standard-basic" label="Modificar apellido" variant="standard" size="small" color='secondary' fullWidth />
          <TextField id="standard-basic" label="Modificar correo electrónico" variant="standard" size="small" color='secondary' fullWidth />
          <TextField id="standard-basic" label="Modificar contraseña" variant="standard"  type="password" size="small" color='secondary' fullWidth />
          <TextField id="standard-basic" label="Confirmar contraseña" variant="standard"  type="password" size="small" color='secondary' fullWidth />

          <Box sx={{ mt: 5 }}>{/*margin top 5 pixeles https://mui.com/system/spacing/ */}
          <NavLink to='/Home/User' style={{ textDecoration: 'none', color: 'white' }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.botón}

            >
            Guardar cambios
            </Button></NavLink>
          </Box>
        </form>
      </div>
    </Container>
  )
}

export default EditarPerfil