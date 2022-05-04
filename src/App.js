import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Registrarse from "./components/Registrarse";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./components/Search";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
//------
import OlvidoConstraseña from "./components/OlvidoContraseña"
import Registro from './components/Registro';
import RestablcerContraseña from './components/RestablecerContraseña'
import EditarPerfil from './components/EditarPerfil';

//----
import {BrowserRouter} from "react-router-dom" //permite el enrutatmiento
import {Route} from "react-router-dom" //define las rutas que se muestran en el URL y usa dos parámetros, en v6 es path y element 
import {Routes} from "react-router-dom" // <Route> debe estar dentro de <Routes> para que puede redirigir al componente. Si no existe el path, ahora muestra pantalla en blanco

//Páginas
import P_Home from "./pages/P_Home"
import P_HomeUSR from "./pages/P_HomeUSR"
import P_Login from "./pages/P_Login";
import P_Registo from "./pages/P_Registro";


export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #products,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  return (
    <>
    <BrowserRouter>
    {/* path='/nombre' element{<componente-destino/>}<---- cuando visite
    la ruta "/nombre", devuelve el componente "componente-destino"
    (debe estar en formato de componente)*/}
    

      <Routes>
      {/*incorporar navbar filtros, y los otros del homepage, dentro en una sola pagina*/}
      {/*Crear homepage similar al anterior, pero para cuando este logeado*/}   
        <Route path="*" element={<div><h1>Error 404 Página no encontrada</h1></div>} />
        <Route path="/Home" element={<P_Home/>} />
        <Route path="/Home/User" element={<P_HomeUSR/>} />
        <Route path="/Login" element={<P_Login/>} />
        <Route path="/Registro" element={<P_Registo/>} />


         {/*  <ScrollToTop />
          <Navbar />
          <Hero /> 
          <Search />
          <Products />
          <Registrarse/>
          <Footer /> */}
      </Routes>

    </BrowserRouter> 
    </>
    
  );
}
