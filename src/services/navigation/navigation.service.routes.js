//import {removeSpecialCharacters} from "../util-service/util.service";
//import {links} from "../../links";
 //import ForgotPasswordPage from "../../pages/MainDashBoard/ForgotPasswordPage";
//import React from "react";



export const routes = {
 // billingSupport: 'billing-and-support',
 // browse: 'browse',
  //compliance: 'compliance',
  //director: 'director',
  //favorites: 'my-favorites',
  help: 'help',
  //join: links.joinNow,
  //justAdded: 'just-added',
  //likes: 'my-likes',
 // memberBenefits: 'member-benefits',
 // mostWatched: 'most-watched',
 // movie: 'movies',
 // myAccount: 'my-account',
 // myDeals: 'my-deals',
 // newsletter: 'newsletter',
 // noSearchResults: 'no-search-results',
 // originals: 'nsoriginals',
 // partners: 'partners',
 // playlists: 'playlists',
//  privacyPolicy: 'privacy',
  root: '/',
 // sexAct: 'sex-act',
 // stars: 'stars',
 // studios: 'studios',
 // specialOffers: "specialoffers",
 // series: "series",
 // termsOfUse: 'tos',
 // theme: 'theme',
//  themes: 'themes',
//  top10: 'top-10',
//  twitter: 'twitter',
 // viewingHistory: 'my-viewing-history',
 // webmasters: 'webmasters',
//  weekends: 'weekends',
//  search: 'search',
  applicationstartroute: '/',
  forgotpasswordpage: 'forgotpasswordpage',
  resetpassworddialog: 'resetpassworddialog',
  resetpassworddialogpage: 'resetpassworddialogpage',
  oneredirectpage: 'oneredirectpage',
  redirecttopage: 'redirecttopage',
  weekends: "weekends",
	pride2020: "pride2020",
	mrman2020: "mrman2020",
	party20th: "party20th",
	mask4mask: "mask4mask",
	misspineapple2021: "misspineapple2021",
  weekendstoredirectpageone: 'weekendstoredirectpageone',
  weekendstoredirectpagetwo: 'weekendstoredirectpagetwo',
  weekendstoredirectpagethree: 'weekendstoredirectpagethree',
  standaloneplayerpage: 'standaloneplayerpage',
};



//export const getCompliancePageRoute = () => `/${routes.compliance}`

//export const getDirectorDetailsPageRoute = (directorId, directorName) => {
 // if (directorName) {
  //  directorName = removeSpecialCharacters(directorName);
//  }
//  return `/${routes.director}/${directorId}/${directorName}`;
//};

// export const getMovieDetailsPageRoute = (movieId, movieName) => {
//  const name = removeSpecialCharacters(movieName, false, true);
  //return `/${routes.movie}/${movieId}/${name}`;
//}

//export const getSceneDetailsPageRoute = (movieId, movieName, sceneId) => {
 // const name = removeSpecialCharacters(movieName, false, true);
  //return `/${routes.movie}/${movieId}/${name}/scene/${sceneId}`;
// }

// export const getJustAddedPageRoute = () => `/${routes.justAdded}`;

// export const getJustAddedMoviesRoute = () => `/${routes.justAdded}/movies`;

// export const getJustAddedScenesRoute = () => `/${routes.justAdded}/scenes`;

// export const getMostWatchedPageRoute = () => `/${routes.mostWatched}`;

// export const getMostWatchedMoviesRoute = () => `/${routes.mostWatched}/movies`;

// export const getMostWatchedScenesRoute = () => `/${routes.mostWatched}/scenes`;

 // export const getTop10PageRoute = () => `/${routes.top10}`;

//export const getOriginalsPageRoute = () => `/${routes.originals}`;

//export const getOriginalsMoviesPageRoute = (page, sortBy) => `/${routes.originals}?content=Movies&sort=${sortBy}&page=${page}`;

//export const getOriginalsScenesPageRoute = (page, sortBy) => `/${routes.originals}?content=Scenes&sort=${sortBy}&page=${page}`;

//export const getBrowsingPageRoute = () => `/${routes.browse}`;



//export const getStarsBaseRoute = () => `/${routes.stars}`;

//export const getStarsPageRoute = (page, sort) => `${getStarsBaseRoute()}?page=${page}&sort=${sort}`;

//export const getStarDetailsBaseRoute = () => {
  //return `${getStarsBaseRoute()}/star`;
//};

//export const getStarDetailsRoute = (starId, starName) => {
  //if (starName) {
  //  starName = removeSpecialCharacters(starName);
 // }
//  return `${getStarDetailsBaseRoute()}/${starId}/${starName}`;
// };

//export const getStudiosRoute = () => `/${routes.studios}`;

//export const getStudioDetailsRoute = (id, name) => {
//  if (name) {
 //   name = removeSpecialCharacters(name);
 // }
 // return `/${routes.studios}/${id}/${name}`;
// };

//export const getThemesRoute = () => `/${routes.themes}`;

//export const getThemeDetailsRoute = (id, name) => {
 // if (name) {
  //  name = removeSpecialCharacters(name);
 // }
 // return `/${routes.theme}/${name}/${id}`;
//};

// export const getSexActDetailsRoute = (id, name) => {
 // if (name) {
 //   name = removeSpecialCharacters(name);
//  }
 // return `/${routes.sexAct}/${name}/${id}`;
// };

//export const getPlaylistsRoute = () => `/${routes.playlists}`;

//export const getMoviePlaylistRoute = (moviePlaylistId, name) => {
 // if (name) {
   // name = removeSpecialCharacters(name);
 // }
  //return `/${routes.playlists}/${moviePlaylistId}/movies/${name}`;
//};

//export const getScenePlaylistRoute = (scenePlaylistId, name) => {
 // if (name) {
  //  name = removeSpecialCharacters(name);
 // }
 // return `/${routes.playlists}/${scenePlaylistId}/scenes/${name}`
//};

//export const getCustomPlaylistRoute = (playlistId, name) => `/${routes.playlists}/custom/${playlistId}/${removeSpecialCharacters(name)}`;

//export const getPartnersRoute = () => `/${routes.partners}`;

// export const getMyAccountRoute = () => `/${routes.myAccount}`

// export const getNewsLetterRoute = () => `/${routes.newsletter}`;

// export const getTwitterRoute = () => `/${routes.twitter}`;

// export const getBillingAndSupportRoute = () => `/${routes.billingSupport}`;

export const getHelpRoute = () => `/${routes.help}`;

// export const getTermsOfUseRoute = () => `/${routes.termsOfUse}`;

// export const getPrivacyPolicyRoute = () => `/${routes.privacyPolicy}`;

//export const getMyDealsRoute = () => `/${routes.myDeals}`;

//export const getMemberBenefitsPageRoute = () => `/${routes.memberBenefits}`;

//export const getWeekendsPageRoute = () => `/${routes.weekends}`;

//export const getJoinLinkRoute = () => `${routes.join}`;



//export const getForgotPasswordPage = () => `/${routes.forgotpasswordpage}`;

export const getForgotPasswordPageRoute = () => `/${routes.forgotpasswordpage}`;

export const getResetPasswordDialog = () => `/${routes.resetpassworddialog}`;

export const getResetPasswordDialogPage = () => `/${routes.resetpassworddialogpage}`;

export const getOneRedirectPage = () => `/${routes.oneredirectpage}`;

export const getRedirectToPage = () => `/${routes.redirecttopage}`;

export const getWeekendsPage = () => `/${routes.weekends}`;
export const getPride2020 = () => `/${routes.pride2020}`;
export const getmrman2020 = () => `/${routes.mrman2020}`;
export const getmask4mask = () => `/${routes.mask4mask}`;
export const getparty20th = () => `/${routes.party20th}`;
export const getMissPineapple2021 = () => `/${routes.misspineapple2021}`;

export const getWeekendsToRedirectPageOne = () => `/${routes.weekendstoredirectpageone}`;

export const getWeekendsToRedirectPageTwo = () => `/${routes.weekendstoredirectpagetwo}`;


export const getWeekendsToRedirectPageThree = () => `/${routes.weekendstoredirectpagethree}`;



export const getApplicationStartRoute = () => `${routes.root}`;

export const getStandAlonePlayerPageRoute = () => `/${routes.standaloneplayerpage}`;



//export const getFavoritesPageRoute = () => `${routes.favorites}`;

//export const getLikesPageRoute = () => `${routes.likes}`;

//export const getViewingHistoryPageRoute = () => `${routes.viewingHistory}`;

//export const getNoSearchResultsRoute = () => `${routes.noSearchResults}`;

//export const getStarLetterListBaseRoute = () => `${getStarsBaseRoute()}/index`;

//export const getStarLetterListRoute = (letter) => `${getStarLetterListBaseRoute()}/${letter}`;

//export const getStarMoviesRoute = (starId, starName, page, sortBy) => `${getStarDetailsRoute(starId, starName)}?content=Movies&sort=${sortBy}&page=${page}`;

//export const getStarScenesRoute = (starId, starName, page, sortBy) => `${getStarDetailsRoute(starId, starName)}?content=Scenes&sort=${sortBy}&page=${page}`;
