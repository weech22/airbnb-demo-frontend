import React, { Component } from "react";
import styled from "styled-components";
import RoomType from "./RoomType";
import RoomsBeds from "./RoomsBeds";
import styles from "../../UI/styles.css";
import { Header, Footer, BottomPanel } from "../ModalUI";

class Modal extends React.Component {
  render() {
    return (
      <div>
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
          onFilterInc={this.props.onFilterInc}
          onFilterDec={this.props.onFilterDec}
        />

        <BottomPanel
          onCancel={this.props.onCancel}
          onApply={this.props.onSave}
        />
        <Footer onClick={this.props.onSave}>See homes</Footer>
      </div>
    );
  }
}
export default Modal;
