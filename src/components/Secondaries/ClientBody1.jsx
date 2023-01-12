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
      className="flex items-center gap-3 m-1 tablet:m-2 p-1 rounded bg-lightbuttonprimary hover:bg-lightbuttonringprimary dark:bg-darkbgprimary dark:hover:bg-darkbuttonhoverprimary cursor-pointer transition-color duration-300"
    >
      <div onClick={handleShowProfileClient} className="flex w-full gap-3">
        {client.imgClient ? (
          <img
            className="w-8 mobilL:w-12 rounded"
            src={client.imgProduct}
            alt="imgProduct"
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
      <div className="h-8 flex justify-end mr-1 tablet:mr-3">
        <ButtonIcon1
          src="https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/nobossAppSimple%2Frecursos%2Ficonos%2F383148_edit_icon%20white%20gray.png?alt=media&token=9315c868-56c1-4b1f-b5dd-9a9f94636f7c"
          onClick={handleShowConfigClient}
        />
      </div>
    </div>
  );
};

export default ClientBody1;
