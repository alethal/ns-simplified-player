import {Subject} from 'rxjs';
import {cloneDeep} from 'lodash';

class DashboardCtrl {
  static instance;
  scrollTopRequested = new Subject();
  backgroundChangeRequested = new Subject();
  browseConfigurationChanged = new Subject();
  homepageSpotlightChanged = new Subject();
  defaultThemesChanged = new Subject();
  movieSceneSpotlightChanged = new Subject();
  justAddedMaxPageCountChanged = new Subject();
  playerConfig;
  propertyAds;
  config = {};

  static getInstance() {
    if (DashboardCtrl.instance == null) {
      DashboardCtrl.instance = new DashboardCtrl();
    }

    return DashboardCtrl.instance;
  }

  getBenefitsEnabled = () => {
    const instance = DashboardCtrl.getInstance();
    return !!instance.config.enable_benefits;
  };

  getDefaultThemes = () => {
    const instance = DashboardCtrl.getInstance();
    return cloneDeep(instance.config.categories);
  };

  getHomePageSpotlight = () => {
    const instance = DashboardCtrl.getInstance();
    return cloneDeep(instance.config.homepage_spotlight);
  }

  getJustAddedMaxPageCount = () => {
    const instance = DashboardCtrl.getInstance();
    const {max_just_added_page_count} = instance.config;
    return max_just_added_page_count || 10;
  };

  getMovieSceneSpotlightData = () => {
    const instance = DashboardCtrl.getInstance();
    const {movie_spotlight_id, scene_spotlight_id, scene_spotlight_movie_id} = instance.config;
    const data = {};
    if (movie_spotlight_id) {
      data.movieSpotlight = {
        movieId: movie_spotlight_id
      };
    }
    if (scene_spotlight_id) {
      data.sceneSpotlight = {
        movieId: scene_spotlight_movie_id,
        sceneId: scene_spotlight_id
      }
    }

    return data;
  };

  getPlayerConfig = () => {
    const instance = DashboardCtrl.getInstance();
    return cloneDeep(instance.playerConfig);
  };

  getPropertyAds = () => {
    const instance = DashboardCtrl.getInstance();
    return cloneDeep(instance.propertyAds);
  };

  notifyScrollTopRequested = (value) => {
    const instance = DashboardCtrl.getInstance();
    instance.scrollTopRequested.next(value);
  };

  notifyBackgroundChangeRequested = (background) => {
    const instance = DashboardCtrl.getInstance();
    instance.backgroundChangeRequested.next(background);
  };

  setBrowseConfiguration = () => {
    const instance = DashboardCtrl.getInstance();
    instance.browseConfigurationChanged.next();
  };

  setHomePageSpotlight = () => {
    const instance = DashboardCtrl.getInstance();
    instance.homepageSpotlightChanged.next();
  }

  setDefaultThemes = () => {
    const instance = DashboardCtrl.getInstance();
    instance.defaultThemesChanged.next();
  };

  setJustAddedMaxPageCount = () => {
    const instance = DashboardCtrl.getInstance();
    instance.justAddedMaxPageCountChanged.next();
  };

  setMovieSceneSpotlight = () => {
    const instance = DashboardCtrl.getInstance();
    instance.movieSceneSpotlightChanged.next();
  };

  setPlayerConfig = (config) => {
    const instance = DashboardCtrl.getInstance();
    instance.playerConfig = config;
  };

  setPropertyAds = (ads) => {
    const instance = DashboardCtrl.getInstance();
    instance.propertyAds = ads;
  };

  setWhiteLabelConfig = (config) => {
    const instance = DashboardCtrl.getInstance();
    instance.config = config;
    instance.setDefaultThemes();
    instance.setMovieSceneSpotlight();
    instance.setJustAddedMaxPageCount();
    instance.setBrowseConfiguration();
    instance.setHomePageSpotlight();
  };
}

export const DashboardController = DashboardCtrl.getInstance();
