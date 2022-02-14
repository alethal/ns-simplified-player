import axios from 'axios';

const urls = {
  ads: '/frontend/ads_config',
  feed: '/frontend/movies/feed',
  movies: '/frontend/movies',
  playlists: '/frontend/movie_playlist'
};

export const getDirectorMovies = (directorId, page, sortBy) => {
  const params = {directors_id: directorId};
  return getMovies(params, page, sortBy);
};

export const getJustAddedMovies = (page, sortBy) => {
  const params = {};
  return getMovies(params, page, sortBy);
};

export const getMoviesFeed = (page, filters) => {
  return axios.get(`${urls.feed}`, {
    params: {
      page: page,
      ...filters
    }
  })
}

export const getMovieDetails = (movieId) => {
  return axios.get(`${urls.movies}/${movieId}/details`);
};

export const getStarMovies = (starId, page, sortBy) => {
  const params = {stars_id: starId};
  return getMovies(params, page, sortBy);
};

export const getThemeMovies = (themeId, page, sortBy) => {
  const params = {tags_id: themeId};
  return getMovies(params, page, sortBy);
};

export const getStudioMovies = (studioId, page, sortBy) => {
  const params = {studios_id: studioId};
  return getMovies(params, page, sortBy);
};

export const getMovies = (params, page, sortBy) => {
  params.page = page;
  if (sortBy) {
    params.sort_by = sortBy;
  }
  return axios.get(urls.feed, {params});
};

export const getNSOriginalsMovies = (page, sortBy, spotlight) => {
  const params = {
    page,
    sort_by: sortBy || 'newest'
  };
  if (spotlight) {
    params.spotlight = spotlight;
  } else {
    params.originals = 1;
  }
  return axios.get(urls.feed, {params});
};

export const getMovieAds = (movieId) => {
  return axios.get(`${urls.ads}`, {
    params: {
      movies_id: movieId
    }
  });
}

export const getMoviePropertyAds = (movieId) => {
  return getMovieAds(movieId)
    .then(parseMovieAdsData);
};

export const parseMovieAdsData = (response) => {
	const ads = [];
	const movieAds = response?.data?.data?.ads_config;
	if (movieAds) {
		const { movieId, properties } = movieAds;
		const { movieAds: mainAds, scenes } =
			properties?.filter(matchPropertyById)[0] || {};
		if (mainAds) {
			ads.push(...mainAds.map(updateId.bind(null, { movieId: `${movieId}` })));
		}
		if (scenes) {
			ads.push(...scenes.map(updateSceneId));
		}
	}
	return ads.flat();
};

export const matchPropertyById = ({propertyId}) => {
  return propertyId === +process.env.REACT_APP_PROPERTY_ID;
};

export const updateId = (addition, data) => {
  Object.assign(data, addition);
  return data;
};

export const updateSceneId = ({ads, sceneId}) => {
  return ads.map(updateId.bind(null, {sceneId}));
};

export const isAdApplicableSection = (movieId, sceneId, {selectedSection, movieId: adMovieId, sceneId: adSceneId}) => {
  let isApplicable;
  if (selectedSection) { // Property ad so check for movie/scene section match
    if (selectedSection === 'movie') {
      isApplicable = !sceneId;// Only applicable if not playing a scene
    } else {
      isApplicable = !!sceneId;// Only applicable if playing a scene
    }
  } else if (adMovieId) {
    isApplicable = !sceneId && adMovieId === movieId;
  } else {
    isApplicable = sceneId && sceneId === adSceneId;
  }
  return isApplicable;
};
