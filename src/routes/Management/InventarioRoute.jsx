import { useContext, useState } from "react";
import InventarioBody from "../../components/Primaries/Management/Inventario/InventarioBody";
import SmoothieOpcIn from "../../transitions/SmoothieOpcIn";
import { ProjectContext } from "../../context/ProjectProvider";

const InventarioRoute = ({ path }) => {
    
  const { idProject } = useContext(ProjectContext);

  return (
    <>
      <SmoothieOpcIn>
        <InventarioBody path={`projects/${idProject}/products`} />
      </SmoothieOpcIn>
    </>
  );
};

export default InventarioRoute;
