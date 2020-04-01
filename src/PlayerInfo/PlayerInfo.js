import React, { Component } from 'react'
import './PlayerInfo.css'
import VidPlayer from '../ReactPlayer/ReactPlayer'
import PlayerStats from '../PlayerStats/PlayerStats'
import PlayerContact from '../PlayerContact/PlayerContact'
import NavBar from '../Nav/Nav'
import ApiContext from '../ApiContext'
import config from '../config'
import { Link } from 'react-router-dom'

class PlayerInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player: []
        }
    }
    static defaultProps = {
        onDeletePlayer: () => { },
        history: {
            push: () => { }
        },
        match: {
            params: {}
        }

    }

    static contextType = ApiContext

    handleClickDelete = e => {
        e.preventDefault()
        const playerId = this.props.match.params.id


        fetch(`${config.API_ENDPOINT}/player/${playerId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res
            })
            .then(() => {
                this.context.deletePlayer(playerId)
                this.props.onDeletePlayer(playerId)
                this.props.history.goBack()
            })
            .catch(error => {
                console.error({
                    error
                })
            })
    }

    findPlayer = (key) => {
        const playerInfo = this.context.playerInfo
        const player = playerInfo.find(player => player.playerid === Number(key))
        console.log(player)
        return player
    }


    componentDidMount() {
        const id = this.props.match.params.id
        this.setState({
            player: this.findPlayer(id)
        }, () => { console.log(this.state.player) })

    }

    render() {
        const id = this.props.match.params.id

        return (
            <div className='player-info'>
                <main role="main">
                    <NavBar history={this.props.history} />
                    <header role="banner">
                        <h1>{this.state.player.name}</h1>

                    </header>
                    <section className="player">
                        <div className="player-info">
                            {PlayerContact(this.state.player)}
                        </div>

                        <div className="player-stats">
                            {PlayerStats(this.state.player)}
                        </div>
                    </section>
                    <label htmlFor='player-notes'>Notes:</label> <br />
                    <p>{this.state.player.notes}</p>
                    <div className='vid-player'>
                        {VidPlayer(this.state.player)}
                    </div>
                    <section>
                        <button
                            className='delete-player'
                            type='button'
                            onClick={this.handleClickDelete}
                        >
                            Delete
                    </button>

                        <Link to={`/editplayer/${id}`}>
                            <button className='edit-player'>
                                Edit
                        </button>
                        </Link>
                    </section>
                </main>
            </div>
        )
    }
}

export default PlayerInfo;