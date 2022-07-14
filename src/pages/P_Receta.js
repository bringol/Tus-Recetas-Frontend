import React,{Suspense} from "react"
import Footer from "../components/Footer"
import Navbar from "../components/NavbarVacio";
import ScrollToTop from "../components/ScrollToTop";
import Receta from "../components/Receta"

/*const Receta = React.lazy(()=> {
     return import("../components/Receta")
});*/

export default function P_Receta() {
    return (
        <div>
            <Navbar />
            <Suspense fallback={<br/>}>
                <Receta />
            </Suspense>            
            <Footer />
            <ScrollToTop />
        </div>
    );
}