import React, {Component} from 'react';
import { Link, Router} from "@reach/router";

//import { globalHistory, Location, Redirect, Link, Router} from "@reach/router";


//import AvailableOptions from "../../components/AvailableOptions/AvailableOptions";
//import MainDashboardView from "./MainDashboardView/MainDashboardView";
//import MainDashboardHeader from "./MainDashboardHeader/MainDashboardHeader";
import HelpPage from "./HelpPage/HelpPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import ResetPasswordDialogPage from "./ResetPasswordDialogPage/";
import OneRedirectPage from "./Redirects/OneRedirect.js";
import RedirectToPage from "./Redirects/RedirectToPage.js";
//import WeekendsLandingPage from "./WeekendsPage/WeekendsLandingPage.js";
import WeekendsToRedirectPageOne from "./WeekendsToRedirectPage/WeekendsToRedirectPageOne.js";
import WeekendsToRedirectPageTwo from "./WeekendsToRedirectPage/WeekendsToRedirectPageTwo.js";
import WeekendsToRedirectPageThree from "./WeekendsToRedirectPage/WeekendsToRedirectPageThree.js";
import Party20th from "./WeekendsPage/party20th.js";
import Pride2020 from "./WeekendsPage/pride2020.js";
import Mask4Mask from "./WeekendsPage/mask4mask.js";
import MissPineapple2021 from "./WeekendsPage/misspineapple2021.js";
import MrMan2020 from "./WeekendsPage/mrman2020.js";
import WeekendsPage from './WeekendsPage/WeekendsPage';
import StandAlonePlayerPage from "../StandAlonePlayerPage/StandAlonePlayerPage.js";
import {routes
} from "../../services/navigation/navigation.service.routes";
import {getPlayerConfig} from "../../services/player/player.service";
//import {getWhiteLabelConfig} from "../../services/properties/properties.service";
//import {logError} from "../../services/log/log.service";

//import {isWeb} from "../../services/util-service/util.service";

//import {CachingController} from "../../controllers/caching-controller/CachingController";
import {DashboardController} from "../../controllers/dashboard-controller/DashboardController";
//import {MainDashboardController} from "./MainDashboardController";
//import {SignInController} from "../../controllers/sign-in-controller/sign-in.controller";

import './MainDashboard.scss';
//import { getURLPath } from '../../services/navigation/navigation.service';
//import { throttle } from 'lodash';
//import { getUserNATSCode, setUserNATSCode } from '../../services/nats-service/nats.service';
//import BannerSetView from '../../components/BannerSetView/BannerSetView';
//import { isUserLoggedIn } from '../../services/token-service/token.service';



 //   class MainDashboard extends Component {
 // mainRef = React.createRef();

 // navigationBarPinned = false;

 // routeChangeListenerUnsubscribe;

 // state = {
 //   className: undefined,
 //   browse_config: undefined,
  //  dataLoaded: false,
 //   starsPageEnabled: 0,
 //   sideMenuVisible: false,
 //   whitelabelNatsCode: undefined
 // };

//  subscriptions = {};

 // timeoutId;

 // scrollEvent;

 // constructor(props) {
  //  super(props);
  //  this.subscriptions.scrollTopRequested = DashboardController.scrollTopRequested.subscribe
  //(this.scrollTop);
//    this.subscriptions.backgroundChangeRequested = DashboardController.
//backgroundChangeRequested.subscribe(this.onBackgroundChangeRequested);
//    window.addEventListener('resize', this.onResize);
 //   this.throttledScroll = throttle(this.onScroll, 1000);
 // }

 //componentDidMount() {
   //this.routeChangeListenerUnsubscribe = globalHistory.listen///(this.routeChangeListener);
   //const promises = [
    //this.getWhiteLabelConfig(),
   //this.getPlayerConfig()
   //];
  //Promise.all(promises)
 //  .then(this.setDataLoaded)
 //   .catch(this.onRequestFailure);
//}

//  componentWillUnmount() {
 //   for (const key in this.subscriptions) {
  //    this.subscriptions[key].unsubscribe();
 //   }
 //   window.removeEventListener('resize', this.onResize);
 //   this.clearSavedRoutes();
 //   this.routeChangeListenerUnsubscribe();
 // }

 // clearSavedRoutes = () => {
 //   let item = window.history.length;
 //   while (item) {
 //     localStorage.removeItem(`route-${item}`);
 //     item--;
 //   }
//  };

 // configureNATSToken = () => {
 //   const { whitelabelNatsCode } = this.state;

    // If a nats code exists, do not do anything
 //   if (getUserNATSCode()) return;

    // Get nats property from query
  //  const querySearch = new URLSearchParams(window.location.search);
//    const queryNatsCode = querySearch.get('nats');
    // If the query contains a nats code, save it
 //   if (queryNatsCode) { setUserNATSCode({nats_code: queryNatsCode}); return; }

    // If the property has a nats code saved, set the user to that nats code
 //   if (whitelabelNatsCode) { setUserNATSCode({nats_code: whitelabelNatsCode}); return;}
//  }
//

//getPlayerConfig = () => {
//   return getPlayerConfig()
//     .then(this.setPlayerConfig);
 //};

//  getWhiteLabelConfig = () => {
//    return getWhiteLabelConfig()
//      .then(this.loadWhiteLabelConfig);
//  };

//  handleMainContainerClick = (event) => {
 //   const {sideMenuVisible} = this.state;
//    if (sideMenuVisible) {
 //     this.setState({sideMenuVisible: false});
//    }
//    MainDashboardController.notifyMainDashboardClick(event);
//  };

//  loadWhiteLabelConfig = (response) => {
//    const {data} = response.data;
 //   const {browse_config, stars_page_enabled, nats_code} = data;
 //   DashboardController.setWhiteLabelConfig(data);
  //  this.setState({
 //     browse_config,
 //     whitelabelNatsCode: nats_code,
//      starsPageEnabled: stars_page_enabled
 //   });
 // };

//  onBackgroundChangeRequested = (background) => {
 //   if (!isWeb()) {
 //     let className;
 //     switch (background) {
 //       case 'white':
 //         className = 'WhiteBackground';
 //         break;
 //       case 'black':
//          className = 'BlackBackground';
 //         break;
 //       default:
 //         className = 'WhiteBackground';
 //         break;
 //     }
 //     this.setState({className});
 //   }
 // };

 // onRequestFailure = (error) => {
//    logError(error);
 // };

 // onResize = () => {
 //   if (this.timeoutId) {
 //     clearTimeout(this.timeoutId);
  //  }
 //   this.timeoutId = setTimeout(this.onResizeComplete, 200);
 // };
//
 // onResizeComplete = () => {
 //   this.setState({
 //     resizeTriggered: new Date().getTime()
 //   });
//    MainDashboardController.broadcastWindowResize();
 // };
//
//  onScroll = (event) => {
//    const scrollTop = event.target.scrollTop;
 //   const className = event.target.className;
 //   if (className === 'MainContent') {
  //    const mainDashboard = document.getElementsByClassName('MainDashboard')[0];
  //    if (scrollTop) {
  //      if (!this.navigationBarPinned) {
  //        this.navigationBarPinned = true;
 //         mainDashboard.classList.add('PinTop');
//     }
 //     } else {
 //       this.resetNavigationHeader();
 //     }
 //     MainDashboardController.notifyUserScroll();
//    }
 // };
//
 // renderLoading = () => {
 //   return (
 //     <ImageLoadingSkeleton className="Loading"/>
//    );
 // };
//
//  renderNotifications = () => {
 //   return (
 //     <Notifications/>
  //  );
 // };
//
//  renderSideMenu = () => {
 //   const {sideMenuVisible, starsPageEnabled} = this.state;
//    const className = sideMenuVisible ? 'Visible' : '';
 //   return (
 //     <SideMenu className={className}
  //              starsPageEnabled={starsPageEnabled}
 //               onItemClick={this.toggleMobileMenu}/>
 //   );
 // };
//
 // renderStarsPage = () => {
  //  let view = null;
  //  const {starsPageEnabled} = this.state;
 //   if (starsPageEnabled) {
  //    const baseRoute = getStarsBaseRoute();
  //    view = (
  //      <StarsPage path={`${baseRoute}/*`}/>
  //    );
 //   }
//
 //   return view;
 // };
//
 // renderWeekendsRedirects = () => {
 //   return (
 //     <React.Fragment>
  //      <Redirect to={`/${routes.weekends}/scaredstiff`} from="weekends-scaredstiff" noThrow/>
 //       <Redirect to={`/${routes.weekends}/darkmatter`} from="weekends-darkmatter" noThrow/>
 //       <Redirect to={`/${routes.weekends}/earthbound2020`} from="earthbound2020" noThrow/>
 //       <Redirect to={`/${routes.weekends}/howtomakeaporn2020`} from="howtomakeaporn2020" noThrow/>
 //       <Redirect to={`/${routes.weekends}/rawconstruction2020`} from="rawconstruction2020" noThrow/>
 //       <Redirect to={`/${routes.weekends}/fuckmyhusband2020`} from="fuckmyhusband2020" noThrow/>
   //     <Redirect to={`/${routes.weekends}/play22020`} from="play22020" noThrow/>
 //       <Redirect to={`/${routes.weekends}/play2`} from="weekends-play2" noThrow/>
  //      <Redirect to={`/${routes.weekends}/zario-travezz`} from="weekends-zario-travezz" //noThrow/>
  //      <Redirect to={`/${routes.weekends}/the-dirty-doctor`} from="weekends-the-dirty-doctor" noThrow/>
  //      <Redirect to={`/${routes.weekends}/the-stranger`} from="weekends-the-stranger" noThrow/>
 //       <Redirect to={`/${routes.weekends}/alam-live`} from="alam-live" noThrow/>
 //       <Redirect to={`/${routes.weekends}/tylerkayden`} from="weekends-tylerkayden" noThrow/>
 //       <Redirect to={`/${routes.weekends}/pride2020`} from="pride2020" noThrow/>
//      </React.Fragment>
 //   );
//  };
//
 // routeChangeListener = ({action}) => {
 //   CachingController.setTriggeredAction(action);
 // };
//
 // resetNavigationHeader = () => {
 //   if (this.navigationBarPinned) {
 //     this.navigationBarPinned = false;
 //     const mainDashboard = document.getElementsByClassName('MainDashboard')[0];
  //    mainDashboard.classList.remove('PinTop');
 //   }
//  };
//
 // setDataLoaded = () => {
 //   this.setState({
 //     dataLoaded: true
 //   }, this.configureNATSToken());
//  };
//
// setPlayerConfig = (response) => {
// const {propertyPlayerConfig} = response.data.data;
// DashboardController.setPlayerConfig(propertyPlayerConfig);
//  };
//
 // setPropertyAds = (response) => {
 //   let propertyAds;
 //   if (Object.keys(response.data.data.ads_config).length) {
 //     propertyAds = response.data.data.ads_config;
 //   }
 //   DashboardController.setPropertyAds(propertyAds);
//  };
//
 // scrollSideMenuTop = () => {
 //   const sideMenu = document.getElementsByClassName('SideMenu')[0];
 //   sideMenu.scrollTop = 0;
 // };

 // scrollTop = (value) => {
 //   const {current} = this.mainRef;
 //   if (current) {
  //    if (current.scrollTop || value) {
  //      current.scrollTop = value || 0;
  //    }
  //    const mainContainer = document.getElementsByClassName('MainContainer')[0];
   //   const contentRouter = mainContainer.children[1];
   //   contentRouter.scrollTop = value || 0;
 //   }
 // };
//
//  toggleMobileMenu = () => {
 //   if(SignInController.isSignInDisplayed()) {
 //     SignInController.closeSignInDialog();
   // }
//
 //   this.setState(prevState => {
 //     return {
 //       sideMenuVisible: !prevState.sideMenuVisible
  //    };
 //   }, this.scrollSideMenuTop);
 // };
//
 // renderMemberUpsellBottomBanner = () => {
 //   const urlPath = getURLPath();
 //   if (isUserLoggedIn() && (urlPath.includes("my-account") || urlPath.includes("/help"))//)
 //     return <BannerSetView setName="memberUpsellBottom"/>
//  }
//
 // render() {
 //   const {t} = this.props;
//    const {browse_config, className, dataLoaded} = this.state;
//
//    return (
 //     <div
 //       className={classnames([
 //         "MainDashboard",
  //        className,
  //        { "LoadInProgress": !dataLoaded },
 //       ])}
  //    >
  //      <MainDashboardHeader
  //        className="PrimaryHeader"
   //       renderHeaderMenu={true}
  //        primaryNavigation={true}
  //        browseConfig={browse_config}
   //       toggleMobileMenu={this.toggleMobileMenu}
  //        onLogoClick={this.handleMainContainerClick}
  //        path={`${routes.root}/*`}
 //       />
//       <div className="MainContent"
//             onScroll={(event) => { event.persist(); this.throttledScroll(event);}}
 //            ref={this.mainRef}>
 //         <div className="MainContent-inner">
//            {this.renderSideMenu()}
//            {this.renderNotifications()}
 //           <div className="MainContainer" onClick={this.handleMainContainerClick}>
//              {dataLoaded ?
 //             <Location>
 //             {({ location }) => (
//                <>
 //               <Router primary={false} location={location}>
 //                 <BillingSupportPage path={routes.billingSupport}/>
 //                 <CompliancePage path={routes.compliance}/>
  //                <DirectorPage path={`${routes.director}/:directorId/:directorName`}/>
 //                 <FavoritesPage path={getFavoritesPageRoute()}/>
 //                 <HelpPage path={routes.help}/>
 //                 <JustAddedPage path={`${routes.justAdded}/*`}/>
 //                 <JustAddedPage path={`${routes.mostWatched}/*`}/>
 //                 <LikesPage path={getLikesPageRoute()}/>
 //                 <MainDashboardView path={routes.root}/>
  //                <MainFeed path={routes.browse}/>
 //                 <MemberBenefitsPage path={routes.memberBenefits}/>
 //                 <MemberDealsPage path={routes.myDeals}/>
 //                 <MemberDealsPage path={routes.partners}/>
 //                 <MovieDetailsPage path={`${routes.movie}/:movieId/:movieName/scene///:sceneNumber`}/>
 //                 <MovieDetailsPage path={`${routes.movie}/:movieId/:movieName`}/>
 //                 <MyAccountPage path={routes.myAccount}/>
  //                <NewsLetterPage path={routes.newsletter}/>
 //                 <NotFound path={getNoSearchResultsRoute()}
 //                           title={t('MainDashboard.congratulations')}
 //                           iconClass="fas fa-exclamation-circle"
  //                          subtitleRowOne={t('MainDashboard.rowOne')}
  //                          subtitleRowTwo={t('MainDashboard.rowTwo')}/>
   //               <OriginalsPage path={`${routes.originals}`}/>
   //               <PlaylistsPage path={`${routes.playlists}/*`}/>
    //              <PrivacyPolicyPage path={routes.privacyPolicy}/>
 //                 {this.renderStarsPage()}
  //                <StudiosPage path={routes.studios}/>
  //                <StudioDetailsPage path={`${routes.studios}/:studioId/:studioName`}/>
  //                <TermsOfUsePage path={routes.termsOfUse}/>
   //               <TopTen path={routes.top10}/>
 //                 <SearchResultsPage path={`${routes.search}`}/>
 //                 <SeriesPage path={`${routes.series}/:seriesId`} />
 //                 <ThemesPage path={routes.themes}/>
 //                 <ThemeDetailsPage path={`${routes.theme}/:name/:id`}/>
//                  <ThemeDetailsPage path={`${routes.sexAct}/:name/:id`}/>
//                  <ViewingHistoryPage path={getViewingHistoryPageRoute()}/>
//                  <WeekendsPage path={`${routes.weekends}`}/>
 //                 <Pride2020 path={`${routes.pride2020}`}/>
 //                 <MissPineapple2021 path={`${routes.misspineapple2021}`}/>
 //                 <MrMan2020 path={`${routes.mrman2020}`}/>
  //                <Party20th path={`${routes.party20th}`}/>
 //                 <Mask4Mask path={`${routes.mask4mask}`}/>
 //                 <ForgotPasswordPage path={routes.forgotpasswordpage}/>
  //                <ResetPasswordDialogPage path={routes.resetpassworddialogpage}/>
 //                 <Redirect to={getJustAddedScenesRoute()} from={`${routes.justAdded}`} noThrow/>
 //                 <Redirect to={getMostWatchedScenesRoute()} from={`${routes.mostWatched}`} noThrow/>
 //                 <Redirect to={getMostWatchedScenesRoute()} from={`/mostwatched`} noThrow/>
 //                 <Redirect to={getOriginalsScenesPageRoute(1, 'Newest')} from={routes.originals} noThrow/>
//                  <NotFound default
 //                           linkWrapperClass="Exclamation"
 //                           iconClass="fas fa-exclamation"
 //                           title={t('MainDashboard.notFoundTitle')}
  //                          subtitleRowOne={t('MainDashboard.notFoundRowOne')}/>
  //              </Router>
  //              <MobileUserActions/>
  //              <AvailableOptions/>
  //              <LegalNotice/>
 //               {this.renderMemberUpsellBottomBanner(location)//}
  //              </>
 //             )}
 //             </Location>
 //             : this.renderLoading()}
  //          </div>
//          </div>
//        </div>
 //       <ModalContainer/>
 //     </div>
//    );
//  }
//}
//
//
//


// begin render simplified

class MainDashboard extends Component {



 componentDidMount() {
  //this.routeChangeListenerUnsubscribe = globalHistory.listen//(this.routeChangeListener);
  const promises = [
   //this.getWhiteLabelConfig(),
  this.getPlayerConfig()
  ];
 Promise.all(promises)
  .then(this.setDataLoaded)
   .catch(this.onRequestFailure);
}



getPlayerConfig = () => {
  return getPlayerConfig()
    .then(this.setPlayerConfig);
};

setPlayerConfig = (response) => {
  const {propertyPlayerConfig} = response.data.data;
  DashboardController.setPlayerConfig(propertyPlayerConfig);
   };

    render() {

        return (

    <div className="Route-Dashboard-Nav-Holder">
                <div className="RouteHolder">
                    <Router>
                        <showApplicationStart path="/" />
                        <HelpPage path={routes.help}/>
                        <ForgotPasswordPage path={routes.forgotpasswordpage}/>
                        <ResetPasswordDialogPage path={routes.resetpassworddialogpage}/>

                        <WeekendsPage path={routes.weekends}/>
               <Pride2020 path={routes.pride2020}/>
                <MissPineapple2021 path={routes.misspineapple2021}/>
                <MrMan2020 path={routes.mrman2020}/>
              <Party20th path={routes.party20th}/>
               <Mask4Mask path={routes.mask4mask}/>
                        <StandAlonePlayerPage path={routes.standaloneplayerpage}/>
                            <OneRedirectPage path={routes.oneredirectpage}/>
                            <RedirectToPage path={routes.redirecttopage}/>
                   <WeekendsToRedirectPageOne path={routes.weekendstoredirectpageone}/>
                        <WeekendsToRedirectPageTwo path={routes.weekendstoredirectpagetwo}/>
                        <WeekendsToRedirectPageThree path={routes.weekendstoredirectpagethree}/>


                    </Router>
                </div>
                    <div className="NavLinksVersion">
                    <Link to="/">Welcome</Link> | <Link to="/help">Help</Link> | <Link to="/forgotpasswordpage">Forgot Password Page</Link> | <Link to={"/weekends"}>Weekends</Link> | <Link to={"/standaloneplayerpage"}>Stand Alone Player Page</Link>
<br />

                        <br />
                        <Link to="/weekendstoredirectpageone">WeekendstoredirectPAGEONE</Link> | <Link to="/weekendstoredirectpagetwo">WeekendstoredirectPAGETWO</Link> | <Link to="/weekendstoredirectpagethree">WeekendstoredirectPAGETHREE</Link>
                    </div>

        <div className="MainDashboard">
                <div className="MainContent">
                    <div className="MainContent-inner">
                        <div className="MainContainer">

           </div>
                  </div>
                      </div>
                          </div>
                                         </div>
                                        );
                                    }
                                    }

                                    export default MainDashboard;