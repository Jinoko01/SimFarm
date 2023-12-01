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

const StoreDescription = () => {
  return (
    <DescriptionDiv>
      <ImageDiv>
        <img
          src={`${process.env.PUBLIC_URL}/image/Description/storeDescription.png`}
          alt="myroomDescription"
          style={{ width: "100%" }}
        />
      </ImageDiv>
      <p className="pageName">상점 페이지</p>
      <p style={{ marginTop: "3%" }}>
        상점 페이지에서 동물을 입양하거나 동물에게 이로운 효과를 주는 아이템을
        구매하거나 판매할 수 있습니다.
      </p>
      <p style={{ marginTop: "3%" }}>
        <b>먹이</b>는 동물의 매력과 애정도를 소량 상승시킵니다.
      </p>
      <p>
        <b>치장</b>은 동물에게 장착시키면 매력을 대폭 상승시킵니다.
      </p>
      <p>
        <b>동물</b>을 입양하면 동물리스트에 새로운 동물이 추가됩니다.
      </p>
      <p>
        <b>판매</b>는 현재 플레이어가 가지고 있는 아이템을 판매할 수 있습니다.
      </p>
    </DescriptionDiv>
  );
};

export default StoreDescription;
