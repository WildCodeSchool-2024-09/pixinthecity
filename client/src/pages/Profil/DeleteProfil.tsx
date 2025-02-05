import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./DeleteProfil.css";

function DeleteProfil() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    if (!id) return;

    const confirmDelete = window.confirm(
      "Voulez-vous vraiment supprimer votre compte ? Cette action est irréversible.",
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        },
      );

      if (response.ok) {
        toast.success("Votre compte a été supprimé.");
        navigate("/", { state: { deleted: true } }); // Envoi du state
      } else {
        throw new Error("Erreur lors de la suppression du compte.");
      }
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Une erreur est survenue.",
      );
    }
  };

  return (
    <section className="delete-account-container">
      <h1 id="delete_profile_title">SUPPRIMER MON PROFIL</h1>
      <p>Êtes-vous sûr·e de supprimer votre profil ? </p>
      <button onClick={handleDelete} className="delete-button" type="button">
        Oui, supprimer mon compte
      </button>
    </section>
  );
}

export default DeleteProfil;
