// Imports React
import { useState } from "react";
//Imports Transiciones
import SmoothieOpcIn from "../../../transitions/SmoothieOpcIn";
//Imports Componentes
import ButtonCancelText1 from "../../Buttons/ButtonCancelText1";
import ButtonText1 from "../../Buttons/ButtonText1";
import FormInputsText from "../../Forms/FormInputsText";
import ButtonBack from "../../Buttons/ButtonBack1";
//Imports Hooks
import useProjects from "../../../hooks/useProjects";

const CreateProjectBody1 = ({ crateProjectVisible, onClose }) => {
  const [nameProjectData, setNameProjectData] = useState("");
  const [rubroProjectData, setRubroProjectData] = useState("");
  const [imgProjectData, setImgProjectData] = useState("");
  const { error, loading, addProject, addImageProject } = useProjects();

  if (!crateProjectVisible) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const logoProject = await addImageProject(imgProjectData);
    await addProject(nameProjectData, rubroProjectData, logoProject);

    onClose();
  };

  return (
    <SmoothieOpcIn>
      <div className="fixed inset-0">
        <div className="modal-flex-container flex items-center justify-center min-h-screen text-center">
          <div className="modal-bg-container fixed inset-0 bg-lightbgsecondary dark:bg-[#242424] bg-opacity-60  dark:bg-opacity-60"></div>
          <div className="modal-container  mb-16 tablet:mb-0 inline-block align-bottom bg-lightbgprimary dark:bg-darkbgprimary rounded-lg overflow-hidden shadow-lg transform transition-all">
            <ButtonBack textButton={"<"} onClick={onClose} />
            <div className="modal-wrapper dark:bg-darkbgprimary p-10">
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
                    <input
                      type="file"
                      className="mb-5"
                      onChange={(e) => setImgProjectData(e.target.files[0])}
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
