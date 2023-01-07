//React
import { useContext } from "react";

//Components
import SubComponentsBody2 from "../../../Secondaries/SubComponentsBody2";
import TextH3 from "../../../Texts/TextH3";
import TextH2 from "../../../Texts/TextH2";

//Context
import { ProjectContext } from "../../../../context/ProjectProvider";

const ResumenBody = ({ resumenBodyVisible, onClose }) => {

  const { project } = useContext(ProjectContext);
  return (
    <SubComponentsBody2 link={"/management"} textTitle="Resumen de">
      <div className="grid pb-5 grid-cols-1 tablet:grid-cols-3 justify-items-center m-5 gap-3">
        <div className="flex gap-3 bg-lightbgsecondary dark:bg-darkbgprimary rounded p-3">
          <TextH2 textTitle={"Ganancias:"} />
          <TextH3 textTitle={project.availableMoney} />
        </div>
        <div className="flex gap-3 bg-lightbgsecondary dark:bg-darkbgprimary rounded p-3">
          <TextH2 textTitle={"Inversión total:"} />
          <TextH3 textTitle={project.investedMoney} />
        </div>
        <div className="flex gap-3 bg-lightbgsecondary dark:bg-darkbgprimary rounded p-3">
          <TextH2 textTitle={"Gasto total:"} />
          <TextH3 textTitle={project.investedMoney} />
        </div>
      </div>
    </SubComponentsBody2>
  );
};

export default ResumenBody;
