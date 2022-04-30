import React from 'react';
import { Avatar, Grid, Paper, TextField, Button, Stack} from '@mui/material';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Registrarse = () => {

  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' }
  const avatarStyle = { backgroundColor: '#1976d2' }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}> <AppRegistrationRoundedIcon /> </Avatar>
          <h2> Registrarse </h2>
        </Grid>
        <TextField id="standard-basic" label="Nombre" variant="standard" size="small" fullWidth required />
        <TextField id="standard-basic" label="Apellido" variant="standard" size="small" fullWidth required />
        <TextField id="standard-basic" label="Telefono" variant="standard" size="small" fullWidth required />
        <TextField id="standard-basic" label="Correo electrónico" variant="standard" size="small" fullWidth required />
        <TextField id="standard-basic" label="Contraseña" variant="standard" type="password" size="small" fullWidth required />
        <TextField id="standard-basic" label="Confirme contraseña" variant="standard" type="password" size="small" fullWidth required />
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Acepto términos y condiciones" />
        </FormGroup>
        <Button variant="contained" size="medium" align='center'>Confirmar</Button>
      </Paper>
    </Grid>
  )
}

export default Registrarse
