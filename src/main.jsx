// Imports React
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import 'flowbite';

// Proveedores
import UserProvider from "./context/UserProvider";

// Componentes
import App from "./App";

// Estilos
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>,
);
