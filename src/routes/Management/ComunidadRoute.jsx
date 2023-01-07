import { useContext, useState } from "react";
import ComunidadBody from "../../components/Primaries/Management/Comunidad/ComunidadBody";
import SmoothieOpcIn from "../../transitions/SmoothieOpcIn";
import { ProjectContext } from "../../context/ProjectProvider";

const ComunidadRoute = ({ path }) => {
  const { idProject } = useContext(ProjectContext);

  return (
    <>
      <SmoothieOpcIn>
        <ComunidadBody />
      </SmoothieOpcIn>
    </>
  );
};

export default ComunidadRoute;
