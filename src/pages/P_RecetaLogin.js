import React,{Suspense} from "react"
import Footer from "../components/Footer"//sin el ../ no lo encuentra
//import RecetaLogin from "../components/RecetaLogin";
import NavbarUSR from "../components/NavbarUSR";
import ScrollToTop from "../components/ScrollToTop";

const RecetaLogin = React.lazy(()=> {
    return import("../components/RecetaLogin")
});


export default function P_RecetaLogin() {
    return (
        <div>
            <NavbarUSR />
            <Suspense fallback={<br/>}>
                <RecetaLogin />
            </Suspense>            
            <Footer />
            <ScrollToTop />
        </div>
    );
}