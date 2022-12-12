import SmoothieOpcIn from "../../transitions/SmoothieOpcIn";

const Home = () => {
  return (
    <SmoothieOpcIn>
      <div className="bg-gray-700 dark:bg-[#1a1a1a] rounded-lg p-5 shadow-lg">
        <h1>Viví de lo tuyo.</h1>
        <h2>Gestión | Abastecimiento | Conexión</h2>
      </div>
    </SmoothieOpcIn>
  );
};

export default Home;
