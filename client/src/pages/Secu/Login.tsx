import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../components/CSS/Login.css";
import Logo from "../../assets/images/logo.png";

function Login() {
  const [localUserName, setLocalUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [, setIsLoggedIn] = useState<boolean>(false); // État de connexion - IsLoggedIn à ajouter dans la variable au moment venu
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (localUserName.trim() && password.trim()) {
      setIsLoggedIn(true);
      alert(`Bienvenue, ${localUserName}!`);
      navigate(""); // Redirection vers la page d'accueil

      // Réinitialisation des champs
      setLocalUserName("");
      setPassword("");
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  return (
    <>
      <section className="loginPage">
        <Link to="/">
          <img src={Logo} alt="Logo" id="logo" />
        </Link>
        <div className="formulaire">
          <form onSubmit={handleSubmit}>
            <div className="email">
              {" "}
              <label htmlFor="identifiant">EMAIL</label>
              <br />
              <input
                className="input_email"
                type="email"
                id="email"
                placeholder="email"
                value={localUserName}
                onChange={(e) => setLocalUserName(e.target.value)}
                required
              />
            </div>
            <div className="label2">
              <label htmlFor="mdp">MOT DE PASSE</label>
              <br />
              <input
                className="input_passeword"
                id="password"
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />{" "}
              <p id="text_password">MOT DE PASSE OUBLIÉ ?</p>
            </div>

            <button type="submit" className="login_button">
              CONNEXION
            </button>
          </form>
          <p className="text_visitor">ou</p>
          <button type="button" className="signup_button">
            CRÉER MON COMPTE
          </button>
          <div className="text_login">
            <p className="text_visitor">RESTER EN TANT QUE VISITEUR</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
