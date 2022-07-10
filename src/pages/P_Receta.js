import React,{Suspense} from "react"
import Footer from "../components/Footer"//sin el ../ no lo encuentra
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Receta from "../components/Receta4";

// const Receta = React.lazy(()=> {
//     //return import("../components/Receta2")
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve(import("../components/Receta2"))
//         },1000)
//     })



// });

export default function P_Receta() {
    return (
        <div>
            <Navbar />
            {/* <Suspense fallback={<h1>Loading profile...</h1>}> */}
                <Receta />
            {/* </Suspense> */}
            
            <Footer />
            <ScrollToTop />
        </div>
    );
}