// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component
import App from "./App";
import Carte from "./pages/PagesClassiques/Carte";
import Classement from "./pages/PagesClassiques/Classement";
import Contact from "./pages/PagesClassiques/Contact";
import Regles from "./pages/PagesClassiques/Regles";
import Shoot from "./pages/Photos/Shoot";
import SoumPhoto from "./pages/Photos/SoumPhoto";
import CreaProfil from "./pages/Profil/CreaProfil";
import ModifProfil from "./pages/Profil/ModifProfil";
import Profil from "./pages/Profil/Profil";
import Login from "./pages/Secu/Login";
import MdpOublie from "./pages/Secu/MdpOublie";
// Import additional components for new routes
// Try creating these components in the "pages" folder

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* ************************************************************************* */

// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
  {
    path: "", // The root path
    element: <Carte />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "Modification_mot_de_passe",
    element: <MdpOublie />,
  },
  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "Regles",
        element: <Regles />,
      },
      {
        path: "Classement",
        element: <Classement />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Shoot",
        element: <Shoot />,
      },
      {
        path: "Donnees_photo",
        element: <SoumPhoto />,
      },
      {
        path: "Creation_de_profil",
        element: <CreaProfil />,
      },
      {
        path: "Modification_de_profil ",
        element: <ModifProfil />,
      },
      {
        path: "Profil",
        element: <Profil />,
      },

    ],
  },
  // Try adding a new route! For example, "/about" with an About component
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
