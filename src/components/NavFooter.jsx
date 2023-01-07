//Imports React
import { useContext, useState } from "react";

//Import React Dom
import { NavLink, Link } from "react-router-dom";

//Contexto
import { UserContext } from "../context/UserProvider";
import { ProjectContext } from "../context/ProjectProvider";

//Componentes
import ButtonIcon1 from "./Buttons/ButtonIcon1";
import ButtonTextIcon1 from "./Buttons/ButtonTextIcon1";
import ProjectBody from "./Primaries/Projects/ProjectBody";

const NavFooter = () => {
  const { user } = useContext(UserContext);
  const { project, projects, setIdProject } = useContext(ProjectContext);
  const [openProjectsBox, setOpenProjectsBox] = useState(false);

  const handleProjectsBox = () => {
    setOpenProjectsBox(!openProjectsBox);
  };

  const handleClickSendProject = (projectId) => {
    setIdProject(projectId);
    setOpenProjectsBox(!openProjectsBox);
  };

  const closedProjectBox =
    "opacity-0 bg-lightbgprimary dark:bg-darkbgprimary justify-center flex absolute gap-5 px-5 py-2 rounded-md bottom-[-50px] transition-all duration-500";
  const openPorojectBox =
    "opacity-1 bg-lightbgprimary dark:bg-darkbgprimary justify-center flex absolute gap-5 px-5 py-2 rounded-md bottom-[60px] transition-all duration-500";

  return (
    <>
      <footer className="tablet:hidden bottom-0 fixed w-full flex justify-center gap-8 items-center shadow-lg py-3 bg-lightbgprimary dark:bg-darkbgprimary text-white">
        <div className={openProjectsBox ? openPorojectBox : closedProjectBox}>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleClickSendProject(project.id)}
            >
              <NavLink to="/management">
                <ProjectBody
                  expandedYourProjectsBody
                  imgProject={project.imgProject}
                  nameProject={project.nameProject}
                  rubroProject={project.rubroProject}
                />
              </NavLink>
            </div>
          ))}
        </div>

        {user ? (
          <>
            <div>
              <NavLink to="/userdata">
                <ButtonIcon1 src="iconos\user-icon.png" />
              </NavLink>
            </div>
            <div>
              {project ? (
                <NavLink to="/management">
                  <div
                    onContextMenu={handleProjectsBox}
                  >
                    <ButtonIcon1 src={project.imgProject} alt="homeIcon" />
                  </div>
                </NavLink>
              ) : (
                <NavLink to="/management">
                <div
                  onContextMenu={handleProjectsBox}
                >
                  <ButtonIcon1 src="iconos\home-icon.png" alt="homeIcon" />
                </div>
                </NavLink>
              )}
            </div>
            <div className="justify-self-end">
              <NavLink to="/usermarket">
                <ButtonIcon1 src="iconos\market-icon.png" alt="marketIcon" />
              </NavLink>
            </div>
          </>
        ) : (
          <>
            <div className="justify-self-end">
              <NavLink to="/market">
                <ButtonIcon1 src="iconos\market-icon.png" alt="marketIcon" />
              </NavLink>
            </div>
            <div>
              <NavLink to="/login">
                <div>
                  <ButtonTextIcon1
                    textButton={"Acceder"}
                    src="iconos\user-icon.png"
                  />
                </div>
              </NavLink>
            </div>
          </>
        )}
      </footer>
    </>
  );
};

export default NavFooter;
