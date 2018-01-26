import React from 'react';
import styled from 'styled-components';
import SwitchButton from '../ModalUI/SwitchButton';

const Wrap = styled.div`
  padding-bottom: 1px;
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 992px) {
    display: ${props => (props.id === 'Instant book' ? 'none' : 'flex')};
  }
`;

const Title = styled.h4`
  font-family: CircularAir;
  line-height: 19px;
  font-weight: lighter;
  font-size: 16px;
  color: #383838;
  margin-bottom: 4px;
  margin-top: 0px;
  @media only screen and (min-width: 992px) {
    line-height: 21px;
    font-weight: normal;
    font-size: 18px;
    margin-left: 15px;
    margin-bottom: 6px;
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
  @media only screen and (min-width: 992px) {
    max-width: 200px;
    margin-left: 14px;
    margin-bottom: 16px;
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
  margin-bottom: 31px;
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  @media only screen and (min-width: 992px) {
    margin-top: 15px;
    margin-right: 16px;
    margin-left: 30px;
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
