import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Modal UI/Header";
import Section from "./Section";
import Footer from "../Modal UI/Footer";

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

class GuestModal extends Component {
  render() {
    return (
      <Wrap>
        <Header />
        <Section />
        <Footer />
      </Wrap>
    );
  }
}

export default GuestModal;
