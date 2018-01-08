import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  margin: 16px auto 15px auto;
  background: red;
  width: 100px;
  height: 20px;
`;

class Pagination extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
      </div>
    );
  }
}

export default Pagination;
