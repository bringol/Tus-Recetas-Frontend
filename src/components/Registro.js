import React from 'react';
import { Avatar, Grid, Paper, TextField, Button, Stack} from '@mui/material';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//
import Typography from "@mui/material/Typography"
import {NavLink} from 'react-router-dom'; // <NavLink to='/Lugar' style={{ textDecoration: 'none' , color: 'white' }}>texto </NavLink>


const Registrarse = () => {

  const paperStyle = { padding: 20, height: '80vh', width: 380, margin: '20px auto', display: 'flex',  flexDirection: 'column',  alignItems: 'center' }
  const avatarStyle = { backgroundColor: '#834e6d'}
  const centradoStyle= {padding: 10, margin: '20px auto', display: 'flex',  flexDirection: 'column',  textAlign: 'justify', color:'red'}

  return (
    <Grid maxWidth="xl">
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}> <AppRegistrationRoundedIcon /> </Avatar>
          <h2> Registrarse </h2>
        </Grid>
        <TextField id="standard-basic" label="Nombre" variant="standard" color="secondary" size="small" fullWidth required />
        <TextField id="standard-basic" label="Apellido" variant="standard" color="secondary" size="small" fullWidth required />
        <TextField id="standard-basic" label="Telefono" variant="standard" color="secondary" size="small" fullWidth required />
        <TextField id="standard-basic" label="Correo electrónico" variant="standard" color="secondary" size="small" fullWidth required />
        <TextField id="standard-basic" label="Contraseña" variant="standard" type="password" color="secondary" size="small" fullWidth required />
        <TextField id="standard-basic" label="Confirme contraseña" variant="standard" type="password" color="secondary" size="small" fullWidth required />
        
        {/* <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Acepto términos y condiciones" />
        </FormGroup> */}

        <Typography style={centradoStyle}> 
        *Al seleccionar "Confirmar" usted estará aceptando nuestros términos y condiciones.
        </Typography>
        <Button variant="contained" size="medium" align='center' color='secondary' >
        <NavLink to='/Home/User' style={{ textDecoration: 'none' , color: 'white'}}>Confirmar </NavLink>
          </Button>
      </Paper>
      
    </Grid>
  )
}

export default Registrarse