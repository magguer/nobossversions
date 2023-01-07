import { Outlet } from "react-router-dom";

const ComponentsLayout = () => {
  return (
    <div className="bg-gray-700 dark:bg-darkbgsecondary rounded-lg ">
      <Outlet></Outlet>
    </div>
  );
};

export default ComponentsLayout;
