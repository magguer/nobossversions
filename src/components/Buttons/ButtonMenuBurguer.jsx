const ButtonMenuBurguer = ({ textButton, onClick, src, alt }) => {
    return (
  
        <button  className="flex w-11/12 cursos-pointer mb-3 items-center justify-center m-auto h-20 bg-[#242424] hover:bg-[#1c1c1c] transition-color duration-200 f ">
            <img className="" rc={src} alt="" />
            <h1 className="">{textButton}</h1>
        </button>
  
    );
  };
  
  export default ButtonMenuBurguer;
  