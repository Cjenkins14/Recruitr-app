import React, { Component } from 'react'
import './PlayerStats.css'

class PlayerStats extends Component {
    state = {
        stats: this.props.playerStat
    }

    findPlayer = () => {
        const stats = Object.values(this.state.stats)
        return stats.find(stat => stat.playerId == this.props.id)
    }

    componentDidMount() {
        this.setState({
            stats: this.findPlayer()
        })
    }

    render() {
        const stats = this.state.stats

        return (
            <ul className='stat-list'>
                <li>
                    60 yd: {stats.dash60}s
                </li>

                <li>
                    Home to 1st: {stats.plateToFirst}s
                </li>

                <li>
                    Turn time: {stats.turnTime}s
                </li>
                <li>
                    Exit velo: {stats.exitVelo}
                </li>
                <li>
                    Pop time: {stats.popTime}
                </li>

            </ul>
        )
    }
}

export default PlayerStats