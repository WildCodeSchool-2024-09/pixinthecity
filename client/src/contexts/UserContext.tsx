import { type ReactNode, createContext, useEffect, useState } from "react";

// Définir le type de l'utilisateur
// interface User {
//   id: number;
//   firstname: string;
//   lastname: string;
//   pseudo: string;
//   email: string;
//   avatar?: string;
//   is_gcu_accepted: boolean;
//   is_admin: boolean;
// }

// Créer un contexte avec un utilisateur par défaut
export interface UserContextType {
  userId: number | null;
  setUserId: React.Dispatch<React.SetStateAction<number | null>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextType | null>(null);

// Crée un provider pour fournir le contexte à l'application
const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    // const token = Cookies.get("authToken");
    // if (token) {
    fetch(`${import.meta.env.VITE_API_URL}/api/auth`, {
      // method: "GET",
      // headers: { Authorization: `Bearer ${token}` },
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          setIsAuthenticated(true);
          return res.json();
        }
        // throw new Error("Token validation failed");
      })
      .then((data) => {
        setUserId(data.id);
      })

      .catch(() => {
        setIsAuthenticated(false);
        setUserId(null);
      });
    // }
  }, []);

  return (
    <UserContext.Provider
      value={{ userId, setUserId, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
