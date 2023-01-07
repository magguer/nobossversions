import { Outlet } from "react-router-dom";

const BodyLayout = () => {
  return (
    <div className="mx-3 mt-16 tablet:mt-[70px] mobilXL:mx-12">
      <Outlet></Outlet>
    </div>
  );
};

export default BodyLayout;
