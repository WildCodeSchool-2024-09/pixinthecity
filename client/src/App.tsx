import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import "./App.css";
import { UserProvider } from "./contexts/UserContext";

function App() {
  const location = useLocation();

  // Vérifiez si l'URL actuelle est celle de la page de login
  const isLoginPage = location.pathname === "/login";

  return (
    <UserProvider>
      <div className="app-container">
        {/* Ne pas afficher la Sidebar si c'est la page de login */}
        {!isLoginPage && <SideBar />}
        <div className="main-content">
          {/* Ne pas afficher le Header et Footer si c'est la page de login */}
          {!isLoginPage && <Header />}
          <Outlet /> {/* Ce qui permet de rendre les autres composants/pages */}
          {/* Ne pas afficher le Footer si c'est la page de login */}
          {!isLoginPage && <Footer />}
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
