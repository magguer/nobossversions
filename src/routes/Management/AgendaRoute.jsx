import { useContext, useState } from "react";
import AgendaBody from "../../components/Primaries/Management/Agenda/AgendaBody";
import SmoothieOpcIn from "../../transitions/SmoothieOpcIn";
import { ProjectContext } from "../../context/ProjectProvider";

const AgendaRoute = ({ path }) => {
    
  const { idProject } = useContext(ProjectContext);

  return (
    <>
      <SmoothieOpcIn>
        <AgendaBody path={`projects/${idProject}/dates`} />
      </SmoothieOpcIn>
    </>
  );
};

export default AgendaRoute;
