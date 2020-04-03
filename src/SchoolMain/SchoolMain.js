import React, { Component } from 'react';
import './SchoolMain.css';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';
import NavBar from '../Nav/Nav';
import config from '../config';

class SchoolMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
            school: {}
        }
    };

    static defaultProps = {
        onDeleteSchool: () => { },
        history: {
            push: () => { }
        },
        match: {
            params: {}
        }
    };

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
    };

    // find player by id to set state
    findPlayers = (key) => {
        const playerInfo = this.context.playerInfo
        const players = Object.values(playerInfo).filter(player => player.schoolid === Number(key))
        return players
    };

    // find school by id to set state
    findSchool = (key) => {
        const schools = this.context.schools
        const school = schools.find(school => school.id === Number(key))
        console.log(school)
        return school
    };

    renderPlayers() {
        return (
            Object.values(this.state.school).map(player =>
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
    };
    // console.log('mounted')
    // const id = this.props.match.params.id
    // this.setState({
    // players: this.findPlayers(id),
    // school: this.findSchool(id)
    // }, () => { console.log(this.state.school, this.state.players) }
    // )

    componentDidMount() {
        let id = this.props.match.params.id
        fetch(`${config.API_ENDPOINT}/school/${id}`)
            .then((schoolRes) => {
                if (!schoolRes.ok)
                    return schoolRes.json().then(e => Promise.reject(e));
                return schoolRes.json()
            })
            .then((school) => {
                this.setState({
                    school: school
                }, () => { console.log(this.state.school) })
            })
            .catch(error => {
                console.log(error)
            })
    };


    render() {
        console.log(this.state)
        return (


            <div className='school-main'>
                <NavBar history={this.props.history} />
                <header role="banner">
                    <h1>{this.state.school.schoolname}</h1>
                </header>
                <h2 className='select-head'>Select a recruit</h2>
                <section className="recruits">

                    <ul className="recruit-list">
                        {this.state.school.length && this.renderPlayers()}
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
        )
    }
};



export default SchoolMain;