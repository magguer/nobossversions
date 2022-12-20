const ButtonTextIcon1 = ({textButton, type, onClick, src, alt}) => {
    return (
      <button type={type} onClick={onClick} className="text-white bg-lightbuttonprimary hover:bg-lightbuttonhoverprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary  dark:bg-darkbuttonprimary dark:hover:bg-darkbuttonhoverprimary dark:focus:ring-darkbuttonringprimary  flex transition-color duration-200 gap-3 items-center font-medium rounded-lg text-sm px-3 py-1.5 text-center">
        <span>{textButton}</span>
        <img className="w-5" src={src} alt={alt} />
      </button>
    );
  };
  
  export default ButtonTextIcon1;
  