import React, { Component } from 'react'
import './SchoolMain.css'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import NavBar from '../Nav/Nav'
import config from '../config'

class SchoolMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
            school: []
        }
    }
    static defaultProps = {
        onDeleteSchool: () => { },
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
        const schoolId = this.props.match.params.id
        let context = this.context

        fetch(`${config.API_ENDPOINT}/school/${schoolId}`, {
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
                context.deleteSchool(schoolId)
                this.props.onDeleteSchool(schoolId)
                this.props.history.push(`/main`)
            })
            .catch(error => {
                console.error({
                    error
                })
            })
    }

    findPlayers = (key) => {
        const playerInfo = this.context.playerInfo
        const players = Object.values(playerInfo).filter(player => player.schoolid === Number(key))
        console.log(players)
        return players
    }
    findSchool = (key) => {
        const schools = this.context.schools
        const school = schools.find(school => school.id === Number(key))
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
                        to={`/player/${player.playerid}`}
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
                <button
                    className='school-delete'
                    type='button'
                    onClick={this.handleClickDelete}
                >
                    Delete
                </button>
            </div>
        )
    }
}

export default SchoolMain;