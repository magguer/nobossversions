import TextH3 from "../../../Texts/TextH3";
import TextH2 from "../../../Texts/TextH2";
import ButtonBack2 from "../../../Buttons/ButtonBack2";

const ConfigService = ({
  showConfigService,
  setShowConfigService,
  service,
}) => {
  return showConfigService ? (
    <div className="fixed opacity-100 right-1 h-full tablet:h-[360px] w-[300px] tablet:w-[400px]  tablet:mr-3 tablet:relative rounded bg-lightbuttonprimary dark:bg-darkbgprimary transition-all duration-300 tablet:duration-500">
      <ButtonBack2
        onClick={() => {
          setShowConfigService(false);
        }}
      />
      <div className="text-center py-5">
        <TextH3 textTitle={"Configuración del Servicio"} />
       {/*  <TextH2 textTitle={service.serviceName} /> */}
        <div className="m-2">
          {/* <img className="w-20 h-20" src={item.itemImg} /> */}
        </div>
      </div>
    </div>
  ) : (
    <div className="fixed h-full tablet:h-[360px] right-0 opacity-0 tablet:w-0 tablet:relative transition-all duration-300 tablet:duration-500"></div>
  );
};

export default ConfigService;
