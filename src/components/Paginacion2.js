// import React, {useState,useEffect,useRef } from "react";
// import styled from "styled-components";
// import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
// import { NavLink } from 'react-router-dom';
// // import Pagination from '@mui/material/Pagination';
// // import Stack from '@mui/material/Stack';
// // import Paginacion from "./Paginacion";
// import { makeStyles } from '@mui/styles';
// import { Button,Box, Typography } from '@mui/material';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// //import Pagination from '@mui/material/Pagination';
// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

// const useStyles = makeStyles(theme => ({
//   container: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       color: "#7c496acc",
//       padding: "10px 80px",
//   },
// }));


// export default function Paginacion(pagina,nroPagina){

//   const classes = useStyles();
//   const [pagina, setPagina] = useState(1);

//     function handleAnterior(){
//         setPagina((p)=>{
//         if(p===1)
//           return p
        
//         else
//           return p-1
//       })
//     }

//     function handleSiguiente(){
//         setPagina((p)=>{
//         if(p===nroPagina)
//           return p
//        else{
//         return (p+1)        
//       }
//       })
//     }


//   return (
//     <Grid container spacing={3}>
//       <Box mt={15}></Box>
//        <div className={classes.container}>        
//           <Button
//            disabled={pagina === 1} 
//            onClick={handleAnterior}
//            sx={{ fontSize: 50 }}
//            >
//              <ArrowBackIosIcon/>
//            </Button>
             
//           <Typography sx={{ fontSize: 50 }}>
//             {page}<MoreHorizIcon/>{nroPagina}
//           </Typography>
             
//           <Button
//            disabled={pagina === nroPagina} 
//            onClick={handleSiguiente}
//            sx={{ fontSize: 50 }}
//            >            
//              <ArrowForwardIosIcon/> 
//           </Button>        
//       </div>
//     </Grid>
    
//   );
// }
