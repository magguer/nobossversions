const ButtonManagBody1 = ({ textButton, type, onClick, src, alt }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-white bg-lightbuttonprimary hover:bg-lightbuttonhoverprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary  dark:bg-darkbuttonprimary dark:hover:bg-darkbuttonhoverprimary dark:focus:ring-darkbuttonringprimary flex transition-color duration-200 gap-3 items-center font-medium rounded-lg text-lg tablet:text-xl py-5 justify-center"
    >
      <img className="w-8 tablet:w-10" src={src} alt={alt} />
      <span>{textButton}</span>
    </button>
  );
};

export default ButtonManagBody1;
