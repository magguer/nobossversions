//Imports React
import { useState, useEffect } from "react";
//Imports Components
import CreateProjectBody1 from "./CreateProjectBody1";
import ProjectBody from "./ProjectBody";
//Import Hoocks
import useProjects from "../../../hooks/useProjects";
import { Link, useParams } from "react-router-dom";

const YourProjectsBody = () => {
  const [expandedYourProjectsBody, setExpandedYourProjectsBody] =
    useState(false);
  const [showCrateProject, setShowCrateProject] = useState(false);
  const handleOnCloseCreateProject = () => setShowCrateProject(false);

  const {
    projects,
    error,
    loading,
    getProjects,
    getProject,
  } = useProjects();

  useEffect(() => {
    getProjects();
  }, []);

  if (loading.getProjects)
    return (
      <div className="p-4 bg-black rounded-lg">
        {" "}
        <p>Cargando Proyectos...</p>{" "}
      </div>
    );

  const handleClickSendProject = async (projectId) => {
    await getProject(projectId);
  };

  return (
    <div>
      {expandedYourProjectsBody ? (
        <div
          onMouseEnter={() => setExpandedYourProjectsBody(true)}
          onMouseLeave={() => setExpandedYourProjectsBody(false)}
          className="hidden tablet:grid bg-lightbgprimary dark:bg-darkbgprimary rounded-lg p-3 shadow-lg justify-center gap-3 transition-all duration-500"
        >
          <img
            src="labels\tus_proyectos_light.png"
            className="w-8/12 mx-auto my-3 transition-all duration-500"
            alt=""
          />

          {projects.map((project) => (
            <Link to="/management`">
              <div
                key={project.id}
                onClick={() => handleClickSendProject(project.id)}
              >
                <ProjectBody
                  imgProject={project.imgProject}
                  nameProject={project.nameProject}
                  rubroProject={project.rubroProject}
                />
              </div>
            </Link>
          ))}

          <div
            onClick={() => setShowCrateProject(true)}
            className=" text-white bg-lightbuttonprimary hover:bg-lightbuttonhoverprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary  dark:bg-darkbuttonprimary dark:hover:bg-darkbuttonhoverprimary dark:focus:ring-darkbuttonringprimary flex cursor-pointer w-10 tablet:w-full p-1.5 tablet:p-5 rounded transition-all duration-200 justify-center items-center "
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
      ) : (
        <div
          onMouseEnter={() => setExpandedYourProjectsBody(true)}
          onMouseLeave={() => setExpandedYourProjectsBody(false)}
          className="grid bg-lightbgprimary dark:bg-darkbgprimary rounded-lg p-3 shadow-lg justify-center gap-3 transition-all duration-500"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleClickSendProject(project.id)}
            >
              <ProjectBody
                expandedYourProjectsBody
                imgProject={project.imgProject}
                nameProject={project.nameProject}
                rubroProject={project.rubroProject}
              />
            </div>
          ))}

          {/*    <div
            onClick={() => setShowCrateProject(true)}
            className=" text-white bg-lightbuttonprimary hover:bg-lightbuttonhoverprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary  dark:bg-darkbuttonprimary dark:hover:bg-darkbuttonhoverprimary dark:focus:ring-darkbuttonringprimary flex cursor-pointer w-full px-5 py-3 rounded duration-500 justify-center items-center transition-all "
          >
            <span className="text-lg tablet:text-2xl">+</span>
          </div> */}

          <div>
            <CreateProjectBody1
              onClose={handleOnCloseCreateProject}
              crateProjectVisible={showCrateProject}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default YourProjectsBody;
