import React from 'react';
import './Modal.css'
const Modal = ({ isOpen, close }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={close}>&times;</span>
          <h2>Modal Title</h2>
          <p>Modal content goes here.</p>
        </div>
      </div>
    );
  };
  
  export default Modal;