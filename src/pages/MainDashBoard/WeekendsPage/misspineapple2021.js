


import React, {Component} from 'react';
import './WeekendsPage.scss';
import {
	//BaseVideoPlayerController,
	//VideoPlayController
	FullPlayer
} from '@falconstudios/ns-player';

import WknsLogoHeader from "../../../components/WeekendsComponents/WknsLogoHeader";
import {Link} from "@reach/router";
import WknsComingSoon from "../../../components/WeekendsComponents/WknsComingSoon";
import WknsPreviousWeekendsBoxes from "../../../components/WeekendsComponents/WknsPreviousWeekendsBoxes";


const data = {
	//common settings
	controls: true,
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
				src: 'https://d34kds0xkdmtq8.cloudfront.net/FSP056_SA.mp4',
				type: 'video/mp4'
			}
		],
		duration: undefined,
		thumbnail: [
			{
				src: ''
			}
		],
		poster: 'https://spotlight.nakedcdn.com/nakedsword/img/ns_play/WFS_WNS_MissPineapple_16x9_Recording.jpg',
		name: ''
	}]
};











class MissPineapple2021 extends Component {
	render() {
		return (

			<div className="MissPineapple2021">
				<div className="wknsPageContentContainer">

					<WknsLogoHeader />


					<FullPlayer data = {data} /> 




					<div className="WknsCopyWrap">
					<h2>Miss Pineapple 2021 | WATCH FREE AUGUST 13 - AUGUST 15</h2>
					<p>
						The worlds of porn and drag collide in a spectacular event that
						celebrates diversity and self-expression while raising money
						pineapplesupport.org, providing free and subsidized mental health
						services to the adult industry.
					</p>
					<p>
						Seabrook, and Adrian Hart turn into stunning dolls and compete for the
						coveted title of Miss Pineapple 2021. Starring Dakota Payne, aka Miss
						Pineapple 2020 Gemini Dai, hosts Marc MacNamara and Sister Roma and
						celebrity guest judges the "Dynamic Duo of Porn" Wesley Woods and Silvia
						Saige, Falcon|NakedSword Superstar Exclusive Max Konnor and RuPaul's
						Drag Race and All-Stars fan favorite Detox!

					</p>
					</div>

					<WknsComingSoon />

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

export default MissPineapple2021;









