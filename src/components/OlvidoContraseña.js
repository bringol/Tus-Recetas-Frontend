import React, {useState} from 'react';
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material';
import MailLockRoundedIcon from '@mui/icons-material/MailLockRounded';
import {NavLink} from 'react-router-dom';

import RestablcerContraseña from "../components/RestablecerContraseña";

const OlvidoConstraseña = () => {

  const paperStyle = { padding: 45, height: '35vh', width: 400, margin: '20px auto' }
  const avatarStyle = { backgroundColor: '#1976d2' }
  //toggle de componentes para Mostrar/Esconder el paso siguiente desp de la validacion
  const [toggle,setToggle] = useState(false)

  if(toggle === false)
  {

  
    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}> <MailLockRoundedIcon /> </Avatar>
            <h2>  ¿Ha olvidado su contraseña?  </h2>
            <h3> Hemos enviado un mail a: </h3>
            <h4> *****@gmail.com  </h4>
          </Grid>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Código de Validación"
              name="codigo"
              //autoComplete="email"
              autoFocus
            />

            <Button onClick={()=> setToggle(!toggle)}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"            
            >
              Siguiente            
              {/* <NavLink to='/Home/User'style={{ textDecoration: 'none' , color: 'white' }}>Siguiente</NavLink> */}
            </Button>
        
        </Paper>
        {/* {toggle && ( <RestablcerContraseña/>)} */}
    
      </Grid>

    )
  }
  else//le dio a Siguiente(paso a ser verdadero), por lo tanto muestro el otro componente
    return(<><RestablcerContraseña/></>)

}

export default OlvidoConstraseña
