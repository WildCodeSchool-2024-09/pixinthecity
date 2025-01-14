import "../../components/CSS/CreaProfil.css";

function CreaProfil() {
  return (
    <>
      <main>
        <h2>Création du profil</h2>
        <form>
          {/* <label htmlFor="identifiant">Nom d'utilisateur</label>
          <input type="text" value={pseudo}/> */}

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
      </main>
    </>
  );
}

export default CreaProfil;
