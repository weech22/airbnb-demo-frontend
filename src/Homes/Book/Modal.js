import React from "react";
import { BottomPanel } from "../ModalUI";

class Modal extends React.Component {
  render() {
    return (
      <BottomPanel onCancel={this.props.onCancel} onApply={this.props.onSave} />
    );
  }
}
export default Modal;
