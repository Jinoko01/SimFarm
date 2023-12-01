import styled from "styled-components";
import "../style/GlobalCSS.scss";
import { useState } from "react";
import MyroomDescription from "./MyroomDescription";
import StoreDescription from "./StoreDescription";
import GameDescription from "./GameDescription";
import ContestDescription from "./ContestDescription";

const FooterDiv = styled.div`
  background-color: #e9e9a1;
`;

const ContentDiv = styled.div`
  width: 50%;
  margin: 0 auto;

  .title {
    text-align: center;
    margin-top: 3%;
    margin-bottom: 10%;
  }

  p {
    margin: 0;
    text-align: center;
  }

  .control,
  .pageName {
    font-weight: 900;
  }
`;

const CategoryBtn = styled.div`
  text-align: center;
  button {
    margin: 4% 5%;
  }
`;

const Footer = () => {
  const [category, setCategory] = useState("myroom");
  return (
    <FooterDiv>
      <ContentDiv>
        <p className="nonDisplay">.</p>
        <h1 className="title">SimFarm 게임방법</h1>
        <p>
          SimFarm 게임은 플레이어가 직접 동물들을 케어하면서 최고의 동물로
          키워내는 게임입니다.
        </p>
        <p>동물의 매력과 애정도에 따라 다양한 엔딩이 연출됩니다.</p>
        <br />
        <p className="control">조작 방법</p>
        <p>마우스</p>
        <CategoryBtn>
          <button onClick={() => setCategory("myroom")}>마이룸</button>
          <button onClick={() => setCategory("store")}>상점</button>
          <button onClick={() => setCategory("game")}>게임</button>
          <button onClick={() => setCategory("contest")}>대회</button>
        </CategoryBtn>
        {category === "myroom" ? <MyroomDescription /> : null}
        {category === "store" ? <StoreDescription /> : null}
        {category === "game" ? <GameDescription /> : null}
        {category === "contest" ? <ContestDescription /> : null}
      </ContentDiv>
    </FooterDiv>
  );
};

export default Footer;
