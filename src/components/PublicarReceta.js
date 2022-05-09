import React from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container, Box, TextareaAutosize, Fab } from '@mui/material';
//import {Avatar,Button,CssBaseline,TextField,Link,Grid,Typography,Container} from '@material-ui/core/';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { makeStyles } from '@material-ui/core/styles'; //sin esto no funciona por más que lo actualice, probar de sacar el resto para la v5
import { NavLink } from 'react-router-dom'; //<NavLink to='/lugar'></NavLink>
import Filtros from "../components/Filtros";
import CuadroTexto from "../components/CuadroTexto";
import SubirFoto from './SubirFoto';

const receta = {
  id: 1, nombre: "hamburguesa", cat: "carnes", dificultad: "media"

}

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
    marginBottom: "220px",
    backgroundColor: "#834e6d",
  },
}));

export default function PublicarReceta() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">{/*ajustar para pantallas mas grandes*/}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <UploadFileIcon />
        </Avatar>
        <h2> Nueva Receta</h2>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            color='secondary'
            required
            fullWidth
            id="titulo"
            label="Título"
            name="titulo"
            //autoComplete="email"
            autoFocus
            value="mititulo"
          />

          <Filtros />

          <Box sx={{ mt: 2 }}>
          <TextField
          id="outlined-multiline-flexible"
          label="Ingredientes"
          color='secondary'
          width='300px'
          multiline
          maxRows={3}

         
        />
          </Box>

          <Box sx={{ mt: 2 }}>
            <CuadroTexto label="Procedimiento" placeholder="Describir el procedimiento" color="secondary" /> {/*Pasar placeholder y label como prop */}
          </Box>

          {/* <TextField
            name="upload-photo"
            type="file"
            /> */}
          <Box
            sx={{
              mt: 5, display: 'flex',
              flexDirection: 'column',
              color: 'secondary',
              alignItems: 'center'
            }}>

            <SubirFoto />
          </Box>

          <Box sx={{ mt: 5 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.botón}
            >
              <NavLink to='/Home/User' style={{ textDecoration: 'none', color: 'white' }}>Publicar Receta </NavLink>
            </Button>
          </Box>



        </form>
        {/* <TextareaAutosize
                maxRows={12}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                fullWidth
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua."
                maxWidth="xl"
            /> */}
      </div>

    </Container>
  );
}