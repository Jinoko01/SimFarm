import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyRoom from "./pages/MyRoom";
import Store from "./pages/Store";
import Game from "./pages/Game";
import Contest from "./pages/Contest";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/myroom" element={<MyRoom />} />
        <Route path="/store" element={<Store />} />
        <Route path="/game" element={<Game />} />
        <Route path="/contest" element={<Contest />} />
      </Route>
    </Routes>
  );
}

export default App;
