import styled from "styled-components";
import "../../style/GlobalCSS.scss";

const StoreDiv = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/image/store.png"});
`;

const Store = () => {
  return <StoreDiv className="wrapping"></StoreDiv>;
};

export default Store;
