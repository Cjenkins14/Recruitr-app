import React from 'react'





export default function PlayerForm(state) {
    const createDefaultDate = () => {
        var date = new Date();
        var min_date = date.toISOString().slice(0, 10)
        return min_date
    };
    const renderSchoolSelect = () => {
        const schools = this.context.schools
        const selected = this.state.player.schoolid
        return (Object.values(schools).map(school => {
            if (school.id !== selected) {
                return <option name="school-id" value={school.id}>{school.name}</option>
            } else {
                return <option name="school-id" value={school.id} selected>{school.name}</option>
            }
        })
        )
    };

    return (
        <form className="player-form" onSubmit={this.handleSubmit}>
            <fieldset>
                <legend>Recruit Info</legend>
                <ul className="input-list">
                    <li>
                        <label htmlFor='player-name'>
                            Recruit Name:
                </label>
                        <input type='text' id='player-name' defaultValue={state.player.name} />
                    </li>
                    <li>
                        <label htmlFor='player-school'>School:</label>
                        <select id='player-school' required>

                            {renderSchoolSelect()}
                        </select>
                    </li>
                    <li>
                        <label htmlFor='grad-date'>Grad Year:</label>
                        <input type='number' id='grad-date' defaultValue={state.player.graddate} required />
                    </li>
                    <li>
                        <label htmlFor="position">Position:</label>
                        <input type="text" id="position" defaultValue={state.player.position} required />
                    </li>
                    <li>
                        <label htmlFor="bat-throw">Bat/Throw:</label>
                        <select id="bat-throw" defaultValue={state.player.batthrow} required>
                            <option>Bat</option>
                            <option>Throw</option>
                        </select>
                    </li>
                    <li>
                        <label htmlFor="date-seen">Date seen:</label>
                        <input type="date" id="date-seen" defaultValue={createDefaultDate()} required />
                    </li>
                    <li>
                        <label htmlFor="phone-number">Phone:</label>
                        <input type="text" id="phone-number" defaultValue={state.player.phone} required />
                    </li>
                    <li>
                        <label htmlFor="video"> Video URL:</label>
                        <input type="url" id="vid-url" defaultValue={state.player.url} />
                    </li>
                </ul>
            </fieldset>
            <fieldset>
                <legend>Recruit Stats</legend>
                <ul className="input-list">
                    <li>
                        <label htmlFor="yard-dash">60 yd:</label>
                        <input type="number" id="yard-dash" defaultValue={state.player.dash} />
                    </li>
                    <li>
                        <label htmlFor="plate-first">Home to 1st:</label>
                        <input type="number" id="plate-first" defaultValue={state.player.platefirst} />
                    </li>
                    <li>
                        <label htmlFor="turn-time">Turn time:</label>
                        <input type="number" id="turn-time" defaultValue={state.player.turntime} />
                    </li>
                    <li>
                        <label htmlFor="exit-velo">Exit velo:</label>
                        <input type="number" id="exit-velo" defaultValue={state.player.exitvelo} />
                    </li>
                    <li>
                        <label htmlFor="pop-time">Pop time:</label>
                        <input type="number" id="pop-time" defaultValue={state.player.poptime} />
                    </li>
                </ul>
                <label className='notes-textarea' htmlFor="eval-notes">Notes:</label> <br />
                <textarea
                    className="eval"
                    id="eval-notes"
                    defaultValue={state.player.notes} /> <br />
            </fieldset>

        </form>

    )
}