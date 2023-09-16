import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEsc);
  }
  handleEsc = e => {
    if (e.code === 'Escape') this.props.toggle();
  };
  render() {
    return (
      <div className="Overlay" onClick={this.props.toggle}>
        <div className="Modal">
          <img src={this.props.image} alt="largeImage" />
        </div>
      </div>
    );
  }
}
export default Modal;
