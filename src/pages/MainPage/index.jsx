import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/GlobalCSS.scss";
import styled from "styled-components";

const PetImage1 = process.env.PUBLIC_URL + "/image/Animal/beetle1.png";
const PetImage2 = process.env.PUBLIC_URL + "/image/Animal/snake1.png";
const PetImage3 = process.env.PUBLIC_URL + "/image/Animal/bird1.png";

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

.pet_img{
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
    background-image: linear-gradient(to bottom, #A7CF5C, #A7CF5C);
    cursor: pointer;
    color: #FFFFFF;

    &:hover {
    opacity: 0.8;
    }
}
`;


const MainPage = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [hasChosen, setHasChosen] = useState(false);
  const navigateTo = useNavigate();

  const handlePetClick = (petName) => {
    setSelectedPet(petName);
  };

  const handleNavigate = () => {
    if (selectedPet && !hasChosen) {
      setHasChosen(true);
      navigateTo('/myroom', { state: { pet: selectedPet } });
    }
  };

    // 선택이 이미 이루어진 경우 바로 /myroom으로 리디렉트
  if (hasChosen) {
    navigateTo('/myroom', "");
  }

  return (
    <MainPageDiv className="wrapping">
      <div className="mainTitle">
        <h1>동물 선택하기</h1>
      </div>
      <div className="subText">
        <p>선택한 동물은 이번 게임동안 함께 합니다</p>
      </div>

      <div className="pet_img">
        <div>
          <PetImage src={PetImage1} alt="beetle" onClick={() => handlePetClick('beetle')}
            style={{ border: selectedPet === 'beetle' ? '2px solid blue' : 'none' }} />
          <PetName>Beetle</PetName>
        </div>
        <div>
          <PetImage src={PetImage2} alt="snake" onClick={() => handlePetClick('snake')}
            style={{ border: selectedPet === 'snake' ? '2px solid blue' : 'none' }} />
          <PetName>Snake</PetName>
        </div>
        <div>
          <PetImage src={PetImage3} alt="bird" onClick={() => handlePetClick('bird')}
            style={{ border: selectedPet === 'bird' ? '2px solid blue' : 'none' }} />
          <PetName>Bird</PetName>
        </div>
      </div>

      <div className="startBtn" onClick={handleNavigate}>
        <p>선택하기</p>
      </div>
    </MainPageDiv>
  )
};

export default MainPage;
