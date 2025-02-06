import type { ReactNode } from "react";
import "./EditUserForm.css";

type User = {
  firstname: string;
  lastname: string;
  pseudo: string;
  email: string;
  zip_code?: string; // optionnel
  city?: string; // optionnel
  // hashed_password: string;
  // is_gcu_accepted: boolean;
  is_admin: boolean;
};

interface UserFormProps {
  children: ReactNode;
  extraButton?: ReactNode;
  defaultValue: User;
  onSubmit: (user: User) => void;
}

function EditUserForm({
  children,
  defaultValue,
  extraButton,
  onSubmit,
}: UserFormProps) {
  return (
    <section className="update-profil-container">
      <h1>MODIFIER MON PROFIL</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          onSubmit({
            firstname: formData.get("firstname") as string,
            lastname: formData.get("lastname") as string,
            pseudo: formData.get("pseudo") as string,
            email: formData.get("email") as string,
            zip_code: formData.get("zip_code")?.toString(),
            city: formData.get("city")?.toString(),
            // hashed_password: formData.get("hashed_password") as string,
            // is_gcu_accepted: formData.get("is_gcu_accepted") === "true",
            is_admin: formData.get("is_admin") === "true",
          });
        }}
      >
        <label className="updateForm-fields">
          Prenom:
          <input
            type="text"
            name="firstname"
            defaultValue={defaultValue.firstname}
            required
          />
        </label>
        <label className="updateForm-fields">
          Nom de famille:
          <input
            type="text"
            name="lastname"
            defaultValue={defaultValue.lastname}
            required
          />
        </label>
        <label className="updateForm-fields">
          Pseudo:
          <input
            type="text"
            name="pseudo"
            defaultValue={defaultValue.pseudo}
            required
          />
        </label>
        <label className="updateForm-fields">
          Email:
          <input
            type="email"
            name="email"
            defaultValue={defaultValue.email}
            required
          />
        </label>
        <label className="updateForm-fields">
          Code postal:
          <input
            type="text"
            name="zip_code"
            defaultValue={defaultValue.zip_code || ""}
          />
        </label>
        <label className="updateForm-fields">
          Ville:
          <input
            type="text"
            name="city"
            defaultValue={defaultValue.city || ""}
          />
        </label>

        <button type="submit" className="update-profil-button">
          {children}
        </button>
        {extraButton && <p className="delete_button">{extraButton}</p>}
      </form>
    </section>
  );
}
export default EditUserForm;
