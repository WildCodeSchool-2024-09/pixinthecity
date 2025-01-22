import { useNavigate } from "react-router-dom";

import NewUserForm from "../../components/NewUserForm";

function CreaProfil() {
  const navigate = useNavigate();

  const newUser = {
    firstname: "",
    lastname: "",
    pseudo: "",
    email: "",
    zip_code: "",
    city: "",
    user_password: "",
    passwordConfirm: "",
    avatar: "",
    is_gcu_accepted: false,
    is_admin: false,
  };

  return (
    <NewUserForm
      defaultValue={newUser}
      onSubmit={(userData) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((response) => response.json())
          .then((data) => {
            navigate(`/Profil/${data.insertId}`);
          });
      }}
    />
  );
}

export default CreaProfil;
