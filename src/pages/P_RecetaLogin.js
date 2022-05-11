import Footer from "../components/Footer"//sin el ../ no lo encuentra
import RecetaLogin from "../components/RecetaLogin";
import NavbarUSR from "../components/NavbarUSR";
import ScrollToTop from "../components/ScrollToTop";


export default function P_RecetaLogin() {
    return (
        <div>
            <NavbarUSR />
            <RecetaLogin />
            <Footer />
            <ScrollToTop />
        </div>
    );
}