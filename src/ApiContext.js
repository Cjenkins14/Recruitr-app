import React from 'react'

export default React.createContext({
    schools: [],
    playerInfo: [],
    addPlayer: () => { },
    handleNewSchool: () => { },
    deletePlayer: () => { },
    deleteSchool: () => { },
    handlePlayerUpdate: () => { }
})