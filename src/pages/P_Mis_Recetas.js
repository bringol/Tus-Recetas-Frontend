import React from "react";
import Footer from "../components/Footer"//sin el ../ no lo encuentra
import NavbarVacioUSR from "../components/NavbarVacioUSR";
import ScrollToTop from "../components/ScrollToTop";
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