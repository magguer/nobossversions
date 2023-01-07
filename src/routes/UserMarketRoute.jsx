import MarketBody from "../components/Primaries/Market/MarketBody";
import SmoothieOpcIn from "../transitions/SmoothieOpcIn";

const MarketRoute = () => {
  return (
    <SmoothieOpcIn>
      <div>
        <MarketBody />
      </div>
    </SmoothieOpcIn>
  );
};

export default MarketRoute;
