const BurguerButton = ({ textButton, type, onClick, src, alt }) => {
  return (
    <button className="text-white bg-gray-500 hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-800  dark:bg-[#242424] dark:hover:bg-[#1c1c1c] dark:focus:ring-[#2d2d2d] space-y-1.5 cursor-pointer  transition-color duration-200 p-2 rounded-md">
      <div className="w-6 h-0.5 bg-white"></div>
      <div className="w-6 h-0.5 bg-white"></div>
      <div className="w-6 h-0.5 bg-white"></div>
    </button>
  );
};

export default BurguerButton;
