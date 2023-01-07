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
                <ButtonIcon1 src="https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/nobossAppSimple%2Frecursos%2Ficonos%2Ficono%20usuario%20blanco.png?alt=media&token=3ad98721-d5d8-4ff6-907c-25c945a71d4d" />
              </NavLink>
            </div>
            <div>
              {project ? (
               
                  <div
                    onClick={handleProjectsBox}
                  >
                    <ButtonIcon1 src={project.imgProject} alt="homeIcon" />
                  </div>
           
              ) : (
              
                <div
                  onClick={handleProjectsBox}
                >
                  <ButtonIcon1 src="https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/nobossAppSimple%2Frecursos%2Ficonos%2F01-home-icon-blanco.png?alt=media&token=0aea7cfe-3a83-443d-a059-f04ec48449cd" alt="homeIcon" />
                </div>
               
              )}
            </div>
            <div className="justify-self-end">
              <NavLink to="/usermarket">
                <ButtonIcon1 src="https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/nobossAppSimple%2Frecursos%2Ficonos%2Fcarrito%201.png?alt=media&token=9aad05a4-5039-40b8-9a24-585df898f7dd" alt="marketIcon" />
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
