import React from 'react';
import ReactPlayer from 'react-player';

export default function VidPlayer(player) {
    return (
        <div className="player-wrapper">
            <ReactPlayer url={player.url}
                className='player-div'
                width='100%'
                height='300px' />
        </div>
    )
};