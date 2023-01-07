//Componentes
import TitleItem1 from "../Texts/TitleItem1";
import DescService1 from "../Texts/DescItem1";
import DescService2 from "../Texts/DescService2";
import ButtonIcon1 from "../Buttons/ButtonIcon1";

const ClientBody1 = ({
  client,
  handleShowConfigClient,
  handleShowProfileClient,
}) => {
  return (
    <div
      key={client.id}
      className="flex items-center gap-3 m-1 tablet:m-2 p-1 rounded bg-lightbuttonprimary hover:bg-lightbuttonringprimary dark:bg-darkbgprimary dark:hover:bg-darkbuttonhoverprimary cursor-pointer transition-color duration-300"
    >
      <div onClick={handleShowProfileClient} className="flex w-full gap-3">
        {client.imgClient ? (
          <img
            className="w-8 mobilL:w-12 rounded"
            src={client.imgService}
            alt="imgservice"
          />
        ) : null}

        <div className="flex w-full items-center">
          <div className="ml-3">
            <TitleItem1 textTitle={client.nameClient} />
            <div className="flex gap-3">
              <DescService1 textTitle={client.phoneClient} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-8 flex justify-end mr-3">
        <ButtonIcon1
          src="iconos\editar-icon.png"
          onClick={handleShowConfigClient}
        />
      </div>
    </div>
  );
};

export default ClientBody1;
