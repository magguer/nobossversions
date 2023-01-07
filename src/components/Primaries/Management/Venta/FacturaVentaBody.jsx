//React
import { useContext } from "react";

//Components
import SubComponentsBody from "../../../Secondaries/SubComponentsBody";
import FormInputsText2 from "../../../Forms/FormInputsText2";
import ButtonText2 from "../../../Buttons/ButtonText2";
import TextH3 from "../../../Texts/TextH3";
import TextH2 from "../../../Texts/TextH2";

//Context
import { ProjectContext } from "../../../../context/ProjectProvider";


const FacturaVentaBody = ({ facturaVentaBodyVisible, onClose }) => {
  if (!facturaVentaBodyVisible) return null;
  const { project } = useContext(ProjectContext);
  return (
    <SubComponentsBody onClose={onClose} textTitle="Facturación de">
      <div className="p-10 m-2 border-2 border-green-800 rounded-lg">
        <FormInputsText2 placeholder={"Monto a facturar"} />
        <FormInputsText2 placeholder={"Tipo de venta"} />
        <ButtonText2 textButton={"Registrar Gasto"} />
      </div>
    </SubComponentsBody>
  );
};

export default FacturaVentaBody;
