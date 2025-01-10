import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "../../components/CSS/MdpOublie.css";

function MdpOublie() {
  return (
    <>
      <section className="MdpOublie">
        <Link to="/">
          <img src={Logo} alt="Logo" id="logo_login" />
        </Link>
        <div className="formulaire">
          <h2>MOT DE PASSE OUBLIÉ ?</h2>

          <form>
            <div className="email">
              <label htmlFor="identifiant">EMAIL</label>
              <input
                className="input_email"
                type="email"
                id="email"
                placeholder="email"
              />
            </div>
            <button type="submit" className="passeword_forget_button">
              ENVOYER UN MOT DE PASSE TEMPORAIRE
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default MdpOublie;
