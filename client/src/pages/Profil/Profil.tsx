import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../pages/Profil/Profil.css";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  pseudo: string;
  email: string;
  zip_code?: string; // optionnel
  city?: string; // optionnel
  // hashed_password: string;
  // passwordConfirm: string;
  avatar?: string; // optionnel
  is_gcu_accepted: boolean;
  is_admin: boolean;
}

function Profil() {
  const { id } = useParams(); // Récupération de l'ID de l'utilisateur depuis l'URL
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users/${id}`)
      .then((response) => response.json())
      .then((data: User) => {
        setUser(data);
      });
  }, [id]);

  if (!user) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="profil_div">
      {/* <h1>
        Profil de {user.firstname} {user.lastname}
      </h1> */}
      <section className="profil_container">
        {/* Avatar de l'utilisateur */}
        <div className="user_picture">
          <img
            src={"/src/assets/images/avatar/avatar_background.png"}
            alt="user_background"
            className="user_background"
          />
          <img
            src={"/src/assets/images/icon_user.png"}
            alt="icon_user"
            className="icon_user"
          />
        </div>

        {/* Pseudo de l'utilisateur */}
        <h1 id="username">{user.pseudo}</h1>

        {/* Niveau de l'utilisateur */}
        <p id="user_level" aria-label="Niveau de l'utilisateur">
          LEVEL 1
        </p>

        {/* Titre de l'utilisateur */}
        <p id="user_title" aria-label="Titre de l'utilisateur ">
          Passant·e Curieux·se
        </p>

        <div className="user_results">
          {/* Points accumulés */}
          <p id="user_points" aria-label="Points accumulés">
            Points
          </p>

          {/* Badges accumulés */}
          <p id="user_badges" aria-label="badges accumulés">
            Badges
          </p>
        </div>
        <div className="user_results">
          {/* Points accumulés */}
          <p id="user_points_number" aria-label="Points accumulés">
            250
          </p>

          {/* Badges accumulés */}
          <p id="user_badges" aria-label="badges accumulés">
            💎💎💎
          </p>
        </div>

        {/* Contributions de l'utilisateur */}
        <section aria-labelledby="user-contributions">
          <h2 id="user-contributions">Contributions</h2>
          {/* <p>Aperçu des photos déjà validées :</p> */}
          <ul className="contributions-list">
            {/* Exemple de contributions */}
            {[
              {
                id: 1,
                src: "/src/assets/images/essai_photo.webp",
                title: "Oeuvre 1",
              },
              {
                id: 2,
                src: "/src/assets/images/essai_photo.webp",
                title: "Oeuvre 2",
              },
              {
                id: 3,
                src: "/src/assets/images/essai_photo.webp",
                title: "Oeuvre 3",
              },
              // {
              //   id: 4,
              //   src: "/src/assets/images/essai_photo.webp",
              //   title: "Oeuvre 4",
              // },
            ].map((contribution) => (
              <li key={contribution.id}>
                <figure>
                  <img
                    src={contribution.src}
                    alt={`Contribution : ${contribution.title}`}
                    className="contribution-photo"
                  />
                  <figcaption>{contribution.title}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>

        {/* Paramètres et modification du profil */}
        <section aria-labelledby="user-settings">
          <button
            type="button"
            onClick={() => navigate(`/modification_de_profil/${user.id}`)}
            className="btn-edit-profile"
          >
            <img
              src={"/src/assets/images/repair.png"}
              alt="repair_icon"
              className="repair_icon"
            />
            Modifier mon profil
          </button>
        </section>
      </section>
    </div>
  );
}

export default Profil;
