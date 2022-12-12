const ButtonBack = ({ textButton, type, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="text-white bg-gray-600 hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-800  dark:bg-[#242424] dark:hover:bg-[#1c1c1c] dark:focus:ring-[#2d2d2d] fixed transition-color duration-200 rounded-full cursor-pointer w-6 h-6 m-3 font-medium text-sm  px-3 py-1.5 text-center  "
    ></div>
  );
};
export default ButtonBack;
