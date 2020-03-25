import React from 'react'

export default React.createContext({
    schools: [],
    playerInfo: [],
    addPlayer: () => { },
    addSchool: () => { },
    deletePlayer: () => { },
    deleteSchool: () => { },
    editPlayer: () => { }
})