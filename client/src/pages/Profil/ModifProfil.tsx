function ModifProfil() {
  return (
    <>
      <h2>Modifier le profil</h2>
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

      <h3>Modifier mon profil</h3>
      <form>
        <label htmlFor="identifiant">Nom d'utilisateur</label>
        <input />
        <label htmlFor="nom">Nom</label>
        <input />
        <label htmlFor="prenom">Prénom</label>
        <input />
        <label htmlFor="ville">Ville</label>
        <input />
        <label htmlFor="nom">Email</label>
        <input />
        <label htmlFor="nom">Nom</label>
        <input />
        <label htmlFor="password">Mot de passe</label>
        <input />
        <label htmlFor="password">Confirmer le mot de passe</label>
        <input />
        <label htmlFor="avatar">Mon avatar</label>
        <label htmlFor="avatar">
          <img src="http://avatar1.fr" alt="avatar1" />{" "}
        </label>
        <input type="radio" />
        <label htmlFor="avatar">
          <img src="http://avatar2.fr" alt="avatar2" />{" "}
        </label>
        <input type="radio" />
        <label htmlFor="avatar">
          <img src="http://avatar3.fr" alt="avatar3" />{" "}
        </label>
        <input type="radio" />
        <label htmlFor="avatar">
          <img src="http://avatar4.fr" alt="avatar4" />{" "}
        </label>
        <input type="radio" />
        <label htmlFor="avatar">
          <img src="http://avatar5.fr" alt="avatar5" />{" "}
        </label>
        <input type="radio" />

        <button type="submit">Valider</button>
      </form>

      <h3>Modifier les paramètres du site</h3>

      <label htmlFor="sons">Sons</label>
      <input type="checkbox" />
      <label htmlFor="theme">Thème sombre/clair</label>
      <input type="checkbox" />
      <label htmlFor="cache">Vider le cache</label>
      <input type="checkbox" />
      <label htmlFor="notif">Désactiver les notifications</label>
      <input type="checkbox" />

      <p>Supprimer mon compte</p>

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

export default ModifProfil;
