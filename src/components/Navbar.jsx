import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import {NavLink} from 'react-router-dom'; // <NavLink to='/Lugar' style={{ textDecoration: 'none' , color: 'white' }}>texto </NavLink>

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));
  return (
    <>
      <Nav>
        <div className="brand">
          <img src={logo} alt="Icon" />
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </div>
        <ul className="links">
          <li>
            <a href="#nosotros">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#busqueda">Buscar Receta</a>
          </li>
          <li>
            <a href="#recetas">Recetas</a>
          </li>
          <li>
            <a href="#registrarse">Registrarse</a>{/*Desplaza pantalla hacia abajo hasta alcanzar el componente Registrase*/}

          </li>
          <li>
            {/* <a href="#login">Iniciar Sesion</a> */}
            <NavLink to='/Login'>Iniciar Sesion </NavLink>
          </li>
        </ul>
      </Nav>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <ul>
          <li>
            <a
              href="#nosotros"
              className="active"
              onClick={() => setNavbarState(false)}
            >
              Nosotros
            </a>
          </li>
          <li>
            <a href="#busqueda" onClick={() => setNavbarState(false)}>
              Buscar Receta
            </a>
          </li>
          <li>
            <a href="#recetas" onClick={() => setNavbarState(false)}>
              Recetas
            </a>
          </li>
          <li>
            <a href="#registrarse" onClick={() => setNavbarState(false)}>
              Registrarse {/*Desplaza pantalla hacia abajo hasta alcanzar el componente Registrase*/}
            </a>
          </li>
          <li>
            {/* <a href="#login" onClick={() => setNavbarState(false)}> */}              
            <NavLink to='/Login'>Iniciar Sesion </NavLink>
            {/* </a> */}
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0 4vw;
  .brand {
    img {
      margin-top: 0rem;
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        color: #ffffff;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #000000;
        }
      }
      .active {
        color: #000000;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;
      .toggle {
        display: block;
      }
    }
    .links {
      display: none;
    }
  }
`;
const ResponsiveNav = styled.div`
  position: fixed;
  top: 0;
  right: -100vw;
  top: 0;
  z-index: 10;
  background-color: #834e6d;
  height: 80vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
 
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #ffffff;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #000000;
        }
      }
      &:first-of-type {
        a {
          color: #000000;
          font-weight: 900;
        }
      }
    }
  }
`;
