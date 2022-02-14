import axios from 'axios';

export const urls = {
  favorites: '/frontend/nats_user_favorites',
  likes: '/frontend/nats_user_likes',
  viewingHistory: '/frontend/nats_user_clicks'
};

export const addToFavorites = (movieId, sceneId) => {
  const query = movieId ? `movies_id=${movieId}` : `scenes_id=${sceneId}`;
  return axios.post(`${urls.favorites}/add?${query}`);
};

export const addToLikes = (movieId, sceneId) => {
  const query = movieId ? `movies_id=${movieId}` : `scenes_id=${sceneId}`;
  return axios.post(`${urls.likes}/add?${query}`);
};

export const addToViewingHistory = (movieId, sceneId) => {
  const query = movieId ? `movies_id=${movieId}` : `scenes_id=${sceneId}`;
  return axios.post(`${urls.viewingHistory}/add?${query}`)
};

export const getUserFavorites = (page) => {
  return axios.get(`${urls.favorites}`, {
    params: {page}
  });
};

export const getUserLikes = (page) => {
  return axios.get(`${urls.likes}?page=${page}`);
};

export const getUserViewingHistory = (page) => {
  return axios.get(`${urls.viewingHistory}?page=${page}`);
};

export const isInFavorites = (movieId, sceneId) => {
  const query = movieId ? `movies_id=${movieId}` : `scenes_id=${sceneId}`;
  return axios.get(`${urls.favorites}/has?${query}`);
};

export const isInLikes = (movieId, sceneId) => {
  const query = movieId ? `movies_id=${movieId}` : `scenes_id=${sceneId}`;
  return axios.get(`${urls.likes}/has?${query}`);
};

export const removeFromFavorites = (movieId, sceneId) => {
  const params = {};
  if (movieId) {
    params.movies_id = movieId;
  } else {
    params.scenes_id = sceneId;
  }
  return axios.delete(`${urls.favorites}/delete`, {params});
};

export const removeFromLikes = (movieId, sceneId) => {
  const params = {};
  if (movieId) {
    params.movies_id = movieId;
  } else {
    params.scenes_id = sceneId;
  }
  return axios.delete(`${urls.likes}/delete`, {params});
};


