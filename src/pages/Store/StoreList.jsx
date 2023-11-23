import styled from "styled-components";

const list = [
  {
    id: 1,
    category: "dessert",
    img: "간식",
    name: "이름",
  },
  {
    id: 2,
    category: "accessory",
    img: "치장",
    name: "이름",
  },
  {
    id: 3,
    category: "dessert",
    img: "간식",
    name: "이름",
  },
  {
    id: 4,
    category: "accessory",
    img: "치장",
    name: "이름",
  },
  {
    id: 5,
    category: "dessert",
    img: "간식",
    name: "이름",
  },
  {
    id: 6,
    category: "accessory",
    img: "치장",
    name: "이름",
  },
  {
    id: 7,
    category: "dessert",
    img: "간식",
    name: "이름",
  },
  {
    id: 8,
    category: "accessory",
    img: "치장",
    name: "이름",
  },
  {
    id: 9,
    category: "dessert",
    img: "간식",
    name: "이름",
  },
  {
    id: 10,
    category: "accessory",
    img: "치장",
    name: "이름",
  },
  {
    id: 11,
    category: "dessert",
    img: "간식",
    name: "이름",
  },
  {
    id: 12,
    category: "accessory",
    img: "치장",
    name: "이름",
  },
  {
    id: 13,
    category: "dessert",
    img: "간식",
    name: "이름",
  },
  {
    id: 14,
    category: "accessory",
    img: "치장",
    name: "이름",
  },
  {
    id: 15,
    category: "accessory",
    img: "치장",
    name: "이름",
  },
  {
    id: 16,
    category: "accessory",
    img: "치장",
    name: "이름",
  },
  {
    id: 17,
    category: "accessory",
    img: "치장",
    name: "이름",
  },
  {
    id: 18,
    category: "accessory",
    img: "치장",
    name: "이름",
  },
];

const ListDiv = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.7);
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;

  .element {
    border-bottom: 3px solid black;
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 90%;
    height: 70%;
    margin-top: 5%;
    gap: 5%;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    > div {
      width: 15%;
      height: 43%;

      &:not(:nth-child(1)):not(:nth-child(2)):not(:nth-child(3)):not(
          :nth-child(4)
        ):not(:nth-child(5)) {
        margin-top: 2%;
      }
    }
  }

  .buy {
    display: flex;
    height: 20%;
    justify-content: space-between;
    align-items: center;

    h2 {
      margin: 0;
    }

    button {
      margin-right: 5%;
      padding: 2% 4% 2% 4%;
      background-color: rgba(255, 255, 255, 0.8);
      border: 3px solid rgba(0, 0, 0, 0.7);
      border-radius: 15px;
      cursor: pointer;

      &:hover {
        background-color: rgba(217, 217, 217, 0.5);
      }

      h3 {
        margin: 0;
      }
    }

    .point {
      font-size: 32px;
      margin-left: 5%;
    }
  }
`;

const ListObject = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 3px solid black;
  border-radius: 20px;
  cursor: pointer;

  h2 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-bottom: 10%;
    text-align: center;
  }

  &:hover {
    background-color: rgba(217, 217, 217, 0.5);
  }
`;

const Point = styled.div`
  margin: 0;
  margin-top: 8%;
  text-align: center;
  font-weight: 800;
`;

const StoreList = ({ Gold, category }) => {
  return (
    <ListDiv>
      <div className="element">
        {list.map((ele, i) => {
          if (category === ele.category) {
            return (
              <div key={i}>
                <ListObject>
                  <h2>{ele.img}</h2>
                  <p>{ele.name}</p>
                </ListObject>
                <Point>5p</Point>
              </div>
            );
          }
        })}
      </div>
      <div className="buy">
        <h2 className="point">POINT:{Gold}</h2>
        <button>
          <h3>{category !== "sales" ? "구매" : "판매"}</h3>
        </button>
      </div>
    </ListDiv>
  );
};

export default StoreList;
