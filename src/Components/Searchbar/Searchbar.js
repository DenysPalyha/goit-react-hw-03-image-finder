import React, { Component } from 'react';
import styles from './Searchbar.module.scss';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleOnChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className={styles['Searchbar']}>
        <form onSubmit={this.handleSubmit} className={styles['SearchForm']}>
          <button type="submit" className={styles['SearchForm-button']}>
            <span className={styles['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={styles['SearchForm-input']}
            type="text"
            value={this.state.inputValue}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleOnChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
