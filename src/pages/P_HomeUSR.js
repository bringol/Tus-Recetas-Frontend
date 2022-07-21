import React from "react";
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import NavbarUSR from "../components/NavbarUSR";
import RecetasListadoLogin from "../components/RecetasListadoLogin";
import ScrollToTop from "../components/ScrollToTop";
import BusquedaUSR from "../components/RecetasListadoFiltrosUSR";
import Box from '@mui/material/Box';

export default function P_HomeUSR() { 
    return (
    <div>
        <ScrollToTop />
        <NavbarUSR />
        <Hero />      
        <RecetasListadoLogin /> 
        <Box mt={55}></Box>
        <BusquedaUSR />
        <Box mt={55}></Box>       
        <Footer />
    </div>
    );
  }