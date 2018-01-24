import React from 'react';
import styled from 'styled-components';
import { SectionTitle, Checkbox } from '../ModalUI';
import arrow from '../ModalUI/arrowDown.svg';

const Wrap = styled.div`
  background: #ffffff;
  padding-top: 32px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  background-clip: padding-box;
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
  }
`;

const Amenities = () => (
  <Wrap>
    <SectionTitle>Amenities</SectionTitle>
    <CheckboxBlock>
      <div className="col-md-5">
        <Checkbox id="heating" name="Heating" />
        <Checkbox id="tv" name="TV" />
      </div>

      <div className="col-md-7">
        <Checkbox id="kitchen" name="Kitchen" />
        <Checkbox id="wifi" name="Wireless Internet" />
      </div>
    </CheckboxBlock>
    <div>
      <More>See all{window.matchMedia('(min-width: 768px)').matches && ' amenities'}</More>
      <Img src={arrow} alt="" />
    </div>
  </Wrap>
);

export default Amenities;
