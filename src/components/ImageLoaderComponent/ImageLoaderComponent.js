import React, {Component} from 'react';
import ImageLoader from 'react-load-image';
import {withTranslation} from "react-i18next";
import PropTypes from 'prop-types';

import DefaultImageLoader from "../DefaultImageLoader/DefaultImageLoader";

import './ImageLoaderComponent.scss'
import { Link } from '@reach/router';

class ImageLoaderComponent extends Component {

  state = {
    frontImage: true
  };

  renderBackImage = () => {
    const {backImageUrl, onClick, onLoad} = this.props;
    return this.renderSmallLoader(undefined, onClick, backImageUrl, onLoad);
  };

  renderFirstImage = () => {
    const {onClick, onLoad, secondaryUrl, url} = this.props;
    return secondaryUrl ? this.renderLargeLoader() : this.renderSmallLoader(undefined, onClick, url, onLoad);
  };

  renderLargeLoader = () => {
    const {onClick, onLoad, secondaryUrl, url, t} = this.props;
    return (
      <ImageLoader src={url}>
        <img onClick={onClick}
             onLoad={onLoad}
             alt={url}/>
        <div className="ImageComponent-notFound">{t('ImageLoaderComponent.notFound')}</div>
        {this.renderSmallLoader(undefined, undefined, secondaryUrl, onLoad)}
      </ImageLoader>
    );
  };

  renderSecondImage = () => {
    const {backImageUrl} = this.props;
    return backImageUrl ? this.renderBackImage() : null;
  };

  renderSmallLoader = (className, onClick, url, onLoad) => {
    const props = {
      className: className || undefined,
      onClick: onClick || undefined,
      onLoad,
      url
    };
    return (
      <DefaultImageLoader {...props}/>
    );
  };

  toggleImage = () => {
    this.setState(prevState => {
      const {frontImage} = prevState;
      return {
        frontImage: !frontImage
      };
    });
  };

  setImage = (isFrontActive) => {
    this.setState({frontImage: isFrontActive})
  }

  render() {
    const {backImageUrl, movieUrl, className, style} = this.props;
    const ConditionalLink = movieUrl ? Link : "div";
    const classes = ['ImageComponent', className];
    const {frontImage} = this.state;
    if (frontImage) {
      classes.push('FrontImageView');
    }
    const props = {};
    if (backImageUrl) {
      classes.push('FlipEnabled');
      Object.assign(props, {
        onMouseEnter: this.setImage.bind(this, false),
        onMouseLeave: this.setImage.bind(this, true)
      });
    }
    return (
      <ConditionalLink to={movieUrl} className={classes.join(' ')} style={style} {...props}>
        {this.renderFirstImage()}
        {this.renderSecondImage()}
      </ConditionalLink>
    );
  }
}

ImageLoaderComponent.propTypes = {
  backImageUrl: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onLoad: PropTypes.func,
  secondaryUrl: PropTypes.string,
  style: PropTypes.object,
  url: PropTypes.string,
  movieUrl: PropTypes.string
};

export default withTranslation()(ImageLoaderComponent);
