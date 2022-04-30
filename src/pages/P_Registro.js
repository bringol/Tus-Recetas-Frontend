import React, { useEffect } from "react";
import Footer from "../components/Footer"//sin el ../ no lo encuentra
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Registro from "../components/Registro"


export default function P_Registo() {
    return (
    <div>
        <ScrollToTop />
        <Navbar />
        <Registro />
        <Footer />
    </div>
    );
  }