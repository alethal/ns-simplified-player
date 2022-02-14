import React, {Component} from 'react';
import PropTypes from 'prop-types';

import sceneCoverGif from "../../images/scenecover.gif";

import './SceneImage.scss';

class SceneImage extends Component {

  state = {
    loading: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = null;
    if (nextProps.url !== prevState.url) {
      state = {
        loading: true,
        url: nextProps.url
      };
    }

    return state;
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
    };
  }

  clearLoading = (image) => {
    const {
      width: naturalWidth
    } = image;
    this.setState({
      loading: false,
      aspectWidth: naturalWidth > 480
    });
  };

  loadImage = () => {
    const {url} = this.state;
    const image = new Image();
    image.onload = this.clearLoading.bind(this, image);
    image.src = url;
  };

  renderImage = () => {
    const {aspectWidth, url} = this.state;
    const style = {
      backgroundImage: `url(${url})`,
      backgroundSize: aspectWidth ? 'auto 100%' : '100% auto'
    };

    return (
      <div className="SceneImage" style={style}>
        <img src={sceneCoverGif} alt="BoxCoverGif"/>
      </div>
    );
  };

  renderImageLoader = () => {
    return (
      <div className="SceneImageLoader">
        <img src={sceneCoverGif} alt="BoxCoverGif"/>
      </div>
    );
  };

  render() {
    let view;
    const {loading} = this.state;
    if (loading) {
      this.loadImage();
      view = this.renderImageLoader();
    } else {
      view = this.renderImage();
    }

    return view;
  }
}

SceneImage.propTypes = {
  url: PropTypes.string.isRequired
};

export default SceneImage;

