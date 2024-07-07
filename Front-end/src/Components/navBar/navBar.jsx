import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.styles.css";
import img1 from '../../../MULTIMEDIA/FotoFondoHome.png';

function Nav() {
  const handleGoToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="allnav-nav">
      <div className="title-nav">
        <NavLink onClick={handleGoToHome} className="navLink-title">
          <img src={img1} className="nav-logo" alt="Logo" />
        </NavLink>
      </div>
      <div className="navlink-nav">
        <NavLink to="/vehiculos" className="navlink-button">
          Vehículos
        </NavLink>
        <NavLink to="/servicios" className="navlink-button"> 
        Servicios 
        </NavLink>
        <NavLink to="/nosotros" className="navlink-button">
          Nosotros
        </NavLink>
        <NavLink to="/contactanos" className="navlink-button">
          Contacto
        </NavLink>
      </div>
    
    </div>
  );
}

export default Nav;
