import styled from "styled-components";

const CategoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 80%;
  border: 5px solid rgba(0, 0, 0, 0.7);
  align-items: center;

  button {
    width: 80%;
    margin-top: 10%;
    &:nth-child(1) {
      margin-top: 25%;
    }
    padding: 4% 0;
    cursor: pointer;
    background: none;
    border: 3px solid rgba(0, 0, 0, 0.7);
    border-radius: 15px;

    h2 {
      margin: 0;
      font-size: 28px;
    }

    &:hover {
      background-color: rgba(217, 217, 217, 0.7);
    }
  }
`;

const Category = ({ handleCategory }) => {
  return (
    <CategoryDiv>
      <button onClick={() => handleCategory("dessert")}>
        <h2>간식</h2>
      </button>
      <button onClick={() => handleCategory("accessory")}>
        <h2>치장</h2>
      </button>
      <button onClick={() => handleCategory("sales")}>
        <h2>판매</h2>
      </button>
    </CategoryDiv>
  );
};

export default Category;
