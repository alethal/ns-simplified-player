import axios from 'axios';

const urls = {
  categories: '/categories/categorieswithoutpaginator'
};

export const getCategories = () => {
  return axios.get(urls.categories);
};