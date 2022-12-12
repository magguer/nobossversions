const ButtonCancelText1 = ({textButton, type, onClick}) => {
  return (
    <button type={type} onClick={onClick} className="text-white bg-red-700 hover:bg-red-800 transition-color duration-200 focus:ring-2 focus:outline-none focus:ring-[#2d2d2d] font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" >
      {textButton}
    </button>
  );
};

export default ButtonCancelText1;
