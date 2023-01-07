// Imports React Router
import { Routes, Route } from "react-router-dom";

// FireBase Components
import RequireAuth from "./context/RequireAuth";

// Rutas
import Login from "./routes/noUserAuth/Login";
import Home from "./routes/noUserAuth/Home";
import UserData from "./routes/UserData";
import RegisterUser from "./routes/noUserAuth/RegisterUser";
import ManagementRoute from "./routes/ManagementRoute";
import ExploreRoute from "./routes/ExploreRoute";
import SomosRoute from "./routes/noUserAuth/SomosRoute";
import QueHacerRoute from "./routes/noUserAuth/QueHacerRoute";
import PlanesRoute from "./routes/noUserAuth/PlanesRoute";
import EquipoRoute from "./routes/noUserAuth/EquipoRoute";
import ClientesRoute from "./routes/Management/ClientesRoute";
import InventarioRoute from "./routes/Management/InventarioRoute";
import ServiciosRoute from "./routes/Management/ServiciosRoute";
import AgendaRoute from "./routes/Management/AgendaRoute";
import ResumenRoute from "./routes/Management/ResumenRoute";
import ComunidadRoute from "./routes/Management/ComunidadRoute";

// Componentes
import Header from "./components/Header";
import NotFound from "./routes/Errors/NotFound";
import MarketRoute from "./routes/MarketRoute";
import NavFooter from "./components/NavFooter";

// Layouts
import BodyLayout from "./Layouts/BodyLayout";
import LayoutContainerForm from "./Layouts/LayoutContainerForm";
import YourProjectLayout from "./Layouts/YourProjectsLayout";


const App = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <>
      <div className="fixed w-full">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<BodyLayout />}>
          <Route index element={<Home />} />
          <Route path="/market" element={<MarketRoute />} />
          <Route path="/explore" element={<ExploreRoute />} />
          <Route path="/somos" element={<SomosRoute />} />
          <Route path="/quehacer" element={<QueHacerRoute />} />
          <Route path="/planes" element={<PlanesRoute />} />
          <Route path="/equipo" element={<EquipoRoute />} />

          {/*  Rutas Protegidas */}
          <Route path="/" element={<RequireAuth />}>
            <Route path="/userdata" element={<UserData />} />
            <Route path="/" element={<YourProjectLayout />}>
              <Route path="/usermarket" element={<MarketRoute />} />
              <Route path="/management" element={<ManagementRoute />} />
              <Route path="/clientes" element={<ClientesRoute />} />
              <Route path="/inventario" element={<InventarioRoute />} />
              <Route path="/servicios" element={<ServiciosRoute />} />
              <Route path="/agenda" element={<AgendaRoute />} />
              <Route path="/resumen" element={<ResumenRoute />} />
              <Route path="/comunidad" element={<ComunidadRoute />} />
            </Route>
          </Route>

          {/* Ruta inexistentes (404) */}
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/" element={<LayoutContainerForm />}>
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <div className="fixed w-full">
        <NavFooter />
      </div>
    </>
  );
};

export default App;
