import React from "react";
import Footer from "../components/Footer"
import NavbarVacio from "../components/NavbarVacio";
import ScrollToTop from "../components/ScrollToTop";
import OlvidoConstraseña from "../components/OlvidoContraseña";

export default function P_Olvido() {
    return (
    <div>
        <ScrollToTop />
        <NavbarVacio />
        <OlvidoConstraseña />
        <Footer />
        

    </div>
    );
  }