import { useState, useRef, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyRoom from "./pages/MyRoom";
import Store from "./pages/Store";
import Game from "./pages/Game";
import Contest from "./pages/Contest";
import Layout from "./Layout";

function App() {
  const [Gold, setGold] = useState(1000);
  const increaseValue = (increment) => {
    setGold(Gold + increment);
  };

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

  const [list, setList] = useState([
    { id: 1, img: "가", name: "이름" },
    { id: 2, img: "나", name: "이름" },
    { id: 3, img: "다", name: "이름" },
    { id: 4, img: "라", name: "이름" },
    { id: 5, img: "마", name: "이름" }
  ]);

  // test 함수, 필요할지 모르겠음
  // 항목 추가
  const addItem = (item) => {
    setList([...list, item]);
  };

  // 항목 삭제
  const removeItem = (itemId) => {
    setList(list.filter(item => item.id !== itemId));
  };

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
              addItem={addItem} // tmi용, 필요없으면 삭제
              removeItem={removeItem} // MyRoom/index.jsx props도 삭제
              />} />
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
        <Route path="/contest" element={<Contest list={list}/>} />
      </Route>
    </Routes>
  );
}

export default App;
