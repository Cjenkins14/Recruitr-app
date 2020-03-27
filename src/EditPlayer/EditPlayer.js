import React, { Component } from 'react'
import NavBar from '../Nav/Nav'
import ApiContext from '../ApiContext'
import config from '../config'
class EditPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player: []
        }
    }

    static defaultProps = {
        history: {
            push: () => { }
        },
        match: {
            params: {}
        }

    }
    static contextType = ApiContext

    handleClickSubmit() {

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

    handleSubmit = e => {
        e.preventDefault()
        const id = this.props.match.params.id;
        const newPlayer = {
            name: e.target['player-name'].value,
            schoolid: e.target['player-school'].value,
            position: e.target['position'].value,
            graddate: e.target['grad-date'].value,
            batthrow: e.target['bat-throw'].value,
            date: e.target['date-seen'].value,
            phone: e.target['phone-number'].value,
            url: e.target['vid-url'].value,
            dash: e.target['yard-dash'].value,
            platefirst: e.target['plate-first'].value,
            turntime: e.target['turn-time'].value,
            exitvelo: e.target['exit-velo'].value,
            poptime: e.target['pop-time'].value,
            notes: e.target['eval-notes'].value
        }
        fetch(`${config.API_ENDPOINT}/player/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPlayer),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(player => {
                this.context.handleNewPlayer(player)
                this.props.history.push(`/player/${player.playerid}`)
            })
            .catch(error => {
                console.error({ error })
            })
    }


    renderSchoolSelect() {
        const schools = this.context.schools
        return (Object.values(schools).map(school => {
            return <option name="school-id" value={school.id}>{school.name}</option>
        })
        )
    }


    render() {
        console.log(this.state.player)
        return (

            <main role="main">
                <NavBar />
                <header role="banner">
                    <h1>Recruitr</h1>
                </header>
                <section>
                    <h2>Add a recruit</h2>
                    <form className="player-form" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>Recruit Info</legend>
                            <ul className="input-list">
                                <li>
                                    <label htmlFor='player-name'>
                                        Recruit Name:
                                        </label>
                                    <input type='text' id='player-name' required autoFocus />
                                </li>
                                <li>
                                    <label htmlFor='player-school'>School:</label>
                                    <select id='player-school' defaultValue={this.state.schoolid} required>
                                        {this.renderSchoolSelect()}
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor='grad-date'>Grad Date:</label>
                                    <input type='number' id='grad-date' defaultValue={this.state.graddate} required />
                                </li>
                                <li>
                                    <label htmlFor="position">Position:</label>
                                    <input type="text" id="position" defaultValue={this.state.position} required />
                                </li>
                                <li>
                                    <label htmlFor="bat-throw">Bat/Throw:</label>
                                    <select id="bat-throw" defaultValue={this.state.batthrow} required>
                                        <option>Bat</option>
                                        <option>Throw</option>
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor="date-seen">Date seen:</label>
                                    <input type="date" id="date-seen" defaultValue={this.state.date} required />
                                </li>
                                <li>
                                    <label htmlFor="phone-number">Phone:</label>
                                    <input type="text" id="phone-number" defaultValue={this.state.phone} required />
                                </li>
                                <li>
                                    <label htmlFor="video"> Video URL:</label>
                                    <input type="url" id="vid-url" defaultValue={this.state.url} />
                                </li>
                            </ul>
                        </fieldset>
                        <fieldset>
                            <legend>Recruit Stats</legend>
                            <ul className="input-list">
                                <li>
                                    <label htmlFor="yard-dash">60 yd:</label>
                                    <input type="number" id="yard-dash" defaultValue={this.state.dash} />
                                </li>
                                <li>
                                    <label htmlFor="plate-first">Home to 1st:</label>
                                    <input type="number" id="plate-first" defaultValue={this.state.platefirst} />
                                </li>
                                <li>
                                    <label htmlFor="turn-time">Turn time:</label>
                                    <input type="number" id="turn-time" defaultValue={this.state.turntime} />
                                </li>
                                <li>
                                    <label htmlFor="exit-velo">Exit velo:</label>
                                    <input type="number" id="exit-velo" defaultValue={this.state.exitvelo} />
                                </li>
                                <li>
                                    <label htmlFor="pop-time">Pop time:</label>
                                    <input type="number" id="pop-time" defaultValue={this.state.poptime} />
                                </li>
                            </ul>
                        </fieldset>
                        <label className='notes-textarea' htmlFor="eval-notes">Notes</label>
                        <input
                            className="eval"
                            type="textarea"
                            id="eval-notes"
                            defaultValue={this.state.notes} /> <br />
                        <button type="reset">Clear</button>
                        <button type="Add">Add</button>
                    </form>
                </section>
            </main>

        )
    }
}

export default EditPlayer;