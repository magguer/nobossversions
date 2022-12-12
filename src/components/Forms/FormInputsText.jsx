import { forwardRef } from "react";

const FormInputsText = forwardRef(
  ({ type, placeholder, onChange, onBlur, name, error, children }, ref) => {
    //style

    const inputStyleDefault = "bg-[#242424] border border-[#1a1a1a] text-white text-sm rounded-lg focus:ring-[#1e1e1e] focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    const inputStyleError = "bg-[#1a1a1a] border border-red-700 text-red-500 text-sm rounded-lg focus:ring-[#1e1e1e] focus:border-red-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

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
