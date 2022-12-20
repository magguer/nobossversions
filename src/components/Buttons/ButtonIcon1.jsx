const ButtonIcon1 = ({ textButton, type, onClick, src, alt }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-white bg-lightbuttonprimary hover:bg-lightbuttonhoverprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary  dark:bg-darkbuttonprimary dark:hover:bg-darkbuttonhoverprimary dark:focus:ring-darkbuttonringprimary  flex items-center transition-color duration-200  font-medium rounded-lg text-sm  px-3 py-1.5 text-center"
    >
      <img className="w-5" src={src} alt={alt} />
    </button>
  );
};

export default ButtonIcon1;
