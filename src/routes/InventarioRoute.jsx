import InventarioBody from "../components/Primaries/Management/Inventario/InventarioBody";
import SmoothieOpcIn from "../transitions/SmoothieOpcIn";

const ManagementRoute = () => {
  return (
    <>
      <SmoothieOpcIn>
        <InventarioBody />
      </SmoothieOpcIn>
    </>
  );
};

export default ManagementRoute;
