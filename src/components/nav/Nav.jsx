import React from "react";
import Logo from "../../assets/logo.png";
import "./nav.css";
import BurguerButton from "../Hamburguer/Hamburguer";



const Nav = () => {
  return (
    <>
      <nav className="navigation">
        <div className="containerNav">
          <a href="">
            <img className="logo" src={Logo}></img>
          </a>
          <h1 className="title_header">
            <a href="title1" className="title1">
              Las brisas del sabor
            </a>
          </h1>
          <ul className="nav_menu active">
            <li>
              <a href="">inicio</a>
            </li>
            <li>
              <a href="">Nosotros</a>
            </li>
            <li>
              <a href="">Catalogo</a>
            </li>
            <li>
              <a href="">Carrito</a>
            </li>
            <li>
              <a href="">Comprar</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
          <button className="cartIcon">
            <svg
              className="cart_icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </button>
          <div className="burguer_nav">
            <BurguerButton/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
