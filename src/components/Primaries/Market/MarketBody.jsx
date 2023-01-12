// React
import { useContext } from "react";

// Contexto
import { ProjectContext } from "../../../context/ProjectProvider";
import { UserContext } from "../../../context/UserProvider";

//Componentes
import ButtonBack from "../../Buttons/ButtonBack1";
import ButtonMarketBody1 from "../../Buttons/ButtonMarketBody1";
import ButtonMarketBody2 from "../../Buttons/ButtonMarketBody2";
import Paragraf1 from "../../Texts/Paragraf1";
import TextH1 from "../../Texts/TextH1";
import TextH3 from "../../Texts/TextH3";
import TextH2 from "../../Texts/TextH2";
import ProviderBody from "../Projects/ProviderBody";

const MarketBody = () => {
  const { user } = useContext(UserContext);
  const { project, setIdProject, providers, specificProviders } =
    useContext(ProjectContext);
  return (
    <div className="mb-16 tablet:mb-0">
      {project && user ? (
        <div>
          <ButtonBack
            textButton={"<"}
            onClick={() => {
              setIdProject("");
            }}
          />
          <div className="bg-lightbgprimary text-center dark:bg-darkbgprimary grid justify-items-center rounded-lg p-5 pb-8 shadow-lg">
            <TextH1 textTitle={"- Market -"} />
            <div className="flex justify-center gap-3 items-center">
              <img src={project.imgProject} className="w-10 rounded-full" />
              <TextH3 textTitle={project.rubroProject} />
            </div>
            <div className="grid justify-items-center gap-3">
              <div className="flex justify-center gap-3 mt-4">
                <ButtonMarketBody2
                  textButton={"Nobox"}
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/nobossAppSimple%2Frecursos%2Ficonos%2Ficonos%20panel%2FNobox.png?alt=media&token=cd5e1e03-4d3b-42be-a5d3-7eaecc340a26"
                  }
                />
                <ButtonMarketBody1
                  textButton={"Grupos de Descuento"}
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/nobossAppSimple%2Frecursos%2Ficonos%2Ficonos%20panel%2Fmenu-icon.png?alt=media&token=2eecd4b3-2b72-49b7-88ef-5e78e62ece19"
                  }
                />
              </div>{" "}
              {specificProviders.length === 0 ? (
                <>
                  <TextH3
                    textTitle={
                      "Por el momento no hay proveedores en el Market de tu rubro."
                    }
                  />
                  <TextH2 textTitle={"Prueba mas tarde!"} />
                </>
              ) : (
                <div className="gap-3 mt-2 grid w-full justify-items-center grid-cols-1 mobilL:grid-cols-2 tablet:grid-cols-3">
                  {specificProviders.map((project) => (
                    <div key={project.id}>
                      <ProviderBody
                        imgProject={project.imgProject}
                        nameProject={project.nameProject}
                        rubroProject={project.rubroProject}
                        banner1Project={project.banner1Project}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-lightbgprimary scrollbar text-center dark:bg-darkbgprimary grid justify-items-center rounded-lg p-5 pb-8 shadow-lg">
          <TextH1 textTitle={"- Market -"} />
          <Paragraf1
            textTitle={
              "Sin un proyecto seleccionado, se mostrará el Market general de Noboss."
            }
          />
          <div className="grid justify-center gap-3">
            <div className="flex justify-center gap-3 mt-4">
              <ButtonMarketBody2
                textButton={"Nobox"}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/nobossAppSimple%2Frecursos%2Ficonos%2Ficonos%20panel%2FNobox.png?alt=media&token=cd5e1e03-4d3b-42be-a5d3-7eaecc340a26"
                }
              />
              <ButtonMarketBody1
                textButton={"Grupos de Descuento"}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/nobossAppSimple%2Frecursos%2Ficonos%2Ficonos%20panel%2Fmenu-icon.png?alt=media&token=2eecd4b3-2b72-49b7-88ef-5e78e62ece19"
                }
              />
            </div>
            <div>
              <div className="gap-3 mt-2 grid justify-items-center grid-cols-1 mobilL:grid-cols-2 tablet:grid-cols-3">
                {" "}
                {providers.map((project) => (
                  <div key={project.id}>
                    <ProviderBody
                      imgProject={project.imgProject}
                      nameProject={project.nameProject}
                      rubroProject={project.rubroProject}
                      banner1Project={project.banner1Project}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketBody;
