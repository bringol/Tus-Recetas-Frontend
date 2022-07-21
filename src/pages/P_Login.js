import React from "react";
import Footer from "../components/Footer"
import NavbarVacio from "../components/NavbarVacio";
import ScrollToTop from "../components/ScrollToTop";
import Login from "../components/InicioSesion"



export default function P_Login() {
    return (
    <div>
        <ScrollToTop />
        <NavbarVacio />
        <Login/>
        <Footer />
    </div>
    );
  }