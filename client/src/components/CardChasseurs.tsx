import { useEffect, useState } from "react";
import "./CardChasseurs.css";

type PhotoType = {
  id: number;
  title: string;
  content: string;
  artist: string;
  dateoftheday: string;
  latitude: number;
  longitude: number;
  picture: File | null;
};

function CardChasseurs() {
  const [photos, setPhotos] = useState<PhotoType[] | []>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/photos`)
      .then((responseData) => {
        return responseData.json();
      })
      .then((photos) => {
        setPhotos(photos);
      });
  }, []);

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
        {photos.map((photo) => {
          return (
            <section className="streetArtPhotos" key={photo.id}>
              <p className="titre-photo">{photo.title}</p>
              <img
                src={`${import.meta.env.VITE_API_URL}/photos/${photo.picture || null}`}
                alt={photo.title}
              />
              <p>{photo.artist}</p>
              <p>{photo.content}</p>
              <p>{formatDate(photo.dateoftheday)}</p>{" "}
              {/* Affichage de la date formatée */}
            </section>
          );
        })}
      </section>
    </>
  );
}

export default CardChasseurs;
