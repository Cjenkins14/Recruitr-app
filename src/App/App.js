import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Main from '../Main/Main';
import SchoolMain from '../SchoolMain/SchoolMain';
import PlayerInfo from '../PlayerInfo/PlayerInfo'
import AddPlayer from '../AddPlayer/AddPlayer'
import AddSchool from '../AddSchool/AddSchool'
import EditPlayer from '../EditPlayer/EditPlayer'
import ApiContext from '../ApiContext'
import config from '../config'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            school: [],
            playerInfo: []
        }
    }



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
                console.log(schools, players)
                this.setState({
                    school: schools,
                    playerInfo: players
                }, () => { console.log(this.state, this.ApiContext) })
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
            playerInfo: this.state.playerInfo.filter(player => player.playerid !== Number(playerId))
        })
    }
    handleDeleteSchool = schoolId => {
        console.log(typeof schoolId)
        console.log(this.state.school)
        this.setState({
            school: this.state.school.filter(school => school.id !== Number(schoolId))
        }, () => { console.log(this.state.school) })
    }
    handlePlayerUpdate = (update, id) => {
        let updatedPlayer = update.find(player => player.playerid === Number(id));
        let newPlayers = this.state.playerInfo.map(player => {
            if (player.playerid !== Number(id)) {
                return player;
            } else {
                return updatedPlayer;
            }
        });

        this.setState({
            playerInfo: newPlayers
        });
    }


    render() {
        const value = {
            schools: this.state.school,
            playerInfo: this.state.playerInfo,
            handleNewPlayer: this.handleNewPlayer,
            handleNewSchool: this.handleNewSchool,
            deletePlayer: this.handleDeletePlayer,
            deleteSchool: this.handleDeleteSchool,
            handlePlayerUpdate: this.handlePlayerUpdate
        }
        console.log(value)
        return (
            <ApiContext.Provider value={value}>
                <div className='App'>
                    <Route
                        exact path='/'
                        component={Landing} />
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
                    <Route
                        path='/editplayer/:id'
                        component={EditPlayer} />
                </div>
            </ApiContext.Provider>
        )
    }
}


export default App;