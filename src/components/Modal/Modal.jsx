import React, { Component } from 'react';
import { Overlay, ModalContainer } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  render() {
    return createPortal(
      <Overlay>
        <ModalContainer>
          <img src="" alt="" />
        </ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}
export default Modal;
