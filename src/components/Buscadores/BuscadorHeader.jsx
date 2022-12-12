import { NavLink } from "react-router-dom";
import ButtonIcon1 from "../Buttons/ButtonIcon1";

function BuscadorHeader() {
  return (
    <div className="flex items-center bg-[#111111;] rounded-lg">
      <input
        className="text-sm m-1 w-36 mobilS:w-44 mobilXL:w-72 laptop:w-96 py-1 bg-transparent border-transparent rounded-lg focus:border-gray-700"
        type="text"
        name=""
        id=""
        placeholder="Buscar proyectos, rubros, zonas..."
      />
      <NavLink to="/explore">
        <div className="hover:bg-[#242424] rounded-lg p-1.5 m-1 cursor-pointer">
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
