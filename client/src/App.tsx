// src/App.tsx
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar"; // Assurez-vous que la Sidebar est importée
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <SideBar /> {/* Sidebar uniquement pour les écrans de bureau */}
      <div className="main-content">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
