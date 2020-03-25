import SchoolMain from './SchoolMain/SchoolMain';
import PlayerInfo from './PlayerInfo/PlayerInfo'
import AddPlayer from './AddPlayer/AddPlayer'
import AddSchool from './AddSchool/AddSchool'

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