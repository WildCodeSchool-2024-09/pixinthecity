function Profil() {
  return (
    <>
      <h2>Profil</h2>

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

      <p>Profil</p>
      <img src="http://avatar.fr" alt="avatar" />
      <p>Nom d'utilisateur</p>

      <h3>Points : xx points</h3>

      <h3>
        Badges : <img src="http://badge.fr" alt="badge" />
        <img src="http://badge.fr" alt="badge" />
      </h3>

      <h3>Contributions</h3>
      <p>aperçu des photos déjà validées</p>

      <p>Paramètres</p>
      <p>Modifier mon profil</p>

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

export default Profil;
