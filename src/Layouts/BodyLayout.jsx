import { Outlet } from "react-router-dom";

const BodyLayout = () => {
  return (
    <div className="mx-3 my-20 mobilXL:mx-12">
      <Outlet></Outlet>
    </div>
  );
};

export default BodyLayout;
