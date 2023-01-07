import ButtonBack2 from "../../../Buttons/ButtonBack2";
import TextH2 from "../../../Texts/TextH2";
import TextH3 from "../../../Texts/TextH3";

const ProfileService = ({
  showProfileService,
  setShowProfileService,
  service,
}) => {
  return showProfileService ? (
    <div className="fixed h-full tablet:h-[360px] w-[300px] tablet:w-[400px]  left-1 tablet:ml-3 tablet:relative rounded bg-lightbuttonprimary dark:bg-darkbgprimary transition-all duration-300 tablet:duration-500">
      <div className="flex justify-end">
        <ButtonBack2
          onClick={() => {
            setShowProfileService(false);
          }}
        />
      </div>
      <div className="text-center py-5">
        <TextH3 textTitle={"Perfil del Servicio"} />
       {/*  <TextH2 textTitle={service.serviceName} /> */}
        <div>
          {/* <img className="w-60 mx-auto my-3" src={item.itemImg} alt="" /> */}
        </div>
      </div>
    </div>
  ) : (
    <div className="fixed h-full left-0 tablet:h-[360px] tablet:w-0 tablet:relative transition-all duration-300 tablet:duration-500"></div>
  );
};

export default ProfileService;
