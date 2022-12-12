const ButtonMenuBurguer = ({ textButton, onClick, src, alt }) => {
    return (
  
        <button  className="text-white bg-gray-600 hover:bg-gray-800 focus:ring-2 focus:outline-none focus:ring-gray-800  dark:bg-[#242424] dark:hover:bg-[#1c1c1c] dark:focus:ring-[#2d2d2d] flex w-11/12 cursos-pointer mb-3 items-center justify-center m-auto h-20 transition-color duration-200 f ">
            <img className="" rc={src} alt="" />
            <h1 className="">{textButton}</h1>
        </button>
  
    );
  };
  
  export default ButtonMenuBurguer;
  