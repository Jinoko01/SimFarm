import styled from "styled-components";
import "../../style/GlobalCSS.scss";

const StoreDiv = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/image/store.png"});
`;

const Store = ( {Gold } ) => {
  return <StoreDiv className="wrapping">
    <div>현재 골드 : {Gold}</div>
  </StoreDiv>;
};

export default Store;
