import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../components/CSS/Login.css";
import type { FormEventHandler } from "react";
import Logo from "../../assets/images/logo.png";

function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [, setLocalUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  //const [, setIsLoggedIn] = useState<boolean>(false); // État de connexion - IsLoggedIn à ajouter dans la variable au moment venu
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    try {
      // Appel à l'API pour créer un nouvel utilisateur
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email:
              /* rendering process ensures the ref is defined before the form is submitted */
              (emailRef.current as HTMLInputElement).value,
            password,
          }),
        },
      );
      // Redirection vers la page de connexion si la création réussit
      if (response.status === 200) {
        // alert(`Bienvenue, ${localUserName}!`);
        // implementer toastify
        const data = await response.json();
        navigate(`/Profil/${data.user.id}`);
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  return (
    <>
      <section className="loginPage">
        <Link to="/">
          <img src={Logo} alt="Logo" id="logo_login" />
        </Link>
        <section className="labels_container">
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
                  ref={emailRef}
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
                  placeholder="mot de passe"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />{" "}
                {/* <p id="text_password">MOT DE PASSE OUBLIÉ ?</p> */}
              </div>
              {/*<Link to="/">*/}
              <button type="submit" className="login_button">
                CONNEXION
              </button>
              {/*</Link>*/}
            </form>
            <p className="text_visitor">OU</p>
            <Link to="/Creation_de_profil">
              {" "}
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
    </>
  );
}

export default Login;
