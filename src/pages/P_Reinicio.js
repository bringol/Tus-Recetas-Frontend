import React from "react";
import Footer from "../components/Footer"
import NavbarVacio from "../components/NavbarVacio";
import ScrollToTop from "../components/ScrollToTop";
import RestablcerContraseña from "../components/RestablecerContraseña";

export default function P_Reinicio() {
    return (
    <div>
        <ScrollToTop />
        <NavbarVacio />
        <RestablcerContraseña />
        <Footer />
    </div>
    );
  }