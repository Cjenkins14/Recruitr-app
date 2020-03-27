import React, { Component } from 'react'
import {
    Navbar,
    NavLink,
    NavItem,

} from 'reactstrap'
import './Nav.css'

class NavBar extends Component {
    constructor(props) {
        super(props)
    }

    goBack = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <Navbar color='light'>
                <NavItem>
                    <NavLink href='/main'>Recruitr</NavLink>
                </NavItem>
                <NavItem onClick={this.goBack}>Go back</NavItem>
            </Navbar>
        )
    }
}

export default NavBar;