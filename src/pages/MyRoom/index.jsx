import styled from "styled-components";
import "../../style/GlobalCSS.scss";

const MyRoomDiv = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/image/myroom.png"});
`;

const MyRoom = () => {
  return (
    <MyRoomDiv className="wrapping">
      <div>
        <h2 style={{ margin: "0" }}>상세 정보</h2>
        <div>
          <div>동물 이미지</div>
          <div>
            <p>이름:</p>
            <p>종류:</p>
          </div>
        </div>
        <p>키:</p>
        <p>몸무게:</p>
        <p>나이:</p>
        <p>성별:</p>
        <p>특징:</p>
        <p>매력:</p>
        <p>애정도:</p>
        <div>
          <button>먹이</button>
          <button>치장</button>
          <button>돌보기</button>
        </div>
      </div>
      <div></div>
    </MyRoomDiv>
  );
};

export default MyRoom;
