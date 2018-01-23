import React from 'react';
import { Header, Footer, BottomPanel } from '../ModalUI';
import Section from './Section';

const Modal = props => (
  <div>
    <Header onClose={props.onCancel} onAction={props.onReset} text="Guests" action="Reset" />
    <Section
      adults={props.adults}
      kids={props.kids}
      infants={props.infants}
      onGuestInc={props.onGuestInc}
      onGuestDec={props.onGuestDec}
    />
    <BottomPanel onCancel={props.onCancel} onApply={props.onSave} />
    <Footer onClick={props.onSave}>Save</Footer>
  </div>
);
export default Modal;
