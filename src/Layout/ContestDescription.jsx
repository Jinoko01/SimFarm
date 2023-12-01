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
          src={`${process.env.PUBLIC_URL}/image/contestDescription.png`}
          alt="myroomDescription"
          style={{ width: "100%" }}
        />
      </ImageDiv>
      <p className="pageName">대회 페이지</p>
      <p style={{ marginTop: "3%" }}>
        대회 페이지에서 플레이어가 키웠던 동물들 중 하나들 대회로 보내게 됩니다.
      </p>
      <p>
        대회에 보내고 나면 동물의 매력에 따라 등수가 결정되며, 등수와 애정도에
        따라 다양한 엔딩이 연출됩니다.
      </p>
    </DescriptionDiv>
  );
};

export default ContestDescription;
