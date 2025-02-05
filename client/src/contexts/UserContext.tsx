import Cookies from "js-cookie";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Crée un provider pour fournir le contexte à l'application
const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      fetch(`${import.meta.env.VITE_API_URL}/api/auth`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Token validation failed");
        })
        .then((data) => {
          if (data.user) {
            setUser(data.user);
            setIsAuthenticated(true);
          }
        })
        .catch(() => {
          setIsAuthenticated(false);
          setUser(null);
        });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};
export function useIsAuthenticatedContext() {
  const value = useContext(UserContext);
  if (value === null) {
    throw new Error(
      "useIsAuthenticatedContext must be used within an IsAuthenticatedProvider",
    );
  }
  return value;
}
export { UserContext, UserProvider };
