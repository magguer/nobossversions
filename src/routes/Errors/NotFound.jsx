import Paragraf1 from "../../components/Texts/Paragraf1";


const NotFound = () => (
  <div className="bg-lightbgprimary dark:bg-darkbgprimary grid justify-center rounded-lg p-5 shadow-lg">
    <Paragraf1 textTitle="Ruta inexistente" />
    <img
      className="w-80 opacity-20"
      src="/iconos/disconect-icon.png"
      alt="disconect-icon"
    />
  </div>
);

export default NotFound;
