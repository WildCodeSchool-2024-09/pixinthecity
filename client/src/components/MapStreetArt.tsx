import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../components/CSS/MapStreetArt.css";
import aerosol from "../assets/images/aerosol.png";
import type PhotoType from "../types/PhotoType";

const customIcon = new L.Icon({
  iconUrl: aerosol, //, // Chemin de l'image de l'icône
  iconSize: [32, 32], // Taille de l'icône
  iconAnchor: [25, 50], // Point d'ancrage (au centre, en bas)
  popupAnchor: [0, -50], // Position de la popup par rapport à l'icône
});

type MapStreetArtProps = {
  photos: PhotoType[];
  apiUrl: string;
};

function Carte({ photos, apiUrl }: MapStreetArtProps) {
  return (
    <>
      <MapContainer
        center={[45.7455, 4.8278]}
        zoom={20}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {photos.map((photo) => (
          <Marker key={photo.id} position={[45.7455, 4.8278]} icon={customIcon}>
            <Popup>
              <strong>{photo.title}</strong>
              {photo.picture && (
                <img
                  src={`${apiUrl}/photos/${photo.picture}`}
                  alt={photo.title}
                />
              )}
              <p>{photo.content}</p>
              <p>Artiste : {photo.artist}</p>
              <p>Date : {photo.dateoftheday}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}

export default Carte;
