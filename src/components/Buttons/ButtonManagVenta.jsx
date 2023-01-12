const ButtonManagVenta = ({
  textButton,
  textButton2,
  type,
  onClick,
  src,
  alt,
}) => {
  /*  console.log(project); */
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-white bg-secondarycolor focus:ring-2 focus:outline-none focus:ring-lightbuttonringprimary  dark:bg-secondarycolor dark:focus:ring-darkbuttonringprimary hover:bg-secondaryhovercolor dark:hover:bg-secondaryhovercolor transition-all flex justify-center tablet:grid  duration-300 w-full gap-1 font-medium rounded-xl text-sm mobilL:text-lg py-3 items-center justify-items-center px-1 mobilL:px-2 laptop:px-4"
    >
      <div className="grid mr-4 tablet:mr-0">
        <span>{textButton}</span>
        <span>{textButton2}</span>
      </div>
      <img className="w-8 mobilL:w-12 laptop:w-16 mt-5" src={src} alt={alt} />
    </button>
  );
};

export default ButtonManagVenta;
