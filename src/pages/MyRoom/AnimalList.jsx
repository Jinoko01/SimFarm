import styled from "styled-components";

const list = [
  {
    id: 1,
    img: "동물",
    name: "이름",
  },
  {
    id: 2,
    img: "동물",
    name: "이름",
  },
  {
    id: 3,
    img: "동물",
    name: "이름",
  },
  {
    id: 4,
    img: "동물",
    name: "이름",
  },
  {
    id: 5,
    img: "동물",
    name: "이름",
  },
  {
    id: 6,
    img: "동물",
    name: "이름",
  },
  {
    id: 7,
    img: "동물",
    name: "이름",
  },
  {
    id: 8,
    img: "동물",
    name: "이름",
  },
  {
    id: 9,
    img: "동물",
    name: "이름",
  },
  {
    id: 10,
    img: "동물",
    name: "이름",
  },
  {
    id: 11,
    img: "동물",
    name: "이름",
  },
  {
    id: 12,
    img: "동물",
    name: "이름",
  },
  {
    id: 13,
    img: "동물",
    name: "이름",
  },
  {
    id: 14,
    img: "동물",
    name: "이름",
  },
];

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
    width: 15%;
    height: 28.5%;
    margin: 4% 4% 0 4%;
    background-color: rgba(255, 255, 255, 0.8);
    border: 3px solid black;
    border-radius: 20px;
    cursor: pointer;

    h3,
    p {
      text-align: center;
    }
  }
`;

const AnimalList = ({ Gold, setId, toggle, handleToggle }) => {
  return (
    <AnimalListDiv>
      <ListDiv>
        {list.map((animal) => (
          <div className="item" onClick={() => handleToggle(animal.id)}>
            <h3>{animal.img}</h3>
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
