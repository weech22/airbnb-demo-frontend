import React, { Component } from "react";
import language from "./language.png";
import money from "./money.png";
import styled from "styled-components";

const DropdownImg = styled.img`
  margin-bottom: 16px;
  width: 100%;
`;

const FooterCol = styled.div`
  margin-top: 48px;
`;

class Dropdown extends Component {
  render() {
    return (
      <div className="col-lg-3">
        <FooterCol>
          <DropdownImg src={language} />
          <DropdownImg src={money} />
        </FooterCol>
      </div>
    );
  }
}

export default Dropdown;
