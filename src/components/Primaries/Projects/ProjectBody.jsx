const ProjectBody = ({ idProject, nameProject, rubroProject, imgProject }) => {

  return (

    <div
      className="flex tablet:p-3 tablet:bg-gray-600 tablet:hover:bg-gray-800 tablet:dark:bg-[#242424] tablet:dark:hover:bg-[#1c1c1c] transition-color duration-200 cursor-pointer"
    >
      <img
        className="w-10 tablet:w-16 rounded-full"
        src={imgProject}
        alt="projectLogo"
      />
      <div className="w-full grid justify-center">
        <h1 className="hidden text-[20px] font-medium tablet:flex m-auto">
          {nameProject}
        </h1>
        <h2 className="hidden text-[12px] text-[#00a7a4] tablet:flex mx-auto">
          {rubroProject}
        </h2>
      </div>
    </div>
  );
};

export default ProjectBody;
