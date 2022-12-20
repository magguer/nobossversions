import ButtonLoading from "./ButtonLoading";

const ButtonText1 = ({ textButton, type, onClick, loading }) => {
  if (loading) return <ButtonLoading />;

  return (
    <button
      type={type}
      onClick={onClick}
      className="text-white bg-lightbuttonprimary hover:bg-lightbuttonhoverprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary  dark:bg-darkbuttonprimary dark:hover:bg-darkbuttonhoverprimary dark:focus:ring-darkbuttonringprimary  transition-color duration-200 font-medium rounded-lg text-sm px-5 py-1.5 text-center"
    >
      {textButton}
    </button>
  );
};

export default ButtonText1;
