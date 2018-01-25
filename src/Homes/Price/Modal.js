import React from 'react';
import styled from 'styled-components';
import { BottomPanel } from '../ModalUI';
import PriceRange from '../Filters/PriceRange';

const DesktopPriceRange = styled(PriceRange)`
  @media only screen and (min-width: 992px) {
    display: block;
    border: none;
    padding-top: 23px;
    width: 296px;
    padding-left: 14px;
    padding-right: 12px;
    padding-bottom: 0px;
  }
`;

const Modal = props => (
  <div>
    <DesktopPriceRange />
    <BottomPanel onCancel={props.onCancel} onApply={props.onSave} />
  </div>
);
export default Modal;
