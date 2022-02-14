import axios from 'axios';

export const urls = {
  feed: '/frontend/tags/feed',
  tags: '/frontend/tags'
};

export const getThemes = () => {
  return axios.get(urls.feed)
};

/**
 * @param {number} tagId Requires the id of the tag
 * @returns {Object} Details for the tag
 */
export const getTagDetails = (tagId) => {
  return axios.get(`${urls.tags}/${tagId}/details`);
}