

import React, {Component} from 'react';
import './WeekendsPage.scss';



import WknsLogoHeader from "../../../components/WeekendsComponents/WknsLogoHeader";
import {Link} from "@reach/router";
import WknsComingSoon from "../../../components/WeekendsComponents/WknsComingSoon";
import WknsPreviousWeekendsBoxes from "../../../components/WeekendsComponents/WknsPreviousWeekendsBoxes";



import {
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
                src: 'https://d34kds0xkdmtq8.cloudfront.net/FSP045_SA.mp4',
                type: 'video/mp4'
            }
        ],
        duration: undefined,
        thumbnail: [
            {
                src: ''
            }
        ],
        poster: 'https://spotlight.nakedcdn.com/nakedsword/img/ns_play/mask-for-masc-FSP045_16x9.jpg',
        name: ''
    }]
};






class Mask4Mask extends Component {

	render() {
		return (

        <div className="mask4mask">
        <div className="wknsPageContentContainer">

            <WknsLogoHeader />

            <FullPlayer data = {data} /> 




<div className="WknsCopyWrap">
    <h2>#MASK4MASK</h2>
<p>
                    It's 2020 and everyone knows that a face covering is one of the most important tools we have in slowing the spread of
                COVID-19. Here at Falcon/NakedSword we know it's more than that - we know that wearing a mask is sexy! To prove it,
                we've asked
                some of your favorite stars to show us their mask game - and it's strong! No matter what their doing or why they wear
                one, these guys are protecting themselves and others, and damn, that's sexy!</p>
                <p>
                We hope your' you're staying safe, healthy and keeping it sexy! Let's flatten the curve by wearing face coverings, keeping 6
                feet physical distance, and staying home as much as possible. Together we can slow the spread of COVID-19  and flatten
                the curve. We did it before, we can do it again.
                </p>
                
                <p>
                    Featuring exclusive <Link to="/stars/31095/cade-maddox" target="_blank">Cade Maddox</Link>,
                    exclusive <Link to="/stars/121746/devin-franco" target="_blank">Devin Franco</Link>,
                    <Link to="/stars/132773/devin-trez" target="_blank">Devin Trez</Link>,
                    <Link to="/stars/99245/drew-sebastian" target="_blank">Drew Sebastian</Link>,
                    <Link to="/scenes/for/text/isaac%2bx" target="_blank">Isaac X</Link>,
                    <Link to="/stars/134442/johnny-ford" target="_blank">Johnny Ford</Link>,
                    <Link to="/stars/129432/liam-knox" target="_blank">Liam Knox</Link>,
                    <Link to="/stars/72459/logan-stevens" target="_blank">Logan Stevens</Link>,
                    <Link to="/stars/127105/max-adonis" target="_blank">Max Adonis</Link>,
                    <Link to="/stars/90408/trenton-ducati" target="_blank">Trenton Ducati</Link>,
                    <Link to="/stars/99971/boomer-banks" target="_blank">Boomer Banks</Link>,
                    <Link to="/stars/26872/bruce-beckham" target="_blank">Bruce Beckham</Link>,
                    <Link to="/stars/64012/max-konnor" target="_blank">Max Konnor</Link>,
                    <Link to="/stars/133891/sharok" target="_blank">Sharok</Link>,
                    <Link to="/scenes/for/text/shawn%2braymond" target="_blank">Shawn Raymond</Link>,
                    <Link to="/stars/31403/steve-cruz" target="_blank">Steve Cruz</Link>,
                    <Link to="/stars/127733/zario-travezz" target="_blank">Zario Travezz</Link>,
                    <Link to="/stars/134749/kaden-hylls" target="_blank">Kaden Hylls</Link>,
                    <Link to="/stars/35524/casey-everett" target="_blank">Casey Everett</Link>,
                    <Link to="/stars/129578/dillon-diaz" target="_blank">Dillon Diaz</Link>,
                    <Link to="/stars/63866/johnny-hill" target="_blank">Johnny Hill</Link>,
                    <Link to="/stars/131807/michael-boston" target="_blank">Michael Boston</Link>,
                    <Link to="/stars/127644/nick-fitt" target="_blank">Nick Fitt</Link>, and
                    <Link to="/stars/130354/clark-davis" target="_blank">Clark Davis</Link>
                    </p>
            <p>
                    Executive Producer Tim Valenti
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

export default Mask4Mask;


