import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import styled from "styled-components";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#7c496acc",
        padding: "10px 80px",
        widht: "100%"
    },
}));

const Paginacion2 = (page, pageCount) => {
    const classes = useStyles();

    function handleAnterior(){
        setPage((p)=>{
          if(p===1)
            return p
          
          else
            return p-1
        })
      }
  
      function handleSiguiente(){
        setPage((p)=>{
          if(p===pageCount)
            return p
         else 
          return p+1
        })
      }

    return (
        <div className={classes.container}>        
          <button
            disabled={page === 1}
            onClick={handleAnterior}
            > ⬅️
            </button>

          <>{page}...{pageCount}</>

          <button
            disabled={page === pageCount}
            onClick={handleSiguiente}
            > ➡️ 
           </button>
      </div>
    );
}

export default Paginacion;