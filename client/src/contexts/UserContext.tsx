import Cookies from "js-cookie";
import { type ReactNode, createContext, useEffect, useState } from "react";

// Définir le type de l'utilisateur
interface User {
  id: number;
  firstname: string;
  lastname: string;
  pseudo: string;
  email: string;
  avatar?: string;
  is_gcu_accepted: boolean;
  is_admin: boolean;
}

// Créer un contexte avec un utilisateur par défaut
interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Crée un provider pour fournir le contexte à l'application
const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      fetch(`${import.meta.env.VITE_API_URL}/api/me`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Token invalide ou expiré");
          }
          return res.json();
        })
        .then((data) => {
          if (data.user) {
            setUser(data.user);
          } else {
            Cookies.remove("authToken"); // Supprime le cookie si le token est invalide
            setUser(null);
          }
        })
        .catch(() => {
          Cookies.remove("authToken");
          setUser(null);
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
