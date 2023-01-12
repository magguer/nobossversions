
import TextH2 from "../../Texts/TextH2";

const ProjectBody = ({
  nameProject,
  rubroProject,
  imgProject,
  expandedYourProjectsBody,
}) => {



  return (
    <>
      {expandedYourProjectsBody ? (
        <div className="bg-transparen w-0/12 cursor-pointer transition-all duration-500 ">
          <img
            className="w-10 tablet:w-12 rounded-full"
            src={imgProject}
            alt="projectLogo"
          />
        </div>
      ) : (
        <div className="hidden w-12/12 tablet:flex items-center tablet:p-3 tablet:bg-lightbuttonprimary tablet:hover:bg-lightbuttonhoverprimary tablet:dark:bg-darkbuttonprimary rounded transition-all duration-500 cursor-pointer">
          <img
            className="w-3/12 laptopL:w-2/12 h-full rounded-full"
            src={imgProject}
            alt="projectLogo"
          />
          <div className="hidden w-full tablet:grid justify-center  transition-all duration-500">
            <h1 className="hidden text-[20px] font-medium tablet:flex m-auto">
              {nameProject}
            </h1>
            <TextH2 textTitle={rubroProject} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectBody;
