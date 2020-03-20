
const school = [
    {
        id: 1,
        name: 'Hall of fame',
    },
    {
        id: 2,
        name: 'DHS'
    },
    {
        id: 3,
        name: 'RHS'
    },
    {
        id: 4,
        name: 'GHS'
    }
]
const contact = [
    {
        playerId: 1,
        name: 'Babe Ruth',
        gradDate: 1913,
        position: 'Center field',
        batThrow: 'Bat',
        date: new Date().toDateString(),
        phone: 972 - 555 - 1111,
        url: 'https://www.youtube.com/watch?v=7WfVREOHaAk'
    },
    {
        playerId: 2,
        name: 'Jackie Robinson',
        gradDate: 1920,
        position: 'Center field',
        batThrow: 'Bat',
        date: new Date().toDateString(),
        phone: 972 - 555 - 1111,
        url: 'https://www.youtube.com/watch?v=7WfVREOHaAk'

    },
    {
        playerId: 3,
        name: 'Lou Gherig',
        gradDate: 1930,
        position: 'Center field',
        batThrow: 'Bat',
        date: new Date().toDateString(),
        phone: 972 - 555 - 1111,
        url: 'https://www.youtube.com/watch?v=7WfVREOHaAk'
    },
    {
        playerId: 4,
        name: 'Derek Jeter',
        gradDate: 1980,
        position: 'Center field',
        batThrow: 'Bat',
        date: new Date().toDateString(),
        phone: 972 - 555 - 1111,
        url: 'https://www.youtube.com/watch?v=7WfVREOHaAk'
    }
]
const playerStats = [
    {
        playerId: 1,
        dash60: 1,
        plateToFirst: 1,
        turnTime: 1,
        exitVelo: 1,
        popTime: 1,
        notes: 'Babe Ruth'
    },
    {
        playerId: 2,
        dash60: 2,
        plateToFirst: 2,
        turnTime: 2,
        exitVelo: 2,
        popTime: 2,
        notes: 'Lou Gherig'
    },
    {
        playerId: 3,
        dash60: 3,
        plateToFirst: 3,
        turnTime: 3,
        exitVelo: 3,
        popTime: 3,
        notes: 'Jackie Robinson'
    },
    {
        playerId: 4,
        dash60: 4,
        plateToFirst: 4,
        turnTime: 4,
        exitVelo: 4,
        popTime: 4,
        notes: 'Derek Jeter'
    }
]




const players = [
    {
        name: 'Babe Ruth',
        id: 1,
        schoolId: 1
    },
    {
        name: 'Lou Gherig',
        id: 2,
        schoolId: 2
    },
    {
        name: 'Jackie Robinson',
        id: 3,
        schoolId: 3
    },
    {
        name: 'Derek Jeter',
        id: 4,
        schoolId: 4
    }

]

export { players, school, contact, playerStats }
