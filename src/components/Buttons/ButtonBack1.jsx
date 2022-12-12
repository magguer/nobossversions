const ButtonBack = ({ textButton, type, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="fixed cursor-pointer w-6 h-6 m-3 bg-[#242424] rounded-full hover:bg-[#1c1c1c] transition-color duration-200 focus:ring-2 focus:outline-none focus:ring-[#2d2d2d] font-medium rounded-lg text-sm  px-3 py-1.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 "
    ></div>
  );
};
export default ButtonBack;
