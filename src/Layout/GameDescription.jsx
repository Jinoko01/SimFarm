import styled from "styled-components";

const DescriptionDiv = styled.div`
  min-height: 540px;
`;

const ImageDiv = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 4%;

  img {
    margin: 0;
  }
`;

const ContestDescription = () => {
  return (
    <DescriptionDiv>
      <ImageDiv>
        <img
          src={`${process.env.PUBLIC_URL}/image/Description/gameDescription.png`}
          alt="myroomDescription"
          style={{ width: "100%" }}
        />
      </ImageDiv>
      <p className="pageName">게임 페이지</p>
      <p style={{ marginTop: "3%" }}>
        상점에서 사용될 골드를 수집할 수 있는 페이지입니다.
      </p>
      <p>
        게임은 총 두 가지로, 메인화면에서 Game1과 Game2를 선택하여 플레이합니다.<br/>
        플레이한 결과에 따라 Gold Save 버튼을 눌러 골드를 획득합니다.
      </p>
      <ImageDiv>
        <img
          src={`${process.env.PUBLIC_URL}/image/Description/Game1.png`}
          alt="myroomDescription"
          style={{ width: "100%" }}
        />
      </ImageDiv>
      <p className="pageName">Game1 : 플래피 버드</p>
      <p style={{ marginTop: "3%" }}>
        플래피 버드는 마우스 좌클릭을 통해 다가오는 파이프에 부딪히지 않고 오래 살아남는 게임입니다.
      </p>
      <ImageDiv>
        <img
          src={`${process.env.PUBLIC_URL}/image/Description/Game2.png`}
          alt="myroomDescription"
          style={{ width: "100%" }}
        />
      </ImageDiv>
      <p className="pageName">Game2 : 동물 포획</p>
      <p style={{ marginTop: "3%" }}>
        동물 포획은 박쥐, 파리와 같은 동물이 아닌 새들을 잡는 게임입니다.<br/>
        30초동안 진행되며 새를 잡으면 +1점 박쥐, 파리를 잡으면 -1점이 됩니다.
      </p>

      <ImageDiv>
        <img
          src={`${process.env.PUBLIC_URL}/image/Description/GameOver.png`}
          alt="myroomDescription"
          style={{ width: "100%" }}
        />
      </ImageDiv>
      <p className="pageName">게임 종료</p>
      <p style={{ marginTop: "3%" }}>
        게임이 끝나면 Gold Save 버튼과 Reload 버튼이 활성화 되며 <br/>
        Gold Save : 점수에 따라 골드로 전환 / Reload : 게임을 다시 진행한다.
      </p>
    </DescriptionDiv>
  );
};

export default ContestDescription;
