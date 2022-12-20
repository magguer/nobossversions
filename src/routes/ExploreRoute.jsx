import ExplorerBody from "../components/Primaries/Exlporer/ExplorerBody";
import SmoothieOpcIn from "../transitions/SmoothieOpcIn";

const ExploreRoute = () => {
  return (
    <SmoothieOpcIn>
      <ExplorerBody/>
    </SmoothieOpcIn>
  );
};

export default ExploreRoute;
