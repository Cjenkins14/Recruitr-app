import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import PlayerContact from './PlayerContact';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <PlayerContact />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})