import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  background-color: #a7cf5d;
  height: 8vh;
  min-height: 50px;
  text-align: center;
`;

const Header = () => {
  const [disabled, setDisabled] = useState(false);

  const location = useLocation();
  const [curLocation, setCurLocation] = useState(location);

  useEffect(() => {
    if (curLocation.pathname === "/Simfarm/contest/result") {
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
    <HeaderDiv>
      <NavLink to="/Simfarm" onClick={handleDisabled}>
        <img
          src={`${process.env.PUBLIC_URL}/image/Logo.png`}
          alt="Logo"
          style={{ height: "8vh", minHeight: "50px" }}
        />
      </NavLink>
    </HeaderDiv>
  );
};

export default Header;
