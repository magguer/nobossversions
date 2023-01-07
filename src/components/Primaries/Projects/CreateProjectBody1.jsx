// Imports React
import { useState } from "react";

//Imports Transiciones
import SmoothieOpcIn from "../../../transitions/SmoothieOpcIn";

//Imports Componentes
import ButtonCancelText1 from "../../Buttons/ButtonCancelText1";
import ButtonText2 from "../../Buttons/ButtonText2";
import FormInputsText2 from "../../Forms/FormInputsText2";
import ButtonBack from "../../Buttons/ButtonBack1";
import TextH3 from "../../Texts/TextH3";
import Select from "react-select";
import HeaderComponentsBody from "../../Secondaries/HeaderComponentsBody";
import Paragraf1 from "../../Texts/Paragraf1";

//Imports Hooks
import useProjects from "../../../hooks/useProjects";

const CreateProjectBody1 = ({ crateProjectVisible, onClose }) => {
  const [nameProjectData, setNameProjectData] = useState("");
  const [rubroProjectData, setRubroProjectData] = useState("");
  const [imgProjectData, setImgProjectData] = useState("");
  const { error, loading, addProject, addImageProject } = useProjects();
  const [state, setState] = useState({ profileImg: "/iconos/user-icon.png" });
  const { profileImg } = state;

  if (!crateProjectVisible) return null;

  const RubrosListDB = [
    "Producción Musical",
    "Ropa/Accesorios",
    "Venta de Variedad",
    "Productos Naturales",
    "Gestión Digital",
  ];

  const handleSelectRubros = ({ value }) => {
    setRubroProjectData(value);
  };

  const handleImageLogo = (e) => {
    if (e.target.files[0]) {
      setImgProjectData(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setState({ profileImg: reader.result });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

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
          <div className="modal-bg-container fixed inset-0 bg-lightbgsecondary dark:bg-darksubbgprimary bg-opacity-80  dark:bg-opacity-90"></div>
          <div className="modal-container inline-block align-bottom rounded-lg bg-lightbgprimary  dark:bg-darkbgsecondary overflow-hidden shadow-lg transform transition-all duration-500">
            <ButtonBack textButton={"<"} onClick={onClose} />
            <div className="modal-wrapper">
              <div className="modal-wrapper-flex">
                <div className="shadow-xl">
                  <HeaderComponentsBody textTitle="Crear un Proyecto" />
                </div>
                <div className="mx-10 mt-3">
                  <Paragraf1
                    textTitle={
                      "Empieza a crear tu proyecto desde lo más básico."
                    }
                  />
                  <Paragraf1
                    textTitle={" Te acompañaremos en todos el proceso!"}
                  />
                </div>
                {/*       Formulario */}
                <form className="p-10" onSubmit={handleSubmit}>
                  <div className="modal-content">
                    <FormInputsText2
                      value={nameProjectData}
                      onChange={(e) => setNameProjectData(e.target.value)}
                      placeholder="Nombre del Proyecto"
                    />
                    <div>
                      <Select
                        options={RubrosListDB.map((rubro) => ({
                          label: rubro,
                          value: rubro,
                        }))}
                        onChange={handleSelectRubros}
                      />
                    </div>
                    <div className="flex gap-3 items-center my-5 justify-center w-full">
                      <div className="bg-lightbuttonprimary dark:bg-darkbgprimary hover:bg-lightbuttonhoverprimary dark:hover:bg-darkbuttonhoverprimary  h-8 w-[180px] rounded-lg">
                        <div className="relative w-full h-full items-center">
                          <div className="absolute inset-0">
                            <input
                              type="file"
                              accept=".jpeg, .jpg, .png, .webp, .svg"
                              name="bgfile"
                              id="bgfile"
                              className="relative z-10 opacity-0 cursor-pointer w-full h-full"
                              onChange={handleImageLogo}
                            />
                            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                              <div className="m-3">
                                <TextH3 textTitle={"Selecciona un Logo"} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-12 h-12 flex items-center justify-center bg-lightbuttonprimary dark:bg-darkbgprimary rounded-full">
                        <img
                          className="w-8"
                          src={profileImg}
                          alt="logoSelectedImg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="modal-actions grid gap-3">
                    <ButtonText2
                      loading={loading.addImageProject}
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
