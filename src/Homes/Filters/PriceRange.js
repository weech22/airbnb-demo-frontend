import React, { Component } from 'react';
import Rheostat from 'rheostat';
import styled from 'styled-components';
import { SectionTitle } from '../ModalUI';
import './slider.css';
import Histogramm from './Histogramm';

const Wrap = styled.div`
  background: #ffffff;
  margin-top: 0px;
  padding-top: 32px;
  padding-left: 8px;
  padding-right: 8px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

const Range = styled.div`
  font-family: CircularAir;
  line-height: 19px;
  font-weight: lighter;
  font-size: 16px;
  color: #383838;
  margin-bottom: 7px;
  @media only screen and (min-width: 767px) {
    font-size: 18px;
    line-height: 21px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

const Average = styled.div`
  font-family: CircularAir;
  line-height: 14px;
  font-weight: lighter;
  font-size: 12px;
  color: #383838;
  @media only screen and (min-width: 767px) {
    font-size: 14px;
    line-height: 16px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

const SliderBlock = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  margin-left: 16px;
  margin-right: 16px;
  @media only screen and (min-width: 767px) {
    margin-top: 24px;
    margin-left: 40px;
    margin-right: 40px;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 32px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

class PriceRange extends Component {
  state = {
    min: 1,
    max: 100,
  };

  render() {
    return (
      <Wrap className={this.props.className}>
        <SectionTitle>Price range</SectionTitle>
        <Range>$10 — $1000+</Range>
        <Average>The average nightly price is $75.</Average>
        <SliderBlock>
          <Histogramm />
          <Rheostat min={this.state.min} max={this.state.max} values={[1, 100]} />
        </SliderBlock>
      </Wrap>
    );
  }
}

export default PriceRange;
