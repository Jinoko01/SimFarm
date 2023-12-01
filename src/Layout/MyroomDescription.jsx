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

const MyroomDescription = () => {
  return (
    <DescriptionDiv>
      <ImageDiv>
        <img
          src={`${process.env.PUBLIC_URL}/image/Description/myroomDescription.png`}
          alt="myroomDescription"
          style={{ width: "100%" }}
        />
      </ImageDiv>
      <p className="pageName">마이룸 페이지</p>
      <p style={{ marginTop: "3%" }}>
        마이룸 페이지에서 플레이어가 가지고 있는 동물을 관리할 수 있습니다.
      </p>
      <p>
        오른쪽에 있는 동물리스트에서 하나의 동물을 클릭할 시 왼쪽에 동물에 관한
        상세정보가 나오게 됩니다.
      </p>
      <p style={{ marginTop: "3%" }}>
        <b>먹이</b>버튼을 통해 먹이를 줄 수 있습니다.
      </p>
      <p>
        <b>치장</b>버튼을 통해 악세서리를 장착할 수 있습니다.
      </p>
      <p>
        <b>돌보기</b>버튼을 통해 동물을 보살펴 줄 수 있습니다.
      </p>
    </DescriptionDiv>
  );
};

export default MyroomDescription;
