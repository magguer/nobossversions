//Imports React
import { useContext, useState } from "react";
//Imports Contexto
import { UserContext } from "../../context/UserProvider";
//Imports Router Dom
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
//Imports Hook Form
import { useForm } from "react-hook-form";

//Imports Funciones
import { firebaseErrors } from "../../utils/firebaseErrors";
import { formValidate } from "../../utils/formValidate";
//Imports Componentes
import FormInputsText from "../../components/Forms/FormInputsText";
import FormErrors from "../../components/Forms/Errors/FormErrors";
import ButtonBasic1 from "../../components/Buttons/ButtonText1";
import TitleForm from "../../components/Forms/TitleForm";
import ButtonGoogleSignIn from "../../components/Buttons/ButtonGoogleSignIn";
import ButtonLoading from "../../components/Buttons/ButtonLoading";

const Login = () => {
  // useContext
  const { loginEmailUser } = useContext(UserContext);

  // Navigate
  const navigate = useNavigate();

  // Validaciones de Formulario
  const { required, patternEmail, minLength, validateNoSpace, validateRePass } =
    formValidate();

  //Loading
  const [loading, setLoading] = useState(false);

  //Funciones
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true);
      await loginEmailUser(email, password);
      navigate("/userdata");
    } catch (error) {
      console.log(error.code);
      const { code, message } = firebaseErrors(error.code);
      setError(code, { message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-700 dark:bg-[#1a1a1a] px-10 py-5 rounded-lg">
      <TitleForm textTitle={"Ingreso de Usuario"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormErrors error={errors.firebase} />

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

        <div className="text-center mb-3">
          {loading ? (
            <ButtonLoading />
          ) : (
            <ButtonBasic1 textButton={"Acceder"} type="submit" />
          )}
        </div>
        <div className="text-center mb-3">
          <ButtonGoogleSignIn />
        </div>
        <div className="text-center">
          <NavLink to="/register">¿No tienes usuario? Registrate acá.</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
