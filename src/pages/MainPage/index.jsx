import React from "react";
import { Navigate } from "react-router-dom";

const MainPage = () => {
  return <Navigate to="/myroom" replace={true} />;
};

export default MainPage;
