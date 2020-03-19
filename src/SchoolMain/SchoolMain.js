import React, { Component } from 'react'
import './SchoolMain.css'
import { Link } from 'react-router-dom'

import NavBar from '../Nav/Nav'


class SchoolMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players: this.props.players,
            school: this.props.school
        }

    }


    findPlayers = (key) => {
        const players = Object.values(this.state.players).filter(player => player.schoolId == key)
        console.log(players)
        return players
    }
    findSchool = (key) => {
        const school = this.state.school.find(school => school.id == key)
        console.log(school)
        return school
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.setState({
            players: this.findPlayers(id),
            school: this.findSchool(id)
        }, () => { console.log(this.state.school, this.state.players) }
        )

    }


    renderPlayers() {
        return (
            Object.values(this.state.players).map(player =>
                <li>
                    <Link
                        to={`/player/${player.id}`}
                    >
                        {player.name}
                    </Link>
                </li>
            ))
    }
    render() {
        return (
            <div className='school-main'>
                <NavBar />
                <header role="banner">
                    <h1>{this.state.school.name}</h1>
                </header>
                <section className="prospects">
                    <h2>Select a recruit</h2>
                    <ul className="prospect-list">
                        {this.renderPlayers()}
                    </ul>
                </section>
                <Link to='/addplayer'>
                    <button>Add</button>
                </Link>
            </div>
        )
    }
}

export default SchoolMain;