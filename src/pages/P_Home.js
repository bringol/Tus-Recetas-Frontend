import { useEffect } from 'react';
import Footer from "../components/Footer"//sin el ../ no lo encuentra
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Registrarse from "../components/Registrarse";
import ScrollToTop from "../components/ScrollToTop";
import Search from "../components/Search";
import ProductsLogin from "../components/ProductsLogin";
import Products from "../components/Products";

export default function P_Home() {

    const loadData=async ()=>{
        //console.log(localStorage);
        localStorage.clear();
        //console.log(localStorage);
      }
    
      useEffect(()=>{
        loadData()
      },[])

    return (
    <div>
        <Navbar />
        <Hero /> 
        <Search />      
        <Products />
        <Registrarse/>
        <Footer />
        <Products />
        <ScrollToTop />  
    </div>
    );
  }