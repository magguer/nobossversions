import Paragraf1 from "../../components/Texts/Paragraf1";


const NotFound = () => (
  <div className="bg-lightbgprimary dark:bg-darkbgprimary grid justify-center rounded-lg p-5 shadow-lg">
    <Paragraf1 textTitle="Ruta inexistente" />
    <img
      className="w-80 opacity-20"
      src="https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/nobossAppSimple%2Frecursos%2Ficonos%2Fdisconect-icon.png?alt=media&token=e90640f4-9ef0-4aa2-bc05-e937107b41cd"
      alt="disconect-icon"
    />
  </div>
);

export default NotFound;
