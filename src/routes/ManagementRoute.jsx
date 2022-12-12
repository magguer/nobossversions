import ManagementBody from "../components/Primaries/Management/ManagementBody";
import YourProjectsBody from "../components/Primaries/Projects/YourProjectsBody";
import SmoothieOpcIn from "../transitions/SmoothieOpcIn";


const ManagementRoute = () => {


  return (
    <>
      <SmoothieOpcIn>

        <div className="tablet:flex justify-center gap-3">
          <div className="w-full tablet:w-4/12 laptop:w-3/12 mb-3">
            <YourProjectsBody />
          </div>
          <div className="w-full tablet:w-8/12 laptop:w-9/12">
            <ManagementBody />
          </div>
        </div>
      </SmoothieOpcIn>
    </>
  );
};

export default ManagementRoute;
