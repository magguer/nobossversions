const BurguerButton = ({ textButton, type, onClick, src, alt }) => {
  return (
    <button className="text-white bg-lightbuttonprimary hover:bg-lightbuttonhoverprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary  dark:bg-darkbuttonprimary dark:hover:bg-darkbuttonhoverprimary dark:focus:ring-darkbuttonringprimary space-y-1.5 cursor-pointer  transition-color duration-200 p-2 rounded-md">
      <div className="w-6 h-0.5 bg-white"></div>
      <div className="w-6 h-0.5 bg-white"></div>
      <div className="w-6 h-0.5 bg-white"></div>
    </button>
  );
};

export default BurguerButton;
