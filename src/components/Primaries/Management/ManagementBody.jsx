// Import Components
import Button1ManagBody1 from "../../Buttons/ButtonManagBody1";
import Carousel1 from "../../Carousels/Carousel1";
import TextH1 from "../../Texts/TextH1";
import TextH2 from "../../Texts/TextH2";
import TextH3 from "../../Texts/TextH3";
// Import Hoocks
import { ProjectContext } from "../../../context/ProjectProvider";
import { useContext } from "react";

const ManagementBody = () => {

  const { project } = useContext(ProjectContext);


  return (
    <>

 {project? 

      <div className="grid w-full justify-items-center  bg-lightbgprimary dark:bg-darkbgprimary rounded-lg p-5 pb-10 shadow-lg">
        {/*       Encabezado Panel Gestión */}

        <div className="flex items-center justify-center tablet:mb-5">
          <div>
            <TextH1 textTitle={project.nameProject} />
            <TextH2 textTitle={project.rubroProject} />
          </div>
          {/* <img
            className="w-12 ml-10"
            src="https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/nobossAppSimple%2Frecursos%2Ftest%2Flogos%2Flogo.png?alt=media&token=27e8cd85-364d-4c82-a5a7-17e3d9f29bb1"
            alt=""
          /> */}
        </div>
        {/*       Carrusel Panel Gestión  */}

        {/* <Carousel1 /> */}

        {/*    Menú Panel Gestión */}
        <div className="w-full">
          <TextH3 textTitle="Panel Administrador" />
          {/*       Botones 1 Panel Gestión */}
          <div className="w-full mt-3 grid grid-cols-1 mobilM:grid-cols-2  tablet:grid-cols-3 gap-3">
            <Button1ManagBody1 textButton="Inventario" src="iconos/Nobox.png" />
            <Button1ManagBody1
              textButton="Agenda"
              src="iconos/agenda-blanca-icon.png"
            />
            <Button1ManagBody1 textButton="Servicios" src="iconos/Nobox.png" />
            <Button1ManagBody1
              textButton="Comunidad"
              src="iconos/clientes-comunidad-icon.png"
            />

            <Button1ManagBody1
              textButton="Resumen"
              src="iconos/resumen-icon.png"
            />
            <Button1ManagBody1
              textButton="Clientes"
              src="iconos/clientes-comunidad-icon.png"
            />
          </div>
          {/*       Botones 2 Panel Gestión */}
        </div>
      </div>
      : "" } 
    </>
  );
};

export default ManagementBody;
