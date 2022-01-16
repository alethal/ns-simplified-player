

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
				src: 'https://d2v6tybc9768mv.cloudfront.net/FSP041_SA.mp4',
				type: 'video/mp4'
			}
		],
		duration: undefined,
		thumbnail: [
			{
				src: ''
			}
		],
		poster: 'https://spotlight.nakedcdn.com/nakedsword/img/ns_play/pride2020_16x9.jpg',
		name: ''
	}]
};




//import StandAlonePlayerComponent from "";
class Pride2020 extends Component {

	render() {
		return (
			<div className="Pride2020">
				<div className="wknsPageContentContainer">

					<WknsLogoHeader />


					<FullPlayer data = {data} />



					<div className="WknsCopyWrap">
					<h2>PRIDE: PORNSTAR COMING OUT STORIES 2020</h2>
						<p>Join us here at Weekends at NakedSword as we celebrate PRIDE with these intimate and authentic coming out stories from
              some of the biggest stars in gay porn. These relatable accounts will engage, inspire and tug at your heartstrings.
          </p>
           FEATURING:  <Link to="/stars/128773/august-alexander" target="_blank">August Alexander</Link>,
					<Link to="/stars/30823/leo-forte" target="_blank">Leo Forte</Link>,
					<Link to="/stars/121217/beaux-banks">Beaux Banks</Link>,
					<Link to="/stars/121827/skyy-knox" target="_blank">Skyy Knox</Link>,
					<Link to="/stars/121747/josh-moore" target="_blank">Josh Moore</Link>,
					<Link to="/stars/116348/dante-colle" target="_blank">Dante Colle</Link>,
					<Link to="/stars/102727/mickey-taylor" target="_blank">Mickey Taylor</Link>,
					<Link to="/stars/31095/cade-maddox" target="_blank">Cade Maddox</Link>,
					<Link to="/stars/99943/adam-ramzi" target="_blank">Adam Ramzi</Link>,
					<Link to="/stars/107547/adrian-hart" target="_blank">Adrian Hart</Link>,
					<Link to="/stars/72459/logan-stevens" target="_blank">Logan Stevens</Link>,
						Sharok,
					<Link to="/stars/99971/boomer-banks" target="_blank">Boomer Banks</Link>,
					<Link to="/stars/129879/colton-reece" target="_blank">Colton Reece</Link>,
					<Link to="/stars/64012/max-konnor" target="_blank">Max Konnor</Link>,
					<Link to="stars/126429/riley-mitchel" target="_blank">Riley Mitchel</Link>,
					<Link to="/stars/98082/sean-zevran" target="_blank">Sean Zevran</Link>,
					<Link to="/stars/127923/wade-wolfgar" target="_blank">Wade Wolfgar</Link>,
					<Link to="/stars/127733/zario-travezz" target="_blank">Zario Travezz</Link>,
					<Link to="/stars/121746/devin-franco" target="_blank">Devin Franco</Link>,
					<Link to="/stars/99245/drew-sebastian" target="_blank">Drew Sebastian</Link>,
					<Link to="/stars/109007/liam-riley" target="_blank">Liam Riley</Link>,
					<Link to="/stars/127642/nic-sahara" target="_blank">Nic Sahara</Link> and
					<Link to="/stars/129147/steven-lee" target="_blank">Steven Lee</Link>.



					</div>
					{/* -- WknsCopyWrap -- */}

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

export default Pride2020;


