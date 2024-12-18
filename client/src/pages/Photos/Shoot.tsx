function Shoot() {
  return (
    <>
      {" "}
      <h2>Page shoot</h2>
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
      <p>Appareil photo</p>
      <p>Importer votre photo</p>
      <p>A toi de jouer !</p>

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

export default Shoot;
