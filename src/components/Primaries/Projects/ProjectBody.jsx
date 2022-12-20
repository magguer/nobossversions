import TextH2 from "../../Texts/TextH2";

const ProjectBody = ({
  idProject,
  nameProject,
  rubroProject,
  imgProject,
  expandedYourProjectsBody,
}) => {
  return (
    <>
      {expandedYourProjectsBody ? (
        <div className="cursor-pointer">
          <img
            className="w-8 tablet:w-12 rounded-full"
            src={imgProject}
            alt="projectLogo"
          />
        </div>
      ) : (
        <div className="flex tablet:p-3 tablet:bg-lightbuttonprimary tablet:hover:bg-lightbuttonhoverprimary tablet:dark:bg-darkbuttonprimary tablet:dark:hover:bg-darkbuttonhoverprimary rounded transition-all duration-500 cursor-pointer">
        <img
          className="w-8 tablet:w-14 rounded-full"
          src={imgProject}
          alt="projectLogo"
        />
        <div className="w-full grid justify-center">
          <h1 className="hidden text-[20px] font-medium tablet:flex m-auto">
            {nameProject}
          </h1>
          <TextH2 textTitle={rubroProject}/>
        </div>
      </div>
      )}
    </>
  );
};

export default ProjectBody;
