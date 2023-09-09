import React, { Component } from 'react';
import { Overlay, ModalContainer } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    console.log(e.code);
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  onBackDropClick = e => {
    const target = e.target;
    const currentTarget = e.currentTarget;

    if (target === currentTarget) {
      this.props.toggleModal();
    }
  };
  render() {
    const { image } = this.props;

    return createPortal(
      <Overlay onClick={this.onBackDropClick}>
        <ModalContainer>
          <img src={image} alt="" />
        </ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}
export default Modal;
