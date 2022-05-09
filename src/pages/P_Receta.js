import Footer from "../components/Footer"//sin el ../ no lo encuentra
import Receta from "../components/Receta";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";


export default function P_Receta() {
    return (
        <div>
            <Navbar />
            <Receta />
            <Footer />
            <ScrollToTop />
        </div>
    );
}