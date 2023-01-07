//React
import { useContext, useState } from "react";

// Componentes
import ButtonText2 from "../../../Buttons/ButtonText2";
import TextH1 from "../../../Texts/TextH1";
import TextH3 from "../../../Texts/TextH3";
import TextH2 from "../../../Texts/TextH2";
import ButtonBack3 from "../../../Buttons/ButtonBack3";
import FormInputsText2 from "../../../Forms/FormInputsText2";
import FormTextArea1 from "../../../Forms/FormTextArea1";

//Hooks
import useProducts from "../../../../hooks/useProducts";

// Context
import { ProjectContext } from "../../../../context/ProjectProvider";
import FormSelect1 from "../../../Forms/FormSelect1";
import ButtonText1 from "../../../Buttons/ButtonText2";
import ButtonCreateItem1 from "../../../Buttons/ButtonCreateItem1";
import SubComponentsBody from "../../../Secondaries/SubComponentsBody";

const AddItemBody = ({ showAddItemBody, setShowAddItemBody, path }) => {

  if (showAddItemBody === false) return null;

  const { addProduct } = useProducts();

  const [nameProductData, setNameProductData] = useState("");
  const [skuProductData, setSkuProductData] = useState("");
  const [descProductData, setDescProductData] = useState("");
  const [priceProductData, setPriceProductData] = useState(0);
  const [priceSellerProductData, setPriceSellerProductData] = useState(0);
  const [totalCostProductData, setTotalCostProductData] = useState(0);
  const [stockProductData, setStockProductData] = useState(0);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    await addProduct(
      nameProductData,
      descProductData,
      skuProductData,
      priceProductData,
      priceSellerProductData,
      totalCostProductData,
      stockProductData,
      path
    );
  };

  const handleOpenProviderBody = (e) => {
    e.preventDefault();
  };

  return (
    <SubComponentsBody
      textTitle={"Agregar Producto a"}
      onClose={() => {
        setShowAddItemBody(false);
      }}
    >
      <div className="scrollbar max-w-[800px] h-[400px] grid justify-center">
        <form className="max-w-60 tablet:max-w-[600px] px-3 mt-3 mb-16 tablet:mb-10">
          {/* Información Básica */}
          <div>
            <FormInputsText2
              value={nameProductData}
              onChange={(e) => setNameProductData(e.target.value)}
              placeholder="* Nombre del Producto"
            />
            <FormInputsText2
              value={skuProductData}
              onChange={(e) => setSkuProductData(e.target.value)}
              placeholder="* SKU del Producto"
            />
            <FormTextArea1
              value={descProductData}
              onChange={(e) => setDescProductData(e.target.value)}
              placeholder="* Descripción del Producto"
            />
          </div>
          <hr></hr>
          {/* Precio / Costo / Stock */}
          <div className="mt-3">
            <TextH2 textTitle={"Precio / Costo / Stock"} />
            <div className="flex gap-3 mt-3">
              <FormInputsText2
                value={priceProductData}
                onChange={(e) => setPriceProductData(e.target.value)}
                placeholder="* Precio Cliente"
              />
              <FormInputsText2
                value={priceSellerProductData}
                onChange={(e) => setPriceSellerProductData(e.target.value)}
                placeholder="* Precio Vendedor"
              />
            </div>
            <div className="flex gap-3">
              <FormInputsText2
                value={totalCostProductData}
                onChange={(e) => setTotalCostProductData(e.target.value)}
                placeholder="* Costo"
              />
              <FormInputsText2
                value={stockProductData}
                onChange={(e) => setStockProductData(e.target.value)}
                placeholder="* Stock"
              />
            </div>
          </div>
          <hr></hr>
          {/* Proveedores */}
          <div className="my-3">
            <TextH2 textTitle={"Asignación Proveedores"} />
            <div className="flex justify-center items-center gap-3 mt-3 w-full">
              <FormSelect1 placeholder="Proveedores" />
              <ButtonText2
                onClick={handleOpenProviderBody}
                textButton={"Crear Proveedor"}
              />
            </div>
          </div>
          <hr></hr>
          <div className="mt-5">
            <ButtonCreateItem1
              onClick={handleAddProduct}
              textButton={"Crear Producto"}
            />
          </div>
        </form>
      </div>
    </SubComponentsBody>
  );
};

export default AddItemBody;
