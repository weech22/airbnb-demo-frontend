import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import BottomPanel from './BottomPanel';
import FiltersBottomPanel from './FiltersBottomPanel';
import ModalWindow from './ModalWindow';
import FiltersModalWindow from './FiltersModalWindow';

export { Header, Footer, BottomPanel, FiltersBottomPanel, FiltersModalWindow, ModalWindow };

export const SectionTitle = styled.h2`
  font-family: CircularAir;
  display: inline-block;
  line-height: 21px;
  font-weight: normal;
  font-size: 18px;
  color: #383838;
  margin: 0;
  margin-bottom: 24px;
`;

export const FilterButton = styled.button`
  font-family: CircularAir, Helvetica Neue, Helvetica, Arial, sans-serif;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  background: ${props => (props.active ? '#008489' : 'white')};
  color: ${props => (props.active ? 'white' : '#383838')};
  cursor: pointer;
  @media only screen and (min-width: 320px) {
    padding: 7px 16px;
    margin: 12px 0;
    margin-right: 12px;
    line-height: normal;
    font-size: 14px;
  }
`;

export const FilterButtonBlock = styled.div`
  display: inline-block;
`;

export const WhiteBackground = styled.div`
  background: rgba(255, 255, 255, 0.8);
  position: fixed;
  z-index: 1014;
  top: 130px;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

export const DesktopModal = styled.div`
  position: absolute;
  background: white;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  padding: 1px;
  z-index: 1014;
  top: 52px;
`;

export const FiltersModalWindowBlock = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  overflow: auto;
  @media only screen and (min-width: 768px) {
    top: 139px;
    right: auto;
    bottom: auto;
    width: 100vw;
    height: calc(100vh - 139px);
  }
`;

export const ModalWindowBlock = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  overflow: auto;
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1002;
`;

export const ModalWrap = styled.div`
  position: relative;
  background-color: #ffffff;
`;
