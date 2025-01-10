import "./Contact.css";
import Header from "../../components/Header";

function Contact() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="title">
          <h1>CONTACTS</h1>
        </div>
        <div className="RS">
          <div className="box">
            <a href="http://facebook.com">
              <img
                src={"/src/assets/images/contacts/icon_facebook.png"}
                alt="logo_facebook"
              />
              FACEBOOK
            </a>
          </div>
          <div className="box">
            <a href="http://instagram.com">
              <img
                src={"/src/assets/images/contacts/icon_instagram.png"}
                alt="logo_instagram"
              />
              INSTAGRAM
            </a>
          </div>
          <div className="box">
            <a href="http://x.com">
              <img
                src={"/src/assets/images/contacts/icon_X.png"}
                alt="logo_X"
              />
              X
            </a>
          </div>
          <div className="box">
            <a href="http://Mail.com">
              <img
                src={"/src/assets/images/contacts/icon_mail.png"}
                alt="logo_mail"
              />
              MAIL
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
