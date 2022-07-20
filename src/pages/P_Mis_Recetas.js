import React from "react";
import Footer from "../components/Footer"//sin el ../ no lo encuentra
import NavbarVacioUSR from "../components/NavbarVacioUSR";
import ScrollToTop from "../components/ScrollToTop";
//import Login from "../components/InicioSesion"

//
// import PublicarReceta from "../components/PublicarReceta";
// import Filtros from "../components/Filtros"
// import CuadroTexto from "../components/CuadroTexto";
import Mis_Recetas from "../components/Mis_Recetas";
import MisRecetaUser from "../components/MisRecetaUser";
import PublicarReceta from "../components/PublicarReceta";


export default function P_Mis_Recetas() {
    return (
        <div>
            <ScrollToTop />
            <NavbarVacioUSR />
            <MisRecetaUser />
            <Footer />

        </div>
    );
}