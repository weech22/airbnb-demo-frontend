import React, { Component } from "react";
import styles from "../../UI/styles.css";
import { Header, Footer, BottomPanel } from "../ModalUI";

class Modal extends React.Component {
  render() {
    return (
      <BottomPanel onCancel={this.props.onCancel} onApply={this.props.onSave} />
    );
  }
}
export default Modal;
