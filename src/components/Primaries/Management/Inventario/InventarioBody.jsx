//React
import { useContext, useState } from "react";

//Firebase
import { db } from "../../../../firebase/firebaseConfig";
import { collection } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

// Componentes
import TextH1 from "../../../Texts/TextH1"; 
import SubComponentsBody2 from "../../../Secondaries/SubComponentsBody2";
import ButtonText2 from "../../../Buttons/ButtonText2";
import ConfigItemInventario from "./ConfigItemInventario";
import ProfileItemInventario from "./ProfileItemInventario";
import AddItemBody from "./AddItemBody";
import BuscadorItems1 from "../../../Buscadores/BuscadorItems1";
import ItemBody1 from "../../../Secondaries/ItemBody1";

// Context
import { ProjectContext } from "../../../../context/ProjectProvider";
import TextH3 from "../../../Texts/TextH3";
/* import { ProductContext } from "../../../../context/ProductProvider"; */

const InventarioBody = ({ path }) => {
  const { idProject, project } = useContext(ProjectContext);

  const queryProducts = collection(db, path);
  const [products, loading, error] = useCollectionData(queryProducts);

  const [showAddItemBody, setShowAddItemBody] = useState(false);
  const handleOnCloseAddItemBody = () => setShowAddItemBody(false);

  const [showConfigItemInventario, setShowConfigItemInventario] =
    useState(false);

  const [showProfileItemInventario, setShowProfileItemInventario] =
    useState(false);

  const handleShowConfigItem = () => {
    if (showProfileItemInventario === true) {
      setShowProfileItemInventario(false);
      setShowConfigItemInventario(!showConfigItemInventario);
    } else {
      setShowConfigItemInventario(!showConfigItemInventario);
    }
  };

  const handleShowProfileItem = () => {
    if (showConfigItemInventario === true) {
      setShowConfigItemInventario(false);
      setShowProfileItemInventario(!showProfileItemInventario);
    } else {
      setShowProfileItemInventario(!showProfileItemInventario);
    }
  };

  const handleShowAddItem = () => {
    setShowAddItemBody(true);
  };

  return (
    <>
      <SubComponentsBody2 link={"/management"} textTitle={"Inventario de"}>
        {project.onProductsProject ? (
          <div>
            <AddItemBody
              path={`projects/${idProject}/products`}
              showAddItemBody={showAddItemBody}
              setShowAddItemBody={setShowAddItemBody}
              onClose={handleOnCloseAddItemBody}
            />
            <div className="flex gap-3 my-2 justify-center">
              <ProfileItemInventario
                showProfileItemInventario={showProfileItemInventario}
                setShowProfileItemInventario={setShowProfileItemInventario}
                /* product={product} */
              />

              <div className="scrollbar rounded h-96 pb-2 w-[500px] tablet:w-[1000px]">
                <div className="flex p-1 gap-1 items-center tablet:gap-3 justify-center">
                  <BuscadorItems1
                    placeholder={"Buscar productos / categorías..."}
                  />
                  <ButtonText2 onClick={handleShowAddItem} textButton={"+"} />
                </div>

                {/* Lista de Productos */}
                {products?.map((product) => (
                  <div key={product.skuProduct}>
                    <ItemBody1
                      handleShowProfileItem={handleShowProfileItem}
                      handleShowConfigItem={handleShowConfigItem}
                      product={product}
                    />
                  </div>
                ))}
              </div>
              <ConfigItemInventario
                showConfigItemInventario={showConfigItemInventario}
                setShowConfigItemInventario={setShowConfigItemInventario}
                /*  product={product} */
              />
            </div>
          </div>
        ) : (
          <div className="p-10 text-center">
            <TextH1 textTitle={"Función inactiva."} />
            <TextH3 textTitle={"Puedes activarla desde la Configuración de Proyecto."} />
            <div className="mt-3">
            <ButtonText2
              link="/management"
              textButton={"Volver al Panel Gestión"}
            />
          </div>
          </div>
        )}
      </SubComponentsBody2>
    </>
  );
};

export default InventarioBody;
