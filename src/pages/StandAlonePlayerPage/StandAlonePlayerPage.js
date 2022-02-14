import React, {Component} from 'react';
import './StandAlonePlayerPage.scss';
import StandAlonePlayerComponent from "../../components/StandAlonePlayerComponent/StandAlonePlayerComponent";
import  "../../components/StandAlonePlayerComponent/StandAlonePlayerComponent.scss";

import {
  FullPlayer, 
  BaseVideoPlayerController, 
  VideoPlayController
} from '@falconstudios/ns-player';

import ImageLoadingSkeleton from  "../../components/ImageLoadingSkeleton/ImageLoadingSkeleton.js";
import MovieBoxCoverStillDisplay from "../../components/MovieBoxCoverStillDisplay/MovieBoxCoverStillDisplay";

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

import '../../components/EmbeddedPlayerView/EmbeddedPlayerView.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css";
import Scrap from '../../components/Scrap/Scrap';
import { handleMovieGallery } from '../../services/gallery-service/gallery.service';
import ImagesLightBox from '../../components/ImagesLighbox/ImagesLighbox';

const data = {
    //common settings
    controls: undefined,
    height:'',
    width:'100%',
    loop:true,
    muted:false,
    autoplay:false,
    //nsplayer
    ads: [],
    className: 'Player',
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
                src: 'https://d34kds0xkdmtq8.cloudfront.net/FSP045_SA.mp4',
                type: 'video/mp4'
            }
        ],
        duration: undefined,
        thumbnail: [
            {
                src: ''
            }
        ],
        poster: 'https://spotlight.nakedcdn.com/nakedsword/img/ns_play/mask-for-masc-FSP045_16x9.jpg',
        name: ''
    }]
};





class StandAlonePlayerPage extends Component {



  render() {
    return (
      <div className="StandAlonePlayerPage">
          <h2>StandAlonePlayerPage</h2>
          <hr />

          <FullPlayer data = {data} /> 


          <StandAlonePlayerComponent />

      </div>
     );
    }
  }

  export default StandAlonePlayerPage;
//export default compose(withBackgroundChange, withTopScroll)(HelpPage, 'black');

