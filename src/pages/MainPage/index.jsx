import React, { useCallback } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../../style/GlobalCSS.scss";
import styled from "styled-components";

const pet = [
  {
    id: 1,
    name: "빗흘",
    img: process.env.PUBLIC_URL + "/image/beetle/1.png",
  },
  {
    id: 2,
    name: "빼앰",
    img: process.env.PUBLIC_URL + "/image/snake/1.png",
  },
  {
    id: 3,
    name: "쇄",
    img: process.env.PUBLIC_URL + "/image/bird/1.png",
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

    p {
      margin: 5% auto;
    }
  }
`;

const MainPage = ({ hasChosen, setHasChosen, setMyPets, nextAnimalId }) => {
  const [selectedPet, setSelectedPet] = useState(null);
  const navigateTo = useNavigate();
  console.log(hasChosen);

  const handlePetClick = useCallback((name, petImg) => {
    setSelectedPet({ name, petImg });
  }, []);

  const handleNavigate = useCallback(() => {
    if (selectedPet && !hasChosen) {
      setHasChosen(true);
      setMyPets((prevMyPets) => [...prevMyPets, selectedPet.name]);
      navigateTo("/myroom");
      nextAnimalId.current += 1;
    }
  }, [
    selectedPet,
    hasChosen,
    navigateTo,
    nextAnimalId,
    setHasChosen,
    setMyPets,
  ]);

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
                alt={animal.name}
                onClick={() => handlePetClick(animal.name)}
                style={{
                  border:
                    selectedPet && selectedPet.name === animal.name
                      ? "2px solid blue"
                      : "none",
                }}
              />
              <PetName>{animal.name}</PetName>
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
