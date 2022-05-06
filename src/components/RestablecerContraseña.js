import React from 'react';
import { CssBaseline, Container, Avatar, TextField, Button, Box } from '@mui/material';
import SyncLockRoundedIcon from '@mui/icons-material/SyncLockRounded';
import { NavLink } from 'react-router-dom';
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


const RestablcerContraseña = () => {

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SyncLockRoundedIcon />
        </Avatar>
        <h2> Restablecer contraseña </h2>

      <form className={classes.form} noValidate>
        <TextField id="standard-basic" label="Correo electrónico" variant="standard" size="small" color='secondary' fullWidth required />
        <TextField id="standard-basic" label="Nueva Contraseña" variant="standard" type="password" size="small" padding="25" color='secondary'  fullWidth required />
        <TextField id="standard-basic" label="Confirmar Nueva Contraseña" variant="standard" type="password" size="small" padding="25" color='secondary'  fullWidth required />
        {/* <Button variant="contained" size="medium" align='center'>Confirmar</Button> */}
        
        <Box sx={{ mt: 5 }}>{/*margin top 5 pixeles https://mui.com/system/spacing/ */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.botón}

          >
            <NavLink to='/Home' style={{ textDecoration: 'none', color: 'white' }}>Confirmar</NavLink>
          </Button>
        </Box>
      </form>
      </div>
    </Container >
  )
}

export default RestablcerContraseña
