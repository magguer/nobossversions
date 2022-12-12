const ButtonIcon1 = ({textButton, type, onClick, src, alt}) => {
    return (
      <button type={type} onClick={onClick} className="text-white flex items-center bg-[#242424] hover:bg-[#1c1c1c] transition-color duration-200 focus:ring-2 focus:outline-none focus:ring-[#2d2d2d] font-medium rounded-lg text-sm  px-3 py-1.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        <img className="w-5" src={src} alt={alt} />
      </button>
    );
  };
  
  export default ButtonIcon1;
  