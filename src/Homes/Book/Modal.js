import React from 'react';
import { BottomPanel } from '../ModalUI';

const Modal = props => <BottomPanel onCancel={props.onCancel} onApply={props.onSave} />;
export default Modal;
