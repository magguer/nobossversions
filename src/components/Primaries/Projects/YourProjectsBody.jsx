import { useState, useEffect } from "react";
import useProjects from "../../../hooks/useProjects";
import ButtonBack from "../../Buttons/ButtonBack1";

import CreateProjectBody1 from "./CreateProjectBody1";
import ProjectBody from "./ProjectBody";

const YourProjectsBody = () => {
  const [showCrateProject, setShowCrateProject] = useState(false);
  const [yourProjectsSize, setYourProjectsSize] = useState(true);
  const handleOnCloseCreateProject = () => setShowCrateProject(false);
  const { projects, error, loading, getProjects, deleteProjects } = useProjects();

  useEffect(() => {
    getProjects();
  }, []);

  const handleYourProjectSize = () => {
    console.log(yourProjectsSize);
    setYourProjectsSize(!yourProjectsSize)
  }

  if (loading.getProjects)
    return (
      <div className="p-4 bg-black rounded-lg">
        {" "}
        <p>Cargando Proyectos...</p>{" "}
      </div>
    );

    const handleClickDeleteProject = async (projectId) => {
      await deleteProjects(projectId)
    }

  return (
    <div>
      <div className="hidden tablet:flex" >
      </div>
      <div className="flex tablet:grid bg-gray-700 dark:bg-[#1a1a1a] rounded-lg p-3 shadow-lg justify-center gap-3">
        <img
          src="labels\tus_Proyectos.png"
          className="hidden tablet:flex w-8/12 mx-auto my-3"
          alt=""
        />

        {projects.map((project) => (
          <div key={project.id} onClick={() => handleClickDeleteProject(project.id)}>
            <ProjectBody
              imgProject={project.imgProject}
              nameProject={project.nameProject}
              rubroProject={project.rubroProject}
            />
          </div>
        ))}

        <div
          onClick={() => setShowCrateProject(true)}
          className="flex cursor-pointer w-10 tablet:w-full p-1.5 tablet:p-5 rounded tablet:rounded-none bg-gray-600 hover:bg-gray-800 dark:bg-[#242424] dark:hover:bg-[#1c1c1c] transition-color duration-200 justify-center items-center"
        >
          <span className="text-lg tablet:text-2xl">+</span>
        </div>

        <div>
          <CreateProjectBody1
            onClose={handleOnCloseCreateProject}
            crateProjectVisible={showCrateProject}
          />
        </div>
      </div>
    </div>
  );
};

export default YourProjectsBody;
