import type { ReactNode } from "react";
type User = {
  firstname: string;
  lastname: string;
  pseudo: string;
  email: string;
  zip_code?: string; // optionnel
  city?: string; // optionnel
  hashed_password: string;
  // passwordConfirm: string;
  avatar?: string; // optionnel
  is_gcu_accepted: boolean;
  is_admin: boolean;
};

interface UserFormProps {
  children: ReactNode;
  defaultValue: User;
  onSubmit: (user: User) => void;
}
function EditUserForm({ children, defaultValue, onSubmit }: UserFormProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        onSubmit({
          firstname: formData.get("firstname") as string,
          lastname: formData.get("lastname") as string,
          pseudo: formData.get("pseudo") as string,
          email: formData.get("email") as string,
          zip_code: formData.get("zip_code") as string,
          city: formData.get("city") as string,
          hashed_password: formData.get("hashed_password") as string,
          // passwordConfirm: formData.get("password_confirm") as string,
          avatar: formData.get("avatar") as string,
          is_gcu_accepted: formData.get("is_gcu_accepted") === "true",
          is_admin: formData.get("is_admin") === "true",
        });
      }}
    >
      <input
        type="text"
        name="firstname"
        defaultValue={defaultValue.firstname}
      />
      <input type="text" name="lastname" defaultValue={defaultValue.lastname} />
      <input type="text" name="pseudo" defaultValue={defaultValue.pseudo} />
      <input type="email" name="email" defaultValue={defaultValue.email} />
      <input
        type="text"
        name="zip_code"
        defaultValue={defaultValue.zip_code || ""}
      />
      <input type="text" name="city" defaultValue={defaultValue.city || ""} />
      <input
        type="password"
        name="hashed_password"
        defaultValue={defaultValue.hashed_password}
      />
      <input
        type="text"
        name="avatar"
        defaultValue={defaultValue.avatar || ""}
      />
      <input
        type="checkbox"
        name="is_gcu_accepted"
        defaultChecked={defaultValue.is_gcu_accepted}
      />
      <input
        type="checkbox"
        name="is_admin"
        defaultChecked={defaultValue.is_admin}
      />
      <button type="submit">{children}</button>
    </form>
  );
}
export default EditUserForm;
