import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getPhotos } from '../services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    arr: null,
    query: '',
    isLoading: false,
    currentPage: 1,
    error: '',
    loadMore: false,
    isModal: false,
    modalImg: null,
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ isLoading: true, currentPage: 1 });
      const data = await getPhotos(this.state.query, 1);
      this.setState({
        arr: data.data.hits,
        isLoading: false,
        loadMore: this.state.currentPage < Math.ceil(data.data.totalHits / 45),
      });
    }
    if (
      prevState.currentPage !== this.state.currentPage &&
      this.state.currentPage !== 1
    ) {
      const data = await getPhotos(this.state.query, this.state.currentPage);
      this.setState(prev => ({
        arr: [...prev.arr, ...data.data.hits],
        loadMore: this.state.currentPage < Math.ceil(data.data.totalHits / 12),
      }));
    }
  }

  // fetch = async () => {
  //   this.setState({ isLoading: true });
  //   try {
  //     const response = await getPhotos(
  //       this.state.query,
  //       this.state.currentPage
  //     );
  //     return response.data.hits;
  //   } catch ({ message }) {
  //     this.setState({ error: message });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // };

  onSubmit = query => {
    this.setState({ query });
  };
  handleClick = () => {
    this.setState(prev => ({ currentPage: prev.currentPage + 1 }));
  };
  toggleModal = bgImage => {
    this.setState(prev => ({ isModal: !prev.isModal, modalImg: bgImage }));
  };
  render() {
    const { isLoading, arr, loadMore, isModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && <Loader />}
        {arr && <ImageGallery photos={arr} showModal={this.toggleModal} />}
        {loadMore && <Button handleClick={this.handleClick} />}
        {isModal && (
          <Modal image={this.state.modalImg} toggle={this.toggleModal} />
        )}
      </div>
    );
  }
}
export default App;
