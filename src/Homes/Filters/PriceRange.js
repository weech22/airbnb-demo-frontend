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
    margin-bottom: 9px;
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
    margin-bottom: 29px;
  }
`;

class PriceRange extends Component {
  state = {
    min: this.props.min,
    max: this.props.max,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ min: nextProps.min, max: nextProps.max });
  }

  updateValue = (sliderState) => {
    this.setState({});
    this.setState(
      () => ({ min: sliderState.values[0], max: sliderState.values[1] }),
      () => {
        this.props.onFilterChange('min', this.state.min);
        this.props.onFilterChange('max', this.state.max);
      },
    );
  };

  render() {
    return (
      <Wrap className={this.props.className}>
        <SectionTitle>Price range</SectionTitle>
        <Range>
          ${this.state.min} — ${this.state.max}+
        </Range>
        <Average>The average nightly price is $75.</Average>
        <SliderBlock>
          <Histogramm />
          <Rheostat
            min={10}
            max={1000}
            values={[this.state.min, this.state.max]}
            onValuesUpdated={this.updateValue}
          />
        </SliderBlock>
      </Wrap>
    );
  }
}

export default PriceRange;
