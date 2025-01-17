import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { ProfilType } from "../../components/NewUserForm";
import "../../pages/Profil/Profil.css";

function Profil() {
  const { id } = useParams();
  const [user, setUser] = useState<ProfilType | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users/${id}`)
      .then((response) => response.json())
      .then((data: ProfilType) => {
        setUser(data);
      });
  }, [id]);

  return (
    user && (
      <section className="profil_container">
        {/* Avatar de l'utilisateur */}
        <div className="avatar_picture">
          <img
            src={"/src/assets/images/avatar/avatar_background.png"}
            alt="avatar_background"
            className="avatar_background"
          />
          <img
            src={"/src/assets/images/avatar/avatar02.png"}
            alt="avatar"
            // src={user.avatar}
            // alt={`Avatar de ${user.pseudo}`}
            className="avatar_user"
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
          <Link to="/Modification_de_profil ">
            <button type="button" className="btn-edit-profile">
              <img
                src={"/src/assets/images/repair.png"}
                alt="repair_icon"
                className="repair_icon"
              />
              Modifier mon profil
            </button>
          </Link>
        </section>
      </section>
    )
  );
}

export default Profil;
