import styled from "styled-components";
import "../../style/GlobalCSS.scss";
import AnimalDetail from "./AnimalDetail";
import AnimalList from "./AnimalList";
import { useCallback, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const MyRoomDiv = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/image/myroom.png"});
  display: flex;
`;

const MyRoom = ({ Gold, list, addItem, removeItem }) => {
  const [id, setId] = useState(null);
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const selectedPet = location.state?.pet;  // location.state에서 선택된 펫의 이름을 추출합니다.

  useEffect(() => {
    // MainPage에서 받아온 동물 정보가 있고, 아직 list에 추가되지 않았다면 addItem을 호출합니다.
    if (selectedPet && !list.some((item) => item.name === selectedPet)) {
      addItem({ id: Date.now(), name: selectedPet }); // id를 고유 값으로 설정하기 위해 Date.now() 사용
    }
  }, [selectedPet, list, addItem]); // 의존성 배열에 selectedPet, list, addItem 추가


  const handleToggle = useCallback(
    (objectId) => {
      console.log(objectId);
      if (objectId !== id) {
        setToggle(true);
        setId(objectId);
      } else if (objectId === id) {
        setToggle(false);
        setId(null);
      }
    },
    [id]
  );

  return (
    <MyRoomDiv className="wrapping">
      {selectedPet && <p>선택된 펫: {selectedPet}</p>} {/* 선택된 펫의 이름을 화면에 표시합니다. */}
      <AnimalDetail toggle={toggle} />
      <AnimalList list={list} Gold={Gold} handleToggle={handleToggle} />
    </MyRoomDiv>
  );
};

export default MyRoom;
