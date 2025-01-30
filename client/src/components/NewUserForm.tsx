import { type ReactNode, useState } from "react";

import { ToastContainer, toast } from "react-toastify"; // Import de toastify
import "react-toastify/dist/ReactToastify.css"; // Import des styles de Toastify

import "./NewUserForm.css";
import { Link } from "react-router-dom";
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
  zip_code?: string | null; // optionnel
  city?: string | null; // optionnel
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
  const [isGCUAccepted, setIsGCUAccepted] = useState(
    defaultValue.is_gcu_accepted,
  );

  const avatars = [
    { id: "avatar01.png", src: avatar1 },
    { id: "avatar2", src: avatar2 },
    { id: "avatar3", src: avatar3 },
    { id: "avatar4", src: avatar4 },
    { id: "avatar5", src: avatar5 },
    { id: "avatar6", src: avatar6 },
  ];
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
          const zip_code = (formData.get("zip_code") as string)?.trim() || null;
          const city = (formData.get("city") as string)?.trim() || null;
          const password = formData.get("password") as string;
          const passwordConfirm = formData.get("passwordConfirm") as string;
          const avatar = formData.get("avatar") as string;
          const is_admin = formData.get("is_admin") === "0";

          // vérifie si les CGU sont acceptés
          if (!isGCUAccepted) {
            toast.error("Vous devez accepter les CGU avant de soumettre.");
            return;
          }

          if (
            !firstname ||
            !lastname ||
            !pseudo ||
            !email ||
            !password ||
            !passwordConfirm
          ) {
            toast.error("Veuillez remplir tous les champs obligatoires.");
            return;
          }

          onSubmit({
            firstname,
            lastname,
            pseudo,
            email,
            zip_code: zip_code || null, // optionnel
            city: city || null,
            password,
            passwordConfirm,
            avatar, // optionnel
            is_gcu_accepted: isGCUAccepted,
            is_admin,
          });

          toast.success("Profil créé avec succès !");
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
          defaultValue={defaultValue.zip_code ?? ""}
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
          defaultValue={defaultValue.city ?? ""}
        />

        <label className="form-fields" htmlFor="hashed_password">
          Mot de passe *
        </label>
        <input
          className="form-fields"
          id="password"
          type="password"
          name="password"
          placeholder="Entrez votre mot de passe"
          defaultValue={defaultValue.password}
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
            <div key={avatar.id} className="avatar-item">
              <input
                id={`avatar-${avatar.id}`}
                className="avatar-radio"
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

        <label className="form-fields gcu-label" htmlFor="is_gcu_accepted">
          <Link to="/cgu" className="gcu-link">
            J'accepte les conditions générales d'utilisation*
          </Link>
          <input
            className="is_gcu_accepted"
            id="is_gcu_accepted"
            type="checkbox"
            name="is_gcu_accepted"
            checked={isGCUAccepted}
            onChange={(e) => setIsGCUAccepted(e.target.checked)}
          />
        </label>
        <p className="obligatory-fields">
          <br />
          Tous les champs avec une * sont obligatoires
        </p>

        <button type="submit" className="create-profil-button">
          {children}CRÉER MON PROFIL
        </button>
        <div className="button_center">
          <button
            className="button-up-profil-form"
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
        <ToastContainer />
      </form>
    </section>
  );
}

export default NewUserForm;
