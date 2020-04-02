import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import EditPlayer from './EditPlayer';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <EditPlayer />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})