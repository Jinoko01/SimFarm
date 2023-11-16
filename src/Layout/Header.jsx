import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderDiv = styled.div`
  background-color: #a7cf5d;
  height: 8vh;
  min-height: 50px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <NavLink to="/">
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
