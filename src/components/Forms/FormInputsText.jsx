import { forwardRef } from "react";

const FormInputsText = forwardRef(
  ({ type, placeholder, onChange, onBlur, name, error, children }, ref) => {
    //style

    const inputStyleDefault = "bg-gray-300 placeholder:text-white dark:bg-[#242424] border border-gray-800 dark:border-[#1a1a1a] text-gray-600 dark:text-white text-sm rounded-lg focus:ring-[#1e1e1e] focus:border-gray-300 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"

    const inputStyleError = "bg-gray-300 placeholder-gray-500 dark:bg-[#1a1a1a] border border-red-700 text-red-500 text-sm rounded-lg focus:ring-[#1e1e1e] focus:border-red-700 block w-full p-2.5 dark:border-red-600 dark:placeholder-red-400 dark:text-red dark:focus:ring-red-500 dark:focus:border-red-500";

    return (
      <div className="mb-4">
        <input
          className={error ? inputStyleError : inputStyleDefault}
          type={type}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        />
        {children}
      </div>
    );
  }
);

export default FormInputsText;
