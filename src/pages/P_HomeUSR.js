import React from "react";
import Footer from "../components/Footer"//sin el ../ no lo encuentra
import Hero from "../components/Hero";
import NavbarUSR from "../components/NavbarUSR";
import Registrarse from "../components/Registrarse";
import Products from "../components/Products";
import ScrollToTop from "../components/ScrollToTop";
import Search from "../components/Search";
//import Newsletter from "./components/Newsletter";
//import Testimonials from "./components/Testimonials";
//import scrollreveal from "scrollreveal";


export default function P_HomeUSR() { //la pantalla que ve un usr desp del login exitoso
    return (
    <div>
        <ScrollToTop />
        <NavbarUSR />
        <Hero /> 
        <Search />
        <Products />        
        <Footer />
    </div>
    );
  }