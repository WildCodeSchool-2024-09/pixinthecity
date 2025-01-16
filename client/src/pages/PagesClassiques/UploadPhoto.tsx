import { useNavigate } from "react-router-dom";
import SubmitPhotoForm from "../Photos/SubmitPhotoForm";

interface PhotoData {
  title: string;
  artist: string;
  content: string;
  dateoftheday: string;
  picture: File | null; // picture devrait être de type File ou null si aucun fichier n'est sélectionné
}

function UploadPhoto() {
  const navigate = useNavigate();

  const newPhoto: PhotoData = {
    title: "",
    artist: "",
    content: "",
    dateoftheday: "",
    picture: null, // Vous pouvez commencer avec null ou un fichier vide
  };

  const handleSubmit = (photoData: FormData) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/photos`, {
      method: "POST",
      headers: {
        // Pas besoin de définir Content-Type ici, il est géré par FormData
      },
      body: photoData,
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error submitting photo:", error);
      });
  };

  return (
    <SubmitPhotoForm defaultValue={newPhoto} onSubmit={handleSubmit}>
      Ajouter
    </SubmitPhotoForm>
  );
}

export default UploadPhoto;
