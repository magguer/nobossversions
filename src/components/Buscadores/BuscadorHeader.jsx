import { NavLink } from "react-router-dom";
import ButtonIcon1 from "../Buttons/ButtonIcon1";

function BuscadorHeader() {
  return (
    <div className="flex items-center bg-gray-500 dark:bg-[#111111;] rounded-lg">
      <input
        className="text-sm m-1 w-36 mobilS:w-44 mobilXL:w-72 laptop:w-96 py-1 bg-transparent border-transparent rounded-lg focus:ring-gray-600 focus:border-transparent placeholder:text-gray-300 dark:placeholder:text-gray-500 "
        type="text"
        name=""
        id=""
        placeholder="Buscar proyectos, rubros, zonas..."
      />
      <NavLink to="/explore">
        <div className="text-white hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-800 dark:hover:bg-[#1c1c1c] dark:focus:ring-[#2d2d2d] rounded-lg p-1.5 m-1 cursor-pointer">
          <img
            className="w-5"
            src="src\assets\images\iconos\explorador-icon.png"
            alt=""
          />
        </div>
      </NavLink>
    </div>
  );
}

export default BuscadorHeader;
