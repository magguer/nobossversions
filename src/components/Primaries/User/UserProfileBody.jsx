import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ButtonText1 from "../../Buttons/ButtonText1";
import { UserContext } from "../../../context/UserProvider";
import SmoothieOpcIn from "../../../transitions/SmoothieOpcIn";
import TextH1 from "../../Texts/TextH1";
import TextH3 from "../../Texts/TextH3";
import TextH2 from "../../Texts/TextH2";
import Paragraf1 from "../../Texts/Paragraf1";

const UserProfileBody = () => {
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
      <div className="bg-lightbgprimary dark:bg-darkbgprimary grid gap-4 justify-items-center rounded-lg p-5 shadow-lg">
        <TextH1 textTitle={"Perfil de Usuario"} />
        <div className="grid mobilL:grid-cols-2 align-center gap-3">
          <div className="flex gap-5 items-center justify-center bg-lightbgsecondary dark:bg-darkbgsecondary px-3 py-2 rounded-lg">
            <img
              className="rounded-full w-10"
              src={user.photoURL}
              alt="imageUser"
            />
            <div>
              <TextH2 textTitle="Nombre:" />
              <Paragraf1 textTitle={user.displayName} />
            </div>
          </div>

          <div className="grid justify-center bg-lightbgsecondary dark:bg-darkbgsecondary px-3 py-2 rounded-lg">
            <TextH2 textTitle="Email: " />
            <Paragraf1 textTitle={user.email} />
          </div>
        </div>

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

export default UserProfileBody;
