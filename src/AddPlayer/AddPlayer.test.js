import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddPlayer from './AddPlayer';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <AddPlayer />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})