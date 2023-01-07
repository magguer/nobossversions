const ButtonManagVenta = ({ textButton, type, onClick, src, alt }) => {
  /*  console.log(project); */
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-white bg-lightbuttonprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary  dark:bg-darkbuttonprimary dark:focus:ring-darkbuttonringprimary hover:bg-darksecondarycolor dark:hover:bg-darksecondarycolor transition-all flex justify-center tablet:grid  duration-300 w-full gap-1 font-medium rounded-xl text-lg py-3 items-center justify-items-center px-1 mobilL:px-2 laptop:px-4"
    >
      <span>{textButton}</span>
      <img className="w-8 mobilL:w-12 laptop:w-16 mt-5" src={src} alt={alt} />
    </button>
  );
};

export default ButtonManagVenta;
