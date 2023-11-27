import React from "react";
import "../../style/GlobalCSS.scss";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
      background-image: linear-gradient(to bottom, #9f4298, #cfdb31);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }

  .subText {
    margin-top: 3%;
    text-align: center;
    font-size: 24px;
  }

  .startBtn {
    width: 20%;
    margin: 0 auto;
    border: 3px solid black;
    border-radius: 20px;
    text-align: center;
    margin-top: 10%;
    background-image: linear-gradient(to bottom, #5c648d, #c2b4d7);
    cursor: pointer;
    color: #e5e5e5;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const Contest = ({ list }) => {
  const navigate = useNavigate();

  return (
    <ContestDiv className="wrapping">
      <div className="contestTitle">
        <h1>동물 컨테스트</h1>
      </div>
      <div className="subText">
        <p>※대회를 시작할 경우,※</p>
        <p>※엔딩이 연출되며 게임 정보가 초기화됩니다.※</p>
      </div>
      <div
        className="startBtn"
        onClick={() => {
          navigate("/myroom");
        }}
      >
        <p>대회 시작</p>
      </div>
    </ContestDiv>
  );
};

export default Contest;
