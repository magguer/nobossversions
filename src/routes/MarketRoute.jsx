import MarketBody from "../components/Primaries/Market/MarketBody";
import SmoothieOpcIn from "../transitions/SmoothieOpcIn";

const MarketRoute = () => {
  return (
    <SmoothieOpcIn>
        <MarketBody />
    </SmoothieOpcIn>
  );
};

export default MarketRoute;
