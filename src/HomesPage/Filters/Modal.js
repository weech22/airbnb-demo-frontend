import React, { Component } from "react";
import styled from "styled-components";
import Header from "../ModalUI/Header";
import RoomType from "./RoomType";
import RoomsBeds from "./RoomsBeds";
import Footer from "../ModalUI/Footer";
import styles from "../../UI/styles.css";
import BottomPanel from "../ModalUI/BottomPanel";
import { ModalWrap as Wrap } from "../ModalUI/UI";

class Modal extends React.Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-container">
          <div className="content">
            <Wrap>
              <Header
                text="All filters (0)"
                action="Clear All"
                onAction={this.props.onReset}
                onClose={this.props.onCancel}
              />
              <RoomType
                onCheck={this.props.onCheck}
                home={this.props.home}
                privateRoom={this.props.privateRoom}
                sharedRoom={this.props.sharedRoom}
              />
              <RoomsBeds
                bedrooms={this.props.bedrooms}
                beds={this.props.beds}
                bathrooms={this.props.bathrooms}
                onPlus={this.props.onPlus}
                onMinus={this.props.onMinus}
              />

              <BottomPanel
                onCancel={this.props.onCancel}
                onApply={this.props.onSave}
              />
              <Footer onClick={this.props.onSave} text="See homes" />
            </Wrap>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
