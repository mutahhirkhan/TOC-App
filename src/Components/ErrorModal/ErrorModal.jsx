import React from "react";
import "./ErrorModal.css";
import Header from "./../Header/Header";
import ModalContainer from "../ModalContainer/ModalContainer";

const ErrorModal = ({error}) => {
  return (
    <ModalContainer>
      <div className="error-modal center">
        <Header>{error}</Header>
      </div>
    </ModalContainer>
  );
};

export default ErrorModal;
