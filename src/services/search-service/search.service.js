import axios from 'axios';

const urls = {
  search: '/frontend/search/home',
  searchLanding: '/frontend/search/landing'
};

export const searchHome = (value, section) => {
  return axios.get(`${urls.search}?query=${value}&only=${section}`);
};

export const searchLandingResults = ({query, page = 1, type, sortby = 'relevance'}) => {
  return axios.get(`${urls.searchLanding}?query=${query}`, {
    params: {
      page: page,
      object: type,
      sort_by: sortby
    }
  })
}