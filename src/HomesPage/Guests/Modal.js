import React, { Component } from "react";
import Header from "../ModalUI/Header";
import styles from "../../UI/styles.css";
import BottomPanel from "../ModalUI/BottomPanel";
import Footer from "../ModalUI/Footer";
import { ModalWrap as Wrap } from "../ModalUI/UI";
import Section from "./Section";

class Modal extends React.Component {
  render() {
    return (
      <div className="modal">
        <div className="container">
          <div className="modal-container">
            <div className="content">
              <Wrap>
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
                  onPlus={this.props.onPlus}
                  onMinus={this.props.onMinus}
                />
                <BottomPanel
                  onCancel={this.props.onCancel}
                  onApply={this.props.onSave}
                />
                <Footer onClick={this.props.onSave} text="Save" />
              </Wrap>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
