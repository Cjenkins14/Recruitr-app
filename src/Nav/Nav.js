import React, { Component } from 'react'
import {
    Navbar,
    NavLink,
    NavItem,

} from 'reactstrap'
import './Nav.css'

class NavBar extends Component {


    render() {
        return (
            <Navbar color='light'>
                <NavItem>
                    <NavLink href='/main'>Recruitr</NavLink>
                </NavItem>
            </Navbar>
        )
    }
}

export default NavBar;