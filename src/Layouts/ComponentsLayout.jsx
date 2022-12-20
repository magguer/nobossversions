import { Outlet } from "react-router-dom";

const ComponentsLayout = () => {
  return (
    <div className=" bg-gray-700 dark:bg-[#1a1a1a] rounded-lg ">
      <Outlet></Outlet>
    </div>
  );
};

export default ComponentsLayout;
