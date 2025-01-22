import type { ReactNode } from "react";
import "./NewUserForm.css";

export type ProfilType = {
  firstname: string;
  lastname: string;
  pseudo: string;
  email: string;
  zip_code?: string; // optionnel
  city?: string; // optionnel
  password: string;
  passwordConfirm: string;
  avatar?: string; // optionnel
  is_gcu_accepted: boolean;
  is_admin: boolean;
};

interface CreaProfilType {
  children?: ReactNode;
  defaultValue: ProfilType;
  onSubmit: (photo: ProfilType) => void;
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Défilement fluide
  });
};

function NewUserForm({ children, defaultValue, onSubmit }: CreaProfilType) {
  return (
    <section className="create-profil-container">
      <h1>CRÉER MON PROFIL</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const firstname = formData.get("firstname") as string;
          const lastname = formData.get("lastname") as string;
          const pseudo = formData.get("pseudo") as string;
          const email = formData.get("email") as string;
          const zip_code = formData.get("zip_code") as string;
          const city = formData.get("city") as string;
          const password = formData.get("password") as string;
          const passwordConfirm = formData.get("passwordConfirm") as string;
          const avatar = formData.get("avatar") as string;
          const is_gcu_accepted = formData.get("is_gcu_accepted") === "on";
          const is_admin = formData.get("is_admin") === "0";

          onSubmit({
            firstname,
            lastname,
            pseudo,
            email,
            zip_code, // optionnel
            city, // optionnel
            password,
            passwordConfirm,
            avatar, // optionnel
            is_gcu_accepted,
            is_admin,
          });
        }}
      >
        <label htmlFor="firstname">Prénom *</label>
        <input
          className="form-fields"
          id="firstname"
          type="text"
          name="firstname"
          placeholder="Entrez votre prénom"
          defaultValue={defaultValue.firstname}
        />
        <label htmlFor="lastname">Nom *</label>
        <input
          className="form-fields"
          id="lastname"
          type="text"
          name="lastname"
          placeholder="Entrez votre nom"
          defaultValue={defaultValue.lastname}
        />

        <label htmlFor="pseudo">Pseudo *</label>
        <input
          className="form-fields"
          id="pseudo"
          type="text"
          name="pseudo"
          placeholder="Choisissez un pseudo"
          defaultValue={defaultValue.pseudo}
        />

        <label htmlFor="email">Email *</label>
        <input
          className="form-fields"
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
          className="form-fields"
          id="city"
          type="text"
          name="city"
          placeholder="Entrez votre ville"
          defaultValue={defaultValue.city}
        />

        <label htmlFor="hashed_password">Mot de passe *</label>
        <input
          className="form-fields"
          id="password"
          type="password"
          name="password"
          placeholder="Entrez votre mot de passe"
          defaultValue={defaultValue.password}
        />

        <label htmlFor="passwordConfirm">Confirmer le mot de passe *</label>
        <input
          className="form-fields"
          id="passwordConfirm"
          type="password"
          name="passwordConfirm"
          placeholder="Confirmez votre mot de passe"
          defaultValue={defaultValue.passwordConfirm}
        />

        {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
        <label>Choix de l'avatar (optionnel)</label>
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
                className="form-fields"
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
            className="is_gcu_accepted"
            id="is_gcu_accepted"
            type="checkbox"
            name="is_gcu_accepted"
            checked={defaultValue.is_gcu_accepted}
          />
          J'accepte les conditions générales d'utilisation *
        </label>
        <p className="obligatory-fiels">
          Tous les champs avec une * sont obligatoires
        </p>

        <button type="submit" className="create-profil-button">
          {children}CRÉER MON PROFIL
        </button>
        <button
          type="button"
          id="button_up"
          onClick={scrollToTop} // Ajout du gestionnaire d'événement
        >
          <img
            src={"/src/assets/images/arrow_up.png"}
            alt="Retour_vers_le_haut"
            id="arrow_up"
          />
          <p>RETOUR VERS LE HAUT</p>
        </button>
      </form>
    </section>
  );
}

export default NewUserForm;
