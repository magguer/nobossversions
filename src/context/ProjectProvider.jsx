import { createContext, useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useProjects from "../hooks/useProjects";
import YourProjectsBody from '../components/Primaries/Projects/YourProjectsBody'

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  
  const { project, getProject } = useProjects();

  useEffect(() => {
      getProject();
  }, []);

  console.log(project);

  return (
    <ProjectContext.Provider value={{ project }}>
      {children}
    </ProjectContext.Provider>
  );
};
export default ProjectProvider;
