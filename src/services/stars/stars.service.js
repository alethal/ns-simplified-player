import axios from "axios";

const urls = {
	feed: "/frontend/stars/feed",
	stars: "/frontend/stars",
	starsLetters: "/frontend/stars/letters",
	starStartsWith: "/frontend/stars/name_starts_with",
};

export const getStarsFeed = (
	page,
	sortBy,
	exclusive,
	with_custom_images,
	star_images_custom_only
) => {
	return axios.get(`${urls.feed}?page=${page}`, {
		params: {
			exclusive: !!exclusive,
			star_images_custom_only:
				star_images_custom_only !== undefined ? star_images_custom_only : undefined,
			with_custom_images: with_custom_images !== undefined ? with_custom_images : undefined,
			sort_by: sortBy ? sortBy : undefined,
		},
	});
};

export const getStarsFeedFiltered = (filters = {}) => {
	return axios.get(`${urls.feed}`, {
		params: { ...filters },
	});
};

export const getStarsLetters = () => {
	return axios.get(`${urls.starsLetters}`);
};

export const getStarDetailsById = (
	starId,
	star_images_sort_order,
	star_images_custom_only,
	star_images_master_only
) => {
	return axios.get(`${urls.stars}/${starId}/details`, {
		params: {
			star_images_master_only: star_images_master_only,
			star_images_custom_only: star_images_custom_only,
			star_images_sort_order: star_images_sort_order,
		},
	});
};

export const getStarsStartingWithList = (query) => {
	return axios.get(`${urls.starStartsWith}`, {
		params: {
			name_starts_with: query,
		},
	});
};
