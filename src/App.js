import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { contact, school, playerStats, players } from './STORE'
import Landing from './Landing/Landing';
import Login from './Login/Login';
import Main from './Main/Main';
import SchoolMain from './SchoolMain/SchoolMain';
import PlayerInfo from './PlayerInfo/PlayerInfo'
import AddPlayer from './AddPlayer/AddPlayer'
import AddSchool from './AddSchool/AddSchool'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            school: school,
            contact: contact,
            playerStat: playerStats,
            players: players,
        }
    }

    handleNewSchool = (newSchool) => {
        this.setState({
            school:
                [...this.state.school,
                    newSchool]
        })
        console.log(this.state.school)
    }
    handleNewPlayer = (newPlayer, newContact, newPlayerStats) => {
        this.setState({
            players: [
                ...this.state.players,
                newPlayer
            ],
            contact: [
                ...this.state.contact,
                newContact
            ],
            playerStat: [
                ...this.state.playerStat,
                newPlayerStats
            ],

        }, console.log(this.state))

    }


    render() {

        return (
            <main className='App'>
                <Route exact path='/' component={Landing} />
                <Route path='/login' component={Login} />
                <Route path='/main'
                    render={(props) => <Main {...props}
                        schools={this.state.school} />} />
                <Route path='/schoolmain/:id'
                    render={(props) => <SchoolMain  {...props}
                        school={this.state.school}
                        players={this.state.players} />} />
                <Route path='/player/:id'
                    render={(props) => <PlayerInfo {...props}
                        contact={this.state.contact}
                        pitchStats={this.state.pitchStat}
                        playerStats={this.state.playerStat} />} />
                <Route path='/addplayer'
                    render={(props) => <AddPlayer {...props}
                        school={this.state.school}
                        handleNewPlayer={this.handleNewPlayer}
                        component={AddPlayer} />} />
                <Route path='/addschool'
                    render={(props) => <AddSchool {...props}
                        handleNewSchool={this.handleNewSchool}
                        component={AddSchool} />} />
            </main>
        )
    }
}


export default App;