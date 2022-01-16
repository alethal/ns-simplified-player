import React, {Component} from 'react';
import './WeekendsPage.scss';
import WknsLogoHeader from "../../../components/WeekendsComponents/WknsLogoHeader";
import {Link} from "@reach/router";
//import WknsComingSoon from "../../../components/WeekendsComponents/WknsComingSoon";
import WknsPreviousWeekendsBoxes from "../../../components/WeekendsComponents/WknsPreviousWeekendsBoxes";

import {
	//BaseVideoPlayerController,
	//VideoPlayController
	FullPlayer
} from '@falconstudios/ns-player';

const data = {
	//common settings
	controls: undefined,
	height:'',
	width:'100%',
	loop:true,
	muted:false,
	autoplay:false,
	//nsplayer
	ads: [],
	className: 'Player',
	fetchVideoThumbnails: undefined,
	isPreview: true,
	isHoverPreview: true,
	renderPreview: undefined,
	mapVideoThumbnails: undefined,
	onAddClick: undefined,
	onPreviewClick: undefined,
	playerConfiguration: undefined,
	videos: [{
		id: undefined,
		sources: [
			{
				src: 'https://d34kds0xkdmtq8.cloudfront.net/BGP028.mp4',
				type: 'video/mp4'
			}
		],
		duration: undefined,
		thumbnail: [
			{
				src: ''
			}
		],
		poster: 'https://spotlight.nakedcdn.com/nakedsword/img/ns_play/WNS_RentBoys_16x9.jpg',
		name: ''
	}]
};


//import StandAlonePlayerComponent from "";
class WeekendsPage extends Component {

	render() {
		return (
			<div className="wknsLandingWeekendsPage">
				<div className="wknsPageContentContainer">

					<WknsLogoHeader />

					{/* https://d34kds0xkdmtq8.cloudfront.net/BGP028.mp4 */}
					<FullPlayer data = {data} />




					<div className="WknsCopyWrap">
						<h2>RENT BOYS | WATCH FREE JANUARY 14-16</h2>
						<p>

							(German) Despised and suppressed to the fringe of society - this is the reality of male prostitutes in Berlin. Rosa von Praunheim acompanies them, telling stories and above all, their will to survive.
						</p>
					</div>



					<WknsPreviousWeekendsBoxes />


					<div className="wknsNonMembUpsellWrap">
						<Link to="/join">
							<img						src="https://spotlight.nakedcdn.com/nakedsword/img/ns_play/membership-banner.jpg"
														className="wknsNonMembUpsellImg"
														alt="become a member"/>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default WeekendsPage;


