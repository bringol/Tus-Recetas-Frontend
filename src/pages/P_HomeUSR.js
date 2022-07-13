import React from "react";
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import NavbarUSR from "../components/NavbarUSR";
import RecetasListadoLogin from "../components/RecetasListadoLogin";
import ScrollToTop from "../components/ScrollToTop";
import Search from "../components/Search";


export default function P_HomeUSR() { //la pantalla que ve un usr desp del login exitoso
    return (
    <div>
        <ScrollToTop />
        <NavbarUSR />
        <Hero /> 
        <Search />
        <RecetasListadoLogin />        
        <Footer />
    </div>
    );
  }