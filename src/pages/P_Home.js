import React, { useEffect } from "react";
import Footer from "../components/Footer"//sin el ../ no lo encuentra
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Registrarse from "../components/Registrarse";
import Products from "../components/Products";
import ScrollToTop from "../components/ScrollToTop";
import Search from "../components/Search";
//import Newsletter from "./components/Newsletter";
//import Testimonials from "./components/Testimonials";
//import scrollreveal from "scrollreveal";

export default function P_Home() {
    return (
    <div>
        <ScrollToTop />
        <Navbar />
        <Hero /> 
        <Search />
        <Products />
        <Registrarse/>
        <Footer />
    </div>
    );
  }