import { useState } from "react";
import ManagementBody from "../components/Primaries/Management/ManagementBody";
import YourProjectsBody from "../components/Primaries/Projects/YourProjectsBody";
import SmoothieOpcIn from "../transitions/SmoothieOpcIn";

const ManagementRoute = () => {
  const [expandedYourProjectsBody, setExpandedYourProjectsBody] =
    useState(false);

  return (
    <>
      <SmoothieOpcIn>
        {expandedYourProjectsBody ? (
          <div className="flex justify-center gap-3 transition-all duration-500">
            <div
              onMouseEnter={() => setExpandedYourProjectsBody(true)}
              onMouseLeave={() => setExpandedYourProjectsBody(false)}
              className="w-3/12 mb-3"
            >
              <YourProjectsBody />
            </div>
            <div className="w-9/12 transition-all duration-500">
              <ManagementBody />
            </div>
          </div>
        ) : (
          <div className="flex h-full justify-center gap-3 transition-all duration-500">
            <div
              onMouseEnter={() => setExpandedYourProjectsBody(true)}
              onMouseLeave={() => setExpandedYourProjectsBody(false)}
              className="hidden h-full tablet:block tablet:w-1/12 laptop:w-1/12 mb-3 transition-all duration-500"
            >
              <YourProjectsBody/>
            </div>
            <div className="w-full tablet:w-11/12 laptop:w-11/12">
              <ManagementBody />
            </div>
          </div>
        )}
      </SmoothieOpcIn>
    </>
  );
};

export default ManagementRoute;
