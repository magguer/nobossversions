import { useContext } from "react";
import { ProjectContext } from "../../../context/ProjectProvider";
import { UserContext } from "../../../context/UserProvider";
import ButtonBack from "../../Buttons/ButtonBack1";
import ButtonMarketBody1 from "../../Buttons/ButtonMarketBody1";
import ButtonMarketBody2 from "../../Buttons/ButtonMarketBody2";
import Paragraf1 from "../../Texts/Paragraf1";
import TextH1 from "../../Texts/TextH1";
import TextH2 from "../../Texts/TextH2";

const MarketBody = () => {
  const { project, setIdProject } = useContext(ProjectContext);
  const { user } = useContext(UserContext);

  return (
    <>
      {project && user ? (
        <div>
          <ButtonBack
            textButton={"<"}
            onClick={() => {
              setIdProject("");
            }}
          />
          <div className="bg-lightbgprimary text-center dark:bg-darkbgprimary grid justify-center rounded-lg p-5 shadow-lg">
            <TextH1 textTitle={"- Market -"} />
            <div className="grid justify-center">
              <TextH2 textTitle={project.nameProject} />
            </div>
            <div className="flex   gap-3 mt-4">
              <ButtonMarketBody2
                textButton={"Nobox"}
                src={"https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/nobossAppSimple%2Frecursos%2Ficonos%2Ficonos%20panel%2FNobox.png?alt=media&token=cd5e1e03-4d3b-42be-a5d3-7eaecc340a26"}
              />
              <ButtonMarketBody1
                textButton={"Grupos de Descuento"}
                src={"https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/nobossAppSimple%2Frecursos%2Ficonos%2Ficonos%20panel%2Fmenu-icon.png?alt=media&token=2eecd4b3-2b72-49b7-88ef-5e78e62ece19"}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-lightbgprimary text-center dark:bg-darkbgprimary grid justify-items-center rounded-lg p-5 shadow-lg">
          <TextH1 textTitle={"- Market -"} />
          <Paragraf1
            textTitle={
              "Sin un proyecto seleccionado, se mostrará el Market general de Noboss."
            }
          />
          <div className="grid justify-center">
            <div className="flex gap-3 mt-4">
              <ButtonMarketBody2
                textButton={"Nobox"}
                src={"https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/nobossAppSimple%2Frecursos%2Ficonos%2Ficonos%20panel%2FNobox.png?alt=media&token=cd5e1e03-4d3b-42be-a5d3-7eaecc340a26"}
              />
              <ButtonMarketBody1
                textButton={"Grupos de Descuento"}
                src={"https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/nobossAppSimple%2Frecursos%2Ficonos%2Ficonos%20panel%2Fmenu-icon.png?alt=media&token=2eecd4b3-2b72-49b7-88ef-5e78e62ece19"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MarketBody;
