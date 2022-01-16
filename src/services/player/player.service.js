import axios from 'axios';
import {DashboardController} from "../../controllers/dashboard-controller/DashboardController";

const urls = {
  config: '/frontend/player_config'
};

export const getPlayerConfig = () => {
 const propertyId = process.env.REACT_APP_PROPERTY_ID;
 return axios.get(`${urls.config}/${propertyId}`, {
   params: {
    id: propertyId
   }
  });
};

export const getMoviePlayerConfig = (movieId, studios) => {
 let config = {};
const data = DashboardController.getPlayerConfig();
 if (data) {
  config = data.config;
  if (data.studios) {
    const studioData = data.studios[studios[0].id];
   if (studioData) {
   config = studioData.config;
       if (studioData.movies) {
       const movieData = studioData.movies[movieId];
       if (movieData) {
         config = movieData.config;
        }
      }
    }
  }
}

  return config;
};

//export const getMoviePlayerAds = (movieId, studios) => {
 // let ads = [];
 // const data = DashboardController.getPropertyAds();
 // if (data) {
 //   ads = data;
 // }
//
 // return ads;
//};
