import "./Regles.css";
// import rue from "../../assets/videos/homepage.mp4";

function Regles() {
  return (
    <>
      {/* <video className="video-background" autoPlay loop muted>
        <source src={rue} type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video> */}
      <div className="container">
        {/* <img className="logo" src="./src/assets/images/logo.png" alt="logo" /> */}
        <h1>
          Prêts à vivre l’aventure ? Découvrez nos règles et rejoignez-nous!
        </h1>
        <h2>Des règles simples pour une aventure inoubliable.</h2>
        <h2>
          Vous parcourez les rues comme un historien moderne, redécouvrant les
          trésors cachés de nos villes.
        </h2>
        <h2>
          Des récompenses pour les contributeurs assidus, avec un classement
          officiel.
        </h2>
        <h3>Système de Points</h3>
        <ul>
          <li>
            Soumission d'une œuvre avec photo et localisation valide : +50
            points.
          </li>
          <li>
            Première soumission d'une œuvre dans une nouvelle ville/quartier :
            +100 points.
          </li>
          <li>Signalement d'une œuvre disparue (avec preuve) : +30 points</li>
          <li>
            Soumission d'une œuvre avec photo et localisation valide : +50
            points.
          </li>
        </ul>
        <h3>Système de Badges</h3>
        <p>
          Les badges sont des récompenses visuelles qui sont attribués aux
          contributeurs :
        </p>
        <h4>Par contribution</h4>
        <ul>
          <li>
            Découvreur Novice : Soumettre 5 œuvres.
            {/* <img src="\src\assets\images\novice.jpg" alt="novice" /> */}
          </li>
          <li>
            Photographe de Rue : Soumettre 50 œuvres.
            {/* <img src="\src\assets\images\photographe.png" alt="photographe" /> */}
          </li>
          <li>
            Archiviste : Soumettre 200 œuvres.
            {/* <img src="\src\assets\images\archiviste.jpg" alt="archiviste" /> */}
          </li>
        </ul>
        <h4>Par engagement géographique</h4>
        <ul>
          <li>
            Explorateur Local : Soumettre des œuvres dans 3 quartiers d'une même
            ville.
            {/* <img
              src="\src\assets\images\explorateur_local.jpg"
              alt="explorateur"
            /> */}
          </li>

          <li>
            Globe-Trotter Urbain : Soumettre des œuvres dans 2 villes
            différentes.
            {/* <img src="\src\assets\images\globe_trotteur.png" alt="globe" /> */}
          </li>
        </ul>
        <h4>Badges spéciaux</h4>
        <ul>
          <li>
            Découverte Rare : Soumettre une œuvre d’un artiste renommé.
            {/* <img
              src="\src\assets\images\decouverte_rare.jpg"
              alt="decouverte"
            /> */}
          </li>
          <li>
            Oeil de Lynx : Soumettre une œuvre difficile à localiser.
            {/* <img src="\src\assets\images\oeil_de_lynx.png" alt="oeil" /> */}
          </li>
        </ul>
        <h3>Niveaux</h3>
        <p>
          Les niveaux permettent de suivre la progression globale des
          contributeurs en fonction du total de points accumulés. Plus vous
          aurez de points plus vous serez au sommet de la pyramide :
        </p>
        <ul>
          <li>Passant Curieux (0-499 points)</li>
          <li>Apprenti Explorateur (500-999 points)</li>
          <li>Chercheur Urbain (1,000-2,499 points)</li>
          <li>Découvreur Passionné (2,500-4,999 points)</li>
          <li>Conservateur de Rue (5,000-9,999 points)</li>
          <li>Légende du Street Art (10,000+ points)</li>
        </ul>
        <div className="boutton">
          <button type="button">Me connecter</button>
          <button type="button">Créer mon compte</button>
          <button type="button">Rester en tant que visiteur (dommage !)</button>
        </div>
      </div>
    </>
  );
}

export default Regles;
