// Imports React Router
import { Routes, Route } from "react-router-dom";

// Imports React
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";

// FireBase Components
import RequireAuth from "./context/RequireAuth";

// Rutas
import Login from "./routes/noUserAuth/Login";
import Home from "./routes/noUserAuth/Home";
import UserData from "./routes/UserData";
import RegisterUser from "./routes/noUserAuth/RegisterUser";
import ManagementRoute from "./routes/ManagementRoute";
import ExploreRoute from "./routes/ExploreRoute";

// Componentes
import Header from "./components/Header";
import NotFound from "./routes/Errors/NotFound";
import MarketRoute from "./routes/MarketRoute";
import NavFooter from "./components/NavFooter";

// Layouts
import BodyLayout from "./Layouts/BodyLayout";
import LayoutContainerForm from "./Layouts/LayoutContainerForm";

const App = () => {
  const { user } = useContext(UserContext);

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  if (user === false) {
    return <div className="flex justify-center mt-28 h-full"></div>;
  }

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<BodyLayout />}>
          <Route index element={<Home />} />
          <Route path="/market" element={<MarketRoute />} />
          <Route path="/explore" element={<ExploreRoute />} />

          {/*  Rutas Protegidas */}
          <Route path="/" element={<RequireAuth />}>
            <Route path="/userdata" element={<UserData />} />
            <Route path="/management" element={<ManagementRoute />}></Route>
            <Route path="/:nameProject" element={<ManagementRoute />}></Route>
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
