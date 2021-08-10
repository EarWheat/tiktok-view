import React from 'react';
import { Player } from 'video-react';

class Video extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            playerSource: 'https://mp4.vjshi.com/2020-03-13/575bf5e035a1c0b1c820b03f99e99ce6.mp4',
            // inputVideoUrl: 'http://www.w3schools.com/html/mov_bbb.mp4'
        };

        // this.handleValueChange = this.handleValueChange.bind(this);
        // this.updatePlayerInfo = this.updatePlayerInfo.bind(this);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.playerSource !== prevState.playerSource) {
    //         this.player.load();
    //     }
    // }

    render() {
        return (
            <Player
                ref={player => {
                    this.player = player;
                }}
                videoId="video-1"
            >
                <source src={this.state.playerSource} />
            </Player>
        )
    }
}

export default Video;