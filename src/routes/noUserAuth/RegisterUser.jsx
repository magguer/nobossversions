// Imports React Router
import { NavLink, useNavigate } from "react-router-dom";

//Imports React Gook Form
import { useForm } from "react-hook-form";

// Imports React
import { useContext, useState } from "react";

// Imports Contexts
import { UserContext } from "../../context/UserProvider";

// Imports Errores de Firebase
import { firebaseErrors } from "../../utils/firebaseErrors";

// Imports Componentes
import FormInputsText from "../../components/Forms/FormInputsText";
import FormErrors from "../../components/Forms/Errors/FormErrors";

// Imports Validaciones
import { formValidate } from "../../utils/formValidate";
import ButtonBasic1 from "../../components/Buttons/ButtonText1";
import TitleForm from "../../components/Forms/TitleForm";
import ButtonLoading from "../../components/Buttons/ButtonLoading";

const RegisterUser = () => {
  //Validaciones
  const { required, patternEmail, minLength, validateNoSpace, validateRePass } =
    formValidate();

  //Loading
  const [loading, setLoading] = useState(false);

  //useContext
  const { registerEmailUser } = useContext(UserContext);

  //useForm
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true);
      await registerEmailUser(email, password);
      navigate("/userdata");
    } catch (error) {
      console.log(error.code);
      const { code, message } = firebaseErrors(error.code);
      setError(code, { message });
    }finally{
      setLoading(false);
    }
  };

  // Navigate
  const navigate = useNavigate();

  return (
    <div  className="bg-gray-700 dark:bg-[#1a1a1a] px-10 py-5 rounded-lg">
      <TitleForm textTitle={"Registro de Usuario"} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputsText
          type="email"
          placeholder="Email"
          error={errors.email}
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
        >
          <FormErrors error={errors.email} />
        </FormInputsText>

        <FormInputsText
          type="password"
          placeholder="Inserte contraseña"
          name="password"
          id="password"
          error={errors.password}
          {...register("password", {
            required,
            minLength,
            validate: validateNoSpace,
          })}
        >
          <FormErrors error={errors.password} />
        </FormInputsText>

        <FormInputsText
          type="password"
          placeholder="Verifique la contraseña"
          name="passwordrepeat"
          id="passwordrepeat"
          error={errors.passwordrepeat}
          {...register("passwordrepeat", {
            required,
            minLength,
            validate: validateRePass(getValues("password")),
          })}
        >
          <FormErrors error={errors.passwordrepeat} />
        </FormInputsText>
        <div className="text-center mb-3">
          {loading ? (
            <ButtonLoading />
          ) : (
            <ButtonBasic1 textButton={"Registrar Usuario"} type="submit" />
          )}
        </div>

        <div className="text-center">
          <NavLink to="/login">¿Ya tenés usuario? Accede acá.</NavLink>
        </div>
      </form>
    </div>
  );
};

export default RegisterUser;
