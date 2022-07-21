import React from "react";
import Footer from "../components/Footer"
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