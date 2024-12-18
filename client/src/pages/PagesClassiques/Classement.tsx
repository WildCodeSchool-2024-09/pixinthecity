function Classement() {
  return (
    <>
      <h2>Le classement</h2>
      <header>
        {/* Pour l'instant en dur ici mais sera importé sous forme de composant */}
        <nav>
          <img src="http://logo.fr" alt="Logo" />
          <img src="http://profil.fr" alt="IconeProfil" />
          <p>Profil</p>
          <div className="clicProfil">
            <p>Voir mon profil</p>
            <p>Modifier mon profil</p>
            <p>Me déconnecter</p>
          </div>
        </nav>
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
        {/* Pour l'instant en dur ici mais sera importé sous forme de composant */}
        <p>Carte</p>
        <p>Règles</p>
        <img src="http://bouton.fr" alt="IconeProfil" />
        <p>Classement</p>
        <p>Contact</p>
      </footer>
    </>
  );
}

export default Classement;
