import { createContext, useState } from "react";
import { useEffect } from "react";
import useProjects from "../hooks/useProjects";

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const {
    getProject,
    projects,
    project,
    providers,
    getProviders,
    getSpecificProviders,
    specificProviders,
  } = useProjects();
  
  const [idProject, setIdProject] = useState("");
  const [rubroProject, setRubroProject] = useState("");

  useEffect(() => {
    getProject(idProject);
  }, [idProject]);

  useEffect(() => {
    getProviders();
  }, []);

  useEffect(() => {
    getSpecificProviders(rubroProject);
  }, [rubroProject]);

  {
    idProject
      ? (document.title = `Noboss | ${project.nameProject}`)
      : (document.title = `Noboss | Viví de lo Tuyo`);
  }

  if (idProject === "") {
    return (
      <ProjectContext.Provider value={{providers, projects, setIdProject, setRubroProject }}>
        {children}
      </ProjectContext.Provider>
    );
  }

  return (
    <ProjectContext.Provider
      value={{ projects, project, setIdProject, idProject, specificProviders, setRubroProject, rubroProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
export default ProjectProvider;
