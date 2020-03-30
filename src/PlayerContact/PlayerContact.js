import React from 'react'



export default function renderPlayerInfo(info) {
    const createDate = () => {
        if (info.date == null) {
            return null
        } else {
            let oldDate = new Date(info.date)
            let newDate = oldDate.toISOString().slice(0, 10)
            return newDate
        }
    }
    const dateSeen = createDate()

    return (
        <ul className='info-list'>
            <li >
                Grad Year: {info.graddate}
            </li>
            <li >
                Position: {info.position}
            </li>
            <li >
                Bat/Throw: {info.batthrow}
            </li>
            <li >
                Date seen: {dateSeen}
            </li>
            <li >
                Phone: {info.phone}
            </li>

        </ul>
    )
}