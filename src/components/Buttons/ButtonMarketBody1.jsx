const ButtonMarketBody1 = ({ textButton, type, onClick, src, alt }) => {
  /*  console.log(project); */
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-white bg-lightbuttonprimary hover:bg-lightbuttonhoverprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary  dark:bg-darkbuttonprimary dark:hover:bg-darkbuttonhoverprimary dark:focus:ring-darkbuttonringprimary flex transition-color duration-200 w-full font-medium rounded-lg text-sm mobilL:text-xl laptop:text-xl py-3 mobilL:py-3 justify-between px-3 mobilL:px-4"
    >
      <span>{textButton}</span>
      <img className="w-8 mobilL:w-10 mt-5" src={src} alt={alt} />
    </button>
  );
};

export default ButtonMarketBody1;
