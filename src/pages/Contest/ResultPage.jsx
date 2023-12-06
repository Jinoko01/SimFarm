import { useLocation } from "react-router-dom";
import "../../style/GlobalCSS.scss";
import styled from "styled-components";

const ResultDiv = styled.div`
  .resultTitle {
    background-color: rgba(255, 255, 255, 0.4);
    border: 10px solid rgba(0, 0, 0, 1);
    margin: 0 auto;
    margin-top: 28%;
    width: 100%;
    h1 {
      padding: 4% 0 4% 0;
      margin: 0 auto;
      text-align: center;
      font-size: 28px;
      font-weight: 900;
      letter-spacing: 10px;
      background-image: linear-gradient(to bottom, #000000, darkblue);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }

    button {
      display: block;
      width: 20%;
      margin: 0 auto;
      margin-bottom: 3%;
      padding: 1%;
      border: 3px solid black;
      border-radius: 20px;
      text-align: center;
      background-image: linear-gradient(to bottom, #5c648d, #c2b4d7);
      cursor: pointer;
      color: #e5e5e5;
    }
  }
`;

const ResultPage = () => {
  const location = useLocation();
  const eng = location.state.eng;
  const name = location.state.name;
  const attract = location.state.attract;
  const affect = location.state.affect;

  const endingImg = `${process.env.PUBLIC_URL}/image/result/${eng}_${
    attract > 80 ? "attractHigh" : "attractLow"
  }_${affect > 70 ? "affectHigh" : "affectLow"}.png`;

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <ResultDiv
      className="wrapping"
      style={{ backgroundImage: `url(${endingImg})` }}
    >
      <p className="nonDisplay">.</p>
      <div className="resultTitle">
        <h1>
          {name}이(가) {attract > 80 ? "수상을 하였고" : "수상을 하지 못하였고"}{" "}
          <br />
          {affect > 70 ? "행복해합니다." : "불행해합니다."}
        </h1>
        <button onClick={handleRestart}>다시하기</button>
      </div>
    </ResultDiv>
  );
};

export default ResultPage;
