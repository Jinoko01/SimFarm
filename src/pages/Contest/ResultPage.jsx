import { useLocation } from "react-router-dom";
import "../../style/GlobalCSS.scss";

const ResultPage = () => {
  const location = useLocation();
  const eng = location.state.eng;
  const attract = location.state.attract;
  const affect = location.state.affect;

  const endingImg = `${process.env.PUBLIC_URL}/result/${eng}_${
    attract > 80 ? "attractHigh" : "attractLow"
  }_${affect > 70 ? "affectHigh" : "affectLow"}.png`;

  const testImg = `${process.env.PUBLIC_URL}/image/myroom.png`;

  return (
    <div className="wrapping" style={{ backgroundImage: `url(${testImg})` }}>
      <div>이름: {eng}</div>
      <div>매력: {attract}</div>
      <div>애정도: {affect}</div>
    </div>
  );
};

export default ResultPage;
