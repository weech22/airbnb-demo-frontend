import React from "react";
import { BottomPanel } from "../ModalUI";

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
