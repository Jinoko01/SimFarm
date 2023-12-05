import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const AccessoryDiv = styled.div`
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

const AccessoryModal = ({ show, hide, object, inventory, setInventory }) => {
  const [click, setClick] = useState(null);

  const handlePutting = () => {
    if (click === null) {
      return;
    }
    if (object.accessory) {
      object.attract -= object.accessory.attract;
      setInventory((inventory) => inventory.concat(object.accessory));
    }
    object.accessory = click;
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
        <Modal.Title>치장 장착</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AccessoryDiv>
          {inventory.map((ele) =>
            ele.category === "accessory" ? (
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
        </AccessoryDiv>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn_close" onClick={handlePutting}>
          장착
        </Button>
        <Button className="btn_close" variant="secondary" onClick={hide}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AccessoryModal;
