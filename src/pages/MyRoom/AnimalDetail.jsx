import styled from "styled-components";

const AnimalDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: rgba(255, 255, 255, 0.4);
  border: 10px solid rgba(0, 0, 0, 0.7);
  border-radius: 50px;
  margin: 3%;

  .title {
    text-align: center;
    font-size: 24px;
  }

  .object {
    display: flex;
    height: 25%;
    gap: 13%;
  }

  .stats {
    margin-left: 7%;

    p {
      width: 25%;
      text-align: right;
    }
  }

  .btn {
    display: flex;
    justify-content: space-evenly;

    button {
      border: 5px solid rgba(0, 0, 0, 0.8);
      background: none;
      width: 25%;
      padding: 1% 0;
      cursor: pointer;

      &:hover {
        background-color: rgba(255, 255, 255, 0.7);
      }
    }
  }
`;

const DetailOvject = styled.div`
  width: 26%;
  margin: 4% 4% 0 4%;
  background-color: rgba(255, 255, 255, 0.8);
  border: 3px solid black;
  border-radius: 20px;
`;

const AnimalDetail = () => {
  return (
    <AnimalDetailDiv>
      <div className="title">
        <h2 style={{ margin: "0" }}>상세 정보</h2>
      </div>
      <div className="object">
        <DetailOvject>동물 이미지</DetailOvject>
        <div>
          <p>이름:</p>
          <p>종류:</p>
        </div>
      </div>
      <div className="stats">
        <p>키:</p>
        <p>몸무게:</p>
        <p>나이:</p>
        <p>성별:</p>
        <p>특징:</p>
        <p>매력:</p>
        <p>애정도:</p>
      </div>
      <div className="btn">
        <button>먹이</button>
        <button>치장</button>
        <button>돌보기</button>
      </div>
    </AnimalDetailDiv>
  );
};

export default AnimalDetail;
