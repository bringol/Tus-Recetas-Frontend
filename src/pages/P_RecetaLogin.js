import Footer from "../components/Footer"//sin el ../ no lo encuentra
import Receta from "../components/Receta";
import NavbarUSR from "../components/NavbarUSR";
import ScrollToTop from "../components/ScrollToTop";


export default function P_RecetaLogin() {
    return (
        <div>
            <NavbarUSR />
            <Receta />
            <Footer />
            <ScrollToTop />
        </div>
    );
}