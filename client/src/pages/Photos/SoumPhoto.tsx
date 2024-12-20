function SoumPhoto() {
  return (
    <>
      <h2>Soumission photo</h2>
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

      <h3>Soumettre une photo</h3>
      <p>
        Les oeuvres doivent respecter les critères de bienséance, et sont
        systématiquement valider par l'administrateur
      </p>
      <form>
        <label htmlFor="identifiant">Nom</label>
        <input />
        <label htmlFor="password">
          Titre de l'oeuvre (si vous la connaisez)
        </label>
        <input />
        <label htmlFor="identifiant">Description</label>
        <input />
        <label htmlFor="identifiant">Adresse de l'oeuvre</label>
        <input />
        <button type="submit" className="Homebutton">
          Proposer mon oeuvre
        </button>
      </form>

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

export default SoumPhoto;
