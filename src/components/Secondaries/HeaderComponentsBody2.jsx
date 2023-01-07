import ButtonBack from "../Buttons/ButtonBack1";
import TextH1 from "../Texts/TextH1";
import TextH2 from "../Texts/TextH2";
import TextH3 from "../Texts/TextH3";

const HeaderComponentsBody2 = ({ textTitle, nameProject, imgProject, link }) => {
  if (imgProject === undefined) {
    return (
      <div className="min-w-[250px] tablet:min-w-[500px]">
        <div className="right-1 mr-3 justify-self-end tablet:mb-5"></div>
        <div className="bg-lightbgsecondary dark:bg-darkbgprimary tablet:min-w-full p-5 rounded-lg shadow-xl">
          <TextH1 textTitle={textTitle}></TextH1>
          <TextH3 textTitle={nameProject}></TextH3>
        </div>
      </div>
    );
  }
  return (
    <div className="min-w-[250px] tablet:min-w-[500px]">
      <div>
        <ButtonBack link={link} textButton={"<"} />
      </div>
      <div className="absolute right-0 tablet:mb-5">
        <img
          className="w-8 tablet:w-10 rounded-full mt-2 tablet:mt-3 mr-5 mobilXL:mr-16"
          src={imgProject}
          alt=""
        />
      </div>
      <div className="bg-lightbgsecondary grid text-center dark:bg-darkbgprimary tablet:min-w-full p-2 tablet:p-5 rounded-lg shadow-xl">
        <TextH1 textTitle={textTitle}></TextH1>
        <TextH3 textTitle={nameProject}></TextH3>
      </div>
    </div>
  );
};

export default HeaderComponentsBody2;
