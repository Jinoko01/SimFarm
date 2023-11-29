import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CareModal = ({ show, hide, object, Gold, setGold }) => {
  const handleCare = () => {
    if (Gold < 30) {
      return;
    }
    setGold((gold) => gold - 30);
    object.attract += 10;
    object.affect += 10;
    hide();
  };

  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header>
        <Modal.Title>돌보기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ textAlign: "center" }}>
          돌보시겠습니까? <br />
          필요 포인트: 30P
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn_close" onClick={handleCare}>
          돌보기
        </Button>
        <Button className="btn_close" variant="secondary" onClick={hide}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CareModal;
