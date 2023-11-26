import React from "react";
import Header from "./Header";
import Navi from "./Navi";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import styled from "styled-components";

const NaviDiv = styled.div`
  min-width: 960px;
`;

const MainDiv = styled.div`
  background-color: #f2f5d4;
`;

const Layout = () => {
  return (
    <NaviDiv>
      <Header />
      <Navi />
      <MainDiv>
        <Outlet />
      </MainDiv>
      <Footer />
    </NaviDiv>
  );
};

export default Layout;
