//React
import { useContext, useState } from "react";

// Componentes
import ButtonText2 from "../../Buttons/ButtonText2";
import ButtonCancelText1 from "../../Buttons/ButtonCancelText1";
import SubComponentsBody from "../../Secondaries/SubComponentsBody";

//Hoocks
import useProjects from "../../../hooks/useProjects";

//Context
import { ProjectContext } from "../../../context/ProjectProvider";
import TextH3 from "../../Texts/TextH3";

const ProjectConfigBody = ({ projectConfigBodyVisible, onClose }) => {
  if (!projectConfigBodyVisible) return null;

  const { error, loading, addBannerProject, updateProject, deleteProject } =
    useProjects();

  const { project, idProject, setIdProject } = useContext(ProjectContext);

  const [banner1ProjectData, setBanner1ProjectData] = useState("");
  const [banner1, setBanner1] = useState({
    banner1Img: "/iconos/banner-icon.png",
  });
  const { banner1Img } = banner1;

  const handleImageBanner1 = (e) => {
    if (e.target.files[0]) {
      setBanner1ProjectData(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setBanner1({ banner1Img: reader.result });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleUpdateBanner1 = async () => {
    const banner1Project = await addBannerProject(banner1ProjectData);
    await updateProject(idProject, banner1Project);
    onClose()

  };

  const handleDeleteProject = () => {
    deleteProject(idProject);
  };

  return (
    <SubComponentsBody onClose={onClose} textTitle="Configuración de">
      <div className="m-5 mobilXL:w-[500px] tablet:w-[700px]">
        {project.banner1Project ? (
          <div className="grid w-60 mobilXL:w-96 m-auto justify-center gap-3 bg-lightbgsecondary dark:bg-darkbgprimary p-3 rounded-md">
            <TextH3 textTitle={"Banner del Proyecto"}/>
            <img className="w-60 rounded" src={project.banner1Project} />
          </div>
        ) : (
          <div className="flex gap-3 items-center justify-center w-full">
            {/*   <input
            type="file"
            accept=".jpeg, .jpg, .png, .webp, .svg"
            name="bgfile"
            id="bgfile"
            className="cursor-pointer h-full"
            onChange={handleImageBanner1}
          /> */}

            <div className="h-full w-[150px] rounded-lg">
              <div className="relative w-full h-full items-center">
                <div className="relative inset-0">
                  <input
                    type="file"
                    accept=".jpeg, .jpg, .png, .webp, .svg"
                    name="bgfile"
                    id="bgfile"
                    className="absolute z-10 opacity-0 cursor-pointer w-full h-full"
                    onChange={handleImageBanner1}
                  />
                  <div className="relative inset-0 w-full h-full flex items-center justify-center">
                    <ButtonText2 textButton={"Selecciona un Banner"} />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-12 h-12 flex items-center justify-center bg-lightbgsecondary dark:bg-darkbgprimary rounded-full">
              <img className="w-8" src={banner1Img} alt="logoSelectedImg" />
            </div>
            <ButtonText2
              loading={loading.addBannerProject}
              onClick={handleUpdateBanner1}
              textButton={"Subir Banner"}
            />
          </div>
        )}

        <div className="mt-5">
          <ButtonCancelText1
            textButton={"Eliminar Proyecto"}
            onClick={handleDeleteProject}
            loading={loading.deleteProject}
          />
        </div>
      </div>
    </SubComponentsBody>
  );
};

export default ProjectConfigBody;
