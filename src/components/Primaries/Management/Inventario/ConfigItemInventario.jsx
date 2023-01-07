import TextH3 from "../../../Texts/TextH3";
import TextH2 from "../../../Texts/TextH2";
import ButtonBack2 from "../../../Buttons/ButtonBack2";

const ConfigItemInventario = ({
  showConfigItemInventario,
  setShowConfigItemInventario,
  product,
}) => {
  return showConfigItemInventario ? (
    <div className="fixed opacity-100 right-1 h-full tablet:h-[360px] w-[300px] tablet:w-[400px] tablet:mr-3 tablet:relative rounded bg-lightbuttonprimary dark:bg-darkbgprimary transition-all duration-300 tablet:duration-500">
      <div className="absolute w-full text-center opacity-100 py-5">
        <TextH3 textTitle={"Configuración del Producto"} />
        <TextH2 /* textTitle={product.nameProduct} */ />
        <div className="m-2">
          {/* <img className="w-20 h-20" src={item.itemImg} /> */}
        </div>
      </div>
      <ButtonBack2
        onClick={() => {
          setShowConfigItemInventario(false);
        }}
      />
    </div>
  ) : (
    <div className="fixed h-full tablet:h-[360px] right-0 opacity-0 tablet:w-0 tablet:relative transition-all duration-300 tablet:duration-500"></div>
  );
};

export default ConfigItemInventario;
