import React from 'react';
import styled from 'styled-components';
import { BottomPanel } from '../ModalUI';
import SwitchSection from '../Filters/SwitchSection';

const DesktopSwitchSection = styled(SwitchSection)`
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`;

const Wrap = styled.div`
  padding-top: 23px;
`;

const Modal = props => (
  <Wrap>
    <DesktopSwitchSection description="Listings you can book without waiting for host approval.">
      Instant Book
    </DesktopSwitchSection>
    <BottomPanel onCancel={props.onCancel} onApply={props.onSave} />
  </Wrap>
);
export default Modal;
