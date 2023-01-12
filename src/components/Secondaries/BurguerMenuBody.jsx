import { useState } from "react";
import ButtonMenuBurguer from "../Buttons/ButtonMenuBurguer";
import ButtonText1 from "../Buttons/ButtonText1";
document.documentElement.classList.add("dark");
const BurguerMenuBody = ({ setBurguerMenu, burguerMenu }) => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  const outClick = () => {
    setBurguerMenu(!burguerMenu);
  };

  return (
    <>
      <div
        onClick={outClick}
        className={`${
          burguerMenu
            ? "transition-all duration-300 ease-in cursor-pointer inset-0 fixed bg-lightbgsecondary dark:bg-darkbgsecondary bg-opacity-75 dark:bg-opacity-75 "
            : "transition-all duration-300 ease-in inset-0 bg-lightbgsecondary dark:bg-darkbgprimary bg-opacity-0 dark:bg-opacity-0"
        }`}
      >
        <div
          className={`${
            burguerMenu
              ? " w-full h-full scrollbar pb-20 tablet:w-96 tablet:h-full fixed transition-all duration-500 top-1 shadow-lg bg-lightbgprimary dark:bg-darkbgprimary pt-20"
              : " w-full top-[-100px] h-0 tablet:w-0 tablet:h-full fixed transition-all duration-500 pt-20 ease-in"
          }`}
        >
          <div
            className={`${
              burguerMenu
                ? "opacity-100 visible grid items-center transition-all duration-1000"
                : "opacity-0 invisible grid items-center transition-all duration-200"
            }`}
          >
            <div onClick={outClick}>
              <ButtonMenuBurguer
                navigate={"/somos"}
                textButton={"¿Quiénes Somos?"}
              />
            </div>
            <div onClick={outClick}>
              <ButtonMenuBurguer
                navigate={"/quehacer"}
                textButton={"¿Qué puedo hacer en Noboss?"}
              />
            </div>
            <ButtonMenuBurguer
              navigate={"/planes"}
              textButton={"Sobre los Planes Premium"}
            />
            <div onClick={outClick}>
              <ButtonMenuBurguer
                navigate={"/equipo"}
                textButton={"Únete al equipo"}
              />
            </div>
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
