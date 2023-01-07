//React
import { useContext } from "react";
//Context
import { ProjectContext } from "../../../../context/ProjectProvider";
import SubComponentsBody2 from "../../../Secondaries/SubComponentsBody2";
import TextH3 from "../../../Texts/TextH3";

const ComunidadBody = ({ comunidadBodyVisible, onClose }) => {

  const { project } = useContext(ProjectContext);

  return (
    <SubComponentsBody2 link={"/management"} textTitle={"Comunidad de"}>
      <div className=" text-center m-10 pb-10">
        <TextH3
          textTitle={
            "Componente destinado a la sección 'Comunidad'. La cual incorporará la siguientes funciones: "
          }
        />
        {project.uid.map((user) => {
          <div key={project.uid}>
            <TextH3 textTitle={user}/>
          </div>;
        })}
      </div>
    </SubComponentsBody2>
  );
};

export default ComunidadBody;
