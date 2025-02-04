import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Trash from "../../assets/images/trash-bin.png";
import EditUserForm from "../../components/EditUserForm";

interface EditProfilType {
  id: number;
  firstname: string;
  lastname: string;
  pseudo: string;
  email: string;
  zip_code?: string; // optionnel
  city?: string; // optionnel
  is_admin: boolean;
}

function ModifProfil() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState<EditProfilType | null>(null);

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
              navigate("/");
            }
          });
        }}
        extraButton={
          <button
            onClick={() => navigate(`/Suppression_de_profil/${id}`)}
            className="delete-profil-button"
            type="button"
          >
            <img className="poubelle" src={Trash} alt="poubelle-icon" />
            Supprimer mon compte
          </button>
        }
      >
        Modifier
      </EditUserForm>
    </>
  );
}

export default ModifProfil;
