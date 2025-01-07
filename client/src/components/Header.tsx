import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import "./CSS/Header.css";

function Header() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Login");
  };

  const handleSignup = () => {
    navigate("/Creation_de_profil");
  };

  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="Logo" id="logo" />
      </Link>
      <nav className="buttons">
        <button type="button" id="login_button" onClick={handleLogin}>
          CONNEXION
        </button>
        <button type="button" id="signup_button" onClick={handleSignup}>
          CREER MON COMPTE
        </button>
      </nav>
    </header>
  );
}

export default Header;
