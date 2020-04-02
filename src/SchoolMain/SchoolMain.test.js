import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SchoolMain from './SchoolMain';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <SchoolMain />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})