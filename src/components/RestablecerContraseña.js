import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Box } from '@mui/material';
import SyncLockRoundedIcon from '@mui/icons-material/SyncLockRounded';
import {NavLink} from 'react-router-dom';


const RestablcerContraseña = () => {

  const paperStyle = { padding: 25, height: '30vh', width: 400, margin: '20px auto' }
  const avatarStyle = { backgroundColor: '#1976d2' }
  

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}> <SyncLockRoundedIcon /> </Avatar>
          <h2> Restablecer contraseña </h2>
        </Grid>
        <TextField id="standard-basic" label="Correo electrónico" variant="standard" size="small" fullWidth required />
        <TextField id="standard-basic" label="Nueva Contraseña" variant="standard" type="password" size="small" padding= "25" fullWidth required />
        <TextField id="standard-basic" label="Repetir Contraseña" variant="standard" type="password" size="small" padding= "25" fullWidth required />
        {/* <Button variant="contained" size="medium" align='center'>Confirmar</Button> */}
        <Box sx={{ mt: 5 }}>{/*margin top 5 pixeles https://mui.com/system/spacing/ */}
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary" 
                    
            >
              <NavLink to='/Home'style={{ textDecoration: 'none' , color: 'white' }}>Confirmar</NavLink>
            </Button>
        </Box>
      </Paper>
    </Grid>
  )
}

export default RestablcerContraseña
