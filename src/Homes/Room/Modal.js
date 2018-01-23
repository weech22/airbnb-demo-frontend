import React from 'react';
import { BottomPanel } from '../ModalUI';

const Modal = props => (
  <div>
    <BottomPanel onCancel={props.onCancel} onApply={props.onSave} />
  </div>
);
export default Modal;
