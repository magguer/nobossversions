const BurguerButton = ({ textButton, type, onClick, src, alt }) => {
  return (

      <button className="space-y-1.5 cursor-pointer focus:ring-2 focus:ring-[#2d2d2d] transition-color duration-200 p-2 rounded-md hover:bg-[#1c1c1c] ">
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

  );
};

export default BurguerButton;
