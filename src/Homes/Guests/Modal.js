import React from "react";
import { Header, Footer, BottomPanel } from "../ModalUI";
import Section from "./Section";

class Modal extends React.Component {
  render() {
    return (
      <div>
        <Header
          onClose={this.props.onCancel}
          onAction={this.props.onReset}
          text="Guests"
          action="Reset"
        />
        <Section
          adults={this.props.adults}
          children={this.props.children}
          infants={this.props.infants}
          onGuestInc={this.props.onGuestInc}
          onGuestDec={this.props.onGuestDec}
        />
        <BottomPanel
          onCancel={this.props.onCancel}
          onApply={this.props.onSave}
        />
        <Footer onClick={this.props.onSave}>Save</Footer>
      </div>
    );
  }
}
export default Modal;
