import { useState } from "react";
import styled from "styled-components";

const ListDiv = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.7);
  width: 70%;
  height: 80%;
`;

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
];

const StoreList = ({ Gold, category }) => {
  return (
    <ListDiv>
      <div>
        {list.map((ele) => {
          if (category === ele.category) {
            return (
              <div>
                <h2>{ele.img}</h2>
                <p>{ele.name}</p>
              </div>
            );
          }
        })}
      </div>
      <div>
        <h2>POINT:{Gold}</h2>
        <button>
          <h3>구매</h3>
        </button>
      </div>
    </ListDiv>
  );
};

export default StoreList;
