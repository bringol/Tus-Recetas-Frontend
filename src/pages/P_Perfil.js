import React from "react";
import Footer from "../components/Footer"//sin el ../ no lo encuentra
import NavbarVacioUSR from "../components/NavbarVacioUSR";
import ScrollToTop from "../components/ScrollToTop";
//import Login from "../components/InicioSesion"

//test
// import OlvidoConstraseña from "../components/OlvidoContraseña";
// import RestablcerContraseña from "../components/RestablecerContraseña";
import EditarPerfil from "../components/EditarPerfil";



export default function P_Perfil() {
    return (
    <div>
        <ScrollToTop />
        <NavbarVacioUSR />
        <EditarPerfil/>
        <Footer />
    </div>
    );
  }