import { useState } from "react";
import ButtonMenuBurguer from "../Buttons/ButtonMenuBurguer";
import ButtonText1 from "../Buttons/ButtonText1";
    document.documentElement.classList.add("dark");
const BurguerMenuBody = ({ activeMenu }) => {
  const [setBurguerMenu] = useState({ activeMenu });

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  const outClick = () => {
    return setBurguerMenu(!activeMenu);
  };

  return (
    <>
      <div
        className={`${
          activeMenu
            ? "transition-all duration-500 ease-in fixed inset-0 bg-gray-700 dark:bg-[#1a1a1a] bg-opacity-30"
            : "transition-all duration-500 ease-in bg-gray-700 dark:bg-[#1a1a1a] bg-opacity-0"
        }`}
      >
        <div
          className={`${
            activeMenu
              ? " w-full h-full tablet:w-96 tablet:h-full fixed transition-all duration-500 shadow-lg bg-gray-700 dark:bg-[#1a1a1a] pt-20"
              : " w-full h-0 tablet:w-0 tablet:h-full fixed transition-all duration-500 pt-20 ease-in"
          }`}
        >
          <div
            className={`${
              activeMenu
                ? "opacity-100 visible grid items-center transition-all duration-1000"
                : "opacity-0 invisible grid items-center transition-all duration-200"
            }`}
          >
            <ButtonMenuBurguer textButton={"¿Quiénes Somos?"} />
            <ButtonMenuBurguer textButton={"¿Qué puedo hacer en Noboss?"} />
            <ButtonMenuBurguer textButton={"Trabaja con nosotros"} />
            <div className="mx-auto mt-10 ">
              <ButtonText1 onClick={toggleDarkMode} textButton={"Dia/Noche"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurguerMenuBody;
