import React, { Component } from 'react';
import './AddPlayer.css';
import NavBar from '../Nav/Nav';
import config from '../config';
import ApiContext from '../ApiContext';

class AddPlayer extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        }
    };
    static contextType = ApiContext;


    handleSubmit = e => {
        e.preventDefault()
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
        fetch(`${config.API_ENDPOINT}/player`, {
            method: 'POST',
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
    };

    // render options for select
    renderSchoolSelect() {
        const schools = this.context.schools
        return (Object.values(schools).map(school => {
            return <option name="school-id" value={school.id}>{school.schoolname}</option>
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
                    <h1>Add a recruit</h1>
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
                                    <input type='text' id='player-name' required autoFocus />
                                </li>
                                <li>
                                    <label htmlFor='player-school'>School:</label>
                                    <select id='player-school' required>
                                        {this.renderSchoolSelect()}
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor='grad-date'>Grad Year:</label>
                                    <input type='number' id='grad-date' required />
                                </li>
                                <li>
                                    <label htmlFor="position">Position:</label>
                                    <input type="text" id="position" required />
                                </li>
                                <li>
                                    <label htmlFor="bat-throw">Bat/Throw:</label>
                                    <select id="bat-throw" required>
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
                                    <input type="text" id="phone-number" required />
                                </li>
                                <li>
                                    <label htmlFor="video"> Video URL:</label>
                                    <input type="url" id="vid-url" />
                                </li>
                            </ul>
                        </fieldset>
                        <fieldset>
                            <legend>Recruit Stats</legend>
                            <ul className="input-list">
                                <li>
                                    <label htmlFor="yard-dash">60 yd:</label>
                                    <input type="number" id="yard-dash" required />
                                </li>
                                <li>
                                    <label htmlFor="plate-first">Home to 1st:</label>
                                    <input type="number" id="plate-first" required />
                                </li>
                                <li>
                                    <label htmlFor="turn-time">Turn time:</label>
                                    <input type="number" id="turn-time" required />
                                </li>
                                <li>
                                    <label htmlFor="exit-velo">Exit velo:</label>
                                    <input type="number" id="exit-velo" required />
                                </li>
                                <li>
                                    <label htmlFor="pop-time">Pop time:</label>
                                    <input type="number" id="pop-time" />
                                </li>
                            </ul>
                            <label className='notes-textarea' htmlFor="eval-notes">Notes:</label> <br />
                            <textarea className="eval" id="eval-notes" /> <br />
                        </fieldset>
                        <section>
                            <button
                                className='add-button'
                                type="Add"
                            >
                                Add
                        </button>
                            <button
                                className='reset-button'
                                type="reset"
                                value='Reset form'
                            >
                                Clear
                        </button>
                        </section>

                    </form>
                </section>
            </main>

        )
    };
};

export default AddPlayer;