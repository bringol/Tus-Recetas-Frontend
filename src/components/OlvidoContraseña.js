import React from 'react';
import { Grid, Paper, Avatar } from '@mui/material';
import MailLockRoundedIcon from '@mui/icons-material/MailLockRounded';

const OlvidoConstraseña = () => {

  const paperStyle = { padding: 20, height: '30vh', width: 400, margin: '20px auto' }
  const avatarStyle = { backgroundColor: '#1976d2' }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}> <MailLockRoundedIcon /> </Avatar>
          <h2>  ¿Ha olvidado su contraseña?  </h2>
          <h3> Hemos enviado un mail a: </h3>
          <h4> *****@gmail.com  </h4>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default OlvidoConstraseña
