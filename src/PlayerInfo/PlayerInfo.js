import React, { Component } from 'react'
import './PlayerInfo.css'
import VidPlayer from '../ReactPlayer/ReactPlayer'
import PlayerStats from '../PlayerStats/PlayerStats'
import PlayerContact from '../PlayerContact/PlayerContact'
import NavBar from '../Nav/Nav'
import ApiContext from '../ApiContext'

class PlayerInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player: []
        }
    }

    static contextType = ApiContext


    findPlayer = (key) => {
        const playerInfo = this.context.playerInfo
        const player = playerInfo.find(player => player.playerid === Number(key))
        console.log(player)
        return player
    }
    // findContact = (key) => {
    // const contact = this.state.contact.find(contact => contact.playerId == key)
    // console.log(contact)
    // return contact
    // }

    componentDidMount() {
        const id = this.props.match.params.id
        this.setState({
            player: this.findPlayer(id)
        }, () => { console.log(this.state.player) })

    }

    render() {

        return (
            <div className='player-info'>
                <main role="main">
                    <NavBar />
                    <header role="banner">
                        <h1>{this.state.player.name}</h1>

                    </header>
                    <section className="player-info">
                        <div className="player-info">
                            {PlayerContact(this.state.player)}
                        </div>

                        <div className="player-stats">
                            {PlayerStats(this.state.player)}
                        </div>
                        {VidPlayer(this.state.player)}
                    </section>

                </main>
            </div>
        )
    }
}

export default PlayerInfo;