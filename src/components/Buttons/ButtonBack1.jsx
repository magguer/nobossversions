const ButtonBack = ({ textButton, type, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className="text-white bg-lightbuttonprimary hover:bg-lightbuttonhoverprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary  dark:bg-darkbuttonprimary dark:hover:bg-darkbuttonhoverprimary dark:focus:ring-darkbuttonringprimary  fixed transition-color duration-200 rounded-full cursor-pointer w-6 h-6 m-3 font-medium text-sm  px-3 py-1.5 text-center"
    ></div>
  );
};
export default ButtonBack;
