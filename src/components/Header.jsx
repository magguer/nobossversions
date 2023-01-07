//Imports React
import { useEffect, useState } from "react";
import { useContext } from "react";

//Import React Dom
import { NavLink, Link } from "react-router-dom";

//Contexto
import { UserContext } from "../context/UserProvider";

//Componentes
import ButtonIcon1 from "./Buttons/ButtonIcon1";
import ButtonTextIcon1 from "./Buttons/ButtonTextIcon1";
import BurguerMenuBody from "./Secondaries/BurguerMenuBody";
import BuscadorHeader from "./Buscadores/BuscadorHeader";
import BurguerButton from "./Buttons/ButtonBurguer";

//Hooks
import useProjects from "../hooks/useProjects";

const Header = () => {
  const { user } = useContext(UserContext);
  const [burguerMenu, setBurguerMenu] = useState(false);

  const handleClick = () => {
    setBurguerMenu(!burguerMenu);
  };

  return (
    <>
      <BurguerMenuBody burguerMenu={burguerMenu} setBurguerMenu={setBurguerMenu} handleClick={handleClick} />
      <div className="w-full mt-0 flex">
        <nav className="fixed w-full flex top-0 justify-between items-center shadow-lg px-1 mobilL:px-5 py-2 bg-lightbgprimary dark:bg-darkbgprimary text-white roundedb-md">
          {/* Burguer Menu */}
          <div className="flex items-center gap-4">
            {/*   <img src={project.imgProject} alt="img" /> */}
            <div className="hidden tablet:flex" onClick={handleClick}>
              <BurguerButton />
            </div>
            {/*  Logo Noboss */}

            <Link to="/">
              <img
                src="logoNoboss\NobossLogoBlanco.png"
                alt=""
                className="hidden mobilXL:flex mobilM:w-28"
              />
            </Link>
            <Link to="/">
              <img
                src="logoNoboss\NobossLogopng3.png"
                alt=""
                className="w-6 mobilXL:hidden"
              />
            </Link>
          </div>
          {/* Buscador */}
          <div>
            <BuscadorHeader />
          </div>
          {/* User Menu */}
          <div className="hidden tablet:flex gap-4 items-center ">
            {user ? (
              <>
                <div>
                  <NavLink to="/userdata">
                    <ButtonIcon1 src="iconos\user-icon.png" />
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/usermarket">
                    <ButtonIcon1
                      src="iconos\market-icon.png"
                      alt="marketIcon"
                    />
                  </NavLink>
                </div>

                <div>
                  <NavLink to="/management">
                    <ButtonIcon1 src="iconos\home-icon.png" alt="homeIcon" />
                  </NavLink>
                </div>
              </>
            ) : (
              <>
                <div className="justify-self-end">
                  <NavLink to="/market">
                    <ButtonIcon1
                      src="iconos\market-icon.png"
                      alt="marketIcon"
                    />
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/login">
                    <div className="hidden tablet:block">
                      <ButtonTextIcon1
                        textButton={"Acceder"}
                        src="iconos\user-icon.png"
                      />
                    </div>
                  </NavLink>
                </div>
              </>
            )}
          </div>
          <div className="flex tablet:hidden " onClick={handleClick}>
            <BurguerButton />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
