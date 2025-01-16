import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MapStretArt from "../../components/MapStreetArt";
import type PhotoType from "../../types/PhotoType";
import "./Carte.css";

const API_URL = import.meta.env.VITE_API_URL;

function Carte() {
  const [photos, setPhotos] = useState<PhotoType[] | []>([]);
  useEffect(() => {
    fetch(`${API_URL}/api/photos`)
      .then((responseData) => {
        return responseData.json();
      })
      .then((datajson) => {
        setPhotos(datajson);
      });
  }, []);

  return (
    <>
      <div className="container-carte">
        <header>
          <Header />
        </header>

        <main>
          <div className="carte-leaflet">
            <MapStretArt />
          </div>

          <section className="streetArtPhotos">
            <h1>Les œuvres street art</h1>
            {photos.length > 0 ? (
              photos.map((photo) => (
                <figure key={photo.id}>
                  <img
                    src={`${API_URL}/photos/${photo.picture}`}
                    alt={photo.title}
                  />
                  <section className="titre-photos">
                    <p>{photo.title}</p>
                  </section>
                  <section className="content-photos">
                    <p>{photo.content}</p>
                  </section>
                  <section className="date-photos">
                    <p>{photo.dateoftheday}</p>
                  </section>
                  <section className="artist-photos">
                    <p>{photo.artist}</p>
                  </section>
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
      </div>
    </>
  );
}

export default Carte;
