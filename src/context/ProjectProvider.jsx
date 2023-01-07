import { createContext, useState } from "react";
import { useEffect } from "react";
import useProjects from "../hooks/useProjects";

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const { getProject, projects, project } = useProjects();
  const [idProject, setIdProject] = useState("");

  useEffect(() => {
    getProject(idProject);
  }, [idProject]);

  {
    idProject
      ? (document.title = `Noboss | ${project.nameProject}`)
      : (document.title = `Noboss | Viví de lo Tuyo`);
  }



  if (idProject === "") {
    return (
      <ProjectContext.Provider value={{ projects, setIdProject }}>
        {children}
      </ProjectContext.Provider>
    );
  }

  return (
    <ProjectContext.Provider
      value={{ projects, project, setIdProject, idProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
export default ProjectProvider;
