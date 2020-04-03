import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import PlayerInfo from './PlayerInfo';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <PlayerInfo />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})