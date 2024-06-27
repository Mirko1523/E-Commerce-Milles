import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.styles.css";

function Nav() {
   const handleGoToHome = () => {
    window.location.href = "/";
  };
  return (
    <div className="allnav-nav">
      <div className="title-nav">
        <NavLink onClick={handleGoToHome} className="navLink-title"><h1>Milles</h1></NavLink>
      </div>
      <div className="navlink-nav">
        <NavLink to="/vehiculos" className="navlink-button">
          Vehiculos
        </NavLink>
        <NavLink to="/contactanos" className="navlink-button">
          Nosotros
        </NavLink>
        <NavLink to="/b" className="navlink-button">
          Contacto
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
