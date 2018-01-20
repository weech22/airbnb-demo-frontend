import React, { Component } from "react";
import Header from "../ModalUI/Header";
import styles from "../../UI/styles.css";
import BottomPanel from "../ModalUI/BottomPanel";
import Footer from "../ModalUI/Footer";
import { ModalWrap as Wrap } from "../ModalUI/UI";

class Modal extends React.Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-container">
          <div className="content">
            <Wrap>
              <BottomPanel
                onCancel={this.props.onCancel}
                onApply={this.props.onSave}
              />
            </Wrap>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
