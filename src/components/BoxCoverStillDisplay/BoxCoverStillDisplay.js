import React, {Component} from 'react';
import PropTypes from 'prop-types';

import boxCoverGif from '../../images/boxcover.gif';

import PlayButton from "../PlayButton/PlayButton";
import SceneImageHoverPlayer from "../SceneImageHoverPlayer/SceneImageHoverPlayer";

import {MainDashboardController} from "../../pages/MainDashBoard/MainDashboardController";

import './BoxCoverStillDisplay.scss';
import { Link } from '@reach/router';

class BoxCoverStillDisplay extends Component {

  boxCoverRef = React.createRef();

  state = {
    sceneHeight: undefined
  };

  stillRef = React.createRef();

  subscriptions = {};

  timeoutId;

  constructor(props) {
    super(props);
    this.subscriptions.resizeBroadcaster = MainDashboardController.resizeBroadcaster.subscribe(this.updateStillSize);
  }

  componentDidMount() {
    setTimeout(this.updateStillSize);
  }

  componentWillUnmount() {
    for (const key in this.subscriptions) {
      this.subscriptions[key].unsubscribe();
    }
  }

  renderImageOverlay = () => {
    let view = null;
    const {showImageOverlay} = this.props;
    if (showImageOverlay) {
      view = (
        <div className="BoxCoverStillDisplayImageOverlay"/>
      );
    }

    return view;
  };

  renderSceneStill = () => {
    const {sceneNavigationRoute, renderStillOverlayFn, showImageHoverPlayer, stillUrl} = this.props;
    const {sceneHeight} = this.state;
    const style = {
      backgroundImage: `url(${stillUrl})`,
      height: sceneHeight
    };
    const ConditionalLink = sceneNavigationRoute ? Link : "div";
    return (
      <ConditionalLink className="Still" style={style}
           ref={this.stillRef} to={sceneNavigationRoute}>
        {showImageHoverPlayer ? this.renderSceneStillHoverPlayer() : this.renderSceneStillImage()}
        {renderStillOverlayFn ? renderStillOverlayFn() : null}
      </ConditionalLink>
    );
  };

  renderSceneStillHoverPlayer = () => {
    const {endTimeSeconds, onHoverPlayChange, stillUrl, movieId, sceneId, startTimeSeconds} = this.props;
    const {sceneHeight} = this.state;
    return (
      <SceneImageHoverPlayer heroStillUrl={stillUrl}
                             movieId={movieId}
                             sceneId={sceneId}
                             onHoverPlayChange={onHoverPlayChange}
                             videoHeight={sceneHeight}
                             startTimeSeconds={startTimeSeconds}
                             endTimeSeconds={endTimeSeconds}/>
    );
  };

  renderSceneStillImage = () => {
    const {hidePlay} = this.props;
    return !hidePlay ? <PlayButton/> : null;
  };

  updateStillSize = () => {
    const {current: stillRef} = this.stillRef;
    if (stillRef) {
      const {current} = this.boxCoverRef;
      const {height} = current.getBoundingClientRect();
      if (height) {
        this.setState({sceneHeight: height});
        stillRef.style.height = `${height}`;
        const {showImageHoverPlayer} = this.props;
        if (showImageHoverPlayer) {
          const sceneImage = stillRef.getElementsByClassName('SceneImageHoverPlayer')[0];
          if (sceneImage) {
            sceneImage.style.height = `${height}px`;
            const sceneImageContainer = sceneImage.getElementsByClassName('SceneImageContainer')[0];
            sceneImageContainer.style.height = `${height}px`;
          }
        }
      }
    }
  };

  render() {
    const {boxCoverUrl, movieNavigationRoute} = this.props;
    const boxCoverStyle = {
      backgroundImage: `url(${boxCoverUrl})`
    };
    const ConditionalLink = movieNavigationRoute ? Link : "div";
    return (
      <div className="BoxCoverStillDisplay">
        <ConditionalLink className="BoxCover" style={boxCoverStyle}
            ref={this.boxCoverRef} to={movieNavigationRoute}>
          <img src={boxCoverGif} alt="BoxCoverGif"/>
        </ConditionalLink>
        {this.renderSceneStill()}
        {this.renderImageOverlay()}
      </div>
    );
  }
}

BoxCoverStillDisplay.propTypes = {
  boxCoverUrl: PropTypes.string,
  endTimeSeconds: PropTypes.number,
  hidePlay: PropTypes.bool,
  movieId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  sceneNavigationRoute: PropTypes.string,
  movieNavigationRoute: PropTypes.string,
  onHoverPlayChange: PropTypes.func,
  renderStillOverlayFn: PropTypes.func,
  showImageOverlay: PropTypes.bool,
  showImageHoverPlayer: PropTypes.bool,
  startTimeSeconds: PropTypes.number,
  stillUrl: PropTypes.string
};

export default BoxCoverStillDisplay;
