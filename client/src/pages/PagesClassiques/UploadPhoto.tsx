import { useEffect, useState } from "react";
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
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [geoError, setGeoError] = useState<string | null>(null);

  const newPhoto: PhotoData = {
    title: "",
    artist: "",
    content: "",
    dateoftheday: "",
    picture: null, // Vous pouvez commencer avec null ou un fichier vide
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            setGeoError("Permission denied. Using default coordinates.");
          }
        },
      );
    } else {
      setGeoError("Geolocation is not supported by your browser.");
    }
  }, []);

  const handleSubmit = (photoData: FormData) => {
    if (latitude && longitude) {
      photoData.append("latitude", latitude.toString());
      photoData.append("longitude", longitude.toString());
    }

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
    <div>
      {geoError && <p>{geoError}</p>}
      <SubmitPhotoForm defaultValue={newPhoto} onSubmit={handleSubmit} />
    </div>
  );
}

export default UploadPhoto;
