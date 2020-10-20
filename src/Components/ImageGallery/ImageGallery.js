import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.scss';
import Modal from '../Modal/Modal';

class ImageGallery extends Component {
  state = {
    showModal: false,
    largeImageURL: null,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  setLargeImages = e => {
    if (e.currentTarget !== e.target) {
      const url = e.target.alt;
      this.setState({ showModal: true, largeImageURL: url });
    }
  };

  closeModal = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      this.setState({ showModal: false });
    }
  };

  render() {
    const { showModal, largeImageURL } = this.state;
    const { images } = this.props;
    return (
      <>
        <ul className={styles['ImageGallery']} onClick={this.setLargeImages}>
          <ImageGalleryItem images={images} />
        </ul>
        {showModal && (
          <Modal largeImageURL={largeImageURL} onCloseModal={this.closeModal} />
        )}
      </>
    );
  }
}

export default ImageGallery;
