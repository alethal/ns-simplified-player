import React, {Component} from 'react';
import {Link} from "@reach/router";
import PropTypes from 'prop-types';

import BoxCoverStillDisplay from "../BoxCoverStillDisplay/BoxCoverStillDisplay.js";

import {getStarDetailsRoute} from "../../services/navigation/navigation.service.routes";

import './MovieBoxCoverStillDisplay.scss';
import ExpandingCalculatedText from "../ExpandingCalculatedText/ExpandingCalculatedText";

class MovieBoxCoverStillDisplay extends Component {

  renderBoxCoverStill = () => {
    const {
      boxCoverUrl,
      endTimeSeconds,
      heroStillUrl,
      hidePlay,
      movieId,
      sceneId,
      onHoverPlayChange,
      sceneNavigationRoute,
      movieNavigationRoute,
      renderStillOverlayFn,
      showImageOverlay,
      showImageHoverPlayer,
      startTimeSeconds
    } = this.props;

    return (
      <div className="BoxCoverWrapper">
        <BoxCoverStillDisplay boxCoverUrl={boxCoverUrl}
                              sceneNavigationRoute={sceneNavigationRoute}
                              movieNavigationRoute={movieNavigationRoute}
                              endTimeSeconds={endTimeSeconds}
                              hidePlay={hidePlay}
                              movieId={movieId}
                              sceneId={sceneId}
                              onHoverPlayChange={onHoverPlayChange}
                              renderStillOverlayFn={renderStillOverlayFn}
                              stillUrl={heroStillUrl}
                              showImageOverlay={showImageOverlay}
                              showImageHoverPlayer={showImageHoverPlayer}
                              startTimeSeconds={startTimeSeconds}
                              key={`MovieBoxCoverStillDisplay-boxCover-${movieId}`}/>
        {this.renderDuration()}
      </div>
    )
  };

  renderDuration = () => {
    const {duration} = this.props;
    return duration ? (
      <div className="Duration" key={`MovieBoxCoverStillDisplay-duration`}>
        {duration}
      </div>
    ) : null;
  };

  renderInfos = () => {
    const {sceneNavigationRoute, stars, title} = this.props;
    let titleView;
    if (sceneNavigationRoute) {
      titleView = (
        <Link className="Title"
              to={sceneNavigationRoute}>
          {title}
        </Link>
      );
    } else {
      titleView = (
        <div className="Title">
          {title}
        </div>
      );
    }
    return (
      <div className="MovieBoxCoverStillDisplayInfos">
        {titleView}
        {stars.length ? this.renderStars() : null}
      </div>
    );
  };

  getStarRoute = (id, name) => getStarDetailsRoute(id, name);

  renderStars = () => {
    const {stars} = this.props;
    return (
      <ExpandingCalculatedText blockExpand={true}
                               items={stars}
                               className="MovieBoxCoverStillDisplay-stars"
                               getRouteFn={this.getStarRoute}/>
    );
  };

  starsReducer = (result, star, index, array) => {
    const item = [star];
    if (index !== array.length - 1) {
      item.push((
        <div className="CommaSeparator" key={index}>, </div>
      ));
    }
    result.push(...item);
    return result;
  };

  render() {
    const {className, hideInfos, onClick} = this.props;
    const classes = ['MovieBoxCoverStillDisplay'];
    if (className) {
      classes.push(className);
    }
    return (
      <div className={classes.join(' ')}
           onClick={onClick}>
        {this.renderBoxCoverStill()}
        {!hideInfos ? this.renderInfos() : null}
      </div>
    );
  }
}

MovieBoxCoverStillDisplay.propTypes = {
  boxCoverUrl: PropTypes.string,
  className: PropTypes.string,
  duration: PropTypes.string,
  endTimeSeconds: PropTypes.number,
  heroStillUrl: PropTypes.string,
  hideInfos: PropTypes.bool,
  hidePlay: PropTypes.bool,
  movieId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onClick: PropTypes.func,
  onHoverPlayChange: PropTypes.func,
  sceneNavigationRoute: PropTypes.string,
  movieNavigationRoute: PropTypes.string,
  renderStillOverlayFn: PropTypes.func,
  showImageOverlay: PropTypes.bool,
  showImageHoverPlayer: PropTypes.bool,
  startTimeSeconds: PropTypes.number,
  stars: PropTypes.array,
  title: PropTypes.string
};

export default MovieBoxCoverStillDisplay;
