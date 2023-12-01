import styled from "styled-components";
import "../../style/GlobalCSS.scss";
import AnimalDetail from "./AnimalDetail";
import AnimalList from "./AnimalList";
import { useCallback, useState } from "react";

const MyRoomDiv = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/image/myroom.png"});
  display: flex;
`;

const MyRoom = ({ Gold, setGold, petlist, inventory, setInventory }) => {
  const [id, setId] = useState(null);
  const [toggle, setToggle] = useState(false);

  const handleToggle = useCallback(
    (objectId) => {
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
      <AnimalDetail
        petlist={petlist}
        id={id}
        toggle={toggle}
        inventory={inventory}
        setInventory={setInventory}
        Gold={Gold}
        setGold={setGold}
      />
      <AnimalList petlist={petlist} Gold={Gold} handleToggle={handleToggle} />
    </MyRoomDiv>
  );
};

export default MyRoom;
