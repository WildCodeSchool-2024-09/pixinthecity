import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditUserForm from "../../components/EditUserForm";

interface EditProfilType {
  id: number;
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
}

function ModifProfil() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(null as null | EditProfilType);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users/${id}`)
      .then((response) => response.json())
      .then((data: EditProfilType) => {
        setUser(data);
      });
  }, [id]);

  if (!user) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <h1>helelhegsklngjkdbgjsnfjksbgjlsbgjsebgjls</h1>
      {/* <h1>{user.lastname}</h1>
      <section>
        <figure>
          <img
            src={`${import.meta.env.VITE_API_URL}/users/${user.avatar || "default-avatar.png"}`}
            alt={user.lastname}
          />
        </figure>
      </section>

      <Link to={`/users/${id}/edit`}>Modifier</Link> */}
      {user && (
        // <p>toto</p>
        <EditUserForm
          defaultValue={user}
          onSubmit={(userData) => {
            fetch(`${import.meta.env.VITE_API_URL}/api/users/${user.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            }).then((response) => {
              if (response.status === 204) {
                navigate(`/users/${user.id}`);
              }
            });
          }}
        >
          Modifier
        </EditUserForm>
      )}
    </>
  );
}

export default ModifProfil;
