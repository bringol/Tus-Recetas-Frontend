import React from "react";
import Footer from "../components/Footer"
import NavbarVacioUSR from "../components/NavbarVacioUSR";
import ScrollToTop from "../components/ScrollToTop";
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