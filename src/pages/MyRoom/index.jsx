import styled from "styled-components";
import "../../style/GlobalCSS.scss";
import AnimalDetail from "./AnimalDetail";

const MyRoomDiv = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/image/myroom.png"});
`;

const MyRoom = () => {
  return (
    <MyRoomDiv className="wrapping">
      <div>
        <AnimalDetail />
        <div></div>
      </div>
    </MyRoomDiv>
  );
};

export default MyRoom;
