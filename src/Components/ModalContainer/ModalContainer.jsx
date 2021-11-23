import React from "react";
import ModalManager from "../ModalManager/ModalManager";
import "./ModalContainer.css";
import { connect } from "react-redux";
import { closeModal } from "./../../Redux/modal/modalActions";

const ModalContainer = ({ children, closeModal }) => {
  return (
    <div
    onClick={(e) => {
        if (e.target === e.currentTarget){
            closeModal();
            console.log('closing')
        } 
        else{
            console.log('not closign')
        }
            
    }}
        className="modal-container center"
    >
      {/* <ModalManager/> */}   
      {children}
    </div>
  );
};

var actions = {
  closeModal,
};

export default connect(null, actions)(ModalContainer);
