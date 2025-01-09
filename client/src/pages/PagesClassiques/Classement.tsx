import { useEffect, useState } from "react";
import type UserType from "../../types/UserType";
const API_URL = import.meta.env.VITE_API_URL;

function Classement() {
  const [users, setUsers] = useState<UserType[] | []>([]);

  useEffect(() => {
    fetch(`${API_URL}/api/users`)
      .then((resultAPI) => {
        return resultAPI.json();
      })
      .then((usersJson) => {
        setUsers(usersJson);
      });
  }, []);

  return (
    <>
      {users.map((user) => {
        return (
          <section key={user.id}>
            <h2>{user.firstname}</h2>
            <h2>{user.lastname}</h2>
          </section>
        );
      })}

      {/* <h2>Le classement</h2>
      <header>
        <Header />
      </header>

      <h3>Classement</h3>
      <p>
        Rappel des règles : 100 points pour truc 200 pour muches + lien pour les
        règles
      </p>



      <figure className="card">
        <h4>Nom_utilisateur</h4>
        <img src="http://avatar.fr" alt="avatar" />
        <p>200points</p>
        <p>
          <img src="http://badge.fr" alt="badge" />
        </p>
      </figure> */}
    </>
  );
}

export default Classement;
