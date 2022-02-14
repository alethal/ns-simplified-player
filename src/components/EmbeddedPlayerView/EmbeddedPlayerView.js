import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import {cloneDeep} from "lodash";
import PropTypes from 'prop-types';

import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import {
  BaseVideoPlayerController,
  FullPlayer,
  VideoPlayController
} from '@falconstudios/ns-player';
import ImageLoadingSkeleton from "../ImageLoadingSkeleton/ImageLoadingSkeleton";
import MovieBoxCoverStillDisplay from "../MovieBoxCoverStillDisplay/MovieBoxCoverStillDisplay";

import {getVideoStills, getVideoStream} from "../../services/streaming-service/streaming.service";
import {displayInfoNotification} from "../../services/notification-service/notification.service";
import {addToFavorites} from "../../services/my-account-service/my-account.service";
import {compareByKey, convertRunTimeToSeconds, convertSecondsToTime} from "../../services/util-service/util.service";
import {getCoverImage} from "../../services/images-service/images.service";
import {logError} from "../../services/log/log.service";
import {showEntityDetailsPage} from "../../services/navigation/navigation.service";
import {isUserLoggedIn} from "../../services/token-service/token.service";
import {getMoviePropertyAds, isAdApplicableSection} from "../../services/movies/movies.service";

import {DashboardController} from "../../controllers/dashboard-controller/DashboardController";
import {ModalController} from "../../controllers/modal-controller/modal.controller";

import './EmbeddedPlayerView.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css";
import Scrap from '../Scrap/Scrap';
import { handleMovieGallery } from '../../services/gallery-service/gallery.service';
import ImagesLightBox from '../ImagesLighbox/ImagesLighbox';

class EmbeddedPlayerView extends Component {
  state = {
    activeVideoIndex: 0,
    data: [],
    dataLoaded: false,
    initialLoadFinished: false,
    page: 1,
    pageCount: undefined,
    totalSlides: 0,
    fullScreen: false,
  };

  subscriptions = {};

  playerId = undefined;
  playerFinishedSetup = false;

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillUnmount() {
    this.setState = () => {
    };
  }

  addToFavorites = () => {
    const { activeVideoIndex, data } = this.state;
    let { id: movieId, sceneId } = data[activeVideoIndex];
    if (sceneId) {
      movieId = undefined;
    }
    addToFavorites(movieId, sceneId)
      .then(this.onAddToFavoriteSuccess);
  };

  displayFormatChangeConfirmationModal = (resolve, formatName) => {
    const modal = (
      <ConfirmationModal title={"Confirm default format?"}
                         center={true}
                         confirm={resolve.bind(this, true)}
                         decline={resolve.bind(this, false)}
                         hideIcon={true}
                         message={`This format is not optimal for your operating system. Are you sure you want to set  ${formatName} as the default video format?`}/>
    );
    ModalController.showModal(modal);
  };

  fetchData = (resolve, reject) => {
    const { page } = this.state;
    this.setState({ dataLoaded: false });
    this.props.fetchData(page)
      .then(this.fetchFirstVideoStream)
      .then(this.loadData.bind(this, resolve))
      .catch(this.onRequestFailure.bind(this, reject));
  };

  fetchFirstVideoStream = (response) => {
    const { dataKey } = this.props;
    const data = response.data.data[dataKey];
    let promise;
    const { initialLoadFinished } = this.state;
    if (data?.length && !initialLoadFinished) {
      promise = this.mapVideoStream(data[0])
        .then(this.parseStreamData.bind(this, response))
        .catch(this.onRequestFailure);
    } else {
      promise = Promise.resolve(response);
    }

    return promise;
  };

  getMovieAds = () => {
    const { activeVideoIndex, data } = this.state;
    const { id: movieId } = data[activeVideoIndex];
    return getMoviePropertyAds(movieId);
  };

  getVideoStream = (movieId) => {
    const format = BaseVideoPlayerController.getUserStreamVideoFormat();
    const maxBitrate = BaseVideoPlayerController.getMaxBitrate();
    const film = this.state.data.find(film => film.id === movieId);
    const { sceneId } = film || undefined;
    let duration = undefined;
    let startTime = undefined;

    if (sceneId) {
      const { endTimeSeconds, startTimeSeconds } = film;
      startTime = startTimeSeconds;
      duration = endTimeSeconds - startTime;
    }

    return getVideoStream(movieId, sceneId, startTime, duration, undefined, maxBitrate, format);
  };

  isAdApplicableSection = (ad) => {
    const { activeVideoIndex, data } = this.state;
    const { id: movieId, sceneId } = data[activeVideoIndex];
    return isAdApplicableSection(movieId, sceneId, ad);
  };

  isFavorite = () => {
    const { activeVideoIndex, data } = this.state;
    const video = data[activeVideoIndex];
    return this.props.isFavorite(video);
  };

  isLiked = () => {
    const { activeVideoIndex, data } = this.state;
    const video = data[activeVideoIndex];
    return this.props.isLiked(video);
  };

  loadData = (resolve, response) => {
    this.setState(prevState => {
      const { dataKey } = this.props;
      const pagination = response.data.data.pagination;
      const loadedData = response.data.data[dataKey];
      const { current_page: page, last_page: pageCount } = pagination;
      const data = cloneDeep(prevState.data);
      return {
        data: data?.concat(loadedData?.map(this.mapVideo)),
        dataLoaded: true,
        initialLoadFinished: true,
        page,
        pageCount
      };
    }, () => {
      if (resolve) {
        resolve(this.state.data);
      }
    });
  };

  likeVideo = () => {

  };

  mapVideo = ({
                endTimeSeconds, first_scene, id, movieId, image, cover_images, movie, runTime, stars,
                startTimeSeconds, stream, title, titleNs, description, descriptionNs, streaming_movie, type,
                gallery
              }) => {
    const videoFormatType = BaseVideoPlayerController.getUserSettingsVideoFormat();
    let movieImages;
    let sceneImages;
    let isScene = true;
    let duration;
    let endTime;
    let sceneId;
    if (first_scene) {
      duration = runTime;
      isScene = false;
      movieImages = image;
      sceneImages = first_scene.cover_images;
      endTime = convertRunTimeToSeconds(runTime);
    } else {
      duration = convertSecondsToTime(endTimeSeconds - startTimeSeconds);
      movieId = movie.id;
      sceneImages = cover_images;
      movieImages = streaming_movie.image;
      title = movie.title;
      titleNs = movie.titleNs;
      description = movie.description;
      descriptionNs = movie.descriptionNs;
      endTime = endTimeSeconds;
      sceneId = id;
    }
    const heroStill = getCoverImage(sceneImages);
    return {
      id: movieId,
      sceneId,
      sources: [
        {
          src: stream,
          type: videoFormatType
        }
      ],
      endTimeSeconds: endTime,
      startTimeSeconds: isScene ? startTimeSeconds : 0,
      duration,
      thumbnail: [
        {
          src: heroStill
        }
      ],
      poster: heroStill,
      stars: stars || [],
      boxCover: movieImages,
      name: titleNs || title,
      description: descriptionNs || description,
      gallery: gallery,
      type: type
    }
  };

  mapVideoStream = (data) => {
    let { movieId } = data;
    const format = BaseVideoPlayerController.getUserStreamVideoFormat();
    const maxBitrate = BaseVideoPlayerController.getMaxBitrate();
    let duration = undefined;
    let startTime = undefined;
    if (!movieId) {
      movieId = data.movie.id;
      const { endTimeSeconds, startTimeSeconds } = data;
      startTime = startTimeSeconds;
      duration = endTimeSeconds - startTime;
    }

    return getVideoStream(movieId, undefined, startTime, duration, undefined, maxBitrate, format);
  };

  mapVideoThumbnails = (response) => response.data.data;

  matchItemById = (videoId, { id }) => videoId === id;

  onAddClick = ({ goToUrl }) => {
    showEntityDetailsPage(goToUrl);
  };

  onAddToFavoriteSuccess = () => {
    displayInfoNotification({
      duration: 3,
      message: this.props.t('EmbeddedPlayerView.addToFavoritesSuccess')
    });
  };

  onLoadMore = () => {
    return new Promise((resolve, reject) => {
      this.setState(prevState => {
        return {
          page: prevState.page + 1
        };
      }, this.fetchData.bind(this, resolve, reject));
    });
  };

  onPlayerSetupFinished = (playerId) => {
    this.playerId = playerId;
    this.playerFinishedSetup = true;
  };

  onPlaylistItemChange = (videoId, callback) => {
    const { data } = this.state;
    const index = data.findIndex(this.matchItemById.bind(this, videoId));

    this.setState({
      activeVideoIndex: index
    }, callback);
  };

  onPlaylistItemClick = (id, index) => {
    const playerData = VideoPlayController.getVideoPlayer(this.playerId);
    if (playerData) {
      const { player } = playerData;
      this.clickedItem = id;
      player.playlist.currentItem(index);
      const promise = player.play();
      if (promise.catch) {
        promise.catch(() => {
        });
      }
    }
    this.setState({ activeVideoIndex: index })
  };

  onRequestFailure = (reject, error) => {
    this.setState({ dataLoaded: false });
    logError(error, 'FavoritesPage');
    if (reject) {
      reject();
    }
  };

  toggleFullScreen = () => {
    this.setState({fullScreen: !this.state.fullScreen});
  };

  parseStreamData = (response, streamData) => {
    const { dataKey } = this.props;
    const data = response.data.data[dataKey];
    data[0].stream = streamData.data.data;

    return response;
  };

  renderMovieInfo = () => {
    // Playing movie object
    const movie = this.state.data[this.state.activeVideoIndex];

    return (
      <div className="MovieInfo">
        <div className="Title">
          <h2>
            {movie.name}
          </h2>
          <p>({movie?.duration || "00:00:00"})</p>

          <div className="GalleryToggle">
            {true &&
              <i
                className="fas fa-camera"
                onClick={this.toggleFullScreen}
              />
            }
          </div>
        </div>

        {this.playerFinishedSetup ?
          <Scrap
            text={movie?.description}
            className="Description"
            lines={2}
          /> : null
        }
      </div>
    )
  }

  renderCustomPlaylist = (videos) => {
    const { page, pageCount: lastPage } = this.state;

    return (
      <PlaylistSlider
        currentPage={page}
        lastPage={lastPage}
        fnLoadMore={this.onLoadMore}
        elementToRender={this.renderPlaylistItem}
        videos={videos}
      />
    );
  };

  renderLoading = () => {
    const { initialLoadFinished } = this.state;
    let view = null;
    if (!initialLoadFinished) {
      view = (
        <div className="EmbeddedPlayerView-InitialLoad">
          <ImageLoadingSkeleton className="PlayerLoader"/>
          <div className="PlaylistLoader">
            {this.renderPlaylistEntryLoaders()}
          </div>
        </div>
      );
    }

    return view;
  };

  renderLoadingIndicators = () => {
    return (
      <div className="LoadingIndicators">
        {this.renderPlaylistEntryLoaders()}
      </div>
    );
  };

  renderPlayer = () => {
    const { data: videos, initialLoadFinished } = this.state;
    const data = {
      ads: DashboardController.getPropertyAds(),
      addToFavorites: this.addToFavorites,
      className: "Player",
      fetchVideoThumbnails: getVideoStills,
      fetchVideoStream: this.getVideoStream,
      getMovieAds: this.getMovieAds,
      likeVideo: this.likeVideo,
      isAdApplicableSection: this.isAdApplicableSection,
      isLiked: this.isLiked,
      isFavorite: this.isFavorite,
      isUserLoggedIn: isUserLoggedIn,
      mapVideoThumbnails: this.mapVideoThumbnails,
      notifyPlaylistItemChange: this.onPlaylistItemChange,
      onAddClick: this.onAddClick,
      onFirstPlay: this.addVideoToViewingHistory,
      onFormatChangeVerification: this.displayFormatChangeConfirmationModal,
      renderMovieInfo: this.renderMovieInfo,
      renderCustomPlaylist: this.renderCustomPlaylist,
      // playerConfiguration: getMoviePlayerConfig(movieId, studios),
      videos
    };
    return initialLoadFinished && videos.length ? (
      <FullPlayer data={data} onVideoFormatChange={this.updatePlayerData}
                  className="MainPlayer"
                  onPlayerSetupFinished={this.onPlayerSetupFinished}/>
    ) : <ImageLoadingSkeleton/>;
  };

  renderPlaylistEntryLoader = (index) => {
    return (
      <div className="PlaylistEntryLoader" key={index}>
        <ImageLoadingSkeleton className="PlaylistEntryImageLoader"/>
        <ImageLoadingSkeleton className="PlaylistEntryTextLoader"/>
      </div>
    );
  };

  renderPlaylistEntryLoaders = () => {
    const items = [];
    for (let i = 0; i < 12; i++) {
      items.push(this.renderPlaylistEntryLoader(i));
    }

    return items;
  };

  renderPlaylistItem = (data, index) => {
    const { boxCover, duration, endTimeSeconds, id, name, poster, stars, startTimeSeconds } = data;
    return (
      <MovieBoxCoverStillDisplay heroStillUrl={poster}
                                 boxCoverUrl={boxCover}
                                 duration={duration}
                                 key={`${id}-${index}`}
                                 stars={stars}
                                 movieId={id}
                                 endTimeSeconds={endTimeSeconds}
                                 startTimeSeconds={startTimeSeconds}
                                 showImageHoverPlayer={true}
                                 onClick={this.onPlaylistItemClick.bind(this, id, index)}
                                 showImageOverlay={false}
                                 title={name}/>
    );
  };

  renderImageFullScreen = (gallery = []) => {
    const { fullScreen } = this.state;
    const galleryURLs = handleMovieGallery(gallery.sort(compareByKey("master_image_id")));

    return fullScreen ? (
      <ImagesLightBox currentIndex={0}
                      images={galleryURLs.length ? galleryURLs : []}
                      onClose={this.toggleFullScreen}/>
    ) : null;
  };

  render() {
    const movie = this.state.data[this.state.activeVideoIndex];

    return (
      <div className="EmbeddedPlayerView">
        {this.renderLoading()}
        {this.renderPlayer()}
        {this.renderImageFullScreen(movie?.gallery)}
      </div>
    );
  }
}

EmbeddedPlayerView.propTypes = {
  dataKey: PropTypes.string,
  fetchData: PropTypes.func,
  isFavorite: PropTypes.func,
  isLiked: PropTypes.func,
  showPlayingMovieInfo: PropTypes.bool
};

export default withTranslation()(EmbeddedPlayerView);


class PlaylistSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      totalSlides: 0
    }
    this.sliderRef = React.createRef();
  }

  componentDidMount() {
    this.setState({videos: this.props.videos})
  }

  componentDidUpdate(prevProps, prevState) {
    const {totalSlides} = this.state;
    const sliderTotalSteps = this.sliderRef.current?.innerSlider?.state?.slideCount || 0;
    if (totalSlides !== sliderTotalSteps) {
      this.setState({totalSlides: this.sliderRef.current?.innerSlider?.state?.slideCount})
    }
  }

  async handlePlaylistFetchNext() {
    const {currentPage, lastPage} = this.props;
    const {currentSlide, slideCount} = this.sliderRef.current?.innerSlider?.state;

    if(
      currentPage !== lastPage &&
      currentSlide === slideCount - 1
    ) {
      await this.props.fnLoadMore()
        .then((res) => this.setState({videos: res}))
    }
  }

  render () {
    const sliderTrackHeight = document.querySelector(".slick-slider")?.getBoundingClientRect()?.height || 0;
    const slideHeight = document.querySelector(".slick-list .MovieBoxCoverStillDisplay")?.getBoundingClientRect()?.height || 0;
    const padding = 100;
    let slidesCount = 1;

    if (!!sliderTrackHeight) {
      slidesCount = Math.floor((sliderTrackHeight - padding) / slideHeight);
    }

    const sliderSettings = {
      rows: slidesCount,
      slidesToScroll: 1,
      slidesToShow: 1,
      vertical: true,
      verticalSwiping: true,
      infinite: false,
      draggable: true,
    }

    return (
      <Slider
        className="CustomPlaylist"
        ref={this.sliderRef}
        {...sliderSettings}
        afterChange={this.handlePlaylistFetchNext.bind(this)}
        responsive={[
          {
            breakpoint: 1025,
            settings: {...sliderSettings, rows: 3}
          }
        ]}
      >
        {this.state.videos.map((item, idx) => this.props.elementToRender(item, idx))}
      </Slider>
    )
  }
}