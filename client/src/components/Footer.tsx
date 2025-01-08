import "./CSS/Footer.css";

function Footer() {
  return (
    <footer>
      <button type="button" className="button_footer">
        <img
          src={"/src/assets/images/footer_icons/icon_marker.png"}
          alt="marker"
          className="icon_footer"
        />
        <p>CARTE</p>
      </button>
      <button type="button" className="button_footer">
        <img
          src={"/src/assets/images/footer_icons/icon_ranking.png"}
          alt="ranking"
          className="icon_footer"
        />
        <p>CLASSEMENT</p>
      </button>
      <button type="button" className="button_camera">
        <img
          src={"/src/assets/images/footer_icons/icon_camera.png"}
          alt="camera"
          className="icon_camera"
        />
      </button>
      <button type="button" className="button_footer">
        <img
          src={"/src/assets/images/footer_icons/icon_rules.png"}
          alt="rules"
          className="icon_footer"
        />
        <p>RÈGLES</p>
      </button>
      <button type="button" className="button_footer">
        <img
          src={"/src/assets/images/footer_icons/icon_contact.png"}
          alt="contact"
          className="icon_footer"
        />
        <p>CONTACT</p>
      </button>
    </footer>
  );
}

export default Footer;
