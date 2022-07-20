import React from "react";
import Footer from "../components/Footer"//sin el ../ no lo encuentra
import NavbarVacioUSR from "../components/NavbarVacioUSR";
import ScrollToTop from "../components/ScrollToTop";
import {Box } from '@mui/material';
import EditarReceta from "../components/EditarReceta.js"

export default function P_RecetaNueva() {
    return (
    <div>
        <ScrollToTop />
        <NavbarVacioUSR />
        <EditarReceta/>
        <Footer />
    </div>
    );
  }