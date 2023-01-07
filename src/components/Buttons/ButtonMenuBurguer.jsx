import { Link } from "react-router-dom";

const ButtonMenuBurguer = ({ textButton, onClick, src, alt, navigate }) => {
  return (
    <Link to={navigate}>
      <button className="text-white bg-lightbuttonprimary hover:bg-lightbuttonhoverprimary focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary  dark:bg-darkbuttonprimary dark:hover:bg-darkbuttonhoverprimary dark:focus:ring-darkbuttonringprimary  flex w-11/12 cursos-pointer mb-3 items-center justify-center m-auto h-20 transition-color duration-200 f ">
        <img className="" rc={src} alt="" />
        <h1 className="">{textButton}</h1>
      </button>
    </Link>
  );
};

export default ButtonMenuBurguer;
