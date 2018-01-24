import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../ModalUI';
import arrow from '../ModalUI/arrowDown.svg';

const Wrap = styled.div`
  background: #ffffff;
  padding-top: 31px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;

const More = styled.span`
  font-family: CircularAir;
  display: inline-block;
  line-height: 19px;
  font-size: 16px;
  color: #0f7276;
  margin-top: 3px;
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

const Amenities = () => (
  <Wrap>
    <Title>Facilities</Title>
    <div>
      <More>See all</More>
      <Img src={arrow} alt="" />
    </div>
  </Wrap>
);

export default Amenities;
