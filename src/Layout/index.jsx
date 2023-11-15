import React from "react";
import Header from "./Header";
import Navi from "./Navi";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "../style/GlobalCSS.scss";
import styled from "styled-components";

const MainDiv = styled.div`
  background-color: #f2f5d4;
  min-width: 800px;
  min-height: 480px;
`;

const Layout = () => {
  return (
    <div className="wrapping">
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
