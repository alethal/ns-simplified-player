import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {logError} from "../../services/log/log.service";
import SceneImage from "../SceneImage/SceneImage";
import {getVideoStream} from "../../services/streaming-service/streaming.service";
import {isUserLoggedIn} from "../../services/token-service/token.service";

import {
  BaseVideoPlayerController,
  FullPlayer,
  VideoPlayController
} from '@falconstudios/ns-player';

import './SceneImageHoverPlayer.scss';

class SceneImageHoverPlayer extends Component {

  isUnmounted = false;

  mainRef = React.createRef();

  mouseStates = {
    loading: 2,
    left: 3,
    loadingFinished: 4
  };

  playerId;

  playerInitializationTime;

  state = {
    isHovered: this.mouseStates.left,
    sceneImageContainerHeight: undefined,
    streamUrl: undefined
  };

  subscriptions = {};

  constructor(props) {
    super(props);
    this.subscriptions.playerInitializedEvent = VideoPlayController.playerInitializedEvent.subscribe(this.onPlayerInitialized);
  }

  componentDidMount() {
    this.fetchStreamUrl();
  }

  componentWillUnmount() {
    this.isUnmounted = true;
    for (const key in this.subscriptions) {
      this.subscriptions[key].unsubscribe();
    }
  }

  fetchStreamUrl = () => {
    const { endTimeSeconds, movieId, sceneId, startTimeSeconds } = this.props;
    const duration = endTimeSeconds - startTimeSeconds;
    const maxBitrate = BaseVideoPlayerController.getMaxBitrate();
    getVideoStream(movieId, sceneId, startTimeSeconds, duration, undefined, maxBitrate, 'HLS', true)
      .then(this.setupStreamData)
      .catch(this.onRequestFailure);
  };

  notifyHoverPlayChange = (state) => {
    const { onHoverPlayChange } = this.props;
    if (onHoverPlayChange) {
      onHoverPlayChange(state);
    }
  };

  onFullPlayerInitialized = (playerInitializationTime) => {
    this.playerInitializationTime = playerInitializationTime;
  };

  onMouseEnter = () => {
    if (!this.isUnmounted) {
      this.setState(prevState => {
        const state = {
          isHovered: this.mouseStates.loading
        };
        const { current } = this.mainRef;
        if (current) {
          const { height } = current.getBoundingClientRect();
          const { videoHeight } = this.props;
          state.sceneImageContainerHeight = videoHeight || height;
        }
        this.notifyHoverPlayChange('start');
        return state;
      }, () => {
        if (this.playerId) {
          const playerData = VideoPlayController.getVideoPlayer(this.playerId);
          if (playerData) {
            const promise = playerData.player.play();
            if (promise.catch) {
              promise.catch(() => {
              });
            }
          }
        }
      });
    }
  };

  onPlayerInitialized = ({ playerId, initializationTime }) => {
    if (this.playerInitializationTime === initializationTime) {
      this.playerId = playerId;
    }
  };

  onRequestFailure = (error) => {
    logError(error);
  };

  renderInitialDisplay = () => {
    let view = null;
    const { isHovered } = this.state;
    if (isHovered !== this.mouseStates.loading) {
      const { heroStillUrl } = this.props;
      view = (
        <React.Fragment>
          <SceneImage url={heroStillUrl}/>
        </React.Fragment>
      );
    }

    return view;
  };

  renderMainView = () => {
    return (
      <div className="MainView">
        {this.renderInitialDisplay()}
        {this.renderPlayer()}
      </div>
    );
  };

  renderMouseEventOverlay = () => {
    return (
      <div className="MouseEventOverlay"
           onMouseEnter={this.onMouseEnter}
           onMouseLeave={this.setIsHovered.bind(this, this.mouseStates.left)}/>
    );
  };

  renderPlayer = () => {
    const { streamUrl } = this.state;
    let view = null;
    if (streamUrl) {
      const { endTimeSeconds, startTimeSeconds } = this.props;
      const duration = isUserLoggedIn() ? endTimeSeconds - startTimeSeconds : 3 * 60; // Duration is in seconds, so 3 minutes for not-logged user, full duration for logged user
      const data = {
        ads: [],
        autoplay: false,
        className: "Player",
        fetchVideoThumbnails: undefined,
        isPreview: true,
        isHoverPreview: true,
        renderPreview: undefined,
        mapVideoThumbnails: undefined,
        onAddClick: undefined,
        onPreviewClick: undefined,
        playerConfiguration: undefined,
        videos: [{
          id: undefined,
          sources: [
            {
              src: streamUrl,
              type: 'application/x-mpegURL'
            }
          ],
          duration: duration,
          thumbnail: [
            {
              src: undefined
            }
          ],
          poster: undefined,
          name: ''
        }]
      };
      view = (
        <FullPlayer data={data}
                    onFullPlayerInitialized={this.onFullPlayerInitialized}/>
      );
    }

    return view;
  }

  setIsHovered = (isHovered) => {
    if (!this.isUnmounted) {
      const state = { isHovered };
      if (isHovered === this.mouseStates.left && this.playerId) {
        const playerData = VideoPlayController.getVideoPlayer(this.playerId);
        if (playerData) {
          const { player } = playerData;
          player.pause();
        }
        this.notifyHoverPlayChange('stop');
      }
      this.setState(state);
    }
  };

  setupStreamData = (response) => {
    if (!this.isUnmounted) {
      this.setState({
        streamUrl: response.data.data
      });
    }
  };

  render() {
    const { sceneImageContainerHeight } = this.state;
    const style = {
      height: sceneImageContainerHeight
    };
    return (
      <div className="SceneImageHoverPlayer"
           ref={this.mainRef}>
        <div className="SceneImageContainer" style={style}>
          {this.renderMainView()}
          {this.renderMouseEventOverlay()}
        </div>
      </div>
    );
  }
}

SceneImageHoverPlayer.propTypes = {
  endTimeSeconds: PropTypes.number,
  heroStillUrl: PropTypes.string,
  movieId: PropTypes.number,
  onHoverPlayChange: PropTypes.func,
  startTimeSeconds: PropTypes.number,
  videoHeight: PropTypes.number
};

export default SceneImageHoverPlayer;
