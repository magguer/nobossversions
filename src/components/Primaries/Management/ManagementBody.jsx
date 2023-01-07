//React
import { useContext, useState } from "react";

// Contexto
import { ProjectContext } from "../../../context/ProjectProvider";

// Import Components
import ButtonManagBody1 from "../../Buttons/ButtonManagBody1";
import ButtonManagBody2 from "../../Buttons/ButtonManagBody2";
import ButtonManagBody2Bloqued from "../../Buttons/ButtonManagBody2Bloqued";
import Carousel1 from "../../Carousels/Carousel1";
import TextH1 from "../../Texts/TextH1";
import TextH3 from "../../Texts/TextH3";
import ResumenBody from "./Resumen/ResumenBody";
import ComunidadBody from "./Comunidad/ComunidadBody";
import ProjectConfigBody from "../Projects/ProjectConfigBody";
import ButtonManagGasto from "../../Buttons/ButtonManagGasto";
import ButtonManagVenta from "../../Buttons/ButtonManagVenta";
import ButtonManagBody3 from "../../Buttons/ButtonManagBody3";
import ButtonBack from "../../Buttons/ButtonBack1";
import TextH2 from "../../Texts/TextH2";
import FacturaVentaBody from "./Venta/FacturaVentaBody";
import RegistroGastoBody from "./Gasto/RegistroGastoBody";

const ManagementBody = () => {
  const { project, setIdProject, idProject } = useContext(ProjectContext);

  const [showProjectConfigBody, setShowProjectConfigBody] = useState(false);
  const handleOnCloseProjectConfigBody = () => setShowProjectConfigBody(false);

  const [showGastoBody, setShowGastoBody] = useState(false);
  const handleOnCloseGastoBody = () => setShowGastoBody(false);

  const [showVentaBody, setShowVentaBody] = useState(false);
  const handleOnCloseVentaBody = () => setShowVentaBody(false);

  return (
    <>
      {project ? (
        <div>
          <ButtonBack
            textButton={"<"}
            onClick={() => {
              setIdProject("");
              document.title = `Noboss | Viví de lo Tuyo`
            }}
          />
          <div className="grid w-full scrollbar max-h-[520px] tablet:max-h-[480px] bg-lightbgprimary dark:bg-darkbgprimary rounded-lg p-3 tablet:px-5 pb-40 tablet:pb-5 shadow-lg ">
            {/*       Encabezado Panel Gestión */}

            <div className="flex justify-center tablet:mb-3">
              <div>
                <TextH1 textTitle={project.nameProject} />
                <TextH2 textTitle={project.rubroProject} />
              </div>
            </div>
            <div
              onClick={() => setShowProjectConfigBody(true)}
              className="absolute flex items-center justify-self-end tablet:mb-5"
            >
              <img
                className="w-8 tablet:w-10 rounded-full cursor-pointer"
                src={project.imgProject}
                alt=""
              />
            </div>
            {/*       Carrusel Panel Gestión  */}
            {project.banner1Project ? (
              <img
                className="shadow-xl justify-self-center w-96 max-h-28 mt-2 tablet:mt-0 rounded"
                src={project.banner1Project}
                alt="bannerProject"
              />
            ) : null}

            {/*    Menú Panel Gestión */}
            <div className="w-full mt-2 tablet:mt-0">
              {/*       Botones 1 Panel Gestión */}
              <div className="grid tablet:flex gap-3 mt-2">
                {/*       Boton Gasto      */}
                <div className="hidden tablet:flex">
                  <ButtonManagGasto
                    textButton="Registrar Gasto"
                    src="iconos/gasto-png-blanco.png"
                    onClick={() => setShowGastoBody(true)}
                  />
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-end">
                    <div className="flex gap-1 items-center text-xs tablet:text-sm">
                      <h1>Panel</h1>
                      <TextH2 textTitle="Administrador" />
                    </div>
                    <div className="flex gap-3">
                      <ButtonManagBody3
                        textButton="Comunidad"
                        src="iconos/clientes-comunidad-icon.png"
                        link={"/comunidad"}
                      />
                      <ButtonManagBody3
                        textButton="Resumen"
                        src="iconos/resumen-icon.png"
                        link={"/resumen"}
                      />
                    </div>
                  </div>
                  <div className="w-full mt-2 grid grid-cols-2 gap-3">
                    {/*       Botones Principales     */}

                    {project.onProductsProject ? (
                      <ButtonManagBody2
                        textButton="Inventario"
                        src="iconos/Nobox.png"
                        link="/inventario"
                      />
                    ) : (
                      <ButtonManagBody2Bloqued
                        textButton="Inventario"
                        src="iconos/Nobox.png"
                      />
                    )}

                    {project.onServicesProject ? (
                      <ButtonManagBody2
                        textButton="Servicios"
                        src="iconos/Nobox.png"
                        link="/servicios"
                      />
                    ) : (
                      <ButtonManagBody2Bloqued
                        textButton="Servicios"
                        src="iconos/Nobox.png"
                      />
                    )}

                    <ButtonManagBody2
                      link="/clientes"
                      textButton="Clientes"
                      src="iconos/clientes-comunidad-icon.png"
                    />

                    <ButtonManagBody1
                      link="/agenda"
                      textButton="Agenda"
                      src="iconos/agenda-blanca-icon.png"
                    />
                  </div>
                </div>
                <div className="flex gap-3 justify-center">
                  <div className="tablet:hidden w-full">
                    <ButtonManagGasto
                      textButton="Registrar Gasto"
                      src="iconos/gasto-png-blanco.png"
                      onClick={() => setShowGastoBody(true)}
                    />
                  </div>

                  <ButtonManagVenta
                    textButton="Facturar Venta"
                    src="iconos/venta-png-blanca.png"
                    onClick={() => setShowVentaBody(true)}
                  />
                </div>
              </div>
            </div>

            <ProjectConfigBody
              projectConfigBodyVisible={showProjectConfigBody}
              onClose={handleOnCloseProjectConfigBody}
            />
            <FacturaVentaBody
              facturaVentaBodyVisible={showVentaBody}
              onClose={handleOnCloseVentaBody}
            />

            <RegistroGastoBody
              registroGastoBodyVisible={showGastoBody}
              onClose={handleOnCloseGastoBody}
            />
          </div>
        </div>
      ) : (
        <div className="grid justify-items-center bg-lightbgprimary dark:bg-darkbgprimary rounded-lg p-10 shadow-lg">
          <TextH1 textTitle={" - Bienveindo al Panel de Gestión - "} />
          <TextH3
            textTitle={
              "Creá o accedé a un proyecto para empezar a gestionarlo."
            }
          />
        </div>
      )}
    </>
  );
};

export default ManagementBody;
