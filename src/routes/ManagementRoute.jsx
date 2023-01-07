import ManagementBody from "../components/Primaries/Management/ManagementBody";
import SmoothieOpcIn from "../transitions/SmoothieOpcIn";

const ManagementRoute = () => {
  return (
    <>
      <SmoothieOpcIn>
        <ManagementBody />
      </SmoothieOpcIn>
    </>
  );
};

export default ManagementRoute;
