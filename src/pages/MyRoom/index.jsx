import styled from "styled-components";
import "../../style/GlobalCSS.scss";

const MyRoomDiv = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/image/myroom.png"});
`;

const MyRoom = () => {
  return <MyRoomDiv className="wrapping"></MyRoomDiv>;
};

export default MyRoom;
