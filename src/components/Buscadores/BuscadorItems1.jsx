function BuscadorItems1({placeholder}) {
  return (
    <div className=" text-white bg-lightbuttonprimary hover:bg-lightbuttonhoverprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary dark:bg-darkbuttonsecondary dark:hover:bg-darkbuttonhoverprimary dark:focus:ring-darkbuttonringprimary flex justify-center items-center transition-color duration-200 rounded-lg">
      <input
        className="placeholder:text-sm m-1 mobilL:w-72 tablet:w-96 py-1 bg-transparent border-transparent rounded-lg focus:ring-gray-600 focus:border-transparent placeholder:text-gray-300 dark:placeholder:text-gray-500 "
        type="text"
        name=""
        id=""
        placeholder={placeholder}
      />
      <div className="text-white hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-800 dark:hover:bg-[#1c1c1c] dark:focus:ring-[#2d2d2d] rounded-lg p-0 mobilM:p-1.5 m-1 cursor-pointer transition-color duration-200">
        <img
          className="w-5"
          src="src\assets\images\iconos\explorador-icon.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default BuscadorItems1;
