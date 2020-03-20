import React, { Component } from 'react'
import './PlayerInfo.css'
import ReactPlayer from 'react-player'
import PlayerStats from '../PlayerStats/PlayerStats'
import NavBar from '../Nav/Nav'


class PlayerInfo extends Component {
    state = {
        contact: this.props.contact,
        playerStat: this.props.playerStats
    }



    findPlayer = (key) => {
        const player = this.state.playerStat.find(player => player.playerId == key)
        console.log(player)
        return player
    }
    findContact = (key) => {
        const contact = this.state.contact.find(contact => contact.playerId == key)
        console.log(contact)
        return contact
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.setState({
            contact: this.findContact(id),
            playerStat: this.findPlayer(id)
        }, () => { console.log(this.state.contact, this.state.playerStat) })

    }

    renderVidPlayer() {
        return (
            <div className="player-wrapper">
                <ReactPlayer url={this.state.contact.url}
                    className='player-div'
                    width='100%'
                    height='300px' />
            </div>
        )
    }
    renderPlayerInfo() {
        const info = this.state.contact

        return (
            <ul className='info-list'>
                <li >
                    Grad Date: {info.gradDate}
                </li>
                <li >
                    Position: {info.position}
                </li>
                <li >
                    Bat/Throw: {info.batThrow}
                </li>
                <li >
                    Date seen: {info.date}
                </li>
                <li >
                    Phone: {info.phone}
                </li>

            </ul>
        )
    }


    render() {

        return (
            <div className='player-info'>
                <main role="main">
                    <NavBar />
                    <header role="banner">
                        <h1>{this.state.contact.name}</h1>

                    </header>
                    <section className="player-info">
                        {/* use match.params to get id # for info.id.name */}
                        <div className="player-info">
                            {this.renderPlayerInfo()}
                        </div>

                        <div className="player-stats">
                            <PlayerStats playerStat={this.state.playerStat}
                                id={this.props.match.params.id} />
                        </div>
                        {this.renderVidPlayer()}
                    </section>
                </main>
            </div>
        )
    }
}

export default PlayerInfo;