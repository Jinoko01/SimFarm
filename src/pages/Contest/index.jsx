import React from "react";
import "../../style/GlobalCSS.scss";
import styled from "styled-components";

const ContestDiv = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "image/contest.png"});
`;

const Contest = () => {
  return <ContestDiv className="wrapping"></ContestDiv>;
};

export default Contest;
