import React from 'react';
//import {Helmet} from "react-helmet";
//import '@fortawesome/fontawesome-free/css/all.min.css';
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

//import LoadingMask from "./components/LoadingMask/LoadingMask";
import MainDashboard from './pages/MainDashBoard/MainDashboard';
import {MiniPlayerContainer} from "@falconstudios/ns-player";
//import OutDatedBrowserComponent from "./pages/OutDatedBrowserComponent/OutDatedBrowserComponent";

import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/fantasy/index.css';
import 'videojs-playlist-ui/dist/videojs-playlist-ui.vertical.css';
//import 'react-image-lightbox/style.css';
//import Div100vh from 'react-div-100vh';
//import {isIE} from 'react-device-detect';
import logo from './falcon-ns-logo.png';
import './App.css';
import TagManager from 'react-gtm-module';

//import './styles/main.scss';
//import './App.scss';

const tagManagerArgs = {
 gtmId: 'GTM-M7XV3FB'
}
TagManager.initialize(tagManagerArgs)


function App() {
 window.dataLayer.push({ event: 'pageview' });

  return (
    //<Div100vh>
      <div className="App">
          <MainDashboard/>
<p>&nbsp;</p>



          <div className="App-content">




          </div>




       {/* <Helmet>
          <meta name="description" content={process.env.REACT_APP_SITE_DESCRIPTION}/>
        </Helmet>
        <Suspense fallback={<div className="SuspenseLoader">Loading...</div>}>
          {isIE ? <OutDatedBrowserComponent/> : <MainDashboard/>}
        </Suspense>
        <MiniPlayerContainer/>
        <LoadingMask/>
        */}

        <MiniPlayerContainer/>
        <header className="App-header">


           <div><img src={logo} className="App-logo" alt="logo" /></div>
            <div>
                <h4>
                    Stripped Down NS - Deployed to GitHub Pages
                </h4>
            <a
                className="App-link"
                href="https://ns-cubik.gitlab.io/ns-simplified" rel="noreferrer"
                target="_blank">https://ns-cubik.gitlab.io/ns-simplified
            </a>
               <p>&nbsp;</p> <p className="NotesToss"> Mirroring Enabled / Node Version Added</p>
            </div>
        </header>







      
      </div>
    //</Div100vh>
  );
}

export default App;




