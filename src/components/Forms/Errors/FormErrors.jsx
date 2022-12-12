const FormErrors = ({error}) => {

  const style = error? "rounded-md p-1  border-red-700 border text-center mt-2 text-red-600 dark:text-red-500" : ""

  return <div className={style}>{error && error.message}</div>;
};

export default FormErrors;
