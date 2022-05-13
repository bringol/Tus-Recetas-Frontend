import React from "react";
import Footer from "../components/Footer"//sin el ../ no lo encuentra
import NavbarVacioUSR from "../components/NavbarVacioUSR";
import ScrollToTop from "../components/ScrollToTop";
import {Box } from '@mui/material';
import ModificarReceta from "../components/ModificarReceta.js"



export default function P_RecetaNueva() {
    return (
    <div>
        <ScrollToTop />
        <NavbarVacioUSR />
        <Box mt={5}></Box>
        <ModificarReceta/>
        <Box mb={5}></Box>
        <Footer />
    </div>
    );
  }