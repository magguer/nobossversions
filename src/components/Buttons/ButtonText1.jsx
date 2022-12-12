import ButtonLoading from "./ButtonLoading";

const ButtonText1 = ({ textButton, type, onClick, loading }) => {
  if (loading) return <ButtonLoading />;

  return (
    <button
      type={type}
      onClick={onClick}
      className="text-white bg-gray-600 hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-800  dark:bg-[#242424] dark:hover:bg-[#1c1c1c] dark:focus:ring-[#2d2d2d] transition-color duration-200 font-medium rounded-lg text-sm px-5 py-1.5 text-center"
    >
      {textButton}
    </button>
  );
};

export default ButtonText1;
