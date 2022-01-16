

import React, {Component} from 'react';
import './WeekendsPage.scss';
import WknsLogoHeader from "../../../components/WeekendsComponents/WknsLogoHeader";
import {Link} from "@reach/router";
import WknsComingSoon from "../../../components/WeekendsComponents/WknsComingSoon";
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
				src: 'https://d34kds0xkdmtq8.cloudfront.net/FSP053_SA.mp4',
				type: 'video/mp4'
			}
		],
		duration: undefined,
		thumbnail: [
			{
				src: ''
			}
		],
		poster: 'https://spotlight.nakedcdn.com/nakedsword/img/ns_play/top20nudescenes-mrman-16x9.jpg',
		name: ''
	}]
};










//import StandAlonePlayerComponent from "";
class MrMan2020 extends Component {

	render() {
		return (
			<div className="MrMan2020">
				<div className="wknsPageContentContainer">

					<WknsLogoHeader />


					<FullPlayer data = {data} />






{/*                     
      https://spotlight.nakedcdn.com/nakedsword/img/ns_play/top20nudescenes-mrman-16x9.jpg"
     
        <source src="https://d34kds0xkdmtq8.cloudfront.net/FSP053_SA.m
        */}
					<div className="WknsCopyWrap">
		<h2>
							NakedSword & Mr. Man Present
							<br />
							The Top 20 Nude Scenes on TV & Film
						</h2>

						<p>
							It's a tough job but somebody had to do it. We searched, scanned, and
							drooled over thousands of nude scenes from the expansive Mr. Man vaults
							to bring you the top 20 hottest celebrity nude scenes of ALL TIME! Get
							ready to take a trip to OZ where if you're Queer as Folk you'll be
							striking a POSE because it's in your True Blood. Get a glimpse of Ben
							Affleck's biggest asset, see a cum shot that was shown in theaters in 3D
							and see if your favorite personal spank bank clip made the cut!
							<br />
							<br />
							Hosts Sister Roma and Phil Henricks knew the ultimate countdown required
							the ultimate guest stars so they called some of their adult industry
							friends. Who is Falcon | NakedSword Exclusive Colton Reece's celebrity
							crush? What question did legendary director Chi Chi LaRue ask Phil that
							made him blush? What new hashtag did the hilarious and sexy duo Wesley
							Woods and Silvia Sage create? Was Boomer Banks really a "stunt dick" in
							a major motion picture? Find the answers to these questions and more in
							our latest original production only on Weekends at NakedSword!
						</p>
					</div>

					<WknsComingSoon />

					<WknsPreviousWeekendsBoxes />


					<div className="wknsNonMembUpsellWrap">
						<Link to="/join">
							<img
								src="https://spotlight.nakedcdn.com/nakedsword/img/ns_play/membership-banner.jpg"
								className="wknsNonMembUpsellImg"
								alt="become a member"
							/>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default MrMan2020;


