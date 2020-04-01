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
            school: {}
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

    static contextType = ApiContext;

    handleClickDelete = e => {
        e.preventDefault()
        const schoolId = this.props.match.params.id


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
                this.context.deleteSchool(schoolId)
                this.props.onDeleteSchool(schoolId)
                this.props.history.push('/main')
            })
            .catch(error => {
                console.error({
                    error
                })
            })
    }

    findPlayers = (key) => {

        console.log(this.context)
        const playerInfo = this.context.playerInfo
        console.log(playerInfo)
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
                <li className='player-list'>
                    <Link
                        to={`/player/${player.playerid}`}
                    >
                        <button className='player-button'>
                            {player.name}
                        </button>
                    </Link>
                </li>
            ))
    }

    render() {

        return (
            <ApiContext.Consumer>
                {(context) => (
                    <div className='school-main'>
                        <NavBar history={this.props.history} />
                        <header role="banner">
                            <h1>{this.state.school.name}</h1>
                        </header>
                        <h2 className='select-head'>Select a recruit</h2>
                        <section className="recruits">

                            <ul className="recruit-list">
                                {this.renderPlayers()}
                            </ul>
                        </section>
                        <section>
                            <Link to='/addplayer'>
                                <button className='player-add'>Add</button>
                            </Link>
                            <button
                                className='school-delete'
                                type='button'
                                onClick={this.handleClickDelete}
                            >
                                Delete
                        </button>
                        </section>
                    </div>
                )}
            </ApiContext.Consumer>
        )

    }

}


export default SchoolMain;