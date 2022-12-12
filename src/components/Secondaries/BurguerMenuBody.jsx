import { useState } from "react";
import ButtonMenuBurguer from "../Buttons/ButtonMenuBurguer";

const BurguerMenuBody = ({ activeMenu }) => {
  const [setBurguerMenu] = useState({ activeMenu });

  const outClick = () => {
    return setBurguerMenu(!activeMenu);
  };

  return (
    <>
      <div
        className={`${
          activeMenu
            ? "transition-all duration-500 ease-in fixed inset-0 bg-[#242424] bg-opacity-30"
            : "transition-all duration-500 ease-in bg-[#242424] bg-opacity-0"
        }`}
      >
        <div
          className={`${
            activeMenu
              ? " w-full h-96 tablet:w-96 tablet:h-full fixed transition-all duration-500 shadow-lg bg-[#1a1a1a] pt-20"
              : " w-full h-0 tablet:w-0 tablet:h-full fixed transition-all duration-500 pt-20 ease-in"
          }`}
        >
          <div
            className={`${
              activeMenu
                ? "opacity-100 visible transition-all duration-1000"
                : "opacity-0 invisible transition-all duration-200"
            }`}
          >
            <ButtonMenuBurguer textButton={"¿Quiénes Somos?"} />
            <ButtonMenuBurguer textButton={"¿Qué puedo hacer en Noboss?"} />
            <ButtonMenuBurguer textButton={"Trabaja con nosotros"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BurguerMenuBody;
