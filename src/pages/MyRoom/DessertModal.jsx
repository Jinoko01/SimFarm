import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const DessertDiv = styled.div`
  display: flex;
  gap: 5%;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;

  div {
    width: 20%;
    text-align: center;
    cursor: pointer;
    border: 5px solid black;
    border-radius: 20px;
    margin-top: 5%;

    &:hover {
      background-color: rgba(217, 217, 217, 0.8);
    }

    &.active {
      background-color: rgba(217, 217, 217, 0.8);
    }
  }
`;

const DessertModal = ({ show, hide, object, inventory, setInventory }) => {
  const [click, setClick] = useState(null);

  const handleFeed = () => {
    if (click === null) {
      return;
    }
    object.affect += click.grow;
    object.attract += click.attract;
    setInventory((inventory) =>
      inventory.filter((element) => element.id !== click.id)
    );
    setClick(null);
    hide();
  };

  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header>
        <Modal.Title>먹이 주기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DessertDiv>
          {inventory.map((ele) =>
            ele.category === "dessert" ? (
              <div
                className={click === ele ? "active" : ""}
                onClick={() => setClick(ele)}
              >
                <img
                  style={{ width: "50%", margin: "20%" }}
                  src={process.env.PUBLIC_URL + ele.img}
                  alt={ele.name}
                />
              </div>
            ) : null
          )}
        </DessertDiv>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn_close" onClick={handleFeed}>
          주기
        </Button>
        <Button className="btn_close" variant="secondary" onClick={hide}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DessertModal;
