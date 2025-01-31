import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { useUser } from "../hooks/useUser"; // Import du hook personnalisé
import "./CSS/SideBar.css";

const SideBar = () => {
  const { user, setUser } = useUser(); // Accéder au contexte utilisateur
  const navigate = useNavigate(); // Utiliser le hook useNavigate pour la redirection

  const handleLogout = () => {
    setUser(null); // Déconnexion de l'utilisateur
    navigate("/"); // Redirection vers la page d'accueil après déconnexion
  };

  const goToProfile = () => {
    if (user) {
      navigate(`/Profil/${user.id}`); // Redirection vers le profil de l'utilisateur
    }
  };

  const goToEditProfile = () => {
    if (user) {
      navigate(`/Modification_de_profil/${user.id}`); // Redirection vers la modification du profil
    }
  };

  return (
    <section className="sidebar">
      <section id="sidebar-header">
        <div className="sidebar-logo">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo-sidebar" />
          </Link>
        </div>

        {user ? (
          <div className="sidebar-welcome">
            <span className="welcome_username">
              <p id="welcome">Bienvenue</p>
              <p id="header_username">{user.pseudo}</p>
            </span>
            <button
              type="button"
              className="sidebar-button-logged"
              onClick={goToProfile}
            >
              Voir mon profil
            </button>
            <button
              type="button"
              className="sidebar-button-logged"
              onClick={goToEditProfile}
            >
              Modifier mon profil
            </button>
            <button
              id="logout_btn"
              type="button"
              className="sidebar-button-logged"
              onClick={handleLogout}
            >
              Déconnexion
            </button>
          </div>
        ) : (
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
        )}
      </section>

      {/* Autres éléments de la sidebar */}
      <section id="sidebar-footer">
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
              <Link to="/affichage_photos">
                <button type="button" className="sidebar-button_footer">
                  <img
                    src={"/src/assets/images/footer_icons/icon_artwork.png"}
                    alt="ranking"
                    className="sidebar-icon_footer"
                  />
                  <p>ŒUVRES</p>
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

        {/* Bouton pour ajouter une œuvre */}
        <Link to="/Donnees_photo">
          <button type="button" className="button_camera">
            <img
              src={"/src/assets/images/footer_icons/icon_add.png"}
              alt="camera"
              className="icon_camera"
            />
          </button>
          <p id="add-artwork">AJOUTER UNE ŒUVRE</p>
        </Link>
      </section>
    </section>
  );
};

export default SideBar;
