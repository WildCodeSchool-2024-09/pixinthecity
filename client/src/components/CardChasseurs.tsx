import { useEffect, useState } from "react";

function CardChasseur() {
  interface Profile {
    id: string;
    username: string;
  }
  interface User {
    dob: { age: number };
    login: { uuid: string; username: string };
  }

  //   const ProfilePage: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  // Fetch profiles from API
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?results=128&nat=us,gb,fr",
        );
        const data = await response.json();

        const filteredProfiles = data.results.map((user: User) => ({
          id: user.login.uuid,
          username: user.login.username,
        }));

        setProfiles(filteredProfiles);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []); // Added missing dependency array for useEffect

  return (
    <>
      <div>
        {profiles.map((profile) => (
          <div key={profile.id}>
            <p>{profile.username}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardChasseur;
