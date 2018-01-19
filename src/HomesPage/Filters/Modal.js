import React, { Component } from "react";
import styled from "styled-components";
import Header from "../ModalUI/Header";
import RoomType from "./RoomType";
import RoomsBeds from "./RoomsBeds";
import Footer from "../ModalUI/Footer";

const Wrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 48px);
  background: white;
  z-index: 100;
`;

class FilterModal extends Component {
  render() {
    return <div />;
  }
}

export default FilterModal;
