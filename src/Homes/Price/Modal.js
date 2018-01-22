import React, { Component } from "react";
import styles from "../../UI/styles.css";
import { Header, Footer, BottomPanel, ModalWrap as Wrap } from "../ModalUI";

class Modal extends React.Component {
  render() {
    return (
      <div>
        <BottomPanel
          onCancel={this.props.onCancel}
          onApply={this.props.onSave}
        />
      </div>
    );
  }
}
export default Modal;
