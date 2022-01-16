import React from 'react'
import "./StandAlonePlayerComponent.scss"
import {FullPlayer} from '@falconstudios/ns-player'

const StandAlonePlayerComponent = () => {

    //const renderPlaylistSelection = (data) => {
    // This function needs to return mapped custom playlist
    //};

    const data = {
        videos: [{
            sources: [
                {
                    src: "https://d34kds0xkdmtq8.cloudfront.net/FFC049_SA3.mp4"
                    // type: 'application/x-mpegURL'
                }
            ],
            poster: "https://spotlight.nakedcdn.com/nakedsword/img/ns_play/WNS_Wrapped_16x9.jpg",
            name: "Wrapped"
        }]
    };


    return (
        <FullPlayer data={data} onFullPlayerInitialized={this.onFullPlayerInitialized}/>
    )
}
export default StandAlonePlayerComponent();