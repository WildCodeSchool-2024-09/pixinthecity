import type { ReactNode } from "react";
import "./NewUserForm.css";
import avatar1 from "../assets/images/avatar/avatar01.png";
import avatar2 from "../assets/images/avatar/avatar02.png";
import avatar3 from "../assets/images/avatar/avatar03.png";
import avatar4 from "../assets/images/avatar/avatar04.png";
import avatar5 from "../assets/images/avatar/avatar05.png";
import avatar6 from "../assets/images/avatar/avatar06.png";
export type ProfilType = {
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
  const avatars = [
    { id: "avatar1", src: avatar1 },
    { id: "avatar2", src: avatar2 },
    { id: "avatar3", src: avatar3 },
    { id: "avatar4", src: avatar4 },
    { id: "avatar5", src: avatar5 },
    { id: "avatar6", src: avatar6 },
  ];

  return (
    <section className="create-profil-container">
      <h1 id="h1-profil-form">CRÉER MON PROFIL</h1>
      <form
        className="profil-form"
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
          const is_admin = formData.get("is_admin") === "0";

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
            is_admin,
          });
        }}
      >
        <label className="form-fields" htmlFor="firstname">
          Prénom *
        </label>
        <input
          className="form-fields"
          id="firstname"
          type="text"
          name="firstname"
          placeholder="Entrez votre prénom"
          defaultValue={defaultValue.firstname}
        />
        <label className="form-fields" htmlFor="lastname">
          Nom *
        </label>
        <input
          className="form-fields"
          id="lastname"
          type="text"
          name="lastname"
          placeholder="Entrez votre nom"
          defaultValue={defaultValue.lastname}
        />

        <label className="form-fields" htmlFor="pseudo">
          Pseudo *
        </label>
        <input
          className="form-fields"
          id="pseudo"
          type="text"
          name="pseudo"
          placeholder="Choisissez un pseudo"
          defaultValue={defaultValue.pseudo}
        />

        <label className="form-fields" htmlFor="email">
          Email *
        </label>
        <input
          className="form-fields"
          id="email"
          type="email"
          name="email"
          placeholder="Entrez votre email"
          defaultValue={defaultValue.email}
        />

        <label className="form-fields" htmlFor="zip_code">
          Code postal (optionnel)
        </label>
        <input
          id="zip_code"
          type="text"
          name="zip_code"
          placeholder="69000"
          defaultValue={defaultValue.zip_code}
        />

        <label className="form-fields" htmlFor="city">
          Ville (optionnel)
        </label>
        <input
          className="form-fields"
          id="city"
          type="text"
          name="city"
          placeholder="Entrez votre ville"
          defaultValue={defaultValue.city}
        />

        <label className="form-fields" htmlFor="user_password">
          Mot de passe *
        </label>
        <input
          className="form-fields"
          id="user_password"
          type="password"
          name="user_password"
          placeholder="Entrez votre mot de passe"
          defaultValue={defaultValue.user_password}
        />

        <label className="form-fields" htmlFor="passwordConfirm">
          Confirmer le mot de passe *
        </label>
        <input
          className="form-fields"
          id="passwordConfirm"
          type="password"
          name="passwordConfirm"
          placeholder="Confirmez votre mot de passe"
          defaultValue={defaultValue.passwordConfirm}
        />

        {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
        <label className="form-fields">Choix de l'avatar (optionnel)</label>
        <div className="avatars">
          {avatars.map((avatar) => (
            <div key={avatar.id}>
              <input
                id={`avatar-${avatar.id}`}
                className="avatars"
                type="radio"
                name="avatar"
                value={avatar.id}
                defaultChecked={defaultValue.avatar === avatar.id}
              />
              <label htmlFor={`avatar-${avatar.id}`}>
                <img
                  src={avatar.src}
                  alt={`Avatar ${avatar.id}`}
                  className="avatar-image"
                />
              </label>
            </div>
          ))}
        </div>

        <label className="is_gcu_accepted" htmlFor="is_gcu_accepted">
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
        <div className="button-up">
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
        </div>
      </form>
    </section>
  );
}

export default NewUserForm;
