import React from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material';
import SyncLockRoundedIcon from '@mui/icons-material/SyncLockRounded';

const RestablcerContraseña = () => {

  const paperStyle = { padding: 20, height: '45vh', width: 400, margin: '20px auto' }
  const avatarStyle = { backgroundColor: '#1976d2' }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}> <SyncLockRoundedIcon /> </Avatar>
          <h2> Restablecer contraseña </h2>
        </Grid>
        <TextField id="standard-basic" label="Correo electrónico" variant="standard" size="small" fullWidth required />
        <TextField id="standard-basic" label="Contraseña" variant="standard" type="password" size="small" fullWidth required />
        <TextField id="standard-basic" label="Codigo de validación" variant="standard" size="small" fullWidth required /> 
        <h2>  </h2>
        <Button variant="contained" size="medium" align='center'>Confirmar</Button>
      </Paper>
    </Grid>
  )
}

export default RestablcerContraseña
