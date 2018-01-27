import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../ModalUI';
import Checkbox from '../UI/Checkbox';
import arrow from '../ModalUI/arrowDown.svg';

const Wrap = styled.div`
  background: #ffffff;
  padding-top: 31px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    display: block;
    border-bottom: 1px solid rgba(72, 72, 72, 0.3);
    background-clip: padding-box;
  }
`;

const More = styled.span`
  font-family: CircularAir;
  display: inline-block;
  line-height: 19px;
  font-size: 16px;
  color: #0f7276;
  margin-top: 3px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

const Img = styled.img`
  width: 11.37px;
  height: 6.31px;
  margin-left: 8.63px;
  margin-top: 13px;
`;

const Title = SectionTitle.extend`
  line-height: 23px;
  font-size: 20px;
`;

const CheckboxBlock = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: -8px;
  }
`;

class Facilities extends Component {
  state = {
    elevator: this.props.filter.elevator,
    pool: this.props.filter.pool,
    parking: this.props.filter.parking,
    wheelchair: this.props.filter.wheelchair,
  };

  handleFilterChange = (field, value) => {
    this.setState(
      () => ({ [field]: value }),
      () => {
        this.props.onFilterChange('facilities', this.state);
      },
    );
  };
  render() {
    return (
      <Wrap>
        <Title>Facilities</Title>
        <CheckboxBlock>
          <div className="col-md-5">
            <Checkbox
              id="elevator"
              checked={this.state.elevator}
              name="Elevator"
              onFilterChange={this.handleFilterChange}
            />
            <Checkbox
              id="pool"
              checked={this.state.pool}
              name="Pool"
              onFilterChange={this.handleFilterChange}
            />
          </div>

          <div className="col-md-7">
            <Checkbox
              id="parking"
              checked={this.state.parking}
              name="Free parking on premises"
              onFilterChange={this.handleFilterChange}
            />
            <Checkbox
              id="wheelchair"
              checked={this.state.wheelchair}
              name="Wheelchair accessible"
              onFilterChange={this.handleFilterChange}
            />
          </div>
        </CheckboxBlock>
        <div>
          <More>See all{window.matchMedia('(min-width: 768px)').matches && ' facilities'}</More>
          <Img src={arrow} alt="" />
        </div>
      </Wrap>
    );
  }
}
export default Facilities;
