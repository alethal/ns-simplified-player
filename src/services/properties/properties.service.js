import axios from 'axios';

const urls = {
  ads: '/frontend/ads_config',
  studios: '/frontend/studios/feed',
  whiteLabelConfig: '/frontend/whitelabel_config'
};

export const getStudios = () => {
  return axios.get(urls.studios);
};

export const getWhiteLabelConfig = () => {
  const propertyId = process.env.REACT_APP_PROPERTY_ID;
  return axios.get(`${urls.whiteLabelConfig}/${propertyId}/get`, {
    params: {
      id: propertyId
    }
  });
};

export const getPropertyAds = () => {
  const propertyId = process.env.REACT_APP_PROPERTY_ID;
  return axios.get(`${urls.ads}/`, {
    params: {
      properties_id: propertyId
    }
  });
}
