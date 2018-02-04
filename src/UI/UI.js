import styled from "styled-components";

export const CardBlock = styled.a`
  text-decoration: none;
  padding: 0;
`;

export const Section = styled.div`
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
`;

export const SliderBlock = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Slider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  margin-left: -8px;
  margin-right: -8px;
`;

export const Title = styled.h2`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: bold;
  color: #383838;
  display: inline;

  @media only screen and (min-width: 320px) {
    line-height: 28px;
    font-size: 24px;
  }
  @media only screen and (min-width: 768px) {
    line-height: 34px;
    font-size: 32px;
  }
`;

export const Label = styled.span`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: normal;
  line-height: 14px;
  font-size: 12px;
  text-align: Left;

  color: #383838;
  margin-left: 4px;
  margin-top: 6px;
  margin-bottom: 0;
`;

export const Link = styled.a`
  font-weight: normal;
  line-height: 24px;
  font-size: 14px;
  text-align: center;
  color: #383838;
  display: inline;
  margin-right: 22px;
  text-decoration: none;
`;
