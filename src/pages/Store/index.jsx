import styled from "styled-components";
import "../../style/GlobalCSS.scss";
import Category from "./Category";
import StoreList from "./StoreList";
import { useCallback, useRef, useState } from "react";

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

const Store = ({ Gold, setGold }) => {
  // 상점 컴포넌트 고정
  const [category, setCategory] = useState("dessert");

  const handleCategory = useCallback((category) => {
    setCategory(category);
  }, []);
  // 상점 컴포넌트 고정

  // App으로 옮겨야 할 변수 및 함수
  const [inventory, setInventory] = useState([]);
  const nextId = useRef(1);

  const handlePurchase = useCallback(
    (ele) => {
      if (Gold < ele.gold) {
        alert("골드가 부족합니다.");
      } else {
        const nextObject = {
          ...ele,
          id: nextId.current,
        };
        setInventory((inventory) => inventory.concat(nextObject));
        nextId.current += 1;
        setGold((Gold) => Gold - ele.gold);
      }
      console.log(inventory);
    },
    [Gold]
  );

  const handleSales = useCallback((select) => {
    setInventory((inventory) =>
      inventory.filter((element) => element.id !== select.id)
    );
    console.log(inventory);
    setGold((Gold) => Gold + select.gold);
  }, []);
  // App으로 옮겨야 할 변수 및 함수

  return (
    <StoreDiv className="wrapping">
      <ComponentsDiv>
        <Category handleCategory={handleCategory} category={category} />
        <StoreList
          Gold={Gold}
          category={category}
          handlePurchase={handlePurchase}
          handleSales={handleSales}
          inventory={inventory}
        />
      </ComponentsDiv>
    </StoreDiv>
  );
};

export default Store;
