import { Link } from "react-router-dom";

const ButtonBack = ({ textButton, type, onClick, className, link }) => {
  return (
    <Link to={link}>
      <div
        onClick={onClick}
        className="text-white bg-lightbuttonprimary hover:bg-lightbuttonhoverprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary  dark:bg-darkbuttonprimary dark:hover:bg-darkbuttonhoverprimary dark:focus:ring-darkbuttonringprimary absolute transition-color duration-200 rounded-full cursor-pointer w-6 h-6 m-3 font-medium text-sm  px-3 py-1.5 text-center"
      ></div>
    </Link>
  );
};
export default ButtonBack;
