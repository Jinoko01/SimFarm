import styled from "styled-components";

const AnimalListDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  margin: 3%;
  background-color: rgba(255, 255, 255, 0.4);
  border: 10px solid rgba(0, 0, 0, 0.7);
  border-radius: 50px;

  .point {
    margin: 0 0 2% 3%;
    h1 {
      font-size: 36px;
    }
  }
`;

const ListDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 90%;
  height: 75%;
  margin: 3% 3% 0 3%;
  border: 5px solid rgba(0, 0, 0, 0.7);
  border-radius: 50px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .item {
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
  }
`;

const AnimalList = ({ Gold, handleToggle, list }) => {
  return (
    <AnimalListDiv>
      <ListDiv>
        {list.map((animal) => (
          <div className="item" onClick={() => handleToggle(animal.id)}>
            <h3>
              <img
                style={{ width: "70%" }}
                src={process.env.PUBLIC_URL + animal.img}
              />
            </h3>
            <p>{animal.name}</p>
          </div>
        ))}
      </ListDiv>
      <div className="point">
        <h1>POINT:{Gold}</h1>
      </div>
    </AnimalListDiv>
  );
};

export default AnimalList;
