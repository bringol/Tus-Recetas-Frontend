import React from "react";
import Footer from "../components/Footer"//sin el ../ no lo encuentra
import NavbarPerfil from "../components/NavbarPerfil";
import EditarPassword from "../components/EditarPassword";



export default function P_Perfil() {
    return (
    <div>
        <NavbarPerfil />
        <EditarPassword/>
        <Footer />
    </div>
    );
  }