import React, { Component } from "react";
import Header from "../ModalUI/Header";
import styles from "../../UI/styles.css";
import BottomPanel from "../ModalUI/BottomPanel";
import Footer from "../ModalUI/Footer";
import { ModalWrap as Wrap } from "../ModalUI/UI";

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
