import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetch } from '../services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

class App extends Component {
  state = {
    arr: [],
    query: '',
    isLoading: false,
    currentPage: 1,
  };
  // async componentDidMount() {
  //   console.log(this.state.query);
  //   const data = await fetch(this.state.query);
  //   console.log(data);
  // }
  async componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ isLoading: true, currentPage: 1 });
      const data = await fetch(this.state.query, 1);
      this.setState({ arr: data.data.hits, isLoading: false });
      return;
    }
    if (prevState.currentPage !== this.state.currentPage) {
      console.log(this.state.currentPage);
      const data = await fetch(this.state.query, this.state.currentPage);
      this.setState(prev => ({ arr: [...prev.arr, ...data.data.hits] }));
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.lastChild.value);
    this.setState({ query: e.target.lastChild.value });
  };
  handleClick = () => {
    this.setState(prev => ({
      currentPage: prev.currentPage + 1,
    }));
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.isLoading && <Loader />}
        <ImageGallery data={this.state.arr} />
        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}
export default App;
