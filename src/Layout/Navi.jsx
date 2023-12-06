import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const NaviDiv = styled.div`
  background-color: #c4da00;
  height: 6vh;
  min-height: 38px;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Categories = styled(NavLink)`
  color: #f9ebc4;
  text-decoration: none;
  cursor: pointer;
  white-space: pre;
  font-size: 1.125rem;
  margin-top: 0.5%;

  &:hover {
    font-weight: 900;
  }

  & + & {
    margin-left: 20vw;
  }

  &.active {
    font-weight: 900;
  }
`;

const places = [
  {
    name: "myroom",
    text: "마이룸",
  },
  {
    name: "store",
    text: "상점",
  },
  {
    name: "game",
    text: "게임",
  },
  {
    name: "contest",
    text: "대회",
  },
];

const Navi = () => {
  const [disabled, setDisabled] = useState(false);

  const location = useLocation();
  const [curLocation, setCurLocation] = useState(location);

  useEffect(() => {
    if (curLocation.pathname === "/contest/result") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setCurLocation(location);
  }, [curLocation, location]);

  const handleDisabled = (e) => {
    if (disabled === true) {
      e.preventDefault();
    }
  };

  return (
    <NaviDiv>
      <NavBar>
        {places.map((place) => {
          return (
            <Categories
              key={place.name}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to={`/${place.name}`}
              onClick={handleDisabled}
            >
              {place.text}
            </Categories>
          );
        })}
      </NavBar>
    </NaviDiv>
  );
};

export default Navi;
