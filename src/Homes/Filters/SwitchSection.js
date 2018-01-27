import React from 'react';
import styled from 'styled-components';
import SwitchButton from '../UI/SwitchButton';

const Wrap = styled.div`
  padding-bottom: 1px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  @media only screen and (min-width: 992px) {
    display: ${props => (props.id === 'Instant book' ? 'none' : 'flex')};
  }
  max-width: 392px;
`;

const Title = styled.h4`
  font-family: CircularAir;
  line-height: 19px;
  font-weight: lighter;
  font-size: 16px;
  color: #383838;
  margin-bottom: 4px;
  margin-top: 0px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 3px;
    line-height: 21px;
    font-size: 18px;
  }
`;

const Description = styled.p`
  font-family: CircularAir;
  line-height: 16px;
  font-weight: lighter;
  font-size: 14px;
  color: #383838;
  margin-bottom: 4px;
  margin-top: 0px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 3px;
    line-height: 19px;
    font-size: 16px;
  }
`;

const More = styled.p`
  cursor: pointer;
  font-weight: lighter;
  font-family: CircularAir;
  line-height: 16px;
  font-size: 14px;
  color: #0f7276;
  margin-top: 0px;

  @media only screen and (min-width: 768px) {
    line-height: 19px;
    font-size: 16px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  @media only screen and (min-width: 768px) {
    margin-top: 18px;
  }
`;

const SwitchSection = props => (
  <Wrap id={props.children} className={props.className}>
    <div>
      <Title>{props.children}</Title>
      <Description>{props.description}</Description>
      <More>Learn more</More>
    </div>
    <ButtonContainer>
      <SwitchButton id={props.id} checked={props.checked} onFilterChange={props.onFilterChange} />
    </ButtonContainer>
  </Wrap>
);

export default SwitchSection;
