import { Link } from "react-router-dom";

const ButtonManagBody4 = ({ textButton, type, onClick, src, alt, link }) => {
  /*  console.log(project); */
  return (
    <Link to={link}>
      <button
        type={type}
        onClick={onClick}
        className="text-white bg-lightbuttonprimary hover:bg-lightbuttonhoverprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary  dark:bg-darkbuttonprimary dark:hover:bg-darkbuttonhoverprimary dark:focus:ring-darkbuttonringprimary flex items-center transition-color duration-200 gap-3 font-medium rounded-lg text-xs py-2 px-3"
      >
        <img className="w-3" src={src} alt={alt} />
        {/*   <span className="hidden tablet:flex">{textButton}</span> */}
      </button>
    </Link>
  );
};

export default ButtonManagBody4;
