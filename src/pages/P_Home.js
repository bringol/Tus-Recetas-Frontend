import Footer from "../components/Footer"//sin el ../ no lo encuentra
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Registrarse from "../components/Registrarse";
import ScrollToTop from "../components/ScrollToTop";
import Search from "../components/Search";
import ProductsLogin from "../components/ProductsLogin";
//import Mis_Recetas from "../components/Mis_Recetas";
//import Newsletter from "../components/Mis_Recetas";
//import scrollreveal from "scrollreveal";

export default function P_Home() {
    return (
    <div>
        <Navbar />
        <Hero /> 
        <Search />      
        <ProductsLogin />
        <Registrarse/>
        <Footer />
        <ScrollToTop />  
    </div>
    );
  }