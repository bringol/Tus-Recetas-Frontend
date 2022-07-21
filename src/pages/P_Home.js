import Footer from "../components/Footer"
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Registrarse from "../components/Registrarse";
import ScrollToTop from "../components/ScrollToTop";
import RecetaListadoFiltros from "../components/RecetaListadoFiltros";

export default function P_Home() {

    return (
    <div>
        <Navbar/>
        <Hero/>  
        <RecetaListadoFiltros/>
        <Registrarse/>
        <Footer/>
        <ScrollToTop />  
    </div>
    );
  }