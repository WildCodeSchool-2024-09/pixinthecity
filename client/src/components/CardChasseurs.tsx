import { useEffect, useState } from "react";
import "../styles (anciennement CSS)/pages/CardChasseurs.css";
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
  //Etat pour stocker les photos récupérées depuis l'API
  const [photos, setPhotos] = useState<PhotoType[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoType | null>(null);

  // importe l'API photo pour les afficher
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

  // alert pour demander confirmation à l'utilisateur
  const handleDelete = (photoId: number) => {
    const isConfirmed = window.confirm(
      "Êtes-vous sûr·e de vouloir supprimer cette photo ?",
    );
    if (!isConfirmed) return; // Si l"utilisateur annule, on arrête l'exécution
    // envoi de la requête delete pour supprimer la photo de la table
    fetch(`${import.meta.env.VITE_API_URL}/api/photos/${photoId}`, {
      method: "DELETE",
    })
      .then((response) => {
        // mise à jour de l'état photo si la suppression réussit sinon console.error
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
  // fonction pour formater la date sous le format jj-mm-aaaa
  const formatDate = (date: string) => {
    const dateObject = new Date(date);
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <>
      <h1 className="liste-streetArt">LES ŒUVRES STREET ART</h1>
      <section className="carte-photo">
        {photos.map((photo) => (
          <section className="streetArtPhotos" key={photo.id}>
            <h2 className="titre-photo">{photo.title}</h2>
            <button
              type="button"
              className="image-container"
              onClick={() => setSelectedPhoto(photo)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setSelectedPhoto(photo);
                }
              }}
              style={{
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: 0,
              }}
            >
              {/* Affichage de l'image sur la photo */}
              <img
                src={`${import.meta.env.VITE_API_URL}/photos/${photo.picture || "default-picture.jpg"}`}
                alt={photo.title}
              />
            </button>
            <p className="artist_content">{photo.artist}</p>
            <p className="photo_content">{photo.content}</p>
            <div className="delete_photo_content">
              <p className="date_content">{formatDate(photo.dateoftheday)}</p>
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
            </div>
          </section>
        ))}
      </section>

      {/* Aperçu de la photo en plus gros */}
      {selectedPhoto && (
        // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
        <div className="modal-overlay" onClick={() => setSelectedPhoto(null)}>
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="close-button"
              onClick={() => setSelectedPhoto(null)}
            >
              X
            </button>
            <img
              className="modal-image"
              src={`${import.meta.env.VITE_API_URL}/photos/${
                selectedPhoto.picture || "default-picture.jpg"
              }`}
              alt={selectedPhoto.title}
            />
            <p className="modal-title">{selectedPhoto.title}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CardChasseurs;
