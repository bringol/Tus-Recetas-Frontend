import React from "react";
import Footer from "../components/Footer"
import NavbarPerfil from "../components/NavbarPerfil";
import EditarPerfil from "../components/EditarPerfil";



export default function P_Perfil() {
    return (
    <div>
        <NavbarPerfil />
        <EditarPerfil/>
        <Footer />
    </div>
    );
  }