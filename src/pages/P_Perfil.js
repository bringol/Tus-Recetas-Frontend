import React from "react";
import Footer from "../components/Footer"//sin el ../ no lo encuentra
import NavbarVacio from "../components/NavbarVacio";
import ScrollToTop from "../components/ScrollToTop";
import Login from "../components/InicioSesion"

//test
import OlvidoConstraseña from "../components/OlvidoContraseña";
import RestablcerContraseña from "../components/RestablecerContraseña";
import EditarPerfil from "../components/EditarPerfil";



export default function P_Perfil() {
    return (
    <div>
        <ScrollToTop />
        <NavbarVacio />
        <EditarPerfil/>
        <Footer />
    </div>
    );
  }