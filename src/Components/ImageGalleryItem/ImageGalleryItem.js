import React from 'react';
import styles from './ImageGalleryItem.module.scss';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <li key={id} className={styles['ImageGalleryItem']}>
          <img
            src={webformatURL}
            alt={largeImageURL}
            className={styles['ImageGalleryItem-image']}
          />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ImageGalleryItem;
