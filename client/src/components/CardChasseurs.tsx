import { useEffect, useState } from "react";
import "./CardChasseurs.css";
import PhotoDeleteForm from "./PhotoDeleteForm";

type PhotoType = {
  id: number;
  title: string;
  content: string;
  artist: string;
  dateoftheday: string;
  latitude: number;
  longitude: number;
  picture: string | null;
};

function CardChasseurs() {
  const [photos, setPhotos] = useState<PhotoType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/photos`)
      .then((responseData) => responseData.json())
      .then((photos) => {
        setPhotos(photos);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  const handleDelete = (photoId: number) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/photos/${photoId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setPhotos((prevPhotos) =>
            prevPhotos.filter((photo) => photo.id !== photoId),
          );
        } else {
          console.error("Failed to delete photo");
        }
      })
      .catch((error) => {
        console.error("Error deleting photo:", error);
      });
  };

  // Fonction pour formater la date au format DD-MM-YYYY
  const formatDate = (date: string) => {
    const dateObject = new Date(date); // Créer un objet Date à partir de la chaîne
    const day = dateObject.getDate().toString().padStart(2, "0"); // Jour
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // Mois (0-indexé, donc +1)
    const year = dateObject.getFullYear(); // Année
    return `${day}-${month}-${year}`;
  };

  return (
    <>
      <h1 className="liste-streetArt">Liste des street arts</h1>
      <section className="carte-photo">
        {photos.map((photo) => (
          <section className="streetArtPhotos" key={photo.id}>
            <p className="titre-photo">{photo.title}</p>
            <img
              src={`${import.meta.env.VITE_API_URL}/photos/${photo.picture || "default-picture.jpg"}`}
              alt={photo.title}
            />
            <p>{photo.artist}</p>
            <p>{photo.content}</p>
            <p>{formatDate(photo.dateoftheday)}</p>{" "}
            {/* Affichage de la date formatée */}
            <PhotoDeleteForm
              onSubmit={(event: { preventDefault: () => void }) =>
                event.preventDefault()
              }
              id={0}
            >
              <button
                type="button"
                className="delete-photo-button"
                onClick={() => handleDelete(photo.id)}
              >
                Supprimer
              </button>
            </PhotoDeleteForm>
          </section>
        ))}
      </section>
    </>
  );
}

export default CardChasseurs;
