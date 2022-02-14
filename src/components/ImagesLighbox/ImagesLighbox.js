import React, {Component} from 'react';
import Lightbox from "react-image-lightbox";
import PropTypes from 'prop-types';

class ImagesLightBox extends Component {

  state = {
    photoIndex: 0
  };

  constructor(props) {
    super(props);
    this.state.photoIndex = this.props.currentIndex;
  }

  getCurrentImageSrc = () => {
    const {photoIndex} = this.state;
    return this.props.images[photoIndex];
  };

  getNextImageSrc = () => {
    const {photoIndex} = this.state;
    const images = this.props.images;
    return images[(photoIndex + 1) % images.length];
  };

  getPreviousImageSrc = () => {
    const {photoIndex} = this.state;
    const images = this.props.images;
    const index = (photoIndex + images.length - 1) % images.length;
    return images[index];
  };

  onMoveNextRequest = () => {
    const {photoIndex} = this.state;
    const images = this.props.images;
    this.setState({
      photoIndex: (photoIndex + 1) % images.length,
    });
  };

  onMovePrevRequest = () => {
    const {photoIndex} = this.state;
    const images = this.props.images;
    this.setState({
      photoIndex: (photoIndex + images.length - 1) % images.length,
    });
  };

  render() {
    return (
      <Lightbox
        mainSrc={this.getCurrentImageSrc()}
        nextSrc={this.getNextImageSrc()}
        prevSrc={this.getPreviousImageSrc()}
        onCloseRequest={this.props.onClose}
        onMovePrevRequest={this.onMovePrevRequest}
        onMoveNextRequest={this.onMoveNextRequest}
      />
    );
  }
}

ImagesLightBox.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ImagesLightBox;
