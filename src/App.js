import { useState, useRef, useCallback, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyRoom from "./pages/MyRoom";
import Store from "./pages/Store";
import Game from "./pages/Game";
import Contest from "./pages/Contest";
import Layout from "./Layout";
import SelectPage from "./pages/Contest/SelectPage";
import ResultPage from "./pages/Contest/ResultPage";

function App() {
  const sessionSearch = JSON.parse(sessionStorage.getItem("hasChosen"));
  // sessionStorage에서 hasChosen 값을 읽어와서 초기 상태를 설정
  const [hasChosen, setHasChosen] = useState(sessionSearch === true);
  const navigation = useNavigate();
  //====================== 게임 전용 변수 및 함수==========================
  const [Gold, setGold] = useState(30);
  const [myPets, setMyPets] = useState([]); // 내가 갖고있는 동물
  const increaseValue = (increment) => {
    setGold(Gold + increment);
  };
  //====================== 게임 전용 변수 및 함수==========================

  //====================== 마이룸 전용 변수 및 함수==========================

  const [petlist] = useState([
    {
      id: 1,
      img: function () {
        return this.attract < 80
          ? "/image/beetle/1.png"
          : this.attract < 100
          ? "/image/beetle/2.png"
          : "/image/beetle/3.png";
      },
      name: "빗흘",
      sort: "비틀",
      height: 0.25,
      weight: 0.1,
      age: 1,
      gold: 5,
      category: "pet",
      feature: "고약한 악취",
      attract: 50,
      affect: 0,
      accessory: "",
      eng: "beetle",
    },
    {
      id: 2,
      img: function () {
        return this.attract < 80
          ? "/image/bird/1.png"
          : this.attract < 100
          ? "/image/bird/2.png"
          : "/image/bird/3.png";
      },
      name: "쇄",
      sort: "새",
      height: 20,
      weight: 7,
      age: 1,
      gold: 5,
      category: "pet",
      feature: "하늘을 나는 동물",
      attract: 50,
      affect: 0,
      accessory: "",
      eng: "bird",
    },
    {
      id: 3,
      img: function () {
        return this.attract < 80
          ? "/image/snake/1.png"
          : this.attract < 100
          ? "/image/snake/2.png"
          : "/image/snake/3.png";
      },
      name: "빼앰",
      sort: "뱀",
      height: 5,
      weight: 3,
      age: 1,
      gold: 5,
      category: "pet",
      feature: "미끌거림",
      attract: 50,
      affect: 0,
      accessory: "",
      eng: "snake",
    },
    {
      id: 4,
      img: function () {
        return this.attract < 90 ? "/image/frog/1.png" : "/image/frog/2.png";
      },
      name: "개굴이",
      sort: "개구리",
      height: 3,
      weight: 1,
      age: 1,
      gold: 125,
      category: "pet",
      feature: "개구리 알 생성",
      attract: 60,
      affect: 0,
      accessory: "",
      eng: "frog",
    },
    {
      id: 5,
      img: function () {
        return this.attract < 90 ? "/image/bat/1.png" : "/image/bat/2.png";
      },
      name: "Park쥐",
      sort: "박쥐",
      height: 7,
      weight: 3,
      age: 1,
      gold: 90,
      category: "pet",
      feature: "구아노 생성",
      attract: 50,
      affect: 0,
      accessory: "",
      eng: "bat",
    },
    {
      id: 6,
      img: function () {
        return "/image/goat.png";
      },
      name: "Goat",
      sort: "염소",
      height: 70,
      weight: 20,
      age: 1,
      gold: 75,
      category: "pet",
      feature: "염소 털 생성",
      attract: 70,
      affect: 0,
      accessory: "",
      eng: "deer",
    },
    {
      id: 7,
      img: function () {
        return "/image/snail.png";
      },
      name: "핑핑이",
      sort: "달팽이",
      height: 5,
      weight: 1,
      age: 1,
      gold: 35,
      category: "pet",
      feature: "달팽이 크림 생성",
      attract: 50,
      affect: 0,
      accessory: "",
      eng: "snail",
    },
    {
      id: 8,
      img: function () {
        return "/image/bee.png";
      },
      name: "B",
      sort: "꿀벌",
      height: 1,
      weight: 0.4,
      age: 1,
      gold: 55,
      category: "pet",
      feature: "꿀 생성",
      attract: 50,
      affect: 0,
      accessory: "",
      eng: "bee",
    },
  ]);

  // 동물 리스트 다음 ID
  const nextAnimalId = useRef(1);
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
        setMyPets((prevMyPets) => [...prevMyPets, ele.name]);
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

  //====================== 콘테스트 전용 변수 및 함수==========================
  // 전체 펫 목록 중 내가 갖고 있는 펫만
  const ownedPetsList = petlist.filter((pet) => myPets.includes(pet.name));
  //====================== 콘테스트 전용 변수 및 함수==========================

  useEffect(() => {
    // hasChosen 상태가 변경될 때 localStorage 값을 업데이트
    sessionStorage.setItem("hasChose", JSON.stringify(hasChosen));
    if (!hasChosen) {
      navigation("/Simfarm");
    }
  }, [hasChosen, navigation]);

  return (
    <Routes>
      <Route element={<Layout />}>
        {hasChosen ? (
          <Route path="/" element={<Navigate to="/Simfarm/myroom" />} />
        ) : (
          <Route path="/" element={<Navigate to="/Simfarm" />} />
        )}
        <Route
          path="/Simfarm"
          element={
            <MainPage
              hasChosen={hasChosen}
              setHasChosen={setHasChosen}
              setMyPets={setMyPets}
              nextAnimalId={nextAnimalId}
            />
          }
        />
        <Route
          path="/Simfarm/myroom"
          element={
            <MyRoom
              hasChosen={hasChosen}
              Gold={Gold}
              setGold={setGold}
              petlist={ownedPetsList}
              inventory={inventory}
              setInventory={setInventory}
            />
          }
        />
        <Route
          path="/Simfarm/store"
          element={
            <Store
              Gold={Gold}
              petlist={petlist}
              myPets={myPets}
              handlePurchase={handlePurchase}
              handleSales={handleSales}
              inventory={inventory}
              select={select}
              setSelect={setSelect}
              handleSelect={handleSelect}
            />
          }
        />
        <Route
          path="/Simfarm/game"
          element={<Game onIncrease={increaseValue} />}
        />
        <Route path="/Simfarm/contest" element={<Contest />} />
        <Route
          path="/Simfarm/contest/select"
          element={
            <SelectPage
              petlist={ownedPetsList}
              select={select}
              setSelect={setSelect}
            />
          }
        />
        <Route path="/Simfarm/contest/result" element={<ResultPage />} />
      </Route>
    </Routes>
  );
}

export default App;
