import axios from 'axios';

export const urls = {
  stream: '/frontend/streaming/aebn/movie',
  stills: '/frontend/movies'
};

export const getVideoStream = (movieId, sceneId, start_time, duration, orientation, max_bitrate, format, isPreview) => {
  const params = {
    max_bitrate: max_bitrate || 1200
  };

  if(sceneId) {
    params.scenes_id = sceneId
  }
  if (start_time) {
    params.start_time = start_time;
  }
  if (duration) {
    params.duration = duration;
  }
  if (orientation) {
    params.orientation = orientation;
  }
  if (format) {
    params.format = format;
  }
  if(isPreview) {
    params.is_preview = 1;
  }
  return axios.get(`${urls.stream}/${movieId}`, {params});
};

export const getVideoStills = (movieId, start_time = undefined, duration = undefined) => {
  return axios.get(`${urls.stills}/${movieId}/stills/aebn/`, {
    params: {
      start_time,
      duration
    }
  });
};
