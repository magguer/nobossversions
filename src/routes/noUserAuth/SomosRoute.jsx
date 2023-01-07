import TextH1 from "../../components/Texts/TextH1";
import TextH3 from "../../components/Texts/TextH3";
import SmoothieOpcIn from "../../transitions/SmoothieOpcIn";

const SomosRoute = () => {
  return (
    <SmoothieOpcIn>
      <div className="bg-lightbgprimary text-center dark:bg-darkbgprimary grid justify-center rounded-lg p-5 shadow-lg">
        <TextH1 textTitle={" - Quiénes Somos - "}/>
        <TextH3 textTitle={"Somos un sistema de gestión y abastecimiento para proyectos y emprendimientos."} />
      </div>
    </SmoothieOpcIn>
  );
};

export default SomosRoute;
