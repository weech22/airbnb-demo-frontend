import React from 'react';
import styled from 'styled-components';
import SwitchButton from '../UI/SwitchButton';

const Wrap = styled.div`
  padding-bottom: 1px;
  display: flex;
  justify-content: space-between;
  padding-top: 23px;
  padding-left: 15px;
  padding-right: 16px;
  margin-bottom: 16px;
`;

const Title = styled.h4`
  font-family: CircularAir;
  color: #383838;
  font-weight: normal;
  margin-top: 0px;
  margin-bottom: 6px;
  line-height: 21px;
  font-size: 18px;
`;

const Description = styled.p`
  font-family: CircularAir;
  font-weight: lighter;
  color: #383838;
  margin-top: 0px;
  margin-bottom: 3px;
  line-height: 16px;
  font-size: 14px;
  max-width: 200px;
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  margin-left: 28px;
`;

const SwitchSection = props => (
  <Wrap id={props.children} className={props.className}>
    <div>
      <Title>{props.children}</Title>
      <Description>{props.description}</Description>
    </div>
    <ButtonContainer>
      <SwitchButton id={props.id} checked={props.checked} onFilterChange={props.onFilterChange} />
    </ButtonContainer>
  </Wrap>
);

export default SwitchSection;
