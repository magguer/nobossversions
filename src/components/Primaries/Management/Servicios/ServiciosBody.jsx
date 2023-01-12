//React
import { useContext, useState } from "react";

//Firebase
import { db } from "../../../../firebase/firebaseConfig";
import { collection } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

// Componentes
import TextH1 from "../../../Texts/TextH1";
import BuscadorItems1 from "../../../Buscadores/BuscadorItems1";
import ButtonText2 from "../../../Buttons/ButtonText2";
import ServiceBody1 from "../../../Secondaries/ServiceBody1";
import SubComponentsBody2 from "../../../Secondaries/SubComponentsBody2";
import ProfileService from "../Servicios/ProfileService";
import ConfigService from "../Servicios/ConfigService";

//Context
import { ProjectContext } from "../../../../context/ProjectProvider";
import TextH3 from "../../../Texts/TextH3";

const ServiciosBody = ({ path }) => {
  const { idProject, project } = useContext(ProjectContext);

  const [showConfigService, setShowConfigService] = useState(false);
  const [showProfileService, setShowProfileService] = useState(false);

  const queryServices = collection(db, path);
  const [services, loading, error] = useCollectionData(queryServices);

  const handleShowConfigService = () => {
    if (showProfileService === true) {
      setShowProfileService(false);
      setShowConfigService(!showConfigService);
    } else {
      setShowConfigService(!showConfigService);
    }
  };

  const handleShowProfileService = () => {
    if (showConfigService === true) {
      setShowConfigService(false);
      setShowProfileService(!showProfileService);
    } else {
      setShowProfileService(!showProfileService);
    }
  };

  return (
    <SubComponentsBody2 link={"/management"} textTitle="Servicios de">
      {project.onServicesProject ? (
        <div className="flex gap-3 my-2 justify-center">
          <ProfileService
            showProfileService={showProfileService}
            setShowProfileService={setShowProfileService}
          />
          <div className="scrollbar rounded h-96 w-[500px] tablet:w-[1000px]">
            <div className="flex items-center p-1 gap-3 mt-3 justify-center">
              <BuscadorItems1
                placeholder={"Buscar servicios / categorías..."}
              />
              <ButtonText2 textButton={"+"} />
            </div>
            {/* Lista de Productos */}
            {services?.map((service) => (
              <div key={service.nameService}>
                <ServiceBody1
                  handleShowProfileService={handleShowProfileService}
                  handleShowConfigService={handleShowConfigService}
                  service={service}
                />
              </div>
            ))}
          </div>
          <ConfigService
            showConfigService={showConfigService}
            setShowConfigService={setShowConfigService}
          />
        </div>
      ) : (
        <div className="p-10 text-center">
          <TextH1 textTitle={"Función inactiva."} />
          <TextH3
            textTitle={"Puedes activarla desde la Configuración de Proyecto."}
          />
          <div className="mt-3">
            <ButtonText2
              link="/management"
              textButton={"Volver al Panel Gestión"}
            />
          </div>
        </div>
      )}
    </SubComponentsBody2>
  );
};

export default ServiciosBody;
