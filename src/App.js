import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyRoom from "./pages/MyRoom";
import Store from "./pages/Store";
import Game from "./pages/Game";
import Contest from "./pages/Contest";
import Layout from "./Layout";

function App() {
  const [Gold, setGold] = useState(0);
  const increaseValue = (increment) => {
    setGold(Gold + increment);
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/myroom" element={<MyRoom Gold={Gold} />} />
        <Route path="/store" element={<Store Gold={Gold} />} />
        <Route path="/game" element={<Game onIncrease={increaseValue} />} />
        <Route path="/contest" element={<Contest />} />
      </Route>
    </Routes>
  );
}

export default App;
