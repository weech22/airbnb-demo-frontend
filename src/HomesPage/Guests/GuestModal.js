import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

const Wrap = styled.div`
  max-width: 576px;
  width: 100%;
`;

class GuestModal extends Component {
  render() {
    return (
      <div className="container">
        <Wrap>
          <Header />
          <Section />
          <Footer />
        </Wrap>
      </div>
    );
  }
}

export default GuestModal;

/*
   
        

        */
