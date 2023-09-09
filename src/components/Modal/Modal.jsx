import React, { Component } from 'react';
import { Overlay, ModalContainer } from './Modal.styled';

class Modal extends Component {
  render() {
    return (
      <Overlay>
        <ModalContainer>
          <img src="" alt="" />
        </ModalContainer>
      </Overlay>
    );
  }
}
export default Modal;
