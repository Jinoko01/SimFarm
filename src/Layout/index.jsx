import React from "react";
import Header from "./Header";
import Navi from "./Navi";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import styled from "styled-components";

const MainDiv = styled.div`
  background-color: #f2f5d4;
`;

const Layout = () => {
  return (
    <div>
      <Header />
      <Navi />
      <MainDiv>
        <Outlet />
      </MainDiv>
      <Footer />
    </div>
  );
};

export default Layout;
