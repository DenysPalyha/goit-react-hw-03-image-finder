import React from 'react';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';

const Modal = ({ largeImageURL, onCloseModal }) => {
  return (
    <div onClick={onCloseModal} className={styles['Overlay']}>
      <div className={styles['Modal']}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
