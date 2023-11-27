import { useState, useRef, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyRoom from "./pages/MyRoom";
import Store from "./pages/Store";
import Game from "./pages/Game";
import Contest from "./pages/Contest";
import Layout from "./Layout";

function App() {
  //====================== 게임 전용 변수 및 함수==========================
  const [Gold, setGold] = useState(1000);
  const increaseValue = (increment) => {
    setGold(Gold + increment);
  };
  //====================== 게임 전용 변수 및 함수==========================

  //====================== 마이룸 전용 변수 및 함수==========================
  const [list, setList] = useState([
    { id: 1, img: "가", name: "이름" },
  ]);

  // 항목 추가
  const addItem = (item) => {
    setList([...list, item]);
  };

  // 항목 삭제
  const removeItem = (itemId) => {
    setList(list.filter((item) => item.id !== itemId));
  };
  //====================== 마이룸 전용 변수 및 함수==========================

  //====================== 상점 전용 변수 및 함수==========================
  const [inventory, setInventory] = useState([]);
  const [select, setSelect] = useState(null);
  const nextId = useRef(1);

  const handleSelect = useCallback((ele) => {
    setSelect(ele);
  }, []);

  const handlePurchase = useCallback(
    (ele) => {
      if (select === null) {
        return;
      }
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
      setSelect(null);
    },
    [Gold, inventory, select]
  );

  const handleSales = useCallback(
    (object) => {
      if (object === null) {
        return;
      }
      setInventory((inventory) =>
        inventory.filter((element) => element.id !== object.id)
      );
      console.log(inventory);
      setGold((Gold) => Gold + object.gold);
      setSelect(null);
    },
    [inventory]
  );
  //====================== 상점 전용 변수 및 함수==========================

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route
          path="/myroom"
          element={
            <MyRoom
              Gold={Gold}
              list={list}
              addItem={addItem}
              removeItem={removeItem}
            />
          }
        />
        <Route
          path="/store"
          element={
            <Store
              Gold={Gold}
              handlePurchase={handlePurchase}
              handleSales={handleSales}
              inventory={inventory}
              select={select}
              setSelect={setSelect}
              handleSelect={handleSelect}
            />
          }
        />
        <Route path="/game" element={<Game onIncrease={increaseValue} />} />
        <Route path="/contest" element={<Contest list={list} />} />
      </Route>
    </Routes>
  );
}

export default App;
