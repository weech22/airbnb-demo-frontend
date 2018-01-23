import React from 'react';
import styled from 'styled-components';
import { CardBlock, Img } from '../../UI/UI';

const Type = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: Bold;
  text-transform: uppercase;
  color: #383838;
  margin-top: 7px;
  margin-bottom: 0;
  line-height: 9px;
  font-size: 8px;
  @media only screen and (min-width: 768px) {
    margin-top: 12px;
    line-height: 12px;
    font-size: 10px;
  }
`;

const Name = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: Bold;
  margin-top: 2px;
  margin-bottom: 0;
  color: #383838;
  @media only screen and (min-width: 320px) {
    line-height: 16px;
    font-size: 14px;
  }
  @media only screen and (min-width: 768px) {
    line-height: 21px;
    font-size: 18px;
  }
`;

const Price = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: lighter;
  color: #383838;
  margin-top: 4px;
  margin-bottom: 0;
  opacity: 0.9;
  @media only screen and (min-width: 320px) {
    line-height: 14px;
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    line-height: 21px;
    font-size: 18px;
  }
`;

const Card = props => (
  <CardBlock href="#">
    <Img src={props.img} />
    <div>
      <Type>{props.type}</Type>
    </div>
    <div>
      <Name>{props.name} </Name>
    </div>
    <div>
      <Price>About ${props.price} per person</Price>
    </div>
  </CardBlock>
);

export default Card;
