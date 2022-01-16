import React from 'react';
import '../../pages/MainDashBoard/WeekendsPage/WeekendsPage.scss';
import {Link} from "@reach/router";
export default class wknsPreviousWeekendsBoxes extends React.Component {


render() {
    return  (
        <div className="wknsPreviousWeekendsBoxes">

            <h4>COMPLIMENTARY TITLES NOW PLAYING</h4>
            <ul>
                <li>
                    <Link to="/pride2020">
                        <img
                            src="https://spotlight.nakedcdn.com/nakedsword/img/ns_play/prev-pride-boxcover.jpg"
                            alt="Pride Stories"
                        />
                    </Link>
                    <Link to="/pride2020" className="wknsPrevLinkTitle">
                        <div className="wknsPreviousTitle">
                            <div className="wknsInnerTitle">pride stories</div>
                            watch free
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to="/mrman2020">
                        <img
                            src="https://spotlight.nakedcdn.com/nakedsword/img/ns_play/top20nudescenes-mrman.jpg"
                            alt="mr. man top 20"
                        />
                    </Link>
                    <Link to="/mrman2020" className="wknsPrevLinkTitle">
                        <div className="wknsPreviousTitle">
                            <div className="wknsInnerTitle">mr. man top 20</div>
                            watch free
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to="/party20th">
                        <img
                            src="https://spotlight.nakedcdn.com/nakedsword/img/ns_play/prev-20thparty-FSP052_PCC_DVD.jpg"
                            alt="NakedSword 20 party"
                        />
                    </Link>
                    <Link to="/party20th" className="wknsPrevLinkTitle">
                        <div className="wknsPreviousTitle">
                            <div className="wknsInnerTitle">nakedsword 20 party</div>
                            watch free
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to="/mask4mask">
                        <img
                            src="https://spotlight.nakedcdn.com/nakedsword/img/ns_play/prev-mask4mask-boxcover.jpg"
                            alt="#mask4mask"
                        />
                    </Link>
                    <Link to="/mask4mask" className="wknsPrevLinkTitle">
                        <div className="wknsPreviousTitle">
                            <div className="wknsInnerTitle">#mask4mask</div>
                            watch free
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to="/misspineapple2021">
                        <img
                            src="https://spotlight.nakedcdn.com/nakedsword/img/ns_play/prev-misspineapple-2021.jpg"
                            alt="miss pineapple"
                        />
                    </Link>
                    <Link to="/misspineapple2021" className="wknsPrevLinkTitle">
                        <div className="wknsPreviousTitle">
                            <div className="wknsInnerTitle">miss pineapple</div>
                            watch free
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
  }
}

