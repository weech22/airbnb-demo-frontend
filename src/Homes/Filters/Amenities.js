import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../ModalUI';
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
`;

const More = styled.span`
  font-family: CircularAir;
  display: inline-block;
  line-height: 16px;
  font-size: 14px;
  color: #0f7276;
  margin-top: 4px;
`;

const Img = styled.img`
  width: 11.37px;
  height: 6.31px;
  margin-left: 8.63px;
  margin-top: 10px;
`;

const Amenities = () => (
  <Wrap>
    <SectionTitle>Amenities</SectionTitle>
    <div>
      <More>See all</More>
      <Img src={arrow} alt="" />
    </div>
  </Wrap>
);

export default Amenities;