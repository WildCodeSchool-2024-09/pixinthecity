import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { useUser } from "../hooks/useUser"; // Import du hook personnalisé
import "./CSS/Header.css";

function Header() {
  const { user, setUser, isAuthenticated } = useUser();

  //console.log(isAuthenticated);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Login");
  };

  const handleSignup = () => {
    navigate("/Creation_de_profil");
  };

  const handleLogout = () => {
    setUser(null); // Déconnecte l'utilisateur en réinitialisant le contexte
    navigate("/"); // Redirige vers la page d'accueil
  };

  const goToProfile = () => {
    if (user) {
      navigate(`/Profil/${user.id}`);
    }
  };

  const goToEditProfile = () => {
    if (user) {
      navigate(`/Modification_de_profil/${user.id}`);
    }
  };

  return (
    <header className="header">
      {/* Logo à gauche */}
      <Link to="/">
        <img src={Logo} alt="Logo" id="logo" />
      </Link>

      {/* Boutons à droite */}
      <nav className="buttons">
        {isAuthenticated === true ? (
          <>
            {/* Bienvenue + Pseudo centré */}
            {user && (
              <div className="center-container">
                <span className="welcome_username">
                  <p id="welcome">Bienvenue</p>
                  <p id="header_username">{user.pseudo}</p>
                </span>
              </div>
            )}

            <button
              type="button"
              className="button_header"
              onClick={goToProfile}
            >
              VOIR MON PROFIL
            </button>
            <button
              type="button"
              className="button_header"
              onClick={goToEditProfile}
            >
              MODIFIER PROFIL
            </button>
            <button
              type="button"
              className="button_header"
              onClick={handleLogout}
            >
              DÉCONNEXION
            </button>
          </>
        ) : (
          <>
            <button type="button" id="login_button" onClick={handleLogin}>
              CONNEXION
            </button>
            <button type="button" id="signup_button" onClick={handleSignup}>
              CRÉER MON COMPTE
            </button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
