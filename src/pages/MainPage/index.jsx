import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../../style/GlobalCSS.scss";
import styled from "styled-components";

const pet = [
  {
    id: 1,
    img: process.env.PUBLIC_URL + "/image/beetle/1.png",
    sort: "딱정벌레",
    eng: "beetle",
    feature: "고약한 악취",
  },
  {
    id: 2,
    img: process.env.PUBLIC_URL + "/image/snake/1.png",
    sort: "뱀",
    eng: "snake",
    feature: "미끌거림",
  },
  {
    id: 3,
    img: process.env.PUBLIC_URL + "/image/bird/1.png",
    sort: "새",
    eng: "bird",
    feature: "하늘을 나는 동물",
  },
];

const PetImage = styled.img`
  width: 150px; // Set your desired size
  margin: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const PetName = styled.p`
  font-size: 17px; // Small font size for the pet names
  color: #000;
  text-align: center;
  margin-top: 5px;
`;

const MainPageDiv = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "image/petshop.jpg"});

  .mainTitle {
    h1 {
      margin: 0;
      text-align: center;
      padding-top: 3%;
      font-size: 70px;
      font-weight: 900;
      letter-spacing: 20px;
      background-image: linear-gradient(to bottom, #000000, #000000);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }

  .subText {
    margin-top: 3%;
    text-align: center;
    font-size: 22px;
  }

  .pet_img {
    display: flex;
    justify-content: center;
  }

  .startBtn {
    width: 20%;
    margin: 0 auto;
    border: 3px solid green;
    border-radius: 20px;
    text-align: center;
    margin-top: 3%;
    background-image: linear-gradient(to bottom, #a7cf5c, #a7cf5c);
    cursor: pointer;
    color: #ffffff;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const MainPage = ({ hasChosen, setHasChosen, petlist, myPets,addItem, nextAnimalId }) => {
  const [selectedPet, setSelectedPet] = useState(null);
  const navigateTo = useNavigate();
  console.log(hasChosen);

  const handlePetClick = (petName, petImg, feature) => {
    setSelectedPet({ petName, petImg, feature });
  };

  const handleNavigate = () => {
    if (selectedPet && !hasChosen) {
      setHasChosen(true);
      addItem({
        id: nextAnimalId.current,
        img: function () {
          return this.attract < 80
            ? `/image/${selectedPet.petImg}/1.png`
            : this.attract < 100
            ? `/image/${selectedPet.petImg}/2.png`
            : `/image/${selectedPet.petImg}/3.png`;
        },
        name: selectedPet.petName,
        sort: selectedPet.petName,
        height: 1,
        weight: 0.4,
        age: 1,
        category: "main",
        feature: selectedPet.feature,
        attract: 50,
        affect: 0,
        accessory: "",
      });
      navigateTo("/myroom");
      nextAnimalId.current += 1;
    }
  };

  if (hasChosen) {
    return <Navigate to="/myroom" />;
  } else {
    return (
      <MainPageDiv className="wrapping">
        <div className="mainTitle">
          <h1>동물 선택하기</h1>
        </div>
        <div className="subText">
          <p>선택한 동물은 이번 게임동안 함께 합니다</p>
        </div>

        <div className="pet_img">
          {pet.map((animal) => (
            <div>
              <PetImage
                src={animal.img}
                alt={animal.sort}
                onClick={() =>
                  handlePetClick(animal.sort, animal.eng, animal.feature)
                }
                style={{
                  border:
                    selectedPet && selectedPet.petName === animal.sort
                      ? "2px solid blue"
                      : "none",
                }}
              />
              <PetName>{animal.eng}</PetName>
            </div>
          ))}
        </div>

        <div className="startBtn" onClick={handleNavigate}>
          <p>선택하기</p>
        </div>
      </MainPageDiv>
    );
  }
};

export default MainPage;
