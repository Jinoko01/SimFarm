import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ContestDiv = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/image/contest.png"});

  .black {
    opacity: 0;
  }

  .selectDiv {
    background-color: rgba(255, 255, 255, 0.4);
    border: 10px solid rgba(0, 0, 0, 0.7);
    border-radius: 50px;
    margin-top: 5%;
    width: 70%;
    height: 85%;
    margin: 0 auto;

    .title h1 {
      margin: 0;
      margin-top: 3%;
      text-align: center;
      font-size: 40px;
    }

    .list {
      display: flex;
      justify-content: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;
      width: 90%;
      height: 65%;
      margin: 0 auto;
      overflow: scroll;

      &::-webkit-scrollbar {
        display: none;
      }

      .item {
        border: 5px solid rgba(0, 0, 0, 0.7);

        width: 23%;
        height: 37%;
        margin: 4% 4% 0 4%;
        background-color: rgba(255, 255, 255, 0.8);
        border: 3px solid black;
        border-radius: 20px;
        cursor: pointer;

        h3 {
          text-align: center;
          margin: 0;
        }

        p {
          text-align: center;
          margin-top: 10%;
        }

        &:hover {
          background-color: rgba(217, 217, 217, 0.5);
        }

        &.select {
          background-color: rgba(217, 217, 217, 0.5);
        }
      }
    }
    .startBtn {
      width: 30%;
      margin: 0 auto;
      border: 3px solid black;
      border-radius: 20px;
      text-align: center;
      margin-top: 5%;
      background-image: linear-gradient(to bottom, #5c648d, #c2b4d7);
      cursor: pointer;
      color: #e5e5e5;

      p {
        margin: 5% 0;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const SelectPage = ({ petlist, select, setSelect }) => {
  const navigate = useNavigate();

  return (
    <ContestDiv className="wrapping">
      <p className="blank">.</p>
      <div className="selectDiv">
        <div className="title">
          <h1>동물을 선택하시오</h1>
        </div>
        <div className="list">
          {petlist.map((animal) => (
            <div
              className={`item ${select === animal ? "select" : ""}`}
              onClick={() => setSelect(animal)}
            >
              <h3>
                <img
                  style={{ width: "50%" }}
                  src={process.env.PUBLIC_URL + animal.img()}
                  alt={animal.name}
                />
              </h3>
              <p>{animal.name}</p>
            </div>
          ))}
        </div>
        <div
          className="startBtn"
          onClick={() => {
            if (select !== null) {
              navigate("/contest/result", {
                state: {
                  eng: select.eng,
                  attract: select.attract,
                  affect: select.affect,
                },
              });
            } else {
              console.log("동물 없음");
            }
          }}
        >
          <p>대회 시작</p>
        </div>
      </div>
    </ContestDiv>
  );
};

export default SelectPage;
