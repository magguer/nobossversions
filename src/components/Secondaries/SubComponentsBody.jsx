import ButtonBack from "../Buttons/ButtonBack1";
import SmoothieOpcIn from "../../transitions/SmoothieOpcIn";
import { ProjectContext } from "../../context/ProjectProvider";
import { useContext } from "react";
import HeaderComponentsBody from "./HeaderComponentsBody";

const SubComponentsBody = ({ onClose, textTitle, children }) => {
  const { project } = useContext(ProjectContext);
  return (
    <SmoothieOpcIn>
      <div className="fixed inset-0">
        <div className="modal-flex-container flex items-center justify-center min-h-screen text-center">
          <div className="modal-bg-container fixed inset-0 bg-lightbgsecondary dark:bg-darksubbgprimary bg-opacity-80  dark:bg-opacity-90"></div>
          <div className="modal-container inline-block align-bottom bg-lightbgprimary  dark:bg-darkbgsecondary rounded-lg overflow-hidden shadow-lg transform transition-all duration-500">
            <div className="self-end">
              <ButtonBack textButton={"<"} onClick={onClose} />
            </div>
            <div className="modal-wrapper">
              <div className="modal-wrapper-flex">
                <HeaderComponentsBody
                  textTitle={textTitle}
                  nameProject={project.nameProject}
                  imgProject={project.imgProject}
                />
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SmoothieOpcIn>
  );
};

export default SubComponentsBody;
