import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Trash from "../../assets/images/trash-bin.png";
import EditUserForm from "../../components/EditUserForm";

// Définition du type pour la structure des données utilisateur à modifier
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
  const { id } = useParams(); // Récupération de l'ID utilisateur depuis l'URL
  const [user, setUser] = useState<EditProfilType | null>(null); // État pour stocker les données utilisateur

  // Récupération des informations de l'utilisateur au chargement du composant
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users/${id}`)
      .then((response) => response.json())
      .then((data: EditProfilType) => {
        setUser(data);
      });
  }, [id]); // Dépendance sur l'ID pour recharger les données si l'ID change

  if (!user) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <EditUserForm
        defaultValue={user} // Passage des données actuelles au formulaire
        onSubmit={(userData) => {
          // Requête PUT pour mettre à jour l'utilisateur
          fetch(`${import.meta.env.VITE_API_URL}/api/users/${user.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData), // Envoi des données mises à jour au serveur
          }).then((response) => {
            if (response.status === 204) {
              navigate("/");
            }
          });
        }}
        extraButton={
          // Bouton supplémentaire pour la suppression du compte
          <button
            onClick={() => navigate(`/supprimer_mon_profil/${id}`)}
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
