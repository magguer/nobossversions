import TextH1 from "../../components/Texts/TextH1";
import TextH2 from "../../components/Texts/TextH2";
import TextH3 from "../../components/Texts/TextH3";
import SmoothieOpcIn from "../../transitions/SmoothieOpcIn";

const Home = () => {
  return (
    <SmoothieOpcIn>
      <div className="bg-lightbgprimary dark:bg-darkbgprimary grid justify-center rounded-lg p-5 shadow-lg">
        <TextH1 textTitle={" - Viví de lo tuyo. - "}/>
        <TextH3 textTitle={"Gestión | Abastecimiento | Conexión"}/>
      </div>
    </SmoothieOpcIn>
  );
};

export default Home;
