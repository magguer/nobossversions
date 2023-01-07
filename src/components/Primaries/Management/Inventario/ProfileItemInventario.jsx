import ButtonBack2 from "../../../Buttons/ButtonBack2";
import TextH2 from "../../../Texts/TextH2";
import TextH3 from "../../../Texts/TextH3";

const ProfileItemInventario = ({
  showProfileItemInventario,
  setShowProfileItemInventario,
  product,
}) => {
  
  return showProfileItemInventario ? (
    <div className="fixed h-full tablet:h-[360px] w-[300px] tablet:w-[400px]  left-1 tablet:ml-3 tablet:relative rounded bg-lightbuttonprimary dark:bg-darkbgprimary transition-all duration-300 tablet:duration-500">

      <div className="absolute text-center opacity-100 delay-200 w-full py-5">
        <TextH3 textTitle={"Perfil de Producto"} />
        <TextH2 /* textTitle={product.itemName} */ />
        <div>
          {/* <img className="w-60 mx-auto my-3" src={item.itemImg} alt="" /> */}
        </div>
      </div>
      <div className="flex justify-end">
        <ButtonBack2
          onClick={() => {
            setShowProfileItemInventario(false);
          }}
        />
      </div>
    </div>
  ) : (
    <div className="fixed h-full left-0 tablet:h-[360px] tablet:w-0 tablet:relative transition-all duration-300 tablet:duration-500"></div>
  );
};

export default ProfileItemInventario;
