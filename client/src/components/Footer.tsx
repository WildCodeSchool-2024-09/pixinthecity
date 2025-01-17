import "./CSS/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="/">
        <button type="button" className="button_footer">
          <img
            src={"/src/assets/images/footer_icons/icon_marker.png"}
            alt="marker"
            className="icon_footer"
          />
          <p>CARTE</p>
        </button>
      </Link>
      <Link to="/classement">
        <button type="button" className="button_footer">
          <img
            src={"/src/assets/images/footer_icons/icon_ranking.png"}
            alt="ranking"
            className="icon_footer"
          />
          <p>CLASSEMENT</p>
        </button>
      </Link>

      <button type="button" className="button_camera">
        <img
          src={"/src/assets/images/footer_icons/icon_camera.png"}
          alt="camera"
          className="icon_camera"
        />
      </button>
      <Link to="/regles">
        <button type="button" className="button_footer">
          <img
            src={"/src/assets/images/footer_icons/icon_rules.png"}
            alt="rules"
            className="icon_footer"
          />
          <p>RÈGLES</p>
        </button>
      </Link>
      <Link to="/contact">
        <button type="button" className="button_footer">
          <img
            src={"/src/assets/images/footer_icons/icon_contact.png"}
            alt="contact"
            className="icon_footer"
          />
          <p>CONTACTS</p>
        </button>
      </Link>
    </footer>
  );
}

export default Footer;
