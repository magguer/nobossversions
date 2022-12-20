// Imports React
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "flowbite";

// Proveedores
import UserProvider from "./context/UserProvider";
import ProjectProvider from "./context/ProjectProvider";

// Componentes
import App from "./App";

// Estilos
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="scrollbar bg-lightbgunder text-white dark:bg-darkbgunder h-screen w-full fixed">
    <UserProvider>
      <ProjectProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProjectProvider>
    </UserProvider>
  </div>
);
