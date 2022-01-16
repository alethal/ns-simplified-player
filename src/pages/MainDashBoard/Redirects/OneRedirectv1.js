import React, {Component} from 'react';
import './RedirectPage.scss';
import OneRedirectComponent from "../../../components/OneRedirectComponent/OneRedirectComponent";
import RedirectPageComponent from "../../components/RedirectPageComponent/RedirectPageComponent.js"
import {Link, Redirect, Router} from "@reach/router";
import HelpPage from "../HelpPage/HelpPage";
import {routes} from "../../../services/navigation/navigation.service.routes";
import ForgotPasswordPage from "../ForgotPasswordPage";
import ResetPasswordDialogPage from "../ResetPasswordDialogPage";
import RedirectToPage from "./RedirectToPage";
import WeekendsLandingPage from "../WeekendsPage/WeekendsLandingPage";
import StandAlonePlayerPage from "../StandAlonePlayerPage/StandAlonePlayerPage";
import StandAlonePlayerComponent from "../../../components/StandAlonePlayerComponent/StandAlonePlayerComponent";
//import {showApplicationStart} from "../../services/navigation/navigation.service";


class OneRedirectPage extends Component {


    render() {
        return (


            <div className="RedirectPage">

                <OneRedirectComponent />
                <p>will redirect <Link to="/redirecttopage">RedirectToPage</Link></p>
                <div className="RouteHolder">
                    <Router>

                        <HelpPage path={routes.help}/>
                        <ForgotPasswordPage path={routes.forgotpasswordpage}/>
                        <ResetPasswordDialogPage path={routes.resetpassworddialogpage}/>
                        <OneRedirectPage path={routes.oneredirectpage}/>
                        <RedirectToPage path={routes.redirecttopage}/>
                        <WeekendsLandingPage path={routes.weekendslandingpage}/>
                        <StandAlonePlayerPage path={routes.standaloneplayerpage}/>
                        <Redirect from="oneredirectpage" to="weekendslandingpage"  noThrow />
                        <StandAlonePlayerComponent path="../../../components/StandAlonePlayerComponent/StandAlonePlayerComponent" component={StandAlonePlayerComponent} />
                        {/*<Router>
                            <MyRoute path="/*" component={MyOne} />
                            <MyRoute path="/home" component={MyHome} />
                            <MyRoute path="/two" component={MyTwo} />}
                        </Router>
                        */}
                    </Router>

                    {/*  <div className="NavLinksVersion">
                        <Router path='/standaloneplayercomponent' component={StandAlonePlayerComponent} />
                        <Link to="/standaloneplayercomponent">StandAloneComponent</Link>
                    </div>
                    */}
                    <

                </div>
            </div>
        );
    }
}


export default OneRedirectPage;








