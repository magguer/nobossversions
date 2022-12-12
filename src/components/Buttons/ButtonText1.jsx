import ButtonLoading from "./ButtonLoading";

const ButtonText1 = ({textButton, type, onClick, loading}) => {

  if(loading) return <ButtonLoading/>

  return (
    <button type={type} onClick={onClick} className="text-white bg-[#242424] hover:bg-[#1c1c1c] transition-color duration-200 focus:ring-2 focus:outline-none focus:ring-[#2d2d2d] font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" >
      {textButton}
    </button>
  );
};

export default ButtonText1;
