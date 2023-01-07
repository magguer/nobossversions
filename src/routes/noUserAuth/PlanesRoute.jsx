import TextH1 from "../../components/Texts/TextH1";
import SmoothieOpcIn from "../../transitions/SmoothieOpcIn";

const PlanesRoute = () => {
  return (
    <SmoothieOpcIn>
      <div className="bg-lightbgprimary text-center dark:bg-darkbgprimary rounded-lg p-5 shadow-lg">
        <TextH1 textTitle={" - Planes Premium - "}/>
      </div>
    </SmoothieOpcIn>
  );
};

export default PlanesRoute;
