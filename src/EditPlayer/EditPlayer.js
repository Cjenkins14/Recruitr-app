import React, { Component } from 'react';
import NavBar from '../Nav/Nav';
import ApiContext from '../ApiContext';
import config from '../config';
import './EditPlayer.css';


class EditPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            player: []
        }
    };

    static defaultProps = {
        history: {
            push: () => { }
        },
        match: {
            params: {}
        }
    };
    static contextType = ApiContext;



    findPlayer = (key) => {
        const playerInfo = this.context.playerInfo
        const player = playerInfo.find(player => player.playerid === Number(key))
        return player
    };

    componentDidMount() {
        let id = this.props.match.params.id
        fetch(`${config.API_ENDPOINT}/player/${id}`)
            .then((playerRes) => {
                if (!playerRes.ok)
                    return playerRes.json().then(e => Promise.reject(e));
                return playerRes.json()
            })
            .then((player) => {
                this.setState({
                    player: player
                })
            })
            .catch(error => {
                console.log(error)
            })
    };

    handleSubmit = e => {
        e.preventDefault()
        const id = this.props.match.params.id;
        const editPlayer = {
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
            body: JSON.stringify(editPlayer),
        })
            .then(response => response.json())
            .then(player => {

                this.context.handlePlayerUpdate(player, id)
            })
            .then(
                this.props.history.push(`/main`)
            )
            .catch(error => {
                console.error({ error })
            })
    };

    // render options for select
    renderSchoolSelect() {
        const schools = this.context.schools
        const selected = this.state.player.schoolid
        return (Object.values(schools).map(school => {
            if (school.id !== selected) {
                return <option name="school-id" value={school.id}>{school.schoolname}</option>
            } else {
                return <option name="school-id" value={school.id} selected>{school.schoolname}</option>
            }
        })
        )
    };

    // format date for input
    createDefaultDate() {
        var date = new Date();
        var min_date = date.toISOString().slice(0, 10)
        return min_date
    };

    render() {

        return (

            <main role="main">
                <NavBar history={this.props.history} />
                <header role="banner">
                    <h1>{this.state.player.name}</h1>
                </header>
                <section>

                    <form className="player-form" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>Recruit Info</legend>
                            <ul className="input-list">
                                <li>
                                    <label htmlFor='player-name'>
                                        Recruit Name:
                                        </label>
                                    <input type='text' id='player-name' defaultValue={this.state.player.name} />
                                </li>
                                <li>
                                    <label htmlFor='player-school'>School:</label>
                                    <select id='player-school' required>

                                        {this.renderSchoolSelect()}
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor='grad-date'>Grad Year:</label>
                                    <input type='number' id='grad-date' defaultValue={this.state.player.graddate} required />
                                </li>
                                <li>
                                    <label htmlFor="position">Position:</label>
                                    <input type="text" id="position" defaultValue={this.state.player.position} required />
                                </li>
                                <li>
                                    <label htmlFor="bat-throw">Bat/Throw:</label>
                                    <select id="bat-throw" defaultValue={this.state.player.batthrow} required>
                                        <option>Bat</option>
                                        <option>Throw</option>
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor="date-seen">Date seen:</label>
                                    <input type="date" id="date-seen" defaultValue={this.createDefaultDate()} required />
                                </li>
                                <li>
                                    <label htmlFor="phone-number">Phone:</label>
                                    <input type="text" id="phone-number" defaultValue={this.state.player.phone} required />
                                </li>
                                <li>
                                    <label htmlFor="video"> Video URL:</label>
                                    <input type="url" id="vid-url" defaultValue={this.state.player.url} />
                                </li>
                            </ul>
                        </fieldset>
                        <fieldset>
                            <legend>Recruit Stats</legend>
                            <ul className="input-list">
                                <li>
                                    <label htmlFor="yard-dash">60 yd:</label>
                                    <input type="number" id="yard-dash" defaultValue={this.state.player.dash} />
                                </li>
                                <li>
                                    <label htmlFor="plate-first">Home to 1st:</label>
                                    <input type="number" id="plate-first" defaultValue={this.state.player.platefirst} />
                                </li>
                                <li>
                                    <label htmlFor="turn-time">Turn time:</label>
                                    <input type="number" id="turn-time" defaultValue={this.state.player.turntime} />
                                </li>
                                <li>
                                    <label htmlFor="exit-velo">Exit velo:</label>
                                    <input type="number" id="exit-velo" defaultValue={this.state.player.exitvelo} />
                                </li>
                                <li>
                                    <label htmlFor="pop-time">Pop time:</label>
                                    <input type="number" id="pop-time" defaultValue={this.state.player.poptime} />
                                </li>
                            </ul>
                            <label className='notes-textarea' htmlFor="eval-notes">Notes:</label> <br />
                            <textarea
                                className="eval"
                                id="eval-notes"
                                defaultValue={this.state.player.note} /> <br />
                        </fieldset>
                        <button className='submit-button' type="submit">Update</button>
                        <button className='reset-button' type="reset">Clear</button>
                    </form>
                </section>
            </main>

        )
    }
};

export default EditPlayer;