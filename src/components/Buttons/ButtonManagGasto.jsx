const ButtonManagGasto = ({ textButton, type, onClick, src, alt }) => {
  /*  console.log(project); */
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-white bg-lightbuttonprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary  dark:bg-darkbuttonprimary dark:focus:ring-darkbuttonringprimary  hover:bg-red-800 dark:hover:bg-red-800 transition-color  border-opacity-50 hover:border-opacity-100 flex justify-center tablet:grid duration-200 w-full gap-1 font-medium rounded-xl text-lg py-3 items-center justify-items-center px-1 mobilL:px-2 laptop:px-4"
    >
      <span className="">{textButton}</span>
      <img className="w-8 mobilL:w-12 laptop:w-16 mt-5" src={src} alt={alt} />
    </button>
  );
};

export default ButtonManagGasto;
