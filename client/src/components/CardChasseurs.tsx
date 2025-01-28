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
              <p>{photo.content}</p>
              <p>{photo.artist}</p>
            </section>
          );
        })}
      </section>
    </>
  );
}

export default CardChasseurs;
