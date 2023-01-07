import { Link } from "react-router-dom";

const ButtonManagBody2 = ({ textButton, type, onClick, src, alt, link }) => {
  /*  console.log(project); */
  return (
    <div className="text-white bg-lightbuttonprimary hover:bg-lightbuttonhoverprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary  dark:bg-darkbuttonprimary dark:hover:bg-darkbuttonhoverprimary dark:focus:ring-darkbuttonringprimary transition-color duration-200 font-medium rounded-lg text-sm mobilL:text-xl laptop:text-2xl cursor-pointer">
      <Link to={link}>
        <button
          type={type}
          onClick={onClick}
          className="flex w-full py-3 mobilL:py-5 px-3 mobilL:px-6 laptop:px-8  transition-color duration-200 gap-1 tablet:gap-3 justify-between"
        >
          <span>{textButton}</span>
          <img
            className="w-8 mobilL:w-10 laptop:w-12 mt-5"
            src={src}
            alt={alt}
          />
        </button>
      </Link>
    </div>
  );
};

export default ButtonManagBody2;
