import React, { Component } from 'react'
import './AddPlayer.css'
import NavBar from '../Nav/Nav'
class AddPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            school: this.props.school
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        const newPlayer = {
            name: e.target['player-name'].value,
            id: 5,
            schoolId: e.target['player-school'].value
        }
        console.log(newPlayer)
        const newContact = {
            playerId: 5,
            name: e.target['player-name'].value,
            school: e.target['player-school'].value,
            gradDate: e.target['grad-date'].value,
            batThrow: e.target['bat-throw'].value,
            date: e.target['date-seen'].value,
            phone: e.target['phone-number'].value,
            url: e.target['vid-url'].value,
        }
        const newPlayerStats = {
            playerId: 5,
            dash60: e.target['yard-dash'].value,
            plateToFirst: e.target['plate-first'].value,
            turnTime: e.target['turn-time'].value,
            exitVelo: e.target['exit-velo'].value,
            popTime: e.target['pop-time'].value,
            notes: e.target['eval-notes'].value
        }

        console.log(newPlayer, newContact, newPlayerStats)
        this.props.handleNewPlayer(newPlayer, newContact, newPlayerStats)
        this.props.history.goBack()
    }
    renderSchoolSelect() {
        return (Object.values(this.state.school).map(school => {
            return <option name="school-id" value={school.id}>{school.name}</option>
        })
        )
    }
    render() {
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
                                    <select id='player-school' required>
                                        {this.renderSchoolSelect()}
                                    </select>
                                </li>
                                <li>
                                    <label htmlFor='grad-date'>Grad Date:</label>
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
                                    <input type="date" id="date-seen" required />
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
                        </fieldset>
                        <label className='notes-textarea' htmlFor="eval-notes">Notes</label>
                        <input className="eval" type="textarea" id="eval-notes" /> <br />
                        <button type="reset">Clear</button>
                        <button type="Add">Add</button>
                    </form>
                </section>
            </main>

        )
    }
}

export default AddPlayer;