//React
import { useContext, useState } from "react";

//Firebase
import { db } from "../../../../firebase/firebaseConfig";
import { collection } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

// Context
import { ProjectContext } from "../../../../context/ProjectProvider";
import ButtonText2 from "../../../Buttons/ButtonText2";
import HeaderComponentsBody from "../../../Secondaries/HeaderComponentsBody";
//Components
import SubComponentsBody2 from "../../../Secondaries/SubComponentsBody2";
import TextH3 from "../../../Texts/TextH3";
import ClientBody1 from "../../../Secondaries/ClientBody1";
import BuscadorItems1 from "../../../Buscadores/BuscadorItems1";

const ClientesBody = ({ path }) => {
  const { project } = useContext(ProjectContext);

  const queryClients = collection(db, path);
  const [clients, loading, error] = useCollectionData(queryClients);

  const [showConfigClient, setShowConfigClient] = useState(false);
  const [showProfileClient, setShowProfileClient] = useState(false);

  const handleShowConfigClient = () => {
    if (showProfileClient === true) {
      setShowProfileClient(false);
      setShowConfigClient(!showConfigClient);
    } else {
      setShowConfigClient(!showConfigClient);
    }
  };

  const handleShowProfileClient = () => {
    if (showConfigClient === true) {
      setShowConfigClient(false);
      setShowProfileClient(!showProfileClient);
    } else {
      setShowProfileClient(!showProfileClient);
    }
  };

  return (
    <SubComponentsBody2 link={"/management"} textTitle={"Clientes de"}>
      <div className="flex h-full gap-3 justify-center">
        <div className="scrollbar h-96 pb-2 w-[500px] tablet:w-[1000px]">
          <div className="flex p-1 pt-2 gap-1 items-center tablet:gap-3 justify-center">
            <BuscadorItems1 placeholder={"Buscar cliente / teléfono / email..."} />
            <ButtonText2 /* onClick={handleShowAddItem} */ textButton={"+"} />
          </div>

          {/* Lista de Productos */}
          {clients?.map((client) => (
            <div key={client.nameClient}>
              <ClientBody1
                handleShowProfileClient={handleShowProfileClient}
                handleShowConfigClient={handleShowConfigClient}
                client={client}
              />
            </div>
          ))}
        </div>
      </div>
    </SubComponentsBody2>
  );
};

export default ClientesBody;
