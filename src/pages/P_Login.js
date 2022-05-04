import React from "react";
import Footer from "../components/Footer"//sin el ../ no lo encuentra
import NavbarVacio from "../components/NavbarVacio";
import Hero from "../components/Hero";
import ScrollToTop from "../components/ScrollToTop";
import Login from "../components/InicioSesion"

//test
import OlvidoConstraseña from "../components/OlvidoContraseña";
import ValidarContraseña from "../components/ValidarContraseña";
import RestablcerContraseña from "../components/RestablecerContraseña";
import EditarPerfil from "../components/EditarPerfil";



export default function P_Login() {
    return (
    <div>
        <ScrollToTop />
        <NavbarVacio />
        <Login/>
        <Footer />
        <h1>test</h1>
        <OlvidoConstraseña /> {/*agregar ingreso codigo y boton siguiente*/}
        {/*<ValidarContraseña /> tira errores*/}
        <RestablcerContraseña /> {/*acomodar,agregar repetir contraseña y sacar código validacion*/}
        <EditarPerfil />{/*acomodar y nublar campos contraseña*/}

    </div>
    );
  }