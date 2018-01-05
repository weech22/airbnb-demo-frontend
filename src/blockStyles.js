import styled from "styled-components";
import search from "./Header/search.png";

export const ExploreItemBlock = styled.div`
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;

  height: 72px;
  position: relative;
  overflow: hidden;
`;

export const ExploreItemImg = styled.img`
  width: 96px;
  height: 72px;
`;

export const ExpItemBlock = styled.div``;

export const ExpItemImg = styled.img`
  width: 100%;
`;

export const StarImg = styled.img`
  margin-right: 4px;
  margin-top: 7px;
  margin-bottom: 0;
`;

export const HomeItemBlock = styled.div``;

export const HomeItemImg = styled.img`
  width: 100%;
`;

export const ResItemBlock = styled.div``;

export const ResItemImg = styled.img`
  width: 100%;
`;

export const FeatureItemBlock = styled.div``;

export const FeatureItemImg = styled.img`
  width: 100%;
`;

export const HeaderInput = styled.input`
  position: absolute;
  width: 392px;
  height: 48px;
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  line-height: 24px;
  font-size: 16px;
  color: #383838;
  mix-blend-mode: normal;
  opacity: 0.64;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 16.2px center;
  padding-left: 53px;
  margin-top: 16px;
`;

export const HeaderBlock = styled.header`
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

export const HeaderLogo = styled.img`
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Nav = styled.div`
  position: relative;
  margin-top: 27px;
`;

export const SectionTitle = styled.div`
  position: relative;

  border: 1px solid red;
`;

export const FooterTop = styled.div`
  border: 1px solid blue;
`;

export const FooterBottom = styled.div`
  border: 1px solid green;
`;
