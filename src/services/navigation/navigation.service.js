import {navigate} from "@reach/router";
import {
    getApplicationStartRoute,
    //getBrowsingPageRoute,
//  getBillingAndSupportRoute,
    getHelpRoute,
    // getJustAddedMoviesRoute,
    // getJustAddedPageRoute,
    // getJustAddedScenesRoute,
    // getMemberBenefitsPageRoute,
    // getMyAccountRoute,
    // getMyDealsRoute,
    // getNewsLetterRoute,
    // getOriginalsPageRoute,
    // getPartnersRoute,
    // getPlaylistsRoute,
// getPrivacyPolicyRoute,
    // getStarsPageRoute,
    // getStarDetailsRoute,
    // getStudiosRoute,
    // getTermsOfUseRoute,
    // getThemesRoute,
    // getTop10PageRoute,
    // getTwitterRoute,
    // getThemeDetailsRoute,
    // getMovieDetailsPageRoute,
//  getStudioDetailsRoute,
    // getWeekendsPageRoute,
    // getSceneDetailsPageRoute,
    // getDirectorDetailsPageRoute,
    // getMoviePlaylistRoute,
    // getScenePlaylistRoute,
    // getCustomPlaylistRoute,
//  getJoinLinkRoute,
    // getMostWatchedPageRoute,
    // getMostWatchedMoviesRoute,
    // getMostWatchedScenesRoute,
    // getCompliancePageRoute,
    // getOriginalsMoviesPageRoute,
    //getOriginalsScenesPageRoute,
    // getFavoritesPageRoute,
    // getLikesPageRoute,
    //getViewingHistoryPageRoute,
    //getNoSearchResultsRoute,
    // getSexActDetailsRoute,
    getResetPasswordDialog,
    getRedirectToPage,
    getOneRedirectPage,
    //getStarLetterListRoute,
    //getStarMoviesRoute,
    //getStarScenesRoute,
    getForgotPasswordPageRoute,
    //getForgotPasswordPage,
    getWeekendsPage,
    getResetPasswordDialogPage,
    getWeekendsToRedirectPageOne,
    getWeekendsToRedirectPageTwo,
    getWeekendsToRedirectPageThree,
    getStandAlonePlayerPageRoute
} from "./navigation.service.routes";

//import {openNewBrowserTab} from "../util-service/util.service";
//import {parseBannerUrl} from "../banners-service/banners.service";


//export const showCompliancePage = () => navigate(getCompliancePageRoute());

//export const showDirectorDetailsPage = (directorId, directorName) => navigate(getDirectorDetailsPageRoute(directorId, directorName));

//export const showMovieDetailsPage = (movieId, movieName) => navigate(getMovieDetailsPageRoute(movieId, movieName));

//export const showSceneDetailsPage = (movieId, movieName, sceneId) => navigate(getSceneDetailsPageRoute(movieId, movieName, sceneId));

//export const showJustAdded = () => navigate(getJustAddedPageRoute());

//export const showJustAddedMovies = () => navigate(getJustAddedMoviesRoute());

//export const showJustAddedScenes = () => navigate(getJustAddedScenesRoute());

//export const showMostWatched = () => navigate(getMostWatchedPageRoute());

//export const showMostWatchedMovies = () => navigate(getMostWatchedMoviesRoute());

//export const showMostWatchedScenes = () => navigate(getMostWatchedScenesRoute());

//export const showTop10 = () => navigate(getTop10PageRoute());

//export const showOriginalsPage = () => navigate(getOriginalsPageRoute());

//export const showOriginalsMoviesPage = (page, sortBy) => navigate(getOriginalsMoviesPageRoute(page, sortBy));

//export const showOriginalsScenesPage = (page, sortBy) => navigate(getOriginalsScenesPageRoute(page, sortBy));



//export const showBrowsingPage = () => navigate(getBrowsingPageRoute());

export const showApplicationStart = () => navigate(getApplicationStartRoute());


//export const showStarsPage = (page, sort) => navigate(getStarsPageRoute(page, sort));

//export const showStarsDetails = (starId, starName) => navigate(getStarDetailsRoute(starId, starName));

//export const showStudiosPage = () => navigate(getStudiosRoute());

//export const showStudioDetailsPage = (id, name) => navigate(getStudioDetailsRoute(id, name));

//export const showThemesPage = () => navigate(getThemesRoute());

//export const showThemeDetailsPage = (id, name) => navigate(getThemeDetailsRoute(id, name));

//export const showSexActDetailsPage = (id, name) => navigate(getSexActDetailsRoute(id, name));

//export const showPlaylistsPage = () => navigate(getPlaylistsRoute());

//export const showMoviePlaylistPage = (playlistId, name) => navigate(getMoviePlaylistRoute(playlistId, name));

//export const showScenePlaylistPage = (playlistId, name) => navigate(getScenePlaylistRoute(playlistId, name));

//export const showCustomPlaylistPage = (playlistId, name) => navigate(getCustomPlaylistRoute(playlistId, name));

//export const showPartnersPage = () => navigate(getPartnersRoute());

//export const showMyAccountPage = () => navigate(getMyAccountRoute());

//export const showNewsLetterPage = () => navigate(getNewsLetterRoute());

//export const showTwitterPage = () => navigate(getTwitterRoute());

//export const showBillingAndSupport = () => navigate(getBillingAndSupportRoute());

 export const showHelpPage = () => navigate(getHelpRoute());

//export const showTermsOfUsePage = () => navigate(getTermsOfUseRoute());

//export const showPrivacyPolicyPage = () => navigate(getPrivacyPolicyRoute());

//export const showMyDealsPage = () => navigate(getMyDealsRoute());

//export const showMemberBenefitsPage = () => navigate(getMemberBenefitsPageRoute());

//export const showWeekendsPage = () => navigate(getWeekendsPageRoute());

export const showForgotPasswordPage = () => navigate(getForgotPasswordPageRoute());

//export const showEntityDetailsPage = (url) => {
  //const {
   // movieId, movieName, moviePlaylistId, playlistName, sceneIndex,
   // scenePlaylistId, studioId, studioName, themeId, themeName
 // } = parseBannerUrl(url);
 // if (movieId) {
  //  if (sceneIndex !== undefined) {
    //  showSceneDetailsPage(movieId, movieName, sceneIndex);
   // } else {
    //  showMovieDetailsPage(movieId, movieName);
   // }
 // } else if (url === '/weekends') {
  //  showWeekendsPage();
 // } else if (studioId) {
  //  showStudioDetailsPage(studioId, studioName);
 // } else if (themeId) {
 //   showThemeDetailsPage(themeId, themeName);
 // } else if (moviePlaylistId) {
 //   showMoviePlaylistPage(moviePlaylistId, playlistName);
 // } else if (scenePlaylistId) {
  //  showScenePlaylistPage(scenePlaylistId, playlistName);
 // } else {
  //  openNewBrowserTab(url);
 // }
//};




export const showResetPasswordDialog = () => navigate(getResetPasswordDialog());

export const showResetPasswordDialogPage = () => navigate(getResetPasswordDialogPage());

export const showOneRedirectPage = () => navigate(getOneRedirectPage());

export const showRedirectToPage = () => navigate(getRedirectToPage());



export const showWeekendsPage = () => navigate(getWeekendsPage());

export const showStandAlonePlayerPage = () => navigate(getStandAlonePlayerPageRoute());

export const showWeekendsToRedirectPageOne = () => navigate(getWeekendsToRedirectPageOne());

export const showWeekendsToRedirectPageTwp = () => navigate(getWeekendsToRedirectPageTwo());

export const showWeekendsToRedirectPageThree = () => navigate(getWeekendsToRedirectPageThree());







//export const showJoinNowPage = () => navigate(getJoinLinkRoute());


//export const showFavoritesPage = () => navigate(getFavoritesPageRoute());

//export const showLikesPage = () => navigate(getLikesPageRoute());

//export const showViewingHistoryPage = () => navigate(getViewingHistoryPageRoute());

//export const showNoSearchResultsPage = () => navigate(getNoSearchResultsRoute());

//export const showStarLetterListPage = (letter) => navigate(getStarLetterListRoute(letter));

//export const showStarMovies = (starId, starName, page, sortBy) => navigate(getStarMoviesRoute(starId, starName, page, sortBy));

//export const showStarScenes = (starId, starName, page, sortBy) => navigate(getStarScenesRoute(starId, starName, page, sortBy));


export const getURLPath = () => window?.location?.pathname || "/";