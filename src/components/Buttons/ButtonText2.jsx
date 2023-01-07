import { Link } from "react-router-dom";
import ButtonLoading from "./ButtonLoading";

const ButtonText1 = ({ textButton, type, onClick, loading, link }) => {
  if (loading) return <ButtonLoading />;

  return (
    <Link to={link}>
      <button
        type={type}
        onClick={onClick}
        className="text-white bg-lightbuttonprimary hover:bg-lightbuttonhoverprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary  dark:bg-darkbuttonsecondary dark:hover:bg-darkbuttonhoverprimary dark:focus:ring-darkbuttonringprimary  transition-color duration-200 font-medium rounded-lg text-sm px-5 py-1.5 text-center"
      >
        {textButton}
      </button>
    </Link>
  );
};

export default ButtonText1;
