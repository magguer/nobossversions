const ButtonCancelText1 = ({textButton, type, onClick}) => {
  return (
    <button type={type} onClick={onClick} className="text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-[#2d2d2d] dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-[#2d2d2d] transition-color duration-200 font-medium rounded-lg text-sm px-5 py-1.5 text-center" >
      {textButton}
    </button>
  );
};

export default ButtonCancelText1;
