import styled from "styled-components";
import "../../style/GlobalCSS.scss";
import AnimalDetail from "./AnimalDetail";
import AnimalList from "./AnimalList";

const MyRoomDiv = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/image/myroom.png"});
  display: flex;
`;

const MyRoom = () => {
  return (
    <MyRoomDiv className="wrapping">
      <AnimalDetail />
      <AnimalList />
    </MyRoomDiv>
  );
};

export default MyRoom;
