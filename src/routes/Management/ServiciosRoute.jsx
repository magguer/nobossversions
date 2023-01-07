import { useContext, useState } from "react";
import ServiciosBody from "../../components/Primaries/Management/Servicios/ServiciosBody";
import SmoothieOpcIn from "../../transitions/SmoothieOpcIn";
import { ProjectContext } from "../../context/ProjectProvider";

const ServiciosRoute = () => {

  const { idProject } = useContext(ProjectContext);

  return (
    <>
      <SmoothieOpcIn>
        <ServiciosBody
          link={"/management"}
          path={`projects/${idProject}/services`}
        />
      </SmoothieOpcIn>
    </>
  );
};

export default ServiciosRoute;
