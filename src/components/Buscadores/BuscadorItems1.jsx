function BuscadorItems1({placeholder}) {
  return (
    <div className=" text-white bg-lightbuttonprimary hover:bg-lightbuttonhoverprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary dark:bg-darkbuttonsecondary dark:hover:bg-darkbuttonhoverprimary dark:focus:ring-darkbuttonringprimary flex justify-center items-center transition-color duration-200 rounded-lg">
      <input
        className="placeholder:text-sm m-1 w-44 tablet:w-96 py-1 bg-transparent border-transparent rounded-lg focus:ring-gray-600 focus:border-transparent placeholder:text-gray-300 dark:placeholder:text-gray-500 "
        type="text"
        name=""
        id=""
        placeholder={placeholder}
      />
      <div className="text-white hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-800 dark:hover:bg-darkbuttonprimary dark:focus:ring-[#2d2d2d] rounded-lg p-2 mobilM:p-1.5 m-1 cursor-pointer transition-color duration-200">
        <img
          className="w-3 tablet:w-4"
          src="https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/nobossAppSimple%2Frecursos%2Ficonos%2Fbuscador%20blanco.png?alt=media&token=cb00df41-a58c-4788-890b-d071a43ecea8"
          alt=""
        />
      </div>
    </div>
  );
}

export default BuscadorItems1;
