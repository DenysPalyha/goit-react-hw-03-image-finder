import React from 'react';
import styles from './Button.module.scss';
import PropTepes from 'prop-types';

const Button = ({ onFetchImages }) => {
  return (
    <button type="button" onClick={onFetchImages} className={styles['Button']}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onFetchImages: PropTepes.func.isRequired,
};

export default Button;
