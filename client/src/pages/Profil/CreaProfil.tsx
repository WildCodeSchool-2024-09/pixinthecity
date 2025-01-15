import type { ReactNode } from "react";
import "../../components/CSS/CreaProfil.css";

type ProfilType = {
  firstname: string;
  lastname: string;
  pseudo: string;
  email: string;
  zip_code?: string; // optionnel
  city?: string; // optionnel
  user_password: string;
  passwordConfirm: string;
  avatar?: string; // optionnel
  is_gcu_accepted: boolean;
};

interface CreaProfilType {
  children?: ReactNode;
  defaultValue: ProfilType;
  onSubmit: (photo: ProfilType) => void;
}

function CreaProfil({ children, defaultValue, onSubmit }: CreaProfilType) {
  return (
    <main className="crea_profil">
      <h2>Création du profil</h2>
      <form
        className="formprofil"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const firstname = formData.get("firstname") as string;
          const lastname = formData.get("lastname") as string;
          const pseudo = formData.get("pseudo") as string;
          const email = formData.get("email") as string;
          const zip_code = formData.get("zip_code") as string;
          const city = formData.get("city") as string;
          const user_password = formData.get("user_password") as string;
          const passwordConfirm = formData.get("passwordConfirm") as string;
          const avatar = formData.get("avatar") as string;
          const is_gcu_accepted = formData.get("is_gcu_accepted") === "on";

          onSubmit({
            firstname,
            lastname,
            pseudo,
            email,
            zip_code, // optionnel
            city, // optionnel
            user_password,
            passwordConfirm,
            avatar, // optionnel
            is_gcu_accepted,
          });
        }}
      >
        <label htmlFor="firstname">Prénom</label>
        <input
          id="firstname"
          type="text"
          name="firstname"
          placeholder="Entrez votre prénom"
          defaultValue={defaultValue.firstname}
        />
        <label htmlFor="lastname">Nom</label>
        <input
          id="lastname"
          type="text"
          name="lastname"
          placeholder="Entrez votre nom"
          defaultValue={defaultValue.lastname}
        />

        <label htmlFor="pseudo">Pseudo</label>
        <input
          id="pseudo"
          type="text"
          name="pseudo"
          placeholder="Choisissez un pseudo"
          defaultValue={defaultValue.pseudo}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Entrez votre email"
          defaultValue={defaultValue.email}
        />

        <label htmlFor="zip_code">Code postal (optionnel)</label>
        <input
          id="zip_code"
          type="text"
          name="zip_code"
          placeholder="69000"
          defaultValue={defaultValue.zip_code}
        />

        <label htmlFor="city">Ville (optionnel)</label>
        <input
          id="city"
          type="text"
          name="city"
          placeholder="Entrez votre ville"
          defaultValue={defaultValue.city}
        />

        <label htmlFor="user_password">Mot de passe</label>
        <input
          id="user_password"
          type="password"
          name="user_password"
          placeholder="Entrez votre mot de passe"
          defaultValue={defaultValue.user_password}
        />

        <label htmlFor="passwordConfirm">Confirmer le mot de passe</label>
        <input
          id="passwordConfirm"
          type="password"
          name="passwordConfirm"
          placeholder="Confirmez votre mot de passe"
          defaultValue={defaultValue.passwordConfirm}
        />

        {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
        <label>Mon avatar (optionnel)</label>
        <div className="avatars">
          {[
            "avatar1.png",
            "avatar2.png",
            "avatar3.png",
            "avatar4.png",
            "avatar5.png",
          ].map((avatar) => (
            <div key={avatar}>
              <input
                id={`avatar-${avatar}`} // ID unique pour chaque avatar
                type="radio"
                name="avatar"
                value={avatar}
                checked={defaultValue.avatar === avatar}
              />
              <label htmlFor={`avatar-${avatar}`}>
                <img src={`/images/${avatar}`} alt={`Avatar ${avatar}`} />
              </label>
            </div>
          ))}
        </div>

        <label htmlFor="is_gcu_accepted">
          <input
            id="is_gcu_accepted"
            type="checkbox"
            name="is_gcu_accepted"
            checked={defaultValue.is_gcu_accepted}
          />
          J'accepte les conditions générales d'utilisation
        </label>

        <button type="submit">{children}Valider</button>
      </form>
    </main>
  );
}

export default CreaProfil;
