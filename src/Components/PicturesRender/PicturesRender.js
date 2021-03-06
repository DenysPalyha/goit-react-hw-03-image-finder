import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import imagesApi from '../../servicec/imageApi';
import LoaderImages from '../../Components/loader/Loader';
import Button from '../../Components/Button/Button';
import ButtonApp from '../ButtonApp/ButtonApp.js';
import styles from '../PicturesRender/PicturesRender.module.scss';

class PicturesRender extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: '',
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });

    // window.scrollTo({
    //   top: window.innerHeight,
    //   behavior: 'smooth',
    // });

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

    imagesApi
      .fetchImagesWithQuery(searchQuery, page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  hendleSerchFormSubmite = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  hendleButtonApp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, error, loading } = this.state;
    return (
      <div className={styles.Pictures}>
        <Searchbar onSubmit={this.hendleSerchFormSubmite} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}

        {images.length > 1 && (
          <ImageGallery images={images} imageShowModal={this.imagesModal} />
        )}
        {loading && <LoaderImages />}
        {images.length > 1 && !loading && (
          <Button onFetchImages={this.fetchImages} />
        )}
        {window.scrollY > 2000 && (
          <ButtonApp hendleButtonApp={this.hendleButtonApp} />
        )}
      </div>
    );
  }
}

export default PicturesRender;
