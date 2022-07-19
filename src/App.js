import React, { useEffect } from "react";
import scrollreveal from "scrollreveal";
import {BrowserRouter} from "react-router-dom" //permite el enrutatmiento
import {Route} from "react-router-dom" //define las rutas que se muestran en el URL y usa dos parámetros, en v6 es path y element 
import {Routes} from "react-router-dom" // <Route> debe estar dentro de <Routes> para que puede redirigir al componente. Si no existe el path, ahora muestra pantalla en blanco

//Páginas
import P_Home from "./pages/P_Home";
import P_HomeUSR from "./pages/P_HomeUSR";
import P_Login from "./pages/P_Login";
import P_Registo from "./pages/P_Registro";
import P_Olvido from "./pages/P_Olvido";
import P_Reinicio from "./pages/P_Reinicio";
import P_Password from "./pages/P_Password";
import P_Perfil from "./pages/P_Perfil";
import P_RecetaNueva from "./pages/P_RecetaNueva";
import P_Mis_Recetas from "./pages/P_Mis_Recetas";
import P_Receta from "./pages/P_Receta";
import P_RecetaLogin from "./pages/P_RecetaLogin";
import P_ModificarReceta from "./pages/P_ModificarReceta";

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
        <Route path="*" element={<div><h1>Error 404 página no encontrada</h1></div>} />
        <Route path="/home" element={<P_Home/>} />
        <Route path="/home/user" element={<P_HomeUSR/>} />
        <Route path="/login" element={<P_Login/>} />
        <Route path="/registro" element={<P_Registo/>} />
        <Route path="/olvido" element={<P_Olvido/>} />
        <Route path="/reinicio/:token" element={<P_Reinicio/>} />
        <Route path="/user/perfil" element={<P_Perfil/>} />
        <Route path="/user/password" element={<P_Password/>} />
        <Route path="/user/recetas" element={<P_Mis_Recetas/>} />
        <Route path="/user/receta/publicar" element={<P_RecetaNueva/>} />
        <Route path="/user/receta/modificar/:id" element={<P_ModificarReceta/>} />
        <Route path="/receta/:id" element={<P_Receta/>} />
        <Route path="/login/receta/:id" element={<P_RecetaLogin/>} />
      </Routes>

    </BrowserRouter> 
    </>

  );
}
