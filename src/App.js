import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './Landing/Landing';
import Login from './Login/Login';
import Main from './Main/Main';
import SchoolMain from './SchoolMain/SchoolMain';
import PlayerInfo from './PlayerInfo/PlayerInfo'
import AddPlayer from './AddPlayer/AddPlayer'
import AddSchool from './AddSchool/AddSchool'
import ApiContext from './ApiContext'
import config from './config'

class App extends Component {
    state = {
        school: [],
        playerInfo: []
    };

    componentDidMount() {
        Promise.all([
            fetch(`${config.API_ENDPOINT}/school`),
            fetch(`${config.API_ENDPOINT}/player`)
        ])
            .then(([schoolRes, playerRes]) => {
                if (!schoolRes.ok)
                    return schoolRes.json().then(e => Promise.reject(e))
                if (!playerRes.ok)
                    return playerRes.json().then(e => Promise.reject(e))

                return Promise.all([
                    schoolRes.json(),
                    playerRes.json()
                ])
            })
            .then(([schools, players]) => {
                this.setState({
                    school: schools,
                    playerInfo: players
                })
            })
            .catch(error => {
                console.log(error)
            })

    }

    handleNewSchool = (newSchool) => {
        this.setState({
            school:
                [...this.state.school,
                    newSchool]
        })
        console.log(this.state.school)
    }
    handleNewPlayer = (newPlayer) => {
        this.setState({
            playerInfo: [
                ...this.state.playerInfo,
                newPlayer
            ]

        }, console.log(this.state))
    }
    handleDeletePlayer = (playerId) => {
        this.setState({
            playerInfo: this.state.playerInfo.filter(player => player.playerid !== playerId)
        })
    }
    handleDeleteSchool = schoolId => {
        this.setState({
            school: this.state.school.filter(school => school.id !== schoolId)
        }, () => { console.log(this.state.school) })
    }


    render() {
        const value = {
            schools: this.state.school,
            playerInfo: this.state.playerInfo,
            handleNewPlayer: this.handleNewPlayer,
            handleNewSchool: this.handleNewSchool,
            handleDeletePlayer: this.handleDeletePlayer,
            deleteSchool: this.handleDeleteSchool,
        }
        return (
            <ApiContext.Provider value={value}>
                <div className='App'>
                    <Route
                        exact path='/'
                        component={Landing} />
                    <Route
                        path='/login'
                        component={Login} />
                    <Route
                        path='/main'
                        component={Main} />
                    <Route
                        path='/schoolmain/:id'
                        component={SchoolMain} />
                    <Route
                        path='/player/:id'
                        component={PlayerInfo} />
                    <Route
                        path='/addplayer'
                        component={AddPlayer} />
                    <Route
                        path='/addschool'
                        component={AddSchool} />
                </div>
            </ApiContext.Provider>
        )
    }
}


export default App;