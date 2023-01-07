import TextH1 from "../Texts/TextH1";
import TextH2 from "../Texts/TextH2";
import TextH3 from "../Texts/TextH3";

const HeaderComponentsBody = ({ textTitle, nameProject, imgProject }) => {
  
  if (imgProject === undefined) {
    return (
      <div className="min-w-[250px] tablet:min-w-[500px]">
        <div className="absolute right-1 mr-3 justify-self-end tablet:mb-5">
        </div>
        <div className="bg-lightbgsecondary dark:bg-darkbgprimary tablet:min-w-full p-5 rounded-lg shadow-xl">
          <TextH1 textTitle={textTitle}></TextH1>
          <TextH3 textTitle={nameProject}></TextH3>
        </div>
      </div>
    );
  }
  return (
    <div className="min-w-[250px] tablet:min-w-[500px]">
      <div className="absolute right-1 mr-3 justify-self-end tablet:mb-5">
        <img
          className="w-8 mobilL:w-10 rounded-full mt-3"
          src={imgProject}
          alt=""
        />
      </div>
      <div className="bg-lightbgsecondary dark:bg-darkbgprimary tablet:min-w-full p-5 rounded-lg shadow-xl">
        <TextH1 textTitle={textTitle}></TextH1>
        <TextH3 textTitle={nameProject}></TextH3>
      </div>
    </div>
  );
};

export default HeaderComponentsBody;
