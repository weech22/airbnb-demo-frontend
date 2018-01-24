import React from 'react';
import styled from 'styled-components';
import SwitchButton from '../ModalUI/SwitchButton';

const Wrap = styled.div`
  padding-bottom: 1px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h4`
  font-family: CircularAir;
  line-height: 19px;
  font-weight: lighter;
  font-size: 16px;
  color: #383838;
  margin-bottom: 4px;
  margin-top: 0px;
`;

const Description = styled.p`
  font-family: CircularAir;
  line-height: 16px;
  font-weight: lighter;
  font-size: 14px;
  color: #383838;
  margin-bottom: 4px;
  margin-top: 0px;
`;

const More = styled.p`
  cursor: pointer;
  font-weight: lighter;
  font-family: CircularAir;
  line-height: 16px;
  font-size: 14px;
  color: #0f7276;
  margin-top: 0px;
  margin-bottom: 31px;
`;

const SwitchSection = props => (
  <Wrap>
    <div>
      <Title>{props.children}</Title>
      <Description>{props.description}</Description>
      <More>Learn more</More>
    </div>
    <div>
      <SwitchButton />
    </div>
  </Wrap>
);

export default SwitchSection;
