import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MapStretArt from "../../components/MapStreetArt";
import type PhotoType from "../../types/PhotoType";

const API_URL = import.meta.env.VITE_API_URL;

function Carte() {
  const [photos, setPhotos] = useState<PhotoType[] | []>([]);
  useEffect(() => {
    fetch(`${API_URL}/api/photos/`)
      .then((responseData) => {
        return responseData.json();
      })
      .then((datajson) => {
        setPhotos(datajson);
      });
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>
      <h2>Carte</h2>

      <main>
        <div>
          <MapStretArt />
        </div>

        <section className="streetArtPhotos">
          <h1>Les œuvres street art</h1>
          {photos.length > 0 ? (
            photos.map((photo) => (
              <figure key={photo.id}>
                <p>{photo.title}</p>
                <p>{photo.content}</p>
                <img
                  src={`${API_URL}/photos/${photo.picture}`}
                  alt={photo.title}
                />
              </figure>
            ))
          ) : (
            <p>Loading photos...</p>
          )}
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Carte;
