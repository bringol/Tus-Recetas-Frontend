import React from "react";
import Footer from "../components/Footer"//sin el ../ no lo encuentra
import NavbarVacio from "../components/NavbarVacio";
import ScrollToTop from "../components/ScrollToTop";
import Login from "../components/InicioSesion"

//
import PublicarReceta from "../components/PublicarReceta";
import Filtros from "../components/Filtros"
import CuadroTexto from "../components/CuadroTexto";


export default function P_Perfil() {
    return (
    <div>
        <ScrollToTop />
        <NavbarVacio />
        <PublicarReceta/>
        {/* <Filtros /> */}
        <Footer />
    </div>
    );
  }