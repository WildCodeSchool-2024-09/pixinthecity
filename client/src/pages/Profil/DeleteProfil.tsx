import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserDeleteForm from "../../components/UserDeleteForm";

interface DeleteProfilType {
  id: number;
}

function DeleteProfil() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState<DeleteProfilType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/users/${id}`,
        );
        if (!response.ok)
          throw new Error("Erreur lors du chargement de l'utilisateur");

        const data: DeleteProfilType = await response.json();
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleDelete = async () => {
    if (!user) return;

    const confirmDelete = window.confirm(
      "Voulez-vous vraiment supprimer votre profil ?",
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/${user.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.ok) {
        alert("Votre profil a été supprimé avec succès.");
        navigate("/"); // Redirection après suppression
      } else {
        throw new Error("Erreur lors de la suppression");
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : "Une erreur est survenue");
    }
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return <UserDeleteForm id={user?.id} onDelete={handleDelete} />;
}

export default DeleteProfil;
