import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Classement() {
  return (
    <>
      <h2>Le classement</h2>
      <header>
        <Header />
      </header>

      <h3>Classement</h3>
      <p>
        Rappel des règles : 100 points pour truc 200 pour muches + lien pour les
        règles
      </p>

      <figure className="card">
        <h4>Nom_utilisateur</h4>
        <img src="http://avatar.fr" alt="avatar" />
        <p>200points</p>
        <p>
          <img src="http://badge.fr" alt="badge" />
        </p>
      </figure>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Classement;
