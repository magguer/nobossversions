import UserProfileBody from "../components/Primaries/User/UserProfileBody";
import SmoothieOpcIn from "../transitions/SmoothieOpcIn";

const UserData = () => {
  return (
    <SmoothieOpcIn>
      <UserProfileBody />
    </SmoothieOpcIn>
  );
};

export default UserData;
