import { type ReactNode, createContext, useState } from "react";

// Définir le type de l'utilisateur
interface User {
  id: number;
  firstname: string;
  lastname: string;
  pseudo: string;
  email: string;
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

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
