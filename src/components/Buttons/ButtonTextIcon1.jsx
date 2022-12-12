const ButtonTextIcon1 = ({textButton, type, onClick, src, alt}) => {
    return (
      <button type={type} onClick={onClick} className="text-white bg-gray-600 hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-800  dark:bg-[#242424] dark:hover:bg-[#1c1c1c] dark:focus:ring-[#2d2d2d] flex transition-color duration-200 gap-3 items-center font-medium rounded-lg text-sm px-3 py-1.5 text-center">
        <span>{textButton}</span>
        <img className="w-5" src={src} alt={alt} />
      </button>
    );
  };
  
  export default ButtonTextIcon1;
  