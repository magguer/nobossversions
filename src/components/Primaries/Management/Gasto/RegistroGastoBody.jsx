//React
import { useContext } from "react";

//Components
import SubComponentsBody from "../../../Secondaries/SubComponentsBody";
import TextH3 from "../../../Texts/TextH3";
import TextH2 from "../../../Texts/TextH2";

//Context
import { ProjectContext } from "../../../../context/ProjectProvider";
import FormInputsText2 from "../../../Forms/FormInputsText2";
import ButtonCancelText1 from "../../../Buttons/ButtonCancelText1";

const RegistroGastoBody = ({ registroGastoBodyVisible, onClose }) => {
  if (!registroGastoBodyVisible) return null;
  const { project } = useContext(ProjectContext);
  return (
    <SubComponentsBody onClose={onClose} textTitle="Registro de Gasto">
      <div className="p-10 m-2 border-2 border-red-800 rounded-lg">

          <FormInputsText2 placeholder={"Monto a registrar"} />
          <FormInputsText2 placeholder={"Motivo del gasto"} />
          <ButtonCancelText1 textButton={"Registrar Gasto"} />

      </div>
    </SubComponentsBody>
  );
};

export default RegistroGastoBody;
