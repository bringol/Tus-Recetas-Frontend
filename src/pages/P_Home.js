import Footer from "../components/Footer"
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Registrarse from "../components/Registrarse";
import ScrollToTop from "../components/ScrollToTop";
import Recetas from "../components/RecetasListado";
import Busqueda from "../components/RecetaListadoFiltros";
import Box from '@mui/material/Box';

export default function P_Home() {

    return (
    <div>
        <Navbar/>
        <Hero/>
        <Recetas/>
        <Box mt={35} mb={55}>          
            <Registrarse/>
        </Box>
        <Busqueda/>
        <Box mt={55}></Box>
        <Footer/>
        <ScrollToTop />  
    </div>
    );
  }