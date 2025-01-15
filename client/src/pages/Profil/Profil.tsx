import { useParams } from "react-router-dom";
import type { ProfilType } from "../../components/NewUserForm";
import { useEffect, useState } from "react";

function Profil() {
  const { id } = useParams();
  const [user, setUser] = useState(null as null | ProfilType);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users/${id}`)
      .then((response) => response.json())
      .then((data: ProfilType) => {
        setUser(data);
      });
  }, [id]);
  return (
    user && (
      <>
        <img src={user.avatar} alt="avatar_user" />
        <h2>{user.pseudo}</h2>

        <h3>Points : xx points</h3>

        <h3>Contributions</h3>
        <p>aperçu des photos déjà validées</p>

        <p>Paramètres</p>
        <p>Modifier mon profil</p>
      </>
    )
  );
}

export default Profil;
