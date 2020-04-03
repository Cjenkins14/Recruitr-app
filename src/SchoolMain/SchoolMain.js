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
                })
            })
            .catch(error => {
                console.log(error)
            })
    };


    render() {
        return (
            <div className='school-main'>
                <NavBar history={this.props.history} />
                <header role="banner">
                    <h1>{this.state.school.schoolname}</h1>
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
        )
    }
};



export default SchoolMain;