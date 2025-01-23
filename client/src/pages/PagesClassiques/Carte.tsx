// src/pages/PagesClassiques/Carte.tsx
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MapStretArt from "../../components/MapStreetArt";
// import PhotoDeleteForm from "../../components/PhotoDeleteForm";
import SideBar from "../../components/SideBar"; // Import de la SideBar
import type PhotoType from "../../types/PhotoType";
import "./Carte.css";

const API_URL = import.meta.env.VITE_API_URL;

function Carte() {
  const [photos, setPhotos] = useState<PhotoType[] | []>([]);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    fetch(`${API_URL}/api/photos`)
      .then((responseData) => {
        return responseData.json();
      })
      .then((datajson) => {
        setPhotos(datajson);
      });

    // Vérifier si la taille de l'écran est desktop
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Définit "isDesktop" si la largeur de l'écran est supérieure à 1024px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Appel initial pour vérifier la taille de l'écran
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="container-carte">
        <header>
          <Header />
        </header>

        <main>
          {isDesktop && <SideBar />}{" "}
          {/* Afficher la SideBar uniquement si c'est un écran desktop */}
          <div className="carte-leaflet">
            <MapStretArt photos={photos} apiUrl={API_URL} />
          </div>
          {/* <section className="streetArtPhotos">
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
                  <PhotoDeleteForm id={photo.id}>Supprimer</PhotoDeleteForm>
                </figure>
              ))
            ) : (
              <p>Loading photos...</p>
            )}
          </section> */}
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Carte;
