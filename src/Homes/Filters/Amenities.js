import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../ModalUI';
import Checkbox from '../UI/Checkbox';
import arrow from '../ModalUI/arrowDown.svg';

const Wrap = styled.div`
  background: #ffffff;
  padding-top: 32px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  margin-bottom: 1px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

const More = styled.p`
  font-family: CircularAir;
  display: inline-block;
  line-height: 16px;
  font-size: 14px;
  color: #0f7276;
  margin: 0;
  margin-top: 4px;
  margin-bottom: 25px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

const Img = styled.img`
  width: 11.37px;
  height: 6.31px;
  margin-left: 8.63px;
  margin-top: 10px;
`;

const CheckboxBlock = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: -8px;
    max-width: 800px;
  }
`;

class Amenities extends Component {
  state = {
    heating: this.props.filter.heating,
    kitchen: this.props.filter.kitchen,
    tv: this.props.filter.tv,
    wifi: this.props.filter.wifi,
  };

  handleFilterChange = (field, value) => {
    this.setState(
      () => ({ [field]: value }),
      () => {
        this.props.onFilterChange('amenities', this.state);
      },
    );
  };

  render() {
    return (
      <Wrap>
        <SectionTitle>Amenities</SectionTitle>
        <CheckboxBlock>
          <div className="col-md-5">
            <Checkbox
              id="heating"
              checked={this.state.heating}
              name="Heating"
              onFilterChange={this.handleFilterChange}
            />
            <Checkbox
              id="tv"
              checked={this.state.tv}
              name="TV"
              onFilterChange={this.handleFilterChange}
            />
          </div>

          <div className="col-md-7">
            <Checkbox
              id="kitchen"
              checked={this.state.kitchen}
              name="Kitchen"
              onFilterChange={this.handleFilterChange}
            />
            <Checkbox
              id="wifi"
              checked={this.state.wifi}
              name="Wireless Internet"
              onFilterChange={this.handleFilterChange}
            />
          </div>
        </CheckboxBlock>
        <div>
          <More>See all{window.matchMedia('(min-width: 768px)').matches && ' amenities'}</More>
          <Img src={arrow} alt="" />
        </div>
      </Wrap>
    );
  }
}

export default Amenities;
