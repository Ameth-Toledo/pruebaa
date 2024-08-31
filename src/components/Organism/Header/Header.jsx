import React from "react";
import "./Header.css"; // Archivo CSS para estilos

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="logo.png" alt="Logo" className="logo" /> {/* Reemplaza 'logo.png' con la ruta de tu logo */}
        <h1 className="title">CONCORD</h1>
      </div>
      <nav className="header-center">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Nosotros</a>
        <a href="#" className="nav-link">Servicios</a>
      </nav>
      <div className="header-right">
        <button className="login-button">Iniciar Sesión</button>
      </div>
    </header>
  );
};

export default Header;
