import React from "react";
import Footer from "../components/Footer"//sin el ../ no lo encuentra
import NavbarVacio from "../components/NavbarVacio";
import ScrollToTop from "../components/ScrollToTop";
import Registro from "../components/Registro"
import { Box } from '@mui/material';


export default function P_Registo() {
    return (
        <div>
            <NavbarVacio />
            <Box sx={{ mt: 5, mb: 10}}>
                <Registro />
            </Box>
            <Footer />
            <ScrollToTop />
        </div>
    );
}