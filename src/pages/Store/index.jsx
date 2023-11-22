import styled from "styled-components";
import "../../style/GlobalCSS.scss";
import Category from "./Category";
import StoreList from "./StoreList";
import { useState } from "react";

const StoreDiv = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/image/store.png"});
  display: flex;
  align-items: center;
`;

const ComponentsDiv = styled.div`
  width: 90%;
  height: 80%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.4);
  border: 10px solid rgba(0, 0, 0, 0.7);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Store = ({ Gold }) => {
  const [category, setCategory] = useState("dessert");

  const handleCategory = (category) => {
    setCategory(category);
  };

  return (
    <StoreDiv className="wrapping">
      <ComponentsDiv>
        <Category handleCategory={handleCategory} />
        <StoreList Gold={Gold} category={category} />
      </ComponentsDiv>
    </StoreDiv>
  );
};

export default Store;
