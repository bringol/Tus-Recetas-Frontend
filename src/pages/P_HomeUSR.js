import React from "react";
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import NavbarUSR from "../components/NavbarUSR";
import RecetasListadoLogin from "../components/RecetasListadoLogin";
import ScrollToTop from "../components/ScrollToTop";

export default function P_HomeUSR() { 
    return (
    <div>
        <ScrollToTop />
        <NavbarUSR />
        <Hero /> 
        <RecetasListadoLogin />        
        <Footer />
    </div>
    );
  }