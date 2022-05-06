import React, { useEffect } from "react";
import Footer from "../components/Footer"//sin el ../ no lo encuentra
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Registrarse from "../components/Registrarse";
import Products from "../components/Products";
import ScrollToTop from "../components/ScrollToTop";
import Search from "../components/Search";
import Testimonials from "../components/Testimonials";
//import Mis_Recetas from "../components/Mis_Recetas";
//import Newsletter from "../components/Mis_Recetas";

//import scrollreveal from "scrollreveal";

export default function P_Home() {
    return (
    <div>
        <ScrollToTop />
        <Navbar />
        <Hero /> 
        <Search />
        <Products />
        <Testimonials />
        <Registrarse/>
        {/* <Newsletter /> */}
        {/* <Mis_Recetas/> */}
        <Footer />
    </div>
    );
  }