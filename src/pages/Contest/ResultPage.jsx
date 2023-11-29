import { useLocation } from "react-router-dom";
import "../../style/GlobalCSS.scss";

const ResultPage = () => {
  const location = useLocation();
  const attract = location.state.attract;
  const affect = location.state.affect;

  return (
    <div className="wrapping">
      <div>매력: {attract}</div>
      <div>애정도: {affect}</div>
    </div>
  );
};

export default ResultPage;
