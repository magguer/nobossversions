import TextH1 from "../../components/Texts/TextH1";
import SmoothieOpcIn from "../../transitions/SmoothieOpcIn";

const EquipoRoute = () => {
  return (
    <SmoothieOpcIn>
      <div className="bg-lightbgprimary dark:bg-darkbgprimary rounded-lg p-5 shadow-lg">
        <TextH1 textTitle={" - Únete la equipo de Noboss - "}/>
      </div>
    </SmoothieOpcIn>
  );
};

export default EquipoRoute;
