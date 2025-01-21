// src/components/SideBar.tsx
// import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png"; // Import du logo
import "./CSS/SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      {/* Logo dans la Sidebar */}
      <div className="sidebar-logo">
        <img src={Logo} alt="Logo" className="logo-sidebar" />
      </div>

      {/* Boutons Connexion et Inscription */}
      <div className="sidebar-buttons">
        <Link to="/login">
          <button type="button" className="sidebar-button">
            Connexion
          </button>
        </Link>
        <Link to="/Creation_de_profil">
          <button type="button" className="sidebar-button">
            Créer mon compte
          </button>
        </Link>
      </div>

      {/* Autres éléments de la sidebar */}
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/">
              <button type="button" className="sidebar-button_footer">
                <img
                  src={"/src/assets/images/footer_icons/icon_marker.png"}
                  alt="marker"
                  className="sidebar-icon_footer"
                />
                <p>CARTE</p>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/classement">
              <button type="button" className="sidebar-button_footer">
                <img
                  src={"/src/assets/images/footer_icons/icon_ranking.png"}
                  alt="ranking"
                  className="sidebar-icon_footer"
                />
                <p>CLASSEMENT</p>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/regles">
              <button type="button" className="sidebar-button_footer">
                <img
                  src={"/src/assets/images/footer_icons/icon_rules.png"}
                  alt="rules"
                  className="sidebar-icon_footer"
                />
                <p>RÈGLES</p>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button type="button" className="sidebar-button_footer">
                <img
                  src={"/src/assets/images/footer_icons/icon_contact.png"}
                  alt="contact"
                  className="sidebar-icon_footer"
                />
                <p>CONTACTS</p>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="/Donnees_photo">
        <button type="button" className="button_camera">
          <img
            src={"/src/assets/images/footer_icons/icon_add.png"}
            alt="camera"
            className="icon_camera"
          />
        </button>
        <p>AJOUTER UNE ŒUVRE</p>
      </Link>
    </div>
  );
};

export default SideBar;
