//Componentes
import TitleItem1 from "../Texts/TitleItem1";
import DescItem1 from "../Texts/DescItem1";
import DescItem2 from "../Texts/DescItem2";
import DescItem3 from "../Texts/DescItem3";
import ButtonIcon1 from "../Buttons/ButtonIcon1";

const ItemBody1 = ({
  product,
  handleShowConfigItem,
  handleShowProfileItem,
}) => {

  return (
    <div
      className="flex items-center gap-3 m-1 tablet:m-2 p-1 rounded bg-lightbuttonprimary hover:bg-lightbuttonringprimary dark:bg-darkbgprimary dark:hover:bg-darkbuttonhoverprimary cursor-pointer transition-color duration-300"
    >
      <div onClick={handleShowProfileItem} className="flex w-full gap-3">
      {product.imgProduct ? (
          <img
            className="w-8 mobilL:w-12 rounded"
            src={product.imgProduct}
            alt="imgpPoduct"
          />
        ) : null}
        <div className="flex w-full items-center">
          <div>
            <TitleItem1 textTitle={product.nameProduct} />
            <div className="flex gap-3">
              <DescItem1 textTitle={product.priceProduct} />
              <DescItem2 textTitle={product.totalCoastProduct} />
              <DescItem3 textTitle={product.stockProduct} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-8 flex justify-end mr-1 tablet:mr-3">
        <ButtonIcon1
          src="https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/nobossAppSimple%2Frecursos%2Ficonos%2F383148_edit_icon%20white%20gray.png?alt=media&token=9315c868-56c1-4b1f-b5dd-9a9f94636f7c"
          onClick={handleShowConfigItem}
        />
      </div>
    </div>
  );
};

export default ItemBody1;
