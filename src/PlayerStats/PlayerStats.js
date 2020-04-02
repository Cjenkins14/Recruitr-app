import React from 'react';
import './PlayerStats.css';

export default function PlayerStats(stats) {

    return (
        <ul className='stat-list'>
            <li>
                60 yd: {stats.dash}s
                </li>

            <li>
                Home to 1st: {stats.platefirst}s
                </li>

            <li>
                Turn time: {stats.turntime}s
                </li>
            <li>
                Exit velo: {stats.exitvelo}
            </li>
            <li>
                Pop time: {stats.poptime}
            </li>

        </ul>
    )
};


