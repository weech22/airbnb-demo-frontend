import styled from "styled-components";

export const Title = styled.h3`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: bold;
  color: #383838;
  display: inline-block;
  @media only screen and (min-width: 320px) {
    line-height: 28px;
    font-size: 24px;
    margin-bottom: 16px;
    margin-top: 40px;
  }
  @media only screen and (min-width: 768px) {
    line-height: 34px;
    font-size: 32px;
    margin-top: 48px;
    margin-bottom: 24px;
  }
`;

export const Label = styled.p`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: normal;
  line-height: 14px;
  font-size: 12px;
  text-align: Left;
  display: inline;
  color: #383838;
  margin-left: 4px;
  margin-top: 6px;
  margin-bottom: 0;
`;

export const Link = styled.a`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: normal;
  line-height: 24px;
  font-size: 14px;
  text-align: center;
  color: #383838;
  display: inline;
  margin-right: 22px;
  text-decoration: none;
`;
