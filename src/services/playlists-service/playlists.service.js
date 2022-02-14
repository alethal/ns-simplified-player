import axios from "axios";

const urls = {
  addMovieToPlaylist: '/frontend/nats_user_playlist/attach',
  removeMovieFromPlaylist: '/frontend/nats_user_playlist/detach',
  natsPlaylists: '/frontend/nats_user_playlist',
  moviePlaylists: '/frontend/movie_playlist',
  scenePlaylists: '/frontend/scene_playlist'
};

export const getMoviePlaylist = (playlistId) => {
  return axios.get(`${urls.moviePlaylists}/${playlistId}`);
};

export const getScenePlaylist = (playlistId) => {
  return axios.get(`${urls.scenePlaylists}/${playlistId}`);
};

export const getNatsUserPlaylist = (page) => {
  return axios.get(`${urls.natsPlaylists}?page=${page}`);
};

export const getNatsUserPlaylistMovies = (playlistId) => {
  return axios.get(`${urls.natsPlaylists}/${playlistId}`)
};

export const createUserPlaylist = (name) => {
  return axios.post(`${urls.natsPlaylists}?name=${name}`, {
    data: {name}
  });
};

export const addMovieToPlaylist = (playlistId, movieId, sceneId) => {
  const params = {
    id: playlistId,
  };
  if (sceneId) {
    params.scenes_id = sceneId;
  } else if (movieId) {
    params.movies_id = movieId;
  }
  return axios.patch(urls.addMovieToPlaylist, {params});
};

export const removeMovieFromPlaylist = (playlistId, movieId) => {
  return axios.patch(urls.removeMovieFromPlaylist, {
    params: {
      id: playlistId,
      movies_id: [movieId]
    }
  });
};