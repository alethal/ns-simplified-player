import axios from 'axios';

export const urls = {
	studios: "/frontend/studios"
};

export const getStudioDetails = (studioId) => {
	return axios.get(`${urls.studios}/${studioId}/details`);
}