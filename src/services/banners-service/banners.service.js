import axios from 'axios';
import React from "react";
import * as Player from '@falconstudios/ns-player';
import ImageLoaderComponent from "../../components/ImageLoaderComponent/ImageLoaderComponent";
import {isUserLoggedIn} from "../token-service/token.service";
import { getUserNATSCode } from '../nats-service/nats.service';

const urls = {
  bannersSet: '/frontend/banners_set',
  bannerClick: '/frontend/banners/click'
};

export const bannerSets = {
  benefits: {
    affiliate: 73,
    defaultSet: 71,
    member: 72,
  },
  featuredReleases: {
    affiliate: 78,
    defaultSet: 64,
    member: 65
  },
  featuredReleasesLeft: {
    affiliate: 118,
    defaultSet: 118,
    member: 118
  },
  featuredReleasesRight: {
    affiliate: 119,
    defaultSet: 119,
    member: 119
  },
  main: {
    affiliate: 77,
    defaultSet: 12,
    member: 13
  },
  newToday: {
    affiliate: 76,
    defaultSet: 74,
    member: 75
  },
  originalsHeading: {
    affiliate: '',
    defaultSet: 67,
    member: ''
  },
  originalsMiddle: {
    affiliate: '',
    defaultSet: 68,
    member: ''
  },
  playlists: {
    affiliate: '',
    defaultSet: 60,
    member: ''
  },
  playlistsHeader: {
    affiliate: '',
    defaultSet: 66,
    member: ''
  },
  stars: {
    affiliate: '',
    defaultSet: 61,
    member: ''
  },
  studios: {
    affiliate: '',
    defaultSet: 63,
    member: ''
  },
  themes: {
    affiliate: '',
    defaultSet: 62,
    member: ''
  },
  tour: {
    affiliate: 79,
    defaultSet: 69,
    member: 70
  },
  "promo": {
    affiliate: 77,
    defaultSet: 67,
    member: 59
  },
  "memberUpsellBottom": {
    affiliate: "",
    defaultSet: 80,
    member: ""
  },
  promoNonMember: {
    affiliate: '',
    defaultSet: 57,
    member: ''
  },
  nonMemberPromoAffiliate: {
    affiliate: '',
    defaultSet: 58,
    member: ''
  },
  exit: {
    affiliate: '',
    defaultSet: 81,
    member: ''
  }
};

export const bannerRankings = [{
  key: 'member',
  rankerFn: isUserLoggedIn
}];

export const getBannerSet = (bannerSetId, page) => {
  const userNATSCode = getUserNATSCode();
  
  return axios.get(`${urls.bannersSet}/feed`, {
    params: {
      id: bannerSetId,
      page,
      nats_code: userNATSCode
    },
    withCredentials: true
  });
};

export const getBenefitsBannerSet = (page) => {
  return getUserBannerSet('benefits', page);
};

export const getFeaturedReleasesBannerSet = (page) => {
  return getUserBannerSet('featuredReleases', page);
};

export const getFeaturedReleasesLeftBannerSet = (page) => {
  return getUserBannerSet('featuredReleasesLeft', page);
};

export const getFeaturedReleasesRightBannerSet = (page) => {
  return getUserBannerSet('featuredReleasesRight', page);
};

export const getNewTodayBannerSet = (page) => {
  return getUserBannerSet('newToday', page);
};

export const getOriginalsHeadingBannerSet = (page) => {
  return getUserBannerSet('originalsHeading', page);
};

export const getOriginalsMiddleBannerSet = (page) => {
  return getUserBannerSet('originalsMiddle', page);
};

export const getPlaylistsBannerSet = (page) => {
  return getUserBannerSet('playlists', page);
};

export const getPlaylistsHeaderBannerSet = (page) => {
  return getUserBannerSet('playlistsHeader', page);
};

export const getStudiosBannerSet = (page) => {
  return getUserBannerSet('studios', page);
};

export const getThemesBannerSet = (page) => {
  return getUserBannerSet('themes', page);
};

export const getTourBannerSet = (page) => {
  return getUserBannerSet('tour', page);
};

export const getMemberUpsellBottomBanner = (page) => {
  return getUserBannerSet('memberUpsellBottom', page);
}

export const getPromoBannerSet = (page) => {
  return getUserBannerSet('promo', page);
}

export const getNonMemberPromoBannerSet = (page) => {
  return getUserBannerSet('promoNonMember', page);
};

export const getUserMainBannerSet = (page) => {
  return getUserBannerSet('main', page);
};

export const getUserStateBannerSetId = (setName) => {
  const keys = bannerSets[setName];
  let setId;
  if (Object.keys(keys).length > 1) { // More banner sets exist
    let item = 0;
    const itemsCount = bannerRankings.length;
    let currentRank;
    let isMatch;
    while (!setId && item < itemsCount) {
      currentRank = bannerRankings[item];
      isMatch = currentRank.rankerFn();
      if (keys[currentRank.key] && isMatch) {
        setId = keys[currentRank.key];
      }
      item++;
    }
    if (!setId) {
      setId = keys.defaultSet;
    }
  } else {
    setId = keys.defaultSet;
  }

  return setId;
};

export const getUserBannerSet = (setName, page) => {
  return getBannerSet(getUserStateBannerSetId(setName), page);
};

export const getStarsBannerSet = (page) => {
  return getUserBannerSet('stars', page);
};

export const registerBannerClick = (bannerId, bannerSetId) => {
  return axios.post(`${urls.bannerClick}?banners_id=${bannerId}&banners_set_id=${bannerSetId}`, {
    data: {
      banners_id: bannerId,
      banners_set_id: bannerSetId
    }
  });
};

export const renderBannerSlide = ({
                                    item,
                                    index,
                                    childAdditionalClass,
                                    onClick,
                                    renderPreview,
                                    onPlayerSetupFinished
                                  }) => {
  const {image, url: movieInfoUrl, overlayTitle, overlayText, videoClipUrl} = item;
  let view;
  if (videoClipUrl) {
    view = renderBannerSlidePlayer(videoClipUrl, index, movieInfoUrl, overlayTitle, overlayText, childAdditionalClass, onClick, onPlayerSetupFinished, renderPreview);
  } else {
    view = renderBannerImageComponent(image, movieInfoUrl, childAdditionalClass, onClick);
  }
  return (
    <div className="Slide-Element">
      {view}
    </div>
  );
};

export const renderBannerSlidePlayer = (url, index, movieInfoUrl, overlayTitle, overlayText, childAdditionalClass, onClick, onPlayerSetupFinished, renderPreview) => {
  const data = {
    ads: [],
    autoplay: true,
    className: "Player",
    fetchVideoThumbnails: undefined,
    isPreview: true,
    isUserLoggedIn: isUserLoggedIn,
    renderPreview: renderPreview,
    mapVideoThumbnails: undefined,
    onAddClick: undefined,
    onPreviewClick: onClick,
    playerConfiguration: undefined,
    videos: [{
      id: undefined,
      sources: [
        {
          src: url,
          type: undefined
        }
      ],
      duration: undefined,
      thumbnail: [
        {
          src: undefined
        }
      ],
      poster: undefined,
      name: ''
    }]
  };
  return (
    <Player.FullPlayer data={data}
                onPlayerSetupFinished={this.updatePlayers.bind(this, index)}/>
  );
};

export const renderBannerImageComponent = (image, movieInfoUrl, childAdditionalClass, onClick) => {
  let view = null;
  if (image && image.length) {
    const imagesCount = image.length;
    let url;
    let secondaryUrl;
    if (imagesCount > 3) {
      url = image[imagesCount - 3].url;
      secondaryUrl = image[imagesCount - 1].url;
    } else {
      url = image[0].url;
    }
    const imageProps = {
      url, secondaryUrl
    };
    const style = {
      backgroundImage: `url(${url})`
    };
    view = (
      <div className={childAdditionalClass} style={style}>
        <ImageLoaderComponent {...imageProps}
                              onClick={onClick}/>
      </div>
    );
  }

  return view;
};

export const parseBannerUrl = (url) => {
  let data = {};
  if (url.startsWith('/movies')) {
    data = parseBannerUrlForMovieData(url);
  } else if (url.startsWith('/studios')) {
    data = parseBannerUrlForStudioData(url);
  } else if (url.startsWith('/stars')) {
    data = parseBannerUrlForStarData(url);
  } else if (url.startsWith('/theme')) {
    data = parseBannerUrlForThemeData(url);
  } else if (url.startsWith('/playlists')) {
    data = parseBannerUrlForPlaylistData(url);
  }

  return data;
};

export const parseBannerUrlForMovieData = (url) => {
  url = url.replace('/movies/', '');
  let backslashIndex = url.indexOf('/');
  const movieId = url.slice(0, backslashIndex);
  url = url.replace(`${movieId}/`, '');
  backslashIndex = url.indexOf('/');
  let movieName = url;
  if (backslashIndex !== -1) {
    movieName = url.slice(0, backslashIndex);
  }
  const sceneIndex = url.indexOf('/scene');
  let sceneId;
  if (sceneIndex !== -1) {
    sceneId = url.slice(sceneIndex);
    sceneId = sceneId.replace('/scene/', '');
  }

  return {movieId, movieName, sceneIndex: sceneId};
};

export const parseBannerUrlForPlaylistData = (url) => {
  url = url.replace('/playlists/', '');
  let backslashIndex = url.indexOf('/');
  const playlistId = url.slice(0, backslashIndex);
  const remainder = url.slice(backslashIndex + 1);
  const data = {};
  if (remainder.startsWith('movies')) {
    data.moviePlaylistId = playlistId;
    data.playlistName = remainder.replace('movies/', '');
  } else {
    data.scenePlaylistId = playlistId;
    data.playlistName = remainder.replace('scenes/', '');
  }
  return data;
};

export const parseBannerUrlForStudioData = (url) => {
  url = url.replace('/studios/', '');
  let backslashIndex = url.indexOf('/');
  const studioId = url.slice(0, backslashIndex);
  const studioName = url.slice(backslashIndex + 1);
  return {studioId, studioName};
};

export const parseBannerUrlForStarData = (url) => {
  url = url.replace('/stars/', '');
  let backslashIndex = url.indexOf('/');
  const starId = url.slice(0, backslashIndex);
  const starName = url.slice(backslashIndex + 1);
  return {starId, starName};
};

export const parseBannerUrlForThemeData = (url) => {
  url = url.replace('/theme/', '');
  let backslashIndex = url.indexOf('/');
  const themeName = url.slice(0, backslashIndex);
  const themeId = url.slice(backslashIndex + 1);
  return {themeId, themeName};
};
