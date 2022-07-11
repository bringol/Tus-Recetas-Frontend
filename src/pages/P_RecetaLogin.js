import React,{Suspense} from "react"
import Footer from "../components/Footer"//sin el ../ no lo encuentra
//import RecetaLogin from "../components/RecetaLogin";
import NavbarVacioUSR from "../components/NavbarVacioUSR";
import ScrollToTop from "../components/ScrollToTop";

const RecetaLogin = React.lazy(()=> {
    return import("../components/RecetaLogin")
});


export default function P_RecetaLogin() {
    return (
        <div>
            <NavbarVacioUSR />
            <Suspense fallback={<br/>}>
                <RecetaLogin />
            </Suspense>            
            <Footer />
            <ScrollToTop />
        </div>
    );
}