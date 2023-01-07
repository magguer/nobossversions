import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import YourProjectsBody from "../components/Primaries/Projects/YourProjectsBody";

import { ProjectContext } from "../context/ProjectProvider";
import SmoothieOpcIn from "../transitions/SmoothieOpcIn";

const YourProjectsLayout = () => {
  const [expandedYourProjectsBody, setExpandedYourProjectsBody] =
    useState(false);

  const { projects } = useContext(ProjectContext);

  if (projects.length === 0) {
    return (
      <div className="flex h-full justify-center gap-3 transition-all duration-500">
        <div className="hidden h-full tablet:block tablet:w-1/12 laptop:w-1/12 mb-3 transition-all duration-500">
         
            <YourProjectsBody />
         
        </div>
        <div className="w-full tablet:w-11/12 laptop:w-11/12">
          <SmoothieOpcIn>
            <Outlet />
          </SmoothieOpcIn>
        </div>
      </div>
    );
  }

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
              <SmoothieOpcIn>
                <Outlet />
              </SmoothieOpcIn>
            </div>
          </div>
        ) : (
          <div className="flex h-full justify-center gap-3 transition-all duration-500">
            <div
              onMouseEnter={() => setExpandedYourProjectsBody(true)}
              onMouseLeave={() => setExpandedYourProjectsBody(false)}
              className="hidden h-full tablet:block tablet:w-1/12 laptop:w-1/12 mb-3 transition-all duration-500"
            >
            
                <YourProjectsBody />
             
            </div>
            <div className="w-full tablet:w-11/12 laptop:w-11/12">
              <SmoothieOpcIn>
                <Outlet />
              </SmoothieOpcIn>
            </div>
          </div>
        )}
      </SmoothieOpcIn>
    </>
  );
};

export default YourProjectsLayout;
