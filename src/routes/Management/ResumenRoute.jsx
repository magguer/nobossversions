import { useContext, useState } from "react";
import ResumenBody from "../../components/Primaries/Management/Resumen/ResumenBody";
import SmoothieOpcIn from "../../transitions/SmoothieOpcIn";
import { ProjectContext } from "../../context/ProjectProvider";

const ResumenRoute = ({ path }) => {
  const { idProject } = useContext(ProjectContext);

  return (
    <>
      <SmoothieOpcIn>
        <ResumenBody />
      </SmoothieOpcIn>
    </>
  );
};

export default ResumenRoute;
