import { useContext, useState } from "react";
import ClientesBody from "../../components/Primaries/Management/Clientes/ClientesBody";
import SmoothieOpcIn from "../../transitions/SmoothieOpcIn";
import { ProjectContext } from "../../context/ProjectProvider";

const ClientesRoute = () => {

  const { idProject } = useContext(ProjectContext);

  return (
    <>
      <SmoothieOpcIn>
        <ClientesBody
          link={"/management"}
          path={`projects/${idProject}/clients`}
        />
      </SmoothieOpcIn>
    </>
  );
};

export default ClientesRoute;
