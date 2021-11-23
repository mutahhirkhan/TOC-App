import React from "react";
import "./TestModal.css";
import Header from "./../Header/Header";
import ModalContainer from "../ModalContainer/ModalContainer";

const TestModal = () => {
  return (
    <ModalContainer>
      <div className="test-modal center">
        <Header>TEST MODAL</Header>
      </div>
    </ModalContainer>
  );
};

export default TestModal;
