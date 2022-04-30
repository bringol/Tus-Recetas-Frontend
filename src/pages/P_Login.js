import React from "react";
import Footer from "../components/Footer"//sin el ../ no lo encuentra
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ScrollToTop from "../components/ScrollToTop";
import Login from "../components/InicioSesion"



export default function P_Login() {
    return (
    <div>
        <ScrollToTop />
        <Navbar />
        <Login/>
        <Hero /> 
        <Footer />
    </div>
    );
  }