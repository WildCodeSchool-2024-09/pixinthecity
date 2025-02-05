import { Link, useNavigate } from "react-router-dom";
import "../../components/CSS/Login.css";
import Cookies from "js-cookie";
import { type FormEventHandler, useContext, useRef, useState } from "react";
import Logo from "../../assets/images/logo.png";
import { UserContext } from "../../contexts/UserContext"; // Importer le UserContext

function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState<string>("");
  const { setUser } = useContext(UserContext) || {}; // Utilisation d'une valeur par défaut si UserContext est undefined
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current?.value,
            password: password,
          }),
        },
      );

      if (response.status === 200) {
        const data = await response.json();
        const token = data.token;

        // Stocker le token dans un cookie
        Cookies.set("authToken", token, {
          expires: 7, // Expiration dans 7 jours
          path: "/",
          secure: true,
          sameSite: "Strict",
        });

        if (setUser) {
          setUser(data.user); // Met à jour l'état de l'utilisateur
        }

        navigate(`/Profil/${data.user.id}`);
        // window.location.reload(); // Rafraîchir la page pour recharger l'état
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="loginPage">
      <Link to="/">
        <img src={Logo} alt="Logo" id="logo_login" />
      </Link>
      <section className="labels_container">
        <div className="formulaire">
          <form onSubmit={handleSubmit}>
            <div className="email">
              <label htmlFor="identifiant">EMAIL</label>
              <br />
              <input
                className="input_email"
                type="email"
                id="email"
                placeholder="email"
                ref={emailRef}
                required
              />
            </div>
            <div className="label2">
              <label htmlFor="mdp">MOT DE PASSE</label>
              <br />
              <input
                className="input_password"
                id="password"
                placeholder="mot de passe"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login_button">
              CONNEXION
            </button>
          </form>
          <p className="text_visitor">OU</p>
          <Link to="/Creation_de_profil">
            <button type="button" className="signup_button">
              CRÉER MON COMPTE
            </button>
          </Link>
          <div className="text_login">
            <Link to="/">
              <p className="text_visitor">RESTER EN TANT QUE VISITEUR</p>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Login;
