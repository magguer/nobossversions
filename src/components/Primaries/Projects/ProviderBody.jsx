import TextH2 from "../../Texts/TextH2";

const ProviderBody = ({
  nameProject,
  rubroProject,
  imgProject,
  banner1Project,
}) => {
  return (
    <>
      <div className="relative tablet:bg-lightbuttonprimary hover:bg-lightbuttonhoverprimary dark:bg-darkbuttonprimary hover:dark:bg-darkbuttonhoverprimary w-64 mobilL:w-52 laptop:w-64 h-30 laptop:h-48 grid justify-items-center p-3 rounded-lg  transition-all duration-500 cursor-pointer">
        <img
          className="absolute w-full h-10 laptop:h-20 opacity-75"
          src={banner1Project}
          alt="projectBanner"
        />
        <div className="grid justify-items-center">
          <img
            className="w-10 laptop:w-14 rounded-full laptop:mt-10 absolute"
            src={imgProject}
            alt="projectLogo"
          />
        </div>
        <div className="grid mt-10 justify-items-center items-center">
          <div className="w-full grid justify-center  transition-all duration-500">
            <h1 className="text-[20px] font-medium tablet:flex m-auto">
              {nameProject}
            </h1>
            <TextH2 textTitle={rubroProject} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderBody;
