import React from "react";
import "../../style/GlobalCSS.scss";
import styled from "styled-components";

const ContestDiv = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "image/contest.png"});

  .contestTitle {
    h1 {
      margin: 0;
      text-align: center;
      padding-top: 10%;
      font-size: 120px;
      font-weight: 900;
      letter-spacing: 20px;
      background-image: linear-gradient(to top, green, red);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }
`;

const Contest = () => {
  return (
    <ContestDiv className="wrapping">
      <div className="contestTitle">
        <h1>동물 컨테스트</h1>
      </div>
    </ContestDiv>
  );
};

export default Contest;
