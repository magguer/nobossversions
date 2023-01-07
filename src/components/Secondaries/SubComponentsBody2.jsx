import ButtonBack from "../Buttons/ButtonBack1";
import SmoothieOpcIn from "../../transitions/SmoothieOpcIn";
import { ProjectContext } from "../../context/ProjectProvider";
import { useContext } from "react";
import HeaderComponentsBody2 from "./HeaderComponentsBody2";

const   SubComponentsBody2 = ({ textTitle, children, link }) => {
  const { project } = useContext(ProjectContext);
  return (
    <SmoothieOpcIn>
      <div className="modal-wrapper">
        <div className="modal-wrapper-flex rounded-lg bg-lightbgprimary dark:bg-darkbgsecondary shadow-lg">
          <HeaderComponentsBody2
            textTitle={textTitle}
            nameProject={project.nameProject}
            imgProject={project.imgProject}
            link={link}
          />
          <div>{children}</div>
        </div>
      </div>
    </SmoothieOpcIn>
  );
};

export default SubComponentsBody2;
