import React, { Component } from "react";
import Header from "../ModalUI/Header";
import styles from "../../UI/styles.css";
import BottomPanel from "../ModalUI/BottomPanel";
import Footer from "../ModalUI/Footer";

class Modal extends React.Component {
  render() {
    return (
      <BottomPanel onCancel={this.props.onCancel} onApply={this.props.onSave} />
    );
  }
}
export default Modal;
