// Componentes
import TextH1 from "../../Texts/TextH1";
import TextH3 from "../../Texts/TextH3";

/* import { useJsApiLoader, GoogleMap } from "@react-google-maps/api"; */

const ExplorerBody = () => {
  
/*   const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: AIzaSyCz4mFD2ZUxLmlu3B6q5gUT8O4EsuwLpjM,
  }); */

 /*  if (!isLoaded) {
    return null;
  } */

  return (
    <div className="grid justify-items-center text-center bg-lightbgprimary dark:bg-darkbgprimary rounded-lg p-5 shadow-lg">
      <TextH1 textTitle={" - Explorador de Proyectos - "} />
      <TextH3
        textTitle={
          "Podrás descubrir todo tipo de proyectos en tu zona. ¿A que esperas para empezar?"
        }
      />
     {/*  <GoogleMap></GoogleMap> */}
    </div>
  );
};

export default ExplorerBody;
