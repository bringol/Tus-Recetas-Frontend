import React from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import {NavLink} from 'react-router-dom'; // <NavLink to='/Lugar' style={{ textDecoration: 'none' , color: 'white' }}>texto </NavLink>

const EditarPerfil = () => {

  const paperStyle = { padding: 20, height: '60vh', width: 400, margin: '20px auto' }
  const avatarStyle = { backgroundColor: '#1976d2' }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}> <CreateRoundedIcon /> </Avatar>
          <h2> Editar Perfil </h2>
        </Grid>
        <TextField id="standard-basic" label="Modificar nombre" variant="standard" size="small" fullWidth />
        <TextField id="standard-basic" label="Modificar apellido" variant="standard" size="small" fullWidth />
        <TextField id="standard-basic" label="Modificar correo electrónico" variant="standard" size="small" fullWidth />
        <TextField id="standard-basic" label="Modificar contraseña" variant="standard" size="small" fullWidth  /> 
        <TextField id="standard-basic" label="Confirmar contraseña" variant="standard" size="small" fullWidth  /> 
        <h2> </h2>
        <Button variant="contained" size="medium" align='center'>
        <NavLink to='/Home/User' style={{ textDecoration: 'none' , color: 'white' }}>Guardar cambios </NavLink>
          </Button>
      </Paper>
    </Grid>
  )
}

export default EditarPerfil