import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-family: CircularAir;
  line-height: 21px;
  font-weight: normal;
  font-size: 18px;
  color: #383838;
  margin: 0;
  margin-left: 8px;
  margin-bottom: 24px;
`;

export const FilterButton = styled.button`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  background: ${props => (props.active ? "#008489" : "white")};
  color: ${props => (props.active ? "white" : "#383838")};
  cursor: pointer;
  @media only screen and (min-width: 320px) {
    padding: 7px 16px;
    margin: 12px 0;
    margin-right: 12px;
    line-height: normal;
    font-size: 14px;
  }
`;

export const ModalWrap = styled.div`
  position: relative;
  background-color: #ffffff;
`;
