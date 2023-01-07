import Paragraf1 from "../../components/Texts/Paragraf1";
import TextH1 from "../../components/Texts/TextH1";
import TextH3 from "../../components/Texts/TextH3";
import SmoothieOpcIn from "../../transitions/SmoothieOpcIn";

const QueHacerRoute = () => {
  return (
    <SmoothieOpcIn>
      <div className="bg-lightbgprimary text-center dark:bg-darkbgprimary grid justify-center rounded-lg p-5 shadow-lg">
        <TextH1 textTitle={" - Que hacer - "} />
        <Paragraf1
          textTitle={
            "Desde ponerte al día con la contabilidad de tu proyecto, hasta realizar pedidos a proveedores con imperdibles descuentos."
          }
        />
        <Paragraf1
          textTitle={
            "Pasando por el Explorador de Proyectos, que te permitirá analizar a detalle los mercados."
          }
        />
      </div>
    </SmoothieOpcIn>
  );
};

export default QueHacerRoute;
