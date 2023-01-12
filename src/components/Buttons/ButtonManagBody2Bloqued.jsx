
const ButtonManagBody2Bloqued = ({ textButton, type, src, alt }) => {
  /*  console.log(project); */
  return (
    <div className="text-primaryterceary bg-lightbuttonprimary dark:bg-darkbuttonprimary opacity-30 font-medium rounded-lg text-sm mobilL:text-xl laptop:text-2xl py-3 mobilL:py-5 px-3 mobilL:px-6 laptop:px-8 transition-opacity duration-200">
        <div
          type={type}
          className="flex w-full transition-color duration-200 gap-1 tablet:gap-3 justify-between"
        >
          <span>{textButton}</span>
          <img
            className="w-8 mobilL:w-10 laptop:w-12 mt-5"
            src={src}
            alt={alt}
          />
        </div>
    </div>
  );
};

export default ButtonManagBody2Bloqued;
