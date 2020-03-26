import React, { Component } from 'react'
import './AddSchool.css'
import NavBar from '../Nav/Nav'
import config from '../config'
import ApiContext from '../ApiContext'


class AddSchool extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        }
    }
    static contextType = ApiContext

    handleSubmit = e => {
        e.preventDefault()
        const newSchool = {
            name: e.target['school-name'].value
        }
        fetch(`${config.API_ENDPOINT}/school/add`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSchool),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(school => {
                this.context.handleNewSchool(school)
                this.props.history.push(`/main`)
            })
            .catch(error => {
                console.error({ error })
            })
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