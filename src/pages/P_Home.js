import { useEffect } from 'react';
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Registrarse from "../components/Registrarse";
import ScrollToTop from "../components/ScrollToTop";
import RecetaListadoFiltros from "../components/RecetaListadoFiltros";
import { Box } from '@mui/material';

export default function P_Home() {

    /*const loadData=async ()=>{
        //console.log(localStorage);
        localStorage.clear();
        //console.log(localStorage);
      }
    
      useEffect(()=>{
        loadData()
      },[])*/

    return (
    <div>
        <Navbar/>
        <Hero/>        
        <RecetaListadoFiltros/>
        <Registrarse/>
        <Footer/>
        <ScrollToTop />  
    </div>
    );
  }