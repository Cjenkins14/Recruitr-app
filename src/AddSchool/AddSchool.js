import React, { Component } from 'react'
import './AddSchool.css'
import NavBar from '../Nav/Nav'
class AddSchool extends Component {

    handleSubmit = e => {
        e.preventDefault()
        const newSchool = {
            id: 5,
            name: e.target['school-name'].value
        }
        console.log(newSchool)
        this.props.handleNewSchool(newSchool)
        this.props.history.goBack()
    }

    render() {
        return (

            <main role="main">
                <NavBar />
                <header role="banner">
                    <h1>Recruitr</h1>
                </header>
                <section>
                    <form
                        onSubmit={this.handleSubmit}
                        className="school-form">
                        <label>Add a school</label>
                        <ul className="input-list">
                            <li>
                                <label htmlFor='school-name'>School Name</label>
                                <input type='text' id='school-name' required autoFocus />
                            </li>
                        </ul>
                        <button type="reset">Clear</button>
                        <button type="submit">Add</button>
                    </form>
                </section>
            </main>

        )
    }
}

export default AddSchool;