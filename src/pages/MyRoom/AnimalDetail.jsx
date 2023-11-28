import { useMemo } from "react";
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
    height: 55%;

    div {
      display: flex;
      height: 13%;
      .stat {
        width: 25%;
        text-align: right;
      }
      .value {
        margin-left: 5%;
      }
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

  img {
    text-align: center;
    margin: 0;
  }
`;

const NoneDiv = styled.div`
  width: 30%;
  margin: 3%;
  border: 10px solid rgba(0, 0, 0, 0);
`;

const AnimalDetail = ({ list, id, toggle }) => {
  const getObject = () => {
    for (let key in list) {
      if (list[key].id === id) {
        return list[key];
      }
    }
  };

  const object = useMemo(() => getObject(), [list, id]);
  if (toggle) {
    return (
      <AnimalDetailDiv>
        <div className="title">
          <h2 style={{ margin: "0" }}>상세 정보</h2>
        </div>
        <div className="object">
          <DetailOvject>
            <img
              style={{ width: "100%" }}
              src={process.env.PUBLIC_URL + object.img}
              alt={object.name}
            />
          </DetailOvject>
          <div>
            <p>이름: {object.name}</p>
            <p>종류: {object.sort}</p>
          </div>
        </div>
        <div className="stats">
          <div>
            <p className="stat">키:</p>
            <p className="value">{object.height}</p>
          </div>
          <div>
            <p className="stat">몸무게:</p>
            <p className="value">{object.weight}</p>
          </div>
          <div>
            <p className="stat">나이:</p>
            <p className="value">{object.age}</p>
          </div>
          <div>
            <p className="stat">특징:</p>
            <p className="value">{object.feature}</p>
          </div>
          <div>
            <p className="stat">매력:</p>
            <p className="value">{object.attract}</p>
          </div>
          <div>
            <p className="stat">애정도:</p>
            <p className="value">{object.affect}</p>
          </div>
          <div>
            <p className="stat">치장:</p>
            <p className="value">{object.accessory}</p>
          </div>
        </div>
        <div className="btn">
          <button>먹이</button>
          <button>치장</button>
          <button>돌보기</button>
        </div>
      </AnimalDetailDiv>
    );
  } else {
    return <NoneDiv />;
  }
};

export default AnimalDetail;
