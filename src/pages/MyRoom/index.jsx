import styled from "styled-components";
import "../../style/GlobalCSS.scss";
import AnimalDetail from "./AnimalDetail";
import AnimalList from "./AnimalList";
import { useCallback, useState } from "react";

const MyRoomDiv = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/image/myroom.png"});
  display: flex;
`;

const MyRoom = ({ Gold, list, addItem, removeItem }) => {
  const [id, setId] = useState(null);
  const [toggle, setToggle] = useState(false);

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
      <AnimalDetail toggle={toggle} />
      <AnimalList list={list} Gold={Gold} handleToggle={handleToggle} />
    </MyRoomDiv>
  );
};

export default MyRoom;
