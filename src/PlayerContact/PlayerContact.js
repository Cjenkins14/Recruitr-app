import React from 'react'



export default function renderPlayerInfo(info) {
    console.log(info)

    return (
        <ul className='info-list'>
            <li >
                Grad Date: {info.graddate}
            </li>
            <li >
                Position: {info.position}
            </li>
            <li >
                Bat/Throw: {info.batthrow}
            </li>
            <li >
                Date seen: {info.date}
            </li>
            <li >
                Phone: {info.phone}
            </li>

        </ul>
    )
}