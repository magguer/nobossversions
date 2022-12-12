import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ButtonText1 from "../components/Buttons/ButtonText1";
import { UserContext } from "../context/UserProvider";
import SmoothieOpcIn from "../transitions/SmoothieOpcIn";

const UserData = () => {
  const { user, signOutEmailUser } = useContext(UserContext);

  const navigate = useNavigate();
  const handleUserLogout = async () => {
    try {
      await signOutEmailUser();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SmoothieOpcIn>
      <div className="bg-gray-700 dark:bg-[#1a1a1a] grid gap-4 justify-items-center rounded-lg p-5 shadow-lg">
        <p>{user.email}</p>
        <div className="flex justify-center">
          <ButtonText1
            onClick={handleUserLogout}
            textButton={"Cerrar Sesión"}
          />
        </div>
      </div>
    </SmoothieOpcIn>
  );
};

export default UserData;
