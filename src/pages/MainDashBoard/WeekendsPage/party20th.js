

import React, {Component} from 'react';
import './WeekendsPage.scss';
import WknsLogoHeader from "../../../components/WeekendsComponents/WknsLogoHeader";
import {Link} from "@reach/router";
import WknsComingSoon from "../../../components/WeekendsComponents/WknsComingSoon";
import WknsPreviousWeekendsBoxes from "../../../components/WeekendsComponents/WknsPreviousWeekendsBoxes";
import {FullPlayer} from "@falconstudios/ns-player";



const data = {
	//common settings
	controls: undefined,
	height:1125,
	width:2000,
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
				src: 'https://d34kds0xkdmtq8.cloudfront.net/FSP052_SA.mp4',
				type: 'video/mp4'
			}
		],
		duration: undefined,
		thumbnail: [
			{
				src: ''
			}
		],
		poster: 'https://spotlight.nakedcdn.com/nakedsword/img/ns_play/NS20Party_16x9.jpg',
		name: '',
		width: '2000px',
		height: '1125px'
	}]
};



//import StandAlonePlayerComponent from "";
class Party20th extends Component {

	render() {
		return (
			<div className="Party20th">
				<div className="wknsPageContentContainer">

					<WknsLogoHeader />


					<FullPlayer data = {data} />

					{/* https://d34kds0xkdmtq8.cloudfront.net/FSP052_SA.mp4 */}

					<div className="WknsCopyWrap">

                    <h2>NAKEDSWORD'S 20TH ANNIVERSARY CELEBRATION</h2>
						<p>
							Dubbed "The Netflix of Gay Porn" by the SF Chronicle, NakedSword invites
							you to a celebration twenty years in the making! Join hosts Tim Valenti
							and Sister Roma for a virtual show jam-packed with celebrity guests,
							hilarious clips, stunning performances, porn swag giveaways and more! Go
							behind-the-scenes with LIVE guests including mr. Pam, Calvin Banks,
							Dakota Payne, Wesley Woods, Michael Stabile, Marc MacNamara, and
							California State Senator Scott Weiner. Plus, favorite moments from the
							Tim & Roma Show, Clips from NakedSword Originals most talked-about
							movies, a NakedSword Family Reunion Group Chat and more!
							<br />
							<br />
							Featuring appearances by Bruce Beckham, Theo Ford, Jackie Beat, Coco
							Peru, Shangela, Bruce Vilanch, Margaret Cho, Jake Sheers, Kathy Griffin,
							and more! DJ sets by superstars Chi Chi LaRue & Alam Wernik. Special
							performance by Miss Pineapple 2020 winner Gemini Dai.
							<br />
							<br />
							<img
								src="https://spotlight.nakedcdn.com/nakedsword/img/ns_play/wk-20th-guests.jpg"
								width="100%"
								height="auto"
								alt="Week 20th Guests"
							/>
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

export default Party20th;


