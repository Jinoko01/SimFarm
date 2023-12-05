import { useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import DessertModal from "./DessertModal";
import AccessoryModal from "./AccessoryModal";
import CareModal from "./CareModal";

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

    .name {
      margin-top: 5%;
    }
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

const DetailObject = styled.div`
  width: 33%;
  margin: 4% 4% 0 4%;
  background-color: rgba(255, 255, 255, 0.8);
  border: 3px solid black;
  border-radius: 20px;
  text-align: center;

  img {
    margin: 0;
  }
`;

const NoneDiv = styled.div`
  width: 30%;
  margin: 3%;
  border: 10px solid rgba(0, 0, 0, 0);
`;

const AnimalDetail = ({
  petlist,
  id,
  toggle,
  inventory,
  setInventory,
  Gold,
  setGold,
}) => {
  const [dessertShow, setDessertShow] = useState(false);
  const [accessoryShow, setAccessoryShow] = useState(false);
  const [careShow, setCareShow] = useState(false);

  const handleDessertClese = () => setDessertShow(false);
  const handleAccessoryClese = () => setAccessoryShow(false);
  const handleCareClose = () => setCareShow(false);
  const handleDessertShow = () => setDessertShow(true);
  const handleAccessoryShow = () => setAccessoryShow(true);
  const handleCareShow = () => setCareShow(true);

  const getObject = useCallback(() => {
    for (let key in petlist) {
      if (petlist[key].id === id) {
        return petlist[key];
      }
    }
  }, [petlist, id]);

  const object = useMemo(() => getObject(), [getObject]);
  if (toggle) {
    return (
      <AnimalDetailDiv>
        <div className="title">
          <h2 style={{ margin: "0" }}>상세 정보</h2>
        </div>
        <div className="object">
          <DetailObject>
            <img
              style={{ width: "90%" }}
              src={process.env.PUBLIC_URL + object.img()}
              alt={object.name}
            />
          </DetailObject>
          <div className="name">
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
            <p className="value">
              {object.accessory.name ? object.accessory.name : "없음"}
            </p>
          </div>
        </div>
        <div className="btn">
          <button onClick={handleDessertShow}>먹이</button>
          <button onClick={handleAccessoryShow}>치장</button>
          <button onClick={handleCareShow}>돌보기</button>
        </div>
        <DessertModal
          show={dessertShow}
          hide={handleDessertClese}
          object={object}
          inventory={inventory}
          setInventory={setInventory}
        />
        <AccessoryModal
          show={accessoryShow}
          hide={handleAccessoryClese}
          object={object}
          inventory={inventory}
          setInventory={setInventory}
        />
        <CareModal
          show={careShow}
          hide={handleCareClose}
          object={object}
          Gold={Gold}
          setGold={setGold}
        />
      </AnimalDetailDiv>
    );
  } else {
    return <NoneDiv />;
  }
};

export default AnimalDetail;
