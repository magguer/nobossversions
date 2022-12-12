//Imports React
import { useContext } from "react";

//Import React Dom
import { NavLink, Link } from "react-router-dom";

//Contexto
import { UserContext } from "../context/UserProvider";

//Componentes
import ButtonIcon1 from "./Buttons/ButtonIcon1";
import ButtonTextIcon1 from "./Buttons/ButtonTextIcon1";

const NavFooter = () => {
  const { user } = useContext(UserContext);

  return (
    <>

        <footer className=" tablet:hidden bottom-0 fixed w-full flex justify-center gap-8 items-center shadow-lg py-3 bg-[#1a1a1a] text-white">
          {user ? (
            <>
              <div>
                <NavLink to="/userdata">
                  <ButtonIcon1 src="src\assets\images\iconos\user-icon.png" />
                </NavLink>
              </div>
              <div className="justify-self-end">
                <NavLink to="/market">
                  <ButtonIcon1
                    src="src\assets\images\iconos\market-icon.png"
                    alt="marketIcon"
                  />
                </NavLink>
              </div>
              <div>
                <NavLink to="/management">
                  <ButtonIcon1
                    src="src\assets\images\iconos\home-icon.png"
                    alt="homeIcon"
                  />
                </NavLink>
              </div>
            </>
          ) : (
            <>
              <div className="justify-self-end">
                <NavLink to="/market">
                  <ButtonIcon1
                    src="src\assets\images\iconos\market-icon.png"
                    alt="marketIcon"
                  />
                </NavLink>
              </div>
              <div>
                <NavLink to="/login">
                  <div>
                    <ButtonTextIcon1
                      textButton={"Acceder"}
                      src="src\assets\images\iconos\user-icon.png"
                    />
                  </div>
                </NavLink>
              </div>
            </>
          )}
        </footer>

    </>
  );
};

export default NavFooter;
