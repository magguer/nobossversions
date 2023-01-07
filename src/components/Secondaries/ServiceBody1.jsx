//Componentes
import TitleItem1 from "../Texts/TitleItem1";
import DescService1 from "../Texts/DescItem1";
import DescService2 from "../Texts/DescService2";
import ButtonIcon1 from "../Buttons/ButtonIcon1";

const ServiceBody1 = ({
  service,
  handleShowConfigService,
  handleShowProfileService,
}) => {
  return (
    <div
      key={service.id}
      className="flex items-center gap-3 m-1 tablet:m-2 p-1 rounded bg-lightbuttonprimary hover:bg-lightbuttonringprimary dark:bg-darkbgprimary dark:hover:bg-darkbuttonhoverprimary cursor-pointer transition-color duration-300"
    >
      <div onClick={handleShowProfileService} className="flex w-full gap-3">
        {service.imgService ? (
          <img
            className="w-8 mobilL:w-12 rounded"
            src={service.imgService}
            alt="imgservice"
          />
        ) : null}

        <div className="flex ml-3 w-full items-center">
          <div>
            <TitleItem1 textTitle={service.nameService} />
            <div className="flex gap-3">
              <DescService1 textTitle={service.priceService} />
              <DescService2 textTitle={service.totalCostService} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-8 flex justify-end mr-3">
        <ButtonIcon1
          src="iconos\editar-icon.png"
          onClick={handleShowConfigService}
        />
      </div>
    </div>
  );
};

export default ServiceBody1;
