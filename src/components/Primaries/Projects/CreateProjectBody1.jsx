import { useState } from "react";
import SmoothieOpcIn from "../../../transitions/SmoothieOpcIn";
import ButtonCancelText1 from "../../Buttons/ButtonCancelText1";
import ButtonText1 from "../../Buttons/ButtonText1";
import FormInputsText from "../../Forms/FormInputsText";
import useProjects from "../../../hooks/useProjects";
import ButtonBack from "../../Buttons/ButtonBack1";

const CreateProjectBody1 = ({ crateProjectVisible, onClose }) => {
  const [nameProjectData, setNameProjectData] = useState("");
  const [rubroProjectData, setRubroProjectData] = useState("");
  const [imgProjectData, setImgProjectData] = useState("");
  const { error, loading, addProject } = useProjects();

  if (!crateProjectVisible) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProject(nameProjectData, rubroProjectData, imgProjectData);
    onClose();
  };

  return (
    <SmoothieOpcIn>
      <div className="fixed inset-0">
        <div className="modal-flex-container flex items-center justify-center min-h-screen text-center">
          <div className="modal-bg-container fixed inset-0 bg-gray-500 dark:bg-[#242424] bg-opacity-75"></div>
          <div className="modal-container  mb-16 tablet:mb-0 inline-block align-bottom bg-gray-700 dark:bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transform transition-all">
            <ButtonBack textButton={"<"} onClick={onClose} />
            <div className="modal-wrapper dark:bg-[#1a1a1a] p-10">
              <div className="modal-wrapper-flex ">
                {/*       Formulario */}
                <form onSubmit={handleSubmit}>
                  <div className="modal-content">
                    <h3 className="mb-5">Creador de Proyectos</h3>

                    <FormInputsText
                      value={nameProjectData}
                      onChange={(e) => setNameProjectData(e.target.value)}
                      placeholder="Nombre del Proyecto"
                    />
                    <FormInputsText
                      value={rubroProjectData}
                      onChange={(e) => setRubroProjectData(e.target.value)}
                      placeholder="Rubro del Proyecto"
                    />
                    <FormInputsText
                      type="file"
                      value={imgProjectData}
                      onChange={(e) => setImgProjectData(e.target.value)}
                    />
                  </div>

                  <div className="modal-actions grid gap-3">
                    <ButtonText1
                      loading={loading.addProject}
                      type="submit"
                      textButton={"Crear Proyecto"}
                    />
                    <ButtonCancelText1
                      onClick={onClose}
                      textButton={"Cancelar"}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SmoothieOpcIn>
  );
};

export default CreateProjectBody1;
