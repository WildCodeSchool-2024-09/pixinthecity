import { useEffect, useState } from "react";
import type UserType from "../../types/UserType";
import "./Classement.css";

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
      <div className="fond">
        {users.map((user) => {
          return (
            <section className="user" key={user.id}>
              <h2>{user.firstname}</h2>
              <h2>{user.lastname}</h2>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default Classement;
