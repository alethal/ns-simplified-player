import axios from 'axios';

export const urls = {
  scenesFeed: '/frontend/scenes/feed',
  scenes: '/frontend/scenes'
};

export const getDirectorScenes = (directorId, page, sortBy) => {
  const params = {directors_id: directorId};
  return getScenes(params, page, sortBy);
};

export const getThemeScenes = (themeId, page, sortBy) => {
  const params = {tags_id: themeId};
  return getScenes(params, page, sortBy);
};

export const getStudioScenes = (studioId, page, sortBy) => {
  const params = {studios_id: studioId};
  return getScenes(params, page, sortBy);
};

export const getStarScenes = (starId, page, sortBy) => {
  const params = {stars_id: starId};
  return getScenes(params, page, sortBy);
};

export const getScenes = (params, page, sortBy) => {
  if(page) {
    params.page = page;
  }
  if (sortBy) {
    params.sort_by = sortBy;
  }
  return axios.get(urls.scenesFeed, {params});
};

export const getNSOriginalsScenes = (page, sort_by) => {
  const params = {
    page,
    sort_by,
    originals: 1
  };
  return axios.get(urls.scenesFeed, {params});
};

export const getJustAddedScenes = (page, sortBy) => {
  const params = {};
  return getScenes(params, page, sortBy);
};
